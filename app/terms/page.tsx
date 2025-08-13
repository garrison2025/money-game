import { Navigation } from "@/components/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <Breadcrumbs items={[{ label: "Terms of Service", current: true }]} className="mb-6" />

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: August 13, 2025</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                By accessing and using Bloodmoney-Game.pro ("the Website"), you accept and agree to be bound by these
                Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Website or games.
                These Terms apply to all visitors, users, and others who access or use the service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Description of Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Bloodmoney-Game.pro provides free online gaming services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>BLOODMONEY! Action Survival - A resource management and combat game</li>
                <li>Bloodmoney Clicker Edition - A psychological horror clicker game</li>
                <li>Gaming guides, strategies, and related content</li>
                <li>Community features and player resources</li>
              </ul>
              <p className="mt-4">
                Our services are provided "as is" and we reserve the right to modify, suspend, or discontinue any aspect
                of the service at any time without notice.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Eligibility and Age Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  <strong>Minimum Age:</strong> You must be at least 16 years old to use our services. Our games contain
                  mature themes, psychological horror elements, and moral dilemmas that may not be suitable for younger
                  users.
                </p>
                <p>
                  <strong>Parental Consent:</strong> If you are between 16-18 years old, you must have parental or
                  guardian consent to use our services.
                </p>
                <p>
                  <strong>Capacity:</strong> You must have the legal capacity to enter into these Terms in your
                  jurisdiction.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Acceptable Use Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">You agree to use our services responsibly and not to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use automated systems, bots, or scripts to access or interact with our games</li>
                <li>Attempt to reverse engineer, decompile, or extract source code from our games</li>
                <li>Interfere with or disrupt the integrity or performance of our services</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Impersonate others or provide false information</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Engage in harassment, abuse, or harmful behavior toward other users</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  <strong>Our Content:</strong> All content on Bloodmoney-Game.pro, including games, text, graphics,
                  logos, images, and software, is owned by us or our licensors and is protected by copyright, trademark,
                  and other intellectual property laws.
                </p>
                <p>
                  <strong>Limited License:</strong> We grant you a limited, non-exclusive, non-transferable license to
                  access and use our services for personal, non-commercial purposes only.
                </p>
                <p>
                  <strong>Third-Party Content:</strong> Some games may be provided by third-party developers. Such
                  content is subject to the respective third party's terms and conditions.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Privacy and Data Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Your privacy is important to us. Our collection and use of personal information is governed by our
                Privacy Policy, which is incorporated into these Terms by reference. By using our services, you consent
                to the collection and use of information as described in our Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Game Content and Mature Themes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  <strong>Content Warning:</strong> Our games contain mature themes including violence, psychological
                  horror, moral dilemmas, and references to medical conditions and financial distress.
                </p>
                <p>
                  <strong>Player Discretion:</strong> Players are advised to use discretion and consider their own
                  comfort level with such content before playing.
                </p>
                <p>
                  <strong>No Real-World Application:</strong> Game scenarios are fictional and should not be applied to
                  real-world situations or decisions.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Disclaimers and Limitations of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  <strong>Service Availability:</strong> We do not guarantee that our services will be available at all
                  times or free from interruptions, errors, or security vulnerabilities.
                </p>
                <p>
                  <strong>No Warranties:</strong> Our services are provided "as is" without warranties of any kind,
                  either express or implied, including but not limited to merchantability, fitness for a particular
                  purpose, or non-infringement.
                </p>
                <p>
                  <strong>Limitation of Liability:</strong> To the maximum extent permitted by law, we shall not be
                  liable for any indirect, incidental, special, consequential, or punitive damages arising from your use
                  of our services.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Indemnification</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                You agree to indemnify, defend, and hold harmless Bloodmoney-Game.pro and its affiliates from and
                against any claims, damages, losses, costs, and expenses (including reasonable attorney fees) arising
                from your use of our services or violation of these Terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We reserve the right to terminate or suspend your access to our services at any time, with or without
                cause, and with or without notice. Upon termination, your right to use our services will cease
                immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Governing Law and Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  These Terms shall be governed by and construed in accordance with applicable international laws and
                  regulations governing online services.
                </p>
                <p>
                  Any disputes arising from these Terms or your use of our services shall be resolved through good faith
                  negotiation. If resolution cannot be reached, disputes may be subject to binding arbitration.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by
                posting the updated Terms on our website and updating the "Last updated" date. Your continued use of our
                services after such changes constitutes acceptance of the new Terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>13. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
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

          <Card>
            <CardHeader>
              <CardTitle>14. Severability</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited
                or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force
                and effect.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
