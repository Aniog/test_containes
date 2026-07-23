import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&q=80"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory mb-4">
            Our Story
          </h1>
          <p className="text-ivory/80 max-w-md mx-auto">
            Crafted with intention, designed for the moments that matter.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">
              Where It All Began
            </h2>
            <p className="text-warm-gray leading-relaxed mb-6">
              Velmora was born in 2019 from a simple belief: every woman deserves to wear 
              jewelry that makes her feel extraordinary. Our founder, inspired by her 
              grandmother's heirloom pieces, set out to create jewelry that bridges the gap 
              between luxury and accessibility.
            </p>
            <p className="text-warm-gray leading-relaxed mb-6">
              Each piece in our collection is thoughtfully designed in our studio and 
              crafted with care using ethically sourced materials. We believe in jewelry 
              that becomes a cherished part of your story—pieces you'll reach for again 
              and again, and someday pass down.
            </p>
            <p className="text-warm-gray leading-relaxed">
              Our commitment to quality means every item is 18K gold plated, 
              hypoallergenic, and designed to stand the test of time. Because beautiful 
              things should last.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-sand/30">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
              What We Believe
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Quality Over Quantity', desc: 'Each piece is crafted to last, not to be disposable.' },
              { title: 'Ethical Sourcing', desc: 'We partner with suppliers who share our commitment to responsible practices.' },
              { title: 'Inclusive Luxury', desc: 'Premium jewelry should be accessible to everyone who desires it.' },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <h3 className="font-serif text-xl text-charcoal mb-2">{value.title}</h3>
                <p className="text-sm text-warm-gray">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">
            Ready to Discover?
          </h2>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-charcoal text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
