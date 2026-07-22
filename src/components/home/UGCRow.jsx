import { useEffect, useRef } from 'react'

const ugcItems = [
  {
    id: 'ugc-1',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&auto=format',
    caption: 'Evening glow with my Golden Sphere Huggies',
    author: '@sophia_m',
  },
  {
    id: 'ugc-2',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&auto=format',
    caption: 'The Vivid Aura cuff is everything',
    author: '@emma_j',
  },
  {
    id: 'ugc-3',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&auto=format',
    caption: 'Stacking my Velmora pieces',
    author: '@lily_rose',
  },
  {
    id: 'ugc-4',
    image: 'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?w=400&auto=format',
    caption: 'Gift from my sister — obsessed',
    author: '@claire_b',
  },
  {
    id: 'ugc-5',
    image: 'https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?w=400&auto=format',
    caption: 'The Royal Heirloom set is a dream',
    author: '@ava_w',
  },
  {
    id: 'ugc-6',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&auto=format',
    caption: 'Wearing my Flora Nectar on repeat',
    author: '@mia_k',
  },
]

export default function UGCRow() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let animationId
    let scrollPos = 0

    const scroll = () => {
      scrollPos += 0.5
      if (scrollPos >= el.scrollWidth / 2) {
        scrollPos = 0
      }
      el.scrollLeft = scrollPos
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container-wide mb-8">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-velvet-gold mb-2">
          As Seen On
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-text">
          Worn by You
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden px-6 md:px-12"
      >
        {[...ugcItems, ...ugcItems].map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="flex-shrink-0 w-48 md:w-56 relative group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-velvet-surface rounded-sm overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p className="text-xs text-velvet-text font-sans leading-relaxed line-clamp-2">
                {item.caption}
              </p>
              <p className="text-[10px] text-velvet-gold mt-1 font-sans">
                {item.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}