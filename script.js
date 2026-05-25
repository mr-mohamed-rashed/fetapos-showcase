const whatsappNumber = '201005144500';

const colors = {
  jeta: '#0f766e',
  vita: '#10b981',
  beta: '#1d4ed8',
  theta: '#7c3aed',
  zeta: '#ea580c',
  alpha: '#eab308',
};

const plans = {
  en: {
    jeta: {
      code: 'JETA',
      name: 'JETA Version',
      tagline: 'Inventory-only starter version',
      price: ['149 EGP', '1,490 EGP', '4,500 EGP'],
      description:
        'For businesses that only need to organize products, stock quantities, stock count, and warehouse movement before adding POS sales.',
      problems: [
        ['Stock is recorded in notebooks', 'Products, quantities, and warehouse movement move into one searchable digital inventory.'],
        ['Owners do not know what is available', 'Stock status becomes clear before selling starts, reducing missing items and duplicated purchases.'],
        ['The business is not ready for a full POS', 'JETA gives inventory discipline first, then upgrades to VITA when sales tools are needed.'],
      ],
      tools: ['Product catalog', 'Stock quantities', 'Warehouse movement', 'Stock count', 'Low-stock alerts'],
    },
    vita: {
      code: 'VITA',
      name: 'VITA Version',
      tagline: 'Essential POS and inventory control',
      price: ['299 EGP', '2,990 EGP', '8,500 EGP'],
      description:
        'For shops that need fast selling, clean stock tracking, and daily control without accounting complexity.',
      problems: [
        ['Stock moves without visibility', 'Every sale updates quantities and gives the owner a clear product movement trail.'],
        ['Slow checkout during busy hours', 'A focused POS flow helps sellers create baskets, finish invoices, and keep customers moving.'],
        ['No early warning for low stock', 'Low-stock indicators highlight products before they disappear from shelves.'],
      ],
      tools: ['Everything in JETA', 'Fast POS', 'Sales invoices', 'Basket checkout', 'Basic daily reports'],
    },
    beta: {
      code: 'BETA',
      name: 'BETA Version',
      tagline: 'Cashbox and financial control',
      price: ['499 EGP', '4,990 EGP', '14,500 EGP'],
      description:
        'For businesses that need inventory, POS, cashbox control, expenses, customers, and suppliers in one operating flow.',
      problems: [
        ['Money is hard to trace', 'Cashbox and expense tracking show where money enters and leaves the business.'],
        ['Supplier balances live in notebooks', 'Supplier accounts keep purchasing commitments visible and easier to review.'],
        ['Customer credit is unclear', 'Customer balances reduce forgotten debt and make follow-up easier.'],
      ],
      tools: ['Everything in VITA', 'Cashbox', 'Expenses', 'Customers', 'Suppliers'],
    },
    theta: {
      code: 'THETA',
      name: 'THETA Version',
      tagline: 'Staff management, targets, payroll, and control',
      price: ['799 EGP', '7,990 EGP', '22,500 EGP'],
      description:
        'For companies with teams that need staff permissions, seller targets, discounts, bonuses, deductions, payroll, and full operational control.',
      problems: [
        ['Seller performance is hard to measure', 'Targets, sales totals, invoice counts, and achievement percentages make every seller visible.'],
        ['Payroll takes too much manual work', 'Salary, commission, bonus, and deduction workflows reduce repeated calculations.'],
        ['Sensitive screens are open to everyone', 'Full permission control keeps each employee focused on the tools they should use.'],
      ],
      tools: ['Everything in BETA', 'Staff management', 'Seller targets', 'Discounts and bonuses', 'Payroll'],
    },
    zeta: {
      code: 'ZETA',
      name: 'ZETA Version',
      tagline: 'Journal entries, accounting, and financial analysis',
      price: ['1,199 EGP', '11,990 EGP', '34,500 EGP'],
      description:
        'For owners, accountants, and finance managers who need daily journal entries, accounting reports, profit analysis, and decisions based on real numbers.',
      problems: [
        ['Daily activity is not reflected in accounting', 'Journal entries connect sales, expenses, cashbox movement, and financial reports.'],
        ['Reports do not answer why profit changed', 'Profitability dashboards connect sales, stock, expenses, and margins.'],
        ['Decisions depend on guesswork', 'Financial indicators and trend views make growth, decline, and product performance easier to see.'],
      ],
      tools: ['Everything in THETA', 'Daily journal entries', 'Profit and loss', 'Financial dashboard', 'Performance indicators'],
    },
    alpha: {
      code: 'ALPHA',
      name: 'ALPHA Version',
      tagline: 'Complete ERP with an AI financial expert',
      price: ['Custom', 'Custom', 'Custom'],
      description:
        'For serious operations that need branches, advanced governance, cloud workflows, ERP implementation, and an AI financial expert that helps management make better decisions.',
      problems: [
        ['Branches work as separate islands', 'Cloud multi-branch control keeps store data connected while preserving local permissions.'],
        ['Management needs expert insight', 'The AI financial expert highlights weak margins, expense leaks, branch differences, and pricing risks.'],
        ['The business needs a tailored ERP', 'Implementation can be configured around the actual operating model, approvals, and ownership structure.'],
      ],
      tools: ['Everything in ZETA', 'Multi-branch ERP', 'AI financial expert', 'Advanced governance', 'Custom implementation'],
    },
  },
  ar: {
    jeta: {
      code: 'JETA',
      name: 'نسخة جيتا',
      tagline: 'نسخة بداية للمخازن فقط',
      price: ['149 جنيه', '1,490 جنيه', '4,500 جنيه'],
      description:
        'للنشاط الذي يحتاج تنظيم المنتجات والكميات والجرد وحركة المخزن قبل إضافة البيع ونقطة البيع.',
      problems: [
        ['المخزون مكتوب في دفاتر', 'المنتجات والكميات وحركة المخزن تنتقل إلى نظام رقمي واضح وقابل للبحث.'],
        ['صاحب النشاط لا يعرف المتاح فعليا', 'حالة المخزون تصبح واضحة قبل البيع، فتقل النواقص والمشتريات المكررة.'],
        ['النشاط غير جاهز لنقطة بيع كاملة', 'JETA تبدأ بتنظيم المخزن أولا، ثم تترقى إلى VITA عند الحاجة للبيع.'],
      ],
      tools: ['كتالوج منتجات', 'كميات المخزون', 'حركة المخزن', 'جرد', 'تنبيهات نقص المخزون'],
    },
    vita: {
      code: 'VITA',
      name: 'نسخة فيتا',
      tagline: 'نقطة البيع والمخزون',
      price: ['299 جنيه', '2,990 جنيه', '8,500 جنيه'],
      description: 'للمحل الذي يحتاج بيع سريع ومتابعة مخزون وجرد يومي بدون تعقيد حسابي.',
      problems: [
        ['حركة الصنف غير واضحة', 'كل عملية بيع تحدث الكمية وتوضح حركة المنتج لصاحب المحل.'],
        ['البيع بطيء وقت الزحمة', 'واجهة POS مختصرة تساعد البائع على إنهاء الفاتورة بسرعة.'],
        ['المخزون ينقص فجأة', 'تنبيهات نقص المخزون تظهر قبل نفاد المنتج من الرف.'],
      ],
      tools: ['كل جيتا', 'POS سريع', 'فواتير بيع', 'سلة البيع', 'تقارير يومية أساسية'],
    },
    beta: {
      code: 'BETA',
      name: 'نسخة بيتا',
      tagline: 'الخزينة والرقابة المالية',
      price: ['499 جنيه', '4,990 جنيه', '14,500 جنيه'],
      description: 'للمشروع الذي يحتاج مخزون وبيع وخزينة ومصاريف وعملاء وموردين في مسار تشغيل واحد.',
      problems: [
        ['الأموال غير قابلة للتتبع', 'الخزينة والمصاريف يوضحان حركة المال داخل النشاط.'],
        ['حسابات الموردين في دفاتر', 'حساب المورد يبقي الالتزامات واضحة وسهلة المراجعة.'],
        ['ديون العملاء غير منظمة', 'أرصدة العملاء تقلل النسيان وتسهل المتابعة.'],
      ],
      tools: ['كل فيتا', 'الخزينة', 'المصاريف', 'العملاء', 'الموردين'],
    },
    theta: {
      code: 'THETA',
      name: 'نسخة سيتا',
      tagline: 'إدارة الموظفين والتارجت والمرتبات والتحكم',
      price: ['799 جنيه', '7,990 جنيه', '22,500 جنيه'],
      description:
        'للشركات التي لديها فريق وتحتاج صلاحيات وتارجت للبائعين وخصومات ومكافآت ومرتبات وتحكم كامل.',
      problems: [
        ['أداء البائع غير واضح', 'التارجت وإجمالي المبيعات وعدد الفواتير ونسبة التحقيق تجعل أداء كل بائع ظاهر.'],
        ['حساب المرتبات مرهق', 'مسارات المرتبات والعمولات والمكافآت والخصومات تقلل الحساب اليدوي.'],
        ['الشاشات الحساسة مفتوحة', 'التحكم الكامل في الصلاحيات يجعل كل موظف يرى الأدوات المناسبة فقط.'],
      ],
      tools: ['كل بيتا', 'إدارة الموظفين', 'تارجت البائعين', 'خصومات ومكافآت', 'مرتبات'],
    },
    zeta: {
      code: 'ZETA',
      name: 'نسخة زيتا',
      tagline: 'القيد اليومي والمحاسبة والتحليل المالي',
      price: ['1,199 جنيه', '11,990 جنيه', '34,500 جنيه'],
      description:
        'لصاحب القرار والمحاسب والمدير المالي الذي يحتاج قيود يومية وتقارير محاسبية وربحية وتحليل مبني على أرقام حقيقية.',
      problems: [
        ['الحركة اليومية لا تظهر محاسبيا', 'القيد اليومي يربط المبيعات والمصاريف والخزينة بالتقارير المالية.'],
        ['التقارير لا تشرح سبب تغير الربح', 'تحليل الربحية يربط المبيعات والمخزون والمصاريف والهامش.'],
        ['القرار مبني على التوقع', 'المؤشرات المالية والاتجاهات توضح النمو والتراجع وأداء المنتجات.'],
      ],
      tools: ['كل سيتا', 'قيود يومية', 'أرباح وخسائر', 'Dashboard مالي', 'مؤشرات أداء'],
    },
    alpha: {
      code: 'ALPHA',
      name: 'نسخة ألفا',
      tagline: 'ERP متكامل مع خبير مالي ذكي',
      price: ['حسب الاحتياج', 'حسب الاحتياج', 'حسب الاحتياج'],
      description:
        'للتشغيل الجاد الذي يحتاج فروع وحوكمة متقدمة وسحابة وتنفيذ ERP مخصص وخبير مالي ذكي يساعد الإدارة في القرار.',
      problems: [
        ['الفروع تعمل كجزر منفصلة', 'الربط السحابي يجمع بيانات الفروع مع الحفاظ على صلاحيات كل فرع.'],
        ['الإدارة تحتاج رؤية خبير', 'الخبير المالي الذكي يوضح ضعف الهوامش ونزيف المصاريف وفروق أداء الفروع ومخاطر التسعير.'],
        ['الشركة تحتاج ERP مناسب لها', 'التنفيذ يمكن ضبطه حسب طريقة التشغيل ومسارات الموافقة وهيكل الملكية.'],
      ],
      tools: ['كل زيتا', 'ERP متعدد الفروع', 'خبير مالي AI', 'حوكمة متقدمة', 'تنفيذ مخصص'],
    },
  },
};

const ui = {
  en: {
    navVersions: 'Versions',
    navPlatforms: 'Platforms',
    navAssistant: 'AI Assistant',
    navContact: 'WhatsApp',
    language: 'العربية',
    heroEyebrow: 'One platform, six business versions',
    heroTitle: 'Start with inventory only. Upgrade when your business needs more.',
    heroText:
      'AlphaPos Trading is sold as clear software versions, but technically runs on one scalable platform. Start with JETA for inventory, then unlock POS, cashbox, staff management, journal entries, analytics, branches, ERP, and the AI financial expert without moving your data.',
    viewVersions: 'View Versions',
    talkWhatsapp: 'Talk on WhatsApp',
    platformTitle: 'Runs everywhere your team works',
    platformText: 'Android via Google Play, iPhone via App Store, desktop, and web access.',
    versionsTitle: 'Software versions',
    versionsText: 'Each version solves a different stage of real business pain.',
    upgradeTitle: 'Upgrade is not a reinstall',
    upgradeText:
      'If a JETA customer needs VITA, or a VITA customer needs BETA, they click upgrade, renew the subscription, and the extra tools appear in the same account with the same data.',
    learnMore: 'Open version page',
    pricingTitle: 'Pricing options',
    monthly: 'Monthly',
    yearly: 'Yearly',
    lifetime: 'Lifetime purchase',
    choosePlan: 'Choose this option',
    platformsTitle: 'Download or open the app',
    android: 'Google Play',
    ios: 'App Store',
    desktop: 'Desktop',
    web: 'Web App',
    assistantTitle: 'Smart assistant included',
    assistantText:
      'The assistant helps customers understand the right version, ask about tools, and prepare an upgrade request.',
    assistantPlaceholder: 'Ask: which version is best for a clothes shop with two sellers?',
    assistantSend: 'Ask assistant',
    assistantDefault:
      'Ask a business question and the assistant will suggest the best AlphaPos version.',
    getApp: 'Get the App',
    stayTuned: 'Stay Tuned',
    appStoreSmall: 'Download on the',
    googlePlaySmall: 'Get it on',
    footer: 'AlphaPos Trading - scalable business software for stores and companies.',
  },
  ar: {
    navVersions: 'النسخ',
    navPlatforms: 'المنصات',
    navAssistant: 'المساعد الذكي',
    navContact: 'واتساب',
    language: 'English',
    heroEyebrow: 'منصة واحدة وست نسخ تجارية',
    heroTitle: 'ابدأ بالمخازن فقط، ورقّي النظام عندما تحتاج أكثر.',
    heroText:
      'AlphaPos Trading يتم بيعه كنسخ واضحة، لكنه يعمل تقنيا على منصة واحدة قابلة للتوسع. ابدأ بنسخة JETA للمخازن، ثم افتح البيع والخزينة والموظفين والقيود والتقارير والفروع والخبير المالي بدون نقل بيانات.',
    viewVersions: 'شاهد النسخ',
    talkWhatsapp: 'تواصل واتساب',
    platformTitle: 'يعمل في كل مكان يستخدمه فريقك',
    platformText: 'أندرويد من Google Play، آيفون من App Store، ديسكتوب، وويب.',
    versionsTitle: 'نسخ البرنامج',
    versionsText: 'كل نسخة تحل مرحلة مختلفة من مشاكل حقيقية في النشاط.',
    upgradeTitle: 'الترقية ليست إعادة تثبيت',
    upgradeText:
      'لو عميل JETA احتاج VITA، أو عميل VITA احتاج BETA، يضغط ترقية ويجدد الاشتراك، فتظهر الأدوات الجديدة في نفس الحساب ونفس البيانات.',
    learnMore: 'افتح صفحة النسخة',
    pricingTitle: 'اختيارات التسعير',
    monthly: 'شهري',
    yearly: 'سنوي',
    lifetime: 'شراء دائم',
    choosePlan: 'اختار هذه الخطة',
    platformsTitle: 'نزّل أو افتح التطبيق',
    android: 'Google Play',
    ios: 'App Store',
    desktop: 'ديسكتوب',
    web: 'تطبيق الويب',
    assistantTitle: 'المساعد الذكي مدمج',
    assistantText:
      'المساعد يساعد العميل يفهم النسخة المناسبة، يسأل عن الأدوات، ويجهز طلب ترقية.',
    assistantPlaceholder: 'اسأل: ما النسخة المناسبة لمحل ملابس فيه بائعين؟',
    assistantSend: 'اسأل المساعد',
    assistantDefault: 'اسأل سؤالا تجاريا وسيقترح المساعد أنسب نسخة.',
    getApp: 'حمّل التطبيق',
    stayTuned: 'تابعنا',
    appStoreSmall: 'Download on the',
    googlePlaySmall: 'Get it on',
    footer: 'AlphaPos Trading - برنامج أعمال قابل للتوسع للمحلات والشركات.',
  },
};

let language = localStorage.getItem('alphaposLanguage') || 'en';

function t(key) {
  return ui[language][key];
}

function getWhatsappUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function header() {
  return `
    <header class="site-header">
      <a class="brand" href="./index.html"><span>Alpha</span><span>Pos</span><small>Trading</small></a>
      <nav class="nav" aria-label="Main navigation">
        <a href="./index.html#versions">${t('navVersions')}</a>
        <a href="#platforms">${t('navPlatforms')}</a>
        <a href="#assistant">${t('navAssistant')}</a>
        <a href="${getWhatsappUrl('I want to know more about AlphaPos Trading')}">${t('navContact')}</a>
      </nav>
      <button class="lang-button" type="button" id="languageButton">${t('language')}</button>
    </header>
  `;
}

function hero() {
  return `
    <section class="hero">
      <div class="hero-inner">
        <div>
          <p class="eyebrow">${t('heroEyebrow')}</p>
          <h1>${t('heroTitle')}</h1>
          <p class="lead">${t('heroText')}</p>
          <div class="hero-actions">
            <a class="primary" href="#versions">${t('viewVersions')}</a>
            <a class="secondary" href="${getWhatsappUrl('I want a demo for AlphaPos Trading')}">${t('talkWhatsapp')}</a>
          </div>
        </div>
        ${phonePreview()}
      </div>
    </section>
  `;
}

function phonePreview() {
  const metrics =
    language === 'ar'
      ? [
          ['المخزون', '128'],
          ['مبيعات اليوم', 'EGP 0'],
          ['تنبيه نقص', '4'],
        ]
      : [
          ['Inventory', '128'],
          ['Today sales', 'EGP 0'],
          ['Low stock', '4'],
        ];
  return `
    <aside class="phone-preview" aria-label="AlphaPos app preview">
      <div class="phone-shell">
        <div class="phone-speaker"></div>
        <div class="phone-screen">
          <div class="phone-brand"><span>Alpha</span><strong>Pos</strong> Trading</div>
          <p class="phone-kicker">${language === 'ar' ? 'منصة واحدة' : 'One platform'}</p>
          <h3>${language === 'ar' ? 'كل نسخة تفتح أدواتها' : 'Each version unlocks its tools'}</h3>
          <div class="phone-version-list">
            ${Object.keys(plans[language])
              .map((key) => `<span style="--plan-color:${colors[key]}">${plans[language][key].code}</span>`)
              .join('')}
          </div>
          <div class="phone-metrics">
            ${metrics
              .map(
                ([label, value]) => `
                  <div>
                    <small>${label}</small>
                    <strong>${value}</strong>
                  </div>
                `,
              )
              .join('')}
          </div>
        </div>
      </div>
    </aside>
  `;
}

function platformCard() {
  const rows = [
    ['GP', t('android')],
    ['AS', t('ios')],
    ['PC', t('desktop')],
    ['WEB', t('web')],
  ];
  return `
    <aside class="platform-card" id="platforms">
      <h3>${t('platformTitle')}</h3>
      <p>${t('platformText')}</p>
      ${rows
        .map(
          ([icon, label]) => `
            <div class="platform-row">
              <span class="platform-icon">${icon}</span>
              <strong>${label}</strong>
            </div>
          `,
        )
        .join('')}
    </aside>
  `;
}

function versionsGrid() {
  return `
    <section class="section" id="versions">
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">${t('navVersions')}</p>
          <h2>${t('versionsTitle')}</h2>
          <p>${t('versionsText')}</p>
        </div>
        <div class="version-grid">
          ${Object.entries(plans[language])
            .map(([key, plan]) => versionCard(key, plan))
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function versionCard(key, plan) {
  return `
    <article class="card" style="--plan-color:${colors[key]}">
      <span class="plan-code">${plan.code}</span>
      <h3>${plan.name}</h3>
      <p>${plan.tagline}</p>
      <ul class="feature-list">
        ${plan.tools.slice(0, 4).map((tool) => `<li>${tool}</li>`).join('')}
      </ul>
      <a class="primary" href="./${key}.html">${t('learnMore')}</a>
    </article>
  `;
}

function upgradeBand() {
  return `
    <section class="section upgrade-section">
      <div class="section-inner">
        <div class="upgrade-band">
          <div>
            <h2>${t('upgradeTitle')}</h2>
            <p>${t('upgradeText')}</p>
          </div>
          <a class="primary" href="${getWhatsappUrl('I want to upgrade my AlphaPos plan')}">${t('talkWhatsapp')}</a>
        </div>
      </div>
      ${upgradeVisual()}
    </section>
  `;
}

function upgradeVisual() {
  const entries = Object.keys(plans[language]);
  return `
    <div class="upgrade-visual">
      <div class="section-inner upgrade-visual-inner">
      <div class="upgrade-visual-copy">
        <p class="eyebrow">${language === 'ar' ? 'حافظ على بياناتك باستخدام برنامج واحد' : 'Keep your data in one program'}</p>
        <h3>${language === 'ar' ? 'منصة واحدة - ترقيات فورية' : 'One platform - instant upgrades'} <span>✓</span></h3>
        <p>${language === 'ar' ? 'كل خطوة تفتح أدوات جديدة داخل نفس الحساب، من المخزون فقط إلى ERP وخبير مالي ذكي.' : 'Each step unlocks new tools inside the same account, from inventory only to ERP and AI financial expert.'}</p>
      </div>
      <div class="upgrade-steps">
        ${entries
          .map((key, index) => {
            const plan = plans[language][key];
            const value = ((index + 1) / entries.length) * 100;
            return `
              <div class="upgrade-step">
                <strong>${plan.code}</strong>
                <div class="upgrade-track">
                  <i style="width:${value}%; background:${key === 'alpha' ? colors.alpha : '#10b981'}"></i>
                </div>
                <b>${plan.code[0]}</b>
              </div>
            `;
          })
          .join('')}
      </div>
      </div>
    </div>
  `;
}

function planPage(key) {
  const plan = plans[language][key];
  return `
    ${header()}
    <section class="hero">
      <div class="hero-inner">
        <div>
          <p class="eyebrow">${plan.code}</p>
          <h1>${plan.name}: ${plan.tagline}</h1>
          <p class="lead">${plan.description}</p>
          <div class="hero-actions">
            <a class="primary" href="#pricing">${t('pricingTitle')}</a>
            <a class="secondary" href="${getWhatsappUrl(`I want ${plan.code} version`)}">${t('talkWhatsapp')}</a>
          </div>
        </div>
        ${phonePreview()}
      </div>
    </section>
    <main>
      ${problemSection(plan)}
      ${pricingSection(plan)}
      ${assistantSection(plan)}
    </main>
    ${footer()}
  `;
}

function problemSection(plan) {
  return `
    <section class="section">
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">${plan.code}</p>
          <h2>${language === 'ar' ? 'مشاكل حقيقية تحلها النسخة' : 'Real problems this version solves'}</h2>
        </div>
        <div class="problem-grid">
          ${plan.problems
            .map(
              ([title, text]) => `
                <article class="problem-card">
                  <h3>${title}</h3>
                  <p>${text}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function pricingSection(plan) {
  const labels = [t('monthly'), t('yearly'), t('lifetime')];
  return `
    <section class="section" id="pricing">
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">${plan.code}</p>
          <h2>${t('pricingTitle')}</h2>
        </div>
        <div class="pricing-grid" style="--plan-color:${colors[document.body.dataset.plan]}">
          ${labels
            .map(
              (label, index) => `
                <article class="price-card ${index === 1 ? 'featured' : ''}">
                  <h3>${label}</h3>
                  <strong>${plan.price[index]}</strong>
                  <p>${index === 0 ? 'Flexible start' : index === 1 ? 'Best value for active stores' : 'For stable long-term ownership'}</p>
                  <a class="primary" href="${getWhatsappUrl(`I choose ${plan.code} ${label}`)}">${t('choosePlan')}</a>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function downloadsSection(plan) {
  const buttons = [
    [t('android'), 'Google Play'],
    [t('ios'), 'App Store'],
    [t('desktop'), 'Desktop installer'],
    [t('web'), 'Web access'],
  ];
  return `
    <section class="section" id="platforms">
      <div class="section-inner">
        <div class="download-panel">
          <h2>${t('platformsTitle')}</h2>
          <p>${t('platformText')}</p>
          <div class="download-grid">
            ${buttons
              .map(
                ([label, message]) => `
                  <a class="store-button" href="${getWhatsappUrl(`Send me ${message} for ${plan.code}`)}">${label}</a>
                `,
              )
              .join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function assistantSection(plan) {
  return `
    <section class="section" id="assistant">
      <div class="section-inner assistant-shell">
        <div class="assistant-panel">
          <h2>${t('assistantTitle')}</h2>
          <p>${t('assistantText')}</p>
          <div class="assistant-box">
            <textarea id="assistantQuestion" placeholder="${t('assistantPlaceholder')}"></textarea>
            <button class="assistant-send" type="button" id="assistantSend">${t('assistantSend')}</button>
            <div class="assistant-answer" id="assistantAnswer">${t('assistantDefault')}</div>
          </div>
        </div>
        <div class="download-panel">
          <h3>${language === 'ar' ? 'الأدوات داخل النسخة' : 'Tools inside this version'}</h3>
          <ul class="feature-list" style="--plan-color:${colors[document.body.dataset.plan] || colors.vita}">
            ${plan.tools.map((tool) => `<li>${tool}</li>`).join('')}
          </ul>
          <div class="tools-followup">
            <h4>${language === 'ar' ? 'جاهز للترقية؟' : 'Ready to upgrade?'}</h4>
            <p>${language === 'ar' ? 'كل الأدوات الجديدة تظهر داخل نفس الحساب ونفس البيانات عند تغيير النسخة.' : 'New tools appear inside the same account and the same data when the version changes.'}</p>
            <a class="primary" href="${getWhatsappUrl(`I want to upgrade from ${plan.code}`)}">${t('talkWhatsapp')}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function footer() {
  return `
    <a class="wa-float" href="${getWhatsappUrl('I want to contact AlphaPos Trading')}">WhatsApp</a>
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <strong>AlphaPos Trading</strong>
          <p>${t('footer')}</p>
        </div>
        <div class="footer-downloads" id="platforms">
          <h3>${t('getApp')}</h3>
          <a class="store-badge" href="${getWhatsappUrl('Send me the App Store download link')}">
            <span class="store-icon store-icon-apple" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M16.9 12.7c0-2.4 2-3.6 2.1-3.7-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.2-2.8.9-3.6.9-.7 0-1.9-.9-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.2 1.8 2.5 3.1 2.5 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8 2.2-1.2 3-2.4c.9-1.3 1.3-2.6 1.3-2.7-.1-.1-2.6-1-2.6-3.9ZM14.6 5.6c.7-.8 1.1-1.9 1-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2-.5 2.7-1.3Z"/></svg>
            </span>
            <span><small>${t('appStoreSmall')}</small><b>App Store</b></span>
          </a>
          <a class="store-badge" href="${getWhatsappUrl('Send me the Google Play download link')}">
            <span class="store-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path class="play-blue" d="M4.4 3.3c-.3.3-.4.8-.4 1.4v14.6c0 .6.1 1.1.4 1.4l8-8.7-8-8.7Z"/><path class="play-green" d="m13.1 11.2 2.6-2.8L6.1 3c-.5-.3-.9-.3-1.3-.1l8.3 8.3Z"/><path class="play-yellow" d="m13.1 12.8-8.3 8.3c.4.2.8.2 1.3-.1l9.6-5.4-2.6-2.8Z"/><path class="play-red" d="m16.5 9-2.7 3 2.7 3 2.7-1.5c1-.6 1-1.4 0-2L16.5 9Z"/></svg>
            </span>
            <span><small>${t('googlePlaySmall')}</small><b>Google Play</b></span>
          </a>
          <div class="footer-mini-platforms">
            <a href="${getWhatsappUrl('Send me the desktop installer')}">PC</a>
            <a href="${getWhatsappUrl('Send me the web app link')}">WEB</a>
          </div>
          <h3 class="social-title">${t('stayTuned')}</h3>
          <div class="social-links">
            <a href="${getWhatsappUrl('I want AlphaPos community links')}" aria-label="Discord">
              <svg viewBox="0 0 24 24"><path d="M18.9 5.4A15.8 15.8 0 0 0 15 4.2l-.5 1a14 14 0 0 0-4.9 0l-.5-1a15.8 15.8 0 0 0-3.9 1.2C2.7 9.1 2 12.7 2.3 16.3a15.8 15.8 0 0 0 4.8 2.4l1-1.6a9.8 9.8 0 0 1-1.6-.8l.4-.3c3.1 1.4 7 1.4 10.1 0l.4.3c-.5.3-1 .6-1.6.8l1 1.6a15.8 15.8 0 0 0 4.8-2.4c.4-4.2-.7-7.8-2.7-10.9ZM8.7 14.1c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.7.8 1.6 1.8c0 1-.7 1.8-1.6 1.8Zm6.6 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.7.8 1.6 1.8c0 1-.7 1.8-1.6 1.8Z"/></svg>
            </a>
            <a href="${getWhatsappUrl('Send me AlphaPos X link')}" aria-label="X">
              <svg viewBox="0 0 24 24"><path d="M14.7 10.6 22 2h-1.7l-6.4 7.4L8.9 2H3l7.7 11.2L3 22h1.7l6.8-7.9L17 22h5.9l-8.2-11.4Zm-2.4 2.8-.8-1.1L5.4 3.3h2.7l5 7.4.8 1.1 6.4 9h-2.7l-5.3-7.4Z"/></svg>
            </a>
            <a href="${getWhatsappUrl('Send me AlphaPos YouTube link')}" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><path d="M21.6 7.2s-.2-1.5-.9-2.1c-.9-.9-1.8-.9-2.2-.9C15.4 4 12 4 12 4s-3.4 0-6.5.2c-.4 0-1.3 0-2.2.9-.7.6-.9 2.1-.9 2.1S2 9 2 10.9v1.7c0 1.9.4 3.7.4 3.7s.2 1.5.9 2.1c.9.9 2 .9 2.5 1 1.8.2 6.2.2 6.2.2s3.4 0 6.5-.2c.4 0 1.3 0 2.2-.9.7-.6.9-2.1.9-2.1s.4-1.8.4-3.7V11c0-1.9-.4-3.8-.4-3.8Zm-11.8 7.2V8.8l5.5 2.8-5.5 2.8Z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function homePage() {
  return `
    ${header()}
    ${hero()}
    <main>
      ${versionsGrid()}
      ${upgradeBand()}
      ${assistantSection(plans[language].alpha)}
    </main>
    ${footer()}
  `;
}

function attachEvents() {
  document.getElementById('languageButton')?.addEventListener('click', () => {
    language = language === 'en' ? 'ar' : 'en';
    localStorage.setItem('alphaposLanguage', language);
    render();
  });

  document.getElementById('assistantSend')?.addEventListener('click', () => {
    const question = document.getElementById('assistantQuestion').value.trim();
    const answer = document.getElementById('assistantAnswer');
    if (!question) return;
    const isArabic = language === 'ar';
    answer.textContent = assistantReply(question, isArabic);
  });
}

function assistantReply(question, isArabic) {
  const text = question.toLowerCase();
  if (text.includes('مخزون') || text.includes('جرد') || text.includes('inventory') || text.includes('stock')) {
    return isArabic
      ? 'لو احتياجك مخازن فقط فابدأ بـ JETA: منتجات، كميات، حركة مخزن، جرد، وتنبيهات نقص. ولو احتجت بيع بعد كده تعمل ترقية إلى VITA بدون نقل بيانات.'
      : 'If you only need inventory, start with JETA: products, quantities, warehouse movement, stock count, and low-stock alerts. Upgrade to VITA later for POS without moving data.';
  }
  if (text.includes('بيع') || text.includes('فاتورة') || text.includes('pos') || text.includes('invoice')) {
    return isArabic
      ? 'البيع والفواتير يبدأ من VITA. النسخة تضيف POS وسلة بيع وفواتير وتحديث تلقائي للمخزون فوق كل مميزات JETA.'
      : 'Sales and invoices start with VITA. It adds POS, basket checkout, invoices, and automatic stock reduction on top of JETA.';
  }
  if (text.includes('خزينة') || text.includes('مصروف') || text.includes('cash') || text.includes('expense')) {
    return isArabic
      ? 'الخزينة والمصاريف تبدأ من BETA. مناسبة لو سؤالك هو: فلوسي دخلت وخرجت فين؟ وتضيف عملاء وموردين فوق البيع والمخزون.'
      : 'Cashbox and expenses start with BETA. It answers where money entered and left, with customers and suppliers on top of POS and inventory.';
  }
  if (text.includes('موظف') || text.includes('تارجت') || text.includes('مرتب') || text.includes('staff') || text.includes('target') || text.includes('payroll')) {
    return isArabic
      ? 'إدارة الموظفين والتارجت والمرتبات تبدأ من THETA. تقدر تتابع مبيعات كل بائع، التارجت، العمولات، المكافآت، الخصومات، والصلاحيات.'
      : 'Staff management, targets, and payroll start with THETA. Track each seller sales, target achievement, commissions, bonuses, deductions, and permissions.';
  }
  if (text.includes('قيد') || text.includes('تحليل') || text.includes('journal') || text.includes('analysis')) {
    return isArabic
      ? 'القيود اليومية والتحليل المالي تبدأ من ZETA: أرباح وخسائر، Dashboard مالي، مؤشرات أداء، وربط الحركة اليومية بالتقارير.'
      : 'Daily journal entries and financial analysis start with ZETA: profit and loss, financial dashboard, KPIs, and accounting reports.';
  }
  if (text.includes('فرع') || text.includes('خبير') || text.includes('erp') || text.includes('branch') || text.includes('expert')) {
    return isArabic
      ? 'ALPHA هي النسخة الأعلى: ERP متعدد الفروع، حوكمة متقدمة، تنفيذ مخصص، وخبير مالي ذكي يساعدك تفهم الهوامش والمصاريف وأداء الفروع.'
      : 'ALPHA is the top version: multi-branch ERP, advanced governance, custom implementation, and an AI financial expert for margins, expenses, and branch performance.';
  }
  return isArabic
    ? 'اختار النسخة حسب المشكلة الحالية: JETA للمخازن، VITA للبيع، BETA للخزينة، THETA للموظفين، ZETA للتحليل المالي، وALPHA للفروع والخبير المالي. كل الترقيات تتم على نفس الحساب ونفس البيانات.'
    : 'Choose by current pain: JETA for inventory, VITA for POS, BETA for cashbox, THETA for staff, ZETA for financial analysis, and ALPHA for branches and AI financial expert. Upgrades keep the same account and data.';
}

function render() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
  const page = document.body.dataset.page;
  const plan = document.body.dataset.plan;
  document.getElementById('site').innerHTML =
    page === 'plan' ? planPage(plan) : homePage();
  attachEvents();
}

render();
