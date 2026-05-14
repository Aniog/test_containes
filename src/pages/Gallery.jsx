import GalleryGrid from '@/components/gallery/GalleryGrid';

export default function Gallery() {
  return (
    <main className="pt-20">
      {/* Page header */}
      <div className="py-20 px-6 lg:px-8 bg-charcoal border-b border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-bio-green" />
            <span className="font-mono text-xs tracking-widest uppercase text-bio-green">
              Digital Slide Box
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="font-grotesk font-bold text-5xl md:text-6xl text-slate-100 leading-tight mb-4">
                Slide Gallery
              </h1>
              <p className="font-inter text-slate-400 text-lg max-w-xl leading-relaxed">
                A curated collection of digital slides. Click any specimen to reveal magnification data, illumination type, and a detailed biological explanation.
              </p>
            </div>
            {/* Stats */}
            <div className="flex items-center gap-6 flex-shrink-0">
              {[
                { value: '4', label: 'Slides' },
                { value: '3', label: 'Illumination Types' },
                { value: '1000×', label: 'Max Magnification' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-grotesk font-bold text-2xl text-slate-100">{s.value}</div>
                  <div className="font-mono text-xs text-slate-500 tracking-widest uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-subtle">
            <span className="font-mono text-xs text-slate-600 uppercase tracking-wider">Illumination:</span>
            {[
              { label: 'Brightfield', color: 'text-bio-green', bg: 'bg-bio-green/10', border: 'border-bio-green/20' },
              { label: 'Darkfield', color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20' },
              { label: 'Fluorescence', color: 'text-phosphor', bg: 'bg-phosphor/10', border: 'border-phosphor/20' },
            ].map((item) => (
              <span
                key={item.label}
                className={`font-mono text-xs ${item.color} ${item.bg} px-3 py-1 rounded-full border ${item.border}`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery grid */}
      <div className="py-16 px-6 lg:px-8 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid />
        </div>
      </div>
    </main>
  );
}
