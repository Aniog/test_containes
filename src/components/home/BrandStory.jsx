import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold rounded-lg -z-10 hidden md:block" />
          </div>

          {/* Content */}
          <div className="py-8 md:py-0">
            <span className="text-xs font-medium tracking-ultra-wide text-gold mb-4 block">
              OUR PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso-800 leading-tight mb-6">
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-espresso-800/70 leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves jewelry that feels special 
                without the extraordinary price tag. Our demi-fine pieces are crafted 
                with the same attention to detail as fine jewelry, using premium 
                materials that stand the test of time.
              </p>
              <p>
                Each design begins as a sketch, inspired by nature's elegance and the 
                women who wear our pieces. We use 18K gold plating over hypoallergenic 
                metals, ensuring comfort and durability for everyday wear.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/about">
                <Button variant="secondary">
                  Our Full Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
