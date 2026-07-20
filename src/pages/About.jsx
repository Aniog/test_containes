import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-velmora-bg pt-20">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.15em] text-velmora-gold">EST. 2018</span>
          <h1 className="serif text-5xl tracking-wide mt-3">Our Story</h1>
        </div>

        <div className="prose prose-lg max-w-none text-velmora-text-light leading-relaxed space-y-8">
          <p className="text-xl text-velmora-text">
            Velmora was founded with a simple conviction: that fine jewelry should be worn, not stored away.
          </p>

          <div className="my-12 aspect-[16/9] bg-velmora-surface overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80" 
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>

          <p>
            We believe in the quiet power of well-made things. Each piece in our collection is designed to be worn daily — to become part of your story, not just an accessory.
          </p>

          <p>
            Our demi-fine jewelry is crafted from the finest materials: 18K gold plating over sterling silver or brass, hand-set crystals, and hypoallergenic findings. Every detail is considered, from the weight of a huggie to the length of a chain.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
            <div className="bg-velmora-surface p-8">
              <h3 className="serif text-xl mb-3">Thoughtful Design</h3>
              <p className="text-sm">We design for real life. Pieces that feel as good as they look, that layer beautifully, and that stand the test of time.</p>
            </div>
            <div className="bg-velmora-surface p-8">
              <h3 className="serif text-xl mb-3">Responsible Craft</h3>
              <p className="text-sm">We work with small ateliers who share our values. Ethical sourcing, fair labor, and minimal waste guide every decision.</p>
            </div>
          </div>

          <p>
            Velmora is for the woman who knows her worth — who chooses quality over quantity, and who understands that true luxury is found in the details.
          </p>
        </div>

        <div className="mt-16 pt-12 border-t border-velmora-border text-center">
          <p className="text-sm tracking-wider text-velmora-text-light">Crafted with intention. Worn with love.</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
