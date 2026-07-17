import React from 'react'

export default function AboutPage() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <div className="bg-brand-ivory py-16 md:py-24 px-4 text-center">
        <p className="section-subtitle mb-3">Our Story</p>
        <h1 className="font-serif text-display text-brand-charcoal mb-4">About Velmora</h1>
        <p className="font-sans text-brand-warm text-sm max-w-lg mx-auto leading-relaxed">
          Jewelry designed to be treasured — premium quality, accessible luxury, crafted with intention.
        </p>
      </div>

      {/* Story */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-section text-brand-charcoal mb-4">The Beginning</h2>
              <div className="divider mb-6" />
              <p className="font-sans text-sm text-brand-warm leading-relaxed mb-4">
                Velmora was founded with a clear mission: to create beautiful, high-quality jewelry
                that doesn't compromise on materials or craftsmanship, yet remains accessible to
                the modern woman.
              </p>
              <p className="font-sans text-sm text-brand-warm leading-relaxed">
                We noticed a gap in the market — costume jewelry that tarnished quickly, and fine
                jewelry that cost a small fortune. Velmora sits in that sweet spot: demi-fine
                pieces crafted with 18K gold plating over surgical-grade materials.
              </p>
            </div>
            <div className="bg-brand-espresso aspect-square" />
          </div>

          {/* Values */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                text: 'Every piece uses 18K gold plating over surgical-grade stainless steel or brass. No shortcuts.',
              },
              {
                title: 'Designed to Last',
                text: 'Hypoallergenic, water-resistant, and made to be worn every day without losing its shine.',
              },
              {
                title: 'Accessible Luxury',
                text: 'Premium materials and thoughtful design at prices that make self-purchase and gifting effortless.',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-serif text-xl text-brand-charcoal mb-3">{value.title}</h3>
                <p className="font-sans text-sm text-brand-warm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
