import { useEffect } from 'react'

function PageMeta({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    if (!description) {
      return
    }

    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', description)
    }
  }, [title, description])

  return null
}

export default PageMeta
