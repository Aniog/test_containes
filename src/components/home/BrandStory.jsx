import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1549439602-43ebca2327af?w=1000&q=80" 
              alt="Our Story" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight">
            Jewelry that grows with you, <br />
            <span className="italic">moment by moment.</span>
          </h2>
          <p className="text-zinc-600 font-light leading-relaxed text-lg">
            At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. 
            Our collection is crafted with the highest quality 18K gold plating and responsibly sourced 
            materials, designed to be worn, loved, and passed down. 
            <br /><br />
            Every piece tells a story—your story. From the quiet mornings to the celebrated evenings, 
            we are here to add a touch of timeless brilliance to your everyday life.
          </p>
          <div className="pt-4">
            <Link to="#" className="btn-outline">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
