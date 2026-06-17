import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#1a252f] text-white text-xs tracking-[2px] mb-4">OUR STORY</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1a252f] mb-6">
            Three generations of metalworking excellence.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Founded in 1987 by master machinist Heinrich Artitect, our company has grown from a small workshop into a global leader in precision folding technology—while staying true to the values of craftsmanship and integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8">
            <div className="text-5xl font-semibold tracking-tighter text-[#1a252f] mb-2">37</div>
            <div className="text-sm font-medium tracking-[2px] text-gray-500 mb-3">YEARS IN BUSINESS</div>
            <p className="text-sm text-gray-600">A legacy built on trust, innovation, and an unwavering commitment to quality.</p>
          </div>
          <div className="text-center p-8">
            <div className="text-5xl font-semibold tracking-tighter text-[#1a252f] mb-2">18</div>
            <div className="text-sm font-medium tracking-[2px] text-gray-500 mb-3">COUNTRIES SERVED</div>
            <p className="text-sm text-gray-600">From family workshops to multinational manufacturers, our machines are trusted worldwide.</p>
          </div>
          <div className="text-center p-8">
            <div className="text-5xl font-semibold tracking-tighter text-[#1a252f] mb-2">2400+</div>
            <div className="text-sm font-medium tracking-[2px] text-gray-500 mb-3">MACHINES INSTALLED</div>
            <p className="text-sm text-gray-600">Each one backed by responsive service and a genuine partnership approach.</p>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200 max-w-3xl mx-auto text-center">
          <p className="text-gray-600 italic text-lg">
            "We measure success not by how many machines we sell, but by how many customers return to us when they need to grow."
          </p>
          <p className="mt-4 text-sm text-gray-500">— Thomas Artitect, CEO & Third-Generation Owner</p>
        </div>
      </div>
    </section>
  );
};

export default About;
