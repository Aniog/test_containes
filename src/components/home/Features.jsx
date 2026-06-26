import { Activity, ShieldCheck, Zap, Settings } from 'lucide-react';
import { forwardRef } from 'react';

const Features = forwardRef((props, ref) => {
  const feats = [
    {
      id: 'precision',
      title: 'Ultimate Precision',
      desc: 'Achieve perfectly folded edges with micro-adjustments and structural rigidity that guarantees flawless results every time.',
      icon: Activity,
    },
    {
      id: 'durability',
      title: 'Industrial Durability',
      desc: 'Built with heavy-duty cast iron and premium steel components built to last through decades of rigorous manufacturing.',
      icon: ShieldCheck,
    },
    {
      id: 'efficiency',
      title: 'High-Speed Efficiency',
      desc: 'Optimized double folding mechanisms reduce handling times by up to 50% compared to traditional folders.',
      icon: Zap,
    },
    {
      id: 'control',
      title: 'Intuitive Controls',
      desc: 'Elegant, user-friendly touchscreen interfaces make complex folding sequences accessible to operators of all skill levels.',
      icon: Settings,
    },
  ];

  return (
    <section id="features" ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="features-title" className="text-sm font-semibold text-orange-600 tracking-wider uppercase mb-3">Our Technology</h2>
          <p id="features-subtitle" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Engineered for Performance
          </p>
          <p className="text-lg text-slate-600">
            Artitect Machinery brings elegant design to robust industrial equipment. Our sheet metal folders are defined by strength, brains, and beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {feats.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

Features.displayName = 'Features';

export default Features;