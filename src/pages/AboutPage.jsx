import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-ivory-100">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="font-sans text-xs tracking-mega-wide uppercase text-champagne-600 mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-900 mb-6">
              Elegance, Crafted<br />
              <span className="italic font-light">with Intention</span>
            </h1>
            <p className="font-sans text-lg text-charcoal-600 leading-relaxed">
              Founded in 2019, Velmora was born from a simple belief: 
              every woman deserves to wear jewelry that makes her feel extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mb-6">
                From Studio to You
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p className="font-sans text-base leading-relaxed">
                  Each Velmora piece begins as a sketch in our Los Angeles studio, 
                  where our design team draws inspiration from art, architecture, and 
                  the natural beauty that surrounds us.
                </p>
                <p className="font-sans text-base leading-relaxed">
                  We partner with skilled artisans who share our commitment to quality, 
                  using traditional techniques alongside modern innovation to create 
                  jewelry that bridges the gap between fashion and fine.
                </p>
                <p className="font-sans text-base leading-relaxed">
                  Our demi-fine approach means you don't have to choose between 
                  quality and accessibility. Every piece is crafted to be worn, 
                  cherished, and passed down.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop"
                alt="Jewelry craftsmanship"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-charcoal-900 text-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Without Compromise',
                description: 'We use only premium 18K gold plating and hypoallergenic materials. Each piece is built to last, not just to trend.'
              },
              {
                title: 'Ethical Sourcing',
                description: 'We work with suppliers who share our values, ensuring fair wages and safe working conditions throughout our supply chain.'
              },
              {
                title: 'Inclusive Beauty',
                description: 'Jewelry is for everyone. Our designs celebrate all women, in all their beautiful diversity.'
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-champagne-500/20 flex items-center justify-center">
                  <span className="font-serif text-champagne-400 text-2xl">{index + 1}</span>
                </div>
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="font-sans text-charcoal-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-champagne-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mb-4">
            Ready to Discover?
          </h2>
          <p className="font-sans text-charcoal-600 mb-8 max-w-xl mx-auto">
            Explore our collection and find the perfect piece to add to your jewelry box.
          </p>
          <Link to="/collection" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
