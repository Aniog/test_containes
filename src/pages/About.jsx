import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1920&h=800&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-velmora-charcoal/40" />
        </div>
        <div className="relative z-10 text-center text-velmora-cream px-4">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Our Story</h1>
          <p className="text-lg text-velmora-cream/80">Crafted to be treasured</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-velmora-warm-gray leading-relaxed text-lg mb-6">
              Founded in 2018, Velmora was born from a simple belief: every woman deserves 
              jewelry that makes her feel extraordinary without breaking the bank. We set out 
              to create pieces that bridge the gap between fine jewelry and fashion jewelry— 
              what we call "demi-fine."
            </p>
            <p className="text-velmora-warm-gray leading-relaxed text-lg mb-6">
              Each piece in our collection is thoughtfully designed in our studio, working 
              with skilled artisans who share our commitment to quality and ethical practices. 
              We use premium materials—18K gold plating, sterling silver, and carefully 
              selected gemstones—that stand the test of time.
            </p>
            <p className="text-velmora-warm-gray leading-relaxed text-lg mb-12">
              We believe jewelry is more than an accessory—it's a form of self-expression, 
              a memory keeper, and often, a gift that speaks from the heart. That's why every 
              Velmora piece is crafted to become a treasured part of your personal story.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-serif text-3xl text-velmora-gold mb-2">18K</h3>
                <p className="text-sm text-velmora-warm-gray">Gold Plated</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl text-velmora-gold mb-2">30-Day</h3>
                <p className="text-sm text-velmora-warm-gray">Returns</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl text-velmora-gold mb-2">Free</h3>
                <p className="text-sm text-velmora-warm-gray">Worldwide Shipping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-velmora-light-gray">
        <div className="container-custom text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal mb-4">
            Explore Our Collection
          </h2>
          <Link
            to="/shop"
            className="inline-block bg-velmora-charcoal text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-velmora-gold transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;