import { useInView } from '@/hooks/useInView'

const ugcItems = [
  {
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop',
    caption: '"My everyday staple" — @sarah.m',
  },
  {
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=700&fit=crop',
    caption: '"Obsessed with the huggies" — @jess_wears',
  },
  {
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac76?w=400&h=700&fit=crop',
    caption: '"Perfect gift for myself" — @emma.k',
  },
  {
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=700&fit=crop',
    caption: '"The necklace is stunning" — @lily.j',
  },
  {
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=700&fit=crop',
    caption: '"Wear them every single day" — @mia.r',
  },
  {
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=700&fit=crop',
    caption: '"So delicate & beautiful" — @ava.l',
  },
]

export default function UGCRow() {
  const [ref, isInView] = useInView({ threshold: 0.05 })

  return (
    <section ref={ref} className={`py-16 md:py-20 bg-velmora-warm transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">As Worn By You</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide">The Velmora Edit</h2>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          {ugcItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 sm:w-56 snap-start relative group"
            >
              <div className="aspect-[9/16] overflow-hidden rounded-sm">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="font-serif text-sm text-velmora-cream italic leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
