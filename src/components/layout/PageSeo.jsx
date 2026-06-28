import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageMeta } from '@/content/siteContent'

const PageSeo = () => {
  const location = useLocation()

  useEffect(() => {
    const meta = pageMeta[location.pathname] ?? pageMeta['/']
    document.title = meta.title

    let descriptionTag = document.querySelector('meta[name="description"]')

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.name = 'description'
      document.head.appendChild(descriptionTag)
    }

    descriptionTag.setAttribute('content', meta.description)
    console.log('SEO metadata updated', meta)
  }, [location.pathname])

  return null
}

export default PageSeo
