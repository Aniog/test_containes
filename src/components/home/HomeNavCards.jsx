import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Image, MessageSquare } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cards = [
  {
    to: '/knowledge',
    icon: BookOpen,
    label: 'Knowledge Hub',
    titleId: 'nav-card-t1',
    descId: 'nav-card-d1',
    imgId: 'nav-card-img-1a2b',
    title: 'Knowledge Hub',
    desc: 'Constellations, stellar evolution, and observational physics — three pillars of astronomy explained.',
    accent: '#6366f1',
  },
  {
    to: '/gallery',
    icon: Image,
    label: 'Sky Gallery',
    titleId: 'nav-card-t2',
    descId: 'nav-card-d2',
    imgId: 'nav-card-img-3c4d',
    title: 'Sky Gallery',
    desc: 'Auroras, eclipses, deep sky objects — a visual archive of the cosmos with physical explanations.',
    accent: '#2dd4bf',
  },
  {
    to: '/contact',
    icon: MessageSquare,
    label: 'Ask a Question',
    titleId: 'nav-card-t3',
    descId: 'nav-card-d3',
    imgId: 'nav-card-img-5e6f',
    title: 'Ask Your Teacher',
    desc: 'Have a question about the cosmos? Send it directly to your physics teacher.',
    accent: '#f5c842',
  },
];

export default function HomeNavCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#0f1629]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#8892b0] mb-3">
            Navigate the Site
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#f0f4ff]">
            Where would you like to go?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ to, icon: Icon, titleId, descId, imgId, title, desc, accent }) => (
            <Link
              key={to}
              to={to}
              className="group relative rounded-2xl overflow-hidden border border-[#1e2a4a] hover:border-[#1e2a4a]/60 transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={title}
                  data-strk-img-id={imgId}
                  data-strk-img={`[${descId}] [${titleId}] astronomy`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1629] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 bg-[#0f1629] flex-1 flex flex-col">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${accent}15` }}
                >
                  <Icon className="w-4 h-4" style={{ color: accent }} />
                </div>
                <h3 id={titleId} className="text-base font-medium text-[#f0f4ff] mb-2">{title}</h3>
                <p id={descId} className="text-sm text-[#8892b0] leading-relaxed flex-1">{desc}</p>
                <div
                  className="flex items-center gap-2 mt-5 text-xs font-mono tracking-wide group-hover:gap-3 transition-all duration-200"
                  style={{ color: accent }}
                >
                  Explore
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
