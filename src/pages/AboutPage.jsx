import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-cream-100 pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-charcoal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-xs tracking-extra-wide uppercase text-gold-400 mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream-50 mb-6">
            Jewelry Should Be
            <span className="block italic font-light">Worn Every Day</span>
          </h1>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="font-sans text-base text-charcoal-600 leading-relaxed mb-6">
              Velmora was born from a simple belief: beautiful jewelry shouldn't be reserved 
              for special occasions. Founded in 2019, we set out to create pieces that move 
              with you—from morning coffee to evening cocktails.
            </p>
            <p className="font-sans text-base text-charcoal-600 leading-relaxed mb-6">
              Each piece is hand-finished by skilled artisans using 18K gold plating over 
              hypoallergenic sterling silver. We believe luxury should be livable, and 
              everyday jewelry should feel luxurious.
            </p>
            <p className="font-sans text-base text-charcoal-600 leading-relaxed mb-8">
              Our commitment to quality means every Velmora piece is designed to last, 
              with proper care, for years to come. Because the best jewelry isn't just 
              worn on special days—it's worn every day.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-cream-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="font-serif text-xl text-charcoal-900 mb-3">Quality First</h3>
              <p className="font-sans text-sm text-charcoal-600">
                Every piece undergoes rigorous quality checks before reaching you.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-charcoal-900 mb-3">Ethical Production</h3>
              <p className="font-sans text-sm text-charcoal-600">
                We partner with certified workshops that ensure fair wages and safe conditions.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-charcoal-900 mb-3">Thoughtful Design</h3>
              <p className="font-sans text-sm text-charcoal-600">
                Timeless aesthetics designed to complement your personal style for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-serif text-2xl text-charcoal-900 mb-4">
            Ready to discover your new favorites?
          </h2>
          <Link to="/shop" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
