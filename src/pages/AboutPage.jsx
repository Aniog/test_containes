import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="container-padding py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-4">Our Story</p>
          <h1 className="serif-heading text-4xl md:text-5xl mb-8 leading-tight">
            Where Tradition Meets Modern Elegance
          </h1>
          <div className="aspect-[16/9] overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200&h=675&fit=crop"
              alt="Velmora workshop"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left space-y-6 text-gray-600 leading-relaxed">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry shouldn't come with a luxury markup. 
              We work directly with master artisans to create demi-fine pieces that rival the quality of high-end 
              designers, at a fraction of the price.
            </p>
            <p>
              Every piece is crafted with 18K gold plating over recycled brass, using ethically sourced materials 
              and hypoallergenic findings. Because luxury should feel good in every sense.
            </p>
            <p>
              Our design philosophy centers on timeless silhouettes with subtle modern twists. We believe jewelry 
              should be an extension of who you are — not a trend to follow, but a personal expression to treasure.
            </p>
            <p>
              From our studio to your jewelry box, every Velmora piece is designed to be worn, loved, and passed down. 
              That's the promise we make with every creation.
            </p>
          </div>
          <div className="mt-12">
            <Link to="/shop" className="btn-primary inline-block">
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
