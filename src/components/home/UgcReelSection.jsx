import { getImageSrc } from '@/lib/images';

const reels = [
  { id: 'ugc-1', imgId: 'ugc-reel-1', titleId: 'ugc-title-1', title: 'Ear stack season' },
  { id: 'ugc-2', imgId: 'ugc-reel-2', titleId: 'ugc-title-2', title: 'Golden hour glow' },
  { id: 'ugc-3', imgId: 'ugc-reel-3', titleId: 'ugc-title-3', title: 'Layered & loved' },
  { id: 'ugc-4', imgId: 'ugc-reel-4', titleId: 'ugc-title-4', title: 'Gift-worthy moments' },
  { id: 'ugc-5', imgId: 'ugc-reel-5', titleId: 'ugc-title-5', title: 'Everyday luxe' },
  { id: 'ugc-6', imgId: 'ugc-reel-6', titleId: 'ugc-title-6', title: 'Fine details' },
];

export function UgcReelSection() {
  return (
    <section className="py-16 md:py-24 bg-cream-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-ink">@velmora on you</h2>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 w-max">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative w-48 md:w-60 aspect-[9/16] flex-shrink-0 overflow-hidden group cursor-pointer"
            >
              <img
                src={getImageSrc(reel.imgId)}
                alt={reel.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-4 left-4 right-4 font-serif text-lg md:text-xl text-cream italic"
              >
                {reel.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
