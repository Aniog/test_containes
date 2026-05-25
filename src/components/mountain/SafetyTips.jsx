import { AlertTriangle, CheckCircle } from 'lucide-react';

const tips = [
  { tip: 'Acclimatize properly — never rush altitude gain. Follow the "climb high, sleep low" principle.' },
  { tip: 'Always check weather forecasts before and during your climb. Turn back if conditions deteriorate.' },
  { tip: 'Never climb alone. Always have a partner or guide, especially on technical terrain.' },
  { tip: 'Leave a detailed trip plan with someone at home, including your expected return time.' },
  { tip: 'Carry emergency shelter, first aid, and enough food and water for an unplanned night out.' },
  { tip: 'Know the signs of altitude sickness: headache, nausea, dizziness. Descend immediately if symptoms worsen.' },
];

const SafetyTips = () => (
  <section className="py-20 md:py-28 px-6 bg-slate-900 border-t border-slate-800">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <span className="inline-block bg-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-amber-400/30">
            Stay Safe
          </span>
          <h2 className="font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">
            Safety First,<br />
            <span className="text-sky-400">Summit Second</span>
          </h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            The mountains will always be there. The most important rule in climbing is knowing when
            to turn back. More climbers die on the descent than the ascent — summit fever is real
            and deadly.
          </p>
          <div className="bg-amber-400/10 border border-amber-400/30 rounded-2xl p-5 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-amber-200 text-sm leading-relaxed">
              <strong className="text-amber-400">Remember:</strong> Getting to the top is optional.
              Getting back down is mandatory. No summit is worth your life.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {tips.map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-slate-800 border border-slate-700 rounded-xl p-4">
              <CheckCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <p className="text-slate-300 text-sm leading-relaxed">{item.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SafetyTips;
