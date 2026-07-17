import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-ink-100 rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1000&auto=format&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="text-gold-500 text-xs tracking-widest uppercase font-sans mb-3">
              Our Story
            </p>
            <h2 className="section-title">
              Jewelry That<br />
              <span className="italic">Lasts</span>
            </h2>
            <div className="w-12 h-px bg-gold-400 my-6" />
            <p className="text-ink-400 text-sm md:text-base leading-relaxed font-sans">
              Velmora was born from a simple belief: that fine craftsmanship should be accessible. 
              Every piece is designed in-house and plated in 18K gold, using ethically sourced 
              materials and hypoallergenic metals. We skip the markup of traditional luxury 
              to bring you demi-fine jewelry that feels as good as it looks.
            </p>
            <p className="text-ink-400 text-sm md:text-base leading-relaxed font-sans mt-4">
              From our atelier to your doorstep, each piece is quality-checked, 
              beautifully packaged, and ready to become a part of your story.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 text-xs tracking-widest uppercase text-ink-900 hover:text-gold-600 transition-colors font-sans font-medium"
            >
              Read Our Story
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}