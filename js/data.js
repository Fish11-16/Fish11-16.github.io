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

/* ----- 获奖经历 / Awards -----
   每条的字段：
   - date:      日期，格式 "YYYY-MM-DD" 或 "YYYY-MM"（必填）
   - titleZh:   中文奖项名称（必填）
   - titleEn:   英文奖项名称（必填）
   - category:  类别：'academic' | 'competition' | 'sport' | 'service'（必填）
*/
const awards = [
    {
        date: "2025-12",
        titleZh: "健康与环境工程学院团委优秀部员",
        titleEn: "Outstanding Member, Youth League Committee of Health & Environmental Engineering",
        category: "service"
    },
    {
        date: "2025-12",
        titleZh: "乒乓球校长杯第六名",
        titleEn: "6th Place, President's Cup Table Tennis Tournament",
        category: "sport"
    },
    {
        date: "2026-05",
        titleZh: "广东省程序设计竞赛（GDCPC）三等奖",
        titleEn: "Third Prize, Guangdong Provincial Programming Contest (GDCPC)",
        category: "competition"
    },
    {
        date: "2026-05",
        titleZh: "全国大学生节能减排社会实践与科技竞赛校级一等奖",
        titleEn: "First Prize (University Level), National College Student Energy Conservation & Emission Reduction Competition",
        category: "academic"
    },
    {
        date: "2026-05",
        titleZh: "大学生创新训练计划项目省级立项",
        titleEn: "Provincial-Level Project, National Undergraduate Innovation Training Program",
        category: "academic"
    },
    {
        date: "2026-05",
        titleZh: "GPLT团体程序设计天梯赛全国团队三等奖",
        titleEn: "National Team Third Prize, Group Programming Ladder Tournament (GPLT)",
        category: "competition"
    },
    {
        date: "2026-05",
        titleZh: "GPLT团体程序设计天梯赛广东省二等奖",
        titleEn: "Guangdong Provincial Second Prize, Group Programming Ladder Tournament (GPLT)",
        category: "competition"
    },
    {
        date: "2026-05",
        titleZh: "乒乓球校长杯第三名",
        titleEn: "3rd Place, President's Cup Table Tennis Tournament",
        category: "sport"
    },
    {
        date: "2026-06",
        titleZh: "中国国际大学生创新大赛未来技术学院三等奖",
        titleEn: "Third Prize, China International College Students' Innovation Competition (Future Technology School)",
        category: "competition"
    },
    {
        date: "2026-06",
        titleZh: "码蹄杯程序设计竞赛广东省三等奖",
        titleEn: "Third Prize (Guangdong), Mati Cup Programming Contest",
        category: "competition"
    }
];

/* ----- 社会经历 / Experience -----
   每条的字段：
   - periodZh:  时间段中文（必填）
   - periodEn:  时间段英文（必填）
   - titleZh:   职位/经历中文（必填）
   - titleEn:   职位/经历英文（必填）
   - orgZh:     组织/单位中文（必填）
   - orgEn:     组织/单位英文（必填）
*/
const experiences = [
    {
        periodZh: "2025.09 ~ 2026.06",
        periodEn: "2025.09 — 2026.06",
        titleZh: "班长兼团支书",
        titleEn: "Class Monitor & League Branch Secretary",
        orgZh: "25级智能医学工程2班",
        orgEn: "Class 2, Intelligent Medical Engineering (Grade 2025)"
    },
    {
        periodZh: "2025.09 至今",
        periodEn: "2025.09 — Present",
        titleZh: "科创部干事",
        titleEn: "Officer, Academic Innovation Department",
        orgZh: "健康与环境工程学院团委",
        orgEn: "Youth League Committee, School of Health & Environmental Engineering"
    },
    {
        periodZh: "2025.04 至今",
        periodEn: "2025.04 — Present",
        titleZh: "科创部干事",
        titleEn: "Officer, Academic Innovation Department",
        orgZh: "未来技术学院",
        orgEn: "Future Technology School"
    },
    {
        periodZh: "2025.05 至今",
        periodEn: "2025.05 — Present",
        titleZh: "副班长",
        titleEn: "Vice Monitor",
        orgZh: "25级新才班（TOP Class）",
        orgEn: "TOP Class (Grade 2025)"
    },
    {
        periodZh: "2026.06 至今",
        periodEn: "2026.06 — Present",
        titleZh: "乒乓球校队女队队长",
        titleEn: "Captain, Women's Table Tennis Team",
        orgZh: "深圳技术大学",
        orgEn: "Shenzhen Technology University"
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
        departmentEn: "Future Technology School",
        logo: "images/school-logo.webp"
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
    "nav.awards":   { en: "Awards",      zh: "获奖" },
    "nav.experience": { en: "Experience", zh: "经历" },
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

    // 获奖 / Awards
    "awards.title": { en: "Honors & Awards", zh: "获奖经历" },
    "awards.empty": { en: "No awards yet.",   zh: "暂无获奖。" },

    // 社会经历 / Experience
    "experience.title": { en: "Experience", zh: "社会经历" },
    "experience.empty": { en: "No experience listed yet.", zh: "暂无经历。" },

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
