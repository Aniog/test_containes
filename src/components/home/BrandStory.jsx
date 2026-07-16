import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-[#E5DFD6] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=80"
            alt="Velmora atelier - hands crafting delicate gold jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <span className="text-xs tracking-[3px] text-[#B89778]">EST. 2019</span>
          <h2 className="font-serif text-4xl tracking-[1px] mt-2 mb-6">Our Story</h2>
          
          <div className="space-y-4 text-[#6B6259] leading-relaxed text-[15px]">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
              not saved for special occasions.
            </p>
            <p>
              We design demi-fine pieces in 18K gold plating that feel as precious as solid gold, 
              but accessible enough to become part of your daily ritual.
            </p>
            <p>
              Each piece is crafted with intention in small batches, using hypoallergenic materials 
              that are kind to your skin and the planet.
            </p>
          </div>

          <Link to="/about" className="inline-block mt-8">
            <Button variant="outline">READ OUR STORY</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
