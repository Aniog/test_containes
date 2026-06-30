import React from 'react'

export default function AboutPage() {
  return (
    <main className="velmora-container mx-auto px-4 md:px-8 lg:px-12 py-24 md:py-32 max-w-3xl">
      <p className="velmora-body-xs text-[var(--velmora-text-light)] tracking-[0.2em] mb-3">
        About Us
      </p>
      <h1 className="velmora-heading velmora-heading-lg mb-8">Our Story</h1>
      <div className="velmora-divider w-16 mb-8" />

      <div className="velmora-body text-[var(--velmora-text-muted)] space-y-6">
        <p>
          Velmora was founded with a singular vision: to make fine jewelry accessible without compromising on quality or design. We believe that the pieces you wear every day should feel as special as the moments they accompany.
        </p>
        <p>
          Our demi-fine collection bridges the gap between costume jewelry and luxury fine jewelry. Each piece is crafted from sterling silver and plated with 18K gold — giving you the look and feel of solid gold at a fraction of the price.
        </p>
        <p>
          Every design begins in our studio, where our team sketches, prototypes, and refines each piece until it meets our exacting standards. We pay attention to the details that matter: the weight of an earring, the drape of a chain, the way light catches a crystal.
        </p>

        <div className="aspect-[16/9] bg-[var(--velmora-bg-alt)] my-10 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1200&h=675&fit=crop"
            alt="Velmora studio"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="velmora-heading velmora-heading-md mt-10">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div>
            <h3 className="velmora-product-name text-sm mb-2">Quality First</h3>
            <p className="velmora-body-sm">Every piece is tested for durability and finished to the highest standards.</p>
          </div>
          <div>
            <h3 className="velmora-product-name text-sm mb-2">Accessible Luxury</h3>
            <p className="velmora-body-sm">Premium materials and design at prices that make sense.</p>
          </div>
          <div>
            <h3 className="velmora-product-name text-sm mb-2">Conscious Craft</h3>
            <p className="velmora-body-sm">Sustainable practices and hypoallergenic materials for peace of mind.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
