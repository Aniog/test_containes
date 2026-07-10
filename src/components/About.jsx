import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Eye, Dna, Atom } from 'lucide-react';

const features = [
  {
    icon: Microscope,
    titleId: 'about-feat-1-title',
    descId: 'about-feat-1-desc',
    title: 'Electron Microscopy',
    desc: 'Scanning electron microscopes reveal surface textures at nanometer resolution, unveiling worlds invisible to light.',
    color: 'text-cyan-400',
    border: 'border-cyan-400/20',
  },
  {
    icon: Dna,
    titleId: 'about-feat-2-title',
    descId: 'about-feat-2-desc',
    title: 'Living Cells',
    desc: 'Fluorescence microscopy illuminates the dynamic machinery inside living cells with vivid, glowing colors.',
    color: 'text-violet-400',
    border: 'border-violet-400/20',
  },
  {
    icon: Atom,
    titleId: 'about-feat-3-title',
    descId: 'about-feat-3-desc',
    title: 'Crystal Structures',
    desc: 'Polarized light transforms mineral crystals into kaleidoscopic masterpieces of geometry and color.',
    color: 'text-teal-400',
    border: 'border-teal-400/20',
  },
  {
    icon: Eye,
    titleId: 'about-feat-4-title',
    descId: 'about-feat-4-desc',
    title: 'Micro Organisms',
    desc: 'Bacteria, protozoa, and algae form entire ecosystems in a single drop of water, teeming with life.',
    color: 'text-amber-400',
    border: 'border-amber-400/20',
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-cosmos-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            What is MicroCosmos
          </span>
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            A Universe Within a Universe
          </h2>
          <p
            id="about-desc"
            className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            MicroCosmos is a visual exploration of the microscopic world — the hidden layer of reality that surrounds us, lives within us, and shapes every aspect of life on Earth. Through the lens of modern microscopy, we reveal the extraordinary beauty of the infinitely small.
          </p>
        </div>

        {/* Two-column layout: text + image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 id="about-vision-title" className="text-2xl md:text-3xl font-bold text-white mb-4">
              Seeing the Unseen
            </h3>
            <p id="about-vision-desc" className="text-slate-400 leading-relaxed mb-6">
              For centuries, the microscopic world remained hidden from human eyes. Today, advanced imaging technologies allow us to peer into realms once thought invisible — from the intricate lattice of a snowflake to the pulsing interior of a living cell.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Every image in MicroCosmos is a window into a parallel universe — one that exists all around us, yet remains unseen by the naked eye. These are not abstract scientific diagrams; they are real photographs of real structures, magnified thousands of times.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 shadow-[0_0_40px_rgba(0,212,255,0.1)]">
            <img
              alt="Microscopic world visualization"
              data-strk-img-id="about-vision-img-mc002"
              data-strk-img="[about-vision-desc] [about-vision-title] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos-deep/60 to-transparent" />
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.titleId}
                className={`bg-cosmos-mid/50 border ${f.border} rounded-2xl p-6 hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${f.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 id={f.titleId} className="text-white font-semibold text-lg mb-2">
                  {f.title}
                </h4>
                <p id={f.descId} className="text-slate-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
