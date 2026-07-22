import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen">
      {/* Hero */}
      <div className="bg-velmora-cream-dark py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="section-subtitle">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide text-velmora-black mt-3 mb-6">
            Jewelry That Tells a Story
          </h1>
          <p className="text-velmora-warm-gray leading-relaxed max-w-2xl mx-auto">
            Velmora was born from a simple belief: everyone deserves to feel beautiful every day.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="about-craft-img-g7h8i9"
              data-strk-img="[about-title] [about-subtitle]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 id="about-title" className="font-serif text-3xl text-velmora-black mb-4">The Craft</h2>
            <p id="about-subtitle" className="text-velmora-warm-gray leading-relaxed">
              Each Velmora piece is designed in our studio and crafted by skilled artisans using traditional techniques. We use 18K gold plating over recycled brass, ensuring both beauty and sustainability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                data-strk-img-id="about-values-img-j1k2l3"
                data-strk-img="[about-values-title] [about-values-subtitle]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora values"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:order-1">
            <h2 id="about-values-title" className="font-serif text-3xl text-velmora-black mb-4">Our Values</h2>
            <p id="about-values-subtitle" className="text-velmora-warm-gray leading-relaxed">
              We believe in conscious luxury. That means fair wages for our artisans, recycled materials wherever possible, and packaging that's beautiful enough to keep — and kind to the planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
