import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=1920&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-stone-900/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">
            Our Story
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Crafting quiet luxury since 2020
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-stone mx-auto">
            <h2 className="font-serif text-3xl text-stone-900 mb-8 text-center">
              The Beginning
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Velmora was born from a simple belief: that fine jewelry should be accessible, 
                meaningful, and designed to be worn every day. Our founder, a former jewelry 
                designer at a major luxury house, wanted to create pieces that embodied the 
                same craftsmanship and attention to detail, but at a price point that felt 
                attainable.
              </p>
              <p>
                The name "Velmora" comes from the Latin words "velum" (veil) and "mora" (delay), 
                representing our philosophy of timeless design that transcends fleeting trends. 
                Each piece is designed to be a quiet companion in your daily life — something 
                you reach for without thinking, that makes you feel put-together without trying.
              </p>
              <p>
                We work with small, family-owned workshops in Italy and Thailand, where artisans 
                have honed their craft over generations. Every piece is inspected by hand before 
                it leaves our workshop, ensuring the quality that has become our signature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 text-center mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-amber-700">01</span>
              </div>
              <h3 className="font-serif text-xl text-stone-900 mb-4">Quiet Luxury</h3>
              <p className="text-stone-600 leading-relaxed">
                We believe in understated elegance. Our designs speak softly but leave a 
                lasting impression, designed to be worn and loved every day.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-amber-700">02</span>
              </div>
              <h3 className="font-serif text-xl text-stone-900 mb-4">Ethical Craft</h3>
              <p className="text-stone-600 leading-relaxed">
                We partner with artisans who share our commitment to quality and 
                sustainability. Every piece is made with respect for people and planet.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-amber-700">03</span>
              </div>
              <h3 className="font-serif text-xl text-stone-900 mb-4">Timeless Design</h3>
              <p className="text-stone-600 leading-relaxed">
                We create pieces that transcend seasons and trends. Velmora jewelry is 
                designed to be treasured for years, even generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
            Experience Velmora
          </h2>
          <p className="text-stone-600 mb-8 max-w-xl mx-auto">
            Discover our collection of demi-fine jewelry, each piece crafted to be 
            treasured. From everyday essentials to statement pieces, find your new 
            favorite.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-stone-800 transition-colors group"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
