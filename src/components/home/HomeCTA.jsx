import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d2040] to-[#0a1628] border border-cyan-400/20 p-10 md:p-16 text-center">
          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-400/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-violet-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <span className="text-cyan-400 text-xs font-medium font-mono-label tracking-widest uppercase mb-4 block">
              Join the Community
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-50 mb-4">
              Ready to Go{' '}
              <span className="gradient-text">Micro?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
              Explore hundreds of organisms, read cutting-edge science, and discover the universe hiding in plain sight.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/explore"
                className="inline-flex items-center justify-center gap-2 bg-cyan-400 text-slate-900 font-semibold px-8 py-4 rounded-full hover:bg-cyan-300 transition-colors duration-200"
              >
                Explore Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 border border-slate-600 text-slate-300 font-semibold px-8 py-4 rounded-full hover:border-cyan-400/60 hover:text-cyan-400 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
