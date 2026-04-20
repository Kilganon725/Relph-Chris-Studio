// Site configuration
// Replace empty values with your content to customize the template

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface HeroConfig {
  brandLeft: string;
  brandRight: string;
  tagline: string;
  badge: string;
  since: string;
  email: string;
  heroImage: string;
  heroImageAlt: string;
  scrollText: string;
  copyrightText: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutConfig {
  label: string;
  headline: string;
  description: string;
  bottomText: string;
  galleryImages: GalleryImage[];
  stats: StatItem[];
}

export interface Exhibition {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
}

export interface ExhibitionsConfig {
  label: string;
  headline: string;
  ctaText: string;
  exhibitions: Exhibition[];
}

export interface SportDetailImage {
  src: string;
  alt: string;
  caption: string;
}

export interface SportDetail {
  slug: string;
  title: string;
  period: string;
  description: string;
  gallery: SportDetailImage[];
  videos?: SportDetailVideo[];
}

export interface SportDetailVideo {
  src: string;
  title: string;
  caption: string;
}

export interface Collection {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
}

export interface CollectionsConfig {
  label: string;
  headline: string;
  ctaText: string;
  collections: Collection[];
}

export interface TestimonialsConfig {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
}

export interface InfoCard {
  icon: string;
  title: string;
  content: string;
}

export interface VisitConfig {
  label: string;
  headline: string;
  description: string;
  ctaText: string;
  infoCards: InfoCard[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  marqueeText: string;
  brandName: string;
  brandDescription: string;
  socialLinks: SocialLink[];
  quickLinks: FooterLink[];
  quickLinksTitle: string;
  contactTitle: string;
  contactItems: string[];
  bottomLinks: FooterLink[];
}

export const siteConfig: SiteConfig = {
  language: "zh",
  title: "钟文鹏 | Relph Chris - 极限运动爱好者",
  description: "钟文鹏（Relph Chris）的个人网站，展示滑雪、赛车、篮球、拳击、冲浪、赛马等多项运动的热爱与成就。",
};

export const heroConfig: HeroConfig = {
  brandLeft: "钟文鹏",
  brandRight: "Relph Chris",
  tagline: "极限运动爱好者 / 多领域运动员",
  badge: "中国 · 浙江",
  since: "Born in 2004",
  email: "chrisrelph725@gmail.com",
  heroImage: "/images_new/hero_main.JPG",
  heroImageAlt: "钟文鹏 - 极限运动爱好者",
  scrollText: "向下滚动探索",
  copyrightText: "© 2024 Relph Chris. All rights reserved.",
  navLinks: [
    { label: "关于", href: "#about" },
    { label: "运动", href: "#exhibitions" },
    { label: "收藏", href: "#collections" },
    { label: "联系", href: "#visit" },
  ],
  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com/kd.relph?igsh=bmh3N2NiaGVjeGd0&utm_source=qr" },
    { label: "Threads", href: "https://www.threads.com/@kilganonscott?igshid=NTc4MTIwNjQ2YQ==" },
    { label: "X", href: "https://x.com/relph35432?s=21" },
    { label: "YouTube", href: "https://youtube.com/@chrisrelphpp?si=VdZ2PNGtX68iaTHy" },
  ],
};

export const aboutConfig: AboutConfig = {
  label: "始于热爱",
  headline: "挑战极限，突破自我",
  description: "我是钟文鹏，英文名 Relph Chris。从第一次踏上滑雪板的那一刻起，我就被极限运动的魅力深深吸引。十余年来，我不断挑战自我，在滑雪、赛车、篮球、拳击、冲浪、赛马等多个领域追求卓越。运动不仅是我的爱好，更是我探索世界、认识自我的方式。",
  bottomText: "每一次突破都是新的开始，每一次挑战都让我更加热爱这个世界。我相信，只要保持热爱，就没有到达不了的远方。",
  galleryImages: [
    { src: "/images_new/muscle_1.JPG", alt: "力量训练", label: "力量训练" },
    { src: "/images_new/muscle_2.jpg", alt: "晨跑", label: "晨跑" },
    { src: "/images_new/muscle_3.jpg", alt: "山地骑行", label: "山地骑行" },
    { src: "/images_new/muscle_4.JPG", alt: "攀岩", label: "攀岩" },
    { src: "/images_new/muscle_5.jpg", alt: "游泳", label: "游泳" },
    { src: "/images_new/muscle_6.jpg", alt: "瑜伽冥想", label: "瑜伽冥想" },
  ],
  stats: [
    { value: "6+", label: "精通运动" },
    { value: "14", label: "运动年限" },
    { value: "50+", label: "参赛经历" },
    { value: "20+", label: "获奖荣誉" },
  ],
};

export const exhibitionsConfig: ExhibitionsConfig = {
  label: "我的运动",
  headline: "多项运动，无限热爱",
  ctaText: "了解更多",
  exhibitions: [
    {
      id: 1,
      slug: "skiing",
      title: "滑雪",
      image: "/images_new/ski_1.JPEG",
      date: "2010 - 至今",
    },
    {
      id: 2,
      slug: "racing",
      title: "赛车",
      image: "/images_new/racing_1.JPG",
      date: "2015 - 至今",
    },
    {
      id: 3,
      slug: "basketball",
      title: "篮球",
      image: "/images_new/basketball.JPG",
      date: "2008 - 至今",
    },
    {
      id: 4,
      slug: "boxing",
      title: "拳击",
      image: "/images_new/boxing_1.JPG",
      date: "2018 - 至今",
    },
    {
      id: 5,
      slug: "fitness",
      title: "健身",
      image: "/images_new/muscle_2.jpg",
      date: "2016 - 至今",
    },
    {
      id: 6,
      slug: "travel",
      title: "旅游",
      image: "/images_new/life_2.JPG",
      date: "持续探索",
    },
    {
      id: 7,
      slug: "shooting",
      title: "射击",
      image: "/images_new/gun_1.JPG",
      date: "2022 - 至今",
    },
    {
      id: 8,
      slug: "surfing",
      title: "冲浪",
      image: "/images/surfing.jpg",
      date: "2019 - 至今",
    },
  ],
};

export const sportDetailsConfig: SportDetail[] = [
  {
    slug: "skiing",
    title: "滑雪",
    period: "2010 - 至今",
    description:
      "滑雪是我坚持最久的运动之一。从基础动作到速度控制，再到不同雪道条件下的稳定性训练，每个雪季都在刷新自己的边界。",
    gallery: [
      { src: "/images_new/ski_0.jpg", alt: "滑雪瞬间 1", caption: "雪场日常训练" },
      { src: "/images_new/ski_1.JPEG", alt: "滑雪瞬间 2", caption: "高速转弯控制" },
      { src: "/images_new/ski_2.JPEG", alt: "滑雪瞬间 3", caption: "中级道技术巩固" },
      { src: "/images_new/ski_3.JPEG", alt: "滑雪瞬间 4", caption: "雪季阶段成果" },
      { src: "/images_new/ski_4.JPEG", alt: "滑雪瞬间 5", caption: "动作细节打磨" },
      { src: "/images_new/ski_5.JPEG", alt: "滑雪瞬间 6", caption: "挑战更高难度" },
    ],
  },
  {
    slug: "racing",
    title: "赛车",
    period: "2015 - 至今",
    description:
      "赛车训练让我持续提升专注力和临场判断力。无论是弯道线路选择还是节奏把控，目标始终是更稳定、更高效地完成每一圈。",
    gallery: [
      { src: "/images/racing.jpg", alt: "赛车训练 1", caption: "赛道速度训练" },
      { src: "/images/horse-racing.jpg", alt: "竞速体验 2", caption: "竞速状态记录" },
      { src: "/images/collection-helmet.jpg", alt: "赛车装备", caption: "头盔与安全装备" },
    ],
  },
  {
    slug: "basketball",
    title: "篮球",
    period: "2008 - 至今",
    description:
      "篮球是我最早接触的团队运动。它让我在竞技中学会协作与执行，也让我长期保持爆发力、灵活性和对抗能力。",
    gallery: [
      { src: "/images/basketball.jpg", alt: "篮球训练 1", caption: "实战对抗训练" },
      { src: "/images/collection-shoes.jpg", alt: "球鞋收藏", caption: "训练鞋与比赛鞋" },
      { src: "/images/training-2.jpg", alt: "体能训练", caption: "球场外体能提升" },
    ],
  },
  {
    slug: "boxing",
    title: "拳击",
    period: "2018 - 至今",
    description:
      "拳击训练强化了我的节奏、反应和核心力量。通过反复的组合拳训练和步法练习，我在对抗中的稳定性与控制力明显提升。",
    gallery: [
      { src: "/images_new/boxing_1.JPG", alt: "拳击训练 1", caption: "基础组合拳训练" },
      { src: "/images_new/boxing_2.JPG", alt: "拳击训练 2", caption: "高强度间歇训练" },
      { src: "/images_new/boxing_3.JPG", alt: "拳击训练 3", caption: "对抗与防守练习" },
    ],
  },
  {
    slug: "fitness",
    title: "健身",
    period: "2016 - 至今",
    description:
      "健身是我所有运动项目的基础。力量、核心与耐力训练的持续积累，让我在滑雪、拳击和赛车等项目中保持更好的身体状态。",
    gallery: [
      { src: "/images_new/muscle_1.JPG", alt: "健身训练 1", caption: "基础力量训练" },
      { src: "/images_new/muscle_2.jpg", alt: "健身训练 2", caption: "背部与核心强化" },
      { src: "/images_new/muscle_3.jpg", alt: "健身训练 3", caption: "阶段性体态记录" },
      { src: "/images_new/muscle_4.JPG", alt: "健身训练 4", caption: "下肢爆发力训练" },
      { src: "/images_new/muscle_5.jpg", alt: "健身训练 5", caption: "高强度训练日" },
      { src: "/images_new/muscle_6.jpg", alt: "健身训练 6", caption: "训练后恢复与拉伸" },
    ],
  },
  {
    slug: "travel",
    title: "旅游",
    period: "持续探索",
    description:
      "Belgrade 城市旅行记录。这个页面专门展示塞尔维亚 Belgrade 的行程与影像，后续我会按国家和城市继续扩展独立旅行内容。",
    gallery: [
      { src: "/images_new/IMG_9475.jpg", alt: "Belgrade 旅行 1", caption: "Belgrade 城市街景" },
      { src: "/images_new/IMG_9702.JPG", alt: "Belgrade 旅行 2", caption: "Belgrade 建筑与光影" },
      { src: "/images_new/IMG_9720.jpg", alt: "Belgrade 旅行 3", caption: "Belgrade 日常片段" },
      { src: "/images_new/IMG_9723.JPG", alt: "Belgrade 旅行 4", caption: "Belgrade 旅途记录" },
      { src: "/images_new/IMG_9944.JPG", alt: "Belgrade 旅行 5", caption: "Belgrade 夜景氛围" },
      { src: "/images_new/IMG_9947.jpg", alt: "Belgrade 旅行 6", caption: "Belgrade 旅行收尾" },
    ],
    videos: [
      {
        src: "/videos/IMG_9910.mov",
        title: "Belgrade 旅行视频",
        caption: "Belgrade 现场记录（可开启声音）",
      },
    ],
  },
  {
    slug: "shooting",
    title: "射击",
    period: "2022 - 至今",
    description:
      "射击训练让我更专注于呼吸节奏、稳定性和瞬时判断。每一次训练都在提升控制力与心理素质。",
    gallery: [
      { src: "/images_new/gun_1.JPG", alt: "射击训练 1", caption: "射击训练日常" },
      { src: "/images_new/gun_2.JPG", alt: "射击训练 2", caption: "姿态与瞄准控制" },
      { src: "/images_new/gun_3.jpg", alt: "射击训练 3", caption: "阶段性训练记录" },
    ],
    videos: [
      {
        src: "/videos/gun.MOV",
        title: "射击训练视频",
        caption: "实拍训练片段（可开启声音）",
      },
    ],
  },
  {
    slug: "surfing",
    title: "冲浪",
    period: "2019 - 至今",
    description:
      "冲浪让我在变化的海浪中保持平衡与判断。每一次下水都是和自然节奏对话，也是对心态与技巧的双重训练。",
    gallery: [
      { src: "/images/surfing.jpg", alt: "冲浪训练 1", caption: "海上冲浪训练" },
      { src: "/images/training-1.jpg", alt: "冲浪体能 2", caption: "冲浪相关体能准备" },
      { src: "/images/training-4.jpg", alt: "冲浪体能 3", caption: "核心与平衡能力提升" },
    ],
  },
];

export const collectionsConfig: CollectionsConfig = {
  label: "我的收藏",
  headline: "装备与荣耀",
  ctaText: "查看详情",
  collections: [
    {
      id: 1,
      title: "滑雪装备",
      year: "2010-2024",
      description: "从第一块滑雪板到专业级装备，见证我在雪场上的成长历程。",
      image: "/images_new/ski_2.JPEG",
    },
    {
      id: 2,
      title: "赛车头盔",
      year: "2015-2024",
      description: "每一顶头盔都承载着赛道上的速度与激情。",
      image: "/images/collection-helmet.jpg",
    },
    {
      id: 3,
      title: "球鞋收藏",
      year: "2008-2024",
      description: "篮球场上的战靴，记录每一次跳跃与扣篮。",
      image: "/images/collection-shoes.jpg",
    },
    {
      id: 4,
      title: "荣誉奖杯",
      year: "2010-2024",
      description: "每一座奖杯都是汗水与努力的见证。",
      image: "/images/collection-trophy.jpg",
    },
  ],
};

export const testimonialsConfig: TestimonialsConfig = {
  quote: "运动让我找到了真正的自己。每一次挑战极限，都让我更加坚信：人的潜力是无限的。无论是在雪山上飞驰，还是在赛道上狂飙，亦或是在拳击台上挥洒汗水，这些经历都塑造了我坚韧的性格和永不言弃的精神。",
  authorName: "钟文鹏",
  authorTitle: "Relph Chris / 极限运动爱好者",
  authorImage: "/images_new/logo_new.jpg",
};

export const visitConfig: VisitConfig = {
  label: "联系我",
  headline: "一起运动<br />一起突破",
  description: "如果你也热爱运动，或者想要交流任何运动心得，欢迎随时联系我。让我们一起挑战极限，突破自我！",
  ctaText: "发送邮件",
  infoCards: [
    {
      icon: "MapPin",
      title: "所在城市",
      content: "中国 · 浙江",
    },
    {
      icon: "Clock",
      title: "训练时间",
      content: "周一至周五: 6:00 - 8:00<br />周末: 全天",
    },
    {
      icon: "Calendar",
      title: "近期活动",
      content: "2024 滑雪训练营<br />2024 赛车体验日",
    },
    {
      icon: "Ticket",
      title: "联系方式",
      content: "chrisrelph725@gmail.com<br />+86 135 6658 8614",
    },
  ],
};

export const footerConfig: FooterConfig = {
  marqueeText: "挑战极限 · 突破自我 · 热爱生活 · 永不止步 · 挑战极限 · 突破自我 · 热爱生活 · 永不止步 · ",
  brandName: "钟文鹏 | Relph Chris",
  brandDescription: "极限运动爱好者，用热爱定义人生。",
  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com/kd.relph?igsh=bmh3N2NiaGVjeGd0&utm_source=qr" },
    { label: "Threads", href: "https://www.threads.com/@kilganonscott?igshid=NTc4MTIwNjQ2YQ==" },
    { label: "X", href: "https://x.com/relph35432?s=21" },
    { label: "YouTube", href: "https://youtube.com/@chrisrelphpp?si=VdZ2PNGtX68iaTHy" },
  ],
  quickLinks: [
    { label: "关于我", href: "#about" },
    { label: "我的运动", href: "#exhibitions" },
    { label: "装备收藏", href: "#collections" },
    { label: "联系我", href: "#visit" },
  ],
  quickLinksTitle: "快速链接",
  contactTitle: "联系方式",
  contactItems: [
    "中国 · 浙江",
    "chrisrelph725@gmail.com",
    "+86 135 6658 8614",
  ],
  bottomLinks: [
    { label: "隐私政策", href: "#" },
    { label: "使用条款", href: "#" },
  ],
};
