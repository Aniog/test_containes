import { useEffect } from 'react'

export const usePageMeta = ({ title, description }) => {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription && description) {
      metaDescription.setAttribute('content', description)
    }
  }, [description, title])
}
