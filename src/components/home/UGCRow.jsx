import { ugcCards } from '../../data/products';

const ugcImages = [
  'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=60&h=700&fit=crop',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=60&h=700&fit=crop',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=60&h=700&fit=crop',
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=60&h=700&fit=crop',
  'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=60&h=700&fit=crop',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=60&h=700&fit=crop',
];

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-deep-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-ivory font-light">
            As Seen on You
          </h2>
          <p className="mt-3 text-ivory/60 text-sm max-w-md mx-auto">
            Tag <span className="text-gold">@velmorajewelry</span> to be featured
          </p>
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-2" style={{ minWidth: 'max-content' }}>
          {ugcCards.map((card, index) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-44 md:w-56 aspect-[9/16] bg-cream/10 rounded-sm overflow-hidden relative group cursor-pointer"
            >
              <img
                src={ugcImages[index % ugcImages.length]}
                alt="Jewelry worn on model"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-xs md:text-sm font-serif italic leading-snug">
                {card.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}