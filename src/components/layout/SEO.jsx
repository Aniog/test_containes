import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function SEO({ title, description }) {
  const location = useLocation()

  useEffect(() => {
    document.title = title
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }
  }, [title, description, location.pathname])

  return null
}
