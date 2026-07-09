import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-cream-100">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1600&q=85"
            alt="Jewelry crafting"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-4">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-900 leading-tight mb-6">
            Jewelry Made to Be Worn,<br />Not Just Admired
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-cream-600 text-lg max-w-xl mx-auto leading-relaxed">
            Velmora was born from a simple belief — every woman deserves jewelry that feels as good as it looks.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-900 mb-6">Our Mission</h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="text-cream-600 leading-relaxed mb-4">
              We believe in jewelry that bridges the gap between costume and fine jewelry. Every piece is crafted in 18K gold-plated metals, designed for everyday wear without compromising on quality or elegance.
            </p>
            <p className="text-cream-600 leading-relaxed mb-4">
              Our collections are thoughtfully designed to celebrate life's everyday moments — from morning coffee runs to evening galas.
            </p>
            <p className="text-cream-600 leading-relaxed">
              We partner directly with skilled artisans, ensuring fair wages and ethical production practices. That's the Velmora promise.
            </p>
          </div>
          <div className="aspect-[3/4] overflow-hidden bg-cream-200">
            <img
              src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&q=85"
              alt="Artisan hands crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-100 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold text-center mb-2">What We Stand For</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-900 text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Quality First',
                desc: 'Every piece is 18K gold-plated over durable metals, rigorously tested for longevity and comfort.',
              },
              {
                title: 'Ethical Craftsmanship',
                desc: 'We partner with artisan workshops that uphold fair wages, safe conditions, and traditional techniques.',
              },
              {
                title: 'Thoughtful Design',
                desc: 'Each collection is curated for versatility — pieces that transition seamlessly from day to night.',
              },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-10 h-px bg-gold mx-auto mb-6" />
                <h3 className="font-serif text-xl text-cream-900 mb-3">{v.title}</h3>
                <p className="text-cream-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream-900 mb-4">Discover the Collection</h2>
        <p className="text-cream-500 mb-8 max-w-lg mx-auto">Find your next treasure — pieces designed to be worn, loved, and passed down.</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-gold text-cream-50 px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-gold/90 transition-colors"
        >
          Shop Now <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  )
}