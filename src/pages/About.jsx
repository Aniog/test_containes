import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-velmora-bg">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
          <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Est. 2018</span>
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight mt-3 mb-6">The Velmora Way</h1>
          <p className="text-xl text-velmora-text-muted max-w-2xl mx-auto">
            Quiet luxury, thoughtfully made. Jewelry that becomes part of your story.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-5xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-5 gap-10 md:gap-16">
            <div className="md:col-span-3">
              <div className="prose prose-neutral max-w-none text-[15px] leading-relaxed text-velmora-text-muted space-y-6">
                <p>
                  Velmora began in a small studio in Lisbon, where our founder, after years of working 
                  in fine jewelry, grew frustrated by the gap between mass-produced fashion jewelry 
                  and inaccessible fine pieces.
                </p>
                <p>
                  We set out to create something different: demi-fine jewelry that feels special enough 
                  for milestones, yet wearable enough for Tuesday mornings. Pieces that don't require 
                  a special occasion or a special budget.
                </p>
                <p>
                  Every design starts with a question: Would we wear this every day? If the answer 
                  isn't an immediate yes, we start over. This philosophy guides everything we do — 
                  from the metals we choose to the way we package each order.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-velmora-bg-alt p-8 md:p-10 text-sm leading-relaxed">
                <h3 className="font-serif text-xl tracking-tight mb-4">Our Promise</h3>
                <ul className="space-y-3 text-velmora-text-muted">
                  <li>• 18K gold plating over hypoallergenic brass</li>
                  <li>• Nickel-free and lead-free</li>
                  <li>• Small-batch production</li>
                  <li>• Lifetime guarantee on manufacturing</li>
                  <li>• Carbon-negative shipping</li>
                  <li>• Recyclable packaging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white border-y border-velmora-border py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { title: "Intention", text: "We design slowly. Each piece is considered, refined, and tested before it reaches you." },
                { title: "Craft", text: "Hand-finished in small batches. No two pieces are exactly alike, and that's the point." },
                { title: "Longevity", text: "Jewelry meant to be worn, not stored. Pieces that age beautifully with you." },
              ].map((v, i) => (
                <div key={i}>
                  <h3 className="font-serif text-2xl tracking-tight mb-3">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-velmora-text-muted">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team / Closing */}
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="text-lg text-velmora-text-muted">
            Thank you for choosing to wear Velmora. We hope these pieces become part of your 
            everyday rituals and your most treasured memories.
          </p>
          <p className="mt-6 text-sm tracking-widest text-velmora-gold">— The Velmora Team</p>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;
