import { useEffect } from 'react'

function Seo({ title, description }) {
  useEffect(() => {
    document.title = title

    const existing = document.querySelector('meta[name="description"]')
    if (existing) {
      existing.setAttribute('content', description)
    }
  }, [title, description])

  return null
}

export default Seo
