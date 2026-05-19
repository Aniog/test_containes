import GalleryGrid from '@/components/gallery/GalleryGrid';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#050d1a] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-cyan-400 text-sm uppercase tracking-widest mb-3">Gallery</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Microscopic <span className="text-cyan-400">Beauty</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
            A curated collection of stunning microscopy images — from scanning electron microscopy to fluorescence imaging. Click any image to view it in full.
          </p>
        </div>

        <GalleryGrid />
      </div>
    </div>
  );
}
