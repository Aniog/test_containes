import { Link } from 'react-router-dom';
import { memories } from '@/data/memories';
import MemoryCard from '@/components/explorer/MemoryCard';
import { ArrowRight } from 'lucide-react';

const featured = memories.filter(m => m.intensity >= 0.9).slice(0, 3);

export default function HomeFeatured() {
  return (
    <section className="bg-cosmos-950 py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-mono text-xs text-nebula-400 uppercase tracking-widest mb-3">
              Featured Memories
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-text-primary font-semibold">
              Stories That Define Us
            </h2>
          </div>
          <Link
            to="/explore"
            className="flex items-center gap-2 text-nebula-300 hover:text-nebula-200 font-semibold transition-colors group"
          >
            View all memories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map(memory => (
            <MemoryCard key={memory.id} memory={memory} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
