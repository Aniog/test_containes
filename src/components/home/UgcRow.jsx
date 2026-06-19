import { ugcContent } from '@/data/products'

export default function UgcRow() {
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-8">
        <div className="text-center">
          <p className="font-sans text-[11px] tracking-[0.12em] uppercase text-[#C69C6D] mb-3">
            As Seen On You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D2A24]">
            Worn in Real Life
          </h2>
          <div className="w-16 h-[1px] bg-[#C69C6D] mx-auto mt-4" />
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto px-5 md:px-8 pb-4 hide-scrollbar snap-x snap-mandatory">
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[220px] md:w-[260px] snap-start"
            >
              <div className="relative aspect-[9/16] bg-[#F0E9DF] rounded-sm overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.product}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-sm text-white italic leading-snug">
                    &ldquo;{item.caption}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}