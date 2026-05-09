import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Tag, ExternalLink, Flame } from 'lucide-react';
import { NEWS, PLATFORMS } from '../data/gameData';

const platformBadgeStyle = {
  steam: 'bg-[#1b2838] text-[#66c0f4] border border-[#66c0f4]/30',
  epic: 'bg-[#0078f2]/20 text-[#60a5fa] border border-[#0078f2]/30',
  nintendo: 'bg-[#e4000f]/20 text-[#f87171] border border-[#e4000f]/30',
  playstation: 'bg-[#003087]/30 text-[#60a5fa] border border-[#0070d1]/30',
  xbox: 'bg-[#107c10]/20 text-[#4ade80] border border-[#52b043]/30',
};

const platformLabel = {
  steam: 'Steam',
  epic: 'Epic Games',
  nintendo: 'Nintendo',
  playstation: 'PlayStation',
  xbox: 'Xbox',
};

export default function HeroSection({ activePlatform }) {
  const hotNews = NEWS.filter(n => n.hot && (activePlatform === 'all' || n.platform === activePlatform));
  const featured = hotNews.length > 0 ? hotNews : NEWS.slice(0, 3);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(0);
  }, [activePlatform]);

  useEffect(() => {
    if (featured.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % featured.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featured.length]);

  const prev = () => setCurrent(c => (c - 1 + featured.length) % featured.length);
  const next = () => setCurrent(c => (c + 1) % featured.length);

  if (featured.length === 0) return null;

  const item = featured[current];

  return (
    <section className="relative w-full overflow-hidden rounded-2xl" style={{ height: '420px' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-10 max-w-2xl">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${platformBadgeStyle[item.platform]}`}>
            {platformLabel[item.platform]}
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center gap-1">
            <Flame className="w-3 h-3" /> {item.tag}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
          {item.title}
        </h1>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5 line-clamp-2">
          {item.summary}
        </p>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-green-600 text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-green-700 transition-colors">
            Read More <ExternalLink className="w-4 h-4" />
          </button>
          <span className="text-gray-200 text-xs">{item.date}</span>
        </div>
      </div>

      {/* Navigation arrows */}
      {featured.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots */}
      {featured.length > 1 && (
        <div className="absolute bottom-4 right-6 flex gap-1.5">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>
      )}

      {/* Tag icon */}
      <div className="absolute top-4 right-4">
        <Tag className="w-5 h-5 text-white/40" />
      </div>
    </section>
  );
}
