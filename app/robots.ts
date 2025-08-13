import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://bloodmoney-game.pro";

  return {
    rules: {
      // 一条规则适用于所有爬虫，包括Googlebot
      userAgent: "*",
      // 允许爬取所有内容
      allow: "/",
      // 但禁止爬取以下目录
      disallow: [
        "/api/",      // API 路由
        "/admin/",    // 后台管理面板
        "/_next/",    // Next.js 构建文件
      ],
    },
    // 明确指定站点地图的位置
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
