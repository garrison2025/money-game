import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bloodmoney-game.pro"

  return [
    {
      url: baseUrl,
      lastModified: new Date("2025-08-13"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/play`,
      lastModified: new Date("2025-08-13"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/beginners`,
      lastModified: new Date("2025-08-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/advanced`,
      lastModified: new Date("2025-08-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2025-08-13"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2025-08-13"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2025-08-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2025-08-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
