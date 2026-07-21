import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function StorySection() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-white p-6 shadow-soft md:grid-cols-[1.1fr_0.9fr] md:p-8">
        <div className="overflow-hidden rounded-[1.5rem] bg-velmora-sand">
          <img
            alt="Velmora brand story"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id="story-image-velmora-71v2"
            data-strk-img="[story-desc] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 px-2 py-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-velmora-stone">
            Our Story
          </span>
          <h2 id="story-title" className="font-serif text-5xl leading-none text-velmora-ink md:text-6xl">
            Jewelry for the moments that stay with you.
          </h2>
          <p id="story-desc" className="text-sm leading-8 text-velmora-stone md:text-base">
            Velmora was created to bring heirloom-inspired detail into modern everyday dressing — a considered edit of warm gold tones, skin-friendly finishes, and gift-worthy presentation.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-ink transition hover:text-velmora-gold"
          >
            Our Story
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
