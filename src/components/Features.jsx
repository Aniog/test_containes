import { Shield, Clock, Globe, Wrench, Award, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Heavy-duty steel frame construction with reinforced components designed for decades of reliable operation in demanding environments.',
  },
  {
    icon: Clock,
    title: 'Fast Setup',
    description:
      'Intuitive controls and quick-change tooling systems minimize downtime between jobs, maximizing your production throughput.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description:
      'Our worldwide service network ensures spare parts availability and expert technical assistance wherever you operate.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description:
      'Modular design with accessible components makes routine maintenance straightforward, reducing service costs over time.',
  },
  {
    icon: Award,
    title: 'ISO Certified',
    description:
      'All machines meet strict ISO quality standards and CE safety requirements for peace of mind and regulatory compliance.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Round-the-clock technical support hotline and remote diagnostics keep your production lines running without interruption.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-[#0f1f2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] font-semibold tracking-widest uppercase text-sm mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The ARTITECT Advantage
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We combine German engineering precision with practical
            manufacturing know-how to deliver machines that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 md:p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-[#c9a84c]/20 rounded-lg flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-[#c9a84c]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
