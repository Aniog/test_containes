import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="bg-velmora-sand">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-auto bg-velmora overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <svg width="200" height="200" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#c2ab8d" strokeWidth="1" strokeDasharray="4 6" />
                  <circle cx="100" cy="100" r="50" fill="none" stroke="#deb874" strokeWidth="0.5" />
                  <text x="100" y="105" textAnchor="middle" fill="#c2ab8d" fontFamily="serif" fontSize="16" fontWeight="600" letterSpacing="4">VELMORA</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex items-center px-8 lg:px-20 py-16 lg:py-24">
            <div className="max-w-md">
              <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-velmora-muted font-medium mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-wide mb-6">
                Jewelry That Tells<br />Your Story
              </h2>
              <p className="text-velmora-muted text-sm leading-relaxed mb-4">
                Velmora was born from the belief that fine jewelry should be an everyday luxury — not locked away for special occasions. Each piece is designed in our London atelier, crafted from 18K gold-plated brass and ethically sourced crystals.
              </p>
              <p className="text-velmora-muted text-sm leading-relaxed mb-8">
                We work directly with artisan workshops, cutting out the traditional markup to bring you demi-fine pieces at an accessible price — without compromising on quality or craftsmanship.
              </p>
              <Link to="/" className="inline-block text-xs tracking-[0.12em] uppercase font-medium border-b border-velmora pb-1 hover:border-velmora-gold hover:text-velmora-muted transition-colors">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
