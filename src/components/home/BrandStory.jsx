import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[bs-heading] fine gold jewelry craftmanship warm editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-14 md:py-0 md:pl-16 lg:pl-20">
            <p className="section-subheading">OUR STORY</p>
            <h2 id="bs-heading" className="section-heading mt-3 leading-snug">
              Jewelry That Tells
              <br />
              Your Story
            </h2>
            <p className="text-deep-600 mt-6 leading-relaxed max-w-md">
              Velmora was born from a simple belief: that fine jewelry shouldn’t require a fine-art budget. We work directly with artisans to craft demi-fine pieces using 18K gold plating, genuine crystals, and timeless design. Every piece is made to be worn, loved, and treasured — today and for years to come.
            </p>
            <div className="mt-8">
              <Link to="/about" className="btn-ghost group">
                <span>OUR STORY</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
