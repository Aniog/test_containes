import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <div className="pt-20 md:pt-24 pb-12 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide mb-6">Our Story</h1>
          <p className="text-gray-600 leading-relaxed">
            Velmora was founded with a singular vision: to create jewelry that feels as good as it looks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide">Quiet Luxury, Redefined</h2>
            <p className="text-gray-600 leading-relaxed">
              We believe jewelry should be an extension of yourself — not a statement. Our pieces are designed to be worn daily, to age beautifully, and to become part of your personal narrative.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every Velmora piece is crafted with 18K gold plating over hypoallergenic brass, ensuring both beauty and comfort for sensitive skin.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto bg-[#fafafa] rounded-full flex items-center justify-center">
              <span className="text-[#c9a96e] text-xl">✦</span>
            </div>
            <h3 className="font-serif text-lg">Ethically Sourced</h3>
            <p className="text-sm text-gray-600">Responsible materials and transparent supply chains.</p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto bg-[#fafafa] rounded-full flex items-center justify-center">
              <span className="text-[#c9a96e] text-xl">✦</span>
            </div>
            <h3 className="font-serif text-lg">Designed in London</h3>
            <p className="text-sm text-gray-600">Crafted with intention by our in-house design team.</p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto bg-[#fafafa] rounded-full flex items-center justify-center">
              <span className="text-[#c9a96e] text-xl">✦</span>
            </div>
            <h3 className="font-serif text-lg">Made to Last</h3>
            <p className="text-sm text-gray-600">Quality materials and construction for everyday wear.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <button className="inline-flex items-center gap-2 text-sm tracking-wider border-b border-[#1a1a1a] pb-1 hover:text-[#c9a96e] hover:border-[#c9a96e] transition-colors">
              SHOP THE COLLECTION
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
