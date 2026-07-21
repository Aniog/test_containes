import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"

// Scrolls to top on route change (unless there's a hash).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname, hash])
  return null
}
