import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MEMORIES } from '../../data/memories';
import MemoryCard from '../memory/MemoryCard';

const FEATURED = MEMORIES.filter(m =>
  ['mem-014', 'mem-012', 'mem-018', 'mem-008', 'mem-002', 'mem-017'].includes(m.id)
);

export default function FeaturedMemories() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-mono text-xs text-star-400 uppercase tracking-widest mb-3">
              Featured Memories
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-slate-100">
              Stories That Endure
            </h2>
            <p className="text-slate-500 mt-3 max-w-lg">
              Curated from across the archive — memories that have resonated with millions of readers.
            </p>
          </div>
          <Link
            to="/explore"
            className="flex items-center gap-2 text-nebula-400 hover:text-nebula-300 font-mono text-sm tracking-wide transition-colors group flex-shrink-0"
          >
            View all memories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED.map((memory, i) => (
            <MemoryCard key={memory.id} memory={memory} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
