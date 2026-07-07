import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-velmora-bg text-velmora-text">
      <Navbar />

      <div className="pt-20">
        {/* Hero */}
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <div className="uppercase tracking-[0.15em] text-xs text-velmora-text-light mb-3">Est. 2018</div>
          <h1 className="font-serif text-5xl md:text-6xl tracking-[-0.02em] leading-none mb-6">
            Jewelry that feels<br />like an heirloom.
          </h1>
          <p className="text-lg text-velmora-text-muted max-w-md mx-auto">
            Quiet luxury, made to be worn every day.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-5xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-5 gap-x-12 gap-y-10">
            <div className="md:col-span-3">
              <div className="aspect-[16/10] bg-velmora-surface-alt mb-8 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1400&q=80" 
                  alt="Velmora founder in the atelier"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2 pt-2">
              <h2 className="font-serif text-3xl mb-6 tracking-[-0.01em]">The Beginning</h2>
              <div className="space-y-4 text-[15px] text-velmora-text-muted leading-relaxed">
                <p>
                  Velmora was founded by two sisters who grew tired of choosing between disposable fast fashion and unattainable fine jewelry.
                </p>
                <p>
                  We set out to create pieces that feel precious but live in the real world—worn to the office, to dinner, to the beach. Pieces you reach for every morning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-velmora-surface border-y border-velmora-border py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="uppercase tracking-[0.12em] text-xs text-velmora-text-light mb-8 text-center">What We Believe</div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Quality Over Quantity", text: "We make fewer things, but we make them well. Every piece is inspected by hand before it leaves our studio." },
                { title: "Wear It Daily", text: "Our plating is designed for real life. Shower with it. Sleep in it. It will still look beautiful years from now." },
                { title: "Accessible Luxury", text: "We believe everyone deserves to own something beautiful. Premium materials at a price that feels fair." }
              ].map((v, i) => (
                <div key={i} className="text-center px-4">
                  <div className="font-serif text-2xl mb-4 tracking-[-0.01em]">{v.title}</div>
                  <p className="text-sm text-velmora-text-muted leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Craft */}
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-[52ch] mx-auto text-center">
            <div className="font-serif text-3xl md:text-4xl tracking-[-0.01em] mb-6">Made With Intention</div>
            <div className="text-[15px] text-velmora-text-muted leading-relaxed space-y-4">
              <p>
                Each piece begins with a sketch and ends with a final polish. We work with family-run workshops that have been perfecting their craft for generations.
              </p>
              <p>
                Our brass is sourced responsibly. Our gold plating is thick and durable. Our crystals are hand-selected for color and clarity.
              </p>
            </div>
          </div>
        </div>

        {/* Team / Closing */}
        <div className="max-w-3xl mx-auto px-6 pb-20 text-center">
          <p className="text-sm text-velmora-text-light tracking-widest">— The Velmora Sisters</p>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;
