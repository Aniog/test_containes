import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-[#1C1C1C]">
        <img 
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=80" 
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6">
          <span className="text-xs tracking-[3px] text-[#B89778]">EST. 2018</span>
          <h1 className="font-serif text-5xl md:text-6xl text-white tracking-[2px] mt-2">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-lg text-[#6B665F]">
          <p className="text-xl leading-relaxed text-[#1C1C1C]">
            Velmora was born from a quiet conviction: that fine jewelry should not be reserved for rare occasions, 
            but woven into the fabric of everyday life.
          </p>
          
          <div className="my-12 h-px bg-[#EDE8E0]" />

          <h2 className="font-serif text-3xl tracking-[1px] text-[#1C1C1C] mt-10 mb-6">The Beginning</h2>
          <p>
            Founder Lena Voss started Velmora after years of working in high jewelry houses, where she witnessed 
            the disconnect between craftsmanship and accessibility. She believed women deserved pieces that felt 
            precious without the prohibitive price tag — jewelry that could be worn daily, gifted meaningfully, 
            and passed down without hesitation.
          </p>

          <h2 className="font-serif text-3xl tracking-[1px] text-[#1C1C1C] mt-10 mb-6">Our Approach</h2>
          <p>
            Every Velmora piece is designed in our New York studio and hand-finished by artisans who have spent 
            decades perfecting their craft. We use 18K gold plating over solid brass — a combination that offers 
            the warmth and luster of solid gold with greater durability and hypoallergenic properties.
          </p>
          <p className="mt-4">
            We source our crystals and stones from ethical suppliers, and every component is selected for its 
            longevity. Our pieces are made to be worn, not stored.
          </p>

          <h2 className="font-serif text-3xl tracking-[1px] text-[#1C1C1C] mt-10 mb-6">The Velmora Woman</h2>
          <p>
            She values intention over impulse. She chooses quality over quantity. She knows that the most 
            meaningful pieces are the ones she reaches for every day — the huggies she never takes off, 
            the necklace that sits just so against her collarbone.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-[#EDE8E0] flex flex-col sm:flex-row gap-4">
          <Link to="/shop">
            <Button>SHOP THE COLLECTION</Button>
          </Link>
          <Link to="/journal">
            <Button variant="outline">READ THE JOURNAL</Button>
          </Link>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            { title: "Timeless Design", desc: "We create silhouettes that transcend trends. Each piece is designed to feel as relevant in ten years as it does today." },
            { title: "Ethical Craft", desc: "Our gold plating is nickel-free. Our stones are conflict-free. We work only with partners who share our commitment to responsible production." },
            { title: "Lasting Quality", desc: "Every piece is tested for durability. We stand behind our work with a lifetime guarantee against manufacturing defects." },
          ].map((v, i) => (
            <div key={i}>
              <h3 className="font-serif text-xl tracking-[1px] mb-3">{v.title}</h3>
              <p className="text-sm text-[#6B665F] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
