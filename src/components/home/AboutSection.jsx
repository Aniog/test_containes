import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-[#16213e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[480px] bg-[#0f3460]">
            <img
              alt="About Velox"
              className="w-full h-full object-cover"
              data-strk-img-id="about-img-9b4e1f"
              data-strk-img="[about-subtitle] [about-title] bicycle workshop craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 to-transparent" />
          </div>

          {/* Text */}
          <div>
            <span className="text-[#e94560] text-sm font-semibold uppercase tracking-widest">
              Our Story
            </span>
            <h2 id="about-title" className="mt-3 text-3xl md:text-4xl font-bold text-white mb-6">
              Passion Forged in Every Frame
            </h2>
            <p id="about-subtitle" className="text-gray-300 text-lg leading-relaxed mb-6">
              Founded in 2009 by a group of competitive cyclists, Velox was born from a simple belief: every rider deserves a bike that feels like an extension of themselves.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We design and test every bike in-house, working closely with professional athletes and weekend warriors alike. From our workshop in Boulder, Colorado, we ship bikes to riders in over 40 countries.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div>
                <div className="text-3xl font-black text-[#e94560]">40+</div>
                <div className="text-gray-400 text-sm mt-1">Countries Served</div>
              </div>
              <div className="hidden sm:block w-px bg-white/10" />
              <div>
                <div className="text-3xl font-black text-[#e94560]">Boulder, CO</div>
                <div className="text-gray-400 text-sm mt-1">Headquarters</div>
              </div>
              <div className="hidden sm:block w-px bg-white/10" />
              <div>
                <div className="text-3xl font-black text-[#e94560]">2009</div>
                <div className="text-gray-400 text-sm mt-1">Founded</div>
              </div>
            </div>
            <a
              href="#bikes"
              className="inline-flex items-center gap-2 bg-[#e94560] hover:bg-[#c73652] text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Shop Our Bikes <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
