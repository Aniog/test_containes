import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/cart/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#2C2823]">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero */}
        <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-24 text-center">
          <span className="text-xs tracking-[3px] text-[#C5A46E]">OUR PHILOSOPHY</span>
          <h1 className="font-serif text-4xl md:text-[48px] tracking-[-1px] leading-tight mt-3 mb-6">
            Jewelry that honors the quiet moments.
          </h1>
          <p className="max-w-lg mx-auto text-[#6B665F] text-lg">
            Velmora exists for the woman who values intention over trend — who chooses pieces that feel like an extension of herself.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-[1280px] mx-auto px-6 pb-16 md:pb-24">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="md:col-span-3">
              <div className="aspect-[16/10] bg-[#E8E4DC] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=1400&q=80" 
                  alt="Velmora founder in atelier" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="font-serif text-2xl tracking-[-0.3px] mb-4">The Beginning</h2>
              <div className="space-y-4 text-[#6B665F] leading-relaxed text-[15px]">
                <p>Founded in 2018 by designer Elena Voss, Velmora began as a small collection of hand-finished pieces created in a sunlit studio in Lisbon.</p>
                <p>Elena grew up surrounded by her grandmother's jewelry box — delicate chains, worn signet rings, and gold pieces that carried stories across generations. She wanted to create modern heirlooms: pieces that felt personal, not precious in the intimidating sense.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white py-16 md:py-20">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs tracking-[3px] text-[#C5A46E]">WHAT WE BELIEVE</span>
              <h2 className="font-serif text-3xl tracking-[-0.5px] mt-2">Our Values</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { title: "Thoughtful Craft", desc: "Every piece is made in small batches by skilled artisans. We prioritize quality over quantity." },
                { title: "Honest Materials", desc: "We use 18K gold plating over solid brass, responsibly sourced crystals, and hypoallergenic components." },
                { title: "Timeless Design", desc: "Our designs are meant to be worn for years — not seasons. Quiet luxury that transcends trends." }
              ].map((v, i) => (
                <div key={i} className="px-4">
                  <h3 className="font-serif text-xl tracking-wide mb-3">{v.title}</h3>
                  <p className="text-[#6B665F] text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="max-w-[700px] mx-auto px-6 py-16 md:py-24 text-center">
          <p className="text-lg text-[#6B665F] leading-relaxed">
            We believe the best jewelry doesn't announce itself. It simply becomes part of you — a quiet reminder of who you are and what you value.
          </p>
          <p className="mt-6 text-sm tracking-[2px] text-[#C5A46E]">— Elena Voss, Founder</p>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;