import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-[#0F0E0C]">
        <div className="relative z-10 text-center px-6">
          <p className="text-[#C5A46E] text-xs tracking-[4px] mb-4">EST. 2019</p>
          <h1 className="serif text-white text-5xl md:text-6xl tracking-[2px]">Our Story</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-lg max-w-none text-[#6B665C]">
          <p className="text-xl leading-relaxed mb-8">
            Velmora was founded with a simple belief: that beautiful, well-made jewelry should be accessible 
            without compromise.
          </p>

          <div className="my-12 divider" />

          <h2 className="serif text-[#2C2A26] text-3xl tracking-wide mb-6 not-prose">The Beginning</h2>
          <p className="mb-6">
            After years working in fine jewelry, our founder grew frustrated by the gap between mass-produced 
            fashion jewelry and the unattainable prices of true fine jewelry. There had to be a middle ground.
          </p>
          <p className="mb-6">
            Velmora was born from countless hours of research, testing, and refinement—searching for the 
            perfect balance of quality materials, thoughtful design, and fair pricing.
          </p>

          <h2 className="serif text-[#2C2A26] text-3xl tracking-wide mt-12 mb-6 not-prose">Our Approach</h2>
          <p className="mb-6">
            Every piece begins with a sketch and a question: Will this be worn and loved for years? We source 
            only the finest 18K gold plating over hypoallergenic brass, and each stone is hand-selected for 
            its clarity and color.
          </p>
          <p className="mb-6">
            We work with small, family-owned workshops that share our commitment to quality and ethical 
            practices. Nothing is mass-produced. Every piece is inspected before it leaves our studio.
          </p>

          <h2 className="serif text-[#2C2A26] text-3xl tracking-wide mt-12 mb-6 not-prose">The Velmora Woman</h2>
          <p className="mb-6">
            She values quality over quantity. She appreciates the details. She knows that true luxury is 
            quiet—felt more than seen. She buys pieces she will wear, not just own.
          </p>
          <p>
            Whether she's treating herself or choosing a gift for someone she loves, she wants something 
            that feels special. That's what we make.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t text-center">
          <p className="text-sm tracking-[1.5px] mb-4">HAVE QUESTIONS?</p>
          <Link to="/journal" className="text-[#C5A46E] hover:underline tracking-[1px]">
            READ THE JOURNAL →
          </Link>
        </div>
      </div>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Quality First", desc: "We never cut corners. Every piece is made to last." },
            { title: "Thoughtful Design", desc: "Timeless silhouettes with a modern sensibility." },
            { title: "Fair Pricing", desc: "Premium materials at accessible prices. No markups." },
          ].map((v, i) => (
            <div key={i}>
              <h3 className="serif text-2xl tracking-wide mb-3">{v.title}</h3>
              <p className="text-[#6B665C] text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#0F0E0C] text-[#F8F6F1] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Velmora Fine Jewelry
        </div>
      </footer>
    </div>
  );
};

export default About;
