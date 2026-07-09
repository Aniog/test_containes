import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { brandStoryImage } from '@/data/images'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const values = [
    {
      title: 'Accessible Luxury',
      description: 'Premium quality jewelry at prices that don\'t require compromise. Because every woman deserves to feel special.',
    },
    {
      title: 'Thoughtful Design',
      description: 'Every piece is designed in our studio with intention — from the curve of an earring to the weight of a chain.',
    },
    {
      title: 'Lasting Quality',
      description: '18K gold plating over quality base metals, crafted to maintain its warmth and shine through everyday wear.',
    },
    {
      title: 'Kind to Skin',
      description: 'All Velmora pieces are nickel-free, lead-free, and hypoallergenic — designed to be worn comfortably by everyone.',
    },
  ]

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 min-h-screen bg-brand-ivory">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          data-strk-bg-id="about-hero-bg-g7h8i9"
          data-strk-bg="gold jewelry artisan workshop warm lighting editorial crafting hands"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          className="absolute inset-0 bg-brand-charcoal"
        />
        <div className="absolute inset-0 bg-brand-charcoal/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-gold mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-display text-brand-ivory tracking-[-0.02em] max-w-3xl">
            Jewelry That Tells Your Story
          </h1>
        </div>
      </section>

      {/* Story section */}
      <section className="section-padding py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="section-title text-2xl md:text-3xl mb-6">
              Born from a Simple Belief
            </h2>
            <div className="space-y-4">
              <p className="font-sans text-sm md:text-[0.9rem] text-brand-taupe leading-relaxed">
                Velmora was founded in 2023 with a clear mission: to create demi-fine jewelry that 
                feels luxurious without the luxury price tag. We saw a gap in the market — women 
                wanted quality gold jewelry they could wear every day, but the options were either 
                fast-fashion pieces that tarnished in weeks or fine jewelry that cost hundreds.
              </p>
              <p className="font-sans text-sm md:text-[0.9rem] text-brand-taupe leading-relaxed">
                Our solution was simple: use 18K gold plating over quality base metals, design with 
                intention, and price for accessibility. Every piece in our collection is hypoallergenic, 
                tarnish-resistant, and designed to be layered, stacked, and worn on repeat.
              </p>
              <p className="font-sans text-sm md:text-[0.9rem] text-brand-taupe leading-relaxed">
                Today, Velmora serves thousands of women across the world who believe that looking 
                and feeling special shouldn&apos;t require a special occasion.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id={brandStoryImage.strkImgId}
              data-strk-img={brandStoryImage.strkImgQuery}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={brandStoryImage.alt}
              className="absolute inset-0 w-full h-full object-cover bg-brand-warm"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding py-16 md:py-24 bg-brand-cream">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-gold mb-3">
            What We Stand For
          </p>
          <h2 className="section-title text-3xl md:text-heading">
            Our Values
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-brand-gold/10 rounded-full flex items-center justify-center">
                <span className="font-serif text-xl text-brand-gold">{index + 1}</span>
              </div>
              <h3 className="font-serif text-xl text-brand-charcoal mb-2">
                {value.title}
              </h3>
              <p className="font-sans text-sm text-brand-taupe leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 md:py-24 text-center">
        <h2 className="section-title text-2xl md:text-3xl mb-4">
          Ready to Find Your Piece?
        </h2>
        <p className="font-sans text-sm text-brand-taupe mb-8 max-w-md mx-auto">
          Explore our collection and discover jewelry that&apos;s crafted to be treasured.
        </p>
        <Link to="/shop" className="btn-primary text-xs">
          Shop the Collection
        </Link>
      </section>
    </main>
  )
}
