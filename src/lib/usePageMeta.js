import { useEffect } from 'react'
import { seo } from '@/data/siteContent'

export const usePageMeta = (title, description = seo.homeDescription) => {
  useEffect(() => {
    document.title = title

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }
  }, [description, title])
}
