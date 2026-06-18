const reels = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
    caption: 'Everyday elegance',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80',
    caption: 'Stacked & styled',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    caption: 'Golden hour glow',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Date night ready',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80',
    caption: 'Minimal luxe',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80',
    caption: 'Gift-worthy',
  },
]

export default function UGCReels() {
  return (
    <section className="py-16 md:py-24">
      <div className="px-6 md:px-12 lg:px-20 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
          As Worn by You
        </h2>
        <p className="font-sans text-sm text-warm-gray mt-2">
          Tag @velmora to be featured
        </p>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 md:px-12 lg:px-20 pb-4">
          {reels.map(reel => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden relative group cursor-pointer"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-white italic">
                  {reel.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
