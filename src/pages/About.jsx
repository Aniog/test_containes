import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'

export function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-600 text-sm tracking-extra-wide uppercase mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-900 mb-6 leading-tight">
              Where timeless elegance meets modern design
            </h1>
            <p className="text-warmgray-600 text-lg leading-relaxed">
              Founded with a passion for making fine jewelry accessible, Velmora brings you pieces that celebrate life's precious moments.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-warmgray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 text-warmgray-600 leading-relaxed">
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900">
                The Velmora Journey
              </h2>
              <p>
                Velmora began in 2019 when our founder, a jewelry enthusiast tired of choosing between quality and affordability, set out to create something different. We believed that every woman deserves to feel extraordinary without the extraordinary price tag.
              </p>
              <p>
                Partnering with skilled artisans who share our commitment to excellence, we craft each piece using time-honored techniques combined with contemporary design sensibilities. Every Velmora piece tells a story—of craftsmanship, of beauty, of moments worth celebrating.
              </p>
              <p>
                Today, Velmora adorns women across the globe, from New York to Tokyo, bringing quiet luxury to everyday moments and special occasions alike.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
                alt="Velmora craftsmanship"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border-2 border-gold-300 rounded-full -z-10 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-600 text-sm tracking-extra-wide uppercase mb-2">
              Our Promise
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: 'Quality Without Compromise',
                description: 'Every piece is crafted with 18K gold plating over hypoallergenic materials, ensuring beauty that lasts.',
                icon: '✦',
              },
              {
                title: 'Thoughtful Design',
                description: 'Our designs balance timeless elegance with modern sensibility, creating pieces that transcend seasons.',
                icon: '◇',
              },
              {
                title: 'Accessible Luxury',
                description: 'We believe fine jewelry should be within reach. Premium quality, thoughtful pricing.',
                icon: '○',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 border border-gold-400 rounded-full flex items-center justify-center">
                  <span className="text-gold-500 text-2xl">{value.icon}</span>
                </div>
                <h3 className="font-serif text-xl text-charcoal-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-warmgray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-charcoal-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mb-6">
            Ready to discover your new favorite piece?
          </h2>
          <p className="text-warmgray-400 mb-8 max-w-xl mx-auto">
            Explore our collection of demi-fine gold jewelry, designed to be treasured for years to come.
          </p>
          <Link to="/shop">
            <Button variant="accent" size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
