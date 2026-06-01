import { Link } from 'react-router-dom';
import { Upload, Star } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-nebula-800/20 via-space-800/40 to-star-600/10 pointer-events-none" />
      <div className="absolute inset-0 bg-nebula-radial opacity-60 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-400/30 bg-gold-400/10 mb-8">
          <Star className="w-3.5 h-3.5 text-gold-400" />
          <span className="font-mono text-xs text-gold-400 tracking-widest uppercase">
            Contribute Your Memory
          </span>
        </div>

        <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
          Your Story Belongs
          <br />
          <span className="text-glow-nebula text-nebula-300">Among the Stars</span>
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          The archive is built by humanity, for humanity. Every memory — no matter how small —
          is a thread in the tapestry we carry to the stars. Add yours before the migration begins.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/explore"
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-nebula-600 hover:bg-nebula-700 text-white font-semibold text-base transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] w-full sm:w-auto justify-center"
          >
            <Upload className="w-5 h-5" />
            Submit a Memory
          </Link>
          <Link
            to="/explore"
            className="px-8 py-4 rounded-xl border border-slate-600 hover:border-star-500 text-slate-300 hover:text-star-400 font-semibold text-base transition-all duration-300 w-full sm:w-auto text-center"
          >
            Browse the Archive
          </Link>
        </div>

        {/* Countdown */}
        <div className="mt-14 p-6 rounded-2xl border border-slate-700/40 bg-space-800/50 backdrop-blur-sm inline-block">
          <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-3">
            Time Until Final Migration Wave
          </p>
          <div className="flex items-center gap-6 justify-center">
            {[
              { value: '11', label: 'Years' },
              { value: '04', label: 'Months' },
              { value: '17', label: 'Days' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-cinzel text-3xl font-bold text-nebula-400 text-glow-nebula">
                  {value}
                </div>
                <div className="font-mono text-xs text-slate-600 uppercase tracking-widest mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
