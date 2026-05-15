import { Layers } from 'lucide-react';
import GalleryGrid from '../components/gallery/GalleryGrid';

export default function Gallery() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 bg-charcoal border-b border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-5 h-5 text-bio-cyan" strokeWidth={1.5} />
            <span className="font-mono-lab text-bio-cyan text-xs tracking-widest uppercase">
              Interactive Slide Gallery
            </span>
          </div>
          <h1 className="font-grotesk font-bold text-primary-text text-4xl md:text-5xl mb-4">
            Digital Slide Box
          </h1>
          <p className="font-inter text-secondary-text text-base max-w-2xl leading-relaxed">
            A curated collection of digital microscopy slides spanning multiple imaging
            modalities and biological domains. Click any slide to reveal full specimen
            data, magnification parameters, and structural annotations.
          </p>
        </div>
      </section>

      {/* Gallery content */}
      <section className="py-16 px-6 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
