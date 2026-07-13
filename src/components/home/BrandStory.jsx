import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="bg-velmora-dark overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image side */}
        <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-velmora-gold/5 via-velmora-dark to-velmora-dark">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-1/2 rounded-full bg-velmora-gold/10 blur-3xl" />
            </div>
          </div>
          {/* Subtle jewelry imprint */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-velmora-gold/20 flex items-center justify-center">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-velmora-gold/15 flex items-center justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-velmora-gold/10 flex items-center justify-center">
                  <span className="font-serif text-4xl md:text-5xl text-velmora-gold/30">V</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className="flex items-center px-6 md:px-16 lg:px-20 py-16 md:py-20">
          <div className="max-w-md">
            <p className="text-velmora-gold text-xs tracking-super uppercase mb-5">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
              Born from a belief that luxury should feel personal.
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Velmora was founded in 2023 by two sisters who grew tired of choosing between fast-fashion jewelry that tarnished in weeks and luxury pieces that cost a month's rent.
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Every piece is designed in our London studio, crafted with 18K gold-plated brass and ethically sourced crystals, then delivered to your door in packaging worthy of the moment it celebrates.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-velmora-gold hover:text-velmora-gold-light transition-colors duration-300"
            >
              Read Our Story <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
