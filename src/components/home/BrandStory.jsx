import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function BrandStory() {
  const storyRef = useRef(null)
  useStrkImages(storyRef, [])

  return (
    <section id="story" ref={storyRef} className="bg-velmora-ivory px-4 py-16 text-velmora-espresso sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-stone shadow-soft image-gold-glow">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-strk-bg-id="brand-story-atelier-bg-a9c4e7"
            data-strk-bg="[story-kicker] [story-title] [story-body]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1200"
          />
        </div>
        <div className="lg:pl-10">
          <p id="story-kicker" className="text-xs font-bold uppercase tracking-[0.36em] text-velmora-goldDark">
            Brand story
          </p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-7xl">
            Demi-fine pieces made for the everyday heirloom.
          </h2>
          <div className="my-8 h-px w-28 bg-velmora-gold" />
          <p id="story-body" className="text-base leading-8 text-velmora-ink">
            Velmora is designed between the intimacy of fine jewelry and the ease of modern dressing. Every piece is selected for warmth, comfort, and polish — the kind of gold you reach for before a meeting, a birthday dinner, or a quiet moment just for yourself.
          </p>
          <Link
            to="/#story"
            className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-velmora-espresso transition hover:text-velmora-goldDark"
          >
            Our Story
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
