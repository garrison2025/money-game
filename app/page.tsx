import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { GameEmbed } from "@/components/game-embed"
import { Shield, Zap, Target, Users, Star, HelpCircle, GamepadIcon, Clock, ShieldIcon } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="absolute inset-0 game-bg" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-4">
          <div className="text-center">
            {/* Added animation classes for hero title */}
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              <span className="blood-text">BLOODMONEY GAME!</span>
            </h1>
            {/* Added staggered animation for subtitle */}
            <p className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl text-muted-foreground animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Your Ultimate Survival Gauntlet
            </p>
            {/* Added staggered animation for description */}
            <p className="mb-8 sm:mb-12 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              Manage Resources, Upgrade Your Arsenal, and Survive the Game of Blood & Money
            </p>

            {/* Added staggered animation and enhanced hover effects for buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center max-w-md sm:max-w-none mx-auto animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 hover:scale-105 active:scale-95 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Link href="/play">PLAY NOW</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent w-full sm:w-auto hover:scale-105 active:scale-95 transition-all duration-200 hover:bg-accent/50"
              >
                <Link href="/guides/beginners">Learn to Survive</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Game Preview */}
      <section className="py-12 sm:py-16 bg-card/50">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">BLOODMONEY! - Action Survival</h2>
            <p className="text-muted-foreground text-sm sm:text-base px-4">
              The ultimate survival gauntlet - manage resources, upgrade weapons, and fight to survive
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Added hover effects and animation to game container */}
            <div className="border-2 border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
              <GameEmbed
                src="https://html5.gamemonetize.co/476poqi6uzeief7dt3npz2jfik10zg84/"
                title="BLOODMONEY! Action Survival Game"
                className="bg-muted group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="text-center mt-4 sm:mt-6">
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 px-4">
                Experience intense combat, strategic resource management, and weapon customization in this action-packed
                survival game.
              </p>
              {/* Enhanced button with better hover effects */}
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Link href="/play">Play Full Screen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Game Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="text-center mb-6 sm:mb-8">
            {/* Added pulse animation to badge */}
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 animate-pulse">
              <Star className="h-3 w-3 sm:h-4 sm:w-4" />
              ALTERNATIVE VERSION
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-purple-100">Bloodmoney - Clicker Edition</h2>
            <p className="text-purple-200/80 text-sm sm:text-base">
              A dark psychological clicker game with moral consequences
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Game Screenshots */}
              <div className="space-y-3 sm:space-y-4 order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {/* Added hover effects to images */}
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-purple-500/30 hover:border-purple-400/60 hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <Image
                      src="/images/harvey-intro.png"
                      alt="Harvey introducing himself in Bloodmoney Clicker"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      sizes="(max-width: 768px) 45vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-purple-500/30 hover:border-purple-400/60 hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <Image
                      src="/images/harvey-begging.png"
                      alt="Harvey begging for mercy in Bloodmoney Clicker"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      sizes="(max-width: 768px) 45vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                </div>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-purple-500/30 hover:border-purple-400/60 hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <Image
                    src="/images/medical-bill.png"
                    alt="Medical bill showing $25,000 in Bloodmoney Clicker"
                    width={800}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </div>
              </div>

              {/* Game Description */}
              <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                {/* Added hover effects to card */}
                <Card className="bg-purple-900/30 border-purple-500/30 hover:bg-purple-900/40 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="text-purple-100 text-lg sm:text-xl">A Different Kind of Bloodmoney</CardTitle>
                  </CardHeader>
                  <CardContent className="text-purple-200/90 text-sm sm:text-base space-y-3 sm:space-y-4">
                    <p>
                      Unlike the action-packed survival game above, this Bloodmoney takes a psychological approach. Meet
                      Harvey Harvington, who desperately needs $25,000 for a life-saving medical operation.
                    </p>
                    <p>
                      Start by clicking Harvey for $1 per click, but discover darker "upgrade" paths that increase your
                      earnings through morally questionable means. This clicker game explores themes of exploitation,
                      desperation, and moral compromise.
                    </p>
                    <p className="text-xs sm:text-sm text-purple-300/80">
                      <strong>Key Differences:</strong> Turn-based clicking mechanics, story-driven progression, moral
                      choice system, and psychological horror elements.
                    </p>
                  </CardContent>
                </Card>

                <div className="flex justify-center">
                  {/* Enhanced button with glow effect */}
                  <Button
                    asChild
                    size="lg"
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 bg-transparent px-8 py-4 text-lg font-semibold hover:scale-105 active:scale-95 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:border-purple-400/70"
                  >
                    <Link href="https://kbhgames.com/game/bloodmoney" target="_blank" rel="noopener noreferrer">
                      Play on KBH Games
                    </Link>
                  </Button>
                </div>

                <div className="text-xs text-purple-300/70 text-center">
                  ⚠️ This version contains dark psychological themes and moral dilemmas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Master the Game</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Key features that make BLOODMONEY! the ultimate survival challenge
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Added enhanced hover effects and animations to feature cards */}
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 hover:bg-card/80 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group cursor-pointer">
              <CardHeader className="pb-3 sm:pb-6">
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors duration-300">
                  Resource Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Strategically manage health packs, ammunition, and power-ups to survive longer
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20 hover:border-secondary/40 hover:bg-card/80 hover:scale-105 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 group cursor-pointer">
              <CardHeader className="pb-3 sm:pb-6">
                <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-secondary mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <CardTitle className="text-base sm:text-lg group-hover:text-secondary transition-colors duration-300">
                  Weapon Upgrades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Unlock and customize your arsenal with damage, accuracy, and reload speed improvements
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 hover:bg-card/80 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group cursor-pointer">
              <CardHeader className="pb-3 sm:pb-6">
                <Target className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors duration-300">
                  Strategic Gadgets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Deploy grenades, mines, and traps for effective crowd control and tactical advantage
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20 hover:border-secondary/40 hover:bg-card/80 hover:scale-105 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 group cursor-pointer">
              <CardHeader className="pb-3 sm:pb-6">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-secondary mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <CardTitle className="text-base sm:text-lg group-hover:text-secondary transition-colors duration-300">
                  Skill Trees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Develop your character through Stamina, Accuracy, and Stealth skill trees
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Guides */}
      <section className="py-12 sm:py-16 bg-card/50">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Latest Guides</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Master the game with our comprehensive strategy guides
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
            {/* Enhanced guide cards with better hover effects */}
            <Card className="bg-card border-primary/20 hover:border-primary/40 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl">
                  <Link href="/guides/beginners" className="hover:text-primary transition-colors group-hover:underline">
                    Beginner's Survival Guide
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm">
                  Master resource management and basic survival tactics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  Learn when to use health packs, how to conserve ammunition, and the best strategies for using
                  power-ups and gadgets effectively.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <Link href="/guides/beginners">Read Guide</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl">
                  <Link href="/guides/advanced" className="hover:text-primary transition-colors group-hover:underline">
                    Advanced Strategy Guide
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm">Customize your perfect combat build and dominate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  Deep dive into weapon upgrades, skill tree optimization, and advanced tactics for different
                  playstyles.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <Link href="/guides/advanced">Read Guide</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Get answers to common questions about Bloodmoney games
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Enhanced FAQ cards with hover effects and icon animations */}
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 hover:bg-card/80 hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardHeader className="pb-3 sm:pb-6">
                <HelpCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2 group-hover:rotate-12 transition-transform duration-300" />
                <CardTitle className="text-base sm:text-lg">What's the difference between the two games?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  BLOODMONEY! Action Survival is a fast-paced combat game focused on resource management and weapon
                  upgrades. Bloodmoney Clicker Edition is a psychological horror clicker game exploring moral choices
                  and consequences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20 hover:border-secondary/40 hover:bg-card/80 hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardHeader className="pb-3 sm:pb-6">
                <GamepadIcon className="h-6 w-6 sm:h-8 sm:w-8 text-secondary mb-2 group-hover:rotate-12 transition-transform duration-300" />
                <CardTitle className="text-base sm:text-lg">Are the games completely free?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Yes! Both Bloodmoney games are completely free to play with no hidden costs, subscriptions, or
                  pay-to-win mechanics. Enjoy the full gaming experience at no charge.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 hover:bg-card/80 hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardHeader className="pb-3 sm:pb-6">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2 group-hover:rotate-12 transition-transform duration-300" />
                <CardTitle className="text-base sm:text-lg">Do I need to create an account?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  No account required! Jump straight into the action. Your game progress is saved locally on your
                  device, so you can continue where you left off on the same browser.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20 hover:border-secondary/40 hover:bg-card/80 hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardHeader className="pb-3 sm:pb-6">
                <ShieldIcon className="h-6 w-6 sm:h-8 sm:w-8 text-secondary mb-2 group-hover:rotate-12 transition-transform duration-300" />
                <CardTitle className="text-base sm:text-lg">What devices are supported?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Both games work on desktop computers, tablets, and mobile devices. We recommend using a modern browser
                  like Chrome, Firefox, Safari, or Edge for the best experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 hover:bg-card/80 hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardHeader className="pb-3 sm:pb-6">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2 group-hover:rotate-12 transition-transform duration-300" />
                <CardTitle className="text-base sm:text-lg">Are there age restrictions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Our games contain mature themes including violence and psychological elements. We recommend players be
                  at least 16 years old. Parental guidance is advised for younger players.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20 hover:border-secondary/40 hover:bg-card/80 hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardHeader className="pb-3 sm:pb-6">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-secondary mb-2 group-hover:rotate-12 transition-transform duration-300" />
                <CardTitle className="text-base sm:text-lg">How can I get help or report issues?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Visit our{" "}
                  <Link
                    href="/contact"
                    className="text-primary hover:underline hover:text-primary/80 transition-colors"
                  >
                    Contact Us
                  </Link>{" "}
                  page to report bugs, ask questions, or provide feedback. We respond to all inquiries within 48 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 sm:py-8">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                &copy; 2025 Bloodmoney-Game.pro - Built by players, for players
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-center">
              {/* Enhanced footer links with better hover effects */}
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
