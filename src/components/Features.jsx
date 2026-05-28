import { Aperture, Zap, Battery, Wind } from 'lucide-react';

const features = [
  {
    icon: Aperture,
    title: '100MP Sensor',
    description:
      'A full-frame 100-megapixel sensor delivers extraordinary resolution and dynamic range in any lighting condition.',
  },
  {
    icon: Zap,
    title: 'AI Autofocus',
    description:
      'Subject-tracking AI locks focus in under 0.03 seconds — never miss a decisive moment again.',
  },
  {
    icon: Battery,
    title: 'All-Day Battery',
    description:
      'Shoot up to 1,200 frames on a single charge. A dual-battery grip extends your session even further.',
  },
  {
    icon: Wind,
    title: 'Weather Sealed',
    description:
      'IPX6-rated dust and moisture resistance lets you shoot confidently in rain, snow, or desert heat.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Why Lumora</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Built for the Serious Photographer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-amber-400/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
