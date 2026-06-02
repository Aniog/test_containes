import { useEffect, useRef } from 'react';
import { Wind, Droplets, Leaf, FlaskConical, Dna, Atom } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const topics = [
  {
    id: 'nitrogen-cycle',
    icon: Wind,
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/30',
    title: 'The Nitrogen Cycle',
    subtitle: 'Atmospheric Chemistry',
    body: 'Nitrogen-fixing bacteria like Rhizobium convert atmospheric nitrogen (N₂) into ammonia (NH₃), making it available to plants. Without these microbes, most life on Earth would be impossible — they are the invisible fertilizers of our biosphere.',
    titleId: 'sci-nitrogen-title',
    descId: 'sci-nitrogen-desc',
    imgId: 'sci-img-nitrogen-s001',
  },
  {
    id: 'ocean-oxygen',
    icon: Droplets,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    title: 'Ocean Oxygen Factories',
    subtitle: 'Marine Photosynthesis',
    body: 'Cyanobacteria and phytoplankton produce over half of Earth\'s oxygen through photosynthesis. The tiny Prochlorococcus bacterium alone is responsible for roughly 20% of the oxygen in every breath you take.',
    titleId: 'sci-ocean-title',
    descId: 'sci-ocean-desc',
    imgId: 'sci-img-ocean-s002',
  },
  {
    id: 'human-microbiome',
    icon: Dna,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    title: 'The Human Microbiome',
    subtitle: 'Internal Ecosystem',
    body: 'Your body hosts approximately 38 trillion microbial cells — roughly equal to the number of human cells. This microbiome influences digestion, immunity, mental health, and even behavior. We are, in a very real sense, walking ecosystems.',
    titleId: 'sci-microbiome-title',
    descId: 'sci-microbiome-desc',
    imgId: 'sci-img-microbiome-s003',
  },
  {
    id: 'extremophiles',
    icon: Atom,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    title: 'Extremophiles',
    subtitle: 'Life at the Limits',
    body: 'Archaea thrive in environments once thought uninhabitable — boiling hydrothermal vents, acidic hot springs, and hypersaline lakes. Studying extremophiles reshapes our understanding of where life can exist, including on other planets.',
    titleId: 'sci-extremo-title',
    descId: 'sci-extremo-desc',
    imgId: 'sci-img-extremo-s004',
  },
  {
    id: 'carbon-cycle',
    icon: Leaf,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    title: 'Carbon Cycling',
    subtitle: 'Climate Regulation',
    body: 'Decomposer microbes break down dead organic matter, releasing carbon back into the atmosphere and soil. This process is fundamental to the global carbon cycle and directly influences climate change dynamics.',
    titleId: 'sci-carbon-title',
    descId: 'sci-carbon-desc',
    imgId: 'sci-img-carbon-s005',
  },
  {
    id: 'antibiotic-resistance',
    icon: FlaskConical,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    title: 'Antibiotic Resistance',
    subtitle: 'Evolutionary Arms Race',
    body: 'Bacteria evolve resistance to antibiotics through natural selection at astonishing speed. Understanding microbial genetics is critical to developing new treatments and preventing a post-antibiotic era that could reverse a century of medical progress.',
    titleId: 'sci-antibiotic-title',
    descId: 'sci-antibiotic-desc',
    imgId: 'sci-img-antibiotic-s006',
  },
];

const ScienceTopics = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3 block">Key Topics</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            How Microbes Shape Our World
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From the air we breathe to the food we eat, microorganisms are the invisible engines driving life on Earth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.id}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 group flex flex-col md:flex-row"
              >
                <div className="relative md:w-48 shrink-0 overflow-hidden aspect-[4/3] md:aspect-auto">
                  <img
                    alt={topic.title}
                    data-strk-img-id={topic.imgId}
                    data-strk-img={`[${topic.descId}] [${topic.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/40 md:bg-gradient-to-l" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className={`inline-flex items-center gap-2 ${topic.bgColor} border ${topic.borderColor} rounded-lg px-3 py-1.5 w-fit mb-3`}>
                    <Icon className={`w-3.5 h-3.5 ${topic.color}`} />
                    <span className={`text-xs font-mono ${topic.color}`}>{topic.subtitle}</span>
                  </div>
                  <h3 id={topic.titleId} className="text-lg font-semibold text-slate-100 mb-2">{topic.title}</h3>
                  <p id={topic.descId} className="text-slate-400 text-sm leading-relaxed">{topic.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScienceTopics;
