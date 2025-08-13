"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Settings, Volume2, VolumeX, Zap, ZapOff } from "lucide-react"

interface UserPreferences {
  soundEnabled: boolean
  animationsEnabled: boolean
  autoPlay: boolean
  highContrast: boolean
}

export function UserPreferences() {
  const [isOpen, setIsOpen] = useState(false)
  const [preferences, setPreferences] = useState<UserPreferences>({
    soundEnabled: true,
    animationsEnabled: true,
    autoPlay: false,
    highContrast: false,
  })

  // Load preferences from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("bloodmoney-preferences")
    if (saved) {
      try {
        setPreferences(JSON.parse(saved))
      } catch (error) {
        console.error("Failed to load preferences:", error)
      }
    }
  }, [])

  // Save preferences to localStorage when they change
  useEffect(() => {
    localStorage.setItem("bloodmoney-preferences", JSON.stringify(preferences))

    // Apply preferences to document
    document.documentElement.classList.toggle("reduce-motion", !preferences.animationsEnabled)
    document.documentElement.classList.toggle("high-contrast", preferences.highContrast)
  }, [preferences])

  const updatePreference = (key: keyof UserPreferences, value: boolean) => {
    setPreferences((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        variant="outline"
        className="fixed bottom-6 left-6 z-40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="User preferences"
      >
        <Settings className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-card border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                User Preferences
              </CardTitle>
              <CardDescription>Customize your gaming experience</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {preferences.soundEnabled ? (
                    <Volume2 className="h-4 w-4 text-primary" />
                  ) : (
                    <VolumeX className="h-4 w-4 text-muted-foreground" />
                  )}
                  <Label htmlFor="sound">Sound Effects</Label>
                </div>
                <Switch
                  id="sound"
                  checked={preferences.soundEnabled}
                  onCheckedChange={(checked) => updatePreference("soundEnabled", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {preferences.animationsEnabled ? (
                    <Zap className="h-4 w-4 text-primary" />
                  ) : (
                    <ZapOff className="h-4 w-4 text-muted-foreground" />
                  )}
                  <Label htmlFor="animations">Animations</Label>
                </div>
                <Switch
                  id="animations"
                  checked={preferences.animationsEnabled}
                  onCheckedChange={(checked) => updatePreference("animationsEnabled", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <Label htmlFor="autoplay">Auto-play Games</Label>
                </div>
                <Switch
                  id="autoplay"
                  checked={preferences.autoPlay}
                  onCheckedChange={(checked) => updatePreference("autoPlay", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <Label htmlFor="contrast">High Contrast</Label>
                </div>
                <Switch
                  id="contrast"
                  checked={preferences.highContrast}
                  onCheckedChange={(checked) => updatePreference("highContrast", checked)}
                />
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={() => setIsOpen(false)} className="flex-1">
                  Save & Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
