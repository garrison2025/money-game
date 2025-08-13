import { Navigation } from "@/components/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={[{ label: "About", current: true }]} className="mb-6" />

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            About <span className="blood-text">BLOODMONEY!</span>
          </h1>
          <p className="text-xl text-muted-foreground">The ultimate survival gauntlet experience</p>
        </div>

        <div className="space-y-8">
          {/* Game Description */}
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle>The Game</CardTitle>
              <CardDescription>What makes BLOODMONEY! the ultimate survival challenge</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                BLOODMONEY! is an intense survival action game that challenges players to navigate through increasingly
                difficult scenarios while managing limited resources. The game combines strategic resource management
                with fast-paced combat, creating a unique experience where every decision matters.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Core Features</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Dynamic resource management system</li>
                    <li>• Extensive weapon upgrade paths</li>
                    <li>• Strategic gadget deployment</li>
                    <li>• Multiple skill tree progressions</li>
                    <li>• Challenging survival scenarios</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-secondary">Gameplay Elements</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Health pack management</li>
                    <li>• Ammunition conservation</li>
                    <li>• Power-up optimization</li>
                    <li>• Tactical gadget usage</li>
                    <li>• Character customization</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">What Sets BLOODMONEY! Apart</h4>
                <p className="text-sm text-muted-foreground">
                  Unlike typical action games that focus purely on firepower, BLOODMONEY! emphasizes intelligent
                  resource management and strategic thinking. Players must carefully balance aggression with
                  conservation, making every health pack, ammunition pickup, and power-up usage a critical decision that
                  can determine survival or failure.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Website Mission */}
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>Why Bloodmoney-Game.pro exists</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Bloodmoney-Game.pro is a fan-run hub dedicated to providing the best guides, tips, and gameplay
                experience for BLOODMONEY! Built by players, for players, our mission is to create the most
                comprehensive resource for anyone looking to master this challenging survival game.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Comprehensive Guides</h4>
                  <p className="text-sm text-muted-foreground">
                    In-depth strategies covering everything from basic survival to advanced combat builds
                  </p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2 text-secondary">Optimal Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Distraction-free gameplay with the best possible gaming environment
                  </p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-500">Community Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    A space for players to connect, share strategies, and improve together
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Advantages */}
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle>Why Choose Bloodmoney-Game.pro</CardTitle>
              <CardDescription>What makes us the definitive BLOODMONEY! resource</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    Focus
                  </Badge>
                  <div>
                    <h4 className="font-semibold mb-1">Niche Specialization</h4>
                    <p className="text-sm text-muted-foreground">
                      By concentrating solely on BLOODMONEY!, our content is deeper and more valuable than generic
                      gaming sites. Every guide, tip, and strategy is specifically crafted for this game.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="destructive" className="mt-1">
                    Authority
                  </Badge>
                  <div>
                    <h4 className="font-semibold mb-1">Professional Standards</h4>
                    <p className="text-sm text-muted-foreground">
                      The .pro domain signals our commitment to authority and expertise. Our content and design maintain
                      the highest standards to match this professional positioning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Badge className="mt-1">Efficiency</Badge>
                  <div>
                    <h4 className="font-semibold mb-1">Information Consolidation</h4>
                    <p className="text-sm text-muted-foreground">
                      We gather all scattered information, tips, and strategies into one convenient location, saving
                      players valuable time and providing a single source of truth for BLOODMONEY! mastery.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact/Community */}
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle>Join the Community</CardTitle>
              <CardDescription>Connect with fellow survivors</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                BLOODMONEY! is more challenging and rewarding when you're part of a community. Share your strategies,
                compare high scores, and learn from other players who have mastered the art of survival.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  <strong>Ready to connect?</strong> Join our Discord community to share strategies, get help, and
                  compete with other players. Together, we can all become better survivors.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
