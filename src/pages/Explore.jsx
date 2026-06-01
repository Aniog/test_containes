import ExploreGrid from '../components/explore/ExploreGrid';

const Explore = () => (
  <main className="min-h-screen bg-void pt-16">
    <div className="bg-cosmos border-b border-stardust/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-aurora text-xs font-mono tracking-widest uppercase mb-3">
          ◈ The Archive
        </div>
        <h1 className="font-cinzel font-bold text-4xl md:text-5xl text-starlight mb-3">
          Explore Memories
        </h1>
        <p className="text-mist max-w-2xl">
          Browse humanity's collective memory. Filter by era, emotion, life event, or region
          to find the stories that resonate with you.
        </p>
      </div>
    </div>
    <ExploreGrid />
  </main>
);

export default Explore;
