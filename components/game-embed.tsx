"use client";

import { useState, useRef, useEffect } from "react";
import { Loader2, AlertCircle, RefreshCw, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // 假设你的cn工具函数在这里

interface GameEmbedProps {
  src: string;
  title: string;
  className?: string;
  aspectRatio?: "video" | "square";
  showControls?: boolean;
}

export function GameEmbed({
  src,
  title,
  className = "",
  aspectRatio = "video",
  showControls = false, // 这个 prop 暂时没用到，但保留
}: GameEmbedProps) {
  // 新增 State: 追踪用户是否已经点击“播放”
  const [hasStarted, setHasStarted] = useState(false);

  // 你原来写的优秀的状态管理逻辑，我们全部保留
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadAttempts, setLoadAttempts] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const retryLoad = () => {
    setIsLoading(true);
    setHasError(false);
    setLoadAttempts((prev) => prev + 1);

    if (iframeRef.current) {
      const newSrc = src + (src.includes("?") ? "&" : "?") + `retry=${Date.now()}`;
      iframeRef.current.src = newSrc;
    }
  };

  // 自动重试逻辑，只在开始加载后生效
  useEffect(() => {
    if (hasStarted && isLoading && loadAttempts === 0) {
      const timer = setTimeout(() => {
        if (isLoading) { // 再次检查，确保状态没有改变
          retryLoad();
        }
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [hasStarted, isLoading, loadAttempts]);

  // 计算容器的宽高比 Class
  const aspectClass = aspectRatio === "video" ? "aspect-video" : "aspect-square";

  // --- 核心改动在这里 ---

  // 1. 如果用户还没有点击，就显示一个轻量级的占位符
  if (!hasStarted) {
    return (
      <div
        onClick={() => setHasStarted(true)}
        className={cn(
          "relative flex flex-col items-center justify-center text-center p-4 cursor-pointer group bg-muted/50 border-2 border-dashed border-primary/20 hover:border-primary/40 hover:bg-muted/80 transition-all duration-300 rounded-lg",
          aspectClass,
          className
        )}
        role="button"
        tabIndex={0}
        aria-label={`Play game: ${title}`}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setHasStarted(true)}
      >
        <PlayCircle className="h-16 w-16 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
        <p className="mt-4 text-lg font-bold text-foreground">Click to Play</p>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    );
  }

  // 2. 用户点击后 (hasStarted === true)，才渲染你原来写的全部逻辑
  return (
    <div className={cn("relative", aspectClass, className)}>
      {/* Loading State UI (完全复用你原来的代码) */}
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
          </CardContent>
        </Card>
      )}

      {/* Error State UI (完全复用你原来的代码) */}
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

      {/* Game Iframe (现在只在点击后渲染) */}
      <iframe
        ref={iframeRef}
        src={src} // iframe 现在只在 hasStarted 为 true 时渲染，所以会立即开始加载
        className="w-full h-full rounded-lg"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        title={title}
        onLoad={handleLoad}
        onError={handleError}
        // loading="lazy" 仍然可以保留，但现在它的作用不大了
      />
    </div>
  );
}
