import { useState, useEffect, useRef } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MemoryCard from '../explore/MemoryCard';
import MemoryModal from '../explore/MemoryModal';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function FeaturedMemories() {
  const [memories, setMemories] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data: response, error } = await client
          .from('Memories')
          .select('*')
          .eq('is_featured', true)
          .order('view_count', { ascending: false })
          .range(0, 5);
        if (error) throw error;
        setMemories(response?.data?.list ?? []);
      } catch (err) {
        console.error('Error fetching featured memories:', err);
      }
    };
    fetch();
  }, []);

  if (memories.length === 0) return null;

  return (
    <section className="bg-[#050810] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-[#e8c97a] text-xs font-semibold uppercase tracking-widest mb-3">
              ✦ Featured Memories
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold">
              Stories That Endure
            </h2>
          </div>
          <Link
            to="/explore"
            className="hidden md:flex items-center gap-2 text-[#e8c97a] text-sm font-medium hover:gap-3 transition-all duration-200"
          >
            View all memories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} onClick={setSelected} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-[#e8c97a] text-sm font-medium"
          >
            View all memories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {selected && <MemoryModal memory={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
