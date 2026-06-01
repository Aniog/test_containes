import { useNavigate } from 'react-router-dom';
import { EMOTIONS, MEMORIES } from '../../data/memories';

export default function EmotionCloud() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 md:px-8 bg-space-black">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-inter text-memory-rose text-sm uppercase tracking-widest mb-3">
          Browse by Emotion
        </p>
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4">
          The Emotional Spectrum of Humanity
        </h2>
        <p className="font-inter text-slate-400 max-w-xl mx-auto mb-14">
          Every memory carries a feeling. Explore the archive through the lens of what it means to be alive.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {EMOTIONS.map((emotion) => {
            const count = MEMORIES.filter((m) => m.emotion === emotion.id).length;
            const size = count > 2 ? 'text-lg px-6 py-3' : 'text-sm px-4 py-2';

            return (
              <button
                key={emotion.id}
                onClick={() => navigate(`/explore?emotion=${emotion.id}`)}
                className={`${size} rounded-full border font-inter font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                style={{
                  backgroundColor: `${emotion.color}15`,
                  borderColor: `${emotion.color}40`,
                  color: emotion.color,
                  boxShadow: `0 0 0 0 ${emotion.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${emotion.color}40`;
                  e.currentTarget.style.backgroundColor = `${emotion.color}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = `${emotion.color}15`;
                }}
              >
                <span className="mr-2">{emotion.icon}</span>
                {emotion.label}
                {count > 0 && (
                  <span className="ml-2 text-xs opacity-60">({count})</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
