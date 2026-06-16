import { Cog, Gauge, Headphones, Wrench } from 'lucide-react';

const reasons = [
  {
    icon: Cog,
    title: 'German Engineering',
    description:
      'Every machine is designed and manufactured in Stuttgart using precision CNC machining, stress-relieved steel frames, and rigorous quality control at every stage.',
  },
  {
    icon: Gauge,
    title: 'Unmatched Precision',
    description:
      'Angular accuracy within 0.05 degrees and repeatability of 0.01mm ensure every fold meets the tightest tolerances, batch after batch.',
  },
  {
    icon: Wrench,
    title: 'Low Maintenance',
    description:
      'Self-lubricating bearings, hardened tooling, and modular component design minimize downtime. Average annual maintenance cost is under 2% of machine value.',
  },
  {
    icon: Headphones,
    title: 'Global Support',
    description:
      'With service centers in over 60 countries and 24/7 remote diagnostics, our support team ensures your production never stops.',
  },
];

const WhyChoose = () => {
  return (
    <section className="section-padding bg-charcoal">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="gold-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose ARTITECT
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            Fabricators worldwide trust our sheet metal folding machines
            for their most demanding applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-charcoal-light border border-stone-700/30 rounded-xl p-8 hover:border-amber/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-amber/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber/20 transition-colors">
                <Icon className="w-7 h-7 text-amber" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
