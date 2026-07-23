import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-[#F5F0EB]">
      <div className="container-premium">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl">
              Crafted with<br />Intention
            </h2>
            <div className="hairline w-16" />
            <p className="text-lg leading-relaxed text-[#6B6B6B]">
              At Velmora, we believe jewelry should be as unique as the woman wearing it.
              Each piece is thoughtfully designed and meticulously crafted using demi-fine
              materials that honor both quality and accessibility.
            </p>
            <p className="text-lg leading-relaxed text-[#6B6B6B]">
              Our 18K gold-plated pieces are hypoallergenic, tarnish-resistant, and made
              to be worn every day—from morning coffee to evening celebrations.
            </p>
            <Link
              to="/about"
              className="btn-secondary inline-block mt-4"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
