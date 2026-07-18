const ugcItems = [
  {
    id: 'ugc-1',
    image: 'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400&q=80',
    caption: 'Golden hour with my Vivid Aura cuff',
  },
  {
    id: 'ugc-2',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
    caption: 'The Flora Nectar is everything',
  },
  {
    id: 'ugc-3',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&q=80',
    caption: 'Golden Sphere Huggies — my new everyday',
  },
  {
    id: 'ugc-4',
    image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400&q=80',
    caption: 'Amber Lace for the perfect date night',
  },
  {
    id: 'ugc-5',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    caption: 'Royal Heirloom Set — gift of the year',
  },
  {
    id: 'ugc-6',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&q=80',
    caption: 'Stacking my Lunar Crescents',
  },
];

export default function UGCReel() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-warm-black">
            As Seen On You
          </h2>
          <p className="font-sans text-sm text-warm-muted mt-3">
            Tag <span className="text-gold">@velmorajewelry</span> to be featured
          </p>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-6 lg:px-8 pb-2" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] overflow-hidden rounded-sm group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-3 right-3 font-serif text-sm text-white leading-snug">
                "{item.caption}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}