import { Eye, Layers, Zap, Globe } from 'lucide-react';

const stats = [
  { value: '10,000+', label: 'Microscopic Images' },
  { value: '200+', label: 'Species Documented' },
  { value: '50x–1000x', label: 'Magnification Range' },
  { value: '12', label: 'Research Partners' },
];

const features = [
  {
    icon: Eye,
    title: 'Ultra-High Resolution',
    desc: 'Every image captured at the highest possible magnification, revealing details invisible to the naked eye.',
  },
  {
    icon: Layers,
    title: 'Multi-Layer Imaging',
    desc: 'Confocal and electron microscopy techniques stack multiple focal planes into a single stunning image.',
  },
  {
    icon: Zap,
    title: 'Real-Time Discovery',
    desc: 'New specimens added weekly from laboratories and research institutions around the world.',
  },
  {
    icon: Globe,
    title: 'Global Collection',
    desc: 'Samples sourced from every continent — from deep ocean vents to mountain glaciers.',
  },
];

const HomeFeatures = () => {
  return (
    <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8">
      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-microsurface border border-microborder rounded-2xl p-6 text-center hover:border-microteal/40 transition-colors"
          >
            <p className="font-display font-bold text-3xl md:text-4xl text-microteal mb-2">
              {stat.value}
            </p>
            <p className="text-micromuted text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Features grid */}
      <div className="text-center mb-12">
        <p className="text-microteal text-sm font-semibold uppercase tracking-widest mb-3">
          Why MicroCosmos
        </p>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-microtext">
          Science Meets Beauty
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-microsurface border border-microborder rounded-2xl p-7 flex gap-5 hover:border-microteal/40 hover:shadow-lg hover:shadow-microteal/5 transition-all"
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-microteal/10 border border-microteal/20 flex items-center justify-center">
              <Icon className="w-6 h-6 text-microteal" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-microtext text-lg mb-2">{title}</h3>
              <p className="text-micromuted text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeFeatures;
