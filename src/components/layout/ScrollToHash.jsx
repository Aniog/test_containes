import * as React from "react"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" })
      return
    }
    const id = hash.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 60)
    }
  }, [pathname, hash])

  return null
}
