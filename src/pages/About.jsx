import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="text-sm tracking-[0.1em] text-[#7A7368] hover:text-[#2C2823]">← Back to Home</Link>
        
        <div className="mt-12">
          <span className="text-xs tracking-[0.2em] text-[#8B7355] uppercase">Our Story</span>
          <h1 className="heading-serif text-6xl mt-3 mb-10">Jewelry with intention.</h1>
          
          <div className="prose prose-lg max-w-none text-[#7A7368] space-y-6">
            <p>
              Velmora was founded in 2019 with a singular vision: to create demi-fine jewelry that feels as precious 
              as fine jewelry, but accessible enough to wear every day.
            </p>
            <p>
              Each piece is thoughtfully designed in our studio and crafted with 18K gold plating over solid brass, 
              finished with hypoallergenic materials that are kind to sensitive skin.
            </p>
            <p>
              We believe beautiful things should be worn, not saved. Our collections are designed to layer, stack, 
              and become part of your daily rituals—timeless enough to pass down, affordable enough to collect.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-[#E5DFD3] grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="font-medium text-[#2C2823] mb-2">Ethically Sourced</div>
              <p className="text-[#7A7368]">We partner with suppliers who share our commitment to responsible practices.</p>
            </div>
            <div>
              <div className="font-medium text-[#2C2823] mb-2">Hand Finished</div>
              <p className="text-[#7A7368]">Every piece is polished and inspected by hand before it reaches you.</p>
            </div>
            <div>
              <div className="font-medium text-[#2C2823] mb-2">Designed to Last</div>
              <p className="text-[#7A7368]">Quality materials and construction mean your jewelry will endure for years.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
