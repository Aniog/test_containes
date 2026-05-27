import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Eye, Globe, Zap } from 'lucide-react';

const pillars = [
  {
    icon: <Microscope className="w-6 h-6 text-cosmos-primary" />,
    title: 'Scientific Accuracy',
    desc: 'Every organism featured is documented with accurate scientific names, classifications, and behavioral descriptions sourced from peer-reviewed research.',
  },
  {
    icon: <Eye className="w-6 h-6 text-cosmos-primary" />,
    title: 'Visual Discovery',
    desc: 'We believe the microscopic world deserves to be seen. Our gallery showcases the stunning beauty of organisms invisible to the naked eye.',
  },
  {
    icon: <Globe className="w-6 h-6 text-cosmos-primary" />,
    title: 'Global Biodiversity',
    desc: 'From ocean plankton to soil bacteria, we explore microorganisms from every habitat on Earth, celebrating the diversity of life at every scale.',
  },
  {
    icon: <Zap className="w-6 h-6 text-cosmos-primary" />,
    title: 'Inspiring Curiosity',
    desc: 'MicroCosmos exists to spark wonder. The invisible world is not just scientifically important — it is breathtakingly, endlessly fascinating.',
  },
];

const teamImages = [
  { id: 'team-img-mc201', desc: 'scientist microscope laboratory research', ratio: '4x3' },
  { id: 'team-img-mc202', desc: 'microscopy laboratory equipment science', ratio: '4x3' },
  { id: 'team-img-mc203', desc: 'biology research petri dish specimen', ratio: '4x3' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="bg-cosmos-bg min-h-screen pt-16" ref={containerRef}>
      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          data-strk-bg-id="about-hero-bg-mc200"
          data-strk-bg="[about-hero-sub] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cosmos-bg/80 to-cosmos-bg" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p
            id="about-hero-sub"
            className="text-xs font-heading font-medium uppercase tracking-widest text-cosmos-primary mb-4"
          >
            Our Mission
          </p>
          <h1
            id="about-hero-title"
            className="font-heading font-bold text-4xl md:text-6xl text-slate-50 mb-6 leading-tight"
          >
            Bringing the Invisible World to Life
          </h1>
          <p className="font-body text-slate-400 text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
            MicroCosmos is a celebration of the microscopic universe — the teeming,
            ancient, and astonishing world of organisms too small to see, yet
            essential to all life on Earth.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-cosmos-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-heading font-medium uppercase tracking-widest text-cosmos-primary mb-3">
                Our Story
              </p>
              <h2
                id="story-title"
                className="font-heading font-bold text-3xl md:text-4xl text-slate-50 mb-6"
              >
                Born from a Drop of Water
              </h2>
              <div className="space-y-4 font-body text-slate-400 text-base leading-relaxed">
                <p id="story-p1">
                  It started with a simple microscope and a drop of pond water. What we
                  saw changed everything — a world of extraordinary complexity, beauty,
                  and drama, playing out at a scale invisible to the human eye.
                </p>
                <p>
                  MicroCosmos was created to share that sense of wonder. We document,
                  photograph, and explain the organisms that make up the foundation of
                  all ecosystems on Earth — from the bacteria that cycle nutrients in
                  soil, to the plankton that produce half the world's oxygen.
                </p>
                <p>
                  Every page of this site is an invitation to look closer, to appreciate
                  the complexity of life at every scale, and to understand that the
                  world we cannot see is just as rich and vital as the one we can.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-2xl overflow-hidden aspect-[16/9]">
                <img
                  alt="Microscopy laboratory"
                  className="w-full h-full object-cover"
                  data-strk-img-id={teamImages[0].id}
                  data-strk-img={`[story-p1] [story-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  alt="Research equipment"
                  className="w-full h-full object-cover"
                  data-strk-img-id={teamImages[1].id}
                  data-strk-img={`[story-p1] [story-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  alt="Biology specimen"
                  className="w-full h-full object-cover"
                  data-strk-img-id={teamImages[2].id}
                  data-strk-img={`[story-p1] [story-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 bg-cosmos-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-heading font-medium uppercase tracking-widest text-cosmos-primary mb-3">
              What We Stand For
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-50">
              Our Core Pillars
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-cosmos-card border border-cosmos-border rounded-2xl p-8 hover:border-cosmos-primary/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-cosmos-primary/10 rounded-xl flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl text-slate-50 mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 bg-cosmos-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-heading font-medium uppercase tracking-widest text-cosmos-primary mb-3">
              The World Beneath
            </p>
            <h2
              id="world-title"
              className="font-heading font-bold text-3xl md:text-4xl text-slate-50 mb-4"
            >
              Why Microorganisms Matter
            </h2>
            <p
              id="world-desc"
              className="font-body text-slate-400 max-w-2xl mx-auto text-base md:text-lg"
            >
              Microorganisms are not just curiosities — they are the engines of life on Earth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 'why-img-mc204', title: 'Oxygen Production', desc: 'Phytoplankton and cyanobacteria produce over 50% of Earth\'s oxygen through photosynthesis.' },
              { id: 'why-img-mc205', title: 'Nutrient Cycling', desc: 'Bacteria and fungi decompose organic matter, returning essential nutrients to the soil and water.' },
              { id: 'why-img-mc206', title: 'Climate Regulation', desc: 'Marine microorganisms absorb CO₂ and play a critical role in regulating Earth\'s climate.' },
            ].map((item, i) => (
              <div key={i} className="bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={item.id}
                    data-strk-img={`[why-desc-${i}] [why-title-${i}] [world-desc] [world-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`why-title-${i}`} className="font-heading font-semibold text-slate-50 text-lg mb-2">
                    {item.title}
                  </h3>
                  <p id={`why-desc-${i}`} className="font-body text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
