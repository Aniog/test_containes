import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MEMORIES } from '../../data/memories';
import MemoryCard from '../explore/MemoryCard';
import MemoryModal from '../explore/MemoryModal';

export default function FeaturedMemories() {
  const navigate = useNavigate();
  const [selectedMemory, setSelectedMemory] = useState(null);
  const featured = MEMORIES.filter((m) => m.featured).slice(0, 6);

  return (
    <section className="py-24 px-4 md:px-8 bg-space-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-inter text-nebula-blue text-sm uppercase tracking-widest mb-3">
              Featured Memories
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white">
              Voices Across Time
            </h2>
          </div>
          <button
            onClick={() => navigate('/explore')}
            className="flex items-center gap-2 text-nebula-blue hover:text-blue-300 font-inter text-sm transition-colors group"
          >
            View all memories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} onClick={setSelectedMemory} />
          ))}
        </div>
      </div>

      {selectedMemory && (
        <MemoryModal memory={selectedMemory} onClose={() => setSelectedMemory(null)} />
      )}
    </section>
  );
}
