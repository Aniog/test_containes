import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* Image side */}
        <div className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden bg-stone-100 order-2 md:order-1">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-title] [story-text] craftsmanship jewelry gold hands"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            className="w-full h-full object-cover"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Craftsmanship at Velmora"
          />
          <div className="absolute top-8 left-8 p-4 bg-white/80 backdrop-blur-sm shadow-sm hidden md:block">
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-900 font-semibold">EST. 2024</p>
          </div>
        </div>

        {/* Text side */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-6 font-medium">OUR ETHOS</p>
          <h2 id="story-title" className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8 text-stone-900">
            Jewelry with a <br /> Quiet Soul
          </h2>
          <div id="story-text" className="space-y-6 text-stone-600 font-sans leading-relaxed text-lg">
            <p>
              Velmora was born from a desire for jewelry that feels personal yet timeless. We believe that fine jewelry shouldn't be reserved for grand occasions, but worn daily, close to the skin, becoming part of your story.
            </p>
            <p>
              Each piece in our collection is thoughtfully designed in our studio, focusing on clean lines, ethical sourcing, and the warm, enduring glow of 18K gold.
            </p>
          </div>
          
          <Link 
            to="/about" 
            className="inline-flex items-center gap-3 mt-10 group hover:text-accent transition-colors"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-semibold">Our Story</span>
            <div className="w-10 h-px bg-stone-300 group-hover:bg-accent group-hover:w-16 transition-all duration-500" />
            <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
