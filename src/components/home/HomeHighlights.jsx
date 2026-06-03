import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const highlights = [
  {
    id: 'tardigrade',
    tag: 'Extremophile',
    tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
    title: 'Tardigrades',
    subtitle: 'The Indestructible Water Bears',
    description: 'Surviving the vacuum of space, boiling water, and extreme radiation — tardigrades are the toughest animals on Earth.',
    titleId: 'highlight-tardigrade-title',
    descId: 'highlight-tardigrade-desc',
    imgId: 'highlight-img-tardigrade-a1b2',
  },
  {
    id: 'cyanobacteria',
    tag: 'Photosynthetic',
    tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
    title: 'Cyanobacteria',
    subtitle: 'Inventors of Oxygen',
    description: 'Over 2.4 billion years ago, cyanobacteria transformed Earth\'s atmosphere, making complex life possible.',
    titleId: 'highlight-cyanobacteria-title',
    descId: 'highlight-cyanobacteria-desc',
    imgId: 'highlight-img-cyanobacteria-c3d4',
  },
  {
    id: 'mycelium',
    tag: 'Fungal Network',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/30',
    title: 'Mycelium',
    subtitle: 'The Wood Wide Web',
    description: 'Fungal networks connect entire forests, transferring nutrients and chemical signals between trees across vast distances.',
    titleId: 'highlight-mycelium-title',
    descId: 'highlight-mycelium-desc',
    imgId: 'highlight-img-mycelium-e5f6',
  },
];

const HomeHighlights = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-[#0a1628]/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4 block">
              Featured Organisms
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-50">
              Remarkable{' '}
              <span className="gradient-text">Microworlds</span>
            </h2>
          </div>
          <Link
            to="/explore"
            className="flex items-center gap-2 text-cyan-400 text-sm font-medium hover:gap-3 transition-all duration-200 shrink-0"
          >
            View all organisms <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-[#0a1628] border border-cyan-900/40 overflow-hidden hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(0,212,255,0.08)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                <span className={`absolute top-4 left-4 text-xs font-mono px-3 py-1 rounded-full border ${item.tagColor}`}>
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-500 text-xs font-mono mb-1">{item.subtitle}</p>
                <h3 id={item.titleId} className="font-display font-bold text-xl text-slate-50 mb-3">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-1 mt-4 text-cyan-400 text-sm font-medium hover:gap-2 transition-all duration-200"
                >
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHighlights;
