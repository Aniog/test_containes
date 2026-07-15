import { useEffect } from "react"

/**
 * Adds `is-visible` to elements with the `reveal` class inside `root`
 * as they enter the viewport.
 */
export function useReveal(root, deps = []) {
  useEffect(() => {
    if (!root?.current) return
    const els = root.current.querySelectorAll(".reveal")
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
