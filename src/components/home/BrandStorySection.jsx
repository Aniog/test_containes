import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="section-padding bg-stone-50" ref={containerRef}>
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-strk-bg-id="brand-story-img-1a2b3c"
              data-strk-bg="[brand-story-title] [brand-story-subtitle]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80)',
              }}
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-4">Our Philosophy</p>
            <h2
              id="brand-story-title"
              className="serif-heading text-4xl md:text-5xl text-stone-900 mb-6 leading-tight"
            >
              Jewelry That Tells<br />Your Story
            </h2>
            <p
              id="brand-story-subtitle"
              className="text-stone-600 leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. We craft each piece in 18K gold plating over responsibly sourced brass, creating pieces that feel as good as they look.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Every design is thoughtfully created to transition seamlessly from your morning coffee to evening cocktails — because the woman who wears Velmora doesn't wait for special occasions. She makes every day special.
            </p>
            <Link to="/about" className="btn-outline inline-flex items-center gap-2">
              Read Our Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
