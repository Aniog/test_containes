import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="about" className="py-16 md:py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <img
            alt="Velmora jewelry artisan at work"
            className="aspect-[4/5] w-full h-full object-cover rounded-sm overflow-hidden"
            data-strk-img-id="brand-story-main-image"
            data-strk-img="[brand-story-text] [brand-story-title] gold jewelry artisan workshop elegant"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />

          {/* Text content */}
          <div className="lg:pl-8">
            <span className="text-xs uppercase tracking-widest-xl text-gold font-medium mb-4 block">
              Our Story
            </span>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl font-light text-text-primary leading-tight mb-6"
            >
              Jewelry That Feels Like You
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base text-text-secondary leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel
              extraordinary — without the extraordinary price tag. We create demi-fine pieces using
              18K gold plating over surgical-grade steel, designed to be worn every day and treasured
              for years.
            </p>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-8">
              Each piece is thoughtfully designed with attention to detail, comfort, and longevity.
              We are committed to creating jewelry that is hypoallergenic, waterproof, and made to
              keep up with your life.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest-xl text-gold hover:text-gold-dark transition-colors font-medium"
            >
              Read Our Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
