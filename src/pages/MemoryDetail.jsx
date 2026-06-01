import { useParams, Link, useNavigate } from 'react-router-dom';
import { MEMORIES, EMOTIONS, ERAS, LIFE_EVENTS } from '../data/memories';

const MemoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const memory = MEMORIES.find(m => m.id === id);

  if (!memory) {
    return (
      <main className="min-h-screen bg-void pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-6 opacity-20 font-cinzel">◈</div>
          <h1 className="font-cinzel text-2xl text-starlight mb-4">Memory Not Found</h1>
          <p className="text-mist mb-8">This fragment has drifted beyond reach.</p>
          <Link to="/explore" className="bg-aurora text-void font-semibold px-6 py-3 rounded-lg">
            Return to Archive
          </Link>
        </div>
      </main>
    );
  }

  const emotion = EMOTIONS.find(e => e.id === memory.emotion);
  const era = ERAS.find(e => e.id === memory.era);
  const lifeEvent = LIFE_EVENTS.find(e => e.id === memory.lifeEvent);

  const related = MEMORIES.filter(m => m.id !== memory.id && (m.emotion === memory.emotion || m.era === memory.era)).slice(0, 3);

  return (
    <main className="min-h-screen bg-void pt-16">
      <div className="relative bg-cosmos border-b border-stardust/30 py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 nebula-gradient pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-mist hover:text-starlight text-sm font-mono transition-colors mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Archive
          </button>

          <div className="flex flex-wrap gap-2 mb-6">
            {emotion && (
              <span
                className="text-xs font-mono px-3 py-1 rounded-full border flex items-center gap-1"
                style={{ color: emotion.color, borderColor: `${emotion.color}40`, backgroundColor: `${emotion.color}10` }}
              >
                {emotion.icon} {emotion.label}
              </span>
            )}
            {era && (
              <span
                className="text-xs font-mono px-3 py-1 rounded-full border"
                style={{ color: era.color, borderColor: `${era.color}40`, backgroundColor: `${era.color}10` }}
              >
                {era.label}
              </span>
            )}
            {lifeEvent && (
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-stardust/50 text-mist bg-nebula/50">
                {lifeEvent.label}
              </span>
            )}
            {memory.verified && (
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-aurora/40 text-aurora bg-aurora/10 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-aurora inline-block" />
                Verified Memory
              </span>
            )}
          </div>

          <h1 className="font-cinzel font-bold text-3xl md:text-4xl text-starlight mb-6 leading-tight">
            {memory.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-sm text-mist">
            <div className="flex items-center gap-2">
              <span className="text-fog font-mono text-xs">Contributor</span>
              <span className="text-starlight font-medium">{memory.contributor}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-fog font-mono text-xs">Year</span>
              <span className="text-starlight font-mono">{memory.year} CE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-fog font-mono text-xs">Location</span>
              <span className="text-starlight">{memory.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-nebula border border-stardust/50 rounded-2xl p-8 mb-8">
              <p className="text-starlight text-lg leading-relaxed font-light">
                {memory.fullText}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {memory.tags.map(tag => (
                <Link
                  key={tag}
                  to={`/explore?search=${tag}`}
                  className="px-3 py-1 rounded-full border border-stardust/50 text-fog text-xs font-mono hover:border-aurora/40 hover:text-mist transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-nebula border border-stardust/50 rounded-xl p-6">
              <h3 className="font-cinzel text-starlight text-sm font-semibold mb-4 uppercase tracking-wider">
                Memory Data
              </h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-fog text-xs font-mono uppercase tracking-wider mb-1">Coordinates</dt>
                  <dd className="text-mist text-xs font-mono">{memory.coordinates}</dd>
                </div>
                <div>
                  <dt className="text-fog text-xs font-mono uppercase tracking-wider mb-1">Fragments</dt>
                  <dd className="text-aurora text-sm font-mono font-semibold">{memory.fragmentCount.toLocaleString()}</dd>
                </div>
                <div>
                  <dt className="text-fog text-xs font-mono uppercase tracking-wider mb-1">Archive ID</dt>
                  <dd className="text-mist text-xs font-mono">{memory.id}</dd>
                </div>
                <div>
                  <dt className="text-fog text-xs font-mono uppercase tracking-wider mb-1">Status</dt>
                  <dd className={`text-xs font-mono ${memory.verified ? 'text-aurora' : 'text-warmth'}`}>
                    {memory.verified ? '✓ Verified & Preserved' : '◌ Pending Verification'}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="bg-nebula border border-stardust/50 rounded-xl p-6">
              <h3 className="font-cinzel text-starlight text-sm font-semibold mb-4 uppercase tracking-wider">
                Share This Memory
              </h3>
              <p className="text-mist text-xs mb-4">
                Help preserve this fragment by sharing it with others.
              </p>
              <button className="w-full border border-aurora/40 text-aurora text-sm py-2 rounded-lg hover:bg-aurora/10 transition-colors font-mono">
                Copy Archive Link
              </button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-cinzel font-semibold text-starlight text-2xl mb-8">
              Related Memories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(m => {
                const relEmotion = EMOTIONS.find(e => e.id === m.emotion);
                return (
                  <Link
                    key={m.id}
                    to={`/memory/${m.id}`}
                    className="block bg-nebula border border-stardust/50 rounded-xl p-5 memory-card-hover group"
                  >
                    {relEmotion && (
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded-full border inline-flex items-center gap-1 mb-3"
                        style={{ color: relEmotion.color, borderColor: `${relEmotion.color}40`, backgroundColor: `${relEmotion.color}10` }}
                      >
                        {relEmotion.icon} {relEmotion.label}
                      </span>
                    )}
                    <h3 className="font-cinzel text-starlight text-sm font-semibold mb-2 group-hover:text-aurora-glow transition-colors line-clamp-2">
                      {m.title}
                    </h3>
                    <p className="text-mist text-xs line-clamp-2">{m.excerpt}</p>
                    <div className="mt-3 text-fog text-xs font-mono">{m.contributor} · {m.year}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default MemoryDetail;
