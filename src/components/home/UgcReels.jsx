import React from 'react';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

const reels = [
  {
    id: 'reel-1',
    title: 'Morning routine',
    handle: '@jane.doe',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
  },
  {
    id: 'reel-2',
    title: 'Date night edit',
    handle: '@lisa.m',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
  },
  {
    id: 'reel-3',
    title: 'Office glam',
    handle: '@emma.style',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
  },
  {
    id: 'reel-4',
    title: 'Weekend brunch',
    handle: '@sophie.l',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
  },
  {
    id: 'reel-5',
    title: 'Gift guide',
    handle: '@velmora',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
  },
];

const UgcReels = () => {
  return (
    <section className="bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-accent mb-2">@velmora</p>
            <h2 className="font-serif text-2xl md:text-3xl text-ink">As Worn By You</h2>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative min-w-[160px] md:min-w-[200px] aspect-[9/16] rounded-sm overflow-hidden snap-start group cursor-pointer"
            >
              <img
                src={reel.image}
                alt={reel.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-12 w-12 rounded-full bg-surface/90 flex items-center justify-center">
                  <Play className="h-5 w-5 text-ink ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-serif text-sm text-surface truncate">{reel.title}</p>
                <p className="text-[11px] text-surface/70">{reel.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcReels;
