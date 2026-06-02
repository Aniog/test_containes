import { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 'led-vintage-01',
    title: 'VINTAGE LED ARRAY',
    category: 'LED DISPLAYS',
    year: '1978',
    desc: 'Macro shot of a 1978 Hewlett-Packard LED numeric display. Individual diodes visible at 40x magnification.',
    color: '#00FFFF',
    titleId: 'gallery-led-vintage-01-title',
    descId: 'gallery-led-vintage-01-desc',
    imgId: 'gallery-img-led-vintage-01-a1b2c3',
  },
  {
    id: 'fiber-optic-02',
    title: 'FIBER OPTIC BUNDLE',
    category: 'FIBER OPTICS',
    year: '1985',
    desc: 'Cross-section of a 1985 fiber optic bundle. Each strand carries a single photon stream at 850nm wavelength.',
    color: '#FF00FF',
    titleId: 'gallery-fiber-optic-02-title',
    descId: 'gallery-fiber-optic-02-desc',
    imgId: 'gallery-img-fiber-optic-02-d4e5f6',
  },
  {
    id: 'neon-tube-03',
    title: 'NEON DISCHARGE TUBE',
    category: 'NEON',
    year: '1962',
    desc: 'Close-up of a neon gas discharge tube showing plasma filament structure at 20x magnification.',
    color: '#FF4400',
    titleId: 'gallery-neon-tube-03-title',
    descId: 'gallery-neon-tube-03-desc',
    imgId: 'gallery-img-neon-tube-03-g7h8i9',
  },
  {
    id: 'crt-phosphor-04',
    title: 'CRT PHOSPHOR DOTS',
    category: 'CRT DISPLAYS',
    year: '1971',
    desc: 'Electron beam striking phosphor triads on a 1971 Sony Trinitron CRT. RGB subpixels at 100x magnification.',
    color: '#00FF41',
    titleId: 'gallery-crt-phosphor-04-title',
    descId: 'gallery-crt-phosphor-04-desc',
    imgId: 'gallery-img-crt-phosphor-04-j1k2l3',
  },
  {
    id: 'plasma-panel-05',
    title: 'PLASMA PANEL CELL',
    category: 'PLASMA',
    year: '1992',
    desc: 'Single plasma display cell from a 1992 Fujitsu panel. Xenon-neon gas mixture at 0.1 atm pressure.',
    color: '#FFB300',
    titleId: 'gallery-plasma-panel-05-title',
    descId: 'gallery-plasma-panel-05-desc',
    imgId: 'gallery-img-plasma-panel-05-m4n5o6',
  },
  {
    id: 'led-matrix-06',
    title: 'LED MATRIX BOARD',
    category: 'LED DISPLAYS',
    year: '1983',
    desc: 'Overhead view of a 1983 Atari arcade LED score display. 8x8 pixel matrix with individual LED sockets.',
    color: '#0080FF',
    titleId: 'gallery-led-matrix-06-title',
    descId: 'gallery-led-matrix-06-desc',
    imgId: 'gallery-img-led-matrix-06-p7q8r9',
  },
  {
    id: 'nixie-tube-07',
    title: 'NIXIE TUBE GLOW',
    category: 'NIXIE',
    year: '1955',
    desc: 'Burroughs B-5750 Nixie tube displaying digit "8". Cold cathode neon glow discharge at 170V.',
    color: '#FF00FF',
    titleId: 'gallery-nixie-tube-07-title',
    descId: 'gallery-nixie-tube-07-desc',
    imgId: 'gallery-img-nixie-tube-07-s1t2u3',
  },
  {
    id: 'electroluminescent-08',
    title: 'EL WIRE CROSS-SECTION',
    category: 'ELECTROLUMINESCENT',
    year: '1988',
    desc: 'Cross-section of electroluminescent wire showing phosphor coating and copper core at 60x magnification.',
    color: '#00FFFF',
    titleId: 'gallery-electroluminescent-08-title',
    descId: 'gallery-electroluminescent-08-desc',
    imgId: 'gallery-img-electroluminescent-08-v4w5x6',
  },
  {
    id: 'laser-diode-09',
    title: 'LASER DIODE ARRAY',
    category: 'LASER',
    year: '1996',
    desc: 'Vertical-cavity surface-emitting laser (VCSEL) array. 850nm wavelength, 10mW output per emitter.',
    color: '#FF4400',
    titleId: 'gallery-laser-diode-09-title',
    descId: 'gallery-laser-diode-09-desc',
    imgId: 'gallery-img-laser-diode-09-y7z8a9',
  },
];

const CATEGORIES = ['ALL', 'LED DISPLAYS', 'FIBER OPTICS', 'NEON', 'CRT DISPLAYS', 'PLASMA', 'NIXIE', 'LASER'];

export default function GalleryGrid({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filtered = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="font-pixel transition-all"
            style={{
              fontSize: '8px',
              padding: '8px 14px',
              letterSpacing: '0.1em',
              background: activeCategory === cat ? '#00FFFF' : 'transparent',
              color: activeCategory === cat ? '#000000' : '#00FFFF',
              border: '1px solid #00FFFF',
              boxShadow: activeCategory === cat ? '0 0 12px #00FFFF' : '0 0 4px rgba(0,255,255,0.2)',
              cursor: 'pointer',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="led-card group cursor-pointer overflow-hidden"
            style={{ borderColor: item.color, boxShadow: `0 0 8px ${item.color}30` }}
            onClick={() => onOpenLightbox(item)}
          >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/3', background: '#050505' }}>
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ imageRendering: 'auto' }}
              />
              {/* Overlay on hover */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: 'rgba(0,0,0,0.6)' }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ border: `1px solid ${item.color}`, boxShadow: `0 0 16px ${item.color}` }}
                >
                  <ZoomIn size={20} color={item.color} />
                </div>
              </div>
              {/* Category badge */}
              <div
                className="absolute top-2 left-2 font-pixel px-2 py-1"
                style={{
                  fontSize: '7px',
                  background: '#000000',
                  border: `1px solid ${item.color}`,
                  color: item.color,
                  boxShadow: `0 0 6px ${item.color}`,
                  letterSpacing: '0.1em',
                }}
              >
                {item.category}
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3
                  id={item.titleId}
                  className="font-pixel leading-tight"
                  style={{ fontSize: '9px', color: item.color, textShadow: `0 0 6px ${item.color}`, letterSpacing: '0.05em' }}
                >
                  {item.title}
                </h3>
                <span
                  className="font-mono-tech text-xs ml-2 shrink-0"
                  style={{ color: 'rgba(0,255,255,0.4)' }}
                >
                  {item.year}
                </span>
              </div>
              <p
                id={item.descId}
                className="font-mono-tech text-xs leading-relaxed"
                style={{ color: 'rgba(0,255,255,0.6)', fontSize: '11px' }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { GALLERY_ITEMS };
