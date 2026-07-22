import { Play } from 'lucide-react';

const ugcItems = [
  {
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=700&fit=crop',
    caption: 'Golden hour with my Vivid Aura cuff',
    handle: '@sophia_style',
  },
  {
    image: 'https://images.unsplash.com/photo-1502773860571-211a597d6e4b?w=400&h=700&fit=crop',
    caption: 'The Flora Nectar necklace is everything',
    handle: '@emma.adorns',
  },
  {
    image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&h=700&fit=crop',
    caption: 'Huggies that actually stay comfortable all day',
    handle: '@olivia.k',
  },
  {
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=700&fit=crop',
    caption: 'Amber Lace — my new everyday drop',
    handle: '@isabella.wears',
  },
  {
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=700&fit=crop',
    caption: 'Gifted the Royal Heirloom Set — she cried',
    handle: '@mia.gifts',
  },
];

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C8A45C] font-medium mb-3">
            As Seen On
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] font-light">
            Worn by You
          </h2>
          <div className="w-12 h-px bg-[#C8A45C] mx-auto mt-4" />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto pb-4 -mx-4 md:mx-0 px-4 md:px-8 scrollbar-hide">
        <div className="flex gap-4 md:gap-6 w-max">
          {ugcItems.map((item, index) => (
            <div
              key={index}
              className="relative w-48 md:w-56 aspect-[9/16] overflow-hidden group cursor-pointer flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Play button overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-4 h-4 text-white ml-0.5" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-xs font-serif italic leading-relaxed">
                  &ldquo;{item.caption}&rdquo;
                </p>
                <p className="text-white/60 text-[10px] tracking-wide mt-1">
                  {item.handle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}