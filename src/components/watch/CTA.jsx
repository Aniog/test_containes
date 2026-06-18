import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const models = [
  { id: 'model-s9', name: 'Apple Watch Series 9', price: 'From $399', desc: 'The most powerful Apple Watch ever. S9 chip, Double Tap gesture, and brighter display.', imgId: 'model-s9-img-3a7c2e', titleId: 'model-s9-title', descId: 'model-s9-desc', badge: 'Most Popular', badgeColor: 'bg-blue-600' },
  { id: 'model-ultra', name: 'Apple Watch Ultra 2', price: 'From $799', desc: 'Built for extreme athletes and adventurers. Titanium case, 60-hour battery, and precision dual-frequency GPS.', imgId: 'model-ultra-img-8b4f1d', titleId: 'model-ultra-title', descId: 'model-ultra-desc', badge: 'Most Advanced', badgeColor: 'bg-orange-500' },
  { id: 'model-se', name: 'Apple Watch SE', price: 'From $249', desc: 'All the essentials at an incredible value. Crash Detection, heart rate monitoring, and Family Setup.', imgId: 'model-se-img-5c9d3a', titleId: 'model-se-title', descId: 'model-se-desc', badge: 'Best Value', badgeColor: 'bg-green-600' },
];

export default function CTA() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="cta" ref={containerRef} className="bg-black py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">
            Choose Your Watch
          </p>
          <h2 id="cta-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Find the one for you.
          </h2>
          <p id="cta-subtitle" className="mt-4 text-lg text-zinc-400 max-w-xl mx-auto">
            Three models. Endless possibilities. Every Apple Watch comes with a one-year warranty and free engraving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {models.map((model) => (
            <div key={model.id} className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-colors group">
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={model.name}
                  data-strk-img-id={model.imgId}
                  data-strk-img={`[${model.descId}] [${model.titleId}] [cta-subtitle] [cta-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-4 left-4 ${model.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                  {model.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 id={model.titleId} className="text-lg font-bold text-white mb-1">{model.name}</h3>
                <p className="text-blue-400 font-semibold text-sm mb-3">{model.price}</p>
                <p id={model.descId} className="text-zinc-400 text-sm leading-relaxed mb-6">{model.desc}</p>
                <button className="w-full bg-white hover:bg-zinc-100 text-zinc-900 font-semibold py-3 rounded-full text-sm transition-colors">
                  Shop {model.name.split(' ').slice(-2).join(' ')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-10 md:p-14 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Free shipping. Free returns. And free engraving on every Apple Watch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 font-bold px-10 py-4 rounded-full text-base hover:bg-blue-50 transition-colors">
              Shop Apple Watch
            </button>
            <button className="border-2 border-white/50 text-white font-semibold px-10 py-4 rounded-full text-base hover:border-white transition-colors">
              Compare Models
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
