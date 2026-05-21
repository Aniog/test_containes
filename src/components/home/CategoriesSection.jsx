import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'cat-img-b1',
    titleId: 'cat-title-b1',
    sectionId: 'cat-section-b1',
    title: 'Bacteria',
    subtitle: 'Prokaryotic Life',
    count: '10³⁰ estimated species',
    desc: 'The oldest and most abundant life forms on Earth. Bacteria inhabit every environment imaginable, from deep ocean vents to the human gut.',
    color: '#00d4ff',
  },
  {
    id: 'cat-img-b2',
    titleId: 'cat-title-b2',
    sectionId: 'cat-section-b2',
    title: 'Fungi & Mold',
    subtitle: 'Decomposers & Recyclers',
    count: '5.1 million species',
    desc: 'Masters of decomposition, fungi break down organic matter and form symbiotic relationships with nearly every plant on Earth.',
    color: '#7c3aed',
  },
  {
    id: 'cat-img-b3',
    titleId: 'cat-title-b3',
    sectionId: 'cat-section-b3',
    title: 'Protozoa',
    subtitle: 'Single-Cell Predators',
    count: '50,000+ species',
    desc: 'Complex single-celled eukaryotes that hunt, swim, and even form colonies. Amoeba, paramecia, and ciliates belong to this group.',
    color: '#10b981',
  },
  {
    id: 'cat-img-b4',
    titleId: 'cat-title-b4',
    sectionId: 'cat-section-b4',
    title: 'Algae & Diatoms',
    subtitle: 'Photosynthetic Microbes',
    count: '72,500+ species',
    desc: 'Responsible for over 50% of Earth\'s oxygen production, algae and diatoms are the foundation of aquatic food webs.',
    color: '#f59e0b',
  },
  {
    id: 'cat-img-b5',
    titleId: 'cat-title-b5',
    sectionId: 'cat-section-b5',
    title: 'Micro-Insects',
    subtitle: 'Tiny Arthropods',
    count: '1 million+ species',
    desc: 'Dust mites, springtails, and tardigrades — the miniature arthropods that live in soil, water, and even on our skin.',
    color: '#ef4444',
  },
  {
    id: 'cat-img-b6',
    titleId: 'cat-title-b6',
    sectionId: 'cat-section-b6',
    title: 'Plankton',
    subtitle: 'Ocean Drifters',
    count: 'Trillions in every ocean',
    desc: 'Microscopic organisms that drift through the world\'s oceans, forming the base of marine food chains and regulating Earth\'s climate.',
    color: '#06b6d4',
  },
];

export default function CategoriesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="categories" ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#00d4ff] text-xs font-semibold tracking-widest uppercase mb-4">
            Kingdoms of the Small
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#f0f9ff] mb-5">
            Explore by Category
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            The microcosmos is divided into distinct kingdoms, each with its own biology, ecology, and role in sustaining life on Earth.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-[#0f1f35] border border-[#1e3a5f] rounded-2xl overflow-hidden hover:border-[#00d4ff]/30 transition-all duration-300 group hover:shadow-lg hover:shadow-black/40"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-strk-img-id={cat.id}
                  data-strk-img={`[${cat.titleId}] [${cat.sectionId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width={700}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f35] to-transparent" />
                <span
                  className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: `${cat.color}20`, color: cat.color, border: `1px solid ${cat.color}40` }}
                >
                  {cat.subtitle}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 id={cat.titleId} className="text-[#f0f9ff] font-bold text-xl">{cat.title}</h3>
                  <span className="text-[#475569] text-xs mt-1">{cat.count}</span>
                </div>
                <span id={cat.sectionId} className="sr-only">microscopic {cat.title} organisms</span>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">{cat.desc}</p>
                <button
                  className="flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: cat.color }}
                >
                  Discover more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
