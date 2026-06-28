import { useEffect } from "react"
import { strings } from "@/data/strings.en"

const s = strings.en.meta

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Strikingly",
      item: "https://www.strikingly.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Generators",
      item: "https://www.strikingly.com/generators",
    },
  ],
}

export function updateSeo() {
  document.documentElement.lang = "en"

  const setMeta = (selector, content) => {
    let el = document.querySelector(selector)
    if (!el) {
      el = document.createElement("meta")
      const nameMatch = selector.match(/(?:name|property)="([^"]+)"/)
      const propMatch = selector.match(/property="([^"]+)"/)
      if (propMatch) {
        el.setAttribute("property", propMatch[1])
      } else if (nameMatch) {
        el.setAttribute("name", nameMatch[1])
      }
      document.head.appendChild(el)
    }
    el.setAttribute("content", content)
  }

  const setTitle = (title) => {
    document.title = title
  }

  const setCanonical = (href) => {
    let el = document.querySelector('link[rel="canonical"]')
    if (!el) {
      el = document.createElement("link")
      el.setAttribute("rel", "canonical")
      document.head.appendChild(el)
    }
    el.setAttribute("href", href)
  }

  const setJsonLd = (data) => {
    const id = "generators-breadcrumb-jsonld"
    let el = document.getElementById(id)
    if (!el) {
      el = document.createElement("script")
      el.id = id
      el.type = "application/ld+json"
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(data)
  }

  setTitle(s.title)
  setMeta('meta[name="description"]', s.description)
  setMeta('meta[property="og:title"]', s.ogTitle)
  setMeta('meta[property="og:description"]', s.ogDescription)
  setMeta('meta[property="og:url"]', s.canonical)
  setCanonical(s.canonical)
  setJsonLd(breadcrumbJsonLd)
}

export function Seo() {
  useEffect(() => {
    updateSeo()
  }, [])

  return null
}
