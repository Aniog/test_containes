const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&q=80',
    caption: 'Golden hour with my Vivid Aura',
    handle: '@sophia_elise',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80',
    caption: 'The Flora Nectar necklace is everything',
    handle: '@maria_jewelove',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80',
    caption: 'Huggies on repeat',
    handle: '@claire_aday',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    caption: 'Everyday luxury',
    handle: '@julia_rose',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80',
    caption: 'Layered in gold',
    handle: '@emma_wears',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
    caption: 'Gifted myself the Heirloom set',
    handle: '@nicole_style',
  },
];

export default function UGCReel() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-light">
            As Seen On You
          </h2>
          <p className="text-brand-warm-gray mt-3 text-sm md:text-base font-light">
            Tag @velmorajewelry to be featured.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-thin -mx-4 sm:mx-0">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[240px] sm:w-[260px] group cursor-pointer"
            >
              <div className="aspect-[9/16] overflow-hidden bg-brand-gold-light relative">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-white text-sm italic leading-snug">
                    &ldquo;{item.caption}&rdquo;
                  </p>
                  <p className="text-white/70 text-xs mt-1">{item.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}