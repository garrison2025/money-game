"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface LazySectionProps {
  children: React.ReactNode
  className?: string
  threshold?: number
}

export function LazySection({ children, className = "", threshold = 0.1 }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true)
          setHasLoaded(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, hasLoaded])

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-700">{children}</div>
      ) : (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-muted border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}
