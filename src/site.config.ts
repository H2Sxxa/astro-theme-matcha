import authorAvatar from "@/assets/avatar.svg";
import friendAvatarOne from "@/assets/friend-1.svg";
import friendAvatarTwo from "@/assets/friend-2.svg";
import { defineSiteConfig, type SiteConfig } from "@/types/config";

export const siteConfig: SiteConfig = defineSiteConfig({
  site: {
    title: "Matcha",
    description:
      "A minimal Astro blog theme with Material 3 Expressive motion and OKLCH theming.",
    lang: "zh-CN",
    dateLocale: "zh-CN",
  },

  author: {
    name: "Hakurei",
    bio: "Crafting Calm Web Spaces.",
    avatar: authorAvatar,
    roles: ["Writer", "Designer", "Web Developer", "Open-Source Enthusiast"],
    socials: [
      {
        href: "https://github.com",
        title: "GitHub",
        description: "Open-source projects and code.",
        icon: "mdi:github",
      },
      {
        href: "mailto:hello@example.com",
        title: "Email",
        description: "Feel free to reach out.",
        icon: "mdi:email",
      },
      {
        href: "/rss.xml",
        title: "RSS",
        description: "Subscribe to new posts.",
        icon: "mdi:rss",
      },
    ],
  },

  navigation: {
    fab: [
      {
        href: "/",
        label: "Home",
        icon: "mdi:home",
      },
      {
        href: "/blog",
        label: "Blog",
        icon: "mdi:book-open-page-variant",
      },
      {
        href: "/friends",
        label: "Friends",
        icon: "mdi:account-group",
      },
      {
        href: "/explore",
        label: "Explore",
        icon: "mdi:compass-outline",
      },
    ],
    explore: [
      {
        title: "Home",
        description: "Minimal single-screen landing page.",
        href: "/",
      },
      {
        title: "Blog",
        description: "Browse all articles and essays.",
        href: "/blog",
      },
      {
        title: "About Me",
        description: "A short introduction and links.",
        href: "/about",
      },
      {
        title: "Friends",
        description: "Blogs and people worth reading.",
        href: "/friends",
      },
      {
        title: "Tags",
        description: "Explore posts by topic.",
        href: "/tag",
      },
    ],
    friends: [
      {
        title: "Example Blog",
        intro: "Notes on typography, web standards, and calm interfaces.",
        link: "https://example.com",
        avatar: friendAvatarOne,
      },
      {
        title: "Design Journal",
        intro: "Essays on color systems, layouts, and everyday tools.",
        link: "https://example.com",
        avatar: friendAvatarTwo,
      },
    ],
    routes: [
      { path: "/", label: "HOME" },
      { path: "/blog", label: "BLOG" },
      { path: "/explore", label: "EXPLORE" },
      { path: "/friends", label: "FRIENDS" },
      { path: "/about", label: "ABOUT" },
      { path: "/tag", label: "TAGS" },
    ],
  },

  blog: {
    pageSize: 8,
  },

  commandPalette: {
    enabled: true,
    placeholder: "Search posts, tags, pages, or actions...",
    resultLimit: 18,
    links: [],
  },

  // Set to a Giscus config object to enable comments, or `false` to disable.
  // Example:
  // comments: {
  //   repo: "your-user/your-repo",
  //   repoId: "R_kgDO...",
  //   category: "Announcements",
  //   categoryId: "DIC_kwDO...",
  //   mapping: "pathname",
  //   strict: false,
  //   reactionsEnabled: true,
  //   emitMetadata: false,
  //   inputPosition: "bottom",
  //   lang: "zh-CN",
  //   theme: {
  //     lightCss: "/giscus-light.css",
  //     darkCss: "/giscus-dark.css",
  //     fallbackLight: "light",
  //     fallbackDark: "dark_dimmed",
  //   },
  // },
  comments: false,

  theme: {
    defaultTheme: "system",
    // OKLCH primary hue (0-360). Default 137 = Uji Matcha.
    // Try 255 (indigo), 25 (terracotta), 195 (celadon), or 310 (plum).
    hue: 137,
  },
});
