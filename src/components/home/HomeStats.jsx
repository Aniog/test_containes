import { Droplets, Globe, Zap, Eye } from 'lucide-react';

const stats = [
  { icon: Globe, value: '1 Trillion+', label: 'Species estimated on Earth', color: 'text-teal-400' },
  { icon: Droplets, value: '10 Billion', label: 'Microbes per teaspoon of soil', color: 'text-cyan-400' },
  { icon: Zap, value: '3.8 Billion', label: 'Years of microbial evolution', color: 'text-emerald-400' },
  { icon: Eye, value: '0.001mm', label: 'Average bacterium size', color: 'text-purple-400' },
];

const HomeStats = () => {
  return (
    <section className="py-16 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 mb-4 ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className={`text-2xl md:text-3xl font-bold mb-1 ${color}`}>{value}</div>
              <div className="text-slate-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
