import { Target, Heart, Globe, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'We obsess over every pixel, every word, and every interaction to deliver experiences that are both beautiful and effective.',
  },
  {
    icon: Heart,
    title: 'Empathy',
    description: 'We build for real people — creators, entrepreneurs, and teams who deserve tools that work as hard as they do.',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Great design should be available to everyone. We make professional-grade web creation accessible to all skill levels.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We push the boundaries of what AI can do in creative fields, constantly researching and shipping new capabilities.',
  },
];

export default function BrandVision() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Dashed grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Dashed circle accents */}
      <div className="absolute top-16 left-16 w-48 h-48 rounded-full border border-dashed border-slate-700 opacity-50" />
      <div className="absolute bottom-16 right-16 w-64 h-64 rounded-full border border-dashed border-slate-700 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Vision statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Our Vision</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              A world where anyone
              <br />
              <span className="text-slate-400">can build beautifully.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              We founded ArcaneAI with a single belief: the barrier between a great idea and a great website should be zero. Not everyone has the budget for a design agency or the time to learn code — but everyone deserves a professional online presence.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Our AI doesn't just generate templates. It understands context, brand identity, and user psychology to create websites that genuinely work — for your visitors and for your business goals.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80&auto=format&fit=crop"
                alt="Team collaboration"
                className="w-full h-80 object-cover opacity-80"
              />
            </div>
            {/* Dashed corner */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t border-r border-dashed border-slate-600 rounded-tr-2xl" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b border-l border-dashed border-slate-600 rounded-bl-2xl" />
          </div>
        </div>

        {/* Values */}
        <div className="border-t border-dashed border-slate-800 pt-16">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-10 text-center">Our Values</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div key={val.title} className="p-6 rounded-2xl border border-dashed border-slate-800 hover:border-slate-600 transition-colors">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center mb-5">
                  <val.icon className="w-5 h-5 text-slate-300" />
                </div>
                <h3 className="font-semibold text-white mb-2">{val.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '2021', label: 'Founded' },
            { value: '42', label: 'Team members' },
            { value: '12', label: 'Countries' },
            { value: '$8M', label: 'Series A raised' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
