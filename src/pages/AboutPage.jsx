import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&auto=format"
          alt="Craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl">Our Story</h1>
            <p className="text-white/70 text-sm md:text-base mt-4 max-w-lg mx-auto">
              Crafting jewelry that celebrates life's everyday moments
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-deep-charcoal leading-[1.1]">
                  Designed in New York, crafted with care
                </h2>
                <div className="w-12 h-0.5 bg-gold my-6" />
                <p className="text-taupe text-sm md:text-base leading-relaxed">
                  Velmora was born from a simple belief: fine jewelry shouldn't be reserved for 
                  special occasions. Every piece is designed to be worn, loved, and lived in.
                </p>
                <p className="text-taupe text-sm md:text-base leading-relaxed mt-4">
                  We work directly with master jewelers who share our commitment to quality 
                  and ethical practices. Each piece is 18K gold plated over sterling silver — 
                  hypoallergenic, durable, and designed to last.
                </p>
              </div>
              <div className="aspect-[4/5] bg-warm-beige/30 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format"
                  alt="Jewelry detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-8 md:gap-12 text-center">
              {[
                { title: 'Ethical Sourcing', desc: 'We partner with suppliers who share our values — fair labor, responsible mining, and full traceability.' },
                { title: 'Exceptional Quality', desc: 'Every piece is hand-finished and inspected. 18K gold plating over sterling silver for lasting shine.' },
                { title: 'Designed for Life', desc: 'Timeless silhouettes that transition seamlessly from desk to dinner — no occasion required.' },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-serif text-xl md:text-2xl text-deep-charcoal">{item.title}</h3>
                  <p className="text-taupe text-sm mt-3 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link to="/shop" className="btn-primary inline-block">
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
