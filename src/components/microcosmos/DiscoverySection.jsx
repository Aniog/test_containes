import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const discoveries = [
  { year: '1674', title: 'First Microbes Observed', desc: 'Antonie van Leeuwenhoek becomes the first person to observe living microorganisms using a handcrafted microscope.', imgId: 'disc-img-mc021', id: 'disc-1674' },
  { year: '1928', title: 'Penicillin Discovered', desc: 'Alexander Fleming discovers that the mold Penicillium notatum kills bacteria, launching the antibiotic era.', imgId: 'disc-img-mc022', id: 'disc-1928' },
  { year: '1953', title: 'DNA Double Helix', desc: 'Watson and Crick describe the double helix structure of DNA, revealing how genetic information is stored in cells.', imgId: 'disc-img-mc023', id: 'disc-1953' },
  { year: '2003', title: 'Human Genome Sequenced', desc: 'The Human Genome Project completes the first full sequence of human DNA — 3 billion base pairs of microscopic code.', imgId: 'disc-img-mc024', id: 'disc-2003' },
];

export default function DiscoverySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-gray-950 py-24 md:py-32 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4 block">History</span>
          <h2 id="discovery-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Milestones of Discovery
          </h2>
          <p id="discovery-desc" className="text-gray-400 text-lg max-w-2xl mx-auto">
            Centuries of scientific breakthroughs that revealed the microscopic world and transformed medicine, biology, and our understanding of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {discoveries.map((d) => (
            <div key={d.year} className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-cyan-400/40 transition group">
              <div className="md:w-48 flex-shrink-0 overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={d.title}
                  className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition duration-500"
                  data-strk-img-id={d.imgId}
                  data-strk-img={`[${d.id}] [discovery-desc] [discovery-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <span className="text-cyan-400 font-black text-2xl mb-2">{d.year}</span>
                <h3 id={d.id} className="text-white font-bold text-lg mb-2">{d.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
