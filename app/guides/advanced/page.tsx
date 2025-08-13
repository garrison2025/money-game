import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sword, Target, Eye, Zap } from "lucide-react"

export default function AdvancedGuidePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Guides", href: "/guides" },
            { label: "Advanced Guide", current: true },
          ]}
          className="mb-6"
        />

        <div className="mb-8">
          <Badge variant="destructive" className="mb-4">
            Advanced Guide
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            <span className="blood-text">BLOODMONEY!</span> Advanced Strategy Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-6">Customizing Your Perfect Combat Build</p>
          <p className="text-muted-foreground">
            As the challenges get tougher, your character must evolve. This guide covers how to unlock and upgrade your
            abilities for maximum impact.
          </p>
        </div>

        <div className="space-y-8">
          {/* Weapon Upgrades Section */}
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Sword className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Weapon Upgrades: Path to Power</CardTitle>
                  <CardDescription>Analysis of upgrade paths for different weapons</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="damage" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="damage">Damage</TabsTrigger>
                  <TabsTrigger value="reload">Reload Speed</TabsTrigger>
                  <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
                </TabsList>
                <TabsContent value="damage" className="space-y-4">
                  <h4 className="font-semibold text-primary">Damage Upgrade Path</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Best for:</strong> Players who prefer decisive, high-impact encounters
                    </li>
                    <li>
                      <strong>Weapons to prioritize:</strong> Shotguns, sniper rifles, and heavy weapons
                    </li>
                    <li>
                      <strong>Strategy:</strong> Focus on eliminating enemies quickly to reduce incoming damage
                    </li>
                    <li>
                      <strong>Trade-off:</strong> Higher damage but slower rate of fire and longer reload times
                    </li>
                  </ul>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Recommended Build:</strong> Damage + Accuracy for precision elimination builds
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="reload" className="space-y-4">
                  <h4 className="font-semibold text-primary">Reload Speed Upgrade Path</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Best for:</strong> Aggressive players who stay in constant combat
                    </li>
                    <li>
                      <strong>Weapons to prioritize:</strong> Assault rifles, SMGs, and pistols
                    </li>
                    <li>
                      <strong>Strategy:</strong> Maintain continuous pressure on enemies with minimal downtime
                    </li>
                    <li>
                      <strong>Trade-off:</strong> Faster reloads but potentially lower per-shot damage
                    </li>
                  </ul>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Recommended Build:</strong> Reload Speed + Stamina for sustained combat builds
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="accuracy" className="space-y-4">
                  <h4 className="font-semibold text-primary">Accuracy Upgrade Path</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Best for:</strong> Tactical players who prefer precision over spray
                    </li>
                    <li>
                      <strong>Weapons to prioritize:</strong> Rifles, marksman weapons, and single-shot firearms
                    </li>
                    <li>
                      <strong>Strategy:</strong> Make every shot count with precise targeting
                    </li>
                    <li>
                      <strong>Trade-off:</strong> Better accuracy but requires more skill to maximize effectiveness
                    </li>
                  </ul>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Recommended Build:</strong> Accuracy + Stealth for sniper/marksman builds
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Skill Trees Section */}
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle>Skill Trees Deep Dive</CardTitle>
              <CardDescription>Stamina, Accuracy, and Stealth trees with recommended builds</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-secondary" />
                    <h4 className="font-semibold text-secondary">Stamina Tree</h4>
                  </div>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Increased movement speed</li>
                    <li>• Faster health regeneration</li>
                    <li>• Extended sprint duration</li>
                    <li>• Reduced fall damage</li>
                  </ul>
                  <div className="bg-secondary/10 p-3 rounded">
                    <p className="text-xs">
                      <strong>"The Tank" Build:</strong> Max stamina + damage upgrades for aggressive frontline combat
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    <h4 className="font-semibold text-primary">Accuracy Tree</h4>
                  </div>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Reduced weapon sway</li>
                    <li>• Faster aim-down-sights</li>
                    <li>• Increased critical hit chance</li>
                    <li>• Better recoil control</li>
                  </ul>
                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-xs">
                      <strong>"The Marksman" Build:</strong> Max accuracy + damage for precision elimination
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Eye className="h-6 w-6 text-blue-500" />
                    <h4 className="font-semibold text-blue-500">Stealth Tree</h4>
                  </div>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Reduced noise generation</li>
                    <li>• Faster crouch movement</li>
                    <li>• Extended invisibility duration</li>
                    <li>• Backstab damage bonus</li>
                  </ul>
                  <div className="bg-blue-500/10 p-3 rounded">
                    <p className="text-xs">
                      <strong>"The Ghost" Build:</strong> Max stealth + accuracy for silent elimination
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gadget Enhancements */}
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle>Gadget Enhancements: Maximize Your Tools</CardTitle>
              <CardDescription>Damage radius vs. effect duration optimization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Damage Radius Upgrades</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Better for crowd control</li>
                    <li>• More effective against groups</li>
                    <li>• Higher immediate impact</li>
                    <li>• Best for defensive playstyles</li>
                  </ul>
                  <div className="mt-3 p-2 bg-primary/10 rounded text-xs">
                    <strong>Choose when:</strong> You face large enemy groups regularly
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-secondary">Effect Duration Upgrades</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Better for area denial</li>
                    <li>• More strategic value</li>
                    <li>• Sustained battlefield control</li>
                    <li>• Best for tactical playstyles</li>
                  </ul>
                  <div className="mt-3 p-2 bg-secondary/10 rounded text-xs">
                    <strong>Choose when:</strong> You prefer strategic positioning and control
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Hybrid Approach</h4>
                <p className="text-sm text-muted-foreground">
                  Consider splitting your upgrades: radius for grenades (immediate impact) and duration for mines/traps
                  (area control). This gives you versatility for different situations.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Passive Boosts */}
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle>Passive Boosts: Must-Have Skills</CardTitle>
              <CardDescription>Essential passive skills for any build</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Universal Must-Haves</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-medium">Health Regeneration</h5>
                        <p className="text-sm text-muted-foreground">
                          Slowly recover health over time - essential for survival
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-medium">Ammo Scavenging</h5>
                        <p className="text-sm text-muted-foreground">Find more ammunition from defeated enemies</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-medium">Threat Detection</h5>
                        <p className="text-sm text-muted-foreground">See enemies through walls for a brief moment</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-secondary">Situational Picks</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-medium">Explosive Resistance</h5>
                        <p className="text-sm text-muted-foreground">
                          Good if you use lots of grenades or face explosive enemies
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-medium">Movement Speed</h5>
                        <p className="text-sm text-muted-foreground">Essential for hit-and-run or stealth builds</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-medium">Weapon Swap Speed</h5>
                        <p className="text-sm text-muted-foreground">Crucial for builds using multiple weapon types</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Upgrade Priority</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Early Game:</strong> Health Regeneration → Ammo Scavenging → Threat Detection
                  <br />
                  <strong>Mid Game:</strong> Build-specific passives based on your playstyle
                  <br />
                  <strong>Late Game:</strong> Max out your core passives, then add situational ones
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
          <Button asChild variant="outline">
            <Link href="/guides/beginners">← Beginner's Guide</Link>
          </Button>
          <Button asChild>
            <Link href="/play">Test Your Build →</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
