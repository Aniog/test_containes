import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const facts = [
  {
    id: 'fact-1',
    number: '01',
    title: 'You Are Mostly Microbes',
    body: 'The human body contains roughly 38 trillion bacteria — nearly equal to the number of human cells. Your gut microbiome weighs up to 2kg and influences everything from mood to immunity.',
    imgId: 'fact-img-mc028',
    imgQuery: '[fact-1-body] [fact-1-title] gut microbiome bacteria human body',
  },
  {
    id: 'fact-2',
    number: '02',
    title: 'Bacteria Communicate',
    body: 'Through a process called quorum sensing, bacteria release chemical signals to "count" their population. Once a threshold is reached, they coordinate behavior — forming biofilms, producing toxins, or glowing in the dark.',
    imgId: 'fact-img-mc029',
    imgQuery: '[fact-2-body] [fact-2-title] bacteria quorum sensing bioluminescence',
  },
  {
    id: 'fact-3',
    number: '03',
    title: 'Viruses Outnumber Stars',
    body: 'There are an estimated 10³¹ viruses on Earth — more than every star in the observable universe combined. If laid end to end, they would stretch 100 million light years.',
    imgId: 'fact-img-mc030',
    imgQuery: '[fact-3-body] [fact-3-title] virus particles electron microscope colorful',
  },
  {
    id: 'fact-4',
    number: '04',
    title: 'Fungi Built the Internet First',
    body: 'Mycorrhizal fungal networks connect trees across entire forests, transferring nutrients and chemical signals. Scientists call it the "Wood Wide Web" — a biological internet predating ours by 450 million years.',
    imgId: 'fact-img-mc031',
    imgQuery: '[fact-4-body] [fact-4-title] mycelium network fungi forest roots',
  },
];

const FactsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#00d4ff] text-xs font-semibold tracking-widest uppercase">Mind-Bending Science</span>
          <h2 id="facts-title" className="text-4xl md:text-5xl font-black text-[#f0f8ff] mt-3 mb-5">
            Facts That Will <span className="text-[#00d4ff]">Blow Your Mind</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The microscopic world operates by rules that challenge everything we think we know about life.
          </p>
        </div>

        {/* Facts list */}
        <div className="space-y-16">
          {facts.map((fact, i) => (
            <div
              key={fact.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image — alternating sides */}
              <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden border border-[#00d4ff]/20 shadow-[0_0_40px_rgba(0,212,255,0.1)]">
                  <img
                    alt={fact.title}
                    className="w-full h-72 object-cover"
                    data-strk-img-id={fact.imgId}
                    data-strk-img={fact.imgQuery}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/50 to-transparent" />
                </div>
              </div>

              {/* Text */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="text-7xl font-black text-[#00d4ff]/10 leading-none block mb-2">{fact.number}</span>
                <h3 id={fact.id} className="text-2xl md:text-3xl font-bold text-[#f0f8ff] mb-5 -mt-6">{fact.title}</h3>
                <p id={`${fact.id}-body`} className="text-slate-300 text-lg leading-relaxed">{fact.body}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-[#00d4ff]/40 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
