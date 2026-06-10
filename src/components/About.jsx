import React from 'react';
import { Target, Users, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Every machine is crafted with micron-level accuracy. Our folding systems deliver consistent, repeatable results across every production run."
    },
    {
      icon: Users,
      title: "Built for Operators",
      description: "We design with the people who use our machines every day. Intuitive controls, ergonomic design, and minimal training requirements."
    },
    {
      icon: Globe,
      title: "Global Reach, Local Support",
      description: "With service centers across 40+ countries, expert technicians are always within reach. Your production never waits."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="uppercase tracking-[3px] text-xs font-semibold text-slate-500 mb-4">EST. 1998</div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-none mb-8">
              Engineering excellence in every fold.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                For over 25 years, ARTITECT MACHINERY has been at the forefront of sheet metal fabrication technology. 
                We design and manufacture industrial-grade folding machines that combine German engineering precision 
                with practical, operator-focused innovation.
              </p>
              <p>
                From small workshops to large-scale manufacturing plants, our machines are trusted by fabricators 
                who demand uncompromising quality and reliability.
              </p>
            </div>
          </div>

          {/* Right Stats */}
          <div className="lg:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl tracking-tight text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
