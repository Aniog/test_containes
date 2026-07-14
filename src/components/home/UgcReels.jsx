import { ugcStories } from '@/data/products'
import ProductImage from '@/components/product/ProductImage'

export default function UgcReels() {
  return (
    <section className="bg-velmora-espresso py-20 text-velmora-cream lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">Seen on Velmora</p>
            <h2 className="mt-3 font-serif text-5xl font-medium tracking-tight md:text-6xl">Worn in the wild</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-cream/70">A reel-style glimpse of gold cuffs, huggies, and necklaces in soft everyday light.</p>
        </div>
      </div>
      <div className="flex snap-x gap-4 overflow-x-auto px-5 pb-3 md:px-8 lg:px-8">
        {ugcStories.map((story) => (
          <article key={story.id} className="group relative aspect-[9/16] w-[68vw] max-w-[280px] shrink-0 snap-start overflow-hidden rounded-[2rem] bg-velmora-linen shadow-editorial sm:w-[260px]">
            <ProductImage imgId={story.imgId} query={`[${story.titleId}]`} ratio="9x16" width="520" alt={story.caption} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-transparent to-transparent" />
            <p id={story.titleId} className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-none text-velmora-cream">{story.caption}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
