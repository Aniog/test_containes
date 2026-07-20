import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 md:py-28 text-center">
        <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
          About Velmora
        </p>
        <h1 className="font-serif text-3xl md:text-5xl tracking-wide mb-8">
          Designed for the Modern Woman
        </h1>
        <p className="text-sm leading-relaxed text-velmora-warmgray mb-6">
          Velmora was founded on a simple belief: that luxury jewelry should be accessible, wearable, and enduring. We create demi-fine pieces in 18K gold plate — designed to transition seamlessly from morning coffee to evening cocktails, from boardrooms to beach vacations.
        </p>
        <p className="text-sm leading-relaxed text-velmora-warmgray mb-10">
          Every design begins in our studio, where we draw inspiration from architecture, nature, and the women who wear our pieces. We work with skilled artisans who share our commitment to quality, ensuring each earring, necklace, and huggie meets our exacting standards before it reaches you.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-3 border border-velmora-ink px-8 py-4 text-xs uppercase tracking-[0.2em] text-velmora-ink transition-all duration-300 hover:bg-velmora-ink hover:text-white"
        >
          Explore the Collection
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
