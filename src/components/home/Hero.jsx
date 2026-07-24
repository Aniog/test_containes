import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1600&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-stone-200 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Demi-fine jewelry designed for the modern woman. Quiet luxury, warm editorial, and pieces meant to last.
        </p>
        <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
          Shop the Collection
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
