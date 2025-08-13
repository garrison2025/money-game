interface GameSchemaProps {
  name: string
  description: string
  url: string
  image?: string
  genre: string[]
  rating?: number
  ratingCount?: number
  developer?: string
  publisher?: string
  datePublished?: string
  gameplayMode?: string[]
  platform?: string[]
}

export function GameSchema({
  name,
  description,
  url,
  image,
  genre,
  rating = 4.5,
  ratingCount = 100,
  developer = "Bloodmoney Game Pro",
  publisher = "Bloodmoney Game Pro",
  datePublished,
  gameplayMode = ["SinglePlayer"],
  platform = ["Web Browser", "PC", "Mobile"],
}: GameSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name,
    description,
    url,
    image: image || `${url}/android-chrome-512x512.png`,
    genre,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.toString(),
      ratingCount: ratingCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Organization",
      name: developer,
      url: "https://bloodmoney-game.pro",
    },
    publisher: {
      "@type": "Organization",
      name: publisher,
      url: "https://bloodmoney-game.pro",
    },
    datePublished: datePublished || "2025-01-01",
    gamePlatform: platform,
    playMode: gameplayMode,
    applicationCategory: "Game",
    operatingSystem: ["Windows", "macOS", "Linux", "iOS", "Android"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: "https://schema.org/PlayAction",
      userInteractionCount: ratingCount * 10, // Estimate play count
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  )
}
