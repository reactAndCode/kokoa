// 공통 컴포넌트 렌더링 스크립트

const statusBarHtml = `
<div class="status-bar">
    <div class="status-bar__left">
        <span>9:41</span>
    </div>
    <div class="status-bar__center">
    </div>
    <div class="status-bar__right">
        <span>📶</span>
        <span>100%</span>
        <span>🔋</span>
    </div>
</div>
`;

const navBarHtml = `
<nav class="nav-bar">
    <a class="nav-bar__link" href="01_intro.html">
        <span>👤</span>
        <span>친구</span>
    </a>
    <a class="nav-bar__link" href="03_roomSelection.html">
        <span>💬</span>
        <span>채팅</span>
    </a>
    <a class="nav-bar__link" href="05_find.html">
        <span>#</span>
        <span>검색</span>
    </a>
    <a class="nav-bar__link" href="06_more.html">
        <span>⋯</span>
        <span>더보기</span>
    </a>
    <a class="nav-bar__link" href="07_settings.html">
        <span>⚙️</span>
        <span>설정</span>
    </a>
</nav>
`;

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    if (app) {
        // Status Bar 추가
        app.insertAdjacentHTML('afterbegin', statusBarHtml);
        
        // Navigation Bar 추가 (특정 페이지 제외)
        const currentPath = window.location.pathname;
        const noNavPages = ['01_intro.html', '02_login.html', '09_chatING.html'];
        const shouldHideNav = noNavPages.some(page => currentPath.includes(page));
        
        if (!shouldHideNav) {
            app.insertAdjacentHTML('beforeend', navBarHtml);
        }
    }
});
