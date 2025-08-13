"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/optimized-image"
import { Gamepad2, Clock, Users, Star } from "lucide-react"

interface GameRecommendation {
  title: string
  description: string
  href: string
  image: string
  category: string
  playTime: string
  difficulty: "Easy" | "Medium" | "Hard"
  rating: number
}

const gameRecommendations: GameRecommendation[] = [
  {
    title: "BLOODMONEY! Action Survival",
    description: "Ultimate survival gauntlet with resource management and weapon upgrades",
    href: "/play",
    image: "/action-survival-game.png",
    category: "Action/Survival",
    playTime: "30+ min",
    difficulty: "Medium",
    rating: 4.8,
  },
  {
    title: "Bloodmoney Clicker Edition",
    description: "Dark psychological clicker game exploring moral consequences",
    href: "https://kbhgames.com/game/bloodmoney",
    image: "/images/harvey-intro.png",
    category: "Clicker/Horror",
    playTime: "15-45 min",
    difficulty: "Easy",
    rating: 4.5,
  },
  {
    title: "Granny Unblocked",
    description: "Escape the terrifying granny in this horror survival game",
    href: "/granny-unblocked",
    image: "/granny-horror-screenshot.png",
    category: "Horror/Puzzle",
    playTime: "20-40 min",
    difficulty: "Hard",
    rating: 4.6,
  },
]

interface GameRecommendationsProps {
  currentGame?: string
  maxRecommendations?: number
}

export function GameRecommendations({ currentGame, maxRecommendations = 2 }: GameRecommendationsProps) {
  const filteredGames = gameRecommendations.filter((game) => game.title !== currentGame).slice(0, maxRecommendations)

  if (filteredGames.length === 0) return null

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">You Might Also Like</h2>
          <p className="text-muted-foreground text-sm">Discover more exciting games in our collection</p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
          {filteredGames.map((game, index) => (
            <Card
              key={game.title}
              className="bg-card/50 border-primary/20 hover:border-primary/40 hover:bg-card/80 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden">
                <OptimizedImage
                  src={game.image}
                  alt={`${game.title} screenshot`}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-2 left-2 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                  {game.category}
                </div>
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  {game.rating}
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{game.title}</CardTitle>
                <CardDescription className="text-sm">{game.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {game.playTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {game.difficulty}
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  {game.href.startsWith("http") ? (
                    <a href={game.href} target="_blank" rel="noopener noreferrer">
                      <Gamepad2 className="h-4 w-4 mr-2" />
                      Play Now
                    </a>
                  ) : (
                    <Link href={game.href}>
                      <Gamepad2 className="h-4 w-4 mr-2" />
                      Play Now
                    </Link>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
