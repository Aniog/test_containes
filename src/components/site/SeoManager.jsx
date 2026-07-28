import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageMeta, seo } from '@/siteData'

function SeoManager() {
  const location = useLocation()

  useEffect(() => {
    const meta = pageMeta[location.pathname] || pageMeta['/']
    document.title = meta?.title || seo.siteTitle

    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }

    descriptionTag.setAttribute('content', meta?.description || seo.siteDescription)
  }, [location.pathname])

  return null
}

export default SeoManager
