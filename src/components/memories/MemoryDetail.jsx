import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, MapPin, Calendar, Tag } from 'lucide-react';
import { fetchMemoryById } from '../../api/memories';
import { EmotionBadge, LifeEventBadge, EraBadge, RegionBadge } from './Badges';

export default function MemoryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [memory, setMemory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchMemoryById(id)
      .then((m) => { setMemory(m); setLoading(false); })
      .catch((err) => { setError(err.message); setLoading(false); });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#050810' }}>
        <div className="text-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#4a9eff] border-t-transparent animate-spin mx-auto mb-4" />
          <p style={{ color: '#8899b4' }}>Retrieving memory…</p>
        </div>
      </div>
    );
  }

  if (error || !memory) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#050810' }}>
        <div className="text-center">
          <p className="font-cinzel text-xl mb-4" style={{ color: '#e8edf5' }}>Memory not found</p>
          <button onClick={() => navigate('/explore')} className="text-sm" style={{ color: '#4a9eff' }}>
            Return to Archive
          </button>
        </div>
      </div>
    );
  }

  const d = memory.data || {};

  return (
    <div className="min-h-screen" style={{ background: '#050810' }}>
      {/* Back nav */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-[#4a9eff]"
          style={{ color: '#8899b4' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Archive
        </button>
      </div>

      <article className="max-w-4xl mx-auto px-4 pb-20">
        {/* Header card */}
        <div
          className="rounded-2xl p-8 md:p-12 mb-8"
          style={{
            background: 'linear-gradient(135deg, #0d1526 0%, #111d35 100%)',
            border: '1px solid rgba(74,158,255,0.15)',
            boxShadow: '0 0 60px rgba(74,158,255,0.06)',
          }}
        >
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <EraBadge era={d.era} />
            <EmotionBadge emotion={d.emotion} />
            <LifeEventBadge lifeEvent={d.life_event} />
            <RegionBadge region={d.region} />
          </div>

          {/* Title */}
          <h1
            className="font-cinzel text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ color: '#e8edf5', textShadow: '0 0 40px rgba(74,158,255,0.2)' }}
          >
            {d.title}
          </h1>

          {/* Contributor info */}
          <div className="flex flex-wrap items-center gap-4 text-sm pb-6 border-b border-white/[0.07]">
            <div>
              <span style={{ color: '#8899b4' }}>Contributed by </span>
              <span className="font-semibold" style={{ color: '#e8edf5' }}>{d.contributor_name}</span>
            </div>
            {d.contributor_location && (
              <span className="flex items-center gap-1.5" style={{ color: '#8899b4' }}>
                <MapPin className="w-3.5 h-3.5" />
                {d.contributor_location}
              </span>
            )}
            {d.year && (
              <span className="flex items-center gap-1.5" style={{ color: '#8899b4' }}>
                <Calendar className="w-3.5 h-3.5" />
                {d.year}
              </span>
            )}
            {d.view_count != null && (
              <span className="flex items-center gap-1.5" style={{ color: '#8899b4' }}>
                <Eye className="w-3.5 h-3.5" />
                {d.view_count.toLocaleString()} views
              </span>
            )}
          </div>

          {/* Description */}
          <div className="mt-6">
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: '#c8d4e8', fontStyle: 'italic', lineHeight: '1.9' }}
            >
              "{d.description}"
            </p>
          </div>
        </div>

        {/* Tags */}
        {d.tags && d.tags.length > 0 && (
          <div
            className="rounded-xl p-6"
            style={{ background: '#0d1526', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4" style={{ color: '#4a5568' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#4a5568' }}>
                Tags
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {d.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{ background: 'rgba(255,255,255,0.05)', color: '#8899b4', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Archive ID */}
        <div className="mt-6 text-center">
          <p className="text-xs font-mono" style={{ color: '#2a3a52' }}>
            Archive ID: MEM-{String(memory.id).padStart(8, '0')} · Preserved {new Date(memory.created_at).getFullYear()}
          </p>
        </div>
      </article>
    </div>
  );
}
