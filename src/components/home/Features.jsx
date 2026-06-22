import React from 'react';
import { Microscope, Beaker, Zap, Globe } from 'lucide-react';

const Features = () => {
  const facts = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Optical Limits",
      text: "Light microscopes reach their theoretical limit at 200 nanometers. Beyond that, we use electrons to 'see'."
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      title: "Molecular Art",
      text: "Chemical reactions under magnification reveal chaotic beauty that resembles cosmic nebulae."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Super-Indestructible",
      text: "Tardigrades can survive the vacuum of space, extreme radiation, and temperatures near absolute zero."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Oxygen Engine",
      text: "Microscopic phytoplankton in the ocean produce more than 50% of the Earth's oxygen supply."
    }
  ];

  return (
    <section id="facts" className="py-24 bg-slate-950 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div key={index} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 transition-colors group">
              <div className="text-teal-400 mb-6 bg-teal-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-teal-500 group-hover:text-slate-950 transition-all duration-300">
                {fact.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-50 mb-4">{fact.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed">{fact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
