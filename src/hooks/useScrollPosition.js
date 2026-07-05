import { useEffect, useState } from "react"

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let frame = 0
    const handleScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY || window.pageYOffset || 0)
        frame = 0
      })
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return scrollY
}
