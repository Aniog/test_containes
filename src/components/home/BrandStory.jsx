import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image side */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&q=85"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="max-w-lg">
            <span className="text-xs tracking-widest uppercase text-brand-gold">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mt-4 font-semibold leading-tight">
              Demi-fine jewelry, <br />
              <span className="italic">crafted with intention</span>
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-6" />
            <p className="text-white/70 text-sm md:text-base mt-6 leading-relaxed">
              At Velmora, we believe fine jewelry should be accessible without compromise.
              Each piece is meticulously crafted using 18K gold plating over premium metals —
              designed to be worn, layered, and loved every single day.
            </p>
            <p className="text-white/60 text-sm mt-4 leading-relaxed">
              From our atelier to your doorstep, we champion ethical craftsmanship,
              sustainable practices, and timeless designs that transcend seasons.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs tracking-widest uppercase text-brand-gold hover:text-brand-gold-dark transition-colors border-b border-brand-gold pb-1"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}