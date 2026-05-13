import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ConstellationsSection from '../components/knowledge/ConstellationsSection';
import StellarEvolutionSection from '../components/knowledge/StellarEvolutionSection';
import ObservationalPhysicsSection from '../components/knowledge/ObservationalPhysicsSection';

export default function KnowledgePage() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* Page Hero */}
      <div className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1600&q=80"
            alt="Milky Way"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/60 to-[#0B0F19]" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-400/30 bg-indigo-400/5 text-indigo-400 text-xs tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Knowledge Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-gray-50 tracking-tight mb-6 max-w-3xl">
            The Physics of the
            <br />
            <span className="text-amber-400">Observable Universe</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
            Three interconnected modules — from mapping the sky with coordinates,
            to tracing the life and death of stars, to understanding how we observe
            the cosmos across the full electromagnetic spectrum.
          </p>

          {/* Section Quick Links */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'A — Constellations & Coordinates', href: '#constellations' },
              { label: 'B — Stellar Evolution', href: '#stellar' },
              { label: 'C — Observational Physics', href: '#observational' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 rounded-full border border-gray-700 text-gray-400 text-sm hover:border-amber-400/40 hover:text-amber-400 transition-all duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div id="constellations">
        <ConstellationsSection />
      </div>

      <div id="stellar">
        <StellarEvolutionSection />
      </div>

      <div id="observational">
        <ObservationalPhysicsSection />
      </div>

      {/* CTA to Gallery */}
      <section className="py-20 px-6 md:px-12 border-t border-gray-800/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-light text-gray-50 mb-2">
              Ready to see the cosmos in action?
            </h3>
            <p className="text-gray-500">
              Explore our curated gallery of astronomical phenomena.
            </p>
          </div>
          <Link
            to="/gallery"
            className="group flex items-center gap-3 px-8 py-3.5 bg-amber-400 text-[#0B0F19] rounded-full font-medium text-sm tracking-wide hover:bg-amber-300 transition-all duration-200 flex-shrink-0"
          >
            View Gallery
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
