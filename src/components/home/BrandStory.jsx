import React from 'react';
import { Link } from 'react-router-dom';

export const BrandStory = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        <div className="w-full md:w-1/2 relative bg-stone-100 min-h-[400px]">
          <img 
            alt="Jewelry making process"
            data-strk-img-id="story-img-v1"
            data-strk-img="hands crafting gold jewelry in a warm sunlit workshop editorial style"
            data-strk-img-ratio="1x1"
            data-strk-img-width="1200"
            className="w-full h-full object-cover"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-[#FDFCFB]">
          <div className="max-w-md">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#B08D57] mb-6 font-bold">Our Philosophy</p>
            <h2 id="story-title" className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-[#1A1A1A]">
              Jewelry with a Soul
            </h2>
            <p className="text-stone-500 font-light leading-relaxed mb-10 text-sm md:text-base">
              At Velmora, we believe jewelry should be more than just an accessory. It's a reflection of your journey, a celebration of moments, and a vessel for memories. Our pieces are crafted with 18K gold and precious stones, designed to be worn across seasons and stories.
            </p>
            <Link 
              to="#"
              className="inline-block text-xs uppercase tracking-widest font-bold border-b border-[#1A1A1A] pb-1 hover:text-[#B08D57] hover:border-[#B08D57] transition-all"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
