import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '8.7M', label: 'Known Species', desc: 'Estimated species on Earth' },
  { value: '37T', label: 'Human Cells', desc: 'Cells in the human body' },
  { value: '0.001mm', label: 'Smallest Life', desc: 'Size of the tiniest bacteria' },
  { value: '3.5B', label: 'Years of Life', desc: 'Age of earliest microfossils' },
];

export default function IntroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="bg-gray-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-4 block">What is MicroCosmos?</span>
            <h2 id="intro-title" className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              A Universe Hidden in Plain Sight
            </h2>
            <p id="intro-desc" className="text-gray-300 text-lg leading-relaxed mb-6">
              MicroCosmos is a window into the world too small for the naked eye — a realm of bacteria, protozoa, algae, fungi, and viruses that form the invisible foundation of all life on Earth.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Through the lens of modern microscopy, we reveal the astonishing complexity, beauty, and diversity of microscopic organisms that shape our planet, our health, and our future.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-lg shadow-teal-500/10">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Microscopic life under the lens"
              className="w-full h-80 object-cover"
              data-strk-img-id="intro-img-mc002"
              data-strk-img="[intro-desc] [intro-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-gray-900 border border-gray-700 rounded-2xl p-6 text-center hover:border-teal-400/40 transition">
              <div className="text-3xl md:text-4xl font-black text-teal-400 mb-1">{s.value}</div>
              <div className="text-white font-semibold mb-1">{s.label}</div>
              <div className="text-gray-400 text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
