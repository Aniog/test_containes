import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-square overflow-hidden bg-velmora-cream">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><rect fill="%23F5F0EA" width="600" height="600"/><rect x="180" y="180" width="240" height="240" rx="120" fill="%23C9A96E" opacity="0.15"/><rect x="220" y="220" width="160" height="160" rx="80" fill="%23C9A96E" opacity="0.2"/><circle cx="300" cy="300" r="40" fill="%23fff" opacity="0.25"/></svg>')`,
              }}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col items-start">
            <p className="text-velmora-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-ink leading-tight mb-6">
              Jewelry made for real life — not just special occasions.
            </h2>
            <p className="text-velmora-stone text-sm md:text-base leading-relaxed mb-6">
              Velmora was born from a simple belief: fine-quality jewelry should not be out of reach. 
              We design each piece in our New York studio, using 18K gold plating and hypoallergenic 
              materials so you can wear them every day — from morning meetings to midnight toasts.
            </p>
            <p className="text-velmora-stone text-sm md:text-base leading-relaxed mb-8">
              Every collection is small-batch and sustainably minded. Because luxury should feel good 
              in every sense.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-medium text-velmora-ink hover:text-velmora-golddark transition-colors"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
