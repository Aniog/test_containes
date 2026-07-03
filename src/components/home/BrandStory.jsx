import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <span className="text-xs tracking-extra-wide text-velmora-gold uppercase mb-4 block">
              Our Story
            </span>
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-velmora-warm-gray leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves to feel a little more extraordinary. 
                Our jewelry is designed with intention — each piece balancing timeless elegance with 
                modern sensibility.
              </p>
              <p>
                We source only the finest materials: 18K gold plating over hypoallergenic metals, 
                carefully selected crystals, and stones that catch light in the most beautiful way. 
                The result is demi-fine jewelry that feels luxurious without the luxury price tag.
              </p>
              <p>
                Whether you're celebrating a milestone, treating yourself, or finding the perfect gift, 
                Velmora pieces are meant to be worn, loved, and treasured for years to come.
              </p>
            </div>

            <Link
              to="#about"
              className="inline-flex items-center gap-2 mt-8 text-sm text-velmora-espresso link-underline hover:text-velmora-gold transition-colors"
            >
              Learn More About Us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
