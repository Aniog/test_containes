import React from 'react';
import { Shield, Zap, Settings, Award, Users, Wrench } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Uncompromising Accuracy',
    desc: 'Every machine is calibrated to ±0.1° before it leaves our floor. You get repeatable, production-grade bends from the first part to the last.'
  },
  {
    icon: Zap,
    title: 'Built for Throughput',
    desc: 'Fast cycle times without sacrificing control. Our double folders are designed to keep your operators moving and your shop profitable.'
  },
  {
    icon: Settings,
    title: 'Intuitive Operation',
    desc: 'We believe powerful machines should be easy to use. Clean interfaces, logical controls, and minimal training required.'
  },
  {
    icon: Award,
    title: 'Lifetime Frame Integrity',
    desc: 'Heavy, stress-relieved frames. No flex, no drift. Many of our earliest machines are still running daily after 15+ years.'
  },
  {
    icon: Users,
    title: 'Operator-First Design',
    desc: 'Ergonomic working heights, safe clamping sequences, and clear sightlines. Your team will actually enjoy using these machines.'
  },
  {
    icon: Wrench,
    title: 'Service That Matters',
    desc: 'Real technicians. Real parts. Real response times. We stand behind every machine with training, spares, and remote support.'
  }
];

const Engineering = () => {
  return (
    <section id="engineering" className="section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <div className="uppercase tracking-[3px] text-xs text-brand-gold font-semibold mb-3">ENGINEERING EXCELLENCE</div>
          <h2 className="font-serif text-5xl md:text-6xl tracking-[-1.5px] text-brand-dark leading-none mb-6">
            The details that make the difference.
          </h2>
          <p className="text-xl text-brand-slate">
            We obsess over the small things so your bends come out perfect every time. 
            This is what separates a good folder from a machine you can build a business on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card p-8 group">
                <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-colors">
                  <Icon className="w-6 h-6 text-brand-dark" />
                </div>
                <h3 className="font-serif text-2xl tracking-tight text-brand-dark mb-3">{feature.title}</h3>
                <p className="text-brand-slate leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 md:p-10 bg-brand-dark rounded-2xl text-white flex flex-col md:flex-row gap-8 md:items-center">
          <div className="flex-1">
            <div className="uppercase tracking-[2px] text-xs text-brand-gold mb-2">THE ARTITECT STANDARD</div>
            <div className="font-serif text-3xl tracking-tight">Every machine. Every time.</div>
          </div>
          <div className="flex-1 text-white/80 text-lg">
            We test each folder through 500+ cycles before approval. We measure. We adjust. 
            Only when it meets our standard does it earn the ARTITECT nameplate.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engineering;