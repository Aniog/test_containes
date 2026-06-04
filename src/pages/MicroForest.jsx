import React from 'react';

const MACRO_ITEMS = [
  {
    id: 'mushroom-cluster',
    imgId: 'micro-mushroom-cluster-p1q2r3',
    title: 'Tiny Spires',
    subtitle: 'Mycena',
    desc: 'A cluster of Mycena mushrooms rise from decaying wood, their caps no wider than a fingernail.',
    titleId: 'micro-mushroom-title',
    descId: 'micro-mushroom-desc',
    subtitleId: 'micro-mushroom-subtitle',
  },
  {
    id: 'dewdrop-web',
    imgId: 'micro-dewdrop-web-s4t5u6',
    title: 'Diamond Net',
    subtitle: 'Orb Weaver',
    desc: 'Dawn dewdrops transform an orb weaver\'s web into a constellation of liquid lenses.',
    titleId: 'micro-dewdrop-title',
    descId: 'micro-dewdrop-desc',
    subtitleId: 'micro-dewdrop-subtitle',
  },
  {
    id: 'beetle-carapace',
    imgId: 'micro-beetle-carapace-v7w8x9',
    title: 'Armored Wanderer',
    subtitle: 'Carabus',
    desc: 'A ground beetle\'s carapace gleams like polished obsidian under the forest filter light.',
    titleId: 'micro-beetle-title',
    descId: 'micro-beetle-desc',
    subtitleId: 'micro-beetle-subtitle',
  },
  {
    id: 'lichen-closeup',
    imgId: 'micro-lichen-closeup-y0z1a2',
    title: 'Ancient Script',
    subtitle: 'Cladonia',
    desc: 'Lichen etches cryptic patterns across bark — a language written over decades.',
    titleId: 'micro-lichen-title',
    descId: 'micro-lichen-desc',
    subtitleId: 'micro-lichen-subtitle',
  },
  {
    id: 'slug-trail',
    imgId: 'micro-slug-trail-b3c4d5',
    title: 'Silver Path',
    subtitle: 'Arion',
    desc: 'A slug\'s glistening trail catches the light, a transient ribbon across the moss.',
    titleId: 'micro-slug-title',
    descId: 'micro-slug-desc',
    subtitleId: 'micro-slug-subtitle',
  },
  {
    id: 'spore-release',
    imgId: 'micro-spore-release-e6f7g8',
    title: 'Silent Exodus',
    subtitle: 'Puffball',
    desc: 'A puffball releases its spores in a ghostly plume, seeding the next generation.',
    titleId: 'micro-spore-title',
    descId: 'micro-spore-desc',
    subtitleId: 'micro-spore-subtitle',
  },
];

export default function MicroForest() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
      {/* Hero */}
      <section className="mb-16 md:mb-24">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-mist-pale tracking-wide leading-none">
          Micro-Forest
        </h1>
        <div className="mt-6 max-w-2xl">
          <p className="text-lg md:text-xl text-mist leading-relaxed italic">
            The hidden world beneath our feet. A universe in miniature where
            mushrooms tower like skyscrapers and dewdrops become oceans.
          </p>
        </div>
        <div className="mt-8 h-px bg-gradient-to-r from-mist-heavy/40 via-mist/20 to-transparent" />
      </section>

      {/* Macro grid — wider spacing, larger images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {MACRO_ITEMS.map((item) => (
          <article
            key={item.id}
            className="group border border-mist-heavy/20 bg-canopy-shadow overflow-hidden"
          >
            {/* Image container */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.subtitleId}] [${item.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Subtle fog overlay */}
              <div className="absolute inset-0 bg-[#C4CFC9] fog-overlay-img opacity-60 group-hover:opacity-20 transition-opacity duration-[1.5s] ease-out" />
            </div>

            {/* Text */}
            <div className="p-6 md:p-8">
              <span
                id={item.subtitleId}
                className="text-xs tracking-[0.2em] uppercase text-mist-heavy font-body"
              >
                {item.subtitle}
              </span>
              <h2
                id={item.titleId}
                className="font-heading text-2xl md:text-3xl font-semibold text-mist-pale mt-2 mb-3"
              >
                {item.title}
              </h2>
              <p
                id={item.descId}
                className="text-sm md:text-base text-mist/80 leading-relaxed"
              >
                {item.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom atmospheric quote */}
      <div className="mt-20 md:mt-28 text-center">
        <blockquote className="font-heading text-2xl md:text-3xl italic text-mist/50 max-w-2xl mx-auto leading-relaxed">
          "The more we look, the smaller we become — and the larger the forest grows."
        </blockquote>
      </div>
    </div>
  );
}