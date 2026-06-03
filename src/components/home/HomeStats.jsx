import { Eye, Dna, Globe, Zap } from 'lucide-react';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth', icon: Globe },
  { value: '99%', label: 'Species Undiscovered', icon: Eye },
  { value: '3.8B', label: 'Years of Evolution', icon: Dna },
  { value: '50%', label: 'Oxygen from Microbes', icon: Zap },
];

const HomeStats = () => {
  return (
    <section className="py-16 bg-cosmos-surface border-y border-cosmos-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center group">
              <div className="w-12 h-12 rounded-full bg-cosmos-teal/10 border border-cosmos-teal/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-cosmos-teal/20 transition-all">
                <Icon className="w-5 h-5 text-cosmos-teal" />
              </div>
              <div className="text-3xl md:text-4xl font-black text-cosmos-text mb-1">{value}</div>
              <div className="text-cosmos-muted text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
