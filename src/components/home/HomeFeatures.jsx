import { Settings, Shield, Zap, Headphones, Award, BarChart2 } from 'lucide-react';

const features = [
  {
    icon: Settings,
    title: 'Precision Engineering',
    desc: 'Every machine is built to exacting tolerances, ensuring consistent, repeatable fold accuracy across all production runs.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Heavy-duty construction with premium-grade components designed for decades of reliable industrial operation.',
  },
  {
    icon: Zap,
    title: 'High Efficiency',
    desc: 'Optimized mechanical design and intuitive controls maximize throughput while minimizing operator fatigue.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    desc: 'Dedicated technical support team available to assist with installation, training, and ongoing maintenance.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    desc: 'All machines meet international safety and quality standards, backed by comprehensive certifications.',
  },
  {
    icon: BarChart2,
    title: 'Scalable Solutions',
    desc: 'From small workshops to large-scale manufacturing facilities — we have the right machine for every operation.',
  },
];

export default function HomeFeatures() {
  return (
    <section className="bg-brand-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-px bg-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">Why Choose Us</span>
            <div className="w-6 h-px bg-brand-gold" />
          </div>
          <h2 className="text-4xl font-bold text-brand-navy mb-4">The Artitect Advantage</h2>
          <p className="text-brand-gray max-w-xl mx-auto">
            We combine decades of engineering expertise with a commitment to quality that sets our machines apart.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl border border-brand-light hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{feature.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
