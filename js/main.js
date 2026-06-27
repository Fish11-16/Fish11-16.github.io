/* ============================================
   个人学术主页 — 主逻辑
   Academic Homepage — Main Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initProgressBar();
    initRevealObserver();
    initBackToTop();
    renderNews();
    renderAwards();
    renderExperience();
    renderEducation();
    renderPublications();
    renderResearchInterests();
    renderStats();
    renderPersonalInfo();
    initNavigation();
    initPubFilters();
    addRevealClasses();
});

/* ============================================
   语言切换 / Language Toggle
   ============================================ */
function initLanguage() {
    currentLang = localStorage.getItem('lang') || 'en';
    applyLanguage();

    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'zh' : 'en';
            localStorage.setItem('lang', currentLang);
            applyLanguage();
            renderNews();
            renderAwards();
            renderExperience();
            renderEducation();
            renderPublications(getActiveFilter(), getActiveYear());
            renderResearchInterests();
            renderPersonalInfo();
            updateLangToggleUI();
        });
    }
}

function applyLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[key] && i18n[key][currentLang]) {
            const text = i18n[key][currentLang];
            el.innerHTML = text.includes('<') ? text : escapeHtml(text);
        }
    });

    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';

    document.title = currentLang === 'zh'
        ? '余玺 | Xi Yu — 个人学术主页'
        : 'Xi Yu — Personal Academic Homepage';

    updateLangToggleUI();
}

function updateLangToggleUI() {
    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
        const label = toggle.querySelector('.lang-label');
        if (label) label.textContent = currentLang === 'en' ? '中' : 'EN';
        toggle.title = currentLang === 'en' ? '切换到中文' : 'Switch to English';
    }
}

function getActiveFilter() {
    const active = document.querySelector('.pub-filter.active');
    return active ? active.dataset.filter : 'all';
}

function getActiveYear() {
    const active = document.querySelector('.pub-year-btn.active');
    return active ? active.dataset.year : 'all';
}

/* ============================================
   暗色模式 / Dark Mode
   ============================================ */
function initTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);

    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }

    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
}

/* ============================================
   返回顶部按钮 / Back to Top
   ============================================ */
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    const toggle = () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', toggle, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


/* ============================================
   渲染研究方向 / Render Research Interests
   ============================================ */
function renderResearchInterests() {
    const container = document.getElementById('ri-tags');
    if (!container) return;

    container.innerHTML = researchInterests.map(ri => {
        const text = currentLang === 'zh' ? ri.zh : ri.en;
        return `<span class="ri-tag">${escapeHtml(text)}</span>`;
    }).join('');
}

/* ============================================
   滚动进度条 / Scroll Progress Bar
   ============================================ */
function initProgressBar() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    bar.id = 'scroll-progress';
    document.body.prepend(bar);

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        bar.style.width = progress + '%';
    }, { passive: true });
}

/* ============================================
   滚动揭示 / Scroll Reveal (IntersectionObserver)
   ============================================ */
function initRevealObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // 统计数字跳动
                if (entry.target.classList.contains('stat-card')) {
                    animateStatNumber(entry.target.querySelector('.stat-number'));
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    // 观察所有带 .reveal 或 .reveal-stagger 的元素
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
        observer.observe(el);
    });

    // 也观察统计卡片
    document.querySelectorAll('.stat-card').forEach(el => {
        observer.observe(el);
    });
}

/* 统计数字跳动动画 */
function animateStatNumber(el) {
    if (!el || el.dataset.animated) return;
    el.dataset.animated = 'true';

    const finalText = el.textContent;
    if (finalText === '—' || isNaN(parseInt(finalText))) return;

    const target = parseInt(finalText);
    const duration = 1200;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);

        el.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = finalText;
        }
    }

    requestAnimationFrame(update);
}

/* 动态添加 reveal 类 */
function addRevealClasses() {
    // 给 hero 内容加淡入
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('reveal', 'revealed'); // hero 立即可见
    }

    // 给 section title 加 reveal
    document.querySelectorAll('.section-title').forEach(title => {
        title.classList.add('reveal');
    });

    // 给 about-content 子元素加 reveal
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) aboutContent.classList.add('reveal');

    // 给 stat-card 加 reveal
    document.querySelectorAll('.stat-card').forEach(card => {
        card.classList.add('reveal');
    });

    // 重新观察新增的 reveal 元素
    refreshRevealObserver();
}

let revealObserver = null;
function refreshRevealObserver() {
    if (!revealObserver) {
        revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    if (entry.target.classList.contains('stat-card')) {
                        animateStatNumber(entry.target.querySelector('.stat-number'));
                    }
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });
    }

    document.querySelectorAll('.reveal:not(.revealed), .reveal-stagger:not(.revealed)').forEach(el => {
        revealObserver.observe(el);
    });
    document.querySelectorAll('.stat-card:not([data-observed])').forEach(el => {
        el.dataset.observed = 'true';
        revealObserver.observe(el);
    });
}

/* ============================================
   渲染个人信息 / Render Personal Info
   ============================================ */
function renderPersonalInfo() {
    const emailLink = document.querySelector('.hero-link[href^="mailto:"]');
    if (emailLink) emailLink.href = `mailto:${personalInfo.email}`;

    const bioEl = document.getElementById('hero-bio');
    if (bioEl) {
        const bio = currentLang === 'zh' ? personalInfo.bioZh : personalInfo.bioEn;
        const emailHtml = `<br><span style="color:var(--color-text-muted);font-size:0.9rem;">📧 <a href="mailto:${personalInfo.email}" style="color:var(--color-text-muted);">${personalInfo.email}</a></span>`;
        bioEl.innerHTML = bio + emailHtml;
    }

    const aboutPara = document.getElementById('about-paragraph');
    if (aboutPara) {
        aboutPara.innerHTML = currentLang === 'zh'
            ? `我是<strong>深圳技术大学未来技术学院</strong>2025级本科生。我对<span class="hl">人工智能</span>与<span class="hl">机器学习</span>充满热情，致力于探索前沿技术并应用于实际问题。`
            : `I am an undergraduate student (Class of 2025) at the <strong>Future Technology School, Shenzhen Technology University</strong>. I am passionate about <span class="hl">artificial intelligence</span> and <span class="hl">machine learning</span>, dedicated to exploring cutting-edge technologies and applying them to real-world problems.`;
    }

    const links = document.querySelectorAll('.hero-link');
    links.forEach(link => {
        const title = link.getAttribute('title');
        if (title === 'Google Scholar') link.href = personalInfo.googleScholar;
        if (title === 'GitHub') link.href = personalInfo.github;
        if (title === 'ORCID') link.href = personalInfo.orcid;
    });

}

/* ============================================
   渲染新闻动态 / Render News
   ============================================ */
function renderNews() {
    const list = document.getElementById('news-list');
    const empty = document.getElementById('news-empty');
    if (!list) return;

    if (!news || news.length === 0) {
        if (empty) empty.style.display = 'block';
        return;
    }
    if (empty) empty.style.display = 'none';

    const typeIcon = { paper: '📄', award: '🏆', talk: '🎤', other: '📌' };
    const typeEmoji = { paper: '📄', award: '🏆', talk: '🎤', other: '📌' };

    const sorted = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));

    list.innerHTML = sorted.map(item => {
        const d = new Date(item.date);
        const dateStr = currentLang === 'zh'
            ? `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
            : d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

        return `
            <div class="news-item reveal">
                <span class="news-date">${dateStr}</span>
                <span class="news-dot">${typeEmoji[item.type] || '📌'}</span>
                <span class="news-content">${currentLang === 'zh' ? item.contentZh : item.contentEn}</span>
            </div>
        `;
    }).join('');

    refreshRevealObserver();
}

/* ============================================
   渲染社会经历 / Render Experience
   ============================================ */
function renderExperience() {
    const list = document.getElementById('experience-list');
    const empty = document.getElementById('experience-empty');
    if (!list) return;

    if (!experiences || experiences.length === 0) {
        if (empty) empty.style.display = 'block';
        return;
    }
    if (empty) empty.style.display = 'none';

    list.innerHTML = experiences.map(item => `
        <div class="news-item reveal">
            <span class="news-date">${escapeHtml(currentLang === 'zh' ? item.periodZh : item.periodEn)}</span>
            <span class="news-content">
                <strong>${escapeHtml(currentLang === 'zh' ? item.titleZh : item.titleEn)}</strong>
                — ${escapeHtml(currentLang === 'zh' ? item.orgZh : item.orgEn)}
            </span>
        </div>
    `).join('');

    refreshRevealObserver();
}

/* ============================================
   渲染获奖经历 / Render Awards
   ============================================ */
function renderAwards() {
    const list = document.getElementById('awards-list');
    const empty = document.getElementById('awards-empty');
    if (!list) return;

    if (!awards || awards.length === 0) {
        if (empty) empty.style.display = 'block';
        return;
    }
    if (empty) empty.style.display = 'none';

    const categoryEmoji = { academic: '🎓', competition: '🏅', sport: '🏓', service: '🌟' };

    const sorted = [...awards].sort((a, b) => new Date(b.date) - new Date(a.date));

    list.innerHTML = sorted.map(item => {
        const d = new Date(item.date);
        const dateStr = currentLang === 'zh'
            ? `${d.getFullYear()}年${d.getMonth() + 1}月`
            : d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

        return `
            <div class="news-item reveal">
                <span class="news-date">${dateStr}</span>
                <span class="news-marker">${categoryEmoji[item.category] || '🏆'}</span>
                <span class="news-content">${currentLang === 'zh' ? item.titleZh : item.titleEn}</span>
            </div>
        `;
    }).join('');

    refreshRevealObserver();
}

/* ============================================
   渲染教育背景 / Render Education
   ============================================ */
function renderEducation() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    timeline.innerHTML = education.map(item => `
        <li class="timeline-item">
            <span class="timeline-year">${escapeHtml(currentLang === 'zh' ? item.periodZh : item.periodEn)}</span>
            <span class="timeline-desc">
                <strong>${escapeHtml(currentLang === 'zh' ? item.degreeZh : item.degreeEn)}</strong>,
                ${escapeHtml(currentLang === 'zh' ? item.schoolZh : item.schoolEn)},
                ${escapeHtml(currentLang === 'zh' ? item.departmentZh : item.departmentEn)}
            </span>
            ${item.logo ? `<img src="${item.logo}" alt="" class="timeline-logo">` : ''}
        </li>
    `).join('');
}

/* ============================================
   渲染统计数据 / Render Stats
   ============================================ */
function renderStats() {
    const pubCount = document.getElementById('pub-count');
    const citationCount = document.getElementById('citation-count');
    const scholarLink = document.getElementById('scholar-link');
    const statCitations = document.getElementById('stat-citations');

    if (pubCount) pubCount.textContent = publications.length;
    if (citationCount) {
        citationCount.textContent = personalInfo.citationCount !== null
            ? personalInfo.citationCount
            : '—';
    }
    // Scholar 链接
    if (scholarLink && personalInfo.googleScholar && personalInfo.googleScholar !== '#') {
        scholarLink.href = personalInfo.googleScholar;
        scholarLink.style.display = 'inline-block';
    } else if (scholarLink) {
        scholarLink.style.display = 'none';
    }
    // 如果没有引用数也不显示scholar链接，隐藏整个统计卡片
    if (statCitations && personalInfo.citationCount === null && (!personalInfo.googleScholar || personalInfo.googleScholar === '#')) {
        statCitations.style.display = 'none';
    }
}

/* ============================================
   渲染论文列表 / Render Publications
   ============================================ */
function renderPublications(filterType, filterYear) {
    if (typeof filterType === 'undefined') filterType = 'all';
    if (typeof filterYear === 'undefined') filterYear = 'all';

    const list = document.getElementById('pub-list');
    const empty = document.getElementById('pub-empty');
    const yearNav = document.getElementById('pub-year-nav');
    if (!list) return;

    const type = filterType || 'all';
    const year = filterYear || 'all';

    let filtered = publications;
    if (type !== 'all') filtered = filtered.filter(p => p.type === type);
    if (year !== 'all') filtered = filtered.filter(p => p.year === parseInt(year));

    const sorted = [...filtered].sort((a, b) => b.year - a.year);

    if (sorted.length === 0) {
        list.innerHTML = '';
        if (empty) empty.style.display = 'block';
        setEmptyMessage();
        return;
    }
    if (empty) empty.style.display = 'none';

    // 年份导航
    if (yearNav) {
        const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);
        const yearAllLabel = currentLang === 'zh' ? '全部年份' : 'All Years';
        yearNav.innerHTML = `
            <button class="pub-year-btn ${year === 'all' ? 'active' : ''}" data-year="all">${yearAllLabel}</button>
            ${years.map(y => `
                <button class="pub-year-btn ${year === String(y) ? 'active' : ''}" data-year="${y}">${y}</button>
            `).join('')}
        `;
        yearNav.querySelectorAll('.pub-year-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                renderPublications(type, btn.dataset.year);
            });
        });
    }

    // 论文卡片
    list.innerHTML = sorted.map((pub, i) => `
        <div class="pub-item reveal">
            <div class="pub-thumb ${pub.teaser ? 'has-thumb' : ''}">
                ${pub.teaser ? `<img src="${pub.teaser}" alt="Teaser" loading="lazy">` : ''}
            </div>
            <div class="pub-body">
                <div class="pub-title">${escapeHtml(pub.title)}</div>
                <div class="pub-authors">${pub.authors}</div>
                <div class="pub-venue">
                    ${escapeHtml(pub.venue)} (${pub.year})
                    <span class="pub-badge badge-${pub.type}">${t('pubs.type.' + pub.type)}</span>
                    ${pub.note ? `<span style="color:var(--color-primary);font-weight:600;font-size:0.78rem;">🏆 ${escapeHtml(pub.note)}</span>` : ''}
                </div>
                <div class="pub-links">
                    ${pub.links.paper ? `<a href="${pub.links.paper}" class="pub-link" target="_blank">📄 Paper</a>` : ''}
                    ${pub.links.pdf ? `<a href="${pub.links.pdf}" class="pub-link pdf" target="_blank">📥 PDF</a>` : ''}
                    ${pub.links.code ? `<a href="${pub.links.code}" class="pub-link" target="_blank">💻 Code</a>` : ''}
                    ${pub.links.doi ? `<a href="${pub.links.doi}" class="pub-link" target="_blank">🔗 DOI</a>` : ''}
                    ${pub.links.slides ? `<a href="${pub.links.slides}" class="pub-link" target="_blank">📊 Slides</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');

    // 高亮自己名字
    document.querySelectorAll('.pub-authors').forEach(el => {
        el.innerHTML = el.innerHTML.replace(/&lt;me&gt;(.+?)&lt;\/me&gt;/g,
            '<span class="me">$1</span>');
    });

    // 重新观察新渲染的 reveal 元素
    refreshRevealObserver();
}

function setEmptyMessage() {
    const emptyEl = document.getElementById('pub-empty');
    if (emptyEl) {
        const p = emptyEl.querySelector('p');
        if (p) {
            const key = 'pubs.empty';
            if (i18n[key] && i18n[key][currentLang]) {
                p.innerHTML = i18n[key][currentLang];
            }
        }
    }
}

/* ============================================
   论文筛选按钮 / Pub Filters
   ============================================ */
function initPubFilters() {
    const filters = document.querySelectorAll('.pub-filter');
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPublications(btn.dataset.filter, getActiveYear());
        });
    });
}

/* ============================================
   导航 / Navigation
   ============================================ */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const linkItems = navLinks?.querySelectorAll('a');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
        updateActiveNav();
    }, { passive: true });

    navToggle?.addEventListener('click', () => {
        const isOpen = navLinks?.classList.toggle('open');
        navToggle?.classList.toggle('open', isOpen);
    });

    linkItems?.forEach(link => {
        link.addEventListener('click', () => {
            navLinks?.classList.remove('open');
            navToggle?.classList.remove('open');
        });
    });

    updateActiveNav();
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a');
    let current = '';

    sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

/* ============================================
   快捷翻译 / Quick Translation
   ============================================ */
function t(key) {
    if (i18n[key] && i18n[key][currentLang]) {
        return i18n[key][currentLang];
    }
    return key;
}

/* ============================================
   工具函数 / Utils
   ============================================ */
function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
