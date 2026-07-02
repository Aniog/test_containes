import { ugcItems } from '@/data/products';

const ugcImages = [
  'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
  'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80',
  'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
  'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
];

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Worn by You</h2>
          <p className="mt-3 text-taupe text-sm">Real moments, real gold</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 hide-scrollbar">
        {ugcItems.map((item, i) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              src={ugcImages[i]}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream italic">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
