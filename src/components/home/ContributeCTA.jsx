import { Link } from 'react-router-dom'
import { Star, ArrowRight } from 'lucide-react'

export default function ContributeCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 65%)',
        }}
      />

      {/* Decorative stars */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/30 animate-pulse"
          style={{
            left: `${10 + i * 8}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + (i % 3)}s`,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
        <div className="glass-card rounded-3xl p-10 md:p-16">
          <div className="w-16 h-16 rounded-2xl bg-nebula-600/20 border border-nebula-500/30 flex items-center justify-center mx-auto mb-8">
            <Star className="w-8 h-8 text-nebula-300" />
          </div>

          <h2 className="font-display text-3xl md:text-5xl text-white font-bold mb-6 leading-tight">
            Your Memory Belongs{' '}
            <span className="text-gradient-nebula italic">in the Stars</span>
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            The Great Migration begins in 2091. Before we leave, we are collecting every story,
            every moment, every fragment of what it meant to be human on Earth.
            Your memory matters. Add it to the archive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contribute"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-nebula-600 hover:bg-nebula-500 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-nebula-900/50 group"
            >
              Contribute Your Memory
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/explore"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-nebula-500/40 text-nebula-200 hover:border-nebula-400 hover:text-white font-medium text-base transition-all duration-200"
            >
              Explore First
            </Link>
          </div>

          <p className="text-slate-500 text-xs font-mono mt-8">
            All memories are preserved with full consent and verified by our archivists.
            Available in 847 languages.
          </p>
        </div>
      </div>
    </section>
  )
}
