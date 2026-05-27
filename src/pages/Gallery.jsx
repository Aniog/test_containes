import GalleryGrid from '@/components/gallery/GalleryGrid';

const Gallery = () => {
  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-14">
        <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">Visual Archive</span>
        <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-white mt-3 mb-4">
          Microscopy Gallery
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          A curated collection of microscopic imagery captured through scanning electron microscopy, fluorescence imaging, and other advanced techniques. Click any image to view full size.
        </p>
      </div>

      {/* Techniques legend */}
      <div className="flex flex-wrap gap-3 mb-12 p-5 bg-slate-900 border border-slate-800 rounded-2xl">
        <span className="text-slate-500 text-xs uppercase tracking-wider self-center mr-2">Techniques:</span>
        {[
          { label: 'SEM', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
          { label: 'Fluorescence', color: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
          { label: 'Phase Contrast', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
          { label: 'DIC Microscopy', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
          { label: 'Polarized Light', color: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
        ].map(({ label, color }) => (
          <span key={label} className={`text-xs px-3 py-1 rounded-full border ${color}`}>
            {label}
          </span>
        ))}
      </div>

      <GalleryGrid />
    </div>
  );
};

export default Gallery;
