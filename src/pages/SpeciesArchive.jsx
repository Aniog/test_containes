import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const species = [
  {
    id: 'lion',
    titleId: 'species-lion-title',
    descId: 'species-lion-desc',
    habitatId: 'species-lion-habitat',
    imgId: 'species-portrait-lion-a1b2c3',
    habitatImgId: 'species-habitat-lion-a1b2c4',
    name: 'African Lion',
    latin: 'Panthera leo',
    habitat: 'Open savanna grasslands',
    description: 'The apex predator of the Serengeti. Lions live in prides of up to 30 individuals, hunting cooperatively at dusk and dawn.',
    status: 'Vulnerable',
    statusColor: 'text-sky-amber',
    region: 'Serengeti Plains',
  },
  {
    id: 'elephant',
    titleId: 'species-elephant-title',
    descId: 'species-elephant-desc',
    habitatId: 'species-elephant-habitat',
    imgId: 'species-portrait-elephant-d4e5f6',
    habitatImgId: 'species-habitat-elephant-d4e5f7',
    name: 'African Elephant',
    latin: 'Loxodonta africana',
    habitat: 'Woodland and open savanna',
    description: 'The largest land animal on Earth. Elephant matriarchs lead family groups across vast territories, their memory mapping ancient water sources.',
    status: 'Endangered',
    statusColor: 'text-burnt-orange-light',
    region: 'Amboseli Basin',
  },
  {
    id: 'cheetah',
    titleId: 'species-cheetah-title',
    descId: 'species-cheetah-desc',
    habitatId: 'species-cheetah-habitat',
    imgId: 'species-portrait-cheetah-g7h8i9',
    habitatImgId: 'species-habitat-cheetah-g7h8i0',
    name: 'Cheetah',
    latin: 'Acinonyx jubatus',
    habitat: 'Open grassland and scrub',
    description: 'The fastest land animal, capable of 70 mph in short bursts. Cheetahs rely on sight rather than scent, hunting in the golden hours of morning.',
    status: 'Vulnerable',
    statusColor: 'text-sky-amber',
    region: 'Ngorongoro Crater',
  },
  {
    id: 'giraffe',
    titleId: 'species-giraffe-title',
    descId: 'species-giraffe-desc',
    habitatId: 'species-giraffe-habitat',
    imgId: 'species-portrait-giraffe-j1k2l3',
    habitatImgId: 'species-habitat-giraffe-j1k2l4',
    name: 'Masai Giraffe',
    latin: 'Giraffa camelopardalis tippelskirchi',
    habitat: 'Acacia woodland and savanna',
    description: 'The tallest living terrestrial animal. Masai giraffes browse the canopy of acacia trees, their distinctive spotted patterns unique as fingerprints.',
    status: 'Endangered',
    statusColor: 'text-burnt-orange-light',
    region: 'Masai Mara',
  },
  {
    id: 'leopard',
    titleId: 'species-leopard-title',
    descId: 'species-leopard-desc',
    habitatId: 'species-leopard-habitat',
    imgId: 'species-portrait-leopard-m4n5o6',
    habitatImgId: 'species-habitat-leopard-m4n5o7',
    name: 'Leopard',
    latin: 'Panthera pardus',
    habitat: 'Riverine forest and rocky outcrops',
    description: 'The most elusive of the big cats. Leopards are solitary, nocturnal hunters who cache their kills in trees to protect them from lions and hyenas.',
    status: 'Vulnerable',
    statusColor: 'text-sky-amber',
    region: 'Serengeti Kopjes',
  },
  {
    id: 'hippo',
    titleId: 'species-hippo-title',
    descId: 'species-hippo-desc',
    habitatId: 'species-hippo-habitat',
    imgId: 'species-portrait-hippo-p7q8r9',
    habitatImgId: 'species-habitat-hippo-p7q8r0',
    name: 'Hippopotamus',
    latin: 'Hippopotamus amphibius',
    habitat: 'Rivers and lakes',
    description: 'Despite their placid appearance, hippos are among Africa\'s most dangerous animals. They spend their days submerged in the Mara River, emerging at night to graze.',
    status: 'Vulnerable',
    statusColor: 'text-sky-amber',
    region: 'Mara River',
  },
  {
    id: 'zebra',
    titleId: 'species-zebra-title',
    descId: 'species-zebra-desc',
    habitatId: 'species-zebra-habitat',
    imgId: 'species-portrait-zebra-s1t2u3',
    habitatImgId: 'species-habitat-zebra-s1t2u4',
    name: 'Plains Zebra',
    latin: 'Equus quagga',
    habitat: 'Open grassland and woodland',
    description: 'Zebra lead the Great Migration, their keen senses detecting fresh grass and water. No two zebra have identical stripe patterns.',
    status: 'Near Threatened',
    statusColor: 'text-ochre-light',
    region: 'Serengeti Plains',
  },
  {
    id: 'buffalo',
    titleId: 'species-buffalo-title',
    descId: 'species-buffalo-desc',
    habitatId: 'species-buffalo-habitat',
    imgId: 'species-portrait-buffalo-v4w5x6',
    habitatImgId: 'species-habitat-buffalo-v4w5x7',
    name: 'African Buffalo',
    latin: 'Syncerus caffer',
    habitat: 'Savanna and floodplains',
    description: 'One of the "Big Five," the African buffalo is a formidable herd animal. Old bulls, known as "dagga boys," are notoriously unpredictable and dangerous.',
    status: 'Near Threatened',
    statusColor: 'text-ochre-light',
    region: 'Serengeti Woodlands',
  },
  {
    id: 'wildebeest',
    titleId: 'species-wildebeest-title',
    descId: 'species-wildebeest-desc',
    habitatId: 'species-wildebeest-habitat',
    imgId: 'species-portrait-wildebeest-y7z8a9',
    habitatImgId: 'species-habitat-wildebeest-y7z8b0',
    name: 'Blue Wildebeest',
    latin: 'Connochaetes taurinus',
    habitat: 'Open grassland',
    description: 'The engine of the Great Migration. Over 1.5 million wildebeest follow the rains in a relentless circular journey, sustaining the entire Serengeti food web.',
    status: 'Least Concern',
    statusColor: 'text-acacia-light',
    region: 'Serengeti-Mara',
  },
];

function SpeciesCard({ animal, index }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      className="species-card rounded-sm border border-burnt-orange/15 bg-earth-brown/30 animate-slide-up"
      style={{ animationDelay: `${(index % 3) * 0.1 + 0.1}s`, opacity: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Habitat background (blurred, revealed on hover) */}
      <div className="habitat-bg">
        <img
          data-strk-img-id={animal.habitatImgId}
          data-strk-img={`[${animal.habitatId}] [${animal.titleId}] savanna habitat landscape`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${animal.name} habitat`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay that fades on hover */}
      <div
        className="absolute inset-0 z-1 transition-opacity duration-600"
        style={{ background: 'linear-gradient(180deg, rgba(61,32,16,0.3) 0%, rgba(61,32,16,0.85) 100%)', opacity: hovered ? 0.7 : 1 }}
      />

      <div className="card-content">
        {/* Portrait image */}
        <div className="aspect-[3/4] overflow-hidden">
          <img
            data-strk-img-id={animal.imgId}
            data-strk-img={`[${animal.descId}] [${animal.titleId}] wildlife portrait close-up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={animal.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ filter: 'saturate(1.05) contrast(1.05)' }}
          />
        </div>

        {/* Card info */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 id={animal.titleId} className="font-serif text-xl font-bold text-savanna-cream leading-tight">
                {animal.name}
              </h3>
              <p className="font-serif-display text-sm italic text-ochre-pale/80 mt-0.5">
                {animal.latin}
              </p>
            </div>
            <span className={`font-sans text-xs tracking-wide ${animal.statusColor} shrink-0 ml-2 mt-1`}>
              {animal.status}
            </span>
          </div>

          <p id={animal.habitatId} className="font-sans text-xs tracking-[0.15em] uppercase text-burnt-orange/80 mb-3">
            {animal.region}
          </p>

          <p id={animal.descId} className="font-serif-display text-sm text-savanna-warm/80 leading-relaxed line-clamp-3">
            {animal.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SpeciesArchive() {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState('All');

  const statusFilters = ['All', 'Endangered', 'Vulnerable', 'Near Threatened', 'Least Concern'];

  const filtered = filter === 'All'
    ? species
    : species.filter(s => s.status === filter);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, [filter]);

  return (
    <div ref={containerRef} className="min-h-screen bg-earth-dark">
      {/* Hero header */}
      <div className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            data-strk-img-id="archive-hero-bg-b1c2d3"
            data-strk-img="[archive-hero-title] African wildlife savanna panorama"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Savanna panorama"
            className="parallax-img opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-dark/60 via-earth-dark/40 to-earth-dark" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-burnt-orange mb-4 animate-slide-up">
            Field Guide
          </p>
          <h1
            id="archive-hero-title"
            className="font-serif text-5xl md:text-7xl font-bold text-savanna-cream leading-none mb-4 animate-slide-up delay-100"
          >
            Species Archive
          </h1>
          <p className="font-serif-display text-xl md:text-2xl italic text-ochre-pale animate-slide-up delay-200">
            The Inhabitants of the Serengeti
          </p>
          <div className="mt-6 w-16 h-px bg-burnt-orange animate-slide-up delay-300" />
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-16 z-30 bg-earth-dark/95 backdrop-blur-md border-b border-burnt-orange/15 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-1">
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-savanna-warm/50 mr-2 shrink-0">
            Filter:
          </span>
          {statusFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`shrink-0 font-sans text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                filter === f
                  ? 'bg-burnt-orange border-burnt-orange text-savanna-cream'
                  : 'border-burnt-orange/30 text-savanna-warm/70 hover:border-burnt-orange/60 hover:text-savanna-cream'
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto font-sans text-xs text-savanna-warm/40 shrink-0">
            {filtered.length} species
          </span>
        </div>
      </div>

      {/* Species grid */}
      <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((animal, i) => (
            <SpeciesCard key={animal.id} animal={animal} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-serif text-2xl text-savanna-warm/50">No species found</p>
          </div>
        )}
      </section>

      {/* Conservation note */}
      <section className="border-t border-burnt-orange/20 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-burnt-orange mb-4">
            Conservation
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-savanna-cream mb-6">
            Protecting the Pulse
          </h2>
          <p className="font-serif-display text-lg text-savanna-warm/80 leading-relaxed">
            The Serengeti ecosystem faces mounting pressure from habitat loss, climate change,
            and human-wildlife conflict. Every species documented here plays an irreplaceable
            role in the web of life that makes this landscape extraordinary.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-burnt-orange/20 py-12 px-6 md:px-12 text-center">
        <p className="font-serif text-2xl font-bold text-savanna-cream mb-2">Serengeti Pulse</p>
        <p className="font-serif-display text-sm italic text-savanna-warm/60">
          Documenting the heartbeat of the wild
        </p>
      </footer>
    </div>
  );
}
