import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const worlds = [
  {
    id: 'world-ocean', imgId: 'world-img-mc-ocean',
    titleId: 'world-title-ocean', descId: 'world-desc-ocean',
    title: 'Ocean Depths',
    desc: 'The ocean teems with microscopic life — from bioluminescent dinoflagellates to the tiniest phytoplankton that produce half our oxygen.',
    stat: '1 million', statLabel: 'microbes per ml of seawater',
  },
  {
    id: 'world-soil', imgId: 'world-img-mc-soil',
    titleId: 'world-title-soil', descId: 'world-desc-soil',
    title: 'Living Soil',
    desc: 'A teaspoon of healthy soil contains more microorganisms than there are people on Earth. Fungi, bacteria, and nematodes form complex underground webs.',
    stat: '1 billion', statLabel: 'bacteria per gram of soil',
  },
  {
    id: 'world-body', imgId: 'world-img-mc-body',
    titleId: 'world-title-body', descId: 'world-desc-body',
    title: 'Human Microbiome',
    desc: 'Your body hosts trillions of microorganisms — on your skin, in your gut, and throughout your body. They outnumber your own cells and are vital to your health.',
    stat: '38 trillion', statLabel: 'microbes in the human body',
  },
];

export default function MicroWorlds() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="worlds" ref={containerRef} className="bg-cosmos-navy py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-cosmos-teal mb-4">
            Ecosystems
          </p>
          <h2
            id="worlds-section-title"
            className="text-4xl md:text-5xl font-bold text-cosmos-light mb-4"
          >
            Micro Worlds Around Us
          </h2>
          <p id="worlds-section-desc" className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            Microscopic ecosystems exist in every corner of our planet — each one a complex, self-sustaining universe.
          </p>
        </div>

        <div className="space-y-8">
          {worlds.map((world, index) => (
            <div
              key={world.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Image */}
              <div className="relative group overflow-hidden rounded-2xl border border-cosmos-border">
                <img
                  alt={world.title}
                  data-strk-img-id={world.imgId}
                  data-strk-img={`[${world.descId}] [${world.titleId}] [worlds-section-desc] [worlds-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cosmos-dark/40 to-transparent" />
              </div>

              {/* Text */}
              <div className="py-4">
                <h3 id={world.titleId} className="text-3xl font-bold text-cosmos-light mb-4">
                  {world.title}
                </h3>
                <p id={world.descId} className="text-cosmos-muted text-lg leading-relaxed mb-6">
                  {world.desc}
                </p>
                <div className="inline-flex flex-col p-4 rounded-xl bg-cosmos-card border border-cosmos-border">
                  <span className="text-2xl font-black text-cosmos-teal">{world.stat}</span>
                  <span className="text-xs text-cosmos-muted mt-1">{world.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
