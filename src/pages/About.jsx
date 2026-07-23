import React from 'react';

const About = () => {
  return (
    <div className="pt-20">
      <div className="max-w-[900px] mx-auto px-6 py-16 text-center">
        <div className="text-xs tracking-[0.15em] text-[#8B7E6F] mb-3">EST. 2019 · NEW YORK</div>
        <h1 className="font-serif text-6xl tracking-[-0.02em] mb-8">Our Story</h1>
        <div className="prose prose-lg text-[#8B7E6F] max-w-2xl mx-auto space-y-6 text-[15px] leading-relaxed">
          <p>Velmora was founded with a simple belief: that beautiful jewelry should be accessible without compromise. We create demi-fine pieces that feel as special as the moments they mark.</p>
          <p>Every piece begins in our New York studio, where our designers draw inspiration from vintage heirlooms, natural forms, and the quiet elegance of everyday life. We source only the finest materials—18K gold plating over sterling silver and brass—and work with skilled artisans who share our commitment to quality.</p>
          <p>Our jewelry is designed to be worn daily, to layer effortlessly, and to become part of your story. We believe in pieces that feel personal, not precious. Jewelry you reach for again and again.</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Thoughtful Design", desc: "Each piece is sketched, prototyped, and refined until it feels just right." },
            { title: "Premium Materials", desc: "18K gold plating, ethically sourced stones, and hypoallergenic findings." },
            { title: "Made to Last", desc: "Tarnish-resistant finishes and quality construction for everyday wear." },
          ].map((v, i) => (
            <div key={i} className="border border-[#E5E0D8] p-8 text-center">
              <div className="font-serif text-2xl mb-4 tracking-[-0.01em]">{v.title}</div>
              <p className="text-sm text-[#8B7E6F]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;