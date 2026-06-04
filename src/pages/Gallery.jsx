import GalleryGrid from '@/components/gallery/GalleryGrid';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#050d1a]">
      {/* Page Header */}
      <div className="relative pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-b from-[#0a1628] to-[#050d1a]">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-400/10 border border-violet-400/30 mb-6">
            <span className="text-violet-400 text-xs font-semibold uppercase tracking-widest">
              Visual Collection
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-50 mb-4 tracking-tight">
            Microscopy <span className="text-gradient-violet">Gallery</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            A stunning visual journey through the microscopic world — from single cells to complex organisms, captured in extraordinary detail.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <GalleryGrid />
      </div>
    </div>
  );
};

export default Gallery;
