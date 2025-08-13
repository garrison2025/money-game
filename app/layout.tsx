import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Roboto } from "next/font/google"
import "./globals.css"
import { BackToTop } from "@/components/back-to-top"
import { PWAInstall } from "@/components/pwa-install"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { ErrorBoundary } from "@/components/error-boundary"

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Play BLOODMONEY! Online Free | Game & Guides",
  description:
    "Play the full BLOODMONEY! game online. Master resource management and combat with our exclusive survival guides and tips. Start playing instantly!",
  keywords:
    "bloodmoney game, play bloodmoney online, bloodmoney game guide, bloodmoney tips, survival game, action game, clicker game, harvey harvington, free online games, browser games, resource management game, combat strategy",
  authors: [{ name: "Bloodmoney Game Pro Team" }],
  creator: "Bloodmoney Game Pro",
  publisher: "Bloodmoney Game Pro",
  generator: "Bloodmoney Game Pro",
  applicationName: "Bloodmoney Game Pro",
  referrer: "origin-when-cross-origin",
  category: "Games",
  classification: "Gaming Website",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bloodmoney-game.pro",
    siteName: "Bloodmoney Game Pro",
    title: "Play BLOODMONEY! Online Free | Game & Guides",
    description:
      "Play the full BLOODMONEY! game online. Master resource management and combat with our exclusive survival guides and tips. Start playing instantly!",
    images: [
      {
        url: "https://bloodmoney-game.pro/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Bloodmoney Game Pro Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bloodmoneygame",
    creator: "@bloodmoneygame",
    title: "Play BLOODMONEY! Online Free | Game & Guides",
    description:
      "Play the full BLOODMONEY! game online. Master resource management and combat with our exclusive survival guides and tips. Start playing instantly!",
    images: ["https://bloodmoney-game.pro/android-chrome-512x512.png"],
  },
  other: {
    "theme-color": "#dc2626",
    "color-scheme": "dark",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Bloodmoney Game Pro",
    "application-name": "Bloodmoney Game Pro",
    "msapplication-TileColor": "#dc2626",
    "msapplication-config": "/browserconfig.xml",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://bloodmoney-game.pro",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${roboto.style.fontFamily};
  --font-sans: ${roboto.variable};
  --font-display: ${orbitron.variable};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Bloodmoney Game Pro",
              url: "https://bloodmoney-game.pro",
              description:
                "Play the full BLOODMONEY! game online. Master resource management and combat with our exclusive survival guides and tips.",
              publisher: {
                "@type": "Organization",
                name: "Bloodmoney Game Pro",
                url: "https://bloodmoney-game.pro",
                logo: {
                  "@type": "ImageObject",
                  url: "https://bloodmoney-game.pro/android-chrome-512x512.png",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://bloodmoney-game.pro/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoGame",
              name: "BLOODMONEY!",
              description:
                "Ultimate survival gauntlet game with resource management, weapon upgrades, and strategic combat.",
              url: "https://bloodmoney-game.pro",
              genre: ["Action", "Survival", "Strategy"],
              gamePlatform: ["Web Browser", "PC", "Mobile"],
              operatingSystem: ["Windows", "macOS", "Linux", "iOS", "Android"],
              applicationCategory: "Game",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1250",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
        {/* Added service worker registration script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${orbitron.variable} ${roboto.variable} antialiased`}>
        {/* Wrapped children in ErrorBoundary */}
        <ErrorBoundary>
          {children}
          <BackToTop />
          <PWAInstall />
          <PerformanceMonitor />
        </ErrorBoundary>
      </body>
    </html>
  )
}
