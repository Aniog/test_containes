import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1631982681280-8ca46226a5c9?w=800&h=1067&fit=crop&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:py-8">
            <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold font-sans mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal mb-6 leading-tight">
              Designed with Intention, Worn with Confidence
            </h2>
            <p className="text-velmora-muted font-sans leading-relaxed mb-4">
              Velmora was born from a belief that fine jewelry should not be reserved for special occasions alone. Every piece in our collection is designed to elevate the everyday — crafted with 18K gold plating, nickel-free materials, and a meticulous eye for detail.
            </p>
            <p className="text-velmora-muted font-sans leading-relaxed mb-8">
              From our studio to your jewelry box, we prioritize sustainability, ethical sourcing, and timeless design. Because the best luxury is the kind you can wear every day.
            </p>
            <Link
              to="/"
              className="inline-block text-xs tracking-widest uppercase font-medium border-b border-velmora-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
