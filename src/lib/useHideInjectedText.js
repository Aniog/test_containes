import { useEffect } from 'react'

const normalizeText = (value) => value.trim().replace(/\s+/g, ' ').toLowerCase()

const hideElement = (element) => {
  if (!(element instanceof HTMLElement)) return
  if (element.dataset.velmoraA11yHidden === 'true') return

  element.dataset.velmoraA11yHidden = 'true'
  element.setAttribute('aria-hidden', 'true')
  element.setAttribute('hidden', '')
}

const hideMatchingNodes = (root, targets) => {
  if (!(root instanceof HTMLElement) || targets.size === 0) return

  const elements = [root, ...root.querySelectorAll('*')]

  elements.forEach((element) => {
    if (!(element instanceof HTMLElement)) return
    if (element.dataset.velmoraA11yHidden === 'true') return
    if (element.childElementCount > 0) return

    const text = normalizeText(element.textContent || '')
    if (!text || !targets.has(text)) return

    hideElement(element)
  })
}

export const useHideInjectedText = (containerRef, values) => {
  useEffect(() => {
    const root = containerRef.current
    if (!(root instanceof HTMLElement)) return undefined

    const targets = new Set(values.map(normalizeText).filter(Boolean))
    if (targets.size === 0) return undefined

    let frameId = 0

    const scheduleScan = () => {
      window.cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(() => {
        hideMatchingNodes(root, targets)
      })
    }

    scheduleScan()

    const observer = new MutationObserver(() => {
      scheduleScan()
    })

    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      observer.disconnect()
    }
  }, [containerRef, values])
}
