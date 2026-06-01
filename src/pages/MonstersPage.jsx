import { useState, useMemo } from 'react';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';
import { monsters, MONSTER_TYPES, HABITATS } from '@/data/monsters';
import MonsterCard from '@/components/monsters/MonsterCard';

const sortOptions = [
  { value: 'name', label: 'Name A-Z' },
  { value: 'friendliness', label: 'Most Friendly' },
  { value: 'energy', label: 'Energy Level' },
  { value: 'magic', label: 'Magic Level' },
];

export default function MonstersPage() {
  const [query, setQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedHabitat, setSelectedHabitat] = useState('');
  const [childFriendly, setChildFriendly] = useState(false);
  const [petFriendly, setPetFriendly] = useState(false);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let results = [...monsters];

    if (query) {
      const q = query.toLowerCase();
      results = results.filter(m =>
        m.name.toLowerCase().includes(q) ||
        m.type.toLowerCase().includes(q) ||
        m.traits.some(t => t.toLowerCase().includes(q)) ||
        m.habitat.toLowerCase().includes(q) ||
        m.abilities.some(a => a.toLowerCase().includes(q))
      );
    }
    if (selectedType) results = results.filter(m => m.type === selectedType);
    if (selectedHabitat) results = results.filter(m => m.habitat === selectedHabitat);
    if (childFriendly) results = results.filter(m => m.childFriendly);
    if (petFriendly) results = results.filter(m => m.petFriendly);
    if (availableOnly) results = results.filter(m => m.available);

    results.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return b[sortBy] - a[sortBy];
    });

    return results;
  }, [query, selectedType, selectedHabitat, childFriendly, petFriendly, availableOnly, sortBy]);

  const activeFilters = [
    selectedType && { label: selectedType, clear: () => setSelectedType('') },
    selectedHabitat && { label: selectedHabitat, clear: () => setSelectedHabitat('') },
    childFriendly && { label: 'Kid-Friendly', clear: () => setChildFriendly(false) },
    petFriendly && { label: 'Pet-Friendly', clear: () => setPetFriendly(false) },
    availableOnly && { label: 'Available Only', clear: () => setAvailableOnly(false) },
  ].filter(Boolean);

  const clearAll = () => {
    setQuery('');
    setSelectedType('');
    setSelectedHabitat('');
    setChildFriendly(false);
    setPetFriendly(false);
    setAvailableOnly(false);
  };

  return (
    <div className="min-h-screen bg-[#fef9f0] pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 py-16 px-6 relative overflow-hidden">
        <div className="blob-bg w-64 h-64 bg-pink-400 top-0 right-0 opacity-20" />
        <div className="blob-bg w-48 h-48 bg-yellow-300 bottom-0 left-10 opacity-20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4 animate-float inline-block">🐾</div>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-4">Monster Database</h1>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Browse our complete collection of {monsters.length} magical creatures. Use filters to find your perfect match!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search & Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, type, trait, or ability..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="magic-input pl-12"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex gap-3">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="magic-input w-auto"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all border-2 ${
                showFilters || activeFilters.length > 0
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-purple-300'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilters.length > 0 && (
                <span className="w-5 h-5 bg-pink-500 text-white rounded-full text-xs flex items-center justify-center">
                  {activeFilters.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-white rounded-2xl p-6 shadow-md mb-6 animate-slide-up border border-purple-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Species Type</label>
                <select
                  value={selectedType}
                  onChange={e => setSelectedType(e.target.value)}
                  className="magic-input"
                >
                  <option value="">All Types</option>
                  {MONSTER_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Habitat</label>
                <select
                  value={selectedHabitat}
                  onChange={e => setSelectedHabitat(e.target.value)}
                  className="magic-input"
                >
                  <option value="">All Habitats</option>
                  {HABITATS.map(h => <option key={h} value={h}>{h}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Compatibility</label>
                <div className="space-y-2">
                  {[
                    { label: '👶 Kid-Friendly', value: childFriendly, set: setChildFriendly },
                    { label: '🐾 Pet-Friendly', value: petFriendly, set: setPetFriendly },
                    { label: '✅ Available Now', value: availableOnly, set: setAvailableOnly },
                  ].map(({ label, value, set }) => (
                    <label key={label} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={e => set(e.target.checked)}
                        className="w-4 h-4 accent-purple-500"
                      />
                      <span className="text-sm font-semibold text-gray-700">{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm font-semibold text-gray-500">Active filters:</span>
            {activeFilters.map((filter, i) => (
              <button
                key={i}
                onClick={filter.clear}
                className="flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold hover:bg-purple-200 transition-colors"
              >
                {filter.label}
                <X className="w-3 h-3" />
              </button>
            ))}
            <button
              onClick={clearAll}
              className="text-sm text-gray-400 hover:text-gray-600 underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 font-semibold">
            {filtered.length === 0 ? 'No creatures found' : `Showing ${filtered.length} creature${filtered.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-display text-2xl text-gray-600 mb-2">No creatures found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={clearAll}
              className="px-6 py-3 bg-purple-500 text-white rounded-xl font-semibold hover:bg-purple-600 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(monster => (
              <MonsterCard key={monster.id} monster={monster} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
