import { useEffect, useRef } from "react"

/**
 * Adds the `is-visible` class to elements with `.reveal` inside the returned
 * container as they scroll into view. Falls back gracefully if
 * IntersectionObserver isn't available.
 */
export function useScrollReveal(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    // If view-timeline is supported, CSS handles the animation entirely
    if (typeof CSS !== "undefined" && CSS.supports?.("animation-timeline: view()")) {
      return
    }

    const targets = root.querySelectorAll(".reveal")
    if (targets.length === 0) return

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"))
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
      { threshold: 0.12 },
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
