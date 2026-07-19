import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navbar />
      
      <main>
        {/* Hero */}
        <div className="pt-20 pb-16 bg-white border-b border-[#E8E4DE]">
          <div className="max-w-3xl mx-auto px-6 text-center pt-12">
            <p className="text-xs tracking-[0.15em] text-[#C5A46E] mb-3">EST. 2018</p>
            <h1 className="font-serif-custom text-5xl tracking-[0.02em] mb-6">Our Story</h1>
            <p className="text-lg text-[#6B665F] max-w-xl mx-auto">
              Quiet luxury for the modern woman. Jewelry that feels like an extension of you.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="prose prose-lg max-w-none text-[#1A1816]">
            <div className="grid md:grid-cols-5 gap-12 mb-16">
              <div className="md:col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80" 
                  alt="Velmora founder at work"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="md:col-span-3 flex flex-col justify-center">
                <h2 className="font-serif-custom text-3xl tracking-[0.02em] mb-6">The Beginning</h2>
                <p className="text-[#6B665F] leading-relaxed">
                  Velmora was founded by a designer who couldn't find jewelry that felt both special and wearable. 
                  After years of working with precious metals, she realized that the most treasured pieces weren't 
                  the ones locked away — they were the ones worn daily, collecting memories.
                </p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="font-serif-custom text-3xl tracking-[0.02em] mb-6">Our Philosophy</h2>
              <p className="text-[#6B665F] leading-relaxed">
                We believe fine jewelry shouldn't be reserved for special occasions. Every piece we create is 
                designed to be worn — in the shower, to the gym, to bed. 18K gold plating that lasts. 
                Stones set by hand. Details that matter.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-10 border border-[#E8E4DE]">
                <h3 className="font-serif-custom text-xl tracking-[0.04em] mb-4">Craftsmanship</h3>
                <p className="text-[#6B665F] text-sm leading-relaxed">
                  Each piece is cast, plated, and finished by skilled artisans. We use only the highest-grade 
                  materials — from the brass base to the cubic zirconia accents — ensuring every item feels 
                  substantial and looks refined.
                </p>
              </div>
              <div className="bg-white p-10 border border-[#E8E4DE]">
                <h3 className="font-serif-custom text-xl tracking-[0.04em] mb-4">Sustainability</h3>
                <p className="text-[#6B665F] text-sm leading-relaxed">
                  We source responsibly and produce in small batches to minimize waste. Our packaging is 
                  reusable and recyclable. We design pieces meant to last a lifetime — the most sustainable 
                  choice of all.
                </p>
              </div>
            </div>

            <div className="text-center border-t border-[#E8E4DE] pt-12">
              <p className="text-sm text-[#6B665F] tracking-[0.05em] mb-2">WITH GRATITUDE</p>
              <p className="font-serif-custom text-2xl tracking-[0.04em]">The Velmora Team</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;
