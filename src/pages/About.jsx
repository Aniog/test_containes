import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-ivory-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs tracking-extra-wide uppercase text-gold-600 mb-4 block">
            Our Story
          </span>
          <h1 className="section-title mb-6">
            Jewelry That Tells Your Story
          </h1>
          <p className="text-charcoal-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Founded in 2019, Velmora was born from a simple belief: every woman deserves 
            to wear jewelry that makes her feel extraordinary — without the extraordinary price tag.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="section-title mb-6">The Velmora Vision</h2>
              <div className="space-y-4 text-charcoal-600 leading-relaxed">
                <p>
                  We believe in the transformative power of beautiful jewelry. A single piece 
                  can elevate an outfit, mark a milestone, or become a treasured heirloom 
                  passed down through generations.
                </p>
                <p>
                  Our design philosophy blends timeless elegance with modern sensibility. Each 
                  piece is crafted with the same care and attention to detail as fine jewelry 
                  houses, using premium materials like 18K gold plating and hypoallergenic metals.
                </p>
                <p>
                  Velmora pieces are designed to be worn every day — to the office, to dinner, 
                  to life. They're made to be treasured, not just admired.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-charcoal-50 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-warmblack text-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-ivory-100 text-center mb-16">Our Promise</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-gold-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-400 text-2xl">✦</span>
              </div>
              <h3 className="font-serif text-xl mb-3">Quality Materials</h3>
              <p className="text-ivory-300 text-sm leading-relaxed">
                Every piece features 18K gold plating, hypoallergenic metals, 
                and carefully selected gemstones.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-gold-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-400 text-2xl">♡</span>
              </div>
              <h3 className="font-serif text-xl mb-3">Thoughtful Design</h3>
              <p className="text-ivory-300 text-sm leading-relaxed">
                Timeless aesthetics meet modern sensibility. Pieces that 
                transcend trends and become wardrobe essentials.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-gold-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-400 text-2xl">✧</span>
              </div>
              <h3 className="font-serif text-xl mb-3">Accessible Luxury</h3>
              <p className="text-ivory-300 text-sm leading-relaxed">
                Premium quality at prices that make sense. Because everyone 
                deserves to feel extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="section-title mb-6">Ready to Discover?</h2>
          <p className="text-charcoal-500 mb-8">
            Explore our collection and find pieces that speak to you.
          </p>
          <Link to="/collection" className="btn-primary inline-flex items-center gap-2">
            Shop the Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
