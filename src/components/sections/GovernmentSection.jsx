import { Shield, Scale, Users, Globe } from 'lucide-react';

const branches = [
  {
    icon: Globe,
    name: 'The Grand Council',
    role: 'Legislative Body',
    desc: 'A 500-member assembly representing all 47 major cities and 200+ settlements. Seats are allocated by population and rotated every 7 years through a combination of merit examination and community election.',
    color: 'bio-cyan',
  },
  {
    icon: Scale,
    name: 'The Tribunal of Depths',
    role: 'Judicial Authority',
    desc: 'Nine Arbiters appointed for life by the Grand Council. They interpret the Abyssian Charter — a living document updated every century — and resolve disputes between cities, corporations, and citizens.',
    color: 'glow-aqua',
  },
  {
    icon: Shield,
    name: 'The Executive Triad',
    role: 'Executive Branch',
    desc: 'Three co-equal Chancellors govern simultaneously, each responsible for a domain: Infrastructure & Science, Culture & Education, and Defense & Diplomacy. No single leader can act without consensus of two.',
    color: 'soft-teal',
  },
  {
    icon: Users,
    name: 'City Assemblies',
    role: 'Local Governance',
    desc: 'Each city maintains full autonomy over local affairs through elected City Assemblies. Local laws may differ from federal law, provided they do not violate the Charter of Depths or infringe on citizen rights.',
    color: 'bio-cyan',
  },
];

const principles = [
  { title: 'Collective Stewardship', desc: 'The ocean is not owned — it is tended. All citizens share responsibility for the health of the deep ecosystem.' },
  { title: 'Knowledge as Currency', desc: 'Education is the highest social value. Academic achievement, not wealth, determines social standing.' },
  { title: 'Radical Transparency', desc: 'All government proceedings are broadcast on the Bioluminescent Network. No closed sessions, no secret votes.' },
  { title: 'Depth Equality', desc: 'Citizens at 6,000m have identical rights to those at 2,000m. Depth of residence confers no privilege or penalty.' },
];

const GovernmentSection = () => {
  return (
    <section id="government" className="py-24 px-6 md:px-12 lg:px-24 bg-deep-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-bio-cyan/4 blur-[130px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-heading text-bio-cyan uppercase tracking-[0.3em] text-xs font-semibold">Governance</span>
          <h2 className="font-display text-4xl md:text-5xl text-pearl mt-3 tracking-wide">Government & Society</h2>
          <p className="text-muted-slate mt-4 max-w-2xl mx-auto font-sans leading-relaxed">
            Abyssia is governed by a tripartite republic refined over 14,000 years — a system that has never experienced a civil war, and has maintained democratic continuity since its founding.
          </p>
        </div>

        {/* Government Branches */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {branches.map((branch) => {
            const Icon = branch.icon;
            return (
              <div
                key={branch.name}
                className="border border-bio-cyan/15 bg-ocean-dark/60 backdrop-blur-md rounded-2xl p-7 hover:border-bio-cyan/30 hover:shadow-[0_0_40px_rgba(0,212,255,0.08)] transition-all duration-400 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-bio-cyan/10 border border-bio-cyan/20 flex items-center justify-center flex-shrink-0 group-hover:bg-bio-cyan/15 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-bio-cyan" />
                  </div>
                  <div>
                    <div className="font-heading text-xs text-glow-aqua uppercase tracking-widest font-semibold mb-1">{branch.role}</div>
                    <h3 className="font-display text-xl text-pearl mb-3 tracking-wide">{branch.name}</h3>
                    <p className="font-sans text-muted-slate text-sm leading-relaxed">{branch.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Founding Principles */}
        <div className="border border-bio-cyan/10 bg-midnight/30 rounded-2xl p-8 md:p-10">
          <h3 className="font-display text-2xl text-pearl mb-2 tracking-wide text-center">The Four Pillars of Abyssian Society</h3>
          <p className="text-muted-slate text-sm text-center mb-8 font-sans">Enshrined in the Charter of Depths, Year 1 of the Abyssian Calendar</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <div key={p.title} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-bio-cyan/10 border border-bio-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-display text-xs text-bio-cyan font-bold">{i + 1}</span>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-pearl mb-1">{p.title}</h4>
                  <p className="font-sans text-muted-slate text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-10 text-center">
          <blockquote className="font-display text-lg md:text-xl text-bio-cyan/80 italic max-w-3xl mx-auto leading-relaxed">
            "We do not govern the ocean. We govern ourselves within it."
          </blockquote>
          <cite className="font-heading text-xs text-muted-slate uppercase tracking-widest mt-3 block">
            — First Chancellor Aelara, Founding Address, 12,000 BCE
          </cite>
        </div>
      </div>
    </section>
  );
};

export default GovernmentSection;
