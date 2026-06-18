import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const materials = [
  { id: 'mat-aluminum', name: 'Aluminum', desc: 'Lightweight and durable. Available in Midnight, Starlight, and Product Red.', titleId: 'mat-aluminum-title', descId: 'mat-aluminum-desc', imgId: 'mat-aluminum-img-2f8a1e' },
  { id: 'mat-stainless', name: 'Stainless Steel', desc: 'Premium finish with a mirror-polished or brushed look. Timeless elegance.', titleId: 'mat-stainless-title', descId: 'mat-stainless-desc', imgId: 'mat-stainless-img-9c3d7b' },
  { id: 'mat-titanium', name: 'Titanium', desc: 'Ultra-light and incredibly strong. The pinnacle of Apple Watch craftsmanship.', titleId: 'mat-titanium-title', descId: 'mat-titanium-desc', imgId: 'mat-titanium-img-6e1f4a' },
];

export default function Design() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="design" ref={containerRef} className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Craftsmanship
          </p>
          <h2 id="design-title" className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
            Designed to be worn.
          </h2>
          <p id="design-subtitle" className="mt-4 text-lg text-zinc-500 max-w-2xl mx-auto">
            Every Apple Watch is crafted with premium materials and meticulous attention to detail. Choose the case and band that fits your style.
          </p>
        </div>

        {/* Materials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {materials.map((mat) => (
            <div key={mat.id} className="group rounded-2xl overflow-hidden bg-zinc-50 hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={mat.name}
                  data-strk-img-id={mat.imgId}
                  data-strk-img={`[${mat.descId}] [${mat.titleId}] [design-subtitle] [design-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 id={mat.titleId} className="text-lg font-bold text-zinc-900 mb-2">{mat.name}</h3>
                <p id={mat.descId} className="text-zinc-500 text-sm leading-relaxed">{mat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Display highlight */}
        <div className="rounded-3xl bg-zinc-900 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4">
                Always-On Retina Display
              </p>
              <h3 id="display-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
                See everything at a glance.
              </h3>
              <p id="display-desc" className="text-zinc-400 leading-relaxed mb-6">
                The Always-On Retina display is up to 2000 nits bright — making it easy to read even in direct sunlight. With customizable watch faces, your watch is as unique as you are.
              </p>
              <ul className="space-y-2">
                {['2000 nits peak brightness', 'Always-On display', '2000+ watch faces', 'Crack-resistant front crystal'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <img
                alt="Apple Watch display"
                data-strk-img-id="display-img-8d2c5f"
                data-strk-img="[display-desc] [display-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
