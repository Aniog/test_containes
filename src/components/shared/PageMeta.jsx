import { useEffect } from 'react'

const ensureMetaTag = (name) => {
  let tag = document.head.querySelector(`meta[name="${name}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }

  return tag
}

const PageMeta = ({ title, description }) => {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    if (description) {
      ensureMetaTag('description').setAttribute('content', description)
    }
  }, [description, title])

  return null
}

export default PageMeta
