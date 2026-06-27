import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1600&h=800&fit=crop"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-xs uppercase tracking-[0.3em] mb-4 text-white/80">Est. 2024</p>
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Our Story</h1>
          <p className="text-white/70 max-w-md mx-auto">Where elegance meets everyday luxury</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="font-serif text-2xl md:text-3xl text-center leading-relaxed mb-12 text-charcoal/80">
            Velmora was born from a simple belief: luxury jewelry shouldn't be reserved for special occasions.
          </p>
          <div className="space-y-6 text-warm-gray leading-relaxed">
            <p>
              Founded in 2024, Velmora set out to bridge the gap between fast fashion jewelry and fine jewelry 
              that sits behind glass cases. We believe that the pieces you wear every day should be beautiful, 
              well-made, and accessible.
            </p>
            <p>
              Our demi-fine collection is crafted with 18K gold plating over recycled brass, ensuring each piece 
              is both luxurious and sustainable. Every design is hypoallergenic, nickel-free, and made to be worn 
              from morning coffee to evening cocktails.
            </p>
            <p>
              We work with skilled artisans who share our commitment to quality and ethical production. Each piece 
              passes through multiple quality checks before reaching your hands, because we believe you deserve 
              jewelry that feels as good as it looks.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-ivory-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: 'Quality First', desc: '18K gold plating, hypoallergenic materials, and rigorous quality checks on every piece.' },
              { title: 'Sustainable', desc: 'Recycled brass, eco-friendly packaging, and ethical production practices.' },
              { title: 'Accessible Luxury', desc: 'Premium design at fair prices. Because everyone deserves to feel beautiful.' },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-px bg-gold mx-auto mb-6" />
                <h3 className="font-serif text-xl mb-4">{value.title}</h3>
                <p className="text-warm-gray text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Experience Velmora</h2>
          <p className="text-warm-gray mb-8">Discover pieces crafted to be treasured, worn, and loved.</p>
          <Link to="/shop" className="btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>
    </main>
  )
}
