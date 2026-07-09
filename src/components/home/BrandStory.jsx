import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-warm-light overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="px-2 md:px-6">
            <p className="text-xs uppercase tracking-[0.2em] text-velmora-gold mb-3 font-sans">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark mb-6 leading-tight">
              Jewelry That<br />Tells Your Story
            </h2>
            <div className="w-12 h-px bg-velmora-gold/40 mb-6" />
            <p className="text-sm md:text-base text-velmora-slate leading-relaxed mb-4 font-sans">
              Velmora was born from a belief that fine jewelry should not be reserved for special occasions. 
              Every woman deserves to feel extraordinary every day—and the right piece of gold makes that possible.
            </p>
            <p className="text-sm md:text-base text-velmora-slate leading-relaxed mb-8 font-sans">
              We source premium 18K gold plating and ethically made components, partnering with artisans 
              who share our commitment to quality, sustainability, and timeless design.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-velmora-gold hover:text-velmora-gold-dark transition-colors border-b border-velmora-gold/30 pb-1"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}