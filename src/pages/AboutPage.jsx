import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="bg-[#f5f0eb] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-4 font-sans">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 leading-tight">
            Where Craft<br />Meets Care
          </h1>
          <p className="text-base md:text-lg text-[#6b6560] leading-relaxed max-w-xl mx-auto">
            Velmora was born from a simple belief: that beautiful jewelry should be accessible, sustainable, and made with intention.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="aspect-[4/5] overflow-hidden bg-[#f5f0eb]">
              <img
                src="https://images.unsplash.com/photo-1611652022419-a9419f7534ad?w=800&h=1000&fit=crop"
                alt="Velmora workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                The Beginning
              </h2>
              <p className="text-sm text-[#6b6560] leading-relaxed mb-4">
                Founded in 2021, Velmora started as a small studio with a big vision. Our founder, inspired by the timeless elegance of heirloom jewelry, set out to create pieces that could be worn every day without compromise.
              </p>
              <p className="text-sm text-[#6b6560] leading-relaxed mb-4">
                Each design is sketched by hand, refined through countless prototypes, and crafted using 18K gold plating over recycled brass. The result is jewelry that looks and feels luxurious — without the luxury markup.
              </p>
              <p className="text-sm text-[#6b6560] leading-relaxed">
                Today, Velmora ships to over 40 countries, but our commitment remains the same: every piece is made to be treasured.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] text-center mb-12 md:mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: 'Sustainable Materials',
                desc: 'We use recycled brass and ethically sourced materials. Our packaging is 100% recyclable.',
              },
              {
                title: 'Accessible Luxury',
                desc: 'Premium quality at fair prices. We cut out the middleman so you get the best value.',
              },
              {
                title: 'Crafted with Care',
                desc: 'Every piece passes through multiple quality checks before it reaches your hands.',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-12 h-px bg-[#c9a96e] mx-auto mb-6" />
                <h3 className="product-name text-lg text-[#1a1a1a] mb-3">{value.title}</h3>
                <p className="text-sm text-[#6b6560] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#faf8f5] mb-6">
            Explore the Collection
          </h2>
          <Link to="/shop" className="btn-primary inline-block">
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  )
}
