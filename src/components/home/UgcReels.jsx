import { Play } from 'lucide-react';
import { ugcReels } from '@/data/products';

export default function UgcReels() {
  return (
    <section className="bg-cream py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-[11px] uppercase tracking-eyebrow text-gold font-medium">
              @velmora · As worn
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-espresso leading-tight">
              On the feed
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-block text-xs uppercase tracking-eyebrow text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* Horizontal scroll reels */}
      <div className="overflow-x-auto no-scrollbar">
        <ul className="flex gap-4 md:gap-5 px-6 md:px-10 pb-2 min-w-max">
          {ugcReels.map((reel) => (
            <li
              key={reel.id}
              className="relative shrink-0 w-[220px] md:w-[260px] aspect-[9/16] overflow-hidden bg-espresso group cursor-pointer"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={`ugc-${reel.id}`}
                data-strk-img={`[ugc-caption-${reel.id}] ${reel.queryHint}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-espresso/10" />

              {/* Play icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-ivory/15 backdrop-blur-sm grid place-items-center">
                <Play className="w-3 h-3 text-ivory fill-ivory" />
              </div>

              {/* Caption */}
              <p
                id={`ugc-caption-${reel.id}`}
                className="absolute bottom-5 left-5 right-5 font-serif italic text-ivory text-xl md:text-2xl leading-tight"
              >
                {reel.caption}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
