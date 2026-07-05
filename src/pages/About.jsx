import React from 'react';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-velmora-bg-light">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero */}
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Est. 2018</span>
          <h1 className="heading-serif text-5xl md:text-6xl mt-4 mb-6">The Velmora Story</h1>
          <p className="text-xl text-velmora-taupe max-w-2xl mx-auto">
            Quiet luxury, thoughtfully made. Jewelry designed to be worn, loved, and passed on.
          </p>
        </div>

        {/* Philosophy */}
        <div className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-6">
            <div className="prose prose-lg mx-auto text-velmora-brown">
              <p className="text-xl leading-relaxed">
                Velmora was founded on a simple conviction: that beautiful things should be part of everyday life, 
                not reserved for special occasions.
              </p>
              <p className="mt-6 text-velmora-taupe">
                We believe in the power of small rituals—the necklace you reach for each morning, 
                the earrings that complete your look without trying. Our pieces are designed to become 
                extensions of you, not statements that overwhelm.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Craft",
                desc: "Each piece is hand-finished in small batches. We work with artisans who have spent decades perfecting their technique."
              },
              {
                title: "Material",
                desc: "We use 18K gold plating over solid brass, paired with responsibly sourced crystals. Hypoallergenic and tarnish-resistant."
              },
              {
                title: "Intention",
                desc: "Nothing is made to trend. We design pieces that feel timeless the moment they are created."
              }
            ].map((value, i) => (
              <div key={i}>
                <h3 className="heading-serif text-2xl mb-4">{value.title}</h3>
                <p className="text-velmora-taupe leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image + Quote */}
        <div className="bg-velmora-bg py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80" 
              alt="Velmora craftsmanship"
              className="w-full max-w-2xl mx-auto mb-12"
            />
            <blockquote className="text-white text-2xl md:text-3xl heading-serif max-w-2xl mx-auto">
              "Jewelry should feel like a secret between you and the mirror."
            </blockquote>
            <p className="text-white/50 mt-4 tracking-widest text-sm">— FOUNDER, VELMORA</p>
          </div>
        </div>

        {/* Sustainability */}
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="heading-serif text-3xl mb-6">Our Commitment</h2>
          <div className="space-y-4 text-velmora-taupe leading-relaxed">
            <p>
              We source our materials from suppliers who share our values. Our packaging is made from 
              recycled and recyclable materials. We work with small workshops, not factories, ensuring 
              fair wages and safe working conditions.
            </p>
            <p>
              Every Velmora piece comes with a lifetime guarantee against manufacturing defects. 
              If something breaks, we'll repair or replace it.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;