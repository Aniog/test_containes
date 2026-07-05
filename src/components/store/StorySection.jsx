import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useStockImages } from '@/hooks/useStockImages'

export default function StorySection() {
  const containerRef = useStockImages([])

  return (
    <section ref={containerRef} id="about" className="bg-velmora-panel/40 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
        <div className="overflow-hidden rounded-[2.5rem] bg-velmora-panel shadow-velmora">
          <img
            data-strk-img-id="velmora-story-image-d38c1a"
            data-strk-img="[story-body] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora Fine Jewelry story"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div className="rounded-[2.5rem] border border-velmora-mist/70 bg-white/80 p-8 text-velmora-ink shadow-soft sm:p-10 lg:p-12">
          <p className="text-xs font-medium uppercase tracking-velmora text-velmora-muted">
            Our Story
          </p>
          <h2 id="story-title" className="mt-4 font-display text-4xl text-velmora-ink sm:text-5xl">
            Jewelry that feels intimate, polished, and easy to live in.
          </h2>
          <p id="story-body" className="mt-6 text-base leading-8 text-velmora-muted">
            Velmora was created for women who want everyday jewelry to feel elevated without becoming precious or inaccessible. Every piece is designed to soften into your routine — gifted with intention, worn with confidence, and styled with quiet warmth.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ink transition hover:text-velmora-muted"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
