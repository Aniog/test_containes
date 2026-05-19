import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const topics = [
  {
    id: 'cell-structure',
    title: 'Cell Structure',
    subtitle: 'The Building Blocks of Life',
    body: 'Every living organism is made of cells — the smallest unit of life. Prokaryotic cells (bacteria) lack a nucleus, while eukaryotic cells (plants, animals, fungi) have a membrane-bound nucleus. Inside each cell, organelles like mitochondria, ribosomes, and the endoplasmic reticulum carry out specialized functions.',
    facts: ['The human body contains ~37 trillion cells', 'A single cell can contain 6 feet of DNA', 'Cells divide roughly 2 trillion times per day in the human body'],
    color: 'border-cyan-500/30',
    accent: 'text-cyan-400',
  },
  {
    id: 'microbial-ecology',
    title: 'Microbial Ecology',
    subtitle: 'Invisible Ecosystems',
    body: 'Microorganisms form complex ecosystems in every environment on Earth — from deep-sea hydrothermal vents to the human gut. The human microbiome contains over 38 trillion microbial cells, outnumbering human cells. These communities regulate digestion, immunity, and even mental health.',
    facts: ['Your gut contains 500–1000 bacterial species', 'Soil microbes recycle all organic matter on Earth', 'Ocean microbes produce 50% of Earth\'s oxygen'],
    color: 'border-teal-500/30',
    accent: 'text-teal-400',
  },
  {
    id: 'viral-biology',
    title: 'Viral Biology',
    subtitle: 'Life at the Edge of Existence',
    body: 'Viruses occupy a strange boundary between living and non-living. They cannot reproduce independently — they must hijack a host cell\'s machinery. Despite their simplicity, viruses have shaped the evolution of all life on Earth. About 8% of the human genome consists of ancient viral DNA.',
    facts: ['There are 10³¹ viruses on Earth', 'Viruses outnumber bacteria 10 to 1', '8% of human DNA comes from ancient viruses'],
    color: 'border-purple-500/30',
    accent: 'text-purple-400',
  },
  {
    id: 'crystallography',
    title: 'Crystallography',
    subtitle: 'Order at the Molecular Scale',
    body: 'Crystals form when atoms or molecules arrange themselves in highly ordered, repeating patterns. X-ray crystallography — the technique of shining X-rays through crystals — revealed the structure of DNA, proteins, and countless other molecules. This field has led to over 30 Nobel Prizes.',
    facts: ['DNA structure was discovered via X-ray crystallography', 'Snowflakes have infinite unique patterns', 'Protein crystals can be grown in space for better resolution'],
    color: 'border-amber-500/30',
    accent: 'text-amber-400',
  },
];

export default function ScienceTopics() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="space-y-20">
      {topics.map((topic, i) => (
        <div
          key={topic.id}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
          {/* Image */}
          <div className={`${i % 2 === 1 ? 'lg:order-2' : ''} rounded-2xl overflow-hidden border ${topic.color} aspect-[4/3]`}>
            <img
              alt={topic.title}
              className="w-full h-full object-cover"
              data-strk-img-id={`science-${topic.id}-v4w5x6`}
              data-strk-img={`[science-${topic.id}-sub] [science-${topic.id}-title] microscopy science`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          {/* Content */}
          <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
            <p id={`science-${topic.id}-sub`} className={`text-sm uppercase tracking-widest mb-2 ${topic.accent}`}>
              {topic.subtitle}
            </p>
            <h2 id={`science-${topic.id}-title`} className="text-3xl md:text-4xl font-bold text-white mb-4">
              {topic.title}
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">{topic.body}</p>

            <div className="space-y-3">
              {topic.facts.map((fact, j) => (
                <div key={j} className="flex items-start gap-3">
                  <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${topic.accent.replace('text-', 'bg-')}`} />
                  <span className="text-slate-400 text-sm">{fact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
