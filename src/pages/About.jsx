import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(26,24,20,0.4), rgba(26,24,20,0.6)), url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80')`
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl font-medium text-white tracking-wide mb-6">
            Our Story
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto">
            Crafting quiet luxury for the modern woman since 2020.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-[#57534e]">
            <p className="text-center font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#1a1814] leading-relaxed mb-12">
              "We believe jewelry should feel like a second skin — effortless, personal, and timeless."
            </p>
            
            <div className="space-y-6 leading-relaxed">
              <p>
                Velmora was founded in 2020 with a singular vision: to create demi-fine jewelry that bridges the gap between everyday wear and special occasions. Our founder, inspired by years in the fashion industry, noticed a gap in the market for pieces that were both accessible and genuinely well-made.
              </p>
              <p>
                Each Velmora piece is designed in our California studio and crafted by skilled artisans using 18K gold-plated brass and carefully selected crystals. We obsess over the details — from the weight of a clasp to the way light plays across a surface — because we believe the difference is in the details.
              </p>
              <p>
                Today, Velmora is worn by thousands of women across 40+ countries. But our mission remains the same: to create jewelry that feels personal, looks expensive, and is priced fairly. Because luxury shouldn't be a privilege — it should be a choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[#f7f4ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-medium text-[#1a1814] tracking-wide text-center mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Quality First',
                description: 'We use 18K gold-plated materials and hypoallergenic components. Every piece is tested for durability and wear.'
              },
              {
                title: 'Sustainable Practices',
                description: 'From recycled packaging to responsible sourcing, we minimize our environmental footprint at every step.'
              },
              {
                title: 'Accessible Luxury',
                description: "Beautiful jewelry shouldn't break the bank. We offer fair prices without compromising on craftsmanship."
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="font-['Cormorant_Garamond'] text-xl font-medium text-[#1a1814] tracking-wide mb-4">
                  {value.title}
                </h3>
                <p className="text-[#57534e] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-medium text-[#1a1814] tracking-wide mb-6">
            Experience Velmora
          </h2>
          <p className="text-[#57534e] mb-8">
            Discover our collection of demi-fine jewelry designed to be treasured.
          </p>
          <Link to="/shop">
            <Button variant="accent" size="lg">
              Shop the Collection
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
