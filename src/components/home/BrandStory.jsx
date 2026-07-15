import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-secondary/20">
      <div className="container-padding">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5]">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-bg-d4e5f6"
              data-strk-bg="[brand-story-title] [our-story-title]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-title] [our-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <h2 id="our-story-title" className="serif-heading text-3xl md:text-4xl font-light mb-6">
              Our Story
            </h2>
            <div className="w-12 h-px bg-primary mb-6" />
            <p id="brand-story-title" className="text-muted-foreground leading-relaxed mb-6">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. 
              We craft demi-fine pieces using 18K gold plating over sterling silver, creating jewelry that 
              feels luxurious, lasts beautifully, and remains accessible.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every piece is designed in our studio with attention to the details that matter — the weight 
              of an earring, the drape of a chain, the way light catches a curve. We believe jewelry is 
              personal, and every woman deserves to feel extraordinary.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
