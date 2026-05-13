import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { animals } from '@/data/animals';
import { ArrowRight, Search } from 'lucide-react';

const categories = ['All', 'Mammal', 'Bird', 'Amphibian', 'Invertebrate'];
const habitats = ['All', 'Savanna', 'Ocean', 'Forest', 'Rainforest', 'Polar'];

const statusColor = (status) => {
  if (status === 'Endangered') return 'bg-red-100 text-red-700';
  if (status === 'Vulnerable') return 'bg-orange-100 text-orange-700';
  if (status === 'Near Threatened') return 'bg-yellow-100 text-yellow-700';
  return 'bg-green-100 text-green-700';
};

const Animals = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [habitat, setHabitat] = useState('All');
  const cardsRef = useRef(null);

  const filtered = animals.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || a.category === category;
    const matchHabitat = habitat === 'All' || a.habitat === habitat;
    return matchSearch && matchCategory && matchHabitat;
  });

  useEffect(() => {
    if (cardsRef.current) ImageHelper.loadImages(strkImgConfig, cardsRef.current);
  }, [filtered]);

  return (
    <div className="bg-[#f8f5f0] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#1b4332] py-16 px-4 text-center">
        <span className="text-[#e9c46a] text-sm font-semibold uppercase tracking-widest">Wildlife Encyclopedia</span>
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mt-2 mb-4">All Animals</h1>
        <p className="text-green-100 max-w-xl mx-auto text-lg">
          Browse our collection of fascinating animals from around the world.
        </p>
      </section>

      {/* Filters */}
      <section className="bg-white shadow-sm py-6 px-4 md:px-8 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search animals..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] text-gray-700"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  category === c
                    ? 'bg-[#2d6a4f] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {habitats.map((h) => (
              <button
                key={h}
                onClick={() => setHabitat(h)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  habitat === h
                    ? 'bg-[#e9c46a] text-[#1a1a1a]'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {h}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section ref={cardsRef} className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl font-semibold">No animals found</p>
            <p className="text-sm mt-2">Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((animal) => (
              <Link
                key={animal.id}
                to={`/animals/${animal.id}`}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={animal.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={`animals-page-${animal.id}-img-g7h8i9`}
                    data-strk-img={`[animals-page-${animal.id}-name] [animals-page-${animal.id}-habitat] animal wildlife`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                  />
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full ${statusColor(animal.status)}`}>
                    {animal.status}
                  </span>
                </div>
                <div className="p-4">
                  <span id={`animals-page-${animal.id}-habitat`} className="text-xs text-[#2d6a4f] font-semibold uppercase tracking-wide">
                    {animal.habitat} · {animal.category}
                  </span>
                  <h3 id={`animals-page-${animal.id}-name`} className="text-lg font-bold font-serif text-[#1a1a1a] mt-1 mb-1">
                    {animal.name}
                  </h3>
                  <p className="text-gray-400 text-xs italic mb-3">{animal.scientificName}</p>
                  <div className="flex items-center text-[#2d6a4f] text-sm font-semibold gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Animals;
