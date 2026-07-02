import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { IMAGE_PLACEHOLDER } from '@/data/products'

export default function StorySection() {
  return (
    <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-200 shadow-[0_24px_70px_-42px_rgba(28,25,23,0.45)]">
        <img
          alt="Velmora brand story"
          className="aspect-[4/5] h-full w-full object-cover"
          data-strk-img-id="story-section-image"
          data-strk-img="[story-description] [story-title]"
          data-strk-img-ratio="4x3"
          data-strk-img-width="1100"
          src={IMAGE_PLACEHOLDER}
        />
      </div>
      <div className="max-w-xl">
        <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Our craft</p>
        <h2 id="story-title" className="mt-4 font-display text-4xl text-stone-950 sm:text-5xl">
          Jewelry that feels intimate, polished, and intentionally priced.
        </h2>
        <p id="story-description" className="mt-6 text-base leading-8 text-stone-600">
          Velmora was created for women who want the mood of fine jewelry without waiting for a special occasion. Each piece is designed to layer softly into real life, from morning meetings to candlelit dinners and thoughtful gifting moments.
        </p>
        <Link
          to="/about"
          className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-stone-900 transition hover:text-amber-700"
        >
          Our Story
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
