import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function FeaturedAnimal() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="featured" ref={containerRef} className="py-24 bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Animal of the Season
            </p>
            <h2
              id="featured-title"
              className="text-white text-4xl md:text-5xl font-bold leading-tight mb-2"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              The Snow Leopard
            </h2>
            <p
              id="featured-subtitle"
              className="text-amber-300/80 italic text-lg mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ghost of the Mountains
            </p>
            <p className="text-stone-300 text-base leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Elusive and breathtakingly beautiful, the snow leopard prowls the high-altitude ranges of Central Asia. With its thick, smoky-grey coat and long tail used for balance, it is perfectly adapted to life among the rocky peaks and snowfields.
            </p>
            <p className="text-stone-400 text-base leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Listed as Vulnerable on the IUCN Red List, fewer than 6,000 snow leopards remain in the wild. Conservation efforts across 12 countries are working to protect this magnificent predator and its fragile mountain habitat.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '~6,000', label: 'Wild Population' },
                { value: '3,000m+', label: 'Altitude Range' },
                { value: '12', label: 'Range Countries' },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-amber-400 pl-4">
                  <div className="text-white text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{stat.value}</div>
                  <div className="text-stone-400 text-xs uppercase tracking-wider mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-400/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/5' }}>
              <img
                alt="Snow Leopard"
                className="w-full h-full object-cover"
                data-strk-img-id="featured-animal-img-d4e5f6"
                data-strk-img="[featured-subtitle] [featured-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 -left-4 bg-amber-400 text-stone-900 rounded-2xl px-5 py-3 shadow-lg">
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>Status</div>
              <div className="text-sm font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>Vulnerable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
