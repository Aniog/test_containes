import { UGCPlaceholder } from '../ui/ProductImagePlaceholder';

const reels = [
  {
    id: 1,
    image: 'earring-cuff',
    caption: 'Everyday elegance ✨',
    author: 'Sarah M.',
  },
  {
    id: 2,
    image: 'floral-necklace',
    caption: 'My new favorite piece',
    author: 'Emily R.',
  },
  {
    id: 3,
    image: 'sphere-huggies',
    caption: 'Golden hour vibes',
    author: 'Jessica L.',
  },
  {
    id: 4,
    image: 'lace-earrings',
    caption: 'Date night ready',
    author: 'Amanda K.',
  },
  {
    id: 5,
    image: 'heirloom-set',
    caption: 'Wedding guest glam',
    author: 'Michelle T.',
  },
  {
    id: 6,
    image: 'earring-cuff',
    caption: 'Stack game strong',
    author: 'Lauren H.',
  },
];

export function UGCReels() {
  return (
    <section className="py-16 md:py-24 bg-rich-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-champagne text-xs tracking-[0.3em] uppercase mb-3">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-ivory">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll reels */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-48 md:w-56 lg:w-64"
            >
              <div className="relative aspect-[9/16] overflow-hidden group cursor-pointer">
                <UGCPlaceholder index={index} className="absolute inset-0 w-full h-full" />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-transparent to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-warm-ivory text-sm italic mb-1">
                    "{reel.caption}"
                  </p>
                  <p className="text-champagne text-xs tracking-wider">
                    — {reel.author}
                  </p>
                </div>

                {/* Play indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-warm-ivory/10 backdrop-blur-sm rounded-full">
                  <svg className="w-3 h-3 text-warm-ivory ml-0.5" viewBox="0 0 12 12" fill="currentColor">
                    <polygon points="2,1 10,6 2,11" />
                  </svg>
                </div>
              </div>
            </div>
          ))}

          {/* View all card */}
          <div className="flex-shrink-0 w-48 md:w-56 lg:w-64">
            <div className="relative aspect-[9/16] overflow-hidden bg-champagne flex flex-col items-center justify-center text-center p-6 group cursor-pointer hover:bg-opacity-90 transition-colors">
              <span className="text-4xl mb-4">✨</span>
              <p className="font-serif text-rich-black text-lg mb-2">
                Share Your Style
              </p>
              <p className="text-rich-black/70 text-xs">
                Tag us @velmorajewelry
              </p>
            </div>
          </div>
        </div>

        {/* Fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-rich-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-rich-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

export default UGCReels;
