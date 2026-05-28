import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Tardigrade',
    subtitle: 'Water Bear',
    category: 'Extremophile',
    desc: 'The most resilient animal on Earth. Can survive in space, extreme radiation, and temperatures from -272°C to 150°C.',
    gradient: 'from-cosmos-teal/30 via-cosmos-cyan/20 to-cosmos-teal/5',
    emoji: '🐻',
    size: 'col-span-2 row-span-2',
    accent: '#00d4aa',
  },
  {
    id: 2,
    title: 'Diatom',
    subtitle: 'Silica Shell Algae',
    category: 'Plankton',
    desc: 'Microscopic algae encased in intricate glass-like shells of silica, each one a unique geometric masterpiece.',
    gradient: 'from-cosmos-cyan/30 via-cosmos-cyan/10 to-transparent',
    emoji: '💎',
    size: '',
    accent: '#06b6d4',
  },
  {
    id: 3,
    title: 'Radiolaria',
    subtitle: 'Amoeboid Protozoa',
    category: 'Protozoa',
    desc: 'Single-celled organisms with elaborate mineral skeletons, forming stunning geometric patterns.',
    gradient: 'from-cosmos-violet/30 via-cosmos-violet/10 to-transparent',
    emoji: '⭐',
    size: '',
    accent: '#7c3aed',
  },
  {
    id: 4,
    title: 'Penicillium',
    subtitle: 'Blue-Green Mold',
    category: 'Fungi',
    desc: 'The mold that produces penicillin. Under a microscope, its brush-like spore structures are surprisingly beautiful.',
    gradient: 'from-amber-400/30 via-amber-400/10 to-transparent',
    emoji: '🍄',
    size: '',
    accent: '#f59e0b',
  },
  {
    id: 5,
    title: 'Noctiluca',
    subtitle: 'Sea Sparkle',
    category: 'Plankton',
    desc: 'Bioluminescent dinoflagellate that creates the magical blue glow seen in ocean waves at night.',
    gradient: 'from-blue-400/30 via-blue-400/10 to-transparent',
    emoji: '✨',
    size: 'col-span-2',
    accent: '#60a5fa',
  },
  {
    id: 6,
    title: 'Vorticella',
    subtitle: 'Bell Animalcule',
    category: 'Protozoa',
    desc: 'A bell-shaped protozoan that attaches to surfaces via a coiled stalk, contracting rapidly when disturbed.',
    gradient: 'from-green-400/30 via-green-400/10 to-transparent',
    emoji: '🔔',
    size: '',
    accent: '#4ade80',
  },
  {
    id: 7,
    title: 'Spirulina',
    subtitle: 'Spiral Cyanobacteria',
    category: 'Bacteria',
    desc: 'A spiral-shaped cyanobacterium and superfood. One of the oldest life forms, dating back 3.5 billion years.',
    gradient: 'from-cosmos-teal/30 via-cosmos-teal/10 to-transparent',
    emoji: '🌀',
    size: '',
    accent: '#00d4aa',
  },
  {
    id: 8,
    title: 'Foraminifera',
    subtitle: 'Shell-Building Amoeba',
    category: 'Protozoa',
    desc: 'Ancient single-celled organisms that build elaborate calcium carbonate shells. Their fossils help date geological strata.',
    gradient: 'from-orange-400/30 via-orange-400/10 to-transparent',
    emoji: '🐚',
    size: 'col-span-2',
    accent: '#fb923c',
  },
];

const GalleryCard = ({ item, onClick }) => (
  <div
    className={`relative bg-gradient-to-br ${item.gradient} border border-cosmos-border rounded-2xl overflow-hidden cursor-pointer group hover:border-cosmos-teal/40 hover:shadow-[0_0_30px_rgba(0,212,170,0.15)] transition-all duration-300 ${item.size}`}
    onClick={() => onClick(item)}
    style={{ minHeight: item.size.includes('row-span-2') ? '320px' : '160px' }}
  >
    {/* Background pattern */}
    <div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, ${item.accent} 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
      }}
    />

    <div className="relative z-10 p-6 h-full flex flex-col justify-between">
      <div>
        <span className="text-5xl mb-4 block">{item.emoji}</span>
        <h3 className="font-heading font-bold text-xl text-[#f0f9ff] leading-tight">{item.title}</h3>
        <p className="text-sm font-medium italic mb-1" style={{ color: item.accent }}>{item.subtitle}</p>
        <span className="text-xs bg-cosmos-bg/50 text-[#94a3b8] px-2 py-0.5 rounded-full">{item.category}</span>
      </div>
      {item.size.includes('row-span-2') && (
        <p className="text-[#94a3b8] text-sm leading-relaxed mt-4 line-clamp-3">{item.desc}</p>
      )}
    </div>

    {/* Hover overlay */}
    <div className="absolute inset-0 bg-cosmos-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <div className="flex items-center gap-2 text-cosmos-teal font-medium text-sm">
        <ZoomIn className="w-5 h-5" /> View Details
      </div>
    </div>
  </div>
);

const Modal = ({ item, onClose }) => {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-cosmos-bg/90 backdrop-blur-md flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="bg-cosmos-card border border-cosmos-border rounded-3xl max-w-lg w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cosmos-elevated border border-cosmos-border flex items-center justify-center text-[#94a3b8] hover:text-[#f0f9ff] transition"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-6xl mb-6">{item.emoji}</div>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold bg-cosmos-elevated text-[#94a3b8] px-3 py-1 rounded-full">
            {item.category}
          </span>
        </div>
        <h2 className="font-heading font-bold text-3xl text-[#f0f9ff] mb-1">{item.title}</h2>
        <p className="text-sm font-medium italic mb-4" style={{ color: item.accent }}>{item.subtitle}</p>
        <p className="text-[#94a3b8] leading-relaxed">{item.desc}</p>

        <div
          className="mt-6 h-1 rounded-full"
          style={{ background: `linear-gradient(to right, ${item.accent}, transparent)` }}
        />
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-cosmos-bg text-[#f0f9ff] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-cosmos-teal text-sm font-semibold uppercase tracking-widest">Visual Showcase</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mt-3 mb-4 text-[#f0f9ff]">
            The Microcosmos Gallery
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Beauty exists at every scale. Explore the stunning visual world of microorganisms.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px]">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} onClick={setSelected} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="text-[#475569] text-sm">
            Click any card to learn more about each organism.
          </p>
        </div>
      </div>

      <Modal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default Gallery;
