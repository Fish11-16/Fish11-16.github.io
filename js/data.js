/* ============================================
   个人学术主页 — 数据文件
   修改这里的论文和项目信息即可更新网站内容
   Academic Homepage — Data File
   ============================================ */

/* ----- 个人信息 / Personal Info ----- */
const personalInfo = {
    nameZh: "余玺",
    nameEn: "Xi Yu",
    institution: "深圳技术大学",
    school: "未来技术学院",
    institutionEn: "Shenzhen Technology University",
    schoolEn: "Future Technology School",
    email: "hhFishh@outlook.com",
    bioZh: "深圳技术大学未来技术学院2025级本科生。对人工智能与机器学习充满热情，致力于探索前沿技术并应用于实际问题。",
    bioEn: "An undergraduate student (Class of 2025) at the Future Technology School, Shenzhen Technology University. Passionate about artificial intelligence and machine learning, dedicated to exploring cutting-edge technologies and applying them to real-world problems.",
    googleScholar: "#",  // 替换为你的 Google Scholar 链接
    scholarId: "",        // 你的 Google Scholar user ID（用于获取引用数，可选）
    github: "https://github.com/Fish11-16",          // 替换为你的 GitHub 链接
    orcid: "#",           // 替换为你的 ORCID 链接
    citationCount: null,  // 引用次数，填数字自动显示；填 null 则隐藏
};

/* ----- 新闻动态 / News -----
   每条的字段：
   - date:      日期，格式 "YYYY-MM-DD"（必填）
   - contentZh: 中文内容（必填）
   - contentEn: 英文内容（必填）
   - type:      类型：'paper' | 'award' | 'talk' | 'other'（必填）
   - link:      链接，可选
*/
const news = [
    {
        date: "2026-06-16",
        contentZh: "论文 <em>A Conformal Selective Diagnosis Framework for Reliable Bearing Fault Identification Under Domain Shift</em> 被 IEEE SMC 2026 接收。",
        contentEn: "Our paper <em>A Conformal Selective Diagnosis Framework for Reliable Bearing Fault Identification Under Domain Shift</em> has been accepted at IEEE SMC 2026.",
        type: "paper"
    }
];

/* ----- 研究方向 / Research Interests ----- */
const researchInterests = [
    { zh: "人工智能",        en: "Artificial Intelligence" },
    { zh: "机器学习",        en: "Machine Learning" },
    { zh: "自然语言处理",    en: "Natural Language Processing" },
    { zh: "大语言模型",      en: "Large Language Models" },
    { zh: "多模态学习",      en: "Multi-Modal Learning" },
];

/* ----- 教育背景 / Education ----- */
const education = [
    {
        periodZh: "2025 — 至今",
        periodEn: "2025 — Present",
        degreeZh: "本科",
        degreeEn: "B.Eng.",
        schoolZh: "深圳技术大学",
        schoolEn: "Shenzhen Technology University",
        departmentZh: "未来技术学院",
        departmentEn: "Future Technology School"
    }
];

/* ----- 论文发表 / Publications -----
   每篇论文包含以下字段：
   - title:       论文标题（必填）
   - authors:     作者列表（必填，你自己的名字用 <me>Yu, X.</me> 包裹会高亮）
   - venue:       期刊/会议名称（必填）
   - year:        发表年份（必填）
   - type:        类型：'journal' | 'conference' | 'preprint'（必填）
   - links:       链接对象，可选字段：paper(论文页), pdf(PDF下载), code(代码), doi(DOI), slides(幻灯片)
   - tags:        标签数组，可选
   - note:        备注（如 "Oral", "Best Paper" 等），可选
   - bibtex:      BibTeX 引用字符串，可选（备忘用）
   - teaser:      论文缩略图路径（如 "images/teaser.png"），可选
*/
const publications = [
    {
        title: "A Conformal Selective Diagnosis Framework for Reliable Bearing Fault Identification Under Domain Shift",
        authors: "<me>Xi Yu</me><sup>†</sup>, Anran Lu, Keyi Chen, & Haotong Luan*",
        venue: "IEEE International Conference on Systems, Man, and Cybernetics (SMC)",
        year: 2026,
        type: "conference",
        links: {
            // paper: "#",  // 论文链接（待补充）
            // pdf: "#",    // PDF 链接（待补充）
            // code: "#",   // 代码链接（待补充）
            // doi: "#",    // DOI 链接（待补充）
        },
        tags: ["Fault Diagnosis", "Domain Shift", "Conformal Prediction"],
        note: "Accepted 2026.6.16",
        bibtex: `@inproceedings{yu2026conformal,
  title={A Conformal Selective Diagnosis Framework for Reliable Bearing Fault Identification Under Domain Shift},
  author={Yu, Xi and Lu, Anran and Chen, Keyi and Luan, Haotong},
  booktitle={IEEE International Conference on Systems, Man, and Cybernetics (SMC)},
  year={2026}
}`
    }
];

/* ----- 科研项目 / Projects -----
   每个项目包含以下字段：
   - title:       项目名称（必填）
   - description: 项目描述（必填，支持中英双语，见下方格式）
   - year:        年份（必填）
   - role:        你的角色（必填，支持中英双语）
   - links:       链接对象，可选字段：github, demo, website, paper
   - image:       项目图片路径，可选（不填使用默认图标）
*/
const projects = [
    // 在此添加你的科研项目，格式示例：
    // {
    //     title: "项目名称",
    //     descriptionZh: "中文描述",
    //     descriptionEn: "English description",
    //     year: 2026,
    //     roleZh: "你的角色",
    //     roleEn: "Your Role",
    //     links: {
    //         github: "https://github.com/Fish11-16",
    //         paper: "#",
    //         demo: "#"
    //     }
    // }
];

/* ============================================
   国际化翻译数据 / i18n Translations
   key: { en: "English", zh: "中文" }
   ============================================ */
const i18n = {
    // 导航 / Nav
    "nav.home":     { en: "Home",        zh: "首页" },
    "nav.news":     { en: "News",        zh: "动态" },
    "nav.about":    { en: "About",        zh: "关于我" },
    "nav.pubs":     { en: "Publications", zh: "论文发表" },
    "nav.projects": { en: "Projects",     zh: "科研项目" },
    "nav.cv":       { en: "CV",           zh: "简历" },

    // 首页 Hero
    "hero.affiliation": {
        en: "Future Technology School · Shenzhen Technology University",
        zh: "深圳技术大学 · 未来技术学院"
    },

    // 新闻 / News
    "news.title":   { en: "News",            zh: "新闻动态" },
    "news.empty":   { en: "No news yet.",    zh: "暂无动态。" },

    // 关于我 / About
    "about.title":  { en: "About Me",         zh: "关于我" },
    "about.heading": { en: "Education",        zh: "教育背景" },
    "about.stats.pubs":    { en: "Publications", zh: "发表论文" },
    "about.stats.projects":{ en: "Projects",     zh: "科研项目" },
    "about.stats.citations":{ en: "Citations",   zh: "引用次数" },

    // 论文 / Publications
    "pubs.title":   { en: "Publications", zh: "论文发表" },
    "pubs.filter.all":      { en: "All",           zh: "全部" },
    "pubs.filter.journal":  { en: "Journal",       zh: "期刊论文" },
    "pubs.filter.conference":{ en: "Conference",    zh: "会议论文" },
    "pubs.filter.preprint": { en: "Preprint",      zh: "预印本" },
    "pubs.filter.yearAll":  { en: "All Years",     zh: "全部年份" },
    "pubs.type.journal":    { en: "Journal",       zh: "期刊" },
    "pubs.type.conference": { en: "Conference",    zh: "会议" },
    "pubs.type.preprint":   { en: "Preprint",      zh: "预印本" },
    "pubs.empty":           { en: "No matching publications. Add your papers in <code>js/data.js</code>.", zh: "暂无匹配的论文。请在 <code>js/data.js</code> 中添加你的论文信息。" },

    // 项目 / Projects
    "projects.title": { en: "Projects", zh: "科研项目" },
    "projects.empty": { en: "No projects yet. Add your projects in <code>js/data.js</code>.", zh: "暂无项目。请在 <code>js/data.js</code> 中添加你的项目信息。" },

    // 简历 / CV
    "cv.title":     { en: "Curriculum Vitae", zh: "简历" },
    "cv.intro":     { en: "Download my full CV below.", zh: "你可以在此下载我的完整简历（PDF）。" },
    "cv.download":  { en: "Download CV (PDF)", zh: "下载 CV (PDF)" },
    "cv.note":      { en: "Place your PDF at <code>files/cv.pdf</code> and update the link in <code>js/data.js</code>.", zh: "请将你的 PDF 简历文件放到 <code>files/cv.pdf</code> 路径下，然后修改 <code>js/data.js</code> 中的链接。" },

    // 页脚 / Footer
    "footer.info": {
        en: "Future Technology School, Shenzhen Technology University",
        zh: "深圳技术大学 未来技术学院"
    }
};

/* ----- 当前语言 / Current Language ----- */
let currentLang = 'en';
