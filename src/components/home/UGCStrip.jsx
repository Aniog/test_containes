const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=711&fit=crop',
    caption: 'Everyday elegance',
    handle: '@stylebyemma',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop',
    caption: 'Golden hour glow',
    handle: '@sarahstyles',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop',
    caption: 'Layered perfection',
    handle: '@fashionbyflo',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
    caption: 'Statement earrings',
    handle: '@jewelrylover',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop',
    caption: 'Gift giving season',
    handle: '@gifted_by_velmora',
  },
];

export default function UGCStrip() {
  return (
    <section className="py-16 bg-charcoal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-champagne-600 mb-3">
            Styled by You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900">
            @velmorajewelry
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 sm:w-52 md:w-60 snap-start"
            >
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-ivory-100 text-sm italic mb-1">
                    "{item.caption}"
                  </p>
                  <p className="font-sans text-charcoal-300 text-xs">
                    {item.handle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram CTA */}
      <div className="text-center mt-8">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm text-charcoal-600 hover:text-charcoal-900 underline transition-colors"
        >
          Follow us on Instagram
        </a>
      </div>
    </section>
  );
}
