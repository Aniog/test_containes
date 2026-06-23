import React from 'react';
import { Microscope, Database, Globe, Layers } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Microscope className="w-8 h-8 text-teal-400" />,
      title: "SEM Visualization",
      desc: "Scanning Electron Microscopy provides unmatched topographic detail of nano-structures."
    },
    {
      icon: <Database className="w-8 h-8 text-teal-400" />,
      title: "Genetic Archives",
      desc: "Mapping the molecular blueprints that define all biological form and function."
    },
    {
      icon: <Layers className="w-8 h-8 text-teal-400" />,
      title: "Cellular Geometry",
      desc: "Exploring the mathematical precision of cellular walls and membrane dynamics."
    }
  ];

  return (
    <section id="about" className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 id="about-title" className="text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">Beyond the <br/><span className="text-teal-400 underline decoration-2 underline-offset-8">Visible Range</span></h2>
          <div className="space-y-12">
            {features.map((f, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="shrink-0 pt-1 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{f.title}</h4>
                  <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative aspect-square">
          <div 
            className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10"
            data-strk-bg-id="about-visual-bg"
            data-strk-bg="microscopic cell division fluorescent bioluminescence [about-title]"
            data-strk-bg-ratio="1x1"
            data-strk-bg-width="1000"
          />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -top-8 -left-8 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
      </div>
    </section>
  );
};

export default Features;
