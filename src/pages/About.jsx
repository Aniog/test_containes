import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-velmora-bg pt-20">
      <Navbar />
      <CartDrawer />

      <main>
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[320px] flex items-center justify-center bg-velmora-bg-alt">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1400&q=80"
            alt="Velmora atelier"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="relative z-10 text-center px-6">
            <div className="uppercase tracking-[0.3em] text-xs text-white mb-2">EST. 2018</div>
            <h1 className="text-white text-4xl md:text-5xl">Our Story</h1>
          </div>
        </div>

        <div className="container max-w-3xl py-16">
          <div className="prose prose-neutral max-w-none">
            <p className="text-xl text-velmora-text-muted mb-8">
              Velmora was founded with a quiet conviction: that the most meaningful jewelry 
              is the kind you never want to take off.
            </p>

            <div className="space-y-6 body-text text-velmora-text-muted">
              <p>
                We began in a small studio in Lisbon, where our founder, a former fine jewelry 
                designer, grew frustrated with the gap between precious pieces that sat in boxes 
                and fast fashion that tarnished after a season.
              </p>
              <p>
                The answer, we believed, was demi-fine: pieces made with the care and materials 
                of fine jewelry, but designed for real life. 18K gold plating over sterling silver. 
                Stones chosen for their warmth, not just their sparkle. Forms that feel as good 
                as they look.
              </p>
              <p>
                Today, every Velmora piece is still designed in that same spirit — meant to be 
                worn daily, gifted meaningfully, and kept for years. We work with a small team 
                of artisans who hand-finish each item. Nothing is mass-produced.
              </p>
            </div>

            <div className="my-12 h-px bg-velmora-border" />

            <div className="grid md:grid-cols-2 gap-8 text-sm">
              <div>
                <div className="font-medium mb-2 tracking-widest text-xs">OUR PROMISE</div>
                <ul className="space-y-1 text-velmora-text-muted">
                  <li>18K gold plating that lasts</li>
                  <li>Hypoallergenic materials</li>
                  <li>Water-resistant for daily wear</li>
                  <li>Ethically sourced crystals</li>
                  <li>Hand-finished in small batches</li>
                </ul>
              </div>
              <div>
                <div className="font-medium mb-2 tracking-widest text-xs">THE DETAILS</div>
                <ul className="space-y-1 text-velmora-text-muted">
                  <li>Free worldwide shipping</li>
                  <li>30-day returns on unworn items</li>
                  <li>1–2 day processing</li>
                  <li>5–10 day delivery</li>
                  <li>Lifetime care guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-velmora-bg-alt py-16">
          <div className="container">
            <div className="text-center mb-10">
              <div className="uppercase tracking-[0.2em] text-xs text-velmora-gold-dark mb-1">What We Believe</div>
              <h2 className="text-2xl">Quiet Luxury, Made Real</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: 'Wear It Daily', desc: 'Jewelry should move with you, not wait in a drawer.' },
                { title: 'Keep It Simple', desc: 'Fewer, better pieces. Timeless over trendy.' },
                { title: 'Pass It On', desc: 'Pieces made to last generations, not seasons.' },
              ].map((v, i) => (
                <div key={i} className="text-center p-6">
                  <div className="font-serif text-xl mb-3">{v.title}</div>
                  <p className="text-sm text-velmora-text-muted">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;