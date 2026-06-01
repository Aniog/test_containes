import { Link } from 'react-router-dom';

export default function MissionBanner() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-space-navy to-space-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-nebula-blue/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stellar-gold/30 bg-stellar-gold/10 text-stellar-gold text-xs font-medium tracking-widest uppercase mb-8">
          ✦ The Mission
        </div>

        <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
          When We Leave,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-stellar-gold to-memory-rose">
            We Take Everything With Us
          </span>
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
          The Interstellar Migration Initiative will carry 2.4 billion people to
          new worlds over the next century. But what of the memories that cannot
          fit in a ship? The smell of rain on red earth. The sound of a language
          spoken by only one living person. The weight of a grandmother's silence.
        </p>

        <p className="text-slate-400 text-base leading-relaxed mb-12 max-w-2xl mx-auto">
          The Memory Archive exists so that no human story is left behind. Every
          preserved memory becomes a star in the constellation we carry with us
          across the void.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/about"
            className="px-8 py-4 rounded-xl border border-stellar-gold/40 text-stellar-gold font-semibold hover:bg-stellar-gold/10 transition-all"
          >
            Learn About the Initiative
          </Link>
          <Link
            to="/submit"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-nebula-blue to-aurora-teal text-white font-semibold hover:opacity-90 transition-all hover:shadow-[0_0_30px_rgba(79,142,247,0.3)]"
          >
            Preserve Your Memory
          </Link>
        </div>
      </div>
    </section>
  );
}
