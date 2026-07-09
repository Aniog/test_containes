import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />

      <div className="pt-20">
        {/* Hero */}
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="text-xs tracking-[0.15em] text-[#B8976A]">OUR PHILOSOPHY</span>
          <h1 className="heading-xl mt-3 mb-6">Jewelry for the Everyday.</h1>
          <p className="text-lg text-[#6B645E] max-w-2xl mx-auto">
            We believe beautiful things should be worn, not stored. Velmora creates pieces that become part of your daily ritual — quiet companions for the life you’re already living.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Thoughtful Design',
                text: 'Every curve, every clasp, every crystal is considered. We design for longevity, not trends.',
              },
              {
                title: 'Honest Materials',
                text: '18K gold plating over solid brass. Carefully selected crystals. Nothing more, nothing less.',
              },
              {
                title: 'Accessible Luxury',
                text: 'Premium quality at a price that lets you collect, layer, and gift without hesitation.',
              },
            ].map((v, i) => (
              <div key={i}>
                <h3 className="heading-md mb-3">{v.title}</h3>
                <p className="text-[#6B645E]">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="prose prose-neutral max-w-none text-[#2C2824]">
            <p className="text-lg leading-relaxed">
              Velmora began in a small studio in 2018 with a single question: why should beautiful jewelry be reserved for special occasions?
            </p>
            <p className="mt-6 text-[#6B645E]">
              Our founder, a former fashion editor, grew tired of pieces that tarnished after a few wears or cost a month’s rent. She wanted jewelry that felt special but lived in the real world — worn to the office, to dinner, to the school run.
            </p>
            <p className="mt-6 text-[#6B645E]">
              Today, every Velmora piece is still designed with that same intention: to be treasured, not hidden. To be worn often, loved well, and passed down.
            </p>
          </div>
        </div>

        {/* Image strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E5DFD6]">
          {[
            'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
            'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
            'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80',
            'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80',
          ].map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;