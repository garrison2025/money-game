"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X, FileText, HelpCircle, Gamepad2, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  type: "page" | "guide" | "faq" | "game"
  content: string
}

const searchIndex: SearchResult[] = [
  {
    id: "home",
    title: "BLOODMONEY! Home",
    description: "Play BLOODMONEY! online free with guides and tips",
    url: "/",
    type: "page",
    content: "bloodmoney game survival action resource management weapon upgrades combat",
  },
  {
    id: "play",
    title: "Game Center",
    description: "Play both BLOODMONEY! games in full screen",
    url: "/play",
    type: "game",
    content: "play game center bloodmoney harvey clicker survival action",
  },
  {
    id: "beginners-guide",
    title: "Beginner's Survival Guide",
    description: "Master resource management and basic survival tactics",
    url: "/guides/beginners",
    type: "guide",
    content: "beginner guide survival resource management health packs ammunition power-ups gadgets",
  },
  {
    id: "advanced-guide",
    title: "Advanced Strategy Guide",
    description: "Customize your perfect combat build and dominate",
    url: "/guides/advanced",
    type: "guide",
    content: "advanced strategy weapon upgrades skill trees combat build tactics",
  },
  {
    id: "about",
    title: "About BLOODMONEY!",
    description: "Learn about the games and development",
    url: "/about",
    type: "page",
    content: "about bloodmoney game development team story",
  },
  {
    id: "contact",
    title: "Contact Us",
    description: "Get help and report issues",
    url: "/contact",
    type: "page",
    content: "contact support help report bugs feedback",
  },
  {
    id: "faq-difference",
    title: "Game Differences",
    description: "What's the difference between the two games?",
    url: "/#faq",
    type: "faq",
    content: "difference between games action survival clicker psychological horror",
  },
  {
    id: "faq-free",
    title: "Free to Play",
    description: "Are the games completely free?",
    url: "/#faq",
    type: "faq",
    content: "free games no cost subscription pay-to-win",
  },
  {
    id: "faq-account",
    title: "No Account Required",
    description: "Do I need to create an account?",
    url: "/#faq",
    type: "faq",
    content: "account registration login progress saved locally",
  },
  {
    id: "faq-devices",
    title: "Device Support",
    description: "What devices are supported?",
    url: "/#faq",
    type: "faq",
    content: "devices desktop mobile tablet browser chrome firefox safari",
  },
  {
    id: "harvey-game",
    title: "Harvey Clicker Game",
    description: "Bloodmoney Clicker Edition with Harvey Harvington",
    url: "https://kbhgames.com/game/bloodmoney",
    type: "game",
    content: "harvey clicker psychological horror moral choices $25000 medical bill",
  },
]

export function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Search function
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    const lowercaseQuery = searchQuery.toLowerCase()
    const searchResults = searchIndex
      .filter(
        (item) =>
          item.title.toLowerCase().includes(lowercaseQuery) ||
          item.description.toLowerCase().includes(lowercaseQuery) ||
          item.content.toLowerCase().includes(lowercaseQuery),
      )
      .slice(0, 8) // Limit to 8 results

    setResults(searchResults)
    setSelectedIndex(-1)
  }

  // Handle search input
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(query)
    }, 150) // Debounce search

    return () => clearTimeout(timeoutId)
  }, [query])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
          break
        case "ArrowUp":
          e.preventDefault()
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
          break
        case "Enter":
          e.preventDefault()
          if (selectedIndex >= 0 && results[selectedIndex]) {
            window.location.href = results[selectedIndex].url
            closeSearch()
          }
          break
        case "Escape":
          closeSearch()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, results, selectedIndex])

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        closeSearch()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  const openSearch = () => {
    setIsOpen(true)
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  const closeSearch = () => {
    setIsOpen(false)
    setQuery("")
    setResults([])
    setSelectedIndex(-1)
  }

  const getResultIcon = (type: SearchResult["type"]) => {
    switch (type) {
      case "guide":
        return <FileText className="h-4 w-4 text-primary" />
      case "faq":
        return <HelpCircle className="h-4 w-4 text-secondary" />
      case "game":
        return <Gamepad2 className="h-4 w-4 text-yellow-500" />
      default:
        return <Info className="h-4 w-4 text-muted-foreground" />
    }
  }

  return (
    <>
      {/* Search Trigger Button */}
      <Button
        onClick={openSearch}
        variant="outline"
        size="sm"
        className="gap-2 bg-transparent border-muted-foreground/20 hover:border-primary/40"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search...</span>
      </Button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed left-1/2 top-1/4 -translate-x-1/2 w-full max-w-2xl px-4">
            <div ref={searchRef} className="bg-background border rounded-lg shadow-lg">
              {/* Search Input */}
              <div className="flex items-center border-b px-4 py-3">
                <Search className="h-5 w-5 text-muted-foreground mr-3" />
                <Input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search games, guides, FAQ..."
                  className="border-0 focus-visible:ring-0 text-base"
                />
                <Button onClick={closeSearch} variant="ghost" size="sm" className="ml-2 h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Search Results */}
              {results.length > 0 && (
                <div className="max-h-96 overflow-y-auto p-2">
                  {results.map((result, index) => (
                    <Link
                      key={result.id}
                      href={result.url}
                      onClick={closeSearch}
                      className={`block p-3 rounded-md transition-colors ${
                        index === selectedIndex ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {getResultIcon(result.type)}
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">{result.title}</div>
                          <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{result.description}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* No Results */}
              {query && results.length === 0 && (
                <div className="p-8 text-center text-muted-foreground">
                  <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No results found for "{query}"</p>
                  <p className="text-xs mt-1">Try searching for games, guides, or FAQ topics</p>
                </div>
              )}

              {/* Search Tips */}
              {!query && (
                <div className="p-4 border-t bg-muted/30">
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>
                      <strong>Quick tips:</strong>
                    </p>
                    <p>• Search for "beginner guide", "weapon upgrades", "harvey game"</p>
                    <p>• Use arrow keys to navigate, Enter to select, Esc to close</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
