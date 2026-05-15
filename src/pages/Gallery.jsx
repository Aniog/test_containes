import { Link } from 'react-router-dom';
import { Layers, ChevronRight } from 'lucide-react';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  return (
    <main className="pt-16">
      {/* Page header */}
      <div className="bg-charcoal border-b border-border-dim">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="flex items-center gap-2 text-text-muted text-xs font-mono mb-6">
            <Link to="/" className="hover:text-bio-green transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-text-secondary">Slide Gallery</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <Layers className="w-6 h-6 text-bio-green" />
            <span className="font-mono text-[11px] text-bio-green tracking-widest uppercase">
              Digital Slide Box
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
            Interactive Slide Gallery
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed font-light">
            A curated collection of digital slides spanning multiple illumination modalities. Click any slide to examine specimen data, magnification parameters, and biological annotations.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { label: 'Brightfield', color: '#94A3B8' },
              { label: 'Darkfield', color: '#06B6D4' },
              { label: 'Fluorescence', color: '#10B981' },
            ].map(({ label, color }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                <span className="font-mono text-[11px] text-text-muted tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-obsidian py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <GalleryGrid />
        </div>
      </div>
    </main>
  );
};

export default Gallery;
