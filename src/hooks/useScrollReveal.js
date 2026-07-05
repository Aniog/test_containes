import { useEffect } from "react"

// Adds `.is-visible` to any element with `.reveal` once it enters the viewport.
// Re-runs when the container reference list grows (dynamic content).
export function useScrollReveal(deps = []) {
  useEffect(() => {
    const root = document
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    )
    const elements = root.querySelectorAll(".reveal:not(.is-visible)")
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
