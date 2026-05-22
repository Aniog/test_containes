import { AlertTriangle, Heart, Radio, CloudSnow } from 'lucide-react';

const SAFETY_TIPS = [
  {
    icon: Heart,
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    title: 'Acclimatization',
    description:
      'Ascend no more than 300–500m per day above 3,000m. Follow the "climb high, sleep low" principle. Allow rest days every 3rd day to let your body adapt to reduced oxygen levels.',
  },
  {
    icon: CloudSnow,
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    title: 'Weather Windows',
    description:
      'Summit attempts require stable weather windows of 2–3 days minimum. Monitor jet stream forecasts and barometric pressure. Turn back if conditions deteriorate — the mountain will always be there.',
  },
  {
    icon: Radio,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    title: 'Communication',
    description:
      'Carry satellite communicators and establish regular check-in schedules with base camp. File detailed route plans with local authorities and your home emergency contact.',
  },
  {
    icon: AlertTriangle,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    title: 'Turn-Back Decisions',
    description:
      'Set firm turnaround times regardless of summit proximity. Most accidents occur on descent. Frostbite, HACE, and HAPE are life-threatening — descend immediately at first symptoms.',
  },
];

const ALTITUDE_ZONES = [
  { range: '0 – 2,500m', label: 'Low Altitude', risk: 'Minimal', color: 'bg-green-500' },
  { range: '2,500 – 3,500m', label: 'Moderate Altitude', risk: 'Low', color: 'bg-yellow-500' },
  { range: '3,500 – 5,500m', label: 'High Altitude', risk: 'Moderate', color: 'bg-orange-500' },
  { range: '5,500 – 8,000m', label: 'Very High Altitude', risk: 'High', color: 'bg-red-500' },
  { range: '8,000m+', label: 'Death Zone', risk: 'Extreme', color: 'bg-red-700' },
];

const SafetySection = ({ hideHeader = false }) => {
  return (
    <section id="safety" className="bg-slate-900 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        {!hideHeader && (
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Safety
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Safety First, Summit Second
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            The mountains demand respect. Understanding risks and following proven safety
            protocols is what separates successful expeditions from tragedies.
          </p>
        </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Safety tips */}
          <div className="space-y-5">
            {SAFETY_TIPS.map((tip) => {
              const Icon = tip.icon;
              return (
                <div
                  key={tip.title}
                  className="flex gap-4 bg-slate-950 border border-slate-700 rounded-2xl p-5 hover:border-amber-500/40 transition-all duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${tip.bg}`}>
                    <Icon className={`w-5 h-5 ${tip.color}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">{tip.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Altitude zones */}
          <div className="bg-slate-950 border border-slate-700 rounded-2xl p-6 md:p-8">
            <h3 className="text-white font-bold text-xl mb-6">Altitude Risk Zones</h3>
            <div className="space-y-4">
              {ALTITUDE_ZONES.map((zone) => (
                <div key={zone.range} className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${zone.color}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white text-sm font-medium">{zone.label}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        zone.risk === 'Extreme' ? 'bg-red-700/30 text-red-400' :
                        zone.risk === 'High' ? 'bg-red-500/20 text-red-400' :
                        zone.risk === 'Moderate' ? 'bg-orange-500/20 text-orange-400' :
                        zone.risk === 'Low' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {zone.risk}
                      </span>
                    </div>
                    <div className="text-slate-500 text-xs">{zone.range}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-800 pt-6">
              <h4 className="text-white font-semibold text-sm mb-3">Key Warning Signs</h4>
              <ul className="space-y-2">
                {[
                  'Severe headache unresponsive to ibuprofen',
                  'Loss of coordination or confusion (HACE)',
                  'Persistent dry cough or breathlessness at rest (HAPE)',
                  'Frostbite — white/waxy skin, loss of sensation',
                  'Extreme fatigue beyond normal exertion',
                ].map((sign) => (
                  <li key={sign} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                    {sign}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
