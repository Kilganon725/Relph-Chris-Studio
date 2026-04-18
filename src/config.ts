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
  badge: "中国 · 深圳",
  since: "Since 2010",
  email: "relph.chris@example.com",
  heroImage: "/images/hero-main.png",
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
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export const aboutConfig: AboutConfig = {
  label: "始于热爱",
  headline: "挑战极限，突破自我",
  description: "我是钟文鹏，英文名 Relph Chris。从第一次踏上滑雪板的那一刻起，我就被极限运动的魅力深深吸引。十余年来，我不断挑战自我，在滑雪、赛车、篮球、拳击、冲浪、赛马等多个领域追求卓越。运动不仅是我的爱好，更是我探索世界、认识自我的方式。",
  bottomText: "每一次突破都是新的开始，每一次挑战都让我更加热爱这个世界。我相信，只要保持热爱，就没有到达不了的远方。",
  galleryImages: [
    { src: "/images/training-1.jpg", alt: "力量训练", label: "力量训练" },
    { src: "/images/training-2.jpg", alt: "晨跑", label: "晨跑" },
    { src: "/images/training-3.jpg", alt: "山地骑行", label: "山地骑行" },
    { src: "/images/training-4.jpg", alt: "攀岩", label: "攀岩" },
    { src: "/images/training-5.jpg", alt: "游泳", label: "游泳" },
    { src: "/images/training-6.jpg", alt: "瑜伽冥想", label: "瑜伽冥想" },
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
      title: "滑雪",
      image: "/images/skiing.jpg",
      date: "2010 - 至今",
    },
    {
      id: 2,
      title: "赛车",
      image: "/images/racing.jpg",
      date: "2015 - 至今",
    },
    {
      id: 3,
      title: "篮球",
      image: "/images/basketball.jpg",
      date: "2008 - 至今",
    },
    {
      id: 4,
      title: "拳击",
      image: "/images/boxing.jpg",
      date: "2018 - 至今",
    },
  ],
};

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
      image: "/images/collection-ski.jpg",
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
  authorImage: "/images/profile.jpg",
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
      content: "中国 · 深圳",
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
      content: "relph.chris@example.com<br />+86 138 0000 0000",
    },
  ],
};

export const footerConfig: FooterConfig = {
  marqueeText: "挑战极限 · 突破自我 · 热爱生活 · 永不止步 · 挑战极限 · 突破自我 · 热爱生活 · 永不止步 · ",
  brandName: "钟文鹏 | Relph Chris",
  brandDescription: "极限运动爱好者，用热爱定义人生。",
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Youtube", href: "https://youtube.com" },
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
    "中国 · 深圳",
    "relph.chris@example.com",
    "+86 138 0000 0000",
  ],
  bottomLinks: [
    { label: "隐私政策", href: "#" },
    { label: "使用条款", href: "#" },
  ],
};
