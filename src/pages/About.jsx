import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-[#FAF7F2] pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] flex items-center justify-center bg-[#2A2522]">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1800&q=80"
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6">
          <div className="uppercase tracking-[0.3em] text-xs text-white/70 mb-3">EST. 2018</div>
          <h1 className="font-serif text-white text-5xl tracking-tight">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-neutral max-w-none text-[#2A2522]">
          <p className="text-xl leading-relaxed text-[#6B625B]">
            Velmora was founded with a simple conviction: that fine jewelry should feel personal, 
            not precious. We believe in pieces that become part of your daily ritual — worn, loved, 
            and passed on.
          </p>

          <div className="my-12 h-px bg-[#E5DDD3]" />

          <h2 className="font-serif text-2xl tracking-tight mt-10 mb-4">The Beginning</h2>
          <p>
            Our founder, a former jewelry buyer disillusioned by the industry's extremes — 
            mass-produced fast fashion on one end, unattainable luxury on the other — set out 
            to create something in between. Demi-fine jewelry that honors craftsmanship without 
            the markup.
          </p>

          <h2 className="font-serif text-2xl tracking-tight mt-10 mb-4">How We Work</h2>
          <p>
            Every Velmora piece begins in our small atelier, where skilled hands shape, plate, 
            and finish each design. We use 18K gold plating over solid brass — substantial enough 
            to feel special, light enough for everyday wear. Our crystals are sourced responsibly, 
            and every piece is tested for hypoallergenic safety.
          </p>

          <h2 className="font-serif text-2xl tracking-tight mt-10 mb-4">Our Promise</h2>
          <ul className="space-y-2 text-[#6B625B]">
            <li>• 18K gold plating that lasts</li>
            <li>• Nickel-free and hypoallergenic</li>
            <li>• Designed for daily wear</li>
            <li>• Packaged with care, ready to gift</li>
            <li>• 30-day returns, always</li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop" className="btn btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#F2EDE6] py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Thoughtful Design", desc: "Every curve, every detail considered. Nothing excessive." },
            { title: "Honest Materials", desc: "Quality you can feel. Finishes that endure." },
            { title: "Quiet Luxury", desc: "Understated elegance. Jewelry that speaks softly." },
          ].map((v, i) => (
            <div key={i}>
              <div className="font-serif text-xl mb-3">{v.title}</div>
              <p className="text-sm text-[#6B625B]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
