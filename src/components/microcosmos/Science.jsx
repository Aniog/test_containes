import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { BookOpen, Atom, Dna, Waves } from 'lucide-react';

const topics = [
  {
    icon: Atom,
    title: 'Quantum Biology',
    desc: 'Quantum effects play a surprising role in biological processes — from photosynthesis efficiency to bird navigation using quantum entanglement in their eyes.',
    tag: 'Emerging Field',
    tagColor: 'text-violet-400 bg-violet-500/10 border-violet-500/30',
    imgId: 'science-quantum-img-s1t2u3',
    titleId: 'science-quantum-title',
    descId: 'science-quantum-desc',
  },
  {
    icon: Dna,
    title: 'CRISPR & Gene Editing',
    desc: 'Borrowed from bacterial immune systems, CRISPR-Cas9 allows scientists to edit DNA with unprecedented precision — opening doors to curing genetic diseases.',
    tag: 'Biotechnology',
    tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    imgId: 'science-crispr-img-v4w5x6',
    titleId: 'science-crispr-title',
    descId: 'science-crispr-desc',
  },
  {
    icon: Waves,
    title: 'Microbiome & Health',
    desc: 'The 39 trillion microbes living in your gut influence your mood, immune system, and even your risk of disease. The microbiome is now considered a virtual organ.',
    tag: 'Medicine',
    tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    imgId: 'science-microbiome-img-y7z8a9',
    titleId: 'science-microbiome-title',
    descId: 'science-microbiome-desc',
  },
];

const timeline = [
  { year: '1674', event: 'Antonie van Leeuwenhoek first observes bacteria using a handcrafted microscope' },
  { year: '1858', event: 'Cell theory established — all living things are made of cells' },
  { year: '1928', event: 'Alexander Fleming discovers penicillin from the mold Penicillium' },
  { year: '1953', event: 'Watson & Crick describe the double helix structure of DNA' },
  { year: '1983', event: 'PCR technique invented, revolutionizing genetic analysis' },
  { year: '2012', event: 'CRISPR-Cas9 gene editing system developed by Doudna & Charpentier' },
  { year: '2020', event: 'Metagenomics reveals millions of unknown microbial species in Earth\'s oceans' },
];

export default function Science() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="bg-[#050a0e] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Frontiers of Knowledge
          </span>
          <h2 id="science-title" className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            The Science of the Small
          </h2>
          <p id="science-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            From ancient discoveries to cutting-edge breakthroughs, microbiology
            continues to reshape our understanding of life itself.
          </p>
        </div>

        {/* Topic cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.title}
                className="bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,229,255,0.08)] group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    alt={topic.title}
                    data-strk-img-id={topic.imgId}
                    data-strk-img={`[${topic.descId}] [${topic.titleId}] [science-subtitle] [science-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-cyan-400" />
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${topic.tagColor}`}>
                      {topic.tag}
                    </span>
                  </div>
                  <h3 id={topic.titleId} className="text-slate-50 text-lg font-bold mb-2">{topic.title}</h3>
                  <p id={topic.descId} className="text-slate-400 text-sm leading-relaxed">{topic.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-10">
            <BookOpen className="w-6 h-6 text-cyan-400" />
            <h3 className="text-slate-50 text-2xl font-bold">Milestones in Microbiology</h3>
          </div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent hidden md:block" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 text-right">
                    <span className="text-cyan-400 font-bold text-sm">{item.year}</span>
                  </div>
                  <div className="hidden md:flex flex-shrink-0 w-4 h-4 rounded-full bg-cyan-500/30 border border-cyan-500/60 mt-0.5 relative z-10" />
                  <p className="text-slate-400 text-sm leading-relaxed pt-0.5">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
