"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { GameEmbed } from "@/components/game-embed"
import { Button } from "@/components/ui/button"
import { GameSchema } from "@/components/game-schema"
import { SocialSharing } from "@/components/social-sharing"
import { GameRating } from "@/components/game-rating"
import { RelatedContent } from "@/components/related-content"
import { Maximize, Minimize, DollarSign, Zap } from "lucide-react"
import Image from "next/image" // 引入 Image 组件
import Link from "next/link" // 引入 Link 组件

export default function PlayPage() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [activeGame, setActiveGame] = useState<"main" | "harvey">("main")

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className="min-h-screen">
      <GameSchema
        name="BLOODMONEY! Action Survival"
        description="Ultimate survival gauntlet game with resource management, weapon upgrades, and strategic combat. Fight to survive in this intense action game."
        url="https://bloodmoney-game.pro/play"
        genre={["Action", "Survival", "Strategy"]}
        rating={4.8}
        ratingCount={1250}
        datePublished="2025-01-01"
        gameplayMode={["SinglePlayer"]}
        platform={["Web Browser", "PC", "Mobile"]}
      />

      <Navigation />

      <div className="container mx-auto max-w-screen-xl px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="blood-text">BLOODMONEY!</span> Game Center
          </h1>
          <p className="text-muted-foreground">Choose your path to fortune. Every click counts.</p>
        </div>

        {/* Game Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-card rounded-lg p-1 border">
            <Button
              onClick={() => setActiveGame("main")}
              variant={activeGame === "main" ? "default" : "ghost"}
              className="mr-1"
            >
              <Zap className="h-4 w-4 mr-2" />
              Main Game
            </Button>
            <Button onClick={() => setActiveGame("harvey")} variant={activeGame === "harvey" ? "default" : "ghost"}>
              <DollarSign className="h-4 w-4 mr-2" />
              Harvey's Booth
            </Button>
          </div>
        </div>

        {/* --- Main Game 的所有内容都保留在这里 --- */}
        {activeGame === "main" && (
          <div>
            <div className="relative">
              <div className="flex justify-end mb-4">
                <Button onClick={toggleFullscreen} variant="outline" size="sm" className="gap-2 bg-transparent">
                  {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                  {isFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen"}
                </Button>
              </div>

              <div className={`game-container ${isFullscreen ? "fixed inset-0 z-50 bg-black" : "relative"}`}>
                <div
                  className={`${isFullscreen ? "h-full" : "aspect-video max-w-6xl mx-auto"} bg-black rounded-lg overflow-hidden border-2 border-primary/20`}
                >
                  <GameEmbed
                    src="https://html5.gamemonetize.co/476poqi6uzeief7dt3npz2jfik10zg84/"
                    title="BLOODMONEY! Game"
                    className="bg-black"
                  />
                </div>

                {isFullscreen && (
                  <Button
                    onClick={toggleFullscreen}
                    className="absolute top-4 right-4 z-10"
                    variant="secondary"
                    size="sm"
                  >
                    <Minimize className="h-4 w-4 mr-2" />
                    Exit Fullscreen
                  </Button>
                )}
              </div>

              {!isFullscreen && (
                <div className="text-center mt-8">
                  <p className="text-muted-foreground mb-4">
                    The ultimate survival gauntlet awaits. Good luck, survivor.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button asChild variant="outline">
                      <a href="/guides/beginners">Need Help? Read Beginner's Guide</a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="/guides/advanced">Advanced Strategies</a>
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {!isFullscreen && (
              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <SocialSharing
                  url="https://bloodmoney-game.pro/play"
                  title="Play BLOODMONEY! Action Survival Game"
                  description="Ultimate survival gauntlet with resource management and weapon upgrades. Play free online!"
                  hashtags={["bloodmoney", "survivalgame", "actiongame", "freegames"]}
                />
                <GameRating
                  gameId="bloodmoney-action-survival"
                  gameName="BLOODMONEY! Action Survival"
                  initialRating={4.8}
                />
              </div>
            )}
            
            {!isFullscreen && <RelatedContent currentPage="/play" maxItems={4} />}
          </div>
        )}
        
        {/* --- 新增的 Harvey's Booth 界面 --- */}
        {activeGame === "harvey" && (
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-card border rounded-lg p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/harvey-intro.png"
                  alt="Harvey Harvington from Bloodmoney Clicker"
                  width={500}
                  height={281}
                  className="rounded-md border"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Bloodmoney - Clicker Edition</h2>
                <p className="text-muted-foreground mb-4">
                  This is a different kind of Bloodmoney. A dark, psychological clicker game where your choices have consequences. Click the button below to play it on an external site.
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full md:w-auto">
                  <a href="https://kbhgames.com/game/bloodmoney" target="_blank" rel="noopener noreferrer">
                    Play on KBH Games
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  ⚠️ You will be redirected to an external website.
                </p>
              </div>
            </div>
          </div>
        )}
        {/* --- 新增区域结束 --- */}

      </div>
    </div>
  )
}
