import React from 'react';
import { Shield, Zap, Settings, Award, Wrench, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Every machine is constructed from premium-grade steel with precision-machined components. Our oldest machines are still running after 35+ years.',
  },
  {
    icon: Zap,
    title: 'Unmatched Precision',
    description: 'Achieve tolerances as tight as ±0.1mm. Our proprietary beam alignment system ensures perfect folds across the entire working length.',
  },
  {
    icon: Settings,
    title: 'Intuitive Operation',
    description: 'Designed with the operator in mind. Whether manual or CNC, every control is placed exactly where you need it for efficient, fatigue-free work.',
  },
  {
    icon: Award,
    title: 'German Engineering',
    description: 'Designed in Germany, refined through decades of real-world feedback. We combine traditional craftsmanship with modern manufacturing.',
  },
  {
    icon: Wrench,
    title: 'Minimal Maintenance',
    description: 'Self-lubricating bearings, sealed electronics, and corrosion-resistant finishes mean less downtime and lower lifetime ownership costs.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'With service partners in 28 countries and remote diagnostics built into every CNC model, help is always within reach.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="uppercase tracking-[3px] text-sm text-amber-700 font-medium mb-4">THE ARTITECT DIFFERENCE</div>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-4">
            Why fabricators<br />choose ARTITECT.
          </h2>
          <p className="max-w-xl mx-auto text-xl text-slate-600">
            It's not just about bending metal. It's about bending it perfectly, reliably, and efficiently — day after day, year after year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all">
                <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                  <Icon className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
