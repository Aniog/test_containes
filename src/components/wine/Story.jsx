import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '130+', label: 'Years of Heritage' },
  { value: '48', label: 'Award-Winning Wines' },
  { value: '12', label: 'Vineyard Regions' },
  { value: '60K', label: 'Bottles Produced Yearly' },
];

const Story = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="story" ref={containerRef} className="bg-wine-deep py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-wine-gold uppercase tracking-widest text-sm font-semibold mb-4">Our Story</p>
            <h2 id="story-title" className="font-serif text-4xl md:text-5xl text-wine-cream font-bold leading-tight mb-6">
              A Legacy Rooted in the Vine
            </h2>
            <p id="story-desc" className="text-wine-muted text-lg leading-relaxed mb-6">
              Since 1892, our family has tended the same sun-drenched hillsides of Bordeaux. What began as a small estate has grown into one of the most respected names in fine wine — yet our philosophy remains unchanged: let the land speak.
            </p>
            <p className="text-wine-muted text-lg leading-relaxed mb-8">
              Every harvest is a conversation between our winemakers and the earth. We use only traditional methods, harvesting by hand and aging in French oak barrels to coax out the complexity that defines our wines.
            </p>
            <div className="w-16 h-px bg-wine-gold mb-8" />
            <p className="text-wine-cream font-serif italic text-xl">
              "Wine is the most civilized thing in the world."
            </p>
            <p className="text-wine-muted text-sm mt-2">— Ernest Hemingway</p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] relative">
              <img
                alt="Vineyard at sunset"
                className="w-full h-full object-cover"
                data-strk-img-id="story-img-d4e5f6"
                data-strk-img="[story-desc] [story-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-wine-surface border border-wine-border rounded-2xl p-6 shadow-xl">
              <p className="text-wine-gold font-serif text-3xl font-bold">1892</p>
              <p className="text-wine-muted text-sm mt-1">Founded in Bordeaux</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 pt-12 border-t border-wine-border">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl text-wine-gold font-bold mb-2">{stat.value}</p>
              <p className="text-wine-muted text-sm tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
