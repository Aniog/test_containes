import React from 'react'

export default function AboutPage() {
  return (
    <main className="bg-velmora-cream">
      {/* Hero */}
      <div className="bg-velmora-base py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-velmora-gold text-sm tracking-widest mb-4">EST. 2024</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-velmora-cream mb-6">Our Story</h1>
          <div className="w-16 h-px bg-velmora-gold mx-auto" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="prose prose-lg mx-auto">
          <p className="font-serif text-2xl md:text-3xl text-velmora-base leading-relaxed mb-8">
            Velmora was born from a simple conviction: that beautiful jewelry should be an everyday luxury, not a rare indulgence.
          </p>
          <p className="text-velmora-muted leading-relaxed mb-6">
            Founded in 2024, we set out to create demi-fine jewelry that bridges the gap between costume pieces and fine jewelry. 
            Each Velmora piece is crafted with 18K gold plating over recycled brass, offering the warmth and luster of real gold 
            at an accessible price point.
          </p>
          <p className="text-velmora-muted leading-relaxed mb-6">
            Our design philosophy centers on quiet elegance. We believe jewelry should enhance, not overwhelm. Every curve, 
            every texture, every crystal placement is considered with intention. The result is a collection of pieces that 
            feel both timeless and contemporary — jewelry you reach for again and again.
          </p>

          <div className="my-12">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1200&h=600&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full aspect-[2/1] object-cover"
            />
          </div>

          <h2 className="font-serif text-2xl md:text-3xl text-velmora-base mt-12 mb-6">Our Materials</h2>
          <p className="text-velmora-muted leading-relaxed mb-6">
            We use recycled brass as our base metal, plated with a thick layer of 18K gold. This process gives our pieces 
            the rich color and weight of solid gold while keeping them affordable and sustainable. All our jewelry is 
            hypoallergenic and nickel-free, making it safe for sensitive skin.
          </p>
          <p className="text-velmora-muted leading-relaxed mb-6">
            Our crystals are ethically sourced, and our packaging is made from recycled materials. We believe that 
            beautiful jewelry shouldn't come at the earth's expense.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-velmora-base mt-12 mb-6">Our Promise</h2>
          <p className="text-velmora-muted leading-relaxed mb-6">
            Every Velmora piece comes with our quality guarantee. We stand behind our craftsmanship and offer 
            30-day returns on all unworn items. Because when you invest in jewelry, you should feel confident 
            in your choice.
          </p>
          <p className="font-serif text-xl text-velmora-base italic">
            "Jewelry is the most transformative accessory. It should be worn, loved, and treasured — not locked away."
          </p>
          <p className="text-sm text-velmora-muted mt-2">— The Velmora Team</p>
        </div>
      </div>
    </main>
  )
}
