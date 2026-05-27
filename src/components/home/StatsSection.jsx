import { Dna, Globe, Zap, Eye } from 'lucide-react';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth', icon: Globe },
  { value: '3.8B', label: 'Years of Evolution', icon: Dna },
  { value: '50%', label: 'Oxygen from Microbes', icon: Zap },
  { value: '1000+', label: 'Species Catalogued', icon: Eye },
];

const StatsSection = () => {
  return (
    <section className="py-16 border-y border-slate-800 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-1">{value}</div>
              <div className="text-slate-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
