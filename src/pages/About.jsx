import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function About() {
  return (
    <div className="min-h-screen bg-[#F5F2ED] pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-[#1A1A1A]">
        <img 
          src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=2000&q=85" 
          alt="Velmora studio"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6">
          <div className="text-[#C5A46E] text-xs tracking-[4px] mb-3">ESTABLISHED 2019</div>
          <h1 className="font-serif text-5xl md:text-6xl text-white tracking-[-0.5px]">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-lg max-w-none text-[#1A1A1A]">
          <p className="text-xl leading-relaxed mb-8">
            Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
            not saved for special occasions.
          </p>

          <div className="my-12 h-px bg-[#EDE8E0]" />

          <h2 className="font-serif text-3xl mb-6">The Beginning</h2>
          <p className="text-[#6B6359] leading-relaxed mb-6">
            Founder Elena Voss started Velmora after years of searching for jewelry that felt both 
            elevated and wearable. The market was split between expensive fine jewelry and disposable 
            fast fashion. There was nothing in between.
          </p>
          <p className="text-[#6B6359] leading-relaxed mb-6">
            Working with skilled artisans in small workshops, Elena developed a collection of demi-fine 
            pieces using 18K gold plating over responsibly sourced brass. Each design went through 
            dozens of iterations before it felt right.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-6">Our Philosophy</h2>
          <p className="text-[#6B6359] leading-relaxed mb-6">
            We design for the woman who appreciates quality but doesn't need to announce it. 
            Our pieces are meant to become part of your daily ritual — the earrings you reach for 
            without thinking, the necklace you never take off.
          </p>
          <p className="text-[#6B6359] leading-relaxed mb-6">
            Every piece is hypoallergenic, tarnish-resistant, and designed to last for years with 
            proper care. We stand behind our work with a 30-day return policy and lifetime repair 
            program for manufacturing defects.
          </p>

          <div className="my-12 h-px bg-[#EDE8E0]" />

          <h2 className="font-serif text-3xl mb-6">Craftsmanship</h2>
          <p className="text-[#6B6359] leading-relaxed mb-6">
            Each Velmora piece is hand-finished in small batches. We work with family-owned 
            workshops that share our commitment to quality and ethical practices. Our gold plating 
            process uses three times the industry standard thickness, ensuring your jewelry maintains 
            its warmth and luster over time.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link to="/shop">
            <Button>SHOP THE COLLECTION</Button>
          </Link>
          <Link to="/journal">
            <Button variant="outline">READ THE JOURNAL</Button>
          </Link>
        </div>
      </div>

      {/* Values */}
      <div className="border-t border-[#EDE8E0] bg-white/40 py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            { title: "Responsible Materials", desc: "We source brass from certified suppliers and use recycled packaging wherever possible." },
            { title: "Timeless Design", desc: "We create pieces that transcend trends. Our collections are designed to be worn for years, not seasons." },
            { title: "Fair Production", desc: "Our partner workshops provide fair wages and safe working conditions. We visit them regularly." },
          ].map((v, i) => (
            <div key={i}>
              <h3 className="font-serif text-xl mb-3">{v.title}</h3>
              <p className="text-sm text-[#6B6359]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
