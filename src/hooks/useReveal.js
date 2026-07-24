import { useEffect } from 'react'

/**
 * Observes all `.reveal` elements inside the given container ref and adds
 * `.is-visible` when they enter the viewport. Re-scans when `deps` change
 * (e.g. after filtering re-renders the grid).
 */
export function useReveal(containerRef, deps = []) {
  useEffect(() => {
    const root = containerRef?.current
    if (!root || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )

    const scan = () => {
      root.querySelectorAll('.reveal:not(.is-visible)').forEach((el, index) => {
        const stagger = (index % 6) * 70
        el.style.setProperty('--reveal-delay', `${stagger}ms`)
        observer.observe(el)
      })
    }

    scan()

    const mutation = new MutationObserver(scan)
    mutation.observe(root, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
