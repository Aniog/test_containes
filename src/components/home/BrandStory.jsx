import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const BrandStory = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image */}
        <div className="relative aspect-[4/3] bg-[#E8E4DC] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=1200&q=80" 
            alt="Velmora atelier - artisan hands working with gold jewelry"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <span className="text-xs tracking-[3px] text-[#C5A46E]">EST. 2018</span>
          <h2 className="font-serif text-3xl md:text-[34px] leading-tight tracking-[-0.5px] text-[#2C2823] mt-2 mb-5">
            Jewelry that feels like an heirloom, without the wait.
          </h2>
          <p className="text-[#6B665F] leading-relaxed mb-6">
            Velmora was born from a desire to create pieces that honor tradition while embracing the modern woman. 
            Each design is crafted in small batches using time-honored techniques and responsibly sourced materials.
          </p>
          <Link to="/about">
            <Button variant="outline">OUR STORY</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;