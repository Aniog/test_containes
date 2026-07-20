import { StockImg } from '@/components/ui/StockImg'

const reels = [
  { id: 'ugc-1', query: 'gold hoop earrings worn on ear close up editorial', caption: 'Everyday gold' },
  { id: 'ugc-2', query: 'gold necklace on model neck warm light editorial', caption: 'Layered moments' },
  { id: 'ugc-3', query: 'gold huggie earrings ear stack jewelry editorial', caption: 'Stacked huggies' },
  { id: 'ugc-4', query: 'gold ring hand close up jewelry editorial warm', caption: 'Quiet shine' },
  { id: 'ugc-5', query: 'gold earrings and necklace gift box flat lay jewelry', caption: 'Made to gift' },
  { id: 'ugc-6', query: 'woman wearing gold necklace portrait editorial jewelry', caption: 'Treasured' },
]

export function UgcStrip() {
  return (
    <section className="bg-velmora-light py-16 md:py-24">
      <div className="container-velmora">
        <h2 className="text-center font-serif text-3xl text-velmora-dark md:text-4xl">
          Worn by You
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-velmora-muted md:text-base">
          Tag @velmora to share your story.
        </p>
      </div>

      <div className="mt-10 flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide sm:px-6 lg:px-8">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="group relative aspect-[9/16] w-[170px] flex-shrink-0 overflow-hidden rounded-2xl bg-stone-200 md:w-[220px]"
          >
            <StockImg
              id={reel.id}
              query={reel.query}
              ratio="9x16"
              width={400}
              alt={reel.caption}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-white">
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
