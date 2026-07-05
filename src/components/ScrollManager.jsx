import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function scrollToTarget(target) {
  const offset = window.innerWidth >= 768 ? 112 : 92
  const top = Math.max(target.getBoundingClientRect().top + window.scrollY - offset, 0)

  window.scrollTo({ top, behavior: 'smooth' })
}

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      let attempts = 0
      const maxAttempts = 30
      let intervalId = null

      const tryScroll = () => {
        const target = document.querySelector(location.hash)

        if (!target) {
          attempts += 1
          if (attempts >= maxAttempts && intervalId) {
            window.clearInterval(intervalId)
          }
          return
        }

        if (intervalId) {
          window.clearInterval(intervalId)
        }
        window.requestAnimationFrame(() => scrollToTarget(target))
      }

      intervalId = window.setInterval(tryScroll, 80)
      tryScroll()

      return () => {
        if (intervalId) {
          window.clearInterval(intervalId)
        }
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.search, location.hash])

  return null
}

export default ScrollManager
