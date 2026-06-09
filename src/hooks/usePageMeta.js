import { useEffect } from 'react'

const ensureMetaTag = (name) => {
  let tag = document.querySelector(`meta[name="${name}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }

  return tag
}

export function usePageMeta(title, description) {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    if (description) {
      ensureMetaTag('description').setAttribute('content', description)
    }
  }, [title, description])
}
