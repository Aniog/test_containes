import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="aspect-[4x5] overflow-hidden rounded-md">
          <img
            src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=900&q=80"
            alt="Velmora brand story"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="font-serif text-3xl text-brand-ink md:text-4xl">Our Story</h1>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted">
            Velmora was born from a belief that fine jewelry should feel effortless. We design
            demi-fine pieces in warm 18K gold plating, using responsibly sourced materials and
            thoughtful silhouettes meant to be worn daily.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted">
            Every piece is designed in-house and finished by hand. We work with small ateliers
            that share our commitment to quality, ethics, and quiet luxury.
          </p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-ink hover:text-brand-gold">
            Shop the collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}