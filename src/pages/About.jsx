import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=1200&q=80"
              alt="Velmora jewelry craftsmanship"
              className="h-[520px] w-full object-cover"
            />
          </div>
          <div className="space-y-5">
            <p className="eyebrow">Our Story</p>
            <h1 className="section-heading text-3xl md:text-4xl">Designed for real life</h1>
            <p className="text-ink-secondary leading-relaxed">
              Velmora was born from the idea that fine jewelry should feel effortless. We work with small ateliers to create pieces that balance craftsmanship with wearability. Every design is made in limited runs using recycled metals and responsibly sourced crystals.
            </p>
            <p className="text-ink-secondary leading-relaxed">
              From our studio to your jewelry box, we prioritize quality materials, considered details, and packaging that feels as considered as the piece inside.
            </p>
            <Link to="/shop" className="inline-flex items-center gap-2 btn-primary">
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
