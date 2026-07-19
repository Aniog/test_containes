import { useRef } from 'react'
import EditorialImage from '@/components/common/EditorialImage'
import { ugcMoments } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

const UgcStrip = () => {
  const sectionRef = useRef(null)
  useImageLoader(sectionRef, [])

  return (
    <section ref={sectionRef} className="bg-velmora-mist py-20 text-velmora-ink lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold-deep">Seen in daily light</p>
            <h2 id="ugc-title" className="mt-3 font-serif text-5xl font-semibold text-velmora-ink">Worn, saved, replayed</h2>
          </div>
          <p id="ugc-subtitle" className="max-w-sm font-sans text-sm leading-7 text-velmora-taupe">A reel-style edit of gold pieces in motion: close, warm, and personal.</p>
        </div>
      </div>
      <div className="flex snap-x gap-4 overflow-x-auto px-5 pb-3 md:px-8 lg:px-[calc((100vw-80rem)/2+2rem)]">
        {ugcMoments.map((moment) => {
          const captionId = `ugc-${moment.id}-caption`
          const noteId = `ugc-${moment.id}-note`
          return (
            <article key={moment.id} className="group relative aspect-[9/16] w-64 shrink-0 snap-start overflow-hidden rounded-[2rem] bg-velmora-champagne shadow-sm md:w-72">
              <EditorialImage
                id={`ugc-${moment.id}-img-e4c1`}
                query={`[${noteId}] [${captionId}] [ugc-subtitle] [ugc-title]`}
                ratio="9x16"
                width="500"
                alt={moment.caption}
                className="h-full w-full"
                imgClassName="group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-espresso/85 to-transparent p-5 text-velmora-ivory">
                <p id={captionId} className="font-serif text-2xl font-semibold leading-7 text-velmora-ivory">{moment.caption}</p>
                <p id={noteId} className="mt-2 font-sans text-xs leading-5 text-velmora-champagne">{moment.note}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default UgcStrip
