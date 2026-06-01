import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchFeaturedMemories } from '../../api/memories';
import { EmotionBadge, LifeEventBadge, EraBadge } from '../memories/Badges';
import { Eye, MapPin } from 'lucide-react';

export default function FeaturedMemories() {
  const [memories, setMemories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFeaturedMemories()
      .then(setMemories)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-20 md:py-28 px-4" style={{ background: '#080d1a' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#4a9eff' }}>
              Featured
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold" style={{ color: '#e8edf5' }}>
              Memories That Endure
            </h2>
          </div>
          <button
            onClick={() => navigate('/explore')}
            className="hidden md:flex items-center gap-2 text-sm transition-colors hover:text-[#4a9eff]"
            style={{ color: '#8899b4' }}
          >
            View all →
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-xl h-64 animate-pulse" style={{ background: '#0d1526' }} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {memories.map((memory, i) => {
              const d = memory?.data || {};
              const excerpt = d.description
                ? d.description.length > 140 ? d.description.slice(0, 140) + '…' : d.description
                : '';
              return (
                <article
                  key={memory.id}
                  className="memory-card rounded-xl border border-white/[0.07] cursor-pointer group"
                  style={{ background: '#0d1526' }}
                  onClick={() => navigate(`/memory/${memory.id}`)}
                >
                  <div
                    className="h-px w-full rounded-t-xl"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(245,200,66,0.5), transparent)' }}
                  />
                  <div className="p-5 md:p-6">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <EraBadge era={d.era} />
                      <EmotionBadge emotion={d.emotion} />
                      <LifeEventBadge lifeEvent={d.life_event} />
                    </div>
                    <h3
                      className="font-cinzel text-base md:text-lg font-semibold mb-2 leading-snug group-hover:text-[#4a9eff] transition-colors"
                      style={{ color: '#e8edf5' }}
                    >
                      {d.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#8899b4' }}>
                      {excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                      <div>
                        <span className="text-xs font-medium" style={{ color: '#e8edf5' }}>{d.contributor_name}</span>
                        {d.contributor_location && (
                          <div className="flex items-center gap-1 text-xs mt-0.5" style={{ color: '#4a5568' }}>
                            <MapPin className="w-3 h-3" />
                            {d.contributor_location}
                          </div>
                        )}
                      </div>
                      {d.view_count != null && (
                        <span className="flex items-center gap-1 text-xs" style={{ color: '#4a5568' }}>
                          <Eye className="w-3 h-3" />
                          {d.view_count.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <div className="text-center mt-8 md:hidden">
          <button
            onClick={() => navigate('/explore')}
            className="text-sm"
            style={{ color: '#4a9eff' }}
          >
            View all memories →
          </button>
        </div>
      </div>
    </section>
  );
}
