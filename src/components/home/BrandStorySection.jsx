import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ImageLoader } from '@/components/layout/ImageLoader'

export function BrandStorySection() {
  return (
    <section className="bg-velmora-parchment py-20 sm:py-24">
      <ImageLoader dependencies={[]} className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-velmora-line bg-velmora-espresso shadow-[0_24px_80px_rgba(34,27,25,0.18)]">
          <img
            alt="Velmora atelier scene"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id="brand-story-image-velmora-20adf6"
            data-strk-img="[story-copy] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>

        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.32em] text-velmora-truffle">Brand story</p>
          <h2 id="story-title" className="mt-4 font-display text-4xl text-velmora-espresso sm:text-5xl">
            Jewelry designed to move with real life.
          </h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-truffle sm:text-lg">
            Velmora was created for women who want their jewelry to feel personal, polished, and easy to wear. Every piece is shaped to hold its own in a quiet moment and layer beautifully into the rhythm of everyday dressing.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-velmora-espresso transition hover:text-velmora-gold"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ImageLoader>
    </section>
  )
}
