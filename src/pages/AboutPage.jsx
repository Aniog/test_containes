import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-velvet-900">
        <img
          src="https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?w=1600&q=80"
          alt="Velmora craftsmanship"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-16 px-6 md:px-10 max-w-[1440px] mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl text-white font-light">
            Our Story
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-xs uppercase tracking-[0.15em] font-medium mb-4">
            Since 2024
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light mb-8">
            Jewelry Should Feel<br />as Good as It Looks
          </h2>

          <div className="space-y-5 text-velvet-600 text-sm leading-relaxed">
            <p>
              Velmora was founded on a simple belief: that beautiful, well-made jewelry 
              should be accessible to everyone — not just a luxury for special occasions, 
              but an everyday indulgence.
            </p>
            <p>
              We design each piece in our atelier, working directly with master craftspeople 
              who share our obsession with quality. Our materials are carefully sourced: 
              18K gold plating over premium brass, genuine crystals, and hypoallergenic 
              metals that respect your skin.
            </p>
            <p>
              Every piece passes through multiple quality checks before it reaches your door. 
              We don&rsquo;t cut corners because we believe that how a piece makes you feel 
              matters — and that feeling starts with knowing it was made with care.
            </p>
          </div>

          <div className="w-full h-px bg-velvet-200 my-10" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10K+', label: 'Happy Customers' },
              { number: '50+', label: 'Unique Designs' },
              { number: '4.8', label: 'Average Rating' },
              { number: '30', label: 'Day Returns' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl text-gold">{stat.number}</p>
                <p className="text-velvet-500 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {[
              {
                title: 'Quality First',
                desc: 'Every piece is plated in 18K gold and rigorously tested for durability. We stand behind our craftsmanship with a one-year warranty.',
              },
              {
                title: 'Thoughtful Design',
                desc: 'From sketch to prototype, each design is refined until it strikes the perfect balance of beauty, comfort, and wearability.',
              },
              {
                title: 'Sustainable Practice',
                desc: 'We use recycled metals, ethical packaging, and produce in small batches to minimize waste. Beautiful jewelry shouldn\'t cost the earth.',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-serif text-xl text-velvet-900 mb-3">{value.title}</h3>
                <p className="text-velvet-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-xl mx-auto text-center px-6">
          <h2 className="font-serif text-3xl text-velvet-900 font-light mb-4">
            Find Your Piece
          </h2>
          <p className="text-velvet-600 text-sm mb-8">
            Explore our collection and discover jewelry that feels like it was made for you.
          </p>
          <Link
            to="/shop"
            className="inline-flex bg-gold text-white px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold-dark transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}