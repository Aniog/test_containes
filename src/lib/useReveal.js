import { useEffect } from "react"

// Adds `.is-visible` to any `.reveal` element when it scrolls into view.
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"))
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("is-visible"))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  })
}
