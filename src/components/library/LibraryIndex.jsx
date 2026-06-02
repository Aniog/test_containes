import { useState } from 'react';
import { ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';

const LIBRARY_DATA = [
  {
    id: 'led-fundamentals',
    code: 'LIB-001',
    title: 'LED FUNDAMENTALS',
    category: 'HARDWARE',
    status: 'INDEXED',
    color: '#00FFFF',
    entries: [
      {
        id: 'led-001-a',
        code: 'LED-001-A',
        title: 'P-N Junction Electroluminescence',
        type: 'THEORY',
        year: '1962',
        author: 'NICK HOLONYAK JR.',
        abstract: 'Semiconductor diode emitting visible light via radiative recombination of electron-hole pairs at the p-n junction. Forward bias voltage drives minority carrier injection.',
        specs: [
          { key: 'WAVELENGTH', val: '620-750nm (RED)' },
          { key: 'FORWARD VOLTAGE', val: '1.8-2.2V' },
          { key: 'EFFICIENCY', val: '0.1 lm/W (1962)' },
        ],
      },
      {
        id: 'led-001-b',
        code: 'LED-001-B',
        title: 'GaAsP Compound Semiconductor',
        type: 'MATERIAL',
        year: '1968',
        author: 'MONSANTO CORP.',
        abstract: 'Gallium arsenide phosphide alloy enabling tunable emission wavelength via phosphorus concentration. First commercially viable visible LED material system.',
        specs: [
          { key: 'BANDGAP', val: '1.65-2.26 eV' },
          { key: 'EMISSION', val: '590-700nm' },
          { key: 'SUBSTRATE', val: 'GaAs (100)' },
        ],
      },
    ],
  },
  {
    id: 'display-tech',
    code: 'LIB-002',
    title: 'DISPLAY TECHNOLOGIES',
    category: 'SYSTEMS',
    status: 'INDEXED',
    color: '#FF00FF',
    entries: [
      {
        id: 'disp-002-a',
        code: 'DISP-002-A',
        title: 'Seven-Segment LED Display',
        type: 'COMPONENT',
        year: '1970',
        author: 'HEWLETT-PACKARD',
        abstract: 'Multiplexed seven-segment numeric display using individual LED segments. Common-cathode or common-anode configuration. Driven by BCD-to-7-segment decoder ICs.',
        specs: [
          { key: 'SEGMENTS', val: '7 + DECIMAL' },
          { key: 'DIGIT HEIGHT', val: '0.3" - 4.0"' },
          { key: 'DRIVE CURRENT', val: '10-20mA/SEG' },
        ],
      },
      {
        id: 'disp-002-b',
        code: 'DISP-002-B',
        title: 'Dot Matrix LED Array',
        type: 'COMPONENT',
        year: '1975',
        author: 'LITRONIX INC.',
        abstract: 'Row-column multiplexed LED matrix for alphanumeric and graphical display. 5x7 or 8x8 pixel configurations. Persistence of vision enables full-matrix display with minimal drive circuitry.',
        specs: [
          { key: 'RESOLUTION', val: '5x7 / 8x8 px' },
          { key: 'MULTIPLEX RATIO', val: '1:5 / 1:8' },
          { key: 'SCAN RATE', val: '>100Hz' },
        ],
      },
    ],
  },
  {
    id: 'fiber-optics',
    code: 'LIB-003',
    title: 'FIBER OPTIC SYSTEMS',
    category: 'PHOTONICS',
    status: 'INDEXED',
    color: '#00FF41',
    entries: [
      {
        id: 'fib-003-a',
        code: 'FIB-003-A',
        title: 'Total Internal Reflection',
        type: 'THEORY',
        year: '1966',
        author: 'KAO & HOCKHAM',
        abstract: 'Light propagation through optical fiber via total internal reflection at core-cladding interface. Critical angle determined by refractive index ratio. Attenuation below 20dB/km enables long-distance transmission.',
        specs: [
          { key: 'CORE DIAMETER', val: '8-62.5 μm' },
          { key: 'NA', val: '0.12-0.50' },
          { key: 'ATTENUATION', val: '0.2 dB/km' },
        ],
      },
      {
        id: 'fib-003-b',
        code: 'FIB-003-B',
        title: 'Plastic Optical Fiber (POF)',
        type: 'MATERIAL',
        year: '1968',
        author: 'DU PONT',
        abstract: 'PMMA-core plastic optical fiber for short-range illumination and data transmission. Higher attenuation than glass fiber but superior flexibility and ease of termination.',
        specs: [
          { key: 'CORE MATERIAL', val: 'PMMA' },
          { key: 'DIAMETER', val: '0.25-3.0mm' },
          { key: 'ATTENUATION', val: '150-200 dB/km' },
        ],
      },
    ],
  },
  {
    id: 'neon-plasma',
    code: 'LIB-004',
    title: 'NEON & PLASMA DISCHARGE',
    category: 'GAS DISCHARGE',
    status: 'INDEXED',
    color: '#FFB300',
    entries: [
      {
        id: 'neo-004-a',
        code: 'NEO-004-A',
        title: 'Neon Glow Discharge',
        type: 'THEORY',
        year: '1910',
        author: 'GEORGES CLAUDE',
        abstract: 'Ionized neon gas emitting characteristic orange-red light at 585-703nm. Discharge maintained between 100-200V. Negative glow region produces most visible emission.',
        specs: [
          { key: 'EMISSION PEAK', val: '585nm / 703nm' },
          { key: 'PRESSURE', val: '1-10 Torr' },
          { key: 'VOLTAGE', val: '100-200V' },
        ],
      },
      {
        id: 'neo-004-b',
        code: 'NEO-004-B',
        title: 'Nixie Tube Cold Cathode',
        type: 'COMPONENT',
        year: '1955',
        author: 'BURROUGHS CORP.',
        abstract: 'Cold cathode neon-filled tube with stacked wire-form cathodes shaped as numerals 0-9. Selective cathode activation illuminates desired digit via neon glow discharge.',
        specs: [
          { key: 'FILL GAS', val: 'Ne + 0.5% Hg' },
          { key: 'ANODE VOLTAGE', val: '170V' },
          { key: 'DIGIT HEIGHT', val: '12-19mm' },
        ],
      },
    ],
  },
  {
    id: 'pixel-art-theory',
    code: 'LIB-005',
    title: 'PIXEL ART THEORY',
    category: 'AESTHETICS',
    status: 'INDEXED',
    color: '#0080FF',
    entries: [
      {
        id: 'pix-005-a',
        code: 'PIX-005-A',
        title: 'Subpixel Rendering',
        type: 'ALGORITHM',
        year: '1998',
        author: 'MICROSOFT CORP.',
        abstract: 'ClearType subpixel rendering exploits RGB stripe arrangement of LCD panels to triple effective horizontal resolution. Each color subpixel addressed independently for anti-aliasing.',
        specs: [
          { key: 'SUBPIXELS', val: 'R, G, B (STRIPE)' },
          { key: 'H-RESOLUTION', val: '3x EFFECTIVE' },
          { key: 'GAMMA', val: '2.2 (sRGB)' },
        ],
      },
      {
        id: 'pix-005-b',
        code: 'PIX-005-B',
        title: 'Dithering Algorithms',
        type: 'ALGORITHM',
        year: '1976',
        author: 'FLOYD & STEINBERG',
        abstract: 'Error diffusion dithering distributes quantization error to neighboring pixels, creating the illusion of intermediate tones in limited color palettes. Foundation of pixel art shading technique.',
        specs: [
          { key: 'ERROR KERNEL', val: '3x2 MATRIX' },
          { key: 'DIFFUSION', val: '7/16, 3/16, 5/16, 1/16' },
          { key: 'COLOR DEPTH', val: '1-8 BIT' },
        ],
      },
    ],
  },
];

function EntryRow({ entry, color }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="mb-2"
      style={{ border: `1px solid ${color}20` }}
    >
      <button
        className="w-full text-left px-4 py-3 flex items-center gap-3 transition-all"
        style={{
          background: expanded ? `${color}08` : 'transparent',
          cursor: 'pointer',
          border: 'none',
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <span style={{ color: color, opacity: 0.6 }}>
          {expanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
        </span>
        <span
          className="font-pixel shrink-0"
          style={{ fontSize: '8px', color: color, letterSpacing: '0.05em', minWidth: '100px' }}
        >
          {entry.code}
        </span>
        <span
          className="font-mono-tech text-sm flex-1"
          style={{ color: 'rgba(0,255,255,0.9)' }}
        >
          {entry.title}
        </span>
        <span
          className="font-pixel shrink-0 hidden sm:block"
          style={{ fontSize: '7px', color: 'rgba(0,255,255,0.4)', letterSpacing: '0.1em' }}
        >
          {entry.type}
        </span>
        <span
          className="font-mono-tech text-xs shrink-0 hidden md:block"
          style={{ color: 'rgba(0,255,255,0.3)' }}
        >
          {entry.year}
        </span>
      </button>

      {expanded && (
        <div
          className="px-4 pb-4"
          style={{ borderTop: `1px solid ${color}15`, background: `${color}05` }}
        >
          <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Abstract */}
            <div className="md:col-span-2">
              <div
                className="font-pixel mb-2"
                style={{ fontSize: '7px', color: color, letterSpacing: '0.15em' }}
              >
                ABSTRACT
              </div>
              <p
                className="font-mono-tech text-sm leading-relaxed"
                style={{ color: 'rgba(0,255,255,0.7)' }}
              >
                {entry.abstract}
              </p>
              <div className="mt-3 font-mono-tech text-xs" style={{ color: 'rgba(0,255,255,0.4)' }}>
                SOURCE: {entry.author}
              </div>
            </div>

            {/* Specs */}
            <div>
              <div
                className="font-pixel mb-2"
                style={{ fontSize: '7px', color: color, letterSpacing: '0.15em' }}
              >
                SPECIFICATIONS
              </div>
              <div className="space-y-2">
                {entry.specs.map((spec) => (
                  <div
                    key={spec.key}
                    className="flex justify-between items-center py-1"
                    style={{ borderBottom: `1px solid ${color}10` }}
                  >
                    <span
                      className="font-mono-tech text-xs"
                      style={{ color: 'rgba(0,255,255,0.4)', letterSpacing: '0.05em' }}
                    >
                      {spec.key}
                    </span>
                    <span
                      className="font-mono-tech text-xs font-bold"
                      style={{ color: color, textShadow: `0 0 6px ${color}` }}
                    >
                      {spec.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function LibrarySection({ section }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="mb-4"
      style={{
        border: `1px solid ${section.color}`,
        boxShadow: `0 0 8px ${section.color}20`,
      }}
    >
      {/* Section header */}
      <button
        className="w-full text-left px-6 py-4 flex items-center gap-4 transition-all"
        style={{
          background: open ? `${section.color}10` : '#0A0A0A',
          cursor: 'pointer',
          border: 'none',
        }}
        onClick={() => setOpen(!open)}
      >
        <span style={{ color: section.color }}>
          {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </span>
        <span
          className="font-pixel"
          style={{ fontSize: '9px', color: section.color, textShadow: `0 0 8px ${section.color}`, letterSpacing: '0.1em', minWidth: '80px' }}
        >
          {section.code}
        </span>
        <span
          className="font-pixel flex-1"
          style={{ fontSize: '9px', color: '#ffffff', letterSpacing: '0.05em' }}
        >
          {section.title}
        </span>
        <div className="hidden sm:flex items-center gap-4">
          <span
            className="font-pixel"
            style={{ fontSize: '7px', color: 'rgba(0,255,255,0.5)', letterSpacing: '0.1em' }}
          >
            {section.category}
          </span>
          <span
            className="font-pixel px-2 py-1"
            style={{
              fontSize: '7px',
              color: '#00FF41',
              border: '1px solid #00FF41',
              boxShadow: '0 0 6px #00FF41',
              letterSpacing: '0.1em',
            }}
          >
            {section.status}
          </span>
          <span
            className="font-mono-tech text-xs"
            style={{ color: 'rgba(0,255,255,0.3)' }}
          >
            {section.entries.length} ENTRIES
          </span>
        </div>
      </button>

      {/* Entries */}
      {open && (
        <div
          className="px-4 py-4"
          style={{ borderTop: `1px solid ${section.color}30`, background: '#050505' }}
        >
          {section.entries.map((entry) => (
            <EntryRow key={entry.id} entry={entry} color={section.color} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function LibraryIndex() {
  const [search, setSearch] = useState('');

  const filtered = search.trim()
    ? LIBRARY_DATA.filter(
        (s) =>
          s.title.toLowerCase().includes(search.toLowerCase()) ||
          s.category.toLowerCase().includes(search.toLowerCase()) ||
          s.entries.some(
            (e) =>
              e.title.toLowerCase().includes(search.toLowerCase()) ||
              e.type.toLowerCase().includes(search.toLowerCase())
          )
      )
    : LIBRARY_DATA;

  return (
    <div>
      {/* Search */}
      <div className="mb-8 relative">
        <div
          className="flex items-center"
          style={{ border: '1px solid #00FFFF', boxShadow: '0 0 8px rgba(0,255,255,0.2)' }}
        >
          <span
            className="font-pixel px-4 py-3 shrink-0"
            style={{ fontSize: '9px', color: '#00FFFF', borderRight: '1px solid rgba(0,255,255,0.3)' }}
          >
            SEARCH&gt;
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="QUERY INDEX..."
            className="flex-1 px-4 py-3 font-mono-tech text-sm outline-none"
            style={{
              background: 'transparent',
              color: '#00FFFF',
              border: 'none',
              caretColor: '#00FFFF',
            }}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="px-4 font-mono-tech text-xs"
              style={{ color: 'rgba(0,255,255,0.5)', background: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              CLR
            </button>
          )}
        </div>
      </div>

      {/* Table header */}
      <div
        className="hidden md:grid grid-cols-12 px-6 py-2 mb-2"
        style={{ borderBottom: '1px solid rgba(0,255,255,0.2)', background: '#050505' }}
      >
        {[
          { label: 'CODE', cols: 'col-span-2' },
          { label: 'TITLE', cols: 'col-span-5' },
          { label: 'CATEGORY', cols: 'col-span-2' },
          { label: 'STATUS', cols: 'col-span-2' },
          { label: 'ENTRIES', cols: 'col-span-1' },
        ].map((h) => (
          <div
            key={h.label}
            className={`font-pixel ${h.cols}`}
            style={{ fontSize: '7px', color: 'rgba(0,255,255,0.4)', letterSpacing: '0.15em' }}
          >
            {h.label}
          </div>
        ))}
      </div>

      {/* Sections */}
      {filtered.length > 0 ? (
        filtered.map((section) => (
          <LibrarySection key={section.id} section={section} />
        ))
      ) : (
        <div
          className="text-center py-16"
          style={{ border: '1px solid rgba(0,255,255,0.2)' }}
        >
          <div className="font-pixel text-neon-cyan/40 mb-2" style={{ fontSize: '10px' }}>
            NO RESULTS
          </div>
          <div className="font-mono-tech text-neon-cyan/30 text-sm">
            QUERY "{search}" RETURNED 0 MATCHES
          </div>
        </div>
      )}
    </div>
  );
}
