import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function About() {
  return (
    <main className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-medium tracking-ultra-wide text-gold mb-4 block">
            OUR STORY
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-espresso-800 mb-6">
            Jewelry with Heart & Soul
          </h1>
          <p className="text-lg text-espresso-800/70 leading-relaxed">
            Founded in 2019, Velmora was born from a simple belief: every woman deserves 
            to feel extraordinary every day. We create demi-fine jewelry that bridges 
            the gap between fashion and fine jewelry.
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="aspect-[16/9] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200&q=80"
            alt="Velmora studio"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="font-serif text-xl text-espresso-800 mb-3">Quality First</h3>
              <p className="text-sm text-espresso-800/70">
                Every piece is crafted with 18K gold plating over hypoallergenic metals, 
                ensuring beauty that lasts.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl text-espresso-800 mb-3">Accessible Luxury</h3>
              <p className="text-sm text-espresso-800/70">
                We believe great design shouldn't require a fortune. Premium quality, 
                thoughtful prices.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl text-espresso-800 mb-3">Sustainable Choice</h3>
              <p className="text-sm text-espresso-800/70">
                We're committed to ethical production and sustainable packaging, 
                because beauty shouldn't cost the earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-espresso-800 mb-6">
            Ready to discover your new favorites?
          </h2>
          <Link to="/shop">
            <Button variant="gold" size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
