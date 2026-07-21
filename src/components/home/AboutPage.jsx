import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-[var(--color-charcoal)]">
        <div className="container text-center">
          <p className="text-xs text-[var(--color-gold)] uppercase tracking-[0.2em] mb-4">
            Our Story
          </p>
          <h1
            className="text-4xl lg:text-5xl text-[var(--color-ivory)] mb-6 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Elegance Should Be <span className="italic">Everyday</span>
          </h1>
          <p className="text-lg text-[var(--color-warm-gray)] max-w-xl mx-auto">
            We believe beautiful jewelry shouldn't be saved for special occasions. 
            It should move with you, every day.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:pl-8">
              <h2
                className="text-3xl text-[var(--color-espresso)] mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Born from a <span className="italic">Simple Belief</span>
              </h2>
              <div className="space-y-4 text-[var(--color-mocha)] leading-relaxed">
                <p>
                  Velmora was founded in 2019 by Sarah Chen, a jewelry designer 
                  who noticed a gap in the market. Beautiful fine jewelry was 
                  either prohibitively expensive or poorly made. There was no 
                  middle ground.
                </p>
                <p>
                  She set out to create something different: demi-fine jewelry 
                  that combines the quality of fine jewelry with accessible 
                  pricing. Each piece is designed in our studio and crafted by 
                  skilled artisans using premium materials.
                </p>
                <p>
                  Every Velmora piece features 18K gold plating over 
                  hypoallergenic metals, ensuring comfort and durability. We 
                  believe luxury should feel good—not just look good.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-[var(--color-ivory)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-3xl text-[var(--color-espresso)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              What We Believe
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
              </div>
              <h3 className="text-lg text-[var(--color-espresso)] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Quality Without Compromise
              </h3>
              <p className="text-sm text-[var(--color-mocha)]">
                Every piece meets our high standards. Premium materials, 
                expert craftsmanship, lasting beauty.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-lg text-[var(--color-espresso)] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Designed for Real Life
              </h3>
              <p className="text-sm text-[var(--color-mocha)]">
                Jewelry that moves with you. From morning meetings to evening 
                dinners, Velmora is made for how you actually live.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <h3 className="text-lg text-[var(--color-espresso)] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Conscious Creation
              </h3>
              <p className="text-sm text-[var(--color-mocha)]">
                We care about our impact. Ethical sourcing, sustainable 
                packaging, and responsible practices guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-[var(--color-charcoal)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-[var(--color-gold)]" fill="var(--color-gold)" />
              ))}
            </div>
            <blockquote
              className="text-2xl lg:text-3xl text-[var(--color-ivory)] leading-relaxed mb-8 italic"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              "Velmora has completely changed how I think about jewelry. 
              I used to save my nice pieces for special occasions. Now I 
              wear my favorite Velmora earrings every single day."
            </blockquote>
            <p className="text-[var(--color-warm-gray)]">
              — Michelle R., Velmora Community Member
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h2
            className="text-3xl text-[var(--color-espresso)] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Ready to Find Your Treasures?
          </h2>
          <p className="text-[var(--color-mocha)] mb-8 max-w-md mx-auto">
            Explore our collection of demi-fine jewelry crafted for everyday elegance.
          </p>
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </section>
    </main>
  );
}
