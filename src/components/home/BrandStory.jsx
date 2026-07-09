import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#FDFCFB] overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left: Image */}
        <div className="md:w-1/2 h-[500px] md:h-auto">
          <img
            data-strk-img-id="story-image-129"
            data-strk-img="jewelry designer working warm minimal editorial workspace"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 flex items-center justify-center p-12 md:p-24 lg:p-32">
          <div className="max-w-md">
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-[#9D8C70] mb-6 block">Our Legacy</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Beyond the Surface</h2>
            <p className="text-lg text-muted-foreground font-serif leading-relaxed mb-10 italic">
              "We believe jewelry should be more than just an accessory—it's a celebration of moments, identity, and elegance."
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              Founded on the principles of quality and accessibility, Velmora bridges the gap between fast fashion and fine jewelry. Each piece is meticulously crafted using 18K gold plating over premium brass, ensuring a lifetime of luster.
            </p>
            <Link to="/about" className="group flex items-center space-x-4 text-xs uppercase tracking-luxury text-[#1A1A1A]">
              <span>Learn our story</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
