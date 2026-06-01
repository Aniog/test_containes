import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MEMORIES } from '@/data/memories';
import MemoryCard from '@/components/memory/MemoryCard';
import MemoryModal from '@/components/memory/MemoryModal';

const featured = MEMORIES.filter((m) => m.featured).slice(0, 6);

export default function FeaturedMemories() {
  const navigate = useNavigate();
  const [selectedMemory, setSelectedMemory] = useState(null);

  return (
    <section className="py-20 md:py-28 bg-space-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-stardust-gold" />
              <span className="font-sans text-xs text-stardust-gold uppercase tracking-widest">
                Featured Memories
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Voices Across Time
            </h2>
            <p className="font-sans text-slate-400 mt-3 max-w-lg">
              Hand-curated memories that capture the breadth of human experience —
              from ancient harvests to the last concerts before departure.
            </p>
          </div>
          <button
            onClick={() => navigate('/explore')}
            className="flex-shrink-0 font-sans text-sm border border-slate-700 hover:border-nebula-blue/50 text-slate-300 hover:text-white px-6 py-3 rounded-xl transition-all duration-200"
          >
            View all memories →
          </button>
        </div>

        {/* Memory grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((memory) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              onClick={setSelectedMemory}
            />
          ))}
        </div>
      </div>

      {selectedMemory && (
        <MemoryModal memory={selectedMemory} onClose={() => setSelectedMemory(null)} />
      )}
    </section>
  );
}
