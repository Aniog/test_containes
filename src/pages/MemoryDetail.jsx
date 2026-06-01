import { useParams, Link, useNavigate } from 'react-router-dom';
import { ALL_MEMORIES } from '../data/memories';

export default function MemoryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const memory = ALL_MEMORIES.find((m) => m.id === id);

  if (!memory) {
    return (
      <main className="min-h-screen bg-void pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-6">◌</p>
          <h1 className="font-cinzel text-2xl text-mist mb-4">Memory Not Found</h1>
          <Link to="/explore" className="text-aurora-light hover:text-aurora transition-colors">
            ← Return to Archive
          </Link>
        </div>
      </main>
    );
  }

  const related = ALL_MEMORIES
    .filter((m) => m.id !== memory.id && (m.era === memory.era || m.emotion === memory.emotion))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-void pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-mist hover:text-starlight transition-colors mb-10 text-sm"
        >
          ← Back to Archive
        </button>

        {/* Memory header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-xs font-mono tracking-wide px-3 py-1.5 rounded-full border"
              style={{
                color: memory.eraColor,
                borderColor: `${memory.eraColor}40`,
                backgroundColor: `${memory.eraColor}15`,
              }}
            >
              {memory.eraLabel}
            </span>
            <span
              className="text-xs font-mono tracking-wide px-3 py-1.5 rounded-full border"
              style={{
                color: memory.emotionColor,
                borderColor: `${memory.emotionColor}40`,
                backgroundColor: `${memory.emotionColor}15`,
              }}
            >
              {memory.emotionIcon} {memory.emotionLabel}
            </span>
            <span className="text-xs font-mono tracking-wide px-3 py-1.5 rounded-full border border-stardust/40 bg-stardust/20 text-mist">
              {memory.lifeEventLabel}
            </span>
          </div>

          <h1 className="font-cinzel text-2xl md:text-3xl font-light text-starlight tracking-wide leading-relaxed mb-6">
            "{memory.excerpt}"
          </h1>
        </div>

        {/* Memory card */}
        <div className="bg-nebula border border-stardust/40 rounded-2xl p-8 mb-8">
          {/* Waveform placeholder */}
          <div className="flex items-center gap-1 mb-6 h-12">
            {Array.from({ length: 60 }, (_, i) => (
              <div
                key={i}
                className="flex-1 rounded-full"
                style={{
                  height: `${20 + Math.sin(i * 0.4) * 15 + Math.random() * 20}%`,
                  backgroundColor: memory.emotionColor,
                  opacity: 0.4 + Math.sin(i * 0.3) * 0.3,
                }}
              />
            ))}
          </div>

          {/* Play button */}
          <div className="flex items-center gap-4 mb-6">
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 glow-aurora"
              style={{ backgroundColor: memory.eraColor }}
            >
              <span className="text-white text-lg ml-0.5">▶</span>
            </button>
            <div>
              <p className="text-starlight text-sm font-medium">Play Memory</p>
              <p className="text-ghost text-xs font-mono">{memory.duration} seconds · {memory.views.toLocaleString()} plays</p>
            </div>
          </div>

          {/* Metadata grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-stardust/30">
            {[
              { label: 'Narrator', value: memory.narrator },
              { label: 'Year', value: memory.yearDisplay },
              { label: 'Region', value: memory.regionLabel },
              { label: 'Archived', value: new Date(memory.archived).getFullYear() },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-mono tracking-widest text-ghost uppercase mb-1">{item.label}</p>
                <p className="text-sm text-starlight font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coordinates */}
        <div className="bg-nebula border border-stardust/40 rounded-2xl p-6 mb-8">
          <p className="text-xs font-mono tracking-widest text-ghost uppercase mb-3">Memory Coordinates</p>
          <div className="flex items-center gap-6">
            <div>
              <p className="text-xs text-ghost mb-1">Latitude</p>
              <p className="font-mono text-nova-light text-sm">{memory.coordinates.lat.toFixed(4)}°</p>
            </div>
            <div>
              <p className="text-xs text-ghost mb-1">Longitude</p>
              <p className="font-mono text-nova-light text-sm">{memory.coordinates.lng.toFixed(4)}°</p>
            </div>
            <div>
              <p className="text-xs text-ghost mb-1">Archive ID</p>
              <p className="font-mono text-ghost text-sm">{memory.id.toUpperCase()}</p>
            </div>
          </div>
        </div>

        {/* Related memories */}
        {related.length > 0 && (
          <div>
            <h2 className="font-cinzel text-xl font-light text-starlight tracking-wide mb-6">
              Related Memories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((m) => (
                <Link
                  key={m.id}
                  to={`/memory/${m.id}`}
                  className="block bg-nebula border border-stardust/40 rounded-xl p-4 hover:border-aurora/50 transition-all duration-200"
                >
                  <p className="text-starlight text-xs leading-relaxed mb-3 line-clamp-3">
                    "{m.excerpt}"
                  </p>
                  <p className="text-xs text-ghost font-mono">{m.narrator} · {m.yearDisplay}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
