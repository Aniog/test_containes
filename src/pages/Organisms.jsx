import OrganismsList from '@/components/organisms/OrganismsList';

const Organisms = () => {
  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">
            Field Guide
          </span>
          <h1 className="text-5xl font-bold text-white mt-2 mb-4">
            Microscopic Organisms
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Meet the inhabitants of the microbial world — from ancient bacteria to
            indestructible tardigrades. Filter by kingdom to explore each group.
          </p>
        </div>
        <OrganismsList />
      </div>
    </div>
  );
};

export default Organisms;
