import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Dna, FlaskConical, Globe } from 'lucide-react';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth', icon: Globe },
  { value: '1,000+', label: 'Species per ml of seawater', icon: FlaskConical },
  { value: '37 Trillion', label: 'Cells in the human body', icon: Dna },
  { value: '3.5 Billion', label: 'Years of microbial life', icon: Microscope },
];

const IntroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="intro" ref={containerRef} className="bg-cosmos-deep py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cosmos-teal text-sm font-semibold tracking-widest uppercase">
            About MicroCosmos
          </span>
          <h2
            id="intro-title"
            className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6"
          >
            A Universe in Every Drop
          </h2>
          <p
            id="intro-subtitle"
            className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            The microbial world is the foundation of all life on Earth. From the depths of the ocean
            to the soil beneath your feet, microscopic organisms drive the cycles that sustain our planet.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              alt="Microscopic world close-up"
              className="w-full rounded-2xl object-cover aspect-[4/3] shadow-glow-teal"
              data-strk-img-id="intro-img-mc002"
              data-strk-img="[intro-subtitle] [intro-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-cosmos-teal pl-6">
              <h3
                id="intro-card1-title"
                className="text-xl font-semibold text-white mb-2"
              >
                The Hidden Architects
              </h3>
              <p
                id="intro-card1-desc"
                className="text-slate-300 leading-relaxed"
              >
                Bacteria, archaea, fungi, and protists form invisible ecosystems that recycle nutrients,
                produce oxygen, and regulate Earth's climate. Without them, life as we know it would cease to exist.
              </p>
            </div>
            <div className="border-l-2 border-cosmos-violet pl-6">
              <h3
                id="intro-card2-title"
                className="text-xl font-semibold text-white mb-2"
              >
                Beauty Under the Lens
              </h3>
              <p
                id="intro-card2-desc"
                className="text-slate-300 leading-relaxed"
              >
                Modern microscopy reveals a world of extraordinary beauty — radiolarians with geometric
                precision, diatoms with intricate glass shells, and cyanobacteria glowing with ancient light.
              </p>
            </div>
            <div className="border-l-2 border-cosmos-cyan pl-6">
              <h3
                id="intro-card3-title"
                className="text-xl font-semibold text-white mb-2"
              >
                Science of the Small
              </h3>
              <p
                id="intro-card3-desc"
                className="text-slate-300 leading-relaxed"
              >
                Microbiology has transformed medicine, agriculture, and environmental science.
                Every discovery in this tiny realm opens vast new frontiers of human knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="bg-cosmos-card border border-cosmos-border rounded-2xl p-6 text-center hover:border-cosmos-teal/50 transition-all duration-300"
            >
              <Icon className="w-7 h-7 text-cosmos-teal mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">{value}</div>
              <div className="text-slate-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
