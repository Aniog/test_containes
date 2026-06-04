import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Design = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="design" ref={containerRef} className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Design</span>
          <h2 id="design-title" className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 tracking-tight">
            Small by design. Big by nature.
          </h2>
          <p id="design-desc" className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            At just 12.7cm square and 5cm tall, the APPLE mini is the world's most compact desktop computer.
            Crafted from 100% recycled aluminum with a whisper-quiet thermal system.
          </p>
        </div>

        {/* Large hero image */}
        <div className="relative rounded-3xl overflow-hidden aspect-video bg-gray-100 mb-12">
          <img
            alt="APPLE mini compact design"
            data-strk-img-id="design-hero-img-c1e4f2"
            data-strk-img="[design-desc] [design-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-4">
            {['12.7cm × 12.7cm', '5cm Thin', '100% Recycled Aluminum', 'Fanless Option'].map((tag) => (
              <span key={tag} className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Two-column detail */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
            <div className="aspect-video overflow-hidden bg-gray-100">
              <img
                alt="APPLE mini color options"
                data-strk-img-id="design-color-img-d5a8b3"
                data-strk-img="[design-color-title] [design-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 id="design-color-title" className="text-xl font-bold text-gray-900">Two stunning finishes</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Available in Silver and Space Black. Both crafted from precision-machined aluminum with a brushed finish.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
            <div className="aspect-video overflow-hidden bg-gray-100">
              <img
                alt="APPLE mini ports connectivity"
                data-strk-img-id="design-ports-img-e6c9d4"
                data-strk-img="[design-ports-title] [design-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 id="design-ports-title" className="text-xl font-bold text-gray-900">Ports for everything</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                3× Thunderbolt 4, 2× USB-A, HDMI 2.1, Ethernet, and a 3.5mm headphone jack. Front USB-C for easy access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
