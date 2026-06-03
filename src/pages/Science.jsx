import ScienceArticles from '@/components/science/ScienceArticles';

const Science = () => {
  return (
    <div className="min-h-screen bg-cosmos-bg pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="text-center mb-14">
          <span className="text-cosmos-teal text-xs font-medium uppercase tracking-widest">Science & Discovery</span>
          <h1 className="text-4xl md:text-5xl font-black text-cosmos-text mt-3 mb-4">
            The Science of the Invisible
          </h1>
          <p className="text-cosmos-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Deep dives into the biology, ecology, and medicine of the microbial world. From ancient discoveries to cutting-edge research.
          </p>
        </div>

        <ScienceArticles />
      </div>
    </div>
  );
};

export default Science;
