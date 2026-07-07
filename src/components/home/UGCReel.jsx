import { ugcReels } from '@/data/products';

const reelImages = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=85',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=85',
  'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=85',
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=85',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=85',
  'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=85',
];

export default function UGCReel() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 lg:mb-10">
        <div className="text-center">
          <h2 className="font-serif text-3xl lg:text-4xl text-warm-dark mb-3">As Seen On You</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto" />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 w-max">
          {ugcReels.map((reel, i) => (
            <div
              key={reel.id}
              className="relative w-36 sm:w-40 lg:w-48 flex-shrink-0 aspect-[9/16] rounded-sm overflow-hidden group cursor-pointer"
            >
              <img
                src={reelImages[i % reelImages.length]}
                alt={`User style ${reel.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                <p className="font-serif text-xs lg:text-sm text-white italic leading-tight">
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