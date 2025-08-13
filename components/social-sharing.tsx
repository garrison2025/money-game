"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Share2, Facebook, Twitter, Link, MessageCircle, CheckCircle } from "lucide-react"

interface SocialSharingProps {
  url: string
  title: string
  description: string
  hashtags?: string[]
}

export function SocialSharing({ url, title, description, hashtags = [] }: SocialSharingProps) {
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)
  const encodedHashtags = hashtags.map((tag) => encodeURIComponent(tag)).join(",")

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${encodedHashtags}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    discord: `https://discord.com/channels/@me`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }

  const handleShare = (platform: keyof typeof shareLinks) => {
    if (platform === "discord") {
      // For Discord, we just copy the link since there's no direct share URL
      copyToClipboard()
      return
    }

    window.open(shareLinks[platform], "_blank", "width=600,height=400")
  }

  return (
    <Card className="bg-card/50 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Share2 className="h-5 w-5" />
          Share This Game
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare("facebook")}
            className="flex items-center gap-2 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
          >
            <Facebook className="h-4 w-4" />
            <span className="hidden sm:inline">Facebook</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare("twitter")}
            className="flex items-center gap-2 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors"
          >
            <Twitter className="h-4 w-4" />
            <span className="hidden sm:inline">Twitter</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare("reddit")}
            className="flex items-center gap-2 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Reddit</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
          >
            {copied ? <CheckCircle className="h-4 w-4" /> : <Link className="h-4 w-4" />}
            <span className="hidden sm:inline">{copied ? "Copied!" : "Copy Link"}</span>
          </Button>
        </div>

        <div className="mt-4 p-3 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground mb-1">Share URL:</p>
          <p className="text-sm font-mono break-all">{url}</p>
        </div>
      </CardContent>
    </Card>
  )
}
