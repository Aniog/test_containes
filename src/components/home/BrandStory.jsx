import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-auto bg-velvet-100 flex items-center justify-center">
            <span className="text-sm text-velvet-400 font-serif italic">
              Brand Image
            </span>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 py-20 md:px-20">
            <p className="text-[11px] tracking-widest-plus uppercase text-gold-600 mb-6 font-medium">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-deep font-medium leading-[1.15] mb-8">
              Jewelry that<br />Lives with You
            </h2>
            <p className="text-velvet-600 leading-relaxed mb-3 max-w-md">
              Velmora was born from a simple belief: that fine jewelry should be part of everyday life, not locked away for special occasions.
            </p>
            <p className="text-velvet-600 leading-relaxed mb-10 max-w-md">
              Each piece is designed in our London atelier, crafted in 18K gold plate on ethically sourced brass, and finished by hand. The result — demi-fine jewelry with the soul of an heirloom.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2.5 text-xs tracking-widest-plus uppercase text-deep/70 hover:text-gold-600 transition-colors group"
            >
              Learn Our Story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}