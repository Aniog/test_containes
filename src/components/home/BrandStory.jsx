import React from "react";
import { Link } from "react-router-dom";

const BrandStory = () => {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square overflow-hidden bg-slate-200 shadow-2xl">
              <img 
                data-strk-img-id="brand-story-img"
                data-strk-img="[story-title] [story-desc] woman designer luxury jewelry"
                data-strk-img-ratio="1x1"
                data-strk-img-width="1000"
                className="w-full h-full object-cover"
                alt="Our Story"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold block">Our Philosophy</span>
            <h2 id="story-title" className="text-4xl md:text-5xl font-serif leading-tight">
              Quiet Luxury for <br /> Every Moment
            </h2>
            <p id="story-desc" className="text-muted-foreground leading-relaxed text-lg">
              Velmora was born from the belief that fine jewelry shouldn’t be reserved for special occasions. We create demi-fine pieces that balance timeless elegance with modern accessibility, designed to be worn, loved, and passed down.
            </p>
            <div className="pt-4">
              <Link to="/about" className="text-xs uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-all font-bold">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
