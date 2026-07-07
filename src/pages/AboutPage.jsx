import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <main className="min-h-screen bg-cream-50">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&q=80"
            alt="Velmora Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-900/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-50 mb-4">
            Our Story
          </h1>
          <p className="text-cream-100/80 font-light max-w-lg mx-auto">
            Crafting jewelry that celebrates life's precious moments
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-sans text-xs tracking-extra-wide uppercase text-gold-500">
              Est. 2020
            </span>
            <h2 className="section-title mt-4">
              Born from a Love of Beauty
            </h2>
          </div>
          
          <div className="space-y-6 text-charcoal-600 font-light leading-relaxed text-lg">
            <p>
              Velmora began with a simple belief: every woman deserves jewelry that 
              makes her feel special, every day. Founded in the heart of New York 
              City, our brand draws inspiration from the quiet elegance of European 
              craftsmanship and the bold spirit of modern American women.
            </p>
            <p>
              We partner with skilled artisans who share our commitment to quality. 
              Each piece is meticulously crafted using time-honored techniques, 
              then finished with a modern sensibility that speaks to today. Our 
              demi-fine jewelry bridges the gap between fashion and fine jewelry, 
              offering luxury without the intimidation.
            </p>
            <p>
              The name Velmora was chosen to evoke both elegance (velvet) and 
              enduring beauty (memora—Latin for memory). Because the right piece 
              of jewelry doesn't just adorn—it becomes part of your story.
            </p>
          </div>

          <div className="hairline-divider my-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl text-gold-500 mb-2">100%</p>
              <p className="text-sm text-charcoal-500 uppercase tracking-wider">Hypoallergenic</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-gold-500 mb-2">18K</p>
              <p className="text-sm text-charcoal-500 uppercase tracking-wider">Gold Plated</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-gold-500 mb-2">30</p>
              <p className="text-sm text-charcoal-500 uppercase tracking-wider">Day Returns</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl text-charcoal-800 mb-4">
            Ready to Find Your Treasures?
          </h3>
          <Link to="/shop" className="btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>
    </main>
  );
}
