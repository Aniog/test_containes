const ugcItems = [
  {
    image: 'https://images.unsplash.com/photo-1617038220302-7a99c9588e15?w=400&q=80',
    caption: 'My new everyday hoops',
    handle: '@sarah_m',
  },
  {
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80',
    caption: 'Golden hour with my huggies',
    handle: '@jessstyle',
  },
  {
    image: 'https://images.unsplash.com/photo-1605100804763-247f67c3557e?w=400&q=80',
    caption: 'Obsessed with this cuff',
    handle: '@lily_adorns',
  },
  {
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    caption: 'Necklace of the season',
    handle: '@emma_wears',
  },
  {
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
    caption: 'Gift for my bestie',
    handle: '@rachel_gifts',
  },
  {
    image: 'https://images.unsplash.com/photo-1589894404892-7310b92ea0c2?w=400&q=80',
    caption: 'Stacking my Velmora',
    handle: '@claire_joi',
  },
]

export default function UGCReel() {
  return (
    <section className="py-16 lg:py-20 bg-velmora-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-800 font-light italic">
            As Seen On You
          </h2>
          <p className="text-velmora-500 text-sm mt-2">
            Tag @velmorajewelry to be featured
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
        <div className="flex gap-4 min-w-max">
          {ugcItems.map((item, index) => (
            <article
              key={index}
              className="relative w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer flex-shrink-0"
            >
              <img
                src={item.image}
                alt={`UGC ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-xs font-serif italic leading-tight">
                  &ldquo;{item.caption}&rdquo;
                </p>
                <p className="text-white/50 text-[10px] mt-1 font-sans">
                  {item.handle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}