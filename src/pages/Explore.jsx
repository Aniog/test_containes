import OrganismGrid from '@/components/explore/OrganismGrid';
import EcosystemsSection from '@/components/explore/EcosystemsSection';

const Explore = () => {
  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-14">
        <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">Catalogue</span>
        <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-white mt-3 mb-4">
          Explore Microorganisms
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Browse our curated catalogue of microscopic life forms — from ancient bacteria to complex protozoa. Each entry includes scientific profiles, habitats, and stunning imagery.
        </p>
      </div>

      <OrganismGrid />
      <EcosystemsSection />
    </div>
  );
};

export default Explore;
