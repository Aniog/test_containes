import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-warm-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Hero */}
        <div className="text-center mb-16 md:mb-24">
          <h1
            id="about-title"
            className="font-serif text-4xl md:text-6xl text-deep-charcoal tracking-wide"
          >
            Our Story
          </h1>
          <p className="mt-4 font-sans text-sm md:text-base text-warm-gray-500 tracking-wide max-w-xl mx-auto">
            Fine jewelry, made accessible. Crafted with intention, designed for everyday.
          </p>
        </div>

        {/* Split section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
          <div className="aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="about-img-1-a1b2c3"
              data-strk-img="[about-title] artisan jewelry workshop craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our workshop"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal tracking-wide mb-6">
              Born from a Belief
            </h2>
            <div className="hairline w-12 mb-6" />
            <p className="font-sans text-sm md:text-base text-warm-gray-600 leading-relaxed mb-4">
              Velmora was founded on a simple conviction: that beautifully crafted jewelry shouldn't come with an exclusive price tag. We believe every woman deserves to wear pieces that feel luxurious, look refined, and stand the test of time.
            </p>
            <p className="font-sans text-sm md:text-base text-warm-gray-600 leading-relaxed">
              Our collections are designed in-house and brought to life by skilled artisan jewelers who share our commitment to quality. From the initial sketch to the final polish, every step is guided by care and intention.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
          {[
            {
              title: 'Quality First',
              text: 'Every piece is crafted with 18K gold plating over 925 sterling silver, ensuring lasting brilliance and comfort.',
              imgId: 'about-quality-d4e5f6',
            },
            {
              title: 'Skin-Friendly',
              text: 'All our jewelry is nickel-free and hypoallergenic, designed specifically for sensitive skin. No compromises.',
              imgId: 'about-skin-g7h8i9',
            },
            {
              title: 'Sustainably Made',
              text: 'We work with responsible suppliers and minimal-waste practices, because beautiful jewelry shouldn\'t cost the earth.',
              imgId: 'about-sustain-j0k1l2',
            },
          ].map(value => (
            <div key={value.title} className="text-center">
              <div className="aspect-square bg-antique-white overflow-hidden mb-6">
                <img
                  data-strk-img-id={value.imgId}
                  data-strk-img={`${value.title} jewelry [about-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={value.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-deep-charcoal tracking-wide mb-3">
                {value.title}
              </h3>
              <p className="font-sans text-sm text-warm-gray-600 leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal tracking-wide mb-6">
            Discover the Collection
          </h2>
          <Link to="/shop" className="btn-primary inline-block">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}
