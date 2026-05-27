import { Zap, Globe, FlaskConical, Eye } from 'lucide-react';

const stats = [
  { icon: Globe, value: '1 Trillion+', label: 'Microbial Species', desc: 'Estimated species on Earth' },
  { icon: Zap, value: '3.8 Billion', label: 'Years of Evolution', desc: 'Microbes predate all complex life' },
  { icon: FlaskConical, value: '10:1', label: 'Microbes to Human Cells', desc: 'In the human body' },
  { icon: Eye, value: '0.001mm', label: 'Average Bacteria Size', desc: 'Invisible to the naked eye' },
];

export default function HomeStats() {
  return (
    <section className="py-20 px-4 md:px-8 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label, desc }) => (
            <div key={label} className="text-center group">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500/20 transition-colors">
                <Icon className="w-7 h-7 text-teal-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent mb-1">
                {value}
              </div>
              <div className="text-slate-100 font-semibold text-sm mb-1">{label}</div>
              <div className="text-slate-500 text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
