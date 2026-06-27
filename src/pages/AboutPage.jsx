import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <main className="pt-20 md:pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&q=80"
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-rich-black)]/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Story
          </h1>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
              Founded in 2019
            </p>
            <h2 
              className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] mb-8 leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Elegance Should Be<br />
              <span className="italic">Everyday</span>
            </h2>
            <div className="space-y-6 text-[var(--color-warm-gray)] leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful, well-crafted jewelry 
                should be accessible to every woman who wants to feel special without the 
                special-occasion price tag.
              </p>
              <p>
                We partner with skilled artisans who share our commitment to quality, using 
                premium materials—18K gold plating over sterling silver, hypoallergenic brass— 
                to create pieces that feel as good as they look.
              </p>
              <p>
                Every Velmora piece is designed to become part of your story, accompanying you 
                from morning coffee to evening out, from workdays to weekends, from ordinary 
                moments to extraordinary ones.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Grid */}
      <section className="py-16 md:py-24 bg-[var(--color-ivory)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 
              className="font-serif text-3xl text-[var(--color-charcoal)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              What We Stand For
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'Premium materials and expert craftsmanship in every piece.'
              },
              {
                title: 'Thoughtful Design',
                description: 'Timeless aesthetics that transcend trends and seasons.'
              },
              {
                title: 'Accessible Luxury',
                description: 'Fine jewelry at prices that make sense for everyday wear.'
              }
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-sand)] flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-gold)]" />
                </div>
                <h3 
                  className="font-serif text-xl text-[var(--color-charcoal)] mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--color-warm-gray)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-20 bg-[var(--color-charcoal)] text-center">
        <div className="container">
          <h2 
            className="font-serif text-3xl text-white mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Ready to Discover Velmora?
          </h2>
          <p className="text-[var(--color-taupe)] mb-8 max-w-md mx-auto">
            Explore our collection of demi-fine jewelry designed to be treasured.
          </p>
          <Link to="/shop">
            <Button variant="gold" size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
