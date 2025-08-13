import { Navigation } from "@/components/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Clock, MessageSquare, Bug, Lightbulb, HelpCircle } from "lucide-react"

export default function ContactUsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <Breadcrumbs items={[{ label: "Contact Us", current: true }]} className="mb-6" />

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg">
            We're here to help! Get in touch with the Bloodmoney-Game.pro team
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <Mail className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Email Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Send us an email for any questions, feedback, or technical issues. We monitor our inbox regularly and
                respond to all inquiries.
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> info@bloodmoney-game.pro
                </p>
                <p>
                  <strong>Response Time:</strong> Within 48 hours
                </p>
              </div>
              <Button asChild className="mt-4">
                <a href="mailto:info@bloodmoney-game.pro">Send Email</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <Clock className="h-12 w-12 text-secondary mb-4" />
              <CardTitle>Response Times</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We strive to provide timely responses to all inquiries. Here's what you can expect:
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>General Questions:</span>
                  <span className="text-primary">24-48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Technical Issues:</span>
                  <span className="text-primary">12-24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Bug Reports:</span>
                  <span className="text-primary">6-12 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Business Inquiries:</span>
                  <span className="text-primary">48-72 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">What Can We Help You With?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center">
                <Bug className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Bug Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm text-center">
                  Found a bug or technical issue? Let us know so we can fix it quickly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center">
                <Lightbulb className="h-10 w-10 text-secondary mx-auto mb-2" />
                <CardTitle className="text-lg">Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm text-center">
                  Have ideas for new features or improvements? We'd love to hear them!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center">
                <HelpCircle className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">General Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm text-center">
                  Need help with gameplay, account issues, or have general questions?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader>
            <MessageSquare className="h-12 w-12 text-primary mb-4" />
            <CardTitle>Tips for Better Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">To help us assist you more effectively, please include:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Detailed Description:</strong> Explain the issue or question clearly
              </li>
              <li>
                <strong>Browser Information:</strong> Which browser and version you're using
              </li>
              <li>
                <strong>Device Type:</strong> Desktop, tablet, or mobile device
              </li>
              <li>
                <strong>Game Specific:</strong> Which Bloodmoney game you're referring to
              </li>
              <li>
                <strong>Steps to Reproduce:</strong> For bugs, tell us how to recreate the issue
              </li>
              <li>
                <strong>Screenshots:</strong> If applicable, describe what you're seeing
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle>About Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Bloodmoney-Game.pro is maintained by a dedicated team of gaming enthusiasts who are passionate about
                providing high-quality, free gaming experiences. We're committed to continuously improving our games and
                website based on player feedback and suggestions.
              </p>
              <div className="mt-6 pt-6 border-t border-border/40">
                <p className="text-sm text-muted-foreground">
                  <strong>Website:</strong> bloodmoney-game.pro
                  <br />
                  <strong>Email:</strong> info@bloodmoney-game.pro
                  <br />
                  <strong>Established:</strong> 2025
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
