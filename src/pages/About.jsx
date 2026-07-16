import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero */}
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="text-xs tracking-[3px] text-[#B89778]">EST. 2019 • NEW YORK</span>
          <h1 className="font-serif text-5xl tracking-[1.5px] mt-4 mb-6">The Velmora Story</h1>
          <p className="text-xl text-[#6B6259] max-w-2xl mx-auto">
            We believe the most meaningful jewelry is the kind you never take off.
          </p>
        </div>

        {/* Story Content */}
        <div className="max-w-3xl mx-auto px-6 pb-20 space-y-8 text-[#6B6259] leading-relaxed text-[15px]">
          <p>
            Velmora began in a small studio in Brooklyn, where our founder, after years of working 
            in fine jewelry, grew frustrated by the gap between precious pieces locked away and 
            the everyday jewelry that tarnished after a few wears.
          </p>
          <p>
            We set out to create something different: demi-fine jewelry that feels as considered 
            and beautiful as solid gold, but accessible enough to become part of your daily life.
          </p>
          <p>
            Every piece is designed in-house and produced in small batches. We use 18K gold plating 
            over hypoallergenic brass, hand-select crystals for their color and clarity, and finish 
            each piece by hand.
          </p>
          <p>
            Our hope is simple: that when you wear Velmora, you feel quietly confident. 
            That these pieces become part of your story — the ones you reach for without thinking, 
            the ones you pass down.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            {[
              { title: "Thoughtful Design", desc: "Every curve, every clasp, every detail is considered for how it feels on the body." },
              { title: "Honest Materials", desc: "18K gold plating that won't flake. Hypoallergenic. Safe for sensitive skin and daily wear." },
              { title: "Small Batches", desc: "We produce in limited quantities to maintain quality and reduce waste." },
            ].map((v, i) => (
              <div key={i}>
                <h3 className="font-serif text-xl tracking-[1px] mb-3">{v.title}</h3>
                <p className="text-sm text-[#6B6259]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;
