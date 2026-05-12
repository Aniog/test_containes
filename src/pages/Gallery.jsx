import GalleryGrid from '@/components/gallery/GalleryGrid';

export default function Gallery() {
  return (
    <>
      {/* Page hero */}
      <div className="pt-24 pb-16 px-6 md:px-12 lg:px-20 bg-cosmos-void border-b border-cosmos-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-amber-glow" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-glow">
              Exploration Gallery
            </span>
          </div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-star-white mb-4 leading-tight">
            Wonders of the Night Sky
          </h1>
          <p className="text-cosmos-subtle max-w-2xl text-lg leading-relaxed">
            High-definition astronomical photography — each image paired with a Physics Insight explaining the science behind the spectacle. Click any image to reveal the physics.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-cosmos-deep">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
