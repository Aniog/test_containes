import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1600&q=80"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-950/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-gold-300 text-xs tracking-widest uppercase mb-4 font-sans">Our Story</p>
          <h1 className="font-serif text-4xl md:text-6xl text-white tracking-wide">
            The Velmora Way
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="w-12 h-px bg-gold-400 mx-auto mb-8" />
        <p className="font-serif text-2xl md:text-3xl text-charcoal-900 leading-relaxed text-center mb-12">
          We believe jewelry should be an extension of who you are — not a luxury reserved for special occasions.
        </p>
        <div className="space-y-6 text-charcoal-600 leading-relaxed">
          <p>
            Velmora was founded with a clear mission: to create demi-fine jewelry that looks, feels, and lasts like luxury — without the luxury markup. Every piece starts as a sketch in our studio, moves through careful prototyping, and is crafted using 18K gold plating over solid brass.
          </p>
          <p>
            The result? Jewelry that catches light the way it should, feels substantial on the skin, and holds up to everyday wear. We test every design for weeks before it reaches you — because "good enough" was never our standard.
          </p>
          <p>
            Our price range of $30–$120 isn't an accident. It's the sweet spot where quality meets accessibility. We cut out the middlemen, the retail markups, and the unnecessary packaging to bring you pieces that feel like they should cost three times as much.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-velmora-100/50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Materials',
                desc: '18K gold plating over solid brass. Hypoallergenic. Nickel-free. Every piece is tested for durability and skin safety.',
              },
              {
                title: 'Fair Pricing',
                desc: 'Direct-to-consumer means no retail markup. You pay for the jewelry, not the storefront.',
              },
              {
                title: 'Thoughtful Design',
                desc: 'Each piece is designed to be worn daily — substantial enough to notice, refined enough for anywhere.',
              },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-px bg-gold-400 mx-auto mb-6" />
                <h3 className="font-serif text-xl text-charcoal-900 mb-3 tracking-wide">{value.title}</h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mb-6">Explore the Collection</h2>
        <Link
          to="/shop"
          className="inline-flex items-center gap-3 text-charcoal-900 text-sm tracking-widest uppercase font-sans font-medium group hover:text-gold-600 transition-colors"
        >
          Shop All Jewelry
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  )
}
