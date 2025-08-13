"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RefreshCw, AlertTriangle, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

interface EnhancedGameEmbedProps {
  src: string
  title: string
  className?: string
  width?: number
  height?: number
}

export function EnhancedGameEmbed({ src, title, className = "", width = 800, height = 600 }: EnhancedGameEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const maxRetries = 3

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading && retryCount === 0) {
        setHasError(true)
        setIsLoading(false)
      }
    }, 15000) // 15 second timeout

    return () => clearTimeout(timer)
  }, [isLoading, retryCount])

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  const handleRetry = () => {
    if (retryCount < maxRetries) {
      setIsLoading(true)
      setHasError(false)
      setRetryCount((prev) => prev + 1)

      // Force iframe reload
      if (iframeRef.current) {
        iframeRef.current.src = `${src}?retry=${retryCount + 1}`
      }
    }
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // Note: This is a UI toggle - actual game pause would require game API
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    // Note: This is a UI toggle - actual mute would require game API
  }

  const toggleFullscreen = () => {
    if (iframeRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        iframeRef.current.requestFullscreen()
      }
    }
  }

  return (
    <Card className={`relative overflow-hidden ${className}`}>
      {/* Game Controls */}
      <div className="absolute top-2 right-2 z-10 flex gap-1">
        <Button
          size="sm"
          variant="secondary"
          onClick={togglePlay}
          className="h-8 w-8 p-0 bg-black/70 hover:bg-black/90 text-white border-0"
          aria-label={isPlaying ? "Pause game" : "Resume game"}
        >
          {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
        </Button>

        <Button
          size="sm"
          variant="secondary"
          onClick={toggleMute}
          className="h-8 w-8 p-0 bg-black/70 hover:bg-black/90 text-white border-0"
          aria-label={isMuted ? "Unmute game" : "Mute game"}
        >
          {isMuted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
        </Button>

        <Button
          size="sm"
          variant="secondary"
          onClick={toggleFullscreen}
          className="h-8 w-8 p-0 bg-black/70 hover:bg-black/90 text-white border-0"
          aria-label="Toggle fullscreen"
        >
          <Maximize className="h-3 w-3" />
        </Button>
      </div>

      <CardContent className="p-0 relative">
        {/* Loading State */}
        {isLoading && (
          <div
            className="absolute inset-0 bg-muted flex flex-col items-center justify-center z-20"
            style={{ aspectRatio: `${width}/${height}` }}
          >
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm text-muted-foreground animate-pulse">Loading {title}...</p>
            <div className="w-48 h-2 bg-muted-foreground/20 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: "60%" }} />
            </div>
          </div>
        )}

        {/* Error State */}
        {hasError && (
          <div
            className="absolute inset-0 bg-muted flex flex-col items-center justify-center z-20 text-center p-6"
            style={{ aspectRatio: `${width}/${height}` }}
          >
            <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
            <h3 className="text-lg font-semibold mb-2">Failed to Load Game</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              {retryCount >= maxRetries
                ? "Unable to load the game after multiple attempts. Please check your internet connection and try again later."
                : "The game failed to load. This might be due to a temporary network issue."}
            </p>

            {retryCount < maxRetries && (
              <Button onClick={handleRetry} className="mb-2">
                <RefreshCw className="h-4 w-4 mr-2" />
                Retry ({maxRetries - retryCount} attempts left)
              </Button>
            )}

            <Button variant="outline" onClick={() => window.location.reload()}>
              Refresh Page
            </Button>
          </div>
        )}

        {/* Game Iframe */}
        <iframe
          ref={iframeRef}
          src={src}
          title={title}
          width={width}
          height={height}
          className={`w-full border-0 transition-opacity duration-300 ${
            isLoading || hasError ? "opacity-0" : "opacity-100"
          } ${!isPlaying ? "pointer-events-none filter grayscale" : ""}`}
          style={{ aspectRatio: `${width}/${height}` }}
          allow="fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
        />
      </CardContent>
    </Card>
  )
}
