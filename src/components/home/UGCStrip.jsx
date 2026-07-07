import { useStockImages } from '@/hooks/useStockImages'

export default function UGCStrip({ entries }) {
  const containerRef = useStockImages([entries])

  return (
    <section className="section-shell border-y border-mist/70 bg-porcelain">
      <div className="container-shell space-y-10" ref={containerRef}>
        <div className="space-y-4">
          <p className="eyebrow">Reel Edit</p>
          <h2 className="section-title">Worn in Real Moments</h2>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-2">
          {entries.map((entry) => {
            const titleId = `ugc-${entry.id}-title`
            const cueId = `ugc-${entry.id}-cue`

            return (
              <article key={entry.id} className="relative min-w-[16rem] max-w-[16rem] overflow-hidden rounded-[2rem] bg-obsidian text-porcelain shadow-xl shadow-obsidian/10">
                <div
                  className="aspect-[9/16] w-full bg-cover bg-center"
                  role="img"
                  aria-label={entry.caption}
                  data-strk-bg-id={`ugc-${entry.id}-image`}
                  data-strk-bg={`[${cueId}] [${titleId}]`}
                  data-strk-bg-ratio="9x16"
                  data-strk-bg-width="720"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian via-obsidian/65 to-transparent px-5 pb-5 pt-16">
                  <p id={titleId} className="font-serif text-2xl leading-tight text-porcelain">
                    {entry.caption}
                  </p>
                </div>
                <p id={cueId} className="sr-only">
                  {entry.cue}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
