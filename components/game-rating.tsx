"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Star, MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react"

interface GameRating {
  gameId: string
  rating: number
  review?: string
  timestamp: number
  helpful: number
  notHelpful: number
}

interface GameRatingProps {
  gameId: string
  gameName: string
  initialRating?: number
}

export function GameRating({ gameId, gameName, initialRating = 0 }: GameRatingProps) {
  const [userRating, setUserRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [review, setReview] = useState("")
  const [hasRated, setHasRated] = useState(false)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [allRatings, setAllRatings] = useState<GameRating[]>([])
  const [averageRating, setAverageRating] = useState(initialRating)

  useEffect(() => {
    // Load existing ratings from localStorage
    const savedRatings = localStorage.getItem(`ratings-${gameId}`)
    if (savedRatings) {
      try {
        const ratings: GameRating[] = JSON.parse(savedRatings)
        setAllRatings(ratings)

        // Calculate average rating
        if (ratings.length > 0) {
          const avg = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length
          setAverageRating(Number(avg.toFixed(1)))
        }

        // Check if user has already rated
        const userRatingData = localStorage.getItem(`user-rating-${gameId}`)
        if (userRatingData) {
          const userData = JSON.parse(userRatingData)
          setUserRating(userData.rating)
          setReview(userData.review || "")
          setHasRated(true)
        }
      } catch (error) {
        console.error("Failed to load ratings:", error)
      }
    }
  }, [gameId])

  const handleRatingClick = (rating: number) => {
    if (!hasRated) {
      setUserRating(rating)
      setShowReviewForm(true)
    }
  }

  const submitRating = () => {
    if (userRating === 0) return

    const newRating: GameRating = {
      gameId,
      rating: userRating,
      review: review.trim() || undefined,
      timestamp: Date.now(),
      helpful: 0,
      notHelpful: 0,
    }

    // Save user's rating
    localStorage.setItem(`user-rating-${gameId}`, JSON.stringify(newRating))

    // Add to all ratings
    const updatedRatings = [...allRatings, newRating]
    localStorage.setItem(`ratings-${gameId}`, JSON.stringify(updatedRatings))

    setAllRatings(updatedRatings)
    setHasRated(true)
    setShowReviewForm(false)

    // Recalculate average
    const avg = updatedRatings.reduce((sum, r) => sum + r.rating, 0) / updatedRatings.length
    setAverageRating(Number(avg.toFixed(1)))
  }

  const renderStars = (rating: number, interactive = false) => {
    return Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1
      const isFilled = interactive ? starValue <= (hoverRating || userRating) : starValue <= rating

      return (
        <Star
          key={index}
          className={`h-6 w-6 cursor-pointer transition-colors ${
            isFilled ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground hover:text-yellow-400"
          }`}
          onClick={() => interactive && handleRatingClick(starValue)}
          onMouseEnter={() => interactive && setHoverRating(starValue)}
          onMouseLeave={() => interactive && setHoverRating(0)}
        />
      )
    })
  }

  return (
    <Card className="bg-card/50 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-400" />
          Rate {gameName}
        </CardTitle>
        <CardDescription>
          {allRatings.length > 0
            ? `Average: ${averageRating}/5 (${allRatings.length} ${allRatings.length === 1 ? "rating" : "ratings"})`
            : "Be the first to rate this game!"}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {!hasRated ? (
          <>
            <div className="flex items-center gap-1">
              {renderStars(userRating, true)}
              <span className="ml-2 text-sm text-muted-foreground">{hoverRating || userRating || "Click to rate"}</span>
            </div>

            {showReviewForm && (
              <div className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-300">
                <div>
                  <Label htmlFor="review">Write a review (optional)</Label>
                  <Textarea
                    id="review"
                    placeholder="Share your thoughts about this game..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={submitRating} disabled={userRating === 0}>
                    Submit Rating
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowReviewForm(false)
                      setUserRating(0)
                      setReview("")
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Your rating:</span>
              <div className="flex">{renderStars(userRating)}</div>
            </div>
            {review && (
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm">{review}</p>
              </div>
            )}
            <p className="text-xs text-muted-foreground">Thank you for your feedback!</p>
          </div>
        )}

        {/* Recent Reviews */}
        {allRatings.length > 0 && (
          <div className="border-t pt-4">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Recent Reviews
            </h4>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {allRatings
                .filter((r) => r.review)
                .slice(-3)
                .reverse()
                .map((rating, index) => (
                  <div key={index} className="bg-muted/30 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex">{renderStars(rating.rating)}</div>
                      <span className="text-xs text-muted-foreground">
                        {new Date(rating.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm">{rating.review}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                        <ThumbsUp className="h-3 w-3" />
                        {rating.helpful}
                      </button>
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                        <ThumbsDown className="h-3 w-3" />
                        {rating.notHelpful}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
