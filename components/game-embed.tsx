"use client"

import { useState, useRef, useEffect } from "react"
import { Loader2, AlertCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface GameEmbedProps {
  src: string
  title: string
  className?: string
  aspectRatio?: "video" | "square"
  showControls?: boolean
}

export function GameEmbed({ src, title, className = "", aspectRatio = "video", showControls = false }: GameEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [loadAttempts, setLoadAttempts] = useState(0)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  const retryLoad = () => {
    setIsLoading(true)
    setHasError(false)
    setLoadAttempts((prev) => prev + 1)

    if (iframeRef.current) {
      // Force reload by changing src slightly
      const newSrc = src + (src.includes("?") ? "&" : "?") + `retry=${Date.now()}`
      iframeRef.current.src = newSrc
    }
  }

  // Auto-retry once after 10 seconds if still loading
  useEffect(() => {
    if (isLoading && loadAttempts === 0) {
      const timer = setTimeout(() => {
        if (isLoading) {
          retryLoad()
        }
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [isLoading, loadAttempts])

  const aspectClass = aspectRatio === "video" ? "aspect-video" : "aspect-square"

  return (
    <div className={`relative ${aspectClass} ${className}`}>
      {/* Loading State */}
      {isLoading && (
        <Card className="absolute inset-0 z-10 bg-muted/95 backdrop-blur-sm border-primary/20">
          <CardContent className="flex flex-col items-center justify-center h-full space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <div className="text-center space-y-2">
              <p className="text-sm font-medium">Loading {title}...</p>
              <p className="text-xs text-muted-foreground">
                {loadAttempts > 0 ? "Retrying connection..." : "Please wait while the game loads"}
              </p>
            </div>
            <div className="w-32 h-1 bg-muted-foreground/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: "60%" }} />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Error State */}
      {hasError && (
        <Card className="absolute inset-0 z-10 bg-destructive/10 backdrop-blur-sm border-destructive/20">
          <CardContent className="flex flex-col items-center justify-center h-full space-y-4">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-destructive">Failed to load {title}</p>
              <p className="text-xs text-muted-foreground">The game server might be temporarily unavailable</p>
            </div>
            <Button onClick={retryLoad} variant="outline" size="sm" className="gap-2 bg-transparent">
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Game Iframe */}
      <iframe
        ref={iframeRef}
        src={src}
        className="w-full h-full rounded-lg"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        title={title}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  )
}
