import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollManager() {
  const { pathname, search, hash } = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1))
        if (target) {
          target.scrollIntoView({ block: 'start' })
          return
        }
      }
      window.scrollTo({ top: 0, left: 0 })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [pathname, search, hash])

  return null
}
