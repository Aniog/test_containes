import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Atom, Zap, Globe, HeartPulse, Leaf, FlaskConical } from 'lucide-react';

const microscopeTypesData = [
  { id: 'mt1', name: 'Light Microscopy', abbr: 'LM', desc: 'Uses visible light and lenses. Magnification up to 1,000×. Ideal for living specimens.' },
  { id: 'mt2', name: 'Electron Microscopy', abbr: 'EM', desc: 'Uses electron beams. Magnification up to 10,000,000×. Reveals nanoscale structures.' },
  { id: 'mt3', name: 'Fluorescence Microscopy', abbr: 'FM', desc: 'Uses fluorescent dyes or proteins. Highlights specific molecules within cells.' },
  { id: 'mt4', name: 'Confocal Microscopy', abbr: 'CM', desc: 'Creates 3D images by scanning point by point. Eliminates out-of-focus blur.' },
];

const scienceTopics = [
  {
    id: 'st1',
    icon: Atom,
    color: '#00d4ff',
    title: 'Cell Structure',
    subtitle: 'The Building Blocks of Life',
    desc: 'Microorganisms are either prokaryotic (no nucleus, like bacteria) or eukaryotic (with nucleus, like fungi and protozoa). Understanding their cell structure reveals how life organizes itself at the most fundamental level.',
    details: [
      'Prokaryotes lack a membrane-bound nucleus',
      'Eukaryotic cells contain organelles like mitochondria',
      'Cell walls vary: peptidoglycan in bacteria, chitin in fungi',
      'Ribosomes are present in all living cells',
    ],
  },
  {
    id: 'st2',
    icon: Zap,
    color: '#00ff88',
    title: 'Metabolism',
    subtitle: 'Energy and Chemical Reactions',
    desc: 'Microbes display an astonishing range of metabolic strategies. Some use sunlight (photosynthesis), others oxidize inorganic compounds (chemolithotrophy), and many break down organic matter (heterotrophy).',
    details: [
      'Aerobic respiration uses oxygen to produce ATP',
      'Anaerobic fermentation works without oxygen',
      'Chemolithotrophs oxidize inorganic compounds',
      'Some archaea use methane as an energy source',
    ],
  },
  {
    id: 'st3',
    icon: Globe,
    color: '#a855f7',
    title: 'Ecology & Cycles',
    subtitle: 'Driving Earth\'s Biogeochemical Cycles',
    desc: 'Microorganisms are the engines of Earth\'s biogeochemical cycles. They fix nitrogen from the atmosphere, decompose organic matter, cycle carbon, and regulate the chemistry of our oceans and soils.',
    details: [
      'Nitrogen fixation converts N₂ to usable ammonia',
      'Decomposers recycle nutrients back to ecosystems',
      'Marine microbes produce 50% of Earth\'s oxygen',
      'Soil microbiomes support all terrestrial plant life',
    ],
  },
  {
    id: 'st4',
    icon: HeartPulse,
    color: '#f59e0b',
    title: 'Human Microbiome',
    subtitle: 'The Ecosystem Within Us',
    desc: 'The human body hosts approximately 38 trillion microbial cells — roughly equal to the number of human cells. This microbiome influences digestion, immunity, mental health, and even behavior.',
    details: [
      '~38 trillion microbes in/on the human body',
      'Gut microbiome contains 1,000+ bacterial species',
      'Microbiome influences mood via the gut-brain axis',
      'Disruption linked to obesity, depression, and autoimmune disease',
    ],
  },
  {
    id: 'st5',
    icon: Leaf,
    color: '#00d4ff',
    title: 'Evolution',
    subtitle: '3.8 Billion Years of Life',
    desc: 'Life on Earth began with microorganisms approximately 3.8 billion years ago. Studying microbial evolution gives us a window into the origins of all life, including the emergence of complex multicellular organisms.',
    details: [
      'First life appeared ~3.8 billion years ago',
      'Endosymbiosis gave rise to mitochondria and chloroplasts',
      'Horizontal gene transfer accelerates microbial evolution',
      'LUCA (Last Universal Common Ancestor) was likely a microbe',
    ],
  },
  {
    id: 'st6',
    icon: FlaskConical,
    color: '#00ff88',
    title: 'Biotechnology',
    subtitle: 'Microbes in Service of Humanity',
    desc: 'Microorganisms are powerful biotechnology tools. They produce antibiotics, insulin, biofuels, and industrial enzymes. Genetic engineering of microbes is transforming medicine, agriculture, and materials science.',
    details: [
      'E. coli produces human insulin since 1982',
      'Yeast ferments sugars into biofuels',
      'CRISPR was discovered in bacterial immune systems',
      'Microbes clean up oil spills (bioremediation)',
    ],
  },
];

const microscopyTypes = [
  { id: 'mt1', name: 'Light Microscopy', abbr: 'LM', desc: 'Uses visible light and lenses. Magnification up to 1,000×. Ideal for living specimens.' },
  { id: 'mt2', name: 'Electron Microscopy', abbr: 'EM', desc: 'Uses electron beams. Magnification up to 10,000,000×. Reveals nanoscale structures.' },
  { id: 'mt3', name: 'Fluorescence Microscopy', abbr: 'FM', desc: 'Uses fluorescent dyes or proteins. Highlights specific molecules within cells.' },
  { id: 'mt4', name: 'Confocal Microscopy', abbr: 'CM', desc: 'Creates 3D images by scanning point by point. Eliminates out-of-focus blur.' },
];

const Science = () => {
  const headerRef = useRef(null);
  const topicsRef = useRef(null);
  const microscopeRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) ImageHelper.loadImages(strkImgConfig, headerRef.current);
    if (topicsRef.current) ImageHelper.loadImages(strkImgConfig, topicsRef.current);
    if (microscopeRef.current) ImageHelper.loadImages(strkImgConfig, microscopeRef.current);
  }, []);

  return (
    <div className="bg-[#050d1a] text-[#f0f8ff] min-h-screen">
      {/* Header */}
      <div ref={headerRef} className="relative pt-28 pb-16 px-4 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-15"
          data-strk-bg-id="science-header-bg-p3q4r5"
          data-strk-bg="[science-header-title] microbiology laboratory science"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/70 to-[#050d1a] z-10" />
        <div className="relative z-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#00d4ff] text-sm font-medium tracking-wide">Microbiology</span>
          </div>
          <h1 id="science-header-title" className="font-grotesk font-bold text-4xl md:text-6xl text-[#f0f8ff] mb-4">
            The Science
          </h1>
          <p className="text-slate-400 text-lg">
            Explore the fundamental principles of microbiology — from cell structure and metabolism 
            to evolution and biotechnology.
          </p>
        </div>
      </div>

      {/* Science Topics */}
      <div ref={topicsRef} className="px-4 md:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {scienceTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-[#0f1f3d] border border-[#00d4ff]/15 rounded-2xl overflow-hidden hover:border-[#00d4ff]/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.08)] transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={topic.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`science-img-${topic.id}`}
                  data-strk-img={`[science-desc-${topic.id}] [science-title-${topic.id}] microbiology`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d] via-[#0f1f3d]/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${topic.color}20`, border: `1px solid ${topic.color}40` }}
                  >
                    <topic.icon className="w-5 h-5" style={{ color: topic.color }} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color: topic.color }}>
                  {topic.subtitle}
                </div>
                <h3 id={`science-title-${topic.id}`} className="font-grotesk font-bold text-xl text-[#f0f8ff] mb-3">
                  {topic.title}
                </h3>
                <p id={`science-desc-${topic.id}`} className="text-slate-400 text-sm leading-relaxed mb-4">
                  {topic.desc}
                </p>
                <ul className="space-y-2">
                  {topic.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: topic.color }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Microscopy Types */}
      <div ref={microscopeRef} className="px-4 md:px-8 pb-24 bg-[#0a1628] py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-[#f0f8ff] mb-3">
              Tools of Discovery
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Modern microscopy techniques that reveal the invisible world in stunning detail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {microscopeTypesData.map((type) => (
              <div
                key={type.id}
                className="group bg-[#0f1f3d] border border-[#00d4ff]/15 rounded-2xl overflow-hidden hover:border-[#00d4ff]/40 transition-all"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={type.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={`microscope-img-${type.id}`}
                    data-strk-img={`[microscope-desc-${type.id}] [microscope-name-${type.id}] microscope laboratory`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d] to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-[#00d4ff] text-[#050d1a] text-xs font-bold px-2 py-1 rounded">
                      {type.abbr}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 id={`microscope-name-${type.id}`} className="font-grotesk font-semibold text-[#f0f8ff] text-sm mb-2">
                    {type.name}
                  </h4>
                  <p id={`microscope-desc-${type.id}`} className="text-slate-400 text-xs leading-relaxed">
                    {type.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Science;
