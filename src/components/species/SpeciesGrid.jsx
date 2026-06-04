import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const species = [
  {
    id: 'lion',
    name: 'African Lion',
    latin: 'Panthera leo',
    habitat: 'Open savanna grasslands',
    status: 'Vulnerable',
    statusColor: 'text-deep-ochre',
    desc: 'The apex predator of the Serengeti. Lions live in prides and hunt cooperatively at dusk and dawn.',
    imgId: 'species-lion-portrait-4a2b9c',
    habitatImgId: 'species-lion-habitat-7d3e1f',
    titleId: 'species-lion-title',
    descId: 'species-lion-desc',
    habitatTitleId: 'species-lion-habitat-title',
  },
  {
    id: 'elephant',
    name: 'African Elephant',
    latin: 'Loxodonta africana',
    habitat: 'Woodland and grassland',
    status: 'Endangered',
    statusColor: 'text-burnt-orange',
    desc: 'The largest land animal on Earth. Elephants shape the landscape, creating waterholes and clearing paths.',
    imgId: 'species-elephant-portrait-8c5f2a',
    habitatImgId: 'species-elephant-habitat-3b7d4e',
    titleId: 'species-elephant-title',
    descId: 'species-elephant-desc',
    habitatTitleId: 'species-elephant-habitat-title',
  },
  {
    id: 'cheetah',
    name: 'Cheetah',
    latin: 'Acinonyx jubatus',
    habitat: 'Open plains and scrubland',
    status: 'Vulnerable',
    statusColor: 'text-deep-ochre',
    desc: 'The fastest land animal, reaching 112 km/h in short bursts. Built for speed, not strength.',
    imgId: 'species-cheetah-portrait-2e9a6b',
    habitatImgId: 'species-cheetah-habitat-5f1c8d',
    titleId: 'species-cheetah-title',
    descId: 'species-cheetah-desc',
    habitatTitleId: 'species-cheetah-habitat-title',
  },
  {
    id: 'giraffe',
    name: 'Masai Giraffe',
    latin: 'Giraffa camelopardalis',
    habitat: 'Acacia woodland',
    status: 'Vulnerable',
    statusColor: 'text-deep-ochre',
    desc: 'The tallest animal on Earth, browsing treetops that no other herbivore can reach.',
    imgId: 'species-giraffe-portrait-6d4b3c',
    habitatImgId: 'species-giraffe-habitat-9a2e7f',
    titleId: 'species-giraffe-title',
    descId: 'species-giraffe-desc',
    habitatTitleId: 'species-giraffe-habitat-title',
  },
  {
    id: 'leopard',
    name: 'Leopard',
    latin: 'Panthera pardus',
    habitat: 'Riverine forest and kopjes',
    status: 'Vulnerable',
    statusColor: 'text-deep-ochre',
    desc: 'The most elusive of the big cats. Leopards haul prey into trees to keep it from lions and hyenas.',
    imgId: 'species-leopard-portrait-1f8c5a',
    habitatImgId: 'species-leopard-habitat-4e2b9d',
    titleId: 'species-leopard-title',
    descId: 'species-leopard-desc',
    habitatTitleId: 'species-leopard-habitat-title',
  },
  {
    id: 'wildebeest',
    name: 'Blue Wildebeest',
    latin: 'Connochaetes taurinus',
    habitat: 'Short-grass plains',
    status: 'Least Concern',
    statusColor: 'text-acacia-green',
    desc: 'The engine of the Great Migration. Two million wildebeest follow ancient instincts across the plains.',
    imgId: 'species-wildebeest-portrait-7b3d6e',
    habitatImgId: 'species-wildebeest-habitat-2c9f1a',
    titleId: 'species-wildebeest-title',
    descId: 'species-wildebeest-desc',
    habitatTitleId: 'species-wildebeest-habitat-title',
  },
  {
    id: 'zebra',
    name: 'Plains Zebra',
    latin: 'Equus quagga',
    habitat: 'Grassland and woodland',
    status: 'Near Threatened',
    statusColor: 'text-savanna-sand',
    desc: 'No two zebras share the same stripe pattern. They travel alongside wildebeest for mutual protection.',
    imgId: 'species-zebra-portrait-5a1e8c',
    habitatImgId: 'species-zebra-habitat-8d4b2f',
    titleId: 'species-zebra-title',
    descId: 'species-zebra-desc',
    habitatTitleId: 'species-zebra-habitat-title',
  },
  {
    id: 'hippo',
    name: 'Hippopotamus',
    latin: 'Hippopotamus amphibius',
    habitat: 'Rivers and lakes',
    status: 'Vulnerable',
    statusColor: 'text-deep-ochre',
    desc: 'Despite their bulk, hippos are among Africa\'s most dangerous animals. They spend days submerged in the Mara River.',
    imgId: 'species-hippo-portrait-3c7f4a',
    habitatImgId: 'species-hippo-habitat-6e1d9b',
    titleId: 'species-hippo-title',
    descId: 'species-hippo-desc',
    habitatTitleId: 'species-hippo-habitat-title',
  },
  {
    id: 'flamingo',
    name: 'Lesser Flamingo',
    latin: 'Phoeniconaias minor',
    habitat: 'Alkaline lakes',
    status: 'Near Threatened',
    statusColor: 'text-savanna-sand',
    desc: 'Millions gather on the soda lakes of the Rift Valley, turning the water pink with their presence.',
    imgId: 'species-flamingo-portrait-9b2e5c',
    habitatImgId: 'species-flamingo-habitat-1f6a3d',
    titleId: 'species-flamingo-title',
    descId: 'species-flamingo-desc',
    habitatTitleId: 'species-flamingo-habitat-title',
  },
];

function SpeciesCard({ animal }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="species-card relative overflow-hidden cursor-pointer group"
      style={{ aspectRatio: '3/4' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Habitat background (blurred, shown on hover) */}
      <div className="habitat-bg absolute inset-0 z-0">
        <img
          data-strk-img-id={animal.habitatImgId}
          data-strk-img={`[${animal.habitatTitleId}] [${animal.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${animal.name} habitat`}
          className="w-full h-full object-cover"
          style={{ filter: 'blur(3px) brightness(0.5) saturate(1.3)', transform: 'scale(1.08)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-earth/90 via-dusk-brown/40 to-burnt-orange/20" />
      </div>

      {/* Portrait image */}
      <img
        data-strk-img-id={animal.imgId}
        data-strk-img={`[${animal.descId}] [${animal.titleId}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={animal.name}
        className="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-700 group-hover:opacity-0"
      />

      {/* Dark overlay on portrait */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-charcoal-earth/80 via-transparent to-transparent" />

      {/* Card content */}
      <div className="absolute bottom-0 left-0 right-0 z-30 p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3
              id={animal.titleId}
              className="font-serif text-xl font-bold text-ash leading-tight"
            >
              {animal.name}
            </h3>
            <p className="font-sans text-xs italic text-savanna-sand/60 mt-0.5">
              {animal.latin}
            </p>
          </div>
          <span className={`font-sans text-xs tracking-wide uppercase ${animal.statusColor} bg-charcoal-earth/60 px-2 py-1 rounded-sm`}>
            {animal.status}
          </span>
        </div>

        {/* Expanded info on hover */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            hovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p
            id={animal.descId}
            className="font-sans text-sm text-savanna-sand/85 leading-relaxed mt-3 mb-2"
          >
            {animal.desc}
          </p>
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-burnt-orange/40" />
            <span
              id={animal.habitatTitleId}
              className="font-sans text-xs tracking-widest uppercase text-burnt-orange/80"
            >
              {animal.habitat}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SpeciesGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {species.map((animal) => (
          <SpeciesCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}
