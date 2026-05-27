import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Zap, Globe, Droplets, Wind, Flame, Shield } from 'lucide-react';

const topics = [
  {
    id: 'extremophiles',
    icon: Flame,
    title: 'Extremophiles',
    subtitle: 'Life at the Limits',
    desc: 'Some microorganisms thrive in conditions that would instantly kill most life — boiling hot springs, frozen tundra, highly acidic lakes, and even the vacuum of space.',
    detail: 'Thermophiles survive above 60°C, psychrophiles thrive below 0°C, and acidophiles flourish in pH levels near 0. These organisms have revolutionized our understanding of where life can exist — and where we might find it on other planets.',
    imgRatio: '16x9',
  },
  {
    id: 'microbiome',
    icon: Shield,
    title: 'The Human Microbiome',
    subtitle: 'Your Inner Ecosystem',
    desc: 'Your body hosts trillions of microorganisms — more microbial cells than human cells. This community, called the microbiome, is essential to your health.',
    detail: 'The gut microbiome alone contains over 1,000 species of bacteria. These microbes help digest food, train the immune system, produce vitamins, and even influence mood and behavior through the gut-brain axis.',
    imgRatio: '4x3',
  },
  {
    id: 'ocean',
    icon: Droplets,
    title: 'Ocean Microbes',
    subtitle: 'Rulers of the Sea',
    desc: 'The ocean is the largest microbial habitat on Earth. Marine microorganisms drive global nutrient cycles and produce half of the world\'s oxygen.',
    detail: 'Prochlorococcus, the most abundant photosynthetic organism on Earth, is a marine cyanobacterium just 0.6 µm in diameter. It produces about 20% of the oxygen in every breath you take.',
    imgRatio: '16x9',
  },
  {
    id: 'soil',
    icon: Globe,
    title: 'Soil Microbiome',
    subtitle: 'Underground Networks',
    desc: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth. These microbes are the foundation of all terrestrial ecosystems.',
    detail: 'Soil bacteria and fungi decompose organic matter, releasing nutrients that plants need to grow. Mycorrhizal fungi form vast underground networks connecting trees and plants, allowing them to share nutrients and chemical signals.',
    imgRatio: '4x3',
  },
  {
    id: 'evolution',
    icon: Zap,
    title: 'Microbial Evolution',
    subtitle: '3.8 Billion Years',
    desc: 'Microorganisms have been evolving for nearly 4 billion years — far longer than any other form of life. They invented photosynthesis, respiration, and the genetic code.',
    detail: 'The Great Oxidation Event, 2.4 billion years ago, was caused by cyanobacteria flooding the atmosphere with oxygen. This catastrophic event wiped out most anaerobic life but paved the way for complex multicellular organisms — including us.',
    imgRatio: '16x9',
  },
  {
    id: 'biotechnology',
    icon: Wind,
    title: 'Microbial Biotechnology',
    subtitle: 'Engineering Life',
    desc: 'Scientists harness microorganisms to produce medicines, biofuels, and materials. Bacteria produce insulin, yeast ferments beer, and algae may power future vehicles.',
    detail: 'CRISPR-Cas9, the revolutionary gene-editing tool, was discovered in bacteria as part of their immune system. Today it\'s used to treat genetic diseases, develop new crops, and potentially cure cancer.',
    imgRatio: '4x3',
  },
];

const Explore = () => {
  const headerRef = useRef(null);
  const topicsRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) ImageHelper.loadImages(strkImgConfig, headerRef.current);
    if (topicsRef.current) ImageHelper.loadImages(strkImgConfig, topicsRef.current);
  }, []);

  return (
    <div className="bg-cosmos-dark text-slate-100 min-h-screen">
      {/* Hero Header */}
      <div ref={headerRef} className="relative py-24 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="explore-hero-bg-s1t2u3"
          data-strk-bg="[explore-hero-sub] [explore-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-cosmos-dark/75 z-10" />
        <div className="relative z-20">
          <p className="text-teal-400 font-heading font-medium tracking-widest uppercase text-sm mb-3">Deep Dives</p>
          <h1 id="explore-hero-title" className="font-heading font-bold text-4xl md:text-6xl text-slate-100 mb-4">
            Explore the Science
          </h1>
          <p id="explore-hero-sub" className="text-slate-400 max-w-xl mx-auto text-lg">
            From extremophiles to the human microbiome — discover the science behind the microscopic world.
          </p>
        </div>
      </div>

      {/* Topics */}
      <div ref={topicsRef} className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-24">
        {topics.map((topic, index) => {
          const Icon = topic.icon;
          const isEven = index % 2 === 0;
          return (
            <article key={topic.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.1)]">
                  <img
                    alt={topic.title}
                    className="w-full h-72 md:h-96 object-cover"
                    data-strk-img-id={`explore-topic-${topic.id}-v4w5x6`}
                    data-strk-img={`[explore-detail-${topic.id}] [explore-title-${topic.id}] [explore-hero-sub] [explore-hero-title]`}
                    data-strk-img-ratio={topic.imgRatio}
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/30 to-transparent" />
                </div>
              </div>

              <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-600/20 border border-teal-500/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <p className="text-teal-400 font-medium text-sm">{topic.subtitle}</p>
                </div>
                <h2 id={`explore-title-${topic.id}`} className="font-heading font-bold text-3xl md:text-4xl text-slate-100 mb-4">
                  {topic.title}
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">{topic.desc}</p>
                <p id={`explore-detail-${topic.id}`} className="text-slate-400 text-base leading-relaxed">{topic.detail}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Fun Facts Strip */}
      <section className="bg-cosmos-navy border-y border-teal-900/30 py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-100 mb-10">Did You Know?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { fact: 'If all bacteria on Earth were laid end to end, they would stretch 10 light-years into space.', num: '01' },
              { fact: 'The human gut contains about 100 trillion bacteria — 10 times more than human cells.', num: '02' },
              { fact: 'Tardigrades can survive in the vacuum of space, extreme radiation, and temperatures from -272°C to 150°C.', num: '03' },
            ].map(({ fact, num }) => (
              <div key={num} className="bg-cosmos-blue rounded-2xl p-6 border border-teal-900/40">
                <div className="font-heading font-bold text-4xl text-teal-900/60 mb-3">{num}</div>
                <p className="text-slate-300 text-sm leading-relaxed">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
