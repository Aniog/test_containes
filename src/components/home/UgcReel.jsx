import ProductImage from '@/components/ProductImage.jsx'
import { ugcItems } from '@/data/products.js'

export default function UgcReel() {
  return (
    <section className="bg-velmora-ink py-16 text-velmora-ivory md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">Seen in the glow</p>
            <h2 className="mt-3 font-serif text-5xl leading-none md:text-6xl">Worn, layered, loved</h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-7 text-velmora-linen md:block">
            A reel-style strip of everyday golden moments from the Velmora community.
          </p>
        </div>
      </div>
      <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto px-5 pb-2 md:px-8">
        {ugcItems.map((item) => {
          const captionId = `ugc-${item.id}-caption`
          return (
            <article key={item.id} className="relative aspect-[9/16] w-[68vw] shrink-0 snap-center overflow-hidden bg-velmora-pearl sm:w-64 lg:w-72">
              <ProductImage
                id={item.imageId}
                query={`[${captionId}]`}
                ratio="9x16"
                width="600"
                alt={item.caption}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-transparent to-transparent" />
              <p id={captionId} className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-none text-velmora-ivory">
                {item.caption}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
