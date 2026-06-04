import { Info } from 'lucide-react';
import AboutTeam from '@/components/about/AboutTeam';

const About = () => {
  return (
    <div className="min-h-screen bg-[#050b18]">
      {/* Page Header */}
      <div className="relative pt-32 pb-16 hero-gradient overflow-hidden">
        <div className="orb w-72 h-72 bg-teal-500/15 top-0 right-1/4 animate-pulse-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-medium px-4 py-2 rounded-full mb-6">
            <Info className="w-3 h-3" />
            About MicroCosmos
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Mission
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            MicroCosmos was founded with a single belief: the microscopic world is one of the most 
            beautiful and important frontiers of human knowledge — and everyone deserves access to it.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="font-display font-bold text-3xl text-slate-100 mb-6">
              Why the Microscopic World Matters
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Microorganisms are the foundation of all life on Earth. They oxygenated our atmosphere, 
                created the soil that feeds us, and drive the nutrient cycles that sustain every ecosystem. 
                Yet most people have never seen one.
              </p>
              <p>
                We built MicroCosmos to change that. Through stunning imagery, rigorous science, and 
                accessible storytelling, we bring the invisible world into focus — revealing the extraordinary 
                complexity and beauty that exists just beyond the limits of human sight.
              </p>
              <p>
                From the indestructible tardigrade to the oxygen-producing diatom, every organism in our 
                collection tells a story about the resilience, ingenuity, and interconnectedness of life.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '500+', label: 'Organisms Catalogued', color: 'text-cyan-300' },
              { value: '50+', label: 'Research Articles', color: 'text-teal-300' },
              { value: '12', label: 'Expert Scientists', color: 'text-violet-300' },
              { value: '2M+', label: 'Curious Readers', color: 'text-amber-300' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#0d1526] border border-cyan-500/15 rounded-2xl p-6 text-center card-hover">
                <div className={`font-display font-bold text-3xl mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <AboutTeam />
      </div>
    </div>
  );
};

export default About;
