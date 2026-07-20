import React from "react";
import { Link } from "react-router-dom";

export const BrandStory = () => {
  return (
    <section className="py-24 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-secondary">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop"
              alt="Designer at work"
              className="w-full h-full object-cover"
              data-strk-img-id="brand-story-img-456"
              data-strk-img="jewelry designer studio craftmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
            />
          </div>
          <div className="space-y-8 max-w-lg">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Designed with Intention, <br /> Worn with Soul.
            </h2>
            <div className="h-[1px] bg-primary w-20" />
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              Velmora was born from a desire for jewelry that feels personal, not just ornamental. 
              We believe in demi-fine pieces that tell your story—sustainable, 
              hypoallergenic, and crafted in 18K gold to accompany you through every season.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              Every design is a conversation between tradition and modernity, 
              ensuring that what you wear today becomes an heirloom for tomorrow.
            </p>
            <div className="pt-4">
              <Link 
                to="/about" 
                className="outline-button"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
