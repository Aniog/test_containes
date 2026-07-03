// Velmora Fine Jewelry - Brand Story Section
import React from 'react';
import { Link } from 'react-router-dom';

const BrandStorySection = () => {
  return (
    <section className="section-padding bg-[#F5F2EE]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#B8860B]/30" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p
              className="text-xs uppercase tracking-[0.3em] text-[#B8860B] mb-4"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Our Story
            </p>
            
            <h2
              className="text-3xl md:text-4xl text-[#1A1A1A] font-normal leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Where Quiet Luxury <br />
              <em className="italic">Meets</em> Everyday Elegance
            </h2>
            
            <div className="space-y-4 text-[#6B6560] leading-relaxed" style={{ fontFamily: "'Manrope', sans-serif" }}>
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag.
              </p>
              <p>
                Our pieces are crafted with the same attention to detail as fine jewelry, using premium materials—18k gold plating, hypoallergenic metals, and ethically sourced stones—designed to be lived in, not just worn on special occasions.
              </p>
              <p>
                We believe jewelry should tell your story, complement your everyday, and become a cherished part of your personal collection for years to come.
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="inline-flex items-center gap-3 mt-8 text-sm font-medium uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-[#B8860B] transition-colors group"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              <span>Discover Our Story</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
