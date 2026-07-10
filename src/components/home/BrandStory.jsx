import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Side */}
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden">
            <img
              src="https://via.placeholder.com/800x1000/FAF8F5/C9A96E?text=Velmora+Craftsmanship"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div>
              <h2 className="section-title mb-6">
                Crafted with
                <br />
                <em className="italic">Intention</em>
              </h2>
              <div className="hairline mb-8" />
            </div>

            <div className="space-y-6 font-sans text-gray-warm leading-relaxed">
              <p>
                At Velmora, we believe jewelry should be as unique as the stories it tells. 
                Each piece in our collection is thoughtfully designed and meticulously crafted 
                using 18k gold plating and hypoallergenic materials.
              </p>
              <p>
                Our demi-fine approach bridges the gap between precious and fashion jewelry, 
                offering accessible luxury that doesn't compromise on quality or ethics. 
                From our studio to your jewelry box, every detail matters.
              </p>
            </div>

            <Link
              to="/about"
              className="btn-secondary inline-block mt-8"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}