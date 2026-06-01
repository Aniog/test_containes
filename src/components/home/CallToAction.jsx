import { useNavigate } from 'react-router-dom';

export default function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-space-navy relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(79,142,247,0.08) 0%, transparent 70%)' }} />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-8 h-px bg-stardust-gold" />
          <span className="font-sans text-xs text-stardust-gold uppercase tracking-widest">Join the Archive</span>
          <span className="w-8 h-px bg-stardust-gold" />
        </div>

        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Your Memory Belongs<br />
          <span style={{ color: '#4f8ef7' }}>Among the Stars</span>
        </h2>

        <p className="font-sans text-slate-400 text-lg mb-10 leading-relaxed">
          The Archive is only as complete as the lives it contains.
          Every memory — no matter how small — is a thread in the tapestry
          of what it meant to be human on Earth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/contribute')}
            className="font-sans font-semibold text-base px-8 py-4 rounded-xl text-white transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #4f8ef7, #8b5cf6)',
              boxShadow: '0 0 40px rgba(79,142,247,0.25)',
            }}
          >
            Preserve Your Memory ✦
          </button>
          <button
            onClick={() => navigate('/explore')}
            className="font-sans text-base px-8 py-4 rounded-xl border border-slate-700 hover:border-nebula-blue/50 text-slate-300 hover:text-white transition-all duration-300"
          >
            Explore the Archive
          </button>
        </div>

        <p className="font-sans text-xs text-slate-600 mt-8 italic">
          "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself."
        </p>
      </div>
    </section>
  );
}
