"use client"

import { useEffect, useState } from "react"

interface PerformanceMetrics {
  fps: number
  memory: number
  loadTime: number
  connectionType: string
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [showMonitor, setShowMonitor] = useState(false)

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const shouldShow = process.env.NODE_ENV === "development" || localStorage.getItem("show-performance-monitor")
    setShowMonitor(!!shouldShow)

    if (!shouldShow) return

    let frameCount = 0
    let lastTime = performance.now()
    let fps = 0

    const measureFPS = () => {
      frameCount++
      const currentTime = performance.now()

      if (currentTime >= lastTime + 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        frameCount = 0
        lastTime = currentTime
      }

      requestAnimationFrame(measureFPS)
    }

    const updateMetrics = () => {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
      const loadTime = navigation ? Math.round(navigation.loadEventEnd - navigation.fetchStart) : 0

      // @ts-ignore - memory API might not be available in all browsers
      const memory = (performance as any).memory ? Math.round((performance as any).memory.usedJSHeapSize / 1048576) : 0

      // @ts-ignore - connection API might not be available
      const connection =
        (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
      const connectionType = connection ? connection.effectiveType || connection.type || "unknown" : "unknown"

      setMetrics({
        fps,
        memory,
        loadTime,
        connectionType,
      })
    }

    measureFPS()
    const interval = setInterval(updateMetrics, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  if (!showMonitor || !metrics) return null

  return (
    <div className="performance-monitor">
      <div>FPS: {metrics.fps}</div>
      <div>Memory: {metrics.memory}MB</div>
      <div>Load: {metrics.loadTime}ms</div>
      <div>Connection: {metrics.connectionType}</div>
    </div>
  )
}
