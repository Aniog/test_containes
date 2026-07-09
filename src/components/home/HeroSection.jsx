import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=85"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg">
            <p className="text-gold-200 text-sm uppercase tracking-[0.2em] font-medium mb-4">
              Demi-Fine Gold Jewelry
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Crafted to be<br />Treasured
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-md">
              Handcrafted pieces that celebrate life&apos;s everyday moments. Discover jewelry made to last, designed to be loved.
            </p>
            <Button asChild size="lg" className="bg-gold hover:bg-gold-600 text-white border-0">
              <Link to="/shop">Shop the Collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}