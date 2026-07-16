import { useRef } from 'react'
import { useImageLoader } from '@/hooks/useImageLoader.jsx'

function ReelsStrip({ moments }) {
  const containerRef = useRef(null)
  useImageLoader(containerRef, [moments.length])

  return (
    <section className="velmora-container py-16 md:py-24" ref={containerRef}>
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="velmora-eyebrow">Styled in real life</p>
          <h2 className="mt-4 font-display text-5xl text-velmora-ink sm:text-6xl">
            Velmora in motion
          </h2>
        </div>
        <p className="hidden max-w-sm text-sm leading-7 text-velmora-truffle md:block">
          A reel-style edit of softly lit moments that capture how Velmora is worn every day.
        </p>
      </div>

      <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4">
        {moments.map((moment) => {
          const captionId = `${moment.id}-caption`
          const titleId = `${moment.id}-title`

          return (
            <article
              key={moment.id}
              className="group relative min-w-[240px] max-w-[240px] snap-start overflow-hidden rounded-[2rem] bg-velmora-ink shadow-card sm:min-w-[280px] sm:max-w-[280px]"
            >
              <img
                alt={moment.caption}
                className="h-[430px] w-full object-cover transition duration-500 ease-velmora group-hover:scale-[1.04]"
                data-strk-img-id={`${moment.id}-img-5h2d`}
                data-strk-img={`[${captionId}] [${titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/15 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <p id={titleId} className="velmora-eyebrow text-velmora-pearl/70">
                  Reels Edit
                </p>
                <p id={captionId} className="mt-2 font-display text-3xl leading-tight text-velmora-pearl">
                  {moment.caption}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ReelsStrip
