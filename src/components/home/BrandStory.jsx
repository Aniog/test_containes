import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100 shadow-[0_24px_60px_rgba(28,25,23,0.08)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[360px] bg-stone-950">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora atelier"
            className="absolute inset-0 h-full w-full object-cover"
            data-strk-img-id="brand-story-image"
            data-strk-img="[brand-story-body] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-12 md:px-10 lg:px-14">
          <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
            The Brand
          </p>
          <h2
            id="brand-story-title"
            className="mt-4 font-serif text-4xl leading-none text-stone-950 md:text-5xl"
          >
            Designed for modern heirloom energy
          </h2>
          <p
            id="brand-story-body"
            className="mt-6 max-w-lg text-base leading-7 text-stone-600"
          >
            Velmora creates refined gold-toned jewelry that feels considered,
            feminine, and giftable — the kind of pieces that elevate a white tee,
            finish an evening dress, and stay in daily rotation.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-stone-900 transition hover:text-stone-700"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
