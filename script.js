/*
  [v3.2 통합 대시보드 - 고양이]
  - UI 개선: 수술 과정 탭의 UI를 강아지 차트의 타임라인 스타일로 전면 교체하여 가독성 향상
  - 데이터 업데이트: 신경/보존 치료 탭의 치주 치료 비용을 최신화
  - 계산기 관련 기능 제외
*/
document.addEventListener('DOMContentLoaded', () => {
    const hospitalData = {
      "main": {
        "headerTitle": "💖 치과 특화 금호동물병원 💖",
        "headerSubtitle": "🦷 우리 아이들의 건강한 미소를 지켜주는 곳 🦷",
        "contact": { "phone": "062-383-7572" },
        "hours": {
          "title": "⏰ 진료시간 & 수술 안내",
          "surgeryNotice": "* 우리 아이들의 치과 수술에 최선을 다하고 회복에 힘쓰기 위해서 치과 수술은 매일 평일 오전 9시30분 한 아이씩만 진행됨을 양해 부탁 드립니다.",
          "times": [
            { "day": "평일", "time": "오전 9:30 ~ 오후 6:00" },
            { "day": "토요일", "time": "오전 9:30 ~ 오후 3:00" },
            { "day": "점심시간", "time": "오후 12:30 ~ 2:00 (평일, 토요일 동일)", "highlight": true },
            { "day": "휴무", "time": "빨간날은 쉬어요! (공휴일 휴무)", "isHoliday": true }
          ]
        },
        "parking": {
          "title": "🅿️ 주차 안내 (무료!)",
          "content": [
            { "label": "오전", "desc": "널널해요! 😊" },
            { "label": "오후", "desc": "자리가 없을 수도 있어요 😥" },
            { "label": "꿀팁🍯", "desc": "주차타워는 거의 항상 비어있어요! (다들 귀찮아서 주차를 안해요... 속닥속닥)", "highlight": true }
          ]
        },
        "pride": {
          "title": "✨ 고양이 치과, 왜 금호동물병원일까요? 🐈‍⬛",
          "points": [
            { "title": "최신 전문 장비 완비! 빵빵해요! 🚀", "items": [ "📸 <strong>치아 전용 X-ray (최신 덴츠플라이 센서):</strong> 최상의 화질을 자랑하는 최신 덴츠플라이 센서로 정확하게 진단해요.", "💎 <strong>브러쉬리스 모터 덴탈 유닛:</strong> 속도 조절이 가능해서 훨씬 정교하고 섬세한 치료가 가능해요.", "💧 <strong>피에조톰 수술기:</strong> 사람 성형외과 & 치과 대학병원에서 쓰는 장비로, 뼈 손상을 최소화하여 안전한 수술을 진행해요.", "🌬️ <strong>최신 호흡마취기:</strong> Ai가 아이의 호흡을 자동으로 감지하고 관리해 무호흡 상태를 방지하며 안전한 마취를 도와줘요.", "❤️‍🩹 <strong>최신호흡마취기와 연동되는 페이션트 모니터:</strong> 혈압, 심전도, 체온 등 모든 활력 징후를 마취기와 연동하여 실시간으로 감시하며 안전하게 수술해요.", "🔥 <strong>수의용 베어허거:</strong> 저온화상의 위험 없이 마취 중 아이의 체온을 가장 안전하게 유지하는 최신 체온 조절 장치예요.", "📡 <strong>광주 전남 최초 동물용 치과 CT 검사기 도입 예정:</strong> 더욱 정밀한 진단과 치료를 위해, 곧 만나요!" ] },
            { "title": "고양이 치과 진료, 경험치 MAX! 💪", "items": [ "❤️‍🩹 고양이 전발치 & 만성 구내염 치료", "💔 고양이 치아흡수 병변(FORL) 치료", "🦷 신경치료 & 치주치료 & VPT(신경보존)", "<br>이처럼 다양한 고난도 치료 케이스들은 <a href='https://blog.naver.com/kumhoanimal' target='_blank' style='color:#0277bd; font-weight:bold;'>병원 블로그</a>에서 직접 확인하실 수 있어요!" ] }
          ]
        },
        "notice": {
          "title": "🦷 꼭 읽어주세요! 안전한 치과 수술을 위한 안내 🦷",
          "items": [
            { "type": "text", "content": "<strong>치과 치료(수술)비는 예측이 힘들어요.</strong><br>사람과 달리 아이들은 입 안을 자세히 보여주지 않아요. 겉으로 보이는 것만으로는 치아 뿌리의 상태나 숨겨진 질병을 정확히 알 수 없습니다. 안전하게 마취한 후 치과 전용 엑스레이를 찍고 정밀 탐침 검사까지 마쳐야 비로소 아이의 구강 상태를 100% 파악할 수 있답니다. 따라서, 정확한 예상비용을 알려드릴 수 없는점, 너그러이 양해 부탁드립니다." },
            { "type": "text", "content": "<strong>장시간 마취의 위험성을 이해해주세요.</strong><br>치과 치료는 정교함을 요하는 작업이라 생각보다 시간이 오래 걸립니다. 기본적인 엑스레이 검사와 스케일링만으로도 중성화 수술과 비슷한 시간이 소요되며, 발치나 신경치료 등 추가 시술이 들어가면 마취 시간은 더 길어질 수밖에 없습니다. 치과 시술 자체는 위험성이 낮지만, 마취 시간이 길어지는 만큼 일반 수술보다 마취의 부담이나 위험은 더 높을 수 있습니다." },
            { "type": "text", "content": "<strong>안전을 위해, 수술 전 병원 방문은 필수예요.</strong><br>위와 같은 이유로, 아이의 안전을 위해 마취 전 검사는 선택이 아닌 필수입니다. 전화상으로 바로 수술 예약을 잡을 수는 없으며, 반드시 병원에 먼저 내원하시어 구강 상태 평가 및 건강검진(마취 전 검사)을 받아야 합니다. 검사 결과를 바탕으로 마취 위험성을 평가하고, 보호자님과 충분히 상의한 후에 안전하게 수술 날짜를 잡고 있습니다." },
            { "type": "sublist", "main": "<strong>부득이한 경우, 타병원 검사 결과도 인정해드려요.</strong><br>시간이나 거리 문제로 본원에서 검사가 힘든 경우, 타병원에서 검사를 진행하고 결과를 보내주셔도 좋습니다. 될수 있으면 아래 항목이 포함된 1개월 이내의 검사 결과여야만 수술 가능 여부를 판단에 도움이 됩니다.", "sublist": [ "간과 신장 기능 수치 (혈액화학검사)", "안전한 기관 삽관을 위한 기관 사이즈 평가", "혈압 이상 유무", "흉부 엑스레이 검사", "키트검사 : proBNP 키트검사(심장병) & FeLV(백혈병) & FIV(면역부전) 바이러스 검사" ] },
            { "type": "text", "content": "<strong>보호자님의 치료 의사를 미리 알려주세요.</strong><br>겉으로는 멀쩡해 보여도 검사 후에 치료가 필요한 치아가 발견될 수 있습니다. 만약 이런 치아가 발견되었을 때, 보호자님께 연락하여 동의를 구한 후 치료를 할지, 혹은 즉시 필요한 치료를 진행할지, 아니면 그냥 스케일링 만을 진행할지 를 마취 전에 꼭 저희에게 알려주셔야 합니다. 아이를 위한 최선의 결정을 함께 할 수 있도록 미리 소통해주세요!" }
          ]
        },
        "footer": { "title": "🚀 빠른 상담 & 예약 🚀", "kakaoLink": "https://pf.kakao.com/_jiICK/chat", "telLink": "tel:062-383-7572" }
      },
      "procedure": [
          { "step": "1", "title": "입원 및 수액 처치", "content": "<strong>🏥 안전한 마취와 빠른 회복 준비</strong><br>수술 전 충분한 수액을 맞으며 몸의 수분과 전해질 균형을 맞추고, 산소방에서 편안하게 산소를 공급받으며 최상의 컨디션으로 수술을 준비합니다." },
          { "step": "2", "title": "마취 및 치과 검사", "content": "<strong>😴 안전한 호흡마취</strong><br>아이의 상태에 맞는 마취 프로토콜을 적용하여 안전하게 마취를 유도하고, 가장 안정적인 호흡마취로 전환합니다. 수술 내내 최신 모니터링 장비로 모든 활력 징후를 1:1로 집중 감시합니다.<br><br><strong>📸 전체 치과 방사선 검사</strong><br>눈으로 보이지 않는 치아 뿌리, 잇몸뼈(치조골)의 숨겨진 질병까지 정확히 진단하기 위해 모든 치아에 대한 방사선 촬영을 진행합니다." },
          { "step": "3", "title": "정밀 구강 검사 및 치료", "content": "<strong>🔎 치주 탐침 검사 (프로빙)</strong><br>방사선 사진을 바탕으로 치아 하나하나의 치주낭 깊이, 출혈, 흔들림 등을 정밀하게 검사하여 치료 계획을 최종 확정합니다.<br><br><strong>🦷 맞춤형 치과 치료</strong><br>스케일링과 폴리싱을 기본으로, 검사 결과에 따라 발치, 신경치료, 잇몸치료 등 보호자님과 상의된 맞춤 치료를 진행합니다." },
          { "step": "4", "title": "회복 및 퇴원", "content": "<strong>💖 세심한 회복 케어</strong><br>모든 치료가 끝나면, 전담 스텝이 아이가 완전히 의식을 회복하고 안정될 때까지 곁에서 세심하게 돌봅니다.<br><br><strong>🏡 귀가 및 홈케어 안내</strong><br>아이가 충분히 회복되면 보호자님께 연락을 드립니다. 퇴원 시 수술 후 주의사항과 홈케어 방법을 자세히 안내해 드립니다." },
          { "step": "5", "title": "수술 후 검진 (리체크)", "content": "<strong>👩‍⚕️ 예후 확인</strong><br>발치나 잇몸 수술을 한 경우, 보통 1~2주 뒤에 내원하여 수술 부위가 잘 아물고 있는지 확인하는 검진(리체크)을 받게 됩니다. 건강한 구강 상태를 오래 유지하기 위한 마지막 단계입니다." }
      ],
      "healthCheck": { "headerTitle": "🩺✨ 우리 냥이 맞춤! 안심 건강검진 ✨🩺", "headerSubtitle": "💖 안전한 마취를 위한 첫걸음! 🌈 연령별 맞춤 플랜을 확인하세요! 💖", "youtubeLink": "https://www.youtube.com/watch?v=-EjT1oZrvJA", "preNotice": { "title": "병원 방문 전, 보호자님 필독! 📢", "content": "혹시 우리 아이가 많이 예민하거나 긴장을 많이 하나요? 😿 그렇다면 내원하시기 전에 미리 병원에 연락주셔서 **안정제(가바펜틴 등)를 처방**받아 방문 2~3시간 전에 복용하고 오시는 것을 강력히 추천드려요! 아이의 스트레스를 크게 줄여줄 수 있어, 아이와 의료진 모두에게 훨씬 편안하고 안전한 검사 환경이 만들어진답니다. **특히 예민하거나 사나운 성격의 고양이라면 선택이 아닌 필수**라는 점, 꼭 기억해주세요! 🙏" }, "packages": [ { "borderColor": "#4db6ac", "titleColor": "#00796b", "title": "🍼 아깽이 기본 플랜 🍼", "items": [ "🩸 혈구검사 <small>빈혈, 염증, 혈소판</small>", "🧪 혈액 화학 검사 (7종) <small>간, 콩팥, 혈당 등</small>", "⚡️ 전해질 검사 <small>몸 속 수분 밸런스</small>", "🩻 흉부 X-RAY (3컷) <small>심장, 폐 모양</small>", "🩺 혈압 체크 <small>기본 순환기 상태</small>" ], "originalPrice": 244600, "discountPrice": 160000 }, { "borderColor": "#ffd54f", "titleColor": "#f9a825", "title": "💖 아깽이 안심+ 플랜 💖", "items": [ "🩸 혈구검사", "🧪 혈액 화학 검사 (7종)", "⚡️ 전해질 검사", "🩻 흉부 X-RAY (3컷)", "🩺 혈압 체크", "❤️ proBNP 키트 <small>숨어있는 심장병 조기 진단!</small>" ], "originalPrice": 299600, "discountPrice": 199000 }, { "borderColor": "#ff8a65", "titleColor": "#d84315", "title": "💪 7세 미만 으른냥 플랜 💪", "items": [ "🩸 혈구 & 화학검사 (12종)", "🔥 SAA <small>몸 속 급성 염증 정밀 체크</small>", "🩻 X-RAY (흉부3+복부2)", "🩺 혈압 체크", "❤️ proBNP 키트", "🦠 전염병 키트 <small>사상충+백혈병+면역결핍</small>" ], "originalPrice": 428600, "discountPrice": 299000 }, { "borderColor": "#ba68c8", "titleColor": "#7b1fa2", "title": "👑 7세+ 어르신냥 VIP 플랜 👑", "items": [ "🩸 혈구 & 화학검사 (12종)", "🔥 SAA", "🩺 혈압 체크", "❤️ proBNP 키트", "🦠 전염병 키트", "🦋 SDMA & T4 <small>신장/갑상선 정밀 평가</small>", "🐾 fPL 키트 <small>췌장염 수치 체크</small>", "🩻 X-RAY (흉부3+복부2)" ], "originalPrice": 583600, "discountPrice": 449000 } ], "explanation": { "title": "💡 마취 전 건강검진, 왜 꼭 필요할까요? 💡", "content": [ "전신 마취는 마치 <strong>'비행기 여행 ✈️'</strong>과 같아요. 여행 전에 <strong>날씨를 꼭! 체크 🌤️</strong>하는 것처럼, 마취 전 건강검진은 우리 아이의 몸 상태를 미리 확인해서 가장 안전한 여행(마취) 계획을 세우는 과정이랍니다.", "겉으로는 보이지 않는 장기의 이상이나 숨겨진 질병을 미리 발견해서, 마취 중 발생할 수 있는 위험을 최소화하고 <strong>우리 냥이에게 가장 안전한 방법을 찾기 위한 💖사랑의 과정💖</strong>이에요.", "<br>🚨 <strong>심장 관련 추가 검사 안내</strong><br>만약 검사 중 proBNP 키트에서 양성 반응이 나오거나, 심잡음이 들리거나, 엑스레이에서 심장 크기가 커 보이는 등 심장병이 의심되는 소견이 있을 경우, 보다 정밀한 심근 손상 수치 확인을 위해 <strong>TNI 검사(비용: 55,000원)</strong>가 추가될 수 있습니다. 이는 더 안전한 마취를 위한 필수 과정이오니 보호자님의 깊은 양해를 부탁드립니다." ] } },
      "scaling": { "headerTitle": "🦷✨ 우리 냥냥이 반짝반짝 스케일링 ✨🦷", "headerSubtitle": "💖 사랑과 정성을 담아! 🌈 화려한 혜택가로 안내합니다! 💖", "preNotice": { "title": "더 안전한 마취를 위한 꿀팁! 🍯", "content": "수술 당일, 아이가 병원으로 이동하고 낯선 환경에 적응하는 동안 불안감을 느끼면 스트레스 호르몬이 분비될 수 있어요. 😥 이 스트레스는 마취에 영향을 줄 수 있답니다. 만약 내원 전에 미리 **안정제를 처방받아 먹이고 오시면, 아이의 긴장이 완화되어 더 적은 용량의 마취제로도 안정적인 마취가 가능**해져요. 이는 곧 우리 아이의 마취가 한층 더 안전해진다는 의미! ✨ 더 편안하고 안전한 치료를 위한 작은 배려, 함께해요! 🥰" }, "packages": [ { "borderColor": "#ff7eb9", "titleColor": "#ff7eb9", "title": "🐱 5kg 미만 냥이 🐱", "items": [ "💧 술 전 산소 처치", "💧 술 전 수액 처치", "💉 도입 마취(프로포폴)", "😴 호흡 마취 Isoflurane <small>(마무리까지)</small>", "📸 전체 치과 X-ray <small>(10장 이상 꼼꼼 촬영!)</small>", "🧼 스케일링", "💎 폴리싱 – Airflow 시술 <small>(반짝반짝 광택 마무리!)" ], "originalPrice": 512000, "discountPrice": 239000 }, { "borderColor": "#ffc107", "titleColor": "#ffc107", "title": "🐈 5kg ~ 10kg 미만 냥이 🐈", "items": [ "💧 술 전 산소 처치", "💧 술 전 수액 처치", "💉 도입 마취(프로포폴)", "😴 호흡 마취 Isoflurane <small>(마무리까지)</small>", "📸 전체 치과 X-ray <small>(10장 이상 꼼꼼 촬영!)</small>", "🧼 스케일링", "💎 폴리싱 – Airflow 시술 <small>(반짝반짝 광택 마무리!)" ], "originalPrice": 603000, "discountPrice": 299000 }, { "borderColor": "#20c997", "titleColor": "#20c997", "title": "🐈‍⬛ 10kg ~ 15kg 미만 냥이 🐈‍⬛", "items": [ "💧 술 전 산소 처치", "💧 술 전 수액 처치", "💉 도입 마취(프로포폴)", "😴 호흡 마취 Isoflurane <small>(마무리까지)</small>", "📸 전체 치과 X-ray <small>(10장 이상 꼼꼼 촬영!)</small>", "🧼 스케일링", "💎 폴리싱 – Airflow 시술 <small>(반짝반짝 광택 마무리!)" ], "originalPrice": 704000, "discountPrice": 389000 } ], "explanation": { "title": "💡 필독! 혜택 적용 비용 안내 💡", "content": [ "저희 금호동물병원에서는 아이의 <strong>안전을 💖최우선💖</strong>으로 생각해요. 그래서 최근 <strong>✅ 저희 병원에서 직접 마취 전 혈액검사</strong>를 진행해서, 아이의 건강 상태를 저희 의료진이 완벽하게 파악하고 있는 경우! 감사의 마음을 담아 <strong>👑혜택가👑</strong>를 적용해 드리고 있답니다.", "다른 병원에서 검사를 받으셨거나 사정상 검사를 못 하셨어도 괜찮아요! 물론 안전한 치과 치료가 가능합니다. 다만, 외부 데이터를 다시 검토하고 저희 시스템에 맞게 적용하는 과정이 필요해서 정상 비용으로 진행되는 점(타병원 검사 시 10만원 추가), 보호자님의 너른 양해를 부탁드려요. 🙏", "<strong>🚨 잠깐!</strong> 안내된 비용은 스케일링과 기본 처치 비용이에요. 아이의 구강 상태에 따라 발치, 신경치료, 약 처방 등 추가 치료가 필요할 수 있어요. 이 경우, 꼭! <strong>보호자님과 충분히 상의 후 진행</strong>하니 걱정 마세요! 😉" ] } },
      "surgery": { "headerTitle": "🦷😿 우리 냥이 아픈 치아 수술 비용 😿🦷", "headerSubtitle": "❤️ 아이의 고통을 덜어주는 치료 비용을 투명하게 안내해요 ❤️", "costs": [ { "id": "card-basic-extraction", "borderColor": "#a5d8ff", "titleColor": "#1971c2", "title": "🦷 기본 발치", "description": "잇몸병으로 인해 이미 많이 흔들리는 치아를 잇몸 절개 없이 제거합니다.", "prices": [{ "label": "🦷 뿌리 1개", "value": 22000 }, { "label": "🦷 뿌리 2개", "value": 66000 }, { "label": "🦷 고양이 대구치(M1)", "value": 88000 }] }, { "id": "card-surgical-extraction", "borderColor": "#ffc078", "titleColor": "#d9480f", "title": "💪 수술 발치", "description": "아직 단단히 박혀있는 치아를 잇몸 절개 및 봉합을 통해 안전하게 제거하는 전문적인 수술입니다.", "prices": [{ "label": "🔪 뿌리 1개", "value": 44000 }, { "label": "🔪 뿌리 2개", "value": 120000 }, { "label": "🔪 고양이 대구치(M1)", "value": 165000 }, { "label": "🔪 열육치(PM4)", "value": 220000 }] }, { "id": "card-canine-extraction", "borderColor": "#4dd0e1", "titleColor": "#00838f", "title": "😼 송곳니 수술 발치", "description": "길고 튼튼한 송곳니는 정교한 수술적 접근이 필요합니다. 턱 구조에 따라 난이도가 달라집니다.", "prices": [{ "label": "😼 상악 (위턱) 송곳니", "value": 220000 }, { "label": "😼 하악 (아래턱) 송곳니", "value": 270000 }] }, { "id": "card-deciduous-extraction", "borderColor": "#b39ddb", "titleColor": "#512da8", "title": "🍼 유치 발치", "description": "제때 빠지지 않고 남아 문제를 일으키는 유치를 제거합니다.", "prices": [{ "label": "🍼 일반 유치", "value": 22000 }, { "label": "🍼 유치 송곳니 (X-ray 포함)", "value": 33000 }, { "label": "🍼 유치 송곳니 (수술 발치)", "value": 66000 }] }, { "id": "card-forl-extraction", "borderColor": "#f06292", "titleColor": "#c2185b", "title": "💔 치아흡수병변(FORL) 발치", "description": "치아가 녹아내리는 병변으로, 상태에 따라 치관만 제거하거나 뿌리까지 모두 제거합니다.", "prices": [{ "label": "💔 치관 절제술", "value": 44000 }, { "label": "💔 흡수치근 제거 (1개)", "value": 88000 }, { "label": "💔 흡수치근 제거 (2개)", "value": 140000 }] }, { "id": "card-root-remains-extraction", "borderColor": "#9ccc65", "titleColor": "#558b2f", "title": "🔍 잔존치근 제거", "description": "과거 발치 후 남겨졌거나 부러진 치아의 뿌리를 찾아 제거하는 정밀한 수술입니다.", "prices": [{ "label": "🔍 뿌리 1개", "value": 77000 }, { "label": "🔍 뿌리 2개", "value": 120000 }, { "label": "🔍 송곳니 잔존치근", "value": "25~30만원" }] }, { "id": "card-etc-surgery", "borderColor": "#78909c", "titleColor": "#37474f", "title": "🛠️ 기타 수술 및 처치", "description": "잇몸 종양이나 낭종 제거, 조직검사 등 추가적인 외과적 처치입니다.", "prices": [{ "label": "🍑 잇몸 종양 제거 (<1cm)", "value": 110000 }, { "label": " cysts 제거술", "value": 280000 }, { "label": "🔬 조직검사 (1 site)", "value": 170000 }] } ], "explanation": { "title": "💡 꼭! 확인해주세요! '기본' vs '수술' 발치 💡", "content": [ "<strong>기본 발치 (쏙!) 😿</strong><br>잇몸병으로 치아가 이미 <strong>많이많이 흔들릴 때!</strong> 잇몸 절개 없이 쏙~ 뽑아요. (봉합이 필요하면 비용이 추가될 수 있어요!)", "<strong>수술 발치 (샥!) 💪</strong><br>치아 뿌리가 아직 <strong>잇몸뼈에 단단히 박혀있을 때!</strong> 잇몸을 열고 안전하게 조각내어 제거한 뒤, 꼼꼼하게 봉합까지 하는 전문적인 과정이에요." ] } },
      "addons": { "headerTitle": "💊 우리 냥이 회복을 돕는 케어 비용 💊", "headerSubtitle": "💖 아프지 않게, 더 빨리 나을 수 있도록! 사랑의 추가 처치 안내 💖", "costs": [ { "borderColor": "#ffa726", "titleColor": "#f57c00", "title": "😴 마취 관련 처치", "description": "수술이 길어지거나, 아이 상태에 따라 더 안전한 마취를 유지하기 위한 추가적인 관리 비용입니다.", "prices": [{ "label": "⏰ 마취 시간 연장 (1 시간)", "value": "90,000원~" }, { "label": "📍 국소 마취 (부위당)", "value": "10,000원~" }, { "label": "💉 알팍산 도입마취 변경", "value": "33,000원~" }] }, { "borderColor": "#ef5350", "titleColor": "#c62828", "title": "🪄 통증 관리 처치", "description": "수술 직후부터 집에 가서까지, 우리 냥이가 아프지 않도록 통증을 효과적으로 관리해주는 마법 같은 처치들이에요.", "prices": [{ "label": "❤️‍🩹 마약성 진통 주사", "value": "20,000원~" }, { "label": "🕒 24시간 지속 진통 주사", "value": "15,000원~" }, { "label": "🩹 마약성 진통 패치", "value": "40,000원~" }] }, { "borderColor": "#66bb6a", "titleColor": "#2e7d32", "title": "🚀 빠른 회복 부스터", "description": "감염 예방, 염증 완화, 세포 재생 촉진! 우리 냥이가 에너지를 되찾고 빨리 일상으로 돌아가도록 돕는 부스터 처치예요.", "prices": [{ "label": "💉 항생/소염 주사 (일반)", "value": "11,000원~" }, { "label": "🗓️ 항생 주사 (1주 지속)", "value": "15,000원~" }, { "label": "⚡️ 레이저 치료 (부위당)", "value": "20,000원~" }, { "label": "✨ 불소 도포", "value": "35,000원~" }] }, { "borderColor": "#26c6da", "titleColor": "#00838f", "title": "🏡 홈케어 용품", "description": "집에 가서도 집사님의 사랑으로 케어할 수 있도록! 안전과 회복을 위한 필수 아이템들이에요.", "prices": [{ "label": "💊 내복약 (3일분)", "value": 9900 }, { "label": "💊 내복약 (3일분/캡슐)", "value": 13200 }, { "label": "💊 내복약 (7일분)", "value": 23100 }, { "label": "💊 내복약 (7일분/캡슐)", "value": 28600 }, { "label": "💧 액상 진통제(1ml 당)", "value": "8,000원~" }, { "label": "칙- 구강 소독 스프레이", "value": 10000 }, { "label": "🧴 구강 항생/소염 연고", "value": 15000 }, {"label": "🌿 파라돈 겔", "value": 25000}, { "label": "🦠 구강 유산균", "value": 50000 }, { "label": "👑 넥카라", "value": "8,000원~" }] } ], "explanation": { "title": "💡 추가 처치는 왜 필요할까요? 🤔", "content": [ "우리 냥이들은 <strong>\"나 아파요😿\" 라고 말을 못하고 꾹~ 참는 습성</strong>이 있어요. 그래서 미리 통증을 관리해주는 건 아이의 고통을 덜어주는 <strong>가장 큰 사랑이자 배려</strong>랍니다.💖", "또, 항생제나 레이저, 소독 용품들은 수술 후 생길 수 있는 <strong>나쁜 균들을 막아주고 🦠 회복 속도를 높여서⚡️</strong> 아이가 빨리 캣타워로 점프! 할 수 있게 도와줘요!", "저희 병원은 아이의 상태를 꼼꼼히 살펴, <strong>정말 꼭! 필요한 처치만 골라서 보호자님과 상의</strong>드릴 것을 약속해요.🤙" ] } },
      "nerve": { 
          "headerTitle": "❤️‍🩹 신경 및 보존 치료 ❤️‍🩹", 
          "headerSubtitle": "무조건 뽑지 않아요! 💪 소중한 치아를 지켜주는 다양한 치료 안내", 
          "costs": [ 
              { "borderColor": "#ffc078", "titleColor": "#f76707", "title": "✨ 살아있는 신경 살리기! (VPT)", "description": "<strong>⏳ 48시간 골든타임! ⏳</strong><br>치아가 부러진 직후, 아직 신경이 살아있을 때만 가능해요! 오염된 신경만 살짝 걷어내고 🩹 특수 보호 약품으로 코팅해서 치아의 생명력을 지켜준답니다.<span style=\"display:block;font-size:.9em;color:#e64980;font-weight:700;margin-top:10px;text-align:center\">🚨 레진 충전 비용은 별도예요!</span>", "prices": [{ "label": "🦷 송곳니 기준", "value": 450000 }] }, 
              { "borderColor": "#ff87c2", "titleColor": "#c2255c", "title": "💔 아픈 신경 치료하기 (신경치료)", "description": "이미 신경이 죽었거나 🦠 세균에 감염되어 아야! 할 때 필요해요. 감염된 신경을 싹~ 제거하고 깨끗하게 소독한 뒤, 특수 재료로 채워서 통증의 원인을 없애고 치아는 보존해요.<span style=\"display:block;font-size:.9em;color:#e64980;font-weight:700;margin-top:10px;text-align:center\">🚨 레진 충전 비용은 별도예요!</span>", "prices": [{ "label": "🦷 송곳니 기준", "value": 770000 }] }, 
              { "borderColor": "#4dabf7", "titleColor": "#1c7ed6", "title": "🎨 예쁘게 때워주기 (레진 치료)", "description": "충치나 마모, 살짝 깨진 부위를 치아 색과 비슷한 예쁜 재료로 메워서, 원래 모양과 기능을 되찾아주는 치료예요! 손상 범위와 치아에 따라 비용이 달라져요.", "prices": [ { "label": "✨ 쪼꼬만 손상", "value": 55000 }, { "label": "🦷 송곳니", "value": 110000 } ] }, 
              { "borderColor": "#8ce99a", "titleColor": "#2f9e44", "title": "🌿 튼튼한 잇몸 만들기 (치주 치료)", "description": "잇몸병의 원인이 되는 세균막과 치석을 잇몸 속 깊은 곳까지 깨끗하게 제거하고, 잇몸 재생을 유도하는 전문적인 잇몸 관리입니다. (치아당 비용)", 
                "prices": [
                    { "label": "치근활택술", "value": 55000 },
                    { "label": "개방치근활택술(봉합)", "value": 240000 },
                    { "label": "미노클린(항생연고)", "value": 33000 },
                    { "label": "엠도게인(재생연고)", "value": 110000 },
                    { "label": "인공뼈 이식", "value": 250000 },
                    { "label": "차폐막", "value": 150000 },
                    { "label": "잇몸 성형", "value": 77000 },
                    { "label": "잇몸봉합", "value": 55000 }
                ]}
            ], 
            "explanation": { "title": "💡 '신경치료' vs '치주치료', 뭐가 다른가요? 🧐", "content": [ "보호자님들께서 가장 헷갈려하시는 두 가지 치료! 알기 쉽게 설명해 드릴게요. 😉", "<br><strong>❤️‍🩹 신경치료 (Endodontics)</strong><br>이것은 **'치아 🦷 내부'**의 문제예요. 치아가 부러지거나 깊은 충치가 생겨 치아 속 신경(치수)이 감염되고 죽었을 때, 이 감염된 신경을 제거하고 그 공간을 생체 친화적인 재료로 채워넣는 치료랍니다. 즉, **'치아 자체를 살리는'** 치료라고 할 수 있죠. 나무의 썩은 속을 파내고 튼튼하게 보강하는 것과 비슷해요! 💪", "<br><strong>🌿 치주치료 (Periodontics)</strong><br>이것은 **'치아 주변 🌳'**의 문제예요. 치아를 지지하는 잇몸과 잇몸뼈에 염증이 생긴 것(치주염)을 치료하는 거예요. 치아와 잇몸 사이 깊숙한 곳의 치석을 제거하고(치근활택술), 염증 조직을 긁어내고, 심한 경우 뼈이식을 통해 무너진 잇몸뼈를 재건하기도 합니다. **'치아의 기반을 튼튼하게 다지는'** 치료라고 생각하시면 돼요. 집의 약해진 땅을 단단하게 보강하는 공사와 같답니다! 🏠" ] } 
      }
    };

    try {
        populateAllTabs(hospitalData);
    } catch (error) {
        console.error('전체 탭 콘텐츠 처리 중 오류 발생:', error);
        alert('콘텐츠를 처리하는 데 실패했습니다. 코드에 문제가 없는지 확인해주세요.');
    }

    setupPageNavigation();
});

// ===================================================================================
// ============================= 탭 콘텐츠 생성 함수 =================================
// ===================================================================================
const formatPrice = (price, prefix = '💸 ') => {
    if (typeof price === 'number') { return `${prefix}${price.toLocaleString('ko-KR')}원`; }
    return `${price}`;
};

function populateAllTabs(data) {
    if (!data) return;
    // 1. 병원소개 탭
    if (data.main) {
        document.getElementById('main-header-title').innerHTML = data.main.headerTitle;
        document.getElementById('main-header-subtitle').innerHTML = data.main.headerSubtitle;
        const mainContent = document.getElementById('main-content-area');
        if (mainContent) {
            const hoursItemsHTML = data.main.hours.times.map(h => `<li style="${h.highlight ? 'color:#d81b60;font-weight:bold' : ''}${h.isHoliday ? 'color:red' : ''}"><strong>${h.day}:</strong> ${h.time}</li>`).join('');
            const prideItemsHTML = data.main.pride.points.map(p => `<div style="margin-bottom: 20px;"><strong style="font-size: 1.2em; color: #0277bd;">${p.title}</strong><ul style="list-style-type: '✔️ '; padding-left: 20px; margin-top: 10px;">${p.items.map(i => `<li style="margin-bottom: 8px;">${i}</li>`).join('')}</ul></div>`).join('');
            const noticeItemsHTML = data.main.notice.items.map(item => {
                if (item.type === 'text') return `<li>${item.content}</li>`;
                if (item.type === 'sublist') return `<li>${item.main}<ul class="sub-list">${item.sublist.map(subItem => `<li>${subItem}</li>`).join('')}</ul></li>`;
                return '';
            }).join('');
            const parkingItemsHTML = data.main.parking.content.map(p => `<li><strong ${p.highlight ? 'style="color:#d81b60;font-weight:bold"' : ''}>${p.label}:</strong> ${p.desc}</li>`).join('');
            mainContent.innerHTML = `<section class="info-section"><h2>🏥 병원 안내 🏥</h2><div class="info-grid"><div class="info-card" style="grid-column:1/-1; border-top:none;"><h3>${data.main.hours.title}</h3><p style="color:#d81b60; font-weight:bold; text-align:center;">${data.main.hours.surgeryNotice}</p><ul>${hoursItemsHTML}</ul></div></div></section><section class="pride-section" style="background:#e3f2fd; padding: 25px; border-radius: 20px; margin-top: 30px;"><h2 style="color:#0277bd">${data.main.pride.title}</h2>${prideItemsHTML}</section><section class="important-notice" style="margin-top: 30px;"><h2>${data.main.notice.title}</h2><ol>${noticeItemsHTML}</ol></section><section class="info-section" style="margin-top: 30px;"><div class="info-grid"><div class="info-card" style="grid-column:1/-1; border-top:none;"><h3>${data.main.parking.title}</h3><ul>${parkingItemsHTML}</ul><img src="https://raw.githubusercontent.com/ivomec/image/main/parking.png?raw=true" alt="주차장 안내" style="width: 100%; max-width: 800px; margin: 15px auto 0; display: block; border-radius: 10px;"></div></div></section><section class="info-section" style="margin-top: 30px;"><div class="info-grid"><div class="info-card" style="grid-column:1/-1; border-top:none; padding: 10px;"><h3>🗺️ 병원 오시는 길 🗺️</h3><p style="text-align:center; font-size:1.1em; font-weight:bold; margin-bottom:15px;">광주 서구 운천로 100, 1층 금호동물병원</p><img src="https://raw.githubusercontent.com/ivomec/image/main/map.jpg?raw=true" alt="병원 지도" style="width: 100%; border-radius: 15px;"></div></div></section>`;
            document.getElementById('main-footer').innerHTML = `<h2>${data.main.footer.title}</h2><a href="${data.main.footer.kakaoLink}" target="_blank" class="action-button kakao-btn">💬 카카오톡 채널로 상담하기</a><a href="${data.main.footer.telLink}" class="action-button tel-btn">📞 ${data.main.contact.phone}</a>`;
        }
    }
    // 2. 수술과정 탭
    if (data.procedure) {
        const timelineContainer = document.querySelector('#content-procedure .procedure-timeline');
        if (timelineContainer) {
            timelineContainer.innerHTML = data.procedure.map(item => `
                <div class="timeline-item" data-step="${item.step}">
                    <h3>${item.title}</h3>
                    <div class="timeline-content">${item.content}</div>
                </div>
            `).join('');
        }
    }
    // 3. 건강검진 탭
    if (data.healthCheck) {
        const d = data.healthCheck;
        document.getElementById('healthcheck-header-title').innerHTML = d.headerTitle;
        document.getElementById('healthcheck-header-subtitle').innerHTML = d.headerSubtitle;
        const healthCheckContent = document.getElementById('healthcheck-content-area');
        let contentHTML = `<a href="${d.youtubeLink}" target="_blank" class="action-button" style="background-color: #FF0000; margin-bottom: 25px;">🎥 마취 전 검사, 왜 중요할까?</a>`;
        if(d.preNotice) { contentHTML += `<div class="important-notice" id="healthcheck-pre-notice" style="border-left-color:#81d4fa; background:#e1f5fe; margin-top:30px;"><h2>${d.preNotice.title}</h2><p>${d.preNotice.content}</p></div>`; }
        if(d.packages) {
            contentHTML += `<div class="package-grid" id="healthcheck-packages" style="margin-top: 30px;">${d.packages.map(pkg => `<div class="package-card" style="border-top-color: ${pkg.borderColor};"><h3 style="color: ${pkg.titleColor};">${pkg.title}</h3><ul>${pkg.items.map(item => `<li>${item}</li>`).join('')}</ul><div class="price-wrapper"><span class="original-price">${formatPrice(pkg.originalPrice, '')}</span><span class="discount-price heartbeat">${formatPrice(pkg.discountPrice)}</span></div></div>`).join('')}</div>`;
        }
        healthCheckContent.innerHTML = contentHTML;
        document.getElementById('healthcheck-explanation-title').innerHTML = d.explanation.title;
        document.getElementById('healthcheck-explanation-content').innerHTML = d.explanation.content.map(p => `<p>${p}</p>`).join('');
    }
    // 4. 스케일링 탭
    if (data.scaling) {
        const d = data.scaling;
        document.getElementById('scaling-header-title').innerHTML = d.headerTitle;
        document.getElementById('scaling-header-subtitle').innerHTML = d.headerSubtitle;
        document.getElementById('scaling-pre-notice').innerHTML = `<h2>${d.preNotice.title}</h2><p>${d.preNotice.content}</p>`;
        document.getElementById('scaling-packages').innerHTML = d.packages.map(pkg => `<div class="package-card" style="border-top-color: ${pkg.borderColor};"><h3 style="color: ${pkg.titleColor};">${pkg.title}</h3><ul>${pkg.items.map(item => `<li>${item}</li>`).join('')}</ul><div class="price-wrapper"><span class="original-price">${formatPrice(pkg.originalPrice, '')}</span><span class="discount-price pulse">${formatPrice(pkg.discountPrice)}</span></div></div>`).join('');
        document.getElementById('scaling-explanation-title').innerHTML = d.explanation.title;
        document.getElementById('scaling-explanation-content').innerHTML = d.explanation.content.map(p => `<p>${p}</p>`).join('');
    }
    // 5. 비용 카드 생성 함수 (수술, 추가처치, 신경치료 공용)
    const createCostCard = (d, content) => {
        const headerTitle = document.getElementById(`${content}-header-title`);
        const headerSubtitle = document.getElementById(`${content}-header-subtitle`);
        const costsContainer = document.getElementById(`${content}-costs`);
        const explanationTitle = document.getElementById(`${content}-explanation-title`);
        const explanationContent = document.getElementById(`${content}-explanation-content`);
        if(headerTitle) headerTitle.innerHTML = d.headerTitle;
        if(headerSubtitle) headerSubtitle.innerHTML = d.headerSubtitle;
        if(costsContainer) {
            costsContainer.innerHTML = d.costs.map(card => `<div class="cost-card" style="border-top-color: ${card.borderColor};"><h3 style="color: ${card.titleColor};">${card.title}</h3><p style="flex-grow:1; text-align: left; line-height:1.6;">${card.description || ''}</p><div class="price-wrapper" style="padding-top: 15px; margin-top: 15px;">${card.prices.map(p => `<div class="price-item"><span class="price-label">${p.label}</span><span class="price-value">${formatPrice(p.value, ' ')}</span></div>`).join('')}</div></div>`).join('');
        }
        if(explanationTitle && d.explanation) explanationTitle.innerHTML = d.explanation.title;
        if(explanationContent && d.explanation) explanationContent.innerHTML = d.explanation.content.map(p => `<p>${p}</p>`).join('');
    };
    if (data.surgery) createCostCard(data.surgery, 'surgery');
    if (data.addons) createCostCard(data.addons, 'addons');
    if (data.nerve) createCostCard(data.nerve, 'nerve');
}

/**
 * 페이지 네비게이션(탭) 기능을 설정합니다.
 * 데스크톱(상단)과 모바일(하단) 탭 메뉴를 모두 제어하며,
 * 하나의 탭을 클릭하면 다른 쪽 탭도 함께 활성화 상태가 동기화됩니다.
 */
function setupPageNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const contentPanels = document.querySelectorAll('.content-panel');

    // 특정 ID를 가진 콘텐츠를 보여주는 함수
    function showContent(targetId) {
        // 모든 콘텐츠 패널 숨기기
        contentPanels.forEach(panel => panel.classList.remove('active'));
        
        // 모든 탭(상단, 하단)의 활성 상태 제거
        navTabs.forEach(tab => tab.classList.remove('active'));

        // 목표 콘텐츠 패널 보이기
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active');
        }

        // 목표 ID와 연결된 모든 탭(상단, 하단)에 활성 클래스 추가
        const activeTabs = document.querySelectorAll(`.nav-tab[data-target="${targetId}"]`);
        activeTabs.forEach(tab => tab.classList.add('active'));
    }

    // 모든 탭(상단, 하단)에 클릭 이벤트 리스너 추가
    navTabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = tab.dataset.target;
            showContent(targetId);
            // 페이지 상단으로 스크롤
            window.scrollTo(0, 0);
        });
    });

    // 초기 로드 시 '병원소개' 탭을 활성화
    showContent('content-main');
}

