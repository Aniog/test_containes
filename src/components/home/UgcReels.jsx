import { ugcCards } from '@/data/products.js'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function UgcReels() {
  return (
    <section className="bg-[#17110D] px-5 py-20 text-[#FBF8F2] md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B9853B]">Seen on you</p>
            <h2 className="mt-3 font-serif text-4xl text-[#FBF8F2] md:text-5xl">The Reels Edit</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#FBF8F2]/75">A soft-scroll strip of real-life styling moments: ear stacks, neckline layers, and gift-ready shine.</p>
        </div>
        <div className="flex snap-x gap-5 overflow-x-auto pb-3">
          {ugcCards.map((card) => (
            <article key={card.id} className="group relative aspect-[9/16] w-[72vw] shrink-0 snap-start overflow-hidden bg-[#5D3A1E] sm:w-64 md:w-72">
              <img
                alt={card.caption}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={card.imgId}
                data-strk-img={`[${card.descId}] [${card.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="520"
                src={placeholder}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17110D]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 id={card.titleId} className="font-serif text-2xl text-[#FBF8F2]">{card.caption}</h3>
                <p id={card.descId} className="mt-2 text-xs leading-5 text-[#FBF8F2]/80">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
