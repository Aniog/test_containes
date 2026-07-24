import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
              data-strk-img-id="brand-story-image"
              data-strk-img="[brand-story-text] Velmora jewelry craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
            />
          </div>
          
          {/* Text */}
          <div className="lg:pl-8">
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold-600 mb-4 block">
              Our Story
            </span>
            <h2 className="text-heading text-espresso-900 mb-6">
              Crafting Timeless Elegance
            </h2>
            <div className="space-y-4 mb-8">
              <p 
                id="brand-story-text"
                className="font-sans text-body text-espresso-600 leading-relaxed"
              >
                At Velmora, we believe that luxury should be accessible. Our pieces are crafted with the same attention to detail as fine jewelry, using premium materials that stand the test of time.
              </p>
              <p className="font-sans text-body text-espresso-600 leading-relaxed">
                Each design tells a story — of confidence, of beauty, of moments worth celebrating. We create jewelry that becomes part of your story, pieces you'll reach for every day and treasure for years to come.
              </p>
            </div>
            <Link 
              to="/"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors duration-200 group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
