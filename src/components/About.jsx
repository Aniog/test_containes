import React from 'react';
import { Users, Globe, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '37', label: 'Years of Excellence', icon: Clock },
    { number: '2,400+', label: 'Machines Installed', icon: Users },
    { number: '68', label: 'Countries Served', icon: Globe },
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="uppercase tracking-[3px] text-xs font-medium text-slate-500 mb-4">OUR HERITAGE</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 leading-tight mb-6">
              Craftsmanship meets<br />industrial precision.
            </h2>
            <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
              <p>
                Founded in 1987, ARTITECT MACHINERY has become synonymous with 
                uncompromising quality in sheet metal fabrication equipment.
              </p>
              <p>
                Every machine we build carries forward a legacy of German-inspired 
                engineering, American manufacturing rigor, and a deep respect for 
                the craftspeople who rely on our equipment every day.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-slate-700" />
                  </div>
                  <div>
                    <div className="text-4xl font-semibold tracking-tighter text-slate-900 mb-1">{stat.number}</div>
                    <div className="text-slate-600">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
