import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function About() {
  return (
    <main className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-warm-cream">
        <div className="container-main text-center">
          <p className="font-sans text-sm uppercase tracking-extra-wide text-gold mb-4">
            Our Story
          </p>
          <h1 className="section-title max-w-3xl mx-auto">
            Where Timeless Design Meets Modern Craftsmanship
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-spacing">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
                alt="Velmora jewelry studio"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="lg:py-12 space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
                Founded with a Purpose
              </h2>
              <p className="text-taupe font-light leading-relaxed">
                Velmora was founded in 2019 by jewelry lovers who believed that beautiful, 
                high-quality jewelry shouldn't require a luxury price tag. We set out to create 
                a brand that offers premium craftsmanship at accessible prices, making 
                timeless elegance available to every woman.
              </p>
              <p className="text-taupe font-light leading-relaxed">
                Every piece in our collection is thoughtfully designed to balance classic 
                sophistication with modern sensibility. We source only the finest materials—
                18K gold plating, hypoallergenic metals, and carefully selected crystals—
                ensuring each piece feels as precious as it looks.
              </p>
              <p className="text-taupe font-light leading-relaxed">
                But our commitment goes beyond aesthetics. We believe jewelry should be 
                worn with confidence, which is why every piece is designed to be comfortable, 
                durable, and easy to care for. Because the best jewelry isn't just worn—
                it's treasured, day after day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-warm-cream">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="font-sans text-sm uppercase tracking-extra-wide text-gold mb-3">
              Our Promise
            </p>
            <h2 className="section-title">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-soft">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3 text-charcoal">Quality First</h3>
              <p className="text-taupe font-light leading-relaxed">
                Every piece undergoes rigorous quality checks. We use premium 18K gold 
                plating and hypoallergenic materials built to last.
              </p>
            </div>

            <div className="bg-white p-8 shadow-soft">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3 text-charcoal">Thoughtful Design</h3>
              <p className="text-taupe font-light leading-relaxed">
                Our pieces are designed to be versatile—elegant enough for special 
                occasions, yet comfortable enough for everyday wear.
              </p>
            </div>

            <div className="bg-white p-8 shadow-soft">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3 text-charcoal">Sustainability</h3>
              <p className="text-taupe font-light leading-relaxed">
                We're committed to responsible sourcing and sustainable practices, 
                because beautiful jewelry shouldn't come at the planet's expense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-charcoal text-white text-center">
        <div className="container-main">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Ready to Find Your Treasure?
          </h2>
          <p className="text-white/80 font-light max-w-xl mx-auto mb-8">
            Explore our collection of demi-fine jewelry and discover pieces 
            designed to be loved for years to come.
          </p>
          <Link to="/shop">
            <Button variant="primary" size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
