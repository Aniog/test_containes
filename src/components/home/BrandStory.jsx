import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import useScrollReveal from '@/hooks/useScrollReveal'

export default function BrandStory() {
  const sectionRef = useScrollReveal([])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-midnight-950">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-2">
          {/* Image side */}
          <div className="aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden" data-reveal>
            <img
              src="https://images.unsplash.com/photo-1630019852942-f89202989a59?w=900&auto=format&q=85"
              alt="Velmora fine jewelry craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text side */}
          <div className="flex items-center px-6 md:px-16 py-12 md:py-0">
            <div className="max-w-md">
              <p className="text-ivory-400/60 text-xs uppercase tracking-widest font-sans" data-reveal>
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory-100 leading-tight mt-4 font-light" data-reveal>
                Jewelry that tells{' '}
                <span className="italic font-medium text-ivory-200">your story</span>
              </h2>
              <div className="w-12 h-px bg-brand-600 mt-6" />
              <p className="text-ivory-300/70 text-sm md:text-base font-sans mt-6 leading-relaxed" data-reveal>
                At Velmora, we believe fine jewelry should be accessible without compromise. 
                Every piece is crafted from premium 18K gold-plated materials, designed in-house 
                by our team of artisans who pour their passion into each detail.
              </p>
              <p className="text-ivory-300/70 text-sm md:text-base font-sans mt-4 leading-relaxed" data-reveal>
                From our atelier to your doorstep, we're redefining what it means to 
                own fine jewelry — no markups, no middlemen, just impeccable quality 
                at honest prices.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-widest text-brand-400 hover:text-brand-300 font-sans transition-colors group"
                data-reveal
              >
                Read Our Story
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}