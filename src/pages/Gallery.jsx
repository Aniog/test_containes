import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#050a0e] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4 block">
            Visual Archive
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-slate-50 mb-4">
            Microscopy{' '}
            <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            A curated collection of microscopy images revealing the hidden beauty of the microbial world. Click any image to explore in detail.
          </p>
        </div>

        <GalleryGrid />
      </div>
    </div>
  );
};

export default Gallery;
