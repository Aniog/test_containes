import { useState, useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const herbariumEntries = [
  {
    id: 'herb-001',
    titleId: 'herb-title-001',
    descId: 'herb-desc-001',
    imgId: 'herb-img-a1b2c3',
    name: 'Echeveria subsessilis',
    family: 'Crassulaceae',
    category: 'Succulents',
    collected: '2023-04-12',
    location: 'Oaxaca, Mexico',
    altitude: '1,800 m',
    description: 'Compact rosette with glaucous blue-green leaves edged in pink. Collected from rocky limestone outcrops in the Sierra Madre del Sur.',
    tags: ['Rosette', 'Glaucous', 'Limestone'],
  },
  {
    id: 'herb-002',
    titleId: 'herb-title-002',
    descId: 'herb-desc-002',
    imgId: 'herb-img-d4e5f6',
    name: 'Polypodium vulgare',
    family: 'Polypodiaceae',
    category: 'Ferns',
    collected: '2023-07-03',
    location: 'Dartmoor, England',
    altitude: '420 m',
    description: 'Common polypody with deeply lobed fronds persisting through winter. Found growing on mossy stone walls and shaded rock faces.',
    tags: ['Evergreen', 'Epipetric', 'Temperate'],
  },
  {
    id: 'herb-003',
    titleId: 'herb-title-003',
    descId: 'herb-desc-003',
    imgId: 'herb-img-g7h8i9',
    name: 'Thuidium tamariscinum',
    family: 'Thuidiaceae',
    category: 'Moss',
    collected: '2023-09-18',
    location: 'Black Forest, Germany',
    altitude: '780 m',
    description: 'Feather moss with tripinnate branching forming dense, fern-like mats on the forest floor. A key indicator of ancient woodland.',
    tags: ['Feather', 'Tripinnate', 'Ancient woodland'],
  },
  {
    id: 'herb-004',
    titleId: 'herb-title-004',
    descId: 'herb-desc-004',
    imgId: 'herb-img-j1k2l3',
    name: 'Haworthia fasciata',
    family: 'Asphodelaceae',
    category: 'Succulents',
    collected: '2023-02-28',
    location: 'Eastern Cape, South Africa',
    altitude: '320 m',
    description: 'Zebra plant with stiff, dark green leaves banded with white tubercles. Forms tight clumps in rocky, semi-arid scrubland.',
    tags: ['Zebra', 'Tubercles', 'Semi-arid'],
  },
  {
    id: 'herb-005',
    titleId: 'herb-title-005',
    descId: 'herb-desc-005',
    imgId: 'herb-img-m4n5o6',
    name: 'Osmunda regalis',
    family: 'Osmundaceae',
    category: 'Ferns',
    collected: '2023-06-15',
    location: 'Killarney, Ireland',
    altitude: '60 m',
    description: 'Royal fern with bipinnate fronds reaching 2 metres. The fertile pinnae at the frond tips turn russet-brown, resembling flowering spikes.',
    tags: ['Royal', 'Bipinnate', 'Wetland'],
  },
  {
    id: 'herb-006',
    titleId: 'herb-title-006',
    descId: 'herb-desc-006',
    imgId: 'herb-img-p7q8r9',
    name: 'Leucobryum glaucum',
    family: 'Leucobryaceae',
    category: 'Moss',
    collected: '2023-10-05',
    location: 'Ardennes, Belgium',
    altitude: '510 m',
    description: 'Cushion moss forming distinctive pale grey-green domes in acidic woodland. The whitish colour results from large hyaline cells in the leaves.',
    tags: ['Cushion', 'Hyaline', 'Acidic'],
  },
  {
    id: 'herb-007',
    titleId: 'herb-title-007',
    descId: 'herb-desc-007',
    imgId: 'herb-img-s1t2u3',
    name: 'Gasteria batesiana',
    family: 'Asphodelaceae',
    category: 'Succulents',
    collected: '2023-03-20',
    location: 'KwaZulu-Natal, South Africa',
    altitude: '900 m',
    description: 'Tongue-shaped leaves with white warts arranged in a distichous fan. Shade-tolerant and found in rocky kloofs and forest margins.',
    tags: ['Distichous', 'Warts', 'Shade'],
  },
  {
    id: 'herb-008',
    titleId: 'herb-title-008',
    descId: 'herb-desc-008',
    imgId: 'herb-img-v4w5x6',
    name: 'Woodsia ilvensis',
    family: 'Woodsiaceae',
    category: 'Ferns',
    collected: '2023-08-11',
    location: 'Cairngorms, Scotland',
    altitude: '1,050 m',
    description: 'Oblong fern of arctic-alpine rock crevices. One of Britain\'s rarest ferns, with distinctive jointed stipes that break cleanly at a defined point.',
    tags: ['Arctic-alpine', 'Rare', 'Crevice'],
  },
  {
    id: 'herb-009',
    titleId: 'herb-title-009',
    descId: 'herb-desc-009',
    imgId: 'herb-img-y7z8a9',
    name: 'Dicranum scoparium',
    family: 'Dicranaceae',
    category: 'Moss',
    collected: '2023-11-02',
    location: 'Białowieża, Poland',
    altitude: '160 m',
    description: 'Wind-swept moss with leaves all curved to one side, creating a distinctive combed appearance. Abundant on decaying logs in primeval forest.',
    tags: ['Falcate', 'Decaying wood', 'Primeval'],
  },
];

const categories = ['All', 'Succulents', 'Ferns', 'Moss'];

function HerbariumCard({ entry }) {
  return (
    <article className="border-b border-[#E8E0D0] pb-8 mb-8 last:border-0 last:mb-0">
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Thumbnail */}
        <div className="flex-shrink-0 w-full sm:w-28 h-28 bg-[#E8E0D0] overflow-hidden">
          <img
            data-strk-img-id={entry.imgId}
            data-strk-img={`[${entry.descId}] [${entry.titleId}]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={entry.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div>
              <h3
                id={entry.titleId}
                className="font-serif text-xl font-light text-[#3D5C3A] leading-tight"
              >
                {entry.name}
              </h3>
              <p className="font-serif italic text-xs text-[#8B7355] mt-0.5">{entry.family}</p>
            </div>
            <span className="font-mono text-[10px] text-[#8B7355] tracking-widest whitespace-nowrap">
              {entry.id}
            </span>
          </div>

          <p
            id={entry.descId}
            className="font-sans text-sm text-[#2C2C2C] leading-relaxed mb-3"
          >
            {entry.description}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-6 gap-y-1 mb-3">
            <span className="font-sans text-xs text-[#8B7355]">
              <span className="tracking-[0.1em] uppercase text-[10px]">Location</span>{' '}
              {entry.location}
            </span>
            <span className="font-sans text-xs text-[#8B7355]">
              <span className="tracking-[0.1em] uppercase text-[10px]">Alt.</span>{' '}
              {entry.altitude}
            </span>
            <span className="font-sans text-xs text-[#8B7355]">
              <span className="tracking-[0.1em] uppercase text-[10px]">Collected</span>{' '}
              {entry.collected}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {entry.tags.map(tag => (
              <span
                key={tag}
                className="font-sans text-[10px] tracking-[0.1em] uppercase px-2.5 py-0.5 rounded-full bg-[#E8E0D0] text-[#8B7355]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function HerbariumPage() {
  const [activeTag, setActiveTag] = useState('All');
  const containerRef = useRef(null);

  const filtered = activeTag === 'All'
    ? herbariumEntries
    : herbariumEntries.filter(e => e.category === activeTag);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [filtered]);

  return (
    <div className="pt-16 min-h-screen bg-[#F5F0E8]">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-16 pt-24 pb-12 border-b border-[#E8E0D0]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#7A9E7E] mb-6">
              Herbarium
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-[#3D5C3A] leading-none">
              Digital<br />
              <em className="not-italic text-[#7A9E7E]">Archive</em>
            </h1>
          </div>
          <div className="max-w-xs">
            <p className="font-sans text-sm text-[#8B7355] leading-relaxed">
              A curated collection of pressed specimens, field notes, and botanical observations from expeditions across five continents.
            </p>
            <p className="font-mono text-xs text-[#8B7355] mt-3 tracking-widest">
              {herbariumEntries.length} specimens catalogued
            </p>
          </div>
        </div>
      </section>

      {/* Main layout: sidebar + archive */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-12 flex flex-col md:flex-row gap-12 md:gap-16">

        {/* Sidebar — tag navigation */}
        <aside className="md:w-[220px] flex-shrink-0">
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#8B7355] mb-4">
            Filter by type
          </p>
          <nav className="flex flex-row md:flex-col flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTag(cat)}
                className={`font-sans text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-full text-left transition-all duration-300 border ${
                  activeTag === cat
                    ? 'bg-[#7A9E7E] text-[#FAF7F2] border-[#7A9E7E]'
                    : 'bg-transparent text-[#8B7355] border-[#E8E0D0] hover:border-[#7A9E7E] hover:text-[#3D5C3A]'
                }`}
              >
                {cat}
                <span className="ml-2 font-mono text-[10px] opacity-60">
                  {cat === 'All'
                    ? herbariumEntries.length
                    : herbariumEntries.filter(e => e.category === cat).length}
                </span>
              </button>
            ))}
          </nav>

          {/* Decorative divider */}
          <div className="hidden md:block mt-10 pt-10 border-t border-[#E8E0D0]">
            <p className="font-serif italic text-sm text-[#8B7355] leading-relaxed">
              "The herbarium is a library of pressed time."
            </p>
          </div>
        </aside>

        {/* Archive columns */}
        <div ref={containerRef} className="flex-1 min-w-0">
          {/* Column header */}
          <div className="grid grid-cols-3 gap-4 pb-4 mb-6 border-b border-[#E8E0D0]">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8B7355]">Specimen</span>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8B7355] hidden sm:block">Location</span>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8B7355] hidden sm:block text-right">Date</span>
          </div>

          {/* Two-column layout on large screens */}
          <div className="columns-1 lg:columns-2 gap-x-12">
            {filtered.map(entry => (
              <div key={entry.id} className="break-inside-avoid">
                <HerbariumCard entry={entry} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="font-serif italic text-lg text-[#8B7355] py-16">
              No specimens in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
