import React from 'react'

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="bg-velmora-warm/20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle">Our Story</p>
          <h1 className="section-title mt-2">About Velmora</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg mx-auto">
          <p className="font-sans text-base md:text-lg text-velmora-muted leading-relaxed mb-6">
            Velmora was founded with a singular vision: to create jewelry that feels as luxurious as it looks, 
            without the luxury markup. We believe that beautiful, well-crafted pieces should be accessible to everyone.
          </p>
          <p className="font-sans text-base md:text-lg text-velmora-muted leading-relaxed mb-6">
            Our demi-fine collection bridges the gap between costume jewelry and fine jewelry. Each piece is 
            crafted from recycled brass and plated with 18K gold, creating pieces that are both beautiful and 
            conscious.
          </p>
          <p className="font-sans text-base md:text-lg text-velmora-muted leading-relaxed mb-6">
            We design for the modern woman — pieces that transition seamlessly from boardroom to brunch, 
            from date night to everyday. Jewelry that you can layer, stack, and wear with confidence.
          </p>

          <div className="my-12">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full aspect-[16/9] object-cover"
            />
          </div>

          <h2 className="font-serif text-2xl md:text-3xl text-velmora-base mt-8 mb-4">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
            <div>
              <h3 className="font-serif text-xl text-velmora-base mb-2">Sustainability</h3>
              <p className="font-sans text-sm text-velmora-muted leading-relaxed">
                Recycled materials, minimal packaging, and carbon-neutral shipping.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-velmora-base mb-2">Quality</h3>
              <p className="font-sans text-sm text-velmora-muted leading-relaxed">
                18K gold plating, hypoallergenic materials, and rigorous quality checks.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-velmora-base mb-2">Accessibility</h3>
              <p className="font-sans text-sm text-velmora-muted leading-relaxed">
                Premium design at accessible prices. Luxury shouldn't be exclusive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
