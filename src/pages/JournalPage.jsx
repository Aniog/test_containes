import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { journalEntries } from '@/data/storeData'
import PageHero from '@/components/storefront/PageHero'

const JournalPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      const result = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      cleanup = typeof result === 'function' ? result : () => {}
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Velmora Journal"
        title="Styling notes, gifting ideas, and a softer approach to adornment."
        description="An editorial space for slow inspiration around the pieces you keep closest."
      />

      <section className="velmora-shell grid gap-8 py-16 sm:py-20 lg:grid-cols-3">
        {journalEntries.map((entry) => {
          const titleId = `journal-page-${entry.slug}-title`
          const descId = `journal-page-${entry.slug}-desc`
          const cueId = `journal-page-${entry.slug}-cue`

          return (
            <article
              key={entry.slug}
              className="overflow-hidden rounded-[2rem] border border-velmora-sand bg-velmora-card shadow-soft"
            >
              <p id={cueId} className="sr-only">
                {entry.imageCue}
              </p>
              <img
                src=""
                alt={entry.title}
                className="aspect-[4/3] w-full object-cover"
                data-strk-img-id={`journal-page-${entry.slug}-image`}
                data-strk-img={`[${cueId}] [${descId}] [${titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
              />
              <div className="space-y-4 p-6">
                <p className="text-xs uppercase tracking-luxe text-velmora-gold">Editorial note</p>
                <h2 id={titleId} className="font-display text-4xl text-velmora-ink">
                  {entry.title}
                </h2>
                <p id={descId} className="text-sm leading-7 text-velmora-smoke">
                  {entry.excerpt}
                </p>
                <p className="text-sm leading-7 text-velmora-smoke">
                  We’re building out the full journal experience soon. For now, this storefront keeps the tone, structure, and visual rhythm ready for real editorial content.
                </p>
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default JournalPage
