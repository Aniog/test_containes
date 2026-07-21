import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'

export function BrandStory() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-300 rounded-full hidden md:block" />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-gold-600 text-sm tracking-extra-wide uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900 mb-6 leading-tight">
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-warmgray-600 leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag.
              </p>
              <p>
                We partner with master artisans who share our commitment to quality, using time-honored techniques to create pieces that balance modern design with timeless elegance.
              </p>
              <p>
                Each Velmora piece is crafted with 18K gold plating over hypoallergenic materials, ensuring beauty you can wear with confidence, every day.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/about">
                <Button variant="secondary">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
