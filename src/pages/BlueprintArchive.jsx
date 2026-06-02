import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const archiveEntries = [
  {
    id: 'entry-01',
    code: 'TEC-001',
    titleId: 'archive-entry-01-title',
    descId: 'archive-entry-01-desc',
    photoImgId: 'archive-photo-01-img-a1b2c3',
    title: 'Civic Hall — Section A',
    year: '2019',
    type: 'Public / Civic',
    status: 'Completed',
    desc: 'Monolithic civic hall with exposed concrete shell. Structural grid expressed on facade.',
    scale: '1:200',
    sheets: '24',
  },
  {
    id: 'entry-02',
    code: 'TEC-002',
    titleId: 'archive-entry-02-title',
    descId: 'archive-entry-02-desc',
    photoImgId: 'archive-photo-02-img-d4e5f6',
    title: 'Residential Tower Block',
    year: '2021',
    type: 'Residential / High-Rise',
    status: 'Completed',
    desc: 'Stacked residential units with cantilevered balconies. Board-formed concrete throughout.',
    scale: '1:500',
    sheets: '38',
  },
  {
    id: 'entry-03',
    code: 'TEC-003',
    titleId: 'archive-entry-03-title',
    descId: 'archive-entry-03-desc',
    photoImgId: 'archive-photo-03-img-g7h8i9',
    title: 'Industrial Warehouse Conversion',
    year: '2020',
    type: 'Industrial / Cultural',
    status: 'Completed',
    desc: 'Former steel mill converted to cultural space. Original structure preserved and exposed.',
    scale: '1:100',
    sheets: '16',
  },
  {
    id: 'entry-04',
    code: 'TEC-004',
    titleId: 'archive-entry-04-title',
    descId: 'archive-entry-04-desc',
    photoImgId: 'archive-photo-04-img-j1k2l3',
    title: 'Subterranean Archive',
    year: '2022',
    type: 'Cultural / Archive',
    status: 'In Progress',
    desc: 'Below-grade archive facility. Concrete vaults with controlled light shafts.',
    scale: '1:150',
    sheets: '31',
  },
  {
    id: 'entry-05',
    code: 'TEC-005',
    titleId: 'archive-entry-05-title',
    descId: 'archive-entry-05-desc',
    photoImgId: 'archive-photo-05-img-m4n5o6',
    title: 'Bridge Pavilion',
    year: '2023',
    type: 'Infrastructure / Public',
    status: 'Concept',
    desc: 'Pedestrian bridge with integrated pavilion. Weathering steel and cast concrete.',
    scale: '1:250',
    sheets: '12',
  },
];

const BlueprintArchive = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-void pt-16 blueprint-grid">
      {/* Page header */}
      <div className="px-6 py-8 border-b border-iron flex items-end justify-between">
        <div>
          <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-ash mb-2">
            03 / BLUEPRINT ARCHIVE
          </p>
          <h2 className="font-sans text-light-grey font-light tracking-[0.2em] uppercase text-2xl">
            Technical Index
          </h2>
        </div>
        <div className="text-right hidden md:block">
          <p className="font-mono text-[9px] tracking-[0.2em] text-mid uppercase">
            {archiveEntries.length} Projects / {archiveEntries.reduce((a, e) => a + parseInt(e.sheets), 0)} Sheets
          </p>
        </div>
      </div>

      {/* Two-column layout: index + detail */}
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-120px)]">

        {/* Left: Technical index list */}
        <div className="md:w-1/2 border-r border-iron">
          {/* Column headers */}
          <div className="grid grid-cols-12 px-6 py-3 border-b border-iron">
            <span className="col-span-2 font-mono text-[8px] tracking-[0.25em] uppercase text-mid">Code</span>
            <span className="col-span-5 font-mono text-[8px] tracking-[0.25em] uppercase text-mid">Project</span>
            <span className="col-span-2 font-mono text-[8px] tracking-[0.25em] uppercase text-mid hidden md:block">Year</span>
            <span className="col-span-2 font-mono text-[8px] tracking-[0.25em] uppercase text-mid hidden md:block">Status</span>
            <span className="col-span-1 font-mono text-[8px] tracking-[0.25em] uppercase text-mid text-right">Sh.</span>
          </div>

          {/* Entries */}
          {archiveEntries.map((entry) => (
            <div
              key={entry.id}
              className="grid grid-cols-12 px-6 py-4 border-b border-iron cursor-crosshair transition-colors duration-200 group"
              style={{
                background: selected?.id === entry.id
                  ? 'rgba(255,255,255,0.04)'
                  : hoveredId === entry.id
                  ? 'rgba(255,255,255,0.02)'
                  : 'transparent',
              }}
              onClick={() => setSelected(selected?.id === entry.id ? null : entry)}
              onMouseEnter={() => setHoveredId(entry.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <span className="col-span-2 font-mono text-[9px] tracking-[0.2em] text-mid group-hover:text-ash transition-colors duration-200">
                {entry.code}
              </span>
              <div className="col-span-5">
                <p
                  id={entry.titleId}
                  className="font-sans text-[11px] tracking-[0.1em] uppercase text-light-grey group-hover:text-chalk transition-colors duration-200"
                >
                  {entry.title}
                </p>
                <p className="font-mono text-[8px] tracking-wide text-mid mt-0.5 hidden md:block">
                  {entry.type}
                </p>
              </div>
              <span className="col-span-2 font-mono text-[9px] text-mid self-center hidden md:block">
                {entry.year}
              </span>
              <div className="col-span-2 self-center hidden md:block">
                <span
                  className="font-mono text-[8px] tracking-[0.15em] uppercase px-2 py-0.5 border"
                  style={{
                    borderColor: entry.status === 'Completed' ? '#444' : entry.status === 'In Progress' ? '#666' : '#333',
                    color: entry.status === 'Completed' ? '#999' : entry.status === 'In Progress' ? '#bbb' : '#666',
                  }}
                >
                  {entry.status}
                </span>
              </div>
              <span className="col-span-1 font-mono text-[9px] text-mid self-center text-right">
                {entry.sheets}
              </span>
            </div>
          ))}
        </div>

        {/* Right: Detail / overlay panel */}
        <div className="md:w-1/2 relative overflow-hidden">
          {selected ? (
            <ArchiveDetail entry={selected} onClose={() => setSelected(null)} />
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
};

const ArchiveDetail = ({ entry, onClose }) => {
  return (
    <div className="relative h-full min-h-[500px] overflow-hidden">
      {/* Photo layer */}
      <img
        data-strk-img-id={entry.photoImgId}
        data-strk-img={`[${entry.descId}] [${entry.titleId}]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="800"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={entry.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'contrast(1.1) brightness(0.5) saturate(0)' }}
      />

      {/* Wireframe SVG overlay — mix-blend-mode screen */}
      <div
        className="absolute inset-0"
        style={{ mixBlendMode: 'screen', opacity: 0.35 }}
      >
        <WireframeSVG />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 blueprint-grid"
        style={{ opacity: 0.4, mixBlendMode: 'overlay' }}
      />

      {/* Content — blend-mode difference */}
      <div
        className="absolute inset-0 flex flex-col justify-between p-6"
        style={{ mixBlendMode: 'difference' }}
      >
        {/* Top */}
        <div className="flex items-start justify-between">
          <div>
            <p className="font-mono text-[8px] tracking-[0.35em] uppercase text-white opacity-50 mb-1">
              {entry.code} / SCALE {entry.scale}
            </p>
            <p className="font-mono text-[8px] tracking-[0.25em] uppercase text-white opacity-30">
              {entry.sheets} SHEETS
            </p>
          </div>
          <button
            onClick={onClose}
            className="font-mono text-[8px] tracking-[0.3em] uppercase text-white border-white opacity-50 hover:opacity-100 px-3 py-1"
            style={{ mixBlendMode: 'normal', borderColor: 'rgba(255,255,255,0.3)' }}
          >
            CLOSE
          </button>
        </div>

        {/* Bottom */}
        <div>
          <h3
            id={entry.titleId + '-detail'}
            className="font-sans text-white font-light tracking-[0.15em] uppercase mb-2"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.8rem)' }}
          >
            {entry.title}
          </h3>
          <p
            id={entry.descId}
            className="font-mono text-[9px] tracking-wide text-white opacity-50 leading-relaxed mb-3 max-w-sm"
          >
            {entry.desc}
          </p>
          <div className="flex gap-6">
            <div>
              <p className="font-mono text-[7px] tracking-[0.3em] uppercase text-white opacity-30 mb-0.5">Type</p>
              <p className="font-mono text-[9px] tracking-[0.15em] text-white opacity-60">{entry.type}</p>
            </div>
            <div>
              <p className="font-mono text-[7px] tracking-[0.3em] uppercase text-white opacity-30 mb-0.5">Year</p>
              <p className="font-mono text-[9px] tracking-[0.15em] text-white opacity-60">{entry.year}</p>
            </div>
            <div>
              <p className="font-mono text-[7px] tracking-[0.3em] uppercase text-white opacity-30 mb-0.5">Status</p>
              <p className="font-mono text-[9px] tracking-[0.15em] text-white opacity-60">{entry.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WireframeSVG = () => (
  <svg
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    style={{ color: '#cccccc' }}
  >
    {/* Floor plan wireframe */}
    <g stroke="#cccccc" strokeWidth="0.5" fill="none" opacity="0.8">
      {/* Outer shell */}
      <rect x="80" y="60" width="640" height="480" />
      {/* Inner grid */}
      <line x1="80" y1="180" x2="720" y2="180" />
      <line x1="80" y1="300" x2="720" y2="300" />
      <line x1="80" y1="420" x2="720" y2="420" />
      <line x1="240" y1="60" x2="240" y2="540" />
      <line x1="400" y1="60" x2="400" y2="540" />
      <line x1="560" y1="60" x2="560" y2="540" />
      {/* Structural columns */}
      <rect x="76" y="56" width="8" height="8" fill="#cccccc" />
      <rect x="236" y="56" width="8" height="8" fill="#cccccc" />
      <rect x="396" y="56" width="8" height="8" fill="#cccccc" />
      <rect x="556" y="56" width="8" height="8" fill="#cccccc" />
      <rect x="716" y="56" width="8" height="8" fill="#cccccc" />
      <rect x="76" y="176" width="8" height="8" fill="#cccccc" />
      <rect x="236" y="176" width="8" height="8" fill="#cccccc" />
      <rect x="396" y="176" width="8" height="8" fill="#cccccc" />
      <rect x="556" y="176" width="8" height="8" fill="#cccccc" />
      <rect x="716" y="176" width="8" height="8" fill="#cccccc" />
      <rect x="76" y="296" width="8" height="8" fill="#cccccc" />
      <rect x="236" y="296" width="8" height="8" fill="#cccccc" />
      <rect x="396" y="296" width="8" height="8" fill="#cccccc" />
      <rect x="556" y="296" width="8" height="8" fill="#cccccc" />
      <rect x="716" y="296" width="8" height="8" fill="#cccccc" />
      <rect x="76" y="416" width="8" height="8" fill="#cccccc" />
      <rect x="236" y="416" width="8" height="8" fill="#cccccc" />
      <rect x="396" y="416" width="8" height="8" fill="#cccccc" />
      <rect x="556" y="416" width="8" height="8" fill="#cccccc" />
      <rect x="716" y="416" width="8" height="8" fill="#cccccc" />
      <rect x="76" y="536" width="8" height="8" fill="#cccccc" />
      <rect x="236" y="536" width="8" height="8" fill="#cccccc" />
      <rect x="396" y="536" width="8" height="8" fill="#cccccc" />
      <rect x="556" y="536" width="8" height="8" fill="#cccccc" />
      <rect x="716" y="536" width="8" height="8" fill="#cccccc" />
      {/* Dimension lines */}
      <line x1="80" y1="30" x2="720" y2="30" strokeDasharray="4 4" opacity="0.4" />
      <line x1="50" y1="60" x2="50" y2="540" strokeDasharray="4 4" opacity="0.4" />
      {/* Diagonal cross */}
      <line x1="80" y1="60" x2="720" y2="540" opacity="0.15" />
      <line x1="720" y1="60" x2="80" y2="540" opacity="0.15" />
      {/* Section cut */}
      <line x1="80" y1="300" x2="720" y2="300" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.6" />
    </g>
    {/* Dimension annotations */}
    <g fill="#cccccc" fontSize="8" fontFamily="Space Mono, monospace" opacity="0.5">
      <text x="390" y="22" textAnchor="middle">64.0 m</text>
      <text x="38" y="304" textAnchor="middle" transform="rotate(-90, 38, 304)">48.0 m</text>
      <text x="160" y="175" textAnchor="middle" fontSize="7">16.0</text>
      <text x="320" y="175" textAnchor="middle" fontSize="7">16.0</text>
      <text x="480" y="175" textAnchor="middle" fontSize="7">16.0</text>
      <text x="640" y="175" textAnchor="middle" fontSize="7">16.0</text>
    </g>
  </svg>
);

const EmptyState = () => (
  <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-12 blueprint-grid">
    <div style={{ mixBlendMode: 'difference' }}>
      <div className="w-16 h-16 border border-iron mx-auto mb-6 flex items-center justify-center">
        <div className="w-8 h-8 border border-iron" />
      </div>
      <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-white opacity-30 text-center">
        Select a project to view
      </p>
      <p className="font-mono text-[8px] tracking-[0.2em] text-white opacity-20 text-center mt-2">
        Blueprint overlay / Photo composite
      </p>
    </div>
  </div>
);

export default BlueprintArchive;
