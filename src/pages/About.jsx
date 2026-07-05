import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="bg-velmora-cream pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">Our Story</p>
        <h1 className="font-serif text-4xl md:text-6xl text-velmora-ink mb-8">Crafted to be Treasured</h1>
        <p className="text-velmora-taupe leading-relaxed mb-6">
          Velmora was born from a simple belief: fine jewelry should feel attainable, wearable, and meaningful. Our demi-fine pieces are designed in-house and finished in 18k gold plate, made for the moments you want to remember — and the everyday ones in between.
        </p>
        <p className="text-velmora-taupe leading-relaxed mb-10">
          We work with responsible factories, nickel-free materials, and packaging you will want to keep. Every design is tested for comfort, weight, and longevity, so you can wear your favorites from morning coffee to midnight toasts.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold hover:bg-velmora-goldDark text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors"
        >
          Explore the Collection
        </Link>
      </div>
    </div>
  )
}
