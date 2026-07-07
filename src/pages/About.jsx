import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
            alt="Velmora Fine Jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso-900/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-4">Our Story</h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Crafting jewelry that becomes part of your personal story
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs text-gold uppercase tracking-ultra-wide mb-4 block text-center">
              Est. 2020
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-espresso-900 mb-8 text-center">
              Where it all began
            </h2>
            <div className="space-y-6 text-taupe leading-relaxed">
              <p>
                Velmora was born from a simple observation: the jewelry industry offered two extremes — fashion jewelry that tarnished after a few wears, or fine jewelry that required a trust fund to afford. We saw a gap, and we decided to fill it.
              </p>
              <p>
                Our founder, Maria Velmora, spent years working with master jewelers in Milan before returning to New York with a vision: to create demi-fine jewelry that married the quality of fine jewelry with the accessibility of fashion pieces.
              </p>
              <p>
                Every Velmora piece begins as a sketch, evolves through countless prototypes, and is finally brought to life by skilled artisans using ethically sourced materials. We plate over sterling silver, not brass, because quality matters. We design for real women living real lives, because jewelry should be worn, not just admired.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-espresso-900 mb-16 text-center">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Quality Without Compromise',
                description: 'We use 18K gold plating over sterling silver. Hypoallergenic. Built to last, not just to impress in the moment.',
              },
              {
                title: 'Designed for Life',
                description: 'Our pieces transition seamlessly from morning coffee to evening out. Real jewelry for real women.',
              },
              {
                title: 'Ethical Always',
                description: 'Every material is ethically sourced. Every artisan is fairly compensated. This isn\'t optional for us.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center">
                  <span className="font-serif text-2xl text-gold">{index + 1}</span>
                </div>
                <h3 className="font-serif text-xl text-espresso-900 mb-3">{value.title}</h3>
                <p className="text-taupe text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-espresso-900 mb-6">
            Ready to Find Your Piece?
          </h2>
          <p className="text-taupe mb-8 max-w-lg mx-auto">
            Discover jewelry designed to become a cherished part of your personal story.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-gold text-white text-sm uppercase tracking-wider hover:bg-gold-hover transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
