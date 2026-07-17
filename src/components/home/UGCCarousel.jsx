const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80',
    caption: 'Golden hour with my favorite hoops',
    handle: '@sarah_style',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&q=80',
    caption: 'The Vivid Aura cuff is everything',
    handle: '@jessica.wears',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1515562141589-677c1e4757c0?w=600&q=80',
    caption: 'Layered necklaces for every outfit',
    handle: '@amanda.accessories',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80',
    caption: 'New arrivals, already obsessed',
    handle: '@emilys_jewelbox',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    caption: 'Dainty and divine',
    handle: '@rachel.adorns',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    caption: 'Gift-wrapped and ready',
    handle: '@lauren.gifts',
  },
]

export default function UGCCarousel() {
  return (
    <section className="py-16 md:py-24 bg-velvet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-widest uppercase text-gold-500 mb-3">
            As Seen On
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink-800 font-light">
            Worn by You
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar pb-2">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 w-max">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-48 md:w-56 aspect-[9/16] flex-shrink-0 overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={`UGC by ${item.handle}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-white italic leading-snug">
                  &ldquo;{item.caption}&rdquo;
                </p>
                <p className="font-sans text-xs text-white/70 mt-1.5 tracking-wider">
                  {item.handle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}