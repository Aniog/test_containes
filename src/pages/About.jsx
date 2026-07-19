import PlaceholderPage from "@/pages/PlaceholderPage"
import { STORY } from "@/data/content"

export default function About() {
  return (
    <PlaceholderPage
      eyebrow={STORY.eyebrow}
      heading={STORY.heading}
      body={STORY.body}
      ctaLabel="Browse the collection"
      ctaHref="/shop"
    />
  )
}
