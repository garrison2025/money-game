import { Navigation } from "@/components/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <Breadcrumbs items={[{ label: "Privacy Policy", current: true }]} className="mb-6" />

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: August 13, 2025</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                At Bloodmoney-Game.pro, we are committed to protecting your privacy. We collect minimal information to
                provide you with the best gaming experience possible.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Information Automatically Collected:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Browser type and version</li>
                  <li>Operating system information</li>
                  <li>IP address (anonymized)</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website information</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Information You Provide:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Email address (only when contacting us)</li>
                  <li>Feedback and correspondence content</li>
                  <li>Game performance data (scores, progress - stored locally)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To provide and maintain our gaming services</li>
                <li>To improve website performance and user experience</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To detect and prevent technical issues or security threats</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience:
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Essential Cookies:</h4>
                  <p className="text-muted-foreground">Required for basic website functionality and game operation.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Analytics Cookies:</h4>
                  <p className="text-muted-foreground">Help us understand how visitors interact with our website.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Game Data:</h4>
                  <p className="text-muted-foreground">
                    Local storage for game progress and preferences (stored on your device).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Sharing and Third Parties</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information only
                in these limited circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>With service providers who assist in website operation (hosting, analytics)</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We implement appropriate technical and organizational security measures to protect your information
                against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access: Request information about data we collect about you</li>
                <li>Correction: Request correction of inaccurate personal information</li>
                <li>Deletion: Request deletion of your personal information</li>
                <li>Opt-out: Disable cookies through your browser settings</li>
                <li>Contact: Reach out to us at info@bloodmoney-game.pro for any privacy concerns</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our games are not intended for children under 16 years of age. We do not knowingly collect personal
                information from children under 16. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place to protect your information in accordance with applicable data
                protection laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this
                Privacy Policy periodically.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Email:</strong> info@bloodmoney-game.pro
                </p>
                <p>
                  <strong>Website:</strong> bloodmoney-game.pro
                </p>
                <p>
                  <strong>Response Time:</strong> We aim to respond to all inquiries within 48 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
