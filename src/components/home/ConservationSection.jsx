import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { AlertTriangle, Heart, Globe, TreePine } from 'lucide-react';

const threats = [
  {
    icon: AlertTriangle,
    title: 'Habitat Loss',
    desc: 'Deforestation and urban expansion destroy the homes of millions of species every year.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: Globe,
    title: 'Climate Change',
    desc: 'Rising temperatures and shifting seasons disrupt migration, breeding, and food availability.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: Heart,
    title: 'Poaching',
    desc: 'Illegal wildlife trade pushes iconic species like rhinos, elephants, and tigers to the brink.',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
  },
  {
    icon: TreePine,
    title: 'Pollution',
    desc: 'Plastic waste, pesticides, and chemical runoff poison ecosystems from rainforests to coral reefs.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
];

const ConservationSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="conservation" ref={containerRef} className="py-20 px-4 md:px-8 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3 block">
            Our Responsibility
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1c2b1e] mb-4">
            Wildlife Conservation
          </h2>
          <p className="text-[#4b6b52] text-lg max-w-2xl mx-auto leading-relaxed">
            Over 40,000 species are currently threatened with extinction. Understanding the threats is the first step toward protecting our planet's wildlife.
          </p>
        </div>

        {/* Threats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {threats.map((threat, i) => {
            const Icon = threat.icon;
            return (
              <div key={i} className={`${threat.bg} rounded-2xl p-6 border border-white shadow-sm hover:shadow-md transition-shadow`}>
                <div className={`${threat.color} mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-[#1c2b1e] font-bold text-lg mb-2">{threat.title}</h3>
                <p className="text-[#4b6b52] text-sm leading-relaxed">{threat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0"
            data-strk-bg-id="conservation-bg-s9t0u1"
            data-strk-bg="[conservation-cta-desc] [conservation-cta-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-[#0f3d25]/80" />
          <div className="relative z-10 py-16 px-8 md:px-16 text-center">
            <span className="text-4xl block mb-4">🌱</span>
            <h3 id="conservation-cta-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Every Action Counts
            </h3>
            <p id="conservation-cta-desc" className="text-white/85 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              From reducing plastic use to supporting wildlife sanctuaries, each of us has the power to make a difference for the animals we share this planet with.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-amber-600 transition-colors text-base shadow-lg">
                Support Conservation
              </button>
              <button className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-[#1a5c38] transition-colors text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConservationSection;
