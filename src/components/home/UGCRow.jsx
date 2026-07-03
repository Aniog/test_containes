import { ugcReels } from '../../data/products';

const reelGradients = [
  'from-amber-900/60 via-amber-800/40 to-transparent',
  'from-warm-800/60 via-warm-700/40 to-transparent',
  'from-stone-800/60 via-stone-700/40 to-transparent',
  'from-yellow-900/60 via-yellow-800/40 to-transparent',
  'from-amber-950/60 via-amber-900/40 to-transparent',
];

const reelImages = [
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop',
  'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=700&fit=crop',
  'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=700&fit=crop',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop',
  'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&h=700&fit=crop',
];

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Worn by You</h2>
          <p className="mt-3 text-sm text-warm-500 font-sans">
            Tag @velmorajewelry to be featured.
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 md:gap-6 px-4 md:px-6 lg:px-8 w-max">
          {ugcReels.map((reel, i) => (
            <div
              key={reel.id}
              className="relative w-36 md:w-44 aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <img
                src={reelImages[i % reelImages.length]}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${reelGradients[i % reelGradients.length]}`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-serif italic leading-tight">
                  &ldquo;{reel.caption}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}