import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center bg-[#1A1816]">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=2000&q=80"
          alt="Our Atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-white/60 text-xs tracking-[0.2em] mb-4">EST. 2019</p>
          <h1 className="serif text-white text-6xl tracking-[0.08em]">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="prose prose-lg">
          <p className="text-xl text-[#6B655F] leading-relaxed mb-8">
            Velmora was founded with a simple belief: that beautiful jewelry should be accessible, 
            meaningful, and made to last.
          </p>
          
          <div className="my-12 divider" />

          <h2 className="serif text-3xl tracking-[0.05em] mb-6">The Beginning</h2>
          <p className="text-[#6B655F] leading-relaxed mb-6">
            What started as a small collection of handcrafted pieces in a Brooklyn studio has grown 
            into a beloved brand known for its quiet elegance and thoughtful design. Each piece in 
            our collection is created with intention, designed to be worn every day and treasured for years.
          </p>

          <h2 className="serif text-3xl tracking-[0.05em] mb-6 mt-12">Our Craft</h2>
          <p className="text-[#6B655F] leading-relaxed mb-6">
            We work exclusively with 18K gold plating over high-quality brass, ensuring each piece 
            maintains its luster while remaining hypoallergenic and tarnish-resistant. Our crystals 
            are hand-selected for their brilliance and color, and every detail—from the clasp to the 
            chain—is considered.
          </p>

          <h2 className="serif text-3xl tracking-[0.05em] mb-6 mt-12">Our Promise</h2>
          <p className="text-[#6B655F] leading-relaxed mb-6">
            We stand behind every piece we make. That's why we offer free worldwide shipping, 
            a 30-day return policy, and lifetime care guidance. When you choose Velmora, you're 
            choosing jewelry that will accompany you through life's most meaningful moments.
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop" className="btn btn-primary inline-block">
            Explore the Collection
          </Link>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16 border-t border-[#E5E0D8]">
        <div className="max-w-[1000px] mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { title: 'Thoughtful Design', desc: 'Every piece begins with a story and a sketch.' },
            { title: 'Quality Materials', desc: 'Premium metals and crystals, responsibly sourced.' },
            { title: 'Lasting Beauty', desc: 'Jewelry designed to be worn and loved for years.' },
          ].map((v, i) => (
            <div key={i}>
              <h4 className="serif text-xl tracking-[0.08em] mb-3">{v.title}</h4>
              <p className="text-sm text-[#6B655F]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
