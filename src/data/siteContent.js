export const languageOptions = [
  { code: "ja", label: "JP" },
  { code: "en", label: "EN" },
];

export const commonContent = {
  brand: "Masayuki Honda",
  brandMark: "MH",
  keywords: ["Generative AI", "LLM", "AI Agent", "RAG / Search", "Multimodal AI", "Sovereign AI"],
  businessEmail: "masayuki.honda02@g.softbank.co.jp",
  personalEmail: "msykhnd1109@gmail.com",
  missionArticleUrl: "https://www.sbbit.jp/article/cont1/185958",
};

export const siteContent = {
  ja: {
    nav: [
      { href: "#mission", label: "注力領域" },
      { href: "#work", label: "実績" },
      { href: "#activities", label: "活動" },
      { href: "#contact", label: "連絡先" },
    ],
    hero: {
      eyebrow: "Sovereign AI / AI Agent / Domestic AI Cloud",
      title: "本多 誠之",
      body:
        "ソフトバンク株式会社で、社内向けAIサービスやML / LLMを活用したPoC開発に取り組んできました。今後はソブリンAIおよび国産次世代AIクラウド基盤の開発に注力していきます。",
      primaryAction: "注力領域を見る",
      secondaryAction: "連絡する",
    },
    profile: {
      kicker: "Profile",
      title: "プロフィール",
      items: [
        ["氏名", "本多 誠之（Masayuki Honda）"],
        ["所属", "ソフトバンク株式会社 次世代クラウド基盤開発本部 AIエージェント開発課"],
        ["兼務", "京都産業大学 講師・客員研究員"],
        ["学位", "博士号（東京農工大学）"],
      ],
    },
    mission: {
      kicker: "New Mission",
      title: "ソブリンAI：国産次世代AIクラウド基盤の構築",
      body:
        "これからのソフトバンクの注力領域として、ソブリンAI / ソブリンクラウドがあります。2026年6月30日、ソフトバンク・NEC・ホンダ・ソニーによる国産AI企業「Noetra」が、国家プロジェクト予算をもとに、基盤モデルおよび国産次世代AIクラウド基盤の構築に着手しました。",
      articleLabel: "SBビットの解説記事を読む",
      highlights: [
        { value: "3,873億円", label: "経済産業省より拠出" },
        { value: "Physical AI", label: "を見据えた基盤モデル開発" },
        { value: "Infra + App", label: "社会実装へつなぐ開発領域" },
      ],
    },
    career: {
      kicker: "Career",
      title: "キャリア・略歴",
      items: [
        ["2023年", "ソフトバンク株式会社 入社 / 東京農工大学にて博士号取得"],
        ["2023年〜", "AI戦略室 AIシステム開発部 NLPシステム開発課"],
        ["2025年〜", "AIテクノロジー本部 AIソリューション開発課"],
        ["2026年〜", "次世代クラウド基盤開発本部 AIエージェント開発課"],
      ],
    },
    work: {
      kicker: "Previous Work",
      title: "これまでの業務・プロジェクト",
      responsibilities: [
        "社内向けAIサービスの開発・保守",
        "ML / LLMを利用するPoC開発",
        "ソブリンクラウドプラットフォーム開発の初期検討・開発",
      ],
      projects: [
        {
          title: "SNS分析基盤",
          body:
            "SNS（X）を分析する社内向けプラットフォームを提供。Sentiment分類、Bot・ノイズ検出、AI Agentによる分析・レポート出力を実現。",
        },
        {
          title: "ChatGPT 社内知識連携システム",
          body:
            "社内ChatGPT Enterpriseへの外部知識連携を開発。部門・権限別の参照切り分けと、大規模データ向け検索を構築。",
        },
        {
          title: "株主総会 質問回答補助システム",
          body: "社内横断知識を活用し、株主向け回答生成と会場リアルタイムでの情報レコメンドを支援。",
        },
        {
          title: "キャリア店舗向け画像認識システム",
          body: "店舗運営における注意喚起を支援する顔画像認識システムの保守運用を担当。",
        },
      ],
    },
    activities: {
      kicker: "Activities and Education",
      title: "対外活動・教育活動",
      items: [
        {
          title: "学会・企業ブースでのデモ展示",
          body: "国内学会や企業展示ブース向けのPoC / デモ開発および展示活動に従事。",
          list: ["人工知能学会2026", "画像の認識・理解シンポジウム", "自然言語処理学会2026"],
        },
        {
          title: "大学講義・研究メンター",
          body:
            "京都産業大学でシステム開発演習の講義を担当。東京農工大学では博士学生の研究メンターや講演を実施。",
        },
      ],
    },
    research: {
      title: "学生時代の研究テーマ",
      items: [
        ["情報工学", "SSL手法を用いたロバストな手書き文字認識 / 歴史文書の自動採点"],
        ["農業情報", "光合成モデリング / ドローンによる植生指数抽出"],
        ["生命工学", "ナノポアを用いた疾患早期診断支援"],
        ["化学工学", "化学プラントでの製品成分推定"],
      ],
    },
    personal: {
      kicker: "Interests",
      title: "趣味・特技",
      items: ["ボードゲーム", "登山", "釣り", "お酒"],
    },
    contact: {
      kicker: "Contact",
      title: "連絡先",
      body: "公開サイトではメール連絡先のみを掲載しています。",
      businessLabel: "会社メール",
      personalLabel: "個人メール",
    },
    footer: {
      backToTop: "ページ上部へ",
    },
  },
  en: {
    nav: [
      { href: "#mission", label: "Mission" },
      { href: "#work", label: "Work" },
      { href: "#activities", label: "Activities" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      eyebrow: "Sovereign AI / AI Agent / Domestic AI Cloud",
      title: "Masayuki Honda",
      body:
        "I have worked on internal AI services and proof-of-concept development using ML / LLMs at SoftBank Corp. Going forward, I will focus on sovereign AI and the development of a next-generation domestic AI cloud platform.",
      primaryAction: "Focus Area",
      secondaryAction: "Contact",
    },
    profile: {
      kicker: "Profile",
      title: "Profile",
      items: [
        ["Name", "Masayuki Honda"],
        [
          "Organization",
          "SoftBank Corp., AI Agent Development Section, Next-Generation Cloud Infrastructure Development Division",
        ],
        ["Concurrent Role", "Lecturer and Visiting Researcher, Kyoto Sangyo University"],
        ["Degree", "Doctoral degree, Tokyo University of Agriculture and Technology"],
      ],
    },
    mission: {
      kicker: "New Mission",
      title: "Sovereign AI: Building a Next-Generation Domestic AI Cloud Platform",
      body:
        "Sovereign AI and sovereign cloud are among SoftBank's key focus areas going forward. On June 30, 2026, Noetra, a domestic AI company formed by SoftBank, NEC, Honda, and Sony, began building foundation models and a next-generation domestic AI cloud platform based on a national project budget.",
      articleLabel: "Read the SB Bit article",
      highlights: [
        { value: "387.3B JPY", label: "in funding from METI" },
        { value: "Physical AI", label: "oriented foundation models" },
        { value: "Infra + App", label: "development for real-world deployment" },
      ],
    },
    career: {
      kicker: "Career",
      title: "Career",
      items: [
        ["2023", "Joined SoftBank Corp. / Received doctoral degree from Tokyo University of Agriculture and Technology"],
        ["2023-", "NLP System Development Section, AI System Development Department, AI Strategy Office"],
        ["2025-", "AI Solution Development Section, AI Technology Division"],
        ["2026-", "AI Agent Development Section, Next-Generation Cloud Infrastructure Development Division"],
      ],
    },
    work: {
      kicker: "Previous Work",
      title: "Previous Work and Projects",
      responsibilities: [
        "Development and maintenance of internal AI services",
        "Proof-of-concept development using ML / LLMs",
        "Early-stage research and development for sovereign cloud platforms",
      ],
      projects: [
        {
          title: "SNS Analytics Platform",
          body:
            "Provided an internal platform for analyzing SNS data, mainly X, with sentiment classification, bot detection, noise detection, and AI Agent reporting.",
        },
        {
          title: "ChatGPT Internal Knowledge Integration System",
          body:
            "Connected internal-domain external knowledge to ChatGPT Enterprise with permission-aware references and large-scale vector and hybrid search.",
        },
        {
          title: "Shareholders' Meeting Q&A Support System",
          body:
            "Supported answer generation using cross-organizational knowledge and provided real-time information recommendations at the meeting venue.",
        },
        {
          title: "Image Recognition System for Carrier Stores",
          body: "Maintained and operated a face image recognition system that supports in-store alerts and operations.",
        },
      ],
    },
    activities: {
      kicker: "Activities and Education",
      title: "External Activities and Education",
      items: [
        {
          title: "Demonstrations at Academic Conferences and Corporate Booths",
          body: "Developed and presented PoCs / demos for domestic academic conferences and corporate exhibition booths.",
          list: [
            "The Japanese Society for Artificial Intelligence 2026",
            "Meeting on Image Recognition and Understanding",
            "The Association for Natural Language Processing 2026",
          ],
        },
        {
          title: "University Lecture and Research Mentor",
          body:
            "Taught system development exercises at Kyoto Sangyo University and occasionally mentors doctoral students at Tokyo University of Agriculture and Technology.",
        },
      ],
    },
    research: {
      title: "Research Topics as a Student",
      items: [
        [
          "Computer Science",
          "Robust handwritten character recognition using SSL methods / Automated grading of historical documents",
        ],
        ["Agricultural Informatics", "Photosynthesis modeling / Vegetation index extraction using drones"],
        ["Biotechnology", "Early disease diagnosis support using nanopores"],
        ["Chemical Engineering", "Product component estimation in chemical plants"],
      ],
    },
    personal: {
      kicker: "Interests",
      title: "Hobbies and Interests",
      items: ["Board games", "Mountain climbing", "Fishing", "Sake and other alcoholic drinks"],
    },
    contact: {
      kicker: "Contact",
      title: "Contact",
      body: "Only email contacts are listed on this public website.",
      businessLabel: "Business email",
      personalLabel: "Personal email",
    },
    footer: {
      backToTop: "Back to top",
    },
  },
};
