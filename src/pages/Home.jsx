import React from 'react';
import HomeHero from '../components/home/HomeHero';
import HomeGallery from '../components/home/HomeGallery';
import HomeFeatures from '../components/home/HomeFeatures';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      <HomeHero />
      <HomeGallery />
      <HomeFeatures />
      
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0a192f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#e6f1ff] mb-6">Stay Connected</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Subscribe to our newsletter to receive the latest microscopic captures and exhibition updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-grow px-6 py-4 bg-[#112240] border border-white/10 rounded-lg text-[#e6f1ff] focus:outline-none focus:border-[#64ffda] transition-colors"
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-[#64ffda] text-[#0a192f] rounded-lg font-bold hover:bg-[#64ffda]/80 transition-all"
            >
              Join the Cosmos
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
