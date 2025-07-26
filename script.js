//
// script.js
//

document.addEventListener('DOMContentLoaded', function () {
    // 1. JSON 데이터 가져와서 콘텐츠 채우기
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            populateAllContent(data);
            // 2. 데이터 로딩 후 탭 기능 활성화
            setupTabs();
        })
        .catch(error => {
            console.error('Failed to load or parse data.json:', error);
            alert('콘텐츠 로딩에 실패했습니다. data.json 파일의 형식과 위치를 확인해주세요.');
        });
});

/**
 * 모든 콘텐츠를 채우는 메인 함수
 * @param {object} data - data.json에서 로드된 전체 데이터 객체
 */
function populateAllContent(data) {
    if (data.main) populateMain(data.main);
    if (data.healthCheck) populateHealthCheck(data.healthCheck);
    if (data.scaling) populateScaling(data.scaling);
    if (data.extraction) populateExtraction(data.extraction);
    if (data.addons) populateAddons(data.addons);
    if (data.nerve) populateNerve(data.nerve);
}

// --- 각 탭 콘텐츠 채우기 함수들 ---

function populateMain(d) {
    document.getElementById('main-header').innerHTML = `<h1>${d.headerTitle}</h1><p>${d.headerSubtitle}</p>`;
    
    const infoGrid = document.getElementById('main-info-grid');
    infoGrid.innerHTML = `
        <div class="info-card" style="border-top:none;"><h3>📍 찾아오시는 길</h3><p>${d.info.address}</p></div>
        <div class="info-card" style="border-top:none;"><h3>☎️ 연락처</h3><p>${d.info.phone}</p></div>
        <div class="info-card" style="grid-column:1/-1; border-top:none;"><h3>⏰ 진료 시간</h3><ul>${d.info.hours.map(h => `<li>${h}</li>`).join('')}</ul></div>
        <div class="info-card" style="grid-column:1/-1; border-top:none;"><h3>🅿️ 주차 안내 (무료!)</h3><p>건물 뒷편에 주차장이 있어요!</p><ul>${d.info.parking.map(p => `<li>${p}</li>`).join('')}</ul></div>
    `;

    const prideSection = document.getElementById('main-pride-section');
    prideSection.innerHTML = `<h2 style="color:#0277bd">${d.pride.title}</h2>` +
      d.pride.points.map(p => `<ul><li><strong>${p.title}</strong><ul>${p.items.map(i => `<li>${i}</li>`).join('')}</ul></li></ul>`).join('<br>');

    document.getElementById('main-notice-title').innerHTML = d.notice.title;
    document.getElementById('main-notice-list').innerHTML = d.notice.items.map(item => {
        if (typeof item === 'string') return `<li>${item}</li>`;
        return `<li>${item.main}<ul class="sub-list">${item.sublist.map(sub => `<li>${sub}</li>`).join('')}</ul></li>`;
    }).join('');

    document.getElementById('main-footer').innerHTML = `<h2>${d.footer.title}</h2>
        <a href="${d.footer.kakaoLink}" target="_blank" class="action-button kakao-btn">💬 카카오톡 채널로 상담하기</a>
        <a href="tel:${d.footer.phone}" class="action-button tel-btn">📞 ${d.footer.phone}</a>`;
}

function populateHealthCheck(d) {
    document.getElementById('healthcheck-header').innerHTML = `<h1>${d.headerTitle}</h1><p>${d.headerSubtitle}</p>`;
    document.getElementById('healthcheck-packages').innerHTML = d.packages.map(pkg => `
        <div class="package-card" style="border-top-color:${pkg.borderColor}">
            <h3 style="color:${pkg.titleColor}">${pkg.title}</h3>
            <ul>${pkg.items.map(item => `<li>${item}</li>`).join('')}</ul>
            <div class="price-wrapper">
                <span class="original-price">💸 ${pkg.originalPrice.toLocaleString('ko-KR')}원</span>
                <span class="discount-price heartbeat">❤️ ${pkg.discountPrice.toLocaleString('ko-KR')}원</span>
            </div>
        </div>`).join('');
    document.getElementById('healthcheck-explanation-title').innerHTML = d.explanation.title;
    document.getElementById('healthcheck-explanation-content').innerHTML = d.explanation.content.map(p => `<p>${p}</p>`).join('');
}

function populateScaling(d) {
    document.getElementById('scaling-header').innerHTML = `<h1>${d.headerTitle}</h1><p>${d.headerSubtitle}</p>`;
    document.getElementById('scaling-packages').innerHTML = d.packages.map(pkg => `
        <div class="package-card" style="border-top-color:${pkg.borderColor}">
            <h3 style="color:${pkg.titleColor}">${pkg.title}</h3>
            <ul>${pkg.items.map(item => `<li>${item}</li>`).join('')}</ul>
            <div class="price-wrapper">
                <span class="original-price">💸 ${pkg.originalPrice.toLocaleString('ko-KR')}원</span>
                <span class="discount-price pulse">👑 ${pkg.discountPrice.toLocaleString('ko-KR')}원</span>
            </div>
        </div>`).join('');
    document.getElementById('scaling-explanation-title').innerHTML = d.explanation.title;
    document.getElementById('scaling-explanation-content').innerHTML = d.explanation.content.map(p => `<p>${p}</p>`).join('');
}

function populateExtraction(d) {
    document.getElementById('extraction-header').innerHTML = `<h1>${d.headerTitle}</h1><p>${d.headerSubtitle}</p>`;
    const formatPrice = val => typeof val === 'number' ? `💸 ${val.toLocaleString('ko-KR')}원` : `💸 ${val}`;
    document.getElementById('extraction-costs').innerHTML = d.costs.map(cost => `
        <div class="cost-card" id="${cost.id}"><h3>${cost.title}</h3><div class="description" style="flex-grow:1;">${cost.description}</div>
            <div class="price-wrapper" style="text-align: right;">
                ${cost.prices.map(p => `<div class="price-item"><span class="price-label">${p.label}</span> <span class="price-value">${formatPrice(p.value)}</span></div>`).join('')}
            </div>
        </div>`).join('');
    document.getElementById('extraction-explanation-title').innerHTML = d.explanation.title;
    document.getElementById('extraction-explanation-content').innerHTML = d.explanation.content.map(p => `<p>${p}</p>`).join('');
}

function populateAddons(d) {
    document.getElementById('addons-header').innerHTML = `<h1>${d.headerTitle}</h1><p>${d.headerSubtitle}</p>`;
    document.getElementById('addons-costs').innerHTML = d.costs.map(cost => `
        <div class="cost-card" style="border-top-color:${cost.borderColor}"><h3 style="color:${cost.titleColor}">${cost.title}</h3><div class="description" style="flex-grow:1;">${cost.description}</div>
            <div class="price-wrapper" style="text-align: right;">
                ${cost.prices.map(p => `<div class="price-item"><span class="price-label">${p.label}</span> <span class="price-value">${typeof p.value === 'number' ? p.value.toLocaleString('ko-KR')+'원' : p.value}</span></div>`).join('')}
            </div>
        </div>`).join('');
    document.getElementById('addons-explanation-title').innerHTML = d.explanation.title;
    document.getElementById('addons-explanation-content').innerHTML = d.explanation.content.map(p => `<p>${p}</p>`).join('');
}

function populateNerve(d) {
    document.getElementById('nerve-header').innerHTML = `<h1>${d.headerTitle}</h1><p>${d.headerSubtitle}</p>`;
    const formatPrice = val => `💸 ${val.toLocaleString('ko-KR')}원`;
    document.getElementById('nerve-costs').innerHTML = d.costs.map(cost => `
        <div class="cost-card" style="border-top-color:${cost.borderColor}"><h3 style="color:${cost.titleColor}">${cost.title}</h3><div class="description" style="flex-grow:1;">${cost.description}</div>
            <div class="price-wrapper" style="${cost.priceStyle === 'single' ? 'text-align:center' : 'text-align:right'}">
                ${cost.priceStyle === 'single' ? `<span class="discount-price pulse" style="font-size:2.5em;color:#fa5252">👑 ${cost.price.toLocaleString('ko-KR')}원<small style="font-size:.5em;font-weight:400;color:#666;display:block">${cost.priceNote || ''}</small></span>`
                : cost.prices.map(p => `<div class="price-item"><span class="price-label">${p.label}</span> <span class="price-value" style="color:#fa5252;font-size:1.3em">${formatPrice(p.value)}</span></div>`).join('')}
            </div>
        </div>`).join('');
    document.getElementById('nerve-explanation-title').innerHTML = d.explanation.title;
    document.getElementById('nerve-explanation-content').innerHTML = d.explanation.content.map(p => `<p>${p}</p>`).join('');
}


/**
 * 탭 기능을 설정하는 함수
 */
function setupTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    const contents = document.querySelectorAll('.content-panel');

    function showContent(targetId) {
        contents.forEach(content => {
            content.style.display = 'none';
            content.classList.remove('active');
        });
        tabs.forEach(tab => tab.classList.remove('active'));

        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.style.display = 'block';
            targetContent.classList.add('active');
        }

        const activeTab = document.querySelector(`.nav-tab[data-target="${targetId}"]`);
        if (activeTab) activeTab.classList.add('active');
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            showContent(targetId);
        });
    });

    // 페이지 로드 시 기본으로 '병원소개' 탭을 활성화
    showContent('content-main');
}