import { Zap, Globe, FlaskConical, Eye } from 'lucide-react';

const facts = [
  {
    icon: Globe,
    title: 'Everywhere on Earth',
    description: 'Microorganisms inhabit every environment on Earth — from the stratosphere to hydrothermal vents 3km below the ocean surface.',
  },
  {
    icon: Zap,
    title: 'Powering the Planet',
    description: 'Microbial processes drive the nitrogen, carbon, and oxygen cycles that make complex life possible on Earth.',
  },
  {
    icon: FlaskConical,
    title: 'Medical Marvels',
    description: 'From antibiotics to insulin, microbes have been engineered to produce life-saving medicines that define modern healthcare.',
  },
  {
    icon: Eye,
    title: 'Invisible Giants',
    description: 'A single teaspoon of healthy soil contains more microorganisms than there are people on the entire planet.',
  },
];

const HomeWhyItMatters = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0d1f35] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#00d4ff]/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <span className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#e8f4f8] mt-3 mb-6">
              Microbes Run the World.<br />
              <span className="text-[#00d4ff]">We Just Live In It.</span>
            </h2>
            <p className="text-[#8ab4c8] leading-relaxed mb-6">
              Long before plants, animals, or humans appeared, microorganisms had already spent billions of years transforming a barren rock into a living world. They are not just part of the ecosystem — they are the ecosystem.
            </p>
            <p className="text-[#8ab4c8] leading-relaxed">
              Understanding microbial life is key to solving our greatest challenges: climate change, antibiotic resistance, food security, and the search for life beyond Earth.
            </p>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.title}
                  className="bg-[#112540] rounded-2xl border border-[rgba(0,212,255,0.12)] p-6 hover:border-[rgba(0,212,255,0.3)] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <h3 className="text-[#e8f4f8] font-semibold mb-2">{fact.title}</h3>
                  <p className="text-[#8ab4c8] text-sm leading-relaxed">{fact.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyItMatters;
