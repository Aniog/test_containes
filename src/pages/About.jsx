import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navbar />

      <div className="pt-20">
        {/* Hero */}
        <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-[#1A1816]">
          <img
            src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1600&q=80"
            alt="Velmora atelier"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="relative z-10 text-center px-6">
            <span className="text-[#B8976A] text-sm tracking-[0.2em] uppercase">Est. 2018</span>
            <h1 className="text-white mt-2">Our Story</h1>
          </div>
        </div>

        <div className="container section max-w-3xl">
          <div className="prose prose-lg mx-auto text-[#6B635C]">
            <p className="text-xl leading-relaxed mb-8">
              Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
              not exclusive. We create demi-fine pieces that feel as precious as fine jewelry, 
              without the precious price tag.
            </p>

            <h2 className="text-[#1C1917] mt-12 mb-4">The Beginning</h2>
            <p>
              Our founder, a former fine jewelry designer, grew frustrated by the gap between 
              mass-produced fashion jewelry and unattainable fine pieces. She wanted to create 
              something in between — pieces that felt special, looked luxurious, and could be 
              worn every day without worry.
            </p>

            <p>
              In 2018, Velmora launched with five signature styles. Each was designed to be 
              timeless, versatile, and made with care. Today, we continue to design every piece 
              in our studio, working with skilled artisans who share our commitment to quality.
            </p>

            <h2 className="text-[#1C1917] mt-12 mb-4">Our Approach</h2>
            <p>
              We use 18K gold plating over solid brass — a combination that offers the warmth 
              and luster of fine gold at a fraction of the cost. Our stones are hand-selected, 
              our finishes are applied by hand, and every piece is inspected before it leaves 
              our studio.
            </p>

            <p>
              We believe in thoughtful consumption. Our pieces are designed to last, not to 
              trend. We offer a 30-day return policy and stand behind every piece we make.
            </p>

            <h2 className="text-[#1C1917] mt-12 mb-4">The Details</h2>
            <ul className="space-y-2 mt-4">
              <li>• 18K gold plating over solid brass</li>
              <li>• Hypoallergenic and nickel-free</li>
              <li>• Hand-finished in small batches</li>
              <li>• Designed to be worn daily</li>
              <li>• Packaged in velvet-lined gift boxes</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-[#E5DFD6]">
              <p className="text-sm">
                Have questions? <a href="#contact" className="text-[#B8976A]">Reach out to us</a>. 
                We're here to help you find the piece that feels like you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;