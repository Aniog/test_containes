import React from 'react';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import Toast from '../components/ui/Toast';

const About = () => {
  return (
    <div className="min-h-screen bg-bg">
      <Navigation />

      <div className="pt-20">
        {/* Hero */}
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-20 text-center">
          <p className="text-xs tracking-[0.15em] text-text-muted mb-3">EST. 2019</p>
          <h1 className="serif text-5xl md:text-6xl tracking-tight mb-6">A quieter kind of luxury.</h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Velmora creates demi-fine jewelry for the woman who values intention over excess. 
            Pieces designed to be worn daily, treasured for years, and passed down with love.
          </p>
        </div>

        {/* Image + Story */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="md:col-span-3 aspect-[16/10] bg-surface-warm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1400&q=80" 
                alt="Velmora atelier workspace with gold jewelry tools"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="serif text-3xl tracking-tight mb-6">The Beginning</h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-text-muted">
                <p>
                  Velmora was founded in a small studio in upstate New York by designer Elena Voss. 
                  After years working in fine jewelry, she grew frustrated by the gap between 
                  precious pieces locked away and the everyday jewelry that tarnished after weeks.
                </p>
                <p>
                  She set out to create something in between: jewelry that felt special enough to 
                  mark a moment, but accessible enough to wear while making coffee, walking the dog, 
                  living a life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-surface py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs tracking-[0.15em] text-text-muted text-center mb-3">WHAT WE BELIEVE</p>
            <h2 className="serif text-4xl tracking-tight text-center mb-12">Our Values</h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Thoughtful Design",
                  text: "Every piece begins with a question: Will this still feel beautiful in ten years? We design for longevity, not trends."
                },
                {
                  title: "Honest Materials",
                  text: "We use 18K gold plating over hypoallergenic brass. Beautiful, responsible, and kind to sensitive skin. No compromises."
                },
                {
                  title: "Small Batches",
                  text: "Each collection is produced in limited quantities. This allows us to maintain quality, reduce waste, and create pieces that feel rare."
                }
              ].map((v, i) => (
                <div key={i}>
                  <h3 className="serif text-xl tracking-tight mb-3">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.15em] text-text-muted mb-2">FROM SKETCH TO SKIN</p>
            <h2 className="serif text-4xl tracking-tight">How We Make</h2>
          </div>

          <div className="space-y-8 text-[15px] leading-relaxed text-text-muted max-w-2xl mx-auto">
            <p>
              Each Velmora piece begins as a hand-drawn sketch. We work with master artisans who 
              cast, plate, and finish every component by hand. The process takes weeks, not days.
            </p>
            <p>
              Our gold plating is applied in multiple layers for depth and durability. Each crystal 
              is hand-selected. Every clasp is tested. Nothing leaves our studio until it meets 
              the standard we would want for our own jewelry boxes.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="border-t border-border py-16 text-center px-6">
          <p className="serif text-2xl tracking-tight max-w-md mx-auto">
            Jewelry for the life you actually live.
          </p>
          <p className="mt-4 text-sm text-text-muted">— The Velmora Team</p>
        </div>
      </div>

      <Footer />
      <CartDrawer />
      <Toast />
    </div>
  );
};

export default About;