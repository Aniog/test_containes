import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="velmora-section" style={{ backgroundColor: 'var(--velmora-bg-alt)' }}>
      <div className="velmora-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden" style={{ backgroundColor: 'var(--velmora-dark)' }}>
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-text]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--velmora-accent)' }}>
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="velmora-heading text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight"
              style={{ color: 'var(--velmora-text)' }}
            >
              Jewelry That Tells<br />Your Story
            </h2>
            <div className="velmora-divider-thin w-16 mb-6" />
            <p
              id="brand-story-text"
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--velmora-text-muted)' }}
            >
              Velmora was born from a simple belief: luxury shouldn't come with a luxury price tag. We craft demi-fine jewelry that feels as good as it looks — 18K gold plated, hypoallergenic, and designed to be worn every day.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--velmora-text-muted)' }}>
              Each piece is thoughtfully designed in our studio, blending timeless elegance with modern sensibility. Because the jewelry you wear should be an extension of who you are.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase font-medium transition-colors hover:opacity-60" style={{ color: 'var(--velmora-text)' }}>
              <span>Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
