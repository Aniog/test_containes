import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} id="about" className="bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square lg:aspect-auto">
          <div
            data-strk-bg-id="brand-story-bg-m4n5o6"
            data-strk-bg="[brand-story-title] [brand-story-text]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1200"
            className="absolute inset-0"
          />
        </div>

        {/* Text */}
        <div className="flex items-center justify-center p-8 sm:p-12 lg:p-16 xl:p-20">
          <div className="max-w-md">
            <p className="text-accent text-xs tracking-widest uppercase mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl sm:text-4xl text-text-primary mb-6 leading-tight"
            >
              Jewelry That Tells Your Story
            </h2>
            <div className="w-12 h-px bg-accent mb-6" />
            <p
              id="brand-story-text"
              className="text-text-secondary text-sm leading-relaxed mb-8"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. 
              We craft demi-fine pieces in 18K gold plating — designed to be worn daily, treasured always, 
              and accessible to every woman who deserves to feel extraordinary.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-text-primary text-sm tracking-widest uppercase hover:text-accent transition-colors duration-300 group"
            >
              Discover More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
