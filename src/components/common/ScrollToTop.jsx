import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const frameId = window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ block: 'start' })
      })
      return () => window.cancelAnimationFrame(frameId)
    }

    window.scrollTo({ top: 0, left: 0 })
    return undefined
  }, [pathname, hash])

  return null
}

export default ScrollToTop
