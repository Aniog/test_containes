import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-20 bg-[#F9F6F1]">
      {/* Hero */}
      <div className="bg-[#2C2823] py-20 md:py-24 text-center px-6">
        <span className="text-[#C5A46E] text-xs tracking-[3px]">EST. 2019</span>
        <h1 className="font-serif text-white text-5xl md:text-6xl tracking-[1.5px] mt-3">Our Story</h1>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-lg text-[#2C2823]">
          <p className="text-xl leading-relaxed text-[#6B6359]">
            Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
            not intimidating.
          </p>

          <div className="my-10 h-px bg-[#E5E0D8]" />

          <p>
            We design demi-fine pieces that feel special enough for life's most meaningful moments, 
            yet versatile enough for everyday wear. Each piece is crafted with 18K gold plating over 
            hypoallergenic brass, set with carefully selected crystals, and finished by hand.
          </p>

          <p>
            Our name comes from the Latin "vel" (veil) and "mora" (delay) — a reminder to slow down 
            and savor the quiet luxury of the everyday. We believe jewelry should be worn, not saved. 
            It should become part of your story.
          </p>

          <div className="my-10 h-px bg-[#E5E0D8]" />

          <h2 className="font-serif text-3xl tracking-[1px] mt-12 mb-4">The Velmora Difference</h2>
          
          <ul className="space-y-3 text-[#6B6359]">
            <li><strong className="text-[#2C2823]">18K Gold Plated</strong> — Thick, durable plating that resists tarnish</li>
            <li><strong className="text-[#2C2823]">Hypoallergenic</strong> — Brass base, nickel-free, safe for sensitive skin</li>
            <li><strong className="text-[#2C2823]">Hand-Finished</strong> — Each piece inspected and polished by hand</li>
            <li><strong className="text-[#2C2823]">Thoughtfully Packaged</strong> — Arrives in our signature keepsake box</li>
          </ul>

          <div className="my-10 h-px bg-[#E5E0D8]" />

          <p>
            From our studio to your jewelry box, every Velmora piece is made with intention. 
            We source responsibly, design thoughtfully, and stand behind every piece we make.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/shop" 
            className="inline-block text-sm tracking-[2px] border-b border-[#C5A46E] pb-0.5 text-[#C5A46E] hover:text-[#A68B5B]"
          >
            EXPLORE THE COLLECTION
          </Link>
        </div>
      </div>

      {/* Values */}
      <div className="border-t border-[#E5E0D8] bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Slow Craft", desc: "We take our time. Every piece is inspected, polished, and packaged with care." },
            { title: "Honest Materials", desc: "No shortcuts. We use quality metals and real crystals — never plastic or resin." },
            { title: "Wear Every Day", desc: "Jewelry meant to be lived in. Shower-safe, sleep-safe, life-safe." },
          ].map((v, i) => (
            <div key={i}>
              <h3 className="font-serif text-2xl tracking-[1px] mb-3">{v.title}</h3>
              <p className="text-[#6B6359] text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
