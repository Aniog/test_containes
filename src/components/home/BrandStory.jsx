import { Link } from 'react-router-dom'
import { useInView } from '@/hooks/useInView'

export default function BrandStory() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className={`py-16 md:py-24 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold mb-4">Our Philosophy</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide leading-tight">
              Where Craft<br />Meets Intention
            </h2>
            <div className="w-12 h-px bg-velmora-gold/40 my-6" />
            <p className="text-velmora-gray leading-relaxed mb-4">
              Every Velmora piece begins as a sketch — a quiet moment of inspiration captured in pencil. 
              We believe jewelry should feel like a second skin: light enough to forget you're wearing it, 
              beautiful enough to never want to take it off.
            </p>
            <p className="text-velmora-gray leading-relaxed mb-8">
              Our demi-fine collection is crafted with 18K gold plating over recycled brass, 
              designed to be worn daily without compromise. Hypoallergenic, nickel-free, and 
              made to move with you through every chapter of your story.
            </p>
            <Link
              to="/about"
              className="text-xs tracking-widest uppercase text-velmora-charcoal border-b border-velmora-charcoal/30 pb-0.5 hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
