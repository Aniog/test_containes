import { Play } from 'lucide-react'

const ugcItems = [
  {
    image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&q=85',
    caption: 'obsessed with my new gold hoops ✨',
    handle: '@jessica_style',
  },
  {
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=85',
    caption: 'layering necklaces like a pro',
    handle: '@emilys_jewelbox',
  },
  {
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=85',
    caption: 'the perfect everyday ear cuff',
    handle: '@sophia_accessories',
  },
  {
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85',
    caption: 'gift wrapped and ready to go 🎁',
    handle: '@olivia.gifts',
  },
  {
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&q=85',
    caption: 'golden hour with my Velmora pieces',
    handle: '@maya_glows',
  },
  {
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=85',
    caption: 'stacking rings and making memories',
    handle: '@lily_heartgold',
  },
]

export default function UGCRow() {
  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">As Seen On</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-900">Worn by You</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-4" />
        </div>
      </div>

      <div className="overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex gap-4 md:gap-6 w-max">
          {ugcItems.map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-44 md:w-56 aspect-[9/16] bg-cream-200 overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={`UGC ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white/90 text-xs font-light leading-relaxed line-clamp-2">
                  &ldquo;{item.caption}&rdquo;
                </p>
                <p className="text-white/60 text-[10px] uppercase tracking-wider mt-1.5">
                  {item.handle}
                </p>
              </div>
              <div className="absolute top-3 right-3 w-7 h-7 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Play className="w-3 h-3 text-white fill-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}