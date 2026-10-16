export type Category = 'serious' | 'vr' | 'mobile' | 'desktop' | 'tool'

// TODO: replace with the final custom domain once registered (used for canonical URL,
// sitemap, robots and JSON-LD structured data — one place to change everything).
export const SITE_URL = 'https://ilyesahmed.vercel.app'

export interface Project {
  slug: string
  title: string
  year: number
  role: string
  genre: string
  platform: string
  category: Category
  description: string
  longDescription: string
  tags: string[]
  cover: string
  screenshots: string[]
  link?: { label: string; url: string }
  featured?: boolean
}

export const identity = {
  name: 'Ilyes Ahmed',
  title: 'Unity Game Programmer',
  subtitle: 'VR/XR Developer',
  location: 'Hammam Sousse, Tunisia',
  email: 'ilyesahmed6@gmail.com',
  phone: '+216 29 246 536',
  linkedin: 'https://linkedin.com/in/ilyesahmed',
  github: 'https://github.com/SILYESS',
  itch: 'https://silyesss.itch.io/portfolio',
  resume: '/ilyes-ahmed-resume.pdf',
  summary:
    'Unity developer and game designer with 4+ years shipping gameplay systems and VR/XR experiences in C#. I build multiplayer, gesture-recognition, and full-backend systems for cultural, medical, and mobile projects — plus indie titles taken from prototype through deployment.',
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'French', level: 'B2' },
    { name: 'English', level: 'B2' },
  ],
}

export const stats = [
  { value: 20, suffix: '+', label: 'Projects Built' },
  { value: 4, suffix: '+', label: 'Years in Unity' },
  { value: 6, suffix: '', label: 'Medical VR Experiences' },
  { value: 15, suffix: '', label: 'Titles Shipped' },
]

export const marqueeItems = [
  'Unity 3D',
  'C#',
  'VR / XR',
  'XR Interaction Toolkit',
  'Netcode for GameObjects',
  'Oculus',
  'Game Physics',
  'Strapi',
  'PostgreSQL',
  'Firebase',
  'Supabase',
  'Finite State Machines',
  'AI Behavior',
  'Gesture Recognition',
  'Multiplayer',
  'ScriptableObjects',
]

export const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'serious', label: 'Serious Games' },
  { id: 'vr', label: 'VR Experiences' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'desktop', label: 'Desktop' },
  { id: 'tool', label: 'Tools' },
]

export const projects: Project[] = [
  // ---------- FEATURED ----------
  {
    slug: 'dragonslayer-vr',
    title: 'DragonSlayer VR',
    year: 2024,
    role: 'Developer',
    genre: 'Tactical RPG',
    platform: 'VR Only',
    category: 'serious',
    featured: true,
    description:
      'A physiotherapy-driven combat VR experience where players cast spells through shoulder and arm gestures designed with physiotherapists to treat movement impairments.',
    longDescription:
      'DragonSlayer VR turns physical rehabilitation into a fantasy tactical RPG. Patients recover shoulder and arm mobility by drawing magic runes and casting spells in battle — every gesture is a therapeutic movement designed hand-in-hand with physiotherapists. Spells are recognized in real time with the PDollar Gesture Recognizer, and the turn-based combat runs on a finite state machine, keeping sessions engaging while tracking physical progress.',
    tags: ['Unity', 'XR Interaction Toolkit', 'PDollar Gestures', 'State Machine', 'Healthcare'],
    cover: '/assets/projects/dragonslayer-vr_cover.png',
    screenshots: [
      '/assets/projects/dragonslayer-vr_2.png',
      '/assets/projects/dragonslayer-vr_3.png',
      '/assets/projects/dragonslayer-vr_4.png',
    ],
  },
  {
    slug: 'sousse-digital-twin',
    title: 'Sousse Digital Twin',
    year: 2023,
    role: 'Gameplay Developer',
    genre: 'Historical Multiplayer Simulation',
    platform: 'VR + Desktop',
    category: 'vr',
    featured: true,
    description:
      'A digital twin of ancient Sousse (800 BC – 1956) built as an explorable multiplayer VR simulation — exhibited at the First Arab Forum on Metaverse and the Future of Creative Cultural Industries.',
    longDescription:
      'Sousse Digital Twin reconstructs the ancient city of Sousse across two millennia (800 BC – 1956 AC) as a fully explorable multiplayer VR simulation with in-world voice chat. Visitors walk the streets together, guided through historically faithful reconstructions. The project was showcased at the First Arab Forum on Metaverse and the Future of Creative Cultural Industries, bringing Tunisian heritage into immersive tech.',
    tags: ['Unity', 'Netcode', 'Multiplayer', 'Voice Chat', 'Cultural Heritage', 'Metaverse'],
    cover: '/assets/projects/sousse-twin_cover.png',
    screenshots: [
      '/assets/projects/sousse-twin_2.png',
      '/assets/projects/sousse-twin_3.png',
    ],
  },
  {
    slug: 'clinicker',
    title: 'Clinicker',
    year: 2025,
    role: 'Developer',
    genre: 'Clinic Simulation',
    platform: 'Desktop',
    category: 'desktop',
    featured: true,
    description:
      'A 3D interactive clinic simulation featuring AI-driven dialogue with ConvAI, Firebase-backed patient profiles, and cinematic cutscenes.',
    longDescription:
      'Clinicker is a 3D interactive clinic simulation where players step into the shoes of medical staff. Patients are brought to life through AI-powered conversations via ConvAI, while Firebase Authentication manages personalized profiles and progression. Cinematic cutscenes give the experience a polished, story-driven feel — a full product combining gameplay systems, backend services, and narrative direction.',
    tags: ['Unity', 'ConvAI', 'Firebase Auth', 'Cutscenes', 'Simulation'],
    cover: '/assets/projects/clinicker_cover.png',
    screenshots: [
      '/assets/projects/clinicker_2.png',
      '/assets/projects/clinicker_3.png',
      '/assets/projects/clinicker_4.png',
      '/assets/projects/clinicker_5.png',
      '/assets/projects/clinicker_6.png',
    ],
  },
  {
    slug: 'contra',
    title: 'Contra',
    year: 2025,
    role: 'Developer · Game Designer',
    genre: 'Stealth Racing',
    platform: 'Desktop',
    category: 'desktop',
    featured: true,
    description:
      'Play as a black-market dealer pursued by the police — a tense mix of driving and stealth where every route is a risk.',
    longDescription:
      'Contra puts players in the seat of a black-market dealer trying to stay one step ahead of the police. The game blends driving sequences with stealth mechanics: choose when to speed, when to hide, and how to move your goods without drawing attention. Designed and developed end-to-end, from core driving feel to the risk-reward loop that keeps every delivery tense.',
    tags: ['Unity', 'Game Design', 'Stealth', 'Driving', 'AI'],
    cover: '/assets/projects/contra_cover.png',
    screenshots: [
      '/assets/projects/contra_2.png',
      '/assets/projects/contra_3.png',
      '/assets/projects/contra_4.png',
    ],
  },
  // ---------- SERIOUS GAMES ----------
  {
    slug: 'social-phobia-vr',
    title: 'Social Phobia VR',
    year: 2024,
    role: 'Developer',
    genre: 'Exposure Therapy Simulation',
    platform: 'VR Only',
    category: 'serious',
    description:
      'A gradual-exposure therapy experience for social phobia, with AI-navigated crowds and a full traffic system recreating anxiety-triggering public spaces.',
    longDescription:
      'Social Phobia VR is designed as a controlled exposure therapy tool for people living with social anxiety. Players face progressively challenging public scenarios — streets, crowds, interactions — recreated with AI-navigated pedestrian crowds and a complete traffic system. The experience gives therapists a safe, tunable environment to help patients build real-world resilience.',
    tags: ['Unity', 'XR Interaction Toolkit', 'AI Navigation', 'Crowd Simulation', 'Healthcare'],
    cover: '/assets/projects/social-phobia-vr_cover.png',
    screenshots: [
      '/assets/projects/social-phobia-vr_2.png',
      '/assets/projects/social-phobia-vr_3.png',
      '/assets/projects/social-phobia-vr_4.png',
      '/assets/projects/social-phobia-vr_5.png',
    ],
  },
  {
    slug: 'arachnophobia',
    title: 'Arachnophobia',
    year: 2024,
    role: 'Developer',
    genre: 'Exposure Therapy Simulation',
    platform: 'VR Only',
    category: 'serious',
    description:
      'Spider-phobia exposure therapy in VR, with behavior-driven AI spiders escalating from distant encounters to close interaction.',
    longDescription:
      'Arachnophobia helps patients confront their fear of spiders through gradual, therapist-controlled exposure in virtual reality. AI spiders run on a state machine — crawling, approaching, and reacting to the player — allowing intensity to scale session by session, from a distant sighting to close-range interaction.',
    tags: ['Unity', 'XR Interaction Toolkit', 'State Machine', 'AI Behavior', 'Healthcare'],
    cover: '/assets/projects/arachnophobia_cover.png',
    screenshots: [
      '/assets/projects/arachnophobia_2.png',
      '/assets/projects/arachnophobia_3.png',
      '/assets/projects/arachnophobia_4.png',
    ],
  },
  {
    slug: 'divinus-vr',
    title: 'DIVINUS VR',
    year: 2023,
    role: 'Developer',
    genre: 'Hack & Slash',
    platform: 'VR Only',
    category: 'serious',
    description:
      'Fight as a warrior of DIVINUS battling diabetes — a hack & slash that gamifies health management into visceral VR combat.',
    longDescription:
      'DIVINUS VR is a gamified health experience: players become a warrior of DIVINUS literally fighting diabetes, transforming the discipline of managing a chronic condition into satisfying hack & slash combat. Every enemy defeated mirrors a real-world health victory, making an invisible daily struggle tangible, physical, and beatable.',
    tags: ['Unity', 'Combat Design', 'Gamified Health', 'VR'],
    cover: '/assets/projects/divinus-vr_cover.png',
    screenshots: ['/assets/projects/divinus-vr_2.png'],
  },
  {
    slug: 'golf-vr',
    title: 'GOLF VR',
    year: 2023,
    role: 'Gameplay Developer',
    genre: 'Sports / Medical',
    platform: 'VR Only',
    category: 'serious',
    description:
      'Mini-golf built for hip physiotherapy — natural swing motions turned into a rehabilitation routine.',
    longDescription:
      'GOLF VR turns hip physiotherapy into a round of mini-golf. Each putt is designed around controlled hip movement prescribed by therapists, so patients repeat their rehabilitation exercises naturally while chasing the perfect score. Gameplay development focused on realistic swing physics and satisfying feedback loops.',
    tags: ['Unity', 'Game Physics', 'Physiotherapy', 'VR'],
    cover: '/assets/projects/golf-vr_cover.jpg',
    screenshots: [
      '/assets/projects/golf-vr_2.png',
      '/assets/projects/golf-vr_3.png',
    ],
  },
  {
    slug: 'maze-vr',
    title: 'MAZE VR',
    year: 2023,
    role: 'Independent Developer',
    genre: 'Puzzle / Medical',
    platform: 'VR Only',
    category: 'serious',
    description:
      'A puzzle maze built for arm-movement rehabilitation — independently designed and developed from concept to release.',
    longDescription:
      'MAZE VR challenges patients to guide their way through puzzle mazes using targeted arm movements, turning repetitive rehabilitation exercises into an exploratory puzzle game. Built independently from concept to release, it taught me how far disciplined, scoped-down design can go in a medical context.',
    tags: ['Unity', 'Puzzle Design', 'Physiotherapy', 'VR'],
    cover: '/assets/projects/maze-vr_cover.png',
    screenshots: [
      '/assets/projects/maze-vr_2.png',
      '/assets/projects/maze-vr_3.png',
    ],
  },
  // ---------- VR EXPERIENCES ----------
  {
    slug: 'historyconnexion',
    title: 'HistoryConnexion',
    year: 2025,
    role: 'Freelance Developer',
    genre: 'VR Exploration & Education',
    platform: 'VR',
    category: 'vr',
    description:
      'Explore the Dougga historical site in VR — interact, collect artifacts with an inventory system, and unlock new areas like the market and the Capitole.',
    longDescription:
      'HistoryConnexion lets users freely explore Dougga, Tunisia’s best-preserved Roman archaeological site, in virtual reality. Interactions and an inventory system let visitors collect artifacts scattered across the site; collecting enough unlocks new areas — the market, the Capitole, and beyond — turning exploration into a progression-driven learning experience. The formula proved durable enough to be extended to Petra, Jordan in a follow-up engagement: narrated landmark tours connected by a glowing portal system.',
    tags: ['Unity', 'XR Interaction Toolkit', 'Inventory System', 'Cultural Heritage'],
    cover: '/assets/projects/historyconnexion_cover.jpg',
    screenshots: [
      '/assets/projects/historyconnexion_2.jpg',
      '/assets/projects/historyconnexion_3.jpg',
      '/assets/projects/historyconnexion_4.jpg',
    ],
    link: {
      label: 'Watch on YouTube',
      url: 'https://www.youtube.com/watch?v=NdgDyYS-4gw',
    },
  },
  {
    slug: 'electionvr',
    title: 'ElectionVR',
    year: 2026,
    role: 'Freelance Developer',
    genre: 'VR Civic Education',
    platform: 'VR',
    category: 'vr',
    description:
      'Practice the Tunisian election process step by step in VR — full hand and controller interaction, a state machine driving each electoral stage, and NPCs powered by Unity Behavior.',
    longDescription:
      'ElectionVR teaches Tunisian citizens the complete election process by letting them live it in virtual reality. Using VR hands and controllers, users move through every stage — registration, voting, counting — orchestrated by a state machine that guarantees procedural fidelity. NPCs built with Unity Behavior bring the polling station to life, guiding and reacting like real officials.',
    tags: ['Unity', 'VR Hands', 'State Machine', 'Unity Behavior', 'NPCs'],
    cover: '/assets/projects/electionvr_cover.jpg',
    screenshots: [
      '/assets/projects/electionvr_2.jpg',
      '/assets/projects/electionvr_3.jpg',
      '/assets/projects/electionvr_4.jpg',
      '/assets/projects/electionvr_5.jpg',
    ],
  },
  {
    slug: 'viking-vr',
    title: 'VIKING VR',
    year: 2023,
    role: 'Developer',
    genre: 'Action',
    platform: 'VR Only',
    category: 'vr',
    description:
      'A commission for pharma group Opalia Recordati — Vikings clashing with Greek gods in fast-paced VR action.',
    longDescription:
      'VIKING VR was commissioned by pharmaceutical group Opalia Recordati: a branded VR action experience where Viking warriors battle Greek gods. Working to a client brief, I delivered combat feel, event flow, and a spectacle-heavy tone that made the brand experience memorable at events.',
    tags: ['Unity', 'Client Work', 'Combat Design', 'VR'],
    cover: '/assets/projects/viking-vr_cover.png',
    screenshots: [
      '/assets/projects/viking-vr_2.png',
      '/assets/projects/viking-vr_3.png',
    ],
  },
  // ---------- MOBILE ----------
  {
    slug: 'capture-the-car',
    title: 'Capture the Car',
    year: 2026,
    role: 'Freelance Developer',
    genre: 'Top-Down Multiplayer',
    platform: 'Mobile',
    category: 'mobile',
    description:
      'Real-time top-down multiplayer Capture the Car with full backend — Netcode for GameObjects, Strapi + PostgreSQL handling stats, accounts, and email flows.',
    longDescription:
      'Capture the Car is a top-down multiplayer mobile game built on real-time networking with Unity Netcode for GameObjects. A full Strapi + PostgreSQL backend handles player accounts and stats, with email-confirmation and password-reset flows implemented via Gmail SMTP app passwords. A complete online game stack: netcode, backend, auth, and live player data.',
    tags: ['Unity', 'Netcode for GameObjects', 'Strapi', 'PostgreSQL', 'Auth', 'SMTP'],
    cover: '/assets/projects/capture-the-car_cover.jpg',
    screenshots: [
      '/assets/projects/capture-the-car_2.jpg',
      '/assets/projects/capture-the-car_3.jpg',
      '/assets/projects/capture-the-car_4.jpg',
    ],
  },
  {
    slug: 'astro-ranger',
    title: 'ASTRO-RANGER',
    year: 2026,
    role: 'Freelance Developer',
    genre: '2D Space Shooter',
    platform: 'iOS & Android',
    category: 'mobile',
    description:
      'A 2D space invader mobile game with 5 levels and a boss fight — collect coins, upgrade your ship, with IAP set up for both iOS and Android.',
    longDescription:
      'ASTRO-RANGER is a polished 2D space shooter for mobile: five handcrafted levels culminating in a boss fight, a coin-collection economy feeding spaceship upgrades, and In-App Purchases wired up for both iOS and Android. A complete mobile product loop — gameplay, economy, monetization, and store readiness.',
    tags: ['Unity', '2D', 'IAP', 'Game Economy', 'Mobile'],
    cover: '/assets/projects/astro-ranger_cover.jpg',
    screenshots: [
      '/assets/projects/astro-ranger_2.jpg',
      '/assets/projects/astro-ranger_3.jpg',
      '/assets/projects/astro-ranger_4.jpg',
    ],
    link: { label: 'View on GitHub', url: 'https://github.com/SILYESS/ASTRO-RANGER' },
  },
  {
    slug: 'towerstrike',
    title: 'TowerStrike',
    year: 2026,
    role: 'Freelance Developer',
    genre: 'Tower Game',
    platform: 'Mobile',
    category: 'mobile',
    description:
      'Joined an existing mobile tower game and shipped new systems — Facebook auth, gameplay features, and UI passes across a live codebase.',
    longDescription:
      'TowerStrike is a tower-based mobile game with full auth and login. I joined the project with an existing codebase and a scoped task list: implementing Facebook authentication, building out gameplay systems, and delivering UI passes that slotted cleanly into the existing architecture. A real-world exercise in working inside a live product.',
    tags: ['Unity', 'Facebook Auth', 'Gameplay Systems', 'UI'],
    cover: '/assets/projects/towerstrike_cover.jpg',
    screenshots: [
      '/assets/projects/towerstrike_2.jpg',
      '/assets/projects/towerstrike_3.jpg',
      '/assets/projects/towerstrike_4.jpg',
    ],
    link: { label: 'View on GitHub', url: 'https://github.com/SILYESS/TowerStrike' },
  },
  {
    slug: 'lovequest',
    title: 'LoveQuest',
    year: 2025,
    role: 'Developer · Game Designer',
    genre: '2D Platformer',
    platform: 'Mobile',
    category: 'mobile',
    description:
      'A pixel-art Valentine’s platformer built as a romantic gift game — handcrafted puzzles with a heartfelt twist.',
    longDescription:
      'LoveQuest is a pixel-art 2D platformer created as a Valentine’s Day gift game: romantic puzzle platforming with handcrafted levels and a personal narrative thread. Designed and developed as a complete, shippable mobile title — proof that games can carry feeling, not just mechanics.',
    tags: ['Unity', '2D', 'Pixel Art', 'Puzzle Design'],
    cover: '/assets/projects/lovequest_cover.png',
    screenshots: [
      '/assets/projects/lovequest_2.png',
      '/assets/projects/lovequest_3.png',
      '/assets/projects/lovequest_4.png',
    ],
  },
  {
    slug: 'shoot',
    title: 'SHOOT',
    year: 2023,
    role: 'Independent Developer',
    genre: 'Top-Down Shooter',
    platform: 'Android',
    category: 'mobile',
    description:
      'One of my first games — a top-down shooter for Android built independently while learning the craft.',
    longDescription:
      'SHOOT is a top-down action shooter for Android and one of my first complete games. Built independently, it taught me the full loop of shipping: input, enemy AI, waves, game over, and restart. Every project since stands on lessons learned here.',
    tags: ['Unity', '2D', 'Shooter', 'Android'],
    cover: '/assets/projects/shoot_cover.png',
    screenshots: ['/assets/projects/shoot_2.png'],
  },
  // ---------- DESKTOP ----------
  {
    slug: 'batwoman',
    title: 'Batwoman',
    year: 2026,
    role: 'Solo Developer',
    genre: 'Action-Adventure',
    platform: 'Desktop',
    category: 'desktop',
    description:
      'Fan-made third-person action-adventure set in a rain-soaked Gotham — melee combat, clue-driven investigation, dialogue choices, minimap, and a full save/load system.',
    longDescription:
      'Batwoman is a fan-made, story-driven action-adventure for desktop ("A Gotham Story"). Playing as Kate Kane in a rain-soaked Gotham, you track scattered clues across the city with an objective tracker and live minimap, talk through branching dialogue with Batman himself, fight through enemy encounters up to a boss fight, and manage progress through a complete save/load system. A passion project that covers every pillar of the action-adventure loop: story, exploration, combat, and persistence.',
    tags: ['Unity', 'Combat System', 'Investigation', 'Save/Load', 'Minimap', 'Boss Fight'],
    cover: '/assets/projects/batwoman_cover.jpg',
    screenshots: [
      '/assets/projects/batwoman_2.jpg',
      '/assets/projects/batwoman_3.jpg',
      '/assets/projects/batwoman_4.jpg',
      '/assets/projects/batwoman_5.jpg',
    ],
  },
  {
    slug: 'indar-showroom',
    title: 'Indar Showroom',
    year: 2025,
    role: 'Developer',
    genre: 'Virtual Showroom',
    platform: 'Desktop',
    category: 'desktop',
    description:
      'A virtual furniture showroom where clients inspect materials, dimensions, and arrangements before a single physical piece is built.',
    longDescription:
      'Indar Showroom digitizes the furniture buying experience: clients walk a virtual showroom, inspect materials and dimensions up close, and preview arrangements in context before committing. Developed for a real client pipeline — where seeing the product virtually shortens decisions and cuts showroom costs.',
    tags: ['Unity', 'Client Work', 'Product Visualization', 'Desktop'],
    cover: '/assets/projects/showroom_cover.png',
    screenshots: [
      '/assets/projects/showroom_2.png',
      '/assets/projects/showroom_3.png',
      '/assets/projects/showroom_4.png',
      '/assets/projects/showroom_5.png',
    ],
  },
  // ---------- TOOLS ----------
  {
    slug: 'dialogue-system-tool',
    title: 'Dialogue System Tool',
    year: 2025,
    role: 'Solo Developer',
    genre: 'Unity Editor Tool',
    platform: 'Unity Editor',
    category: 'tool',
    description:
      'A node-based dialogue editor for the Unity Editor — letting developers design branching conversations visually with ScriptableObjects and Unity nodes.',
    longDescription:
      'The Dialogue System Tool is a Unity Editor extension that lets developers create and manage branching dialogues using a visual node graph, built directly on ScriptableObjects and Unity’s node framework. Designers write conversations without touching code; developers get clean, serializable data at runtime. Built solo to scratch a recurring itch across every narrative project.',
    tags: ['Unity', 'Editor Scripting', 'ScriptableObjects', 'Node Graph', 'Tools'],
    cover: '/assets/projects/dialogue-system-tool_cover.jpg',
    screenshots: [
      '/assets/projects/dialogue-system-tool_2.jpg',
    ],
  },
]

export const skillGroups = [
  {
    icon: 'Gamepad2',
    title: 'Engine & Languages',
    skills: ['Unity 3D (2D & 3D)', 'C#', 'C++', 'OOP', 'Python'],
  },
  {
    icon: 'Glasses',
    title: 'VR / XR Development',
    skills: ['Oculus', 'XR Interaction Toolkit', 'Hand Tracking', 'Gesture Recognition (PDollar)', 'WebGL'],
  },
  {
    icon: 'Cpu',
    title: 'Gameplay & Systems',
    skills: ['Gameplay Mechanics', 'Game Physics', 'Finite State Machines', 'AI Behavior', 'Character Controllers', 'UI/UX Systems'],
  },
  {
    icon: 'Server',
    title: 'Production & Backend',
    skills: ['Netcode for GameObjects', 'PostgreSQL', 'Firebase', 'Supabase', 'Strapi', 'REST APIs & Auth', 'Version Control', 'Agile'],
  },
  {
    icon: 'PenTool',
    title: 'Design & Media',
    skills: ['Game Design', 'Figma', 'Adobe XD', 'Photoshop', 'FL Studio'],
  },
]

export const experience = [
  {
    role: 'Unity Instructor',
    org: 'ISBAS — Sousse, Tunisia',
    period: 'Sep 2023 – Present',
    current: true,
    points: [
      'Designed and delivered a Unity development curriculum covering C# scripting, gameplay mechanics, physics, and UI.',
      'Teach 12 students per cohort, with coursework focused on turning engine concepts into playable prototypes.',
    ],
  },
  {
    role: 'Online Unity Instructor',
    org: 'Freelance — Fiverr (Remote)',
    period: '2024 – Present',
    current: true,
    points: [
      'Mentor students 1-on-1 in Unity and game development online, currently teaching a 13-year-old student from Canada.',
      'Rated 5 stars on Fiverr for live, personalized programming lessons.',
    ],
  },
  {
    role: 'Game Developer',
    org: '3DWAVE — Sousse, Tunisia',
    period: 'Sep 2022 – Sep 2024',
    current: false,
    points: [
      'Built and shipped gameplay systems, UI, and core mechanics in Unity/C# across 15 indie and VR titles, taking each from prototype through deployment in a small cross-functional team.',
      'Re-engineered performance-critical gameplay algorithms, reducing frame time by ~25%, and integrated 3D models and animations from the art team into live gameplay scenes.',
    ],
  },
  {
    role: 'Technical Consultant',
    org: 'ZUM-IT — Tunis, Tunisia',
    period: 'Oct 2021 – Aug 2022',
    current: false,
    points: [
      'Translated client business processes into software recommendations across 4 engagements.',
      'Delivered training sessions to support technology adoption.',
    ],
  },
]

export const education = [
  {
    degree: 'Engineering Degree in Computer Science',
    school: 'University of Carthage — ENSTAB, Tunis',
    period: '2017 – 2021',
  },
  {
    degree: 'Preparatory Studies in Engineering',
    school: 'University of Monastir — IPEIM',
    period: '2015 – 2017',
  },
]

export const testimonials = [
  {
    quote:
      'Ahmed is an exceptional and patient Unity tutor who uses an engaging, dialogue-based teaching style to help young students think through problems independently. Highly professional and supportive, he comes strongly recommended for any parent seeking an interactive learning environment for their child.',
    source: 'Fiverr client review',
    context: 'Parent of a 13-year-old Unity student',
    rating: 5,
    criteria: [
      { label: 'Communication', score: 5 },
      { label: 'Quality of delivery', score: 5 },
      { label: 'Value of delivery', score: 5 },
    ],
    highlights: [
      'Quick responsiveness',
      'Politeness',
      'Proactive communication',
      'Language fluency',
      'Delivery time',
      'Went above and beyond',
      'Deep understanding',
      'Level of cooperation',
      'Professionalism of work',
      'Exceeded expectations',
      'Attention to details',
    ],
  },
]

export const certifications = [
  { name: 'A Complete Guide to Game Design', detail: 'HPGG02.en · June 2024' },
  { name: 'C++ Programming', detail: 'July 2021' },
]
