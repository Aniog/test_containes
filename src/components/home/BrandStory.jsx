import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="bg-base overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div 
          className="aspect-square md:aspect-auto md:h-full min-h-[500px]"
          data-strk-bg-id="story-bg"
          data-strk-bg="fine jewelry designer studio aesthetic gold pieces"
          data-strk-bg-ratio="1x1"
          data-strk-bg-width="1200"
        />
        
        <div className="p-12 md:p-24 lg:p-32 space-y-8">
          <h2 className="font-serif text-xs uppercase tracking-[0.4em] text-accent">The Velmora Ethos</h2>
          <h3 className="font-serif text-4xl lg:text-5xl leading-tight">Quiet Luxury, <br /> Accessible to All</h3>
          <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-md">
            We believe that fine jewelry shouldn't be reserved only for milestones. Velmora was founded to bring editorial-quality, demi-fine pieces to your everyday rotation.
          </p>
          <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-md">
            Using 18K gold plating on high-grade materials, we create pieces that capture light and attention, while remaining hypoallergenic and enduring.
          </p>
          <Link 
            to="/about" 
            className="inline-block border border-primary px-10 py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
