import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section className="py-28 px-6 lg:px-8 bg-obsidian">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-bio-green/50" />
          <div className="w-2 h-2 rounded-full bg-bio-green animate-pulse" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-bio-green/50" />
        </div>

        <h2 className="font-grotesk font-bold text-4xl md:text-6xl text-slate-100 leading-tight mb-6">
          Ready to Look
          <br />
          <span className="text-bio-green">Closer?</span>
        </h2>
        <p className="font-inter text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Dive into the Specimen Hub for detailed micrograph analysis, or browse the Slide Gallery for a curated collection of microscopic wonders.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/specimens"
            className="relative inline-flex items-center gap-2 px-8 py-4 bg-bio-green/15 backdrop-blur-md border border-bio-green/35 text-bio-green font-grotesk font-semibold rounded-xl shadow-lg shadow-bio-green/10 hover:bg-bio-green/25 hover:border-bio-green/55 hover:shadow-bio-green/20 transition-all duration-300 group overflow-hidden"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bio-green/40 to-transparent" />
            Open Specimen Hub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            to="/gallery"
            className="relative inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/15 text-slate-300 font-grotesk font-medium rounded-xl hover:bg-white/10 hover:border-white/25 hover:text-slate-100 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            View Slide Gallery
          </Link>
        </div>

        {/* Bottom decorative grid */}
        <div className="mt-20 grid grid-cols-3 gap-3 max-w-xs mx-auto opacity-20">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-1 rounded-full bg-bio-green"
              style={{ opacity: Math.random() * 0.8 + 0.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
