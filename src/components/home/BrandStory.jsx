import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="aspect-[4/5] md:aspect-auto bg-velmora-muted">
          <img
            alt="Velmora brand story"
            data-strk-img-id="brand-story-velmora"
            data-strk-img="[brand-story-text] [brand-story-title]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-0">
          <div className="max-w-md">
            <span className="accent-badge mb-4">Our Story</span>
            <h2 id="brand-story-title" className="heading-md mb-6">
              Jewelry that lives with you —<br />not just in your jewelry box.
            </h2>
            <p id="brand-story-text" className="body-text mb-8">
              Velmora was born from a belief: that fine jewelry should be an everyday luxury, not a locked-away treasure. We work with master artisans to craft 18K gold-plated pieces that blend timeless elegance with modern wearability. Each piece is designed to be stacked, layered, and lived in — from morning coffee to evening celebrations.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
