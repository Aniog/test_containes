import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { routeMeta } from '@/data/siteContent'

const SeoController = () => {
  const location = useLocation()
  const currentMeta = routeMeta[location.pathname] || routeMeta['/']

  useEffect(() => {
    document.title = currentMeta.title

    const ensureMeta = (name) => {
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
      }
      return tag
    }

    ensureMeta('description').setAttribute('content', currentMeta.description)
  }, [currentMeta])

  return null
}

export default SeoController
