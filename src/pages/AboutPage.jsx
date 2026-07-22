import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-charcoal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container-luxury text-center">
          <span className="text-xs font-sans font-medium tracking-widest uppercase text-gold-400">
            Our Story
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-50 mt-4 mb-6">
            Made with Intention
          </h1>
          <p className="font-sans text-lg text-cream-200 max-w-2xl mx-auto">
            Every piece we create carries a story — of craftsmanship, of beauty, and of women empowering women.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900">
                Where it all began
              </h2>
              <div className="space-y-4 text-charcoal-600 font-sans leading-relaxed">
                <p>
                  Velmora was born from a simple belief: that beautiful, quality jewelry shouldn't be out of reach. 
                  Founded in 2019, we set out to create demi-fine pieces that combine the elegance of fine jewelry 
                  with accessibility for the modern woman.
                </p>
                <p>
                  Our name, derived from the Latin word for "precious," reflects our commitment to creating 
                  jewelry that holds meaning and value — pieces designed to be worn, cherished, and passed on.
                </p>
                <p>
                  Each Velmora piece is crafted with 18K gold plating over hypoallergenic sterling silver, 
                  ensuring both beauty and comfort. We work with skilled artisans who share our passion for 
                  quality and detail.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border-2 border-gold-400/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <span className="text-xs font-sans font-medium tracking-widest uppercase text-gold-600">
              What We Believe
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mt-4">
              Our Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Quality', description: 'Every piece is crafted with care, using only the finest materials. We never compromise on quality.' },
              { title: 'Accessibility', description: 'Luxury should be attainable. We design beautiful jewelry at prices that make sense.' },
              { title: 'Sustainability', description: 'We\'re committed to ethical sourcing and reducing our environmental footprint.' },
            ].map((value, i) => (
              <div key={i} className="text-center p-8 bg-cream-50">
                <h3 className="font-serif text-xl text-charcoal-900 mb-3">{value.title}</h3>
                <p className="font-sans text-sm text-charcoal-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-charcoal-900 text-center">
        <div className="container-luxury">
          <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mb-6">
            Ready to discover your new favorite piece?
          </h2>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-10 py-4 bg-cream-50 text-charcoal-900 
                       font-sans text-sm font-medium tracking-widest uppercase hover:bg-gold-100 transition-all"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
