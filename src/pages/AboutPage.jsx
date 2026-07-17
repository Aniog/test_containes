import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="font-serif text-5xl md:text-6xl text-center mb-8">Our Story</h1>
        <div className="w-16 h-px bg-amber-600 mx-auto mb-12" />

        <div className="prose prose-lg max-w-none">
          <p className="font-sans text-lg leading-relaxed text-gray-700 mb-6">
            At Velmora, we believe that jewelry should be as unique as the woman who wears it. 
            Founded with a passion for craftsmanship and an eye for timeless design, we create 
            demi-fine pieces that bridge the gap between everyday wear and special occasions.
          </p>

          <p className="font-sans text-lg leading-relaxed text-gray-700 mb-6">
            Each piece is crafted with 18K gold plating over high-quality brass, ensuring 
            durability without compromising on luxury. Our designs are inspired by the modern 
            romantic — women who appreciate the beauty in life's quiet moments.
          </p>

          <p className="font-sans text-lg leading-relaxed text-gray-700 mb-12">
            We're committed to creating jewelry that tells a story — your story. Whether 
            it's a gift to yourself or a treasured present for someone special, every Velmora 
            piece is designed to be worn, loved, and passed down.
          </p>

          <div className="bg-gray-50 p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Join Our Journey</h2>
            <p className="font-sans text-gray-600 mb-6">
              Follow us on social media and be part of the Velmora community.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-amber-600 hover:text-amber-700 font-sans text-sm uppercase tracking-wide">
                Instagram
              </a>
              <a href="#" className="text-amber-600 hover:text-amber-700 font-sans text-sm uppercase tracking-wide">
                Facebook
              </a>
              <a href="#" className="text-amber-600 hover:text-amber-700 font-sans text-sm uppercase tracking-wide">
                Pinterest
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
