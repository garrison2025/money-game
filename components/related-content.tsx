import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Gamepad2, HelpCircle, Users } from "lucide-react"

interface RelatedLink {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  category: string
}

interface RelatedContentProps {
  currentPage?: string
  maxItems?: number
}

export function RelatedContent({ currentPage, maxItems = 4 }: RelatedContentProps) {
  const allContent: RelatedLink[] = [
    {
      title: "Beginner's Survival Guide",
      description: "Master resource management and basic survival tactics",
      href: "/guides/beginners",
      icon: <BookOpen className="h-4 w-4" />,
      category: "Guide",
    },
    {
      title: "Advanced Strategy Guide",
      description: "Customize your perfect combat build and dominate",
      href: "/guides/advanced",
      icon: <BookOpen className="h-4 w-4" />,
      category: "Guide",
    },
    {
      title: "BLOODMONEY! Action Survival",
      description: "Ultimate survival gauntlet with resource management",
      href: "/play",
      icon: <Gamepad2 className="h-4 w-4" />,
      category: "Game",
    },
    {
      title: "Granny Unblocked",
      description: "Escape the terrifying granny in this horror survival game",
      href: "/granny-unblocked",
      icon: <Gamepad2 className="h-4 w-4" />,
      category: "Game",
    },
    {
      title: "About Bloodmoney Games",
      description: "Learn about our gaming platform and mission",
      href: "/about",
      icon: <Users className="h-4 w-4" />,
      category: "Info",
    },
    {
      title: "Contact & Support",
      description: "Get help or report issues with our games",
      href: "/contact",
      icon: <HelpCircle className="h-4 w-4" />,
      category: "Support",
    },
  ]

  const relatedContent = allContent.filter((item) => item.href !== currentPage).slice(0, maxItems)

  if (relatedContent.length === 0) return null

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Related Content</h2>
          <p className="text-muted-foreground text-sm">Explore more games and guides</p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {relatedContent.map((item, index) => (
            <Card
              key={item.href}
              className="bg-card/50 border-primary/20 hover:border-primary/40 hover:bg-card/80 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">{item.category}</span>
                </div>
                <CardTitle className="text-base group-hover:text-primary transition-colors">{item.title}</CardTitle>
                <CardDescription className="text-sm">{item.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <Link href={item.href}>{item.category === "Game" ? "Play Now" : "Learn More"}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
