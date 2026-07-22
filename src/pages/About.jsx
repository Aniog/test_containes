import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-[#EDE4D7]">
        <img 
          src="https://placehold.co/1920x800/F5EDE3/1C1917?text="
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6">
          <span className="text-white/80 text-xs tracking-[0.15em] uppercase">EST. 2018</span>
          <h1 className="text-white text-4xl md:text-5xl mt-2">Our Story</h1>
        </div>
      </section>

      <div className="container max-w-3xl py-16">
        <div className="prose prose-lg mx-auto">
          <p className="text-xl text-[#6B635C] leading-relaxed mb-8">
            Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
            not exclusive. We design demi-fine pieces that feel as special as fine jewelry, 
            without the precious price tag.
          </p>

          <div className="my-12 divider" />

          <h2 className="font-serif text-2xl mb-4">The Beginning</h2>
          <p className="text-[#6B635C] leading-relaxed mb-6">
            Founded in 2018 by designer Elena Voss, Velmora began in a small studio in Brooklyn. 
            Elena had spent years working in fine jewelry, watching as beautiful pieces remained 
            locked away in safes, worn only on special occasions. She wondered: what if jewelry 
            could be both precious and everyday?
          </p>
          <p className="text-[#6B635C] leading-relaxed mb-6">
            The answer was demi-fine: pieces crafted with the same attention to detail as fine 
            jewelry, using 18K gold plating over hypoallergenic brass. The result is jewelry 
            that looks and feels luxurious, but can be worn without worry.
          </p>

          <h2 className="font-serif text-2xl mt-12 mb-4">Our Philosophy</h2>
          <p className="text-[#6B635C] leading-relaxed mb-6">
            We believe in quiet luxury. Our pieces are designed to be noticed, not to shout. 
            Each one is hand-finished in small batches, ensuring quality you can feel. We use 
            only the finest materials: 18K gold plating, faceted crystals, and hypoallergenic 
            posts that are gentle on sensitive skin.
          </p>
          <p className="text-[#6B635C] leading-relaxed mb-6">
            Every piece tells a story. The Vivid Aura was inspired by morning light on dew. 
            The Majestic Flora Nectar captures a garden in bloom. The Golden Sphere Huggies 
            celebrate the beauty of simple forms.
          </p>

          <div className="my-12 p-8 bg-[#F0EBE3] text-center">
            <p className="font-serif text-lg italic text-[#6B635C]">
              "We don't make jewelry to be stored away. We make jewelry to be lived in."
            </p>
            <p className="text-sm text-[#6B635C] mt-4 tracking-wider">— ELENA VOSS, FOUNDER</p>
          </div>

          <h2 className="font-serif text-2xl mt-12 mb-4">Craftsmanship</h2>
          <p className="text-[#6B635C] leading-relaxed mb-6">
            Each Velmora piece passes through many hands before it reaches you. Our artisans 
            cast, polish, and plate every component with care. Crystals are hand-selected for 
            their clarity and color. Settings are inspected twice before assembly.
          </p>
          <p className="text-[#6B635C] leading-relaxed mb-6">
            We work with small family-owned workshops that share our commitment to quality. 
            This partnership model allows us to maintain the highest standards while supporting 
            traditional craftsmanship.
          </p>

          <div className="mt-12 text-center">
            <Link to="/shop" className="btn btn-primary inline-block">
              SHOP THE COLLECTION
            </Link>
          </div>
        </div>
      </div>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Ethically Sourced", desc: "We work only with suppliers who meet our strict standards for labor and materials." },
              { title: "Small Batch", desc: "Limited production runs ensure quality and reduce waste. Each piece is made with intention." },
              { title: "Designed to Last", desc: "Quality materials and thoughtful construction mean your jewelry will be treasured for years." }
            ].map((value, i) => (
              <div key={i} className="p-6">
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-sm text-[#6B635C]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
