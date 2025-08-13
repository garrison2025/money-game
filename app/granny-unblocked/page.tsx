import type { Metadata } from "next"
import { GameEmbed } from "@/components/game-embed"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GameSchema } from "@/components/game-schema"
import { SocialSharing } from "@/components/social-sharing"
import { GameRating } from "@/components/game-rating"
import { RelatedContent } from "@/components/related-content"
import { Clock, Users, Gamepad2, Zap, Eye, Brain } from "lucide-react"

export const metadata: Metadata = {
  title: "Play Granny Unblocked Online Free | Horror Survival Game",
  description:
    "Play Granny Unblocked online for free! Escape from Granny's house in this heart-pounding horror survival game. Navigate dark corridors, solve puzzles, and survive the nightmare.",
  keywords:
    "Granny Unblocked, horror game, survival game, escape game, puzzle game, free online game, Granny game, horror survival",
  openGraph: {
    title: "Play Granny Unblocked Online Free | Horror Survival Game",
    description:
      "Play Granny Unblocked online for free! Escape from Granny's house in this heart-pounding horror survival game.",
    type: "website",
    url: "https://bloodmoney-game.pro/granny-unblocked/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Play Granny Unblocked Online Free | Horror Survival Game",
    description:
      "Play Granny Unblocked online for free! Escape from Granny's house in this heart-pounding horror survival game.",
  },
}

export default function GrannyUnblockedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <GameSchema
        name="Granny Unblocked"
        description="Escape from Granny's terrifying house in this heart-pounding horror survival game. Navigate dark corridors, solve deadly puzzles, and survive the nightmare."
        url="https://bloodmoney-game.pro/granny-unblocked"
        genre={["Horror", "Survival", "Puzzle", "Adventure"]}
        rating={4.6}
        ratingCount={890}
        datePublished="2025-01-01"
        gameplayMode={["SinglePlayer"]}
        platform={["Web Browser", "PC", "Mobile"]}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Granny Unblocked", href: "/granny-unblocked" },
          ]}
        />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Eye className="h-4 w-4" />
            Horror Survival Game
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
            GRANNY UNBLOCKED
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Escape from Granny's terrifying house in this heart-pounding horror survival game. Navigate dark corridors,
            solve deadly puzzles, and survive the nightmare.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Free to Play
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Single Player
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Gamepad2 className="h-4 w-4" />
              Horror Survival
            </Badge>
          </div>
        </div>

        {/* Game Embed */}
        <div className="mb-12">
          <GameEmbed
            src="https://ulyagames.com/loader.php?id=54119"
            title="Granny Unblocked Game"
            className="w-full h-[600px] md:h-[700px]"
          />
        </div>

        {/* Social Sharing and Rating */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <SocialSharing
            url="https://bloodmoney-game.pro/granny-unblocked"
            title="Play Granny Unblocked - Horror Survival Game"
            description="Escape from Granny's terrifying house in this heart-pounding horror survival game. Play free online!"
            hashtags={["GrannyUnblocked", "horrorgame", "survivalgame", "freegames", "escapegame"]}
          />

          <GameRating gameId="granny-unblocked" gameName="Granny Unblocked" initialRating={4.6} />
        </div>

        {/* Game Description */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-red-500/20 bg-gradient-to-br from-red-500/5 to-orange-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-400">
                <Brain className="h-5 w-5" />
                How to Play Granny Unblocked
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Granny is a heart-pounding horror game that plunges players into a nightmare scenario: trapped inside a
                dark and sinister house with Granny, a terrifyingly deranged old woman.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your mission is clear: escape Granny's clutches and make it out of the house alive. As you navigate
                through the dimly lit corridors and shadowy rooms, you must remain silent and cautious, as Granny's keen
                senses will alert her to your presence.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-red-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-400">
                <Zap className="h-5 w-5" />
                Survival Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The house is riddled with deadly traps and obstacles that can spell doom if triggered. To survive,
                you'll need to search for clues, solve puzzles, and uncover hidden secrets that will lead to your
                freedom.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Time is of the essence, as Granny's patrols grow more frequent and her grip on reality becomes
                increasingly tenuous. Each encounter with Granny is a heart-stopping test of nerves.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Game Features */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Game Features</CardTitle>
            <CardDescription>What makes Granny Unblocked a thrilling horror experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Eye className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="font-semibold mb-2">Immersive Atmosphere</h3>
                <p className="text-sm text-muted-foreground">
                  Dark corridors and chilling sound design create a truly nerve-wracking experience
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Brain className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="font-semibold mb-2">Puzzle Solving</h3>
                <p className="text-sm text-muted-foreground">
                  Search for clues and solve challenging puzzles to find your way to freedom
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="font-semibold mb-2">Relentless Tension</h3>
                <p className="text-sm text-muted-foreground">
                  Stay silent and avoid Granny's keen senses in this desperate bid for survival
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Content */}
        <RelatedContent currentPage="/granny-unblocked" maxItems={4} />
      </div>
    </div>
  )
}
