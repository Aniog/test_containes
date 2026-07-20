import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="section-padding bg-brand-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative h-72 md:h-[480px] rounded-2xl overflow-hidden bg-brand-100">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80"
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-widest text-brand-600">Our Story</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink-950 leading-snug">
              Designed for real moments, made to last.
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              Velmora was born from a simple belief: fine jewelry should feel accessible, intentional, and effortlessly elegant. Every piece is crafted in warm gold tones, finished by hand, and designed to layer, gift, and live in your everyday rotation.
            </p>
            <Link to="/about" className="btn-outline inline-flex items-center gap-2">
              Read Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
