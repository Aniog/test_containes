import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="aspect-[4/3] bg-[#EDE7DC] overflow-hidden">
          <img 
            src="https://picsum.photos/id/1015/1200/900" 
            alt="Velmora atelier"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-lg">
          <div className="font-serif text-4xl tracking-[1px] text-[#2C2522] mb-6 leading-tight">
            Jewelry that tells<br />your story.
          </div>
          <p className="text-[#5C5249] leading-relaxed mb-8">
            Founded in 2018, Velmora creates demi-fine jewelry that bridges the gap between everyday wear and heirloom pieces. Each design is thoughtfully crafted in small batches using premium materials that stand the test of time.
          </p>
          <Link 
            to="/about" 
            className="inline-block text-sm tracking-[2px] border-b border-[#8B7355] pb-0.5 text-[#8B7355] hover:text-[#2C2522] hover:border-[#2C2522]"
          >
            OUR STORY
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
