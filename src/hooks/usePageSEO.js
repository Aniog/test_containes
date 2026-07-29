import { useEffect } from 'react'

export function usePageSEO(title, description) {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    if (!description) {
      return undefined
    }

    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', description)
    return undefined
  }, [title, description])
}
