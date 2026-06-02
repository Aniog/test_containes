import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ArchiveCard from '@/components/archive/ArchiveCard';

const archiveItems = [
  {
    id: 'wedding-suite-01',
    title: 'Ashford Wedding Suite',
    category: 'Wedding Stationery',
    year: '2024',
    desc: 'Letterpress on 600gsm cotton stock with blind embossed monogram and gold foil edge.',
    imgId: 'archive-ashford-a1b2c3',
    titleId: 'archive-ashford-title',
    descId: 'archive-ashford-desc',
  },
  {
    id: 'brand-identity-02',
    title: 'Maison Verte Identity',
    category: 'Brand Identity',
    year: '2024',
    desc: 'Full brand collateral suite with copper foil business cards on Japanese washi.',
    imgId: 'archive-maison-d4e5f6',
    titleId: 'archive-maison-title',
    descId: 'archive-maison-desc',
  },
  {
    id: 'book-03',
    title: 'The Quiet Hours',
    category: 'Limited Edition Book',
    year: '2023',
    desc: 'Hand-bound poetry collection with debossed linen cover and deckle-edge pages.',
    imgId: 'archive-quiet-g7h8i9',
    titleId: 'archive-quiet-title',
    descId: 'archive-quiet-desc',
  },
  {
    id: 'menu-04',
    title: 'Osteria Nera Menus',
    category: 'Restaurant Collateral',
    year: '2023',
    desc: 'Seasonal menus letterpress printed on handmade Italian carta naturale.',
    imgId: 'archive-osteria-j1k2l3',
    titleId: 'archive-osteria-title',
    descId: 'archive-osteria-desc',
  },
  {
    id: 'invite-05',
    title: 'Gala Invitation Suite',
    category: 'Event Stationery',
    year: '2023',
    desc: 'Multi-layer invitation with silver foil, vellum overlay, and wax seal.',
    imgId: 'archive-gala-m4n5o6',
    titleId: 'archive-gala-title',
    descId: 'archive-gala-desc',
  },
  {
    id: 'notebook-06',
    title: 'Studio Notebooks',
    category: 'Retail Product',
    year: '2022',
    desc: 'Smyth-sewn notebooks with embossed covers and hand-marbled endpapers.',
    imgId: 'archive-notebook-p7q8r9',
    titleId: 'archive-notebook-title',
    descId: 'archive-notebook-desc',
  },
  {
    id: 'packaging-07',
    title: 'Atelier Packaging',
    category: 'Luxury Packaging',
    year: '2022',
    desc: 'Rigid gift boxes with foil-stamped tissue and custom ribbon printing.',
    imgId: 'archive-atelier-s1t2u3',
    titleId: 'archive-atelier-title',
    descId: 'archive-atelier-desc',
  },
  {
    id: 'calendar-08',
    title: 'Anno Calendar',
    category: 'Printed Goods',
    year: '2022',
    desc: 'Wall calendar with letterpress numerals and botanical illustration prints.',
    imgId: 'archive-anno-v4w5x6',
    titleId: 'archive-anno-title',
    descId: 'archive-anno-desc',
  },
  {
    id: 'card-09',
    title: 'Correspondence Cards',
    category: 'Personal Stationery',
    year: '2021',
    desc: 'Personalised writing cards with engraved monogram on crane cotton paper.',
    imgId: 'archive-corr-y7z8a9',
    titleId: 'archive-corr-title',
    descId: 'archive-corr-desc',
  },
];

const categories = ['All', 'Wedding Stationery', 'Brand Identity', 'Limited Edition Book', 'Restaurant Collateral', 'Event Stationery', 'Retail Product', 'Luxury Packaging', 'Printed Goods', 'Personal Stationery'];

export default function Archive() {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? archiveItems
    : archiveItems.filter((i) => i.category === activeFilter);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  return (
    <div ref={containerRef} className="bg-paper min-h-screen">
      {/* Header */}
      <section className="pt-16 pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4">
            Portfolio
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1
              id="archive-section-title"
              className="font-display text-6xl md:text-7xl font-light text-ink leading-none"
            >
              The Archive
            </h1>
            <p className="text-sm text-ink-muted max-w-xs leading-relaxed font-light">
              A curated record of commissions, collaborations, and limited editions produced in our studio.
            </p>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="px-6 md:px-12 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-widest uppercase transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-paper shadow-neu-pressed text-ink'
                    : 'bg-paper shadow-neu-sm text-ink-muted hover:text-ink hover:shadow-neu'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <ArchiveCard key={item.id} item={item} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-display text-2xl font-light italic text-ink-faint">
                No works in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
