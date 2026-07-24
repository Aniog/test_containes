import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-100 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-gold-600 text-xs tracking-widest uppercase mb-4 font-sans">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900 leading-tight mb-6">
              Where Craft<br />Meets Intention
            </h2>
            <div className="w-12 h-px bg-gold-400 mb-6" />
            <p className="text-charcoal-600 leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune or compromise on quality. Each piece is designed in our studio and crafted with 18K gold plating over solid brass — the same materials used by luxury houses, at a fraction of the price.
            </p>
            <p className="text-charcoal-600 leading-relaxed mb-8">
              We design for the woman who wants to feel elevated every day. Not for special occasions — for all of them.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-charcoal-900 text-sm tracking-widest uppercase font-sans font-medium group hover:text-gold-600 transition-colors"
            >
              Read Our Story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
