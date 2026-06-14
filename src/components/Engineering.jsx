import React from 'react';
import { Wrench, Zap, ShieldCheck, Settings } from 'lucide-react';

const Engineering = () => {
  const features = [
    {
      icon: Wrench,
      title: 'Built to Last',
      description: 'Heavy-gauge steel frames, precision-machined components, and industrial-grade hydraulics. Our machines routinely exceed 30 years of daily service.',
    },
    {
      icon: Zap,
      title: 'Effortless Operation',
      description: 'Intuitive controls, ergonomic design, and smooth hydraulic actuation mean less operator fatigue and higher productivity on every shift.',
    },
    {
      icon: ShieldCheck,
      title: 'Uncompromising Accuracy',
      description: 'Laser-aligned bending beams and digital angle control deliver repeatable precision to ±0.1mm — job after job, year after year.',
    },
    {
      icon: Settings,
      title: 'Service & Support',
      description: 'Global network of factory-trained technicians. Genuine spare parts available for every machine we have ever built. 24/7 technical assistance.',
    },
  ];

  return (
    <section id="engineering" className="py-20 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <div className="uppercase tracking-[3px] text-xs font-medium text-slate-500 mb-3">ENGINEERING EXCELLENCE</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 leading-tight">
            Every detail engineered<br />for the people who use it.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="w-6 h-6 text-slate-700" />
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

export default Engineering;
