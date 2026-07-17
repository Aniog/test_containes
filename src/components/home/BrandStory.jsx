import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/5] bg-[#141414] rounded overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-md">
            <p className="text-gold text-xs uppercase tracking-[0.15em] mb-3">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#f5f0eb] leading-tight mb-6">
              Designed with Intention, Worn with Meaning
            </h2>
            <div className="space-y-4 text-sm text-[#a09890] leading-relaxed">
              <p>
                Velmora was born from a simple belief — that exceptional jewelry should not require exceptional expense. We craft each piece from premium 18K gold-plated metals, partnering with artisans who share our commitment to quality and ethical production.
              </p>
              <p>
                Every design is created to transition seamlessly from day to night, from desk to dinner. We invite you to find pieces that resonate with your story.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-[0.12em] text-gold hover:text-gold-light transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}