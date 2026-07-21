import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Eye, Dna } from 'lucide-react';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth', icon: Dna },
  { value: '0.001mm', label: 'Smallest Bacterium', icon: Microscope },
  { value: '99%', label: 'Life is Microscopic', icon: Eye },
];

export default function Introduction() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="introduction" ref={containerRef} className="bg-cosmos-dark py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="text-xs uppercase tracking-[0.3em] font-semibold text-cosmos-teal mb-4 text-center">
          What is MicroCosmos?
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2
              id="intro-title"
              className="text-4xl md:text-5xl font-bold text-cosmos-light mb-6 leading-tight"
            >
              A Universe Hidden in Plain Sight
            </h2>
            <p id="intro-desc" className="text-cosmos-muted text-lg leading-relaxed mb-6">
              Beneath the surface of every drop of water, every grain of soil, and every breath of air lies an entire universe of microscopic life. Bacteria, archaea, fungi, protozoa, and viruses form intricate ecosystems that sustain all life on Earth.
            </p>
            <p className="text-cosmos-muted text-lg leading-relaxed mb-10">
              MicroCosmos invites you to peer through the lens of science and discover the extraordinary beauty of organisms too small to see — yet powerful enough to shape our world.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-cosmos-navy border border-cosmos-border">
                  <Icon className="w-5 h-5 text-cosmos-teal mx-auto mb-2" />
                  <div className="text-xl font-bold text-cosmos-teal">{value}</div>
                  <div className="text-xs text-cosmos-muted mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-cosmos-teal/5 blur-xl" />
            <img
              alt="Microscopic world introduction"
              data-strk-img-id="intro-img-mc002"
              data-strk-img="[intro-desc] [intro-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="relative w-full rounded-2xl border border-cosmos-border object-cover shadow-glow-teal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
