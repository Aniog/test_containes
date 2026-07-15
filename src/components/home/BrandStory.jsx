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
    <section ref={containerRef} className="section-padding py-16 lg:py-24">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[3/4] overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg-g7h8"
              data-strk-bg="[brand-story-title] [our-story-title]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              className="w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p id="our-story-title" className="text-xs tracking-[0.2em] uppercase text-primary mb-4">Our Story</p>
            <h2 id="brand-story-title" className="serif-heading text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
              Jewelry That Tells Your Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry shouldn't come with a luxury markup. 
                We craft demi-fine pieces using 18K gold plating over sterling silver — materials that feel 
                luxurious, last for years, and won't irritate sensitive skin.
              </p>
              <p>
                Every piece is designed in our studio with the modern woman in mind. From boardroom to 
                date night, our jewelry is made to be worn, loved, and treasured.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/" className="btn-outline">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
