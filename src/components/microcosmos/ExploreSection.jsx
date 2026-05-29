import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Eye, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Invisible to the Naked Eye',
    description:
      'Billions of organisms share our world, yet remain completely invisible without magnification. MicroCosmos brings them into stunning focus.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Zap,
    title: 'Electrifying Complexity',
    description:
      'From the electric signals of neurons to the chemical warfare of bacteria, microscopic life is more complex and dramatic than anything we imagined.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  {
    icon: Globe,
    title: 'A World Within Our World',
    description:
      'Every drop of water, every grain of soil, every breath of air teems with life. The microcosmos is everywhere — and it shapes everything.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
];

const ExploreSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-cyan-400 uppercase tracking-widest font-medium mb-3">What is MicroCosmos?</p>
          <h2 id="explore-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
            The Universe Beneath the Lens
          </h2>
          <p id="explore-subtitle" className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey into the microscopic realm — where life is stranger, more beautiful, and more complex than anything visible to the human eye.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((f) => (
            <div
              key={f.title}
              className={`${f.bg} border ${f.border} rounded-2xl p-8 hover:shadow-lg transition-all duration-300`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${f.bg} border ${f.border} mb-5`}>
                <f.icon className={`w-6 h-6 ${f.color}`} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Large feature image with text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-violet-400 uppercase tracking-widest font-medium mb-3">Did you know?</p>
            <h3 id="explore-fact-title" className="text-3xl md:text-4xl font-bold text-white mb-5">
              You Are Never Alone
            </h3>
            <p id="explore-fact-desc" className="text-gray-400 text-lg leading-relaxed mb-6">
              The human body hosts trillions of microorganisms — outnumbering your own cells. These microscopic companions regulate digestion, immunity, and even mood. The microcosmos isn't just out there — it's inside you.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '37 Trillion', label: 'Human cells' },
                { value: '38 Trillion', label: 'Microbes in your body' },
                { value: '1,000+', label: 'Bacterial species on skin' },
                { value: '10,000+', label: 'Microbial species in gut' },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                  <div className="text-cyan-400 font-bold text-xl">{stat.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Human microbiome microscopy"
              className="w-full h-full object-cover"
              data-strk-img-id="explore-img-mc002"
              data-strk-img="[explore-fact-desc] [explore-fact-title] [explore-subtitle] [explore-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
