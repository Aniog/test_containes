import ScienceArticles from '@/components/science/ScienceArticles';

export default function Science() {
  return (
    <div className="pt-16 bg-[#050d1a] min-h-screen">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <span className="text-cyan-400 text-xs font-medium font-mono-label tracking-widest uppercase mb-4 block">
          Research & Discovery
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
          Science Articles
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Deep dives into the latest microbiology research, from gut health to astrobiology — written for curious minds.
        </p>
      </div>

      <ScienceArticles />
    </div>
  );
}
