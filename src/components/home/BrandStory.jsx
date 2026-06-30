import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be accessible, ethical, and designed to be worn every day.
              </p>
              <p>
                Each piece is crafted with 18K gold plating over hypoallergenic brass, designed in our London studio and worn by women who appreciate quiet luxury.
              </p>
              <p>
                We believe in fewer, better pieces — jewelry that becomes part of your story, not just an accessory.
              </p>
            </div>
            <Link to="/about">
              <button className="inline-flex items-center gap-2 text-sm tracking-wider border-b border-[#1a1a1a] pb-1 hover:text-[#c9a96e] hover:border-[#c9a96e] transition-colors">
                READ OUR STORY
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
