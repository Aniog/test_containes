import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-brand-surface">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-xl bg-brand-warm">
            <img
              data-strk-img-id="brand-story-velmora"
              data-strk-img="[brand-story-title] [brand-story-text]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 id="brand-story-title" className="section-title">Our Story</h2>
            <p id="brand-story-text" className="mt-6 text-brand-muted leading-relaxed">
              Velmora was born from a simple belief: fine jewelry should be accessible, meaningful, and made to last. We design each piece with intention, using premium materials and timeless silhouettes that transition seamlessly from day to night.
            </p>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Every Velmora creation is crafted in small batches, ensuring the quality and detail we stand behind. From our family-run workshop to your jewelry box, we pour care into every step.
            </p>
            <Link to="/about" className="btn-outline mt-8">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
