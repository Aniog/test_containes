import { useNavigate } from 'react-router-dom';

export default function MissionSection() {
  const navigate = useNavigate();

  return (
    <section
      className="py-20 md:py-28 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080d1a 0%, #050810 100%)' }}
    >
      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(74,158,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className="inline-block text-4xl mb-8 animate-float"
          style={{ color: '#f5c842', filter: 'drop-shadow(0 0 12px rgba(245,200,66,0.4))' }}
        >
          ✦
        </div>

        <h2
          className="font-cinzel text-3xl md:text-5xl font-bold mb-6 leading-tight"
          style={{ color: '#e8edf5' }}
        >
          Why We Preserve
        </h2>

        <p
          className="text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto"
          style={{ color: '#8899b4' }}
        >
          In 2041, as humanity began preparing for the Great Migration — the first interstellar
          colonization effort in history — a question arose: what do we take with us?
        </p>

        <p
          className="text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto"
          style={{ color: '#8899b4' }}
        >
          Not just technology. Not just genetics. But the texture of human experience.
          The smell of rain on hot pavement. The sound of a grandmother's laugh.
          The weight of a child's hand in yours.
        </p>

        <p
          className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto"
          style={{ color: '#8899b4' }}
        >
          The Memory Archive was founded to ensure that wherever humanity goes,
          it carries the full record of where it came from.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/submit')}
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #4a9eff, #2563eb)',
              color: '#fff',
              boxShadow: '0 0 24px rgba(74,158,255,0.3)',
            }}
          >
            Add Your Memory
          </button>
          <button
            onClick={() => navigate('/explore')}
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide border border-white/20 text-[#e8edf5] hover:border-white/40 hover:bg-white/5 transition-all duration-200"
          >
            Explore the Archive
          </button>
        </div>
      </div>
    </section>
  );
}
