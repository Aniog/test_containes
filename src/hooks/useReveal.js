import { useEffect, useRef } from "react"

// Adds `is-visible` class to elements with the `reveal` class when they
// scroll into view. Attach the returned ref to a container that wraps the
// reveal elements.
export function useReveal(deps = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const targets = node.classList.contains("reveal")
      ? [node]
      : Array.from(node.querySelectorAll(".reveal"))

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

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return containerRef
}
