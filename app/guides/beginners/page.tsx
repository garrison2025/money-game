import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Zap, Shield, Bomb } from "lucide-react"

export default function BeginnersGuidePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Guides", href: "/guides" },
            { label: "Beginner's Guide", current: true },
          ]}
          className="mb-6"
        />

        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            Beginner's Guide
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            <span className="blood-text">BLOODMONEY!</span> Beginner's Survival Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-6">Mastering Resource Management</p>
          <p className="text-muted-foreground">
            In BLOODMONEY!, survival is less about firepower and more about brainpower. Here's how to manage your
            resources like a pro.
          </p>
        </div>

        <div className="space-y-8">
          {/* Health Packs Section */}
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Heart className="h-8 w-8 text-red-500" />
                <div>
                  <CardTitle>Health Packs: Your Lifeline</CardTitle>
                  <CardDescription>When to use them and where to find them</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary">When to Use Health Packs:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Only when your health drops below 30% - don't waste them early</li>
                  <li>Before entering a new area with unknown threats</li>
                  <li>After clearing a difficult section but before the next challenge</li>
                  <li>Never use them at full health - they don't stack or provide bonuses</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Where to Find Them:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Hidden in corners and behind obstacles</li>
                  <li>Dropped by certain enemies after defeat</li>
                  <li>Found in supply crates scattered throughout levels</li>
                  <li>Sometimes hidden in destructible environment objects</li>
                </ul>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Pro Tip:</strong> The risk of using health packs too early is that you'll be caught without
                  healing when you really need it. Patience is key to survival.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ammunition Section */}
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-secondary" />
                <div>
                  <CardTitle>Ammunition Pickups: Every Shot Counts</CardTitle>
                  <CardDescription>Tips for conserving ammo and tactical switching</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Conservation Strategies:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Aim for headshots - they deal more damage and save ammo</li>
                  <li>Use melee attacks on weakened enemies to finish them off</li>
                  <li>Don't spray and pray - controlled bursts are more effective</li>
                  <li>Learn enemy patterns to predict their movements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Melee vs. Ranged Combat:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    <strong>Use Melee When:</strong> Facing single weak enemies, conserving ammo, or in tight spaces
                  </li>
                  <li>
                    <strong>Use Ranged When:</strong> Multiple enemies, strong opponents, or when you have distance
                    advantage
                  </li>
                  <li>
                    <strong>Hybrid Approach:</strong> Weaken with ranged, finish with melee
                  </li>
                </ul>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Pro Tip:</strong> Different weapons have different ammo efficiency. Experiment to find which
                  weapons give you the best damage-per-bullet ratio.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Power-ups Section */}
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-blue-500" />
                <div>
                  <CardTitle>Power-ups: Tactical Advantages</CardTitle>
                  <CardDescription>Understanding each power-up and optimal usage</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Types of Power-ups:</h4>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="bg-muted/30 p-3 rounded">
                    <h5 className="font-medium text-secondary">Damage Boost</h5>
                    <p className="text-sm text-muted-foreground">Best used before boss fights or large enemy groups</p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded">
                    <h5 className="font-medium text-secondary">Speed Boost</h5>
                    <p className="text-sm text-muted-foreground">
                      Perfect for escaping dangerous situations or repositioning
                    </p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded">
                    <h5 className="font-medium text-secondary">Shield</h5>
                    <p className="text-sm text-muted-foreground">
                      Use when entering unknown areas or before difficult encounters
                    </p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded">
                    <h5 className="font-medium text-secondary">Infinite Ammo</h5>
                    <p className="text-sm text-muted-foreground">
                      Save for the toughest battles - don't waste on easy enemies
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Pro Tip:</strong> Power-ups have limited duration. Don't activate them until you're ready to
                  make the most of their effects.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Gadgets and Traps Section */}
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Bomb className="h-8 w-8 text-orange-500" />
                <div>
                  <CardTitle>Gadgets and Traps: Crowd Control Masters</CardTitle>
                  <CardDescription>Using grenades and mines for tactical advantage</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Grenade Tactics:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Throw grenades into groups of enemies for maximum damage</li>
                  <li>Use them to clear enemies behind cover</li>
                  <li>Cook grenades (hold before throwing) to prevent enemies from escaping</li>
                  <li>Bounce grenades around corners to hit enemies you can't see</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Mine Placement:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Place mines in chokepoints where enemies must pass</li>
                  <li>Use them to cover your retreat or flanks</li>
                  <li>Set traps near valuable items to catch greedy enemies</li>
                  <li>Remember where you placed them - don't trigger your own mines!</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Advanced Crowd Control:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Combine different gadgets for devastating effects</li>
                  <li>Use environmental hazards alongside your gadgets</li>
                  <li>Time your gadget usage with enemy spawn patterns</li>
                  <li>Save your best gadgets for emergency situations</li>
                </ul>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Pro Tip:</strong> Gadgets are limited resources. Use them strategically rather than spamming
                  them. One well-placed mine can be worth three grenades thrown randomly.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
          <Button asChild variant="outline">
            <Link href="/play">← Practice in Game</Link>
          </Button>
          <Button asChild>
            <Link href="/guides/advanced">Advanced Guide →</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
