import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] rounded-sm overflow-hidden bg-midnight-100">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900&q=85"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <span className="text-[10px] tracking-[0.2em] uppercase text-gold-600">
              About Velmora
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-midnight-900 mt-3 font-light leading-[1.15]">
              Jewelry that
              <br />
              <span className="italic">outlasts</span> trends
            </h2>
            <div className="w-12 h-px bg-gold-500/50 my-6" />
            <p className="text-sm text-midnight-600 leading-relaxed">
              Velmora was born from a simple belief: fine jewelry shouldn't
              require a fine price tag. Every piece is crafted in 18K gold-plated
              brass, finished by hand, and designed to be worn every day —
              layered, stacked, and lived in.
            </p>
            <p className="text-sm text-midnight-600 leading-relaxed mt-4">
              From our studio to your doorstep, we skip the markup and deliver
              heirloom quality at an honest price.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 text-[11px] tracking-widest uppercase text-midnight-900 border-b border-midnight-900/30 pb-0.5 hover:border-midnight-900 transition-colors group"
            >
              Our Story
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}