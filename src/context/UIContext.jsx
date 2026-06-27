import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

const UIContext = createContext(null)

export function UIProvider({ children }) {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const openSearch = useCallback(() => setSearchOpen(true), [])
  const closeSearch = useCallback(() => setSearchOpen(false), [])

  const value = useMemo(
    () => ({ scrolled, searchOpen, openSearch, closeSearch }),
    [scrolled, searchOpen, openSearch, closeSearch],
  )

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export function useUI() {
  const ctx = useContext(UIContext)
  if (!ctx) throw new Error("useUI must be used within a UIProvider")
  return ctx
}