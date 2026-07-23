import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-background"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-800/60 via-charcoal-800/40 to-charcoal-800/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wider animate-fade-in"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-cream-200 max-w-2xl mx-auto mb-10 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Premium demi-fine jewelry designed for the modern woman. 
          18K gold plated, hypoallergenic, and crafted to last.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link to="/shop">
            <Button size="lg" className="px-10 py-4 text-base">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}
