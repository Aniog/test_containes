import useImageLoader from '@/hooks/useImageLoader'

const reels = [
  { id: 'reel-1', caption: 'Stacked for Sunday brunch' },
  { id: 'reel-2', caption: 'Date night essentials' },
  { id: 'reel-3', caption: 'Office to evening' },
  { id: 'reel-4', caption: 'Gift-ready moments' },
  { id: 'reel-5', caption: 'Everyday gold' },
  { id: 'reel-6', caption: 'Minimal & meaningful' },
]

export default function UGCReels() {
  const containerRef = useImageLoader([])

  return (
    <section className="bg-cream-100 py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-8 flex items-end justify-between md:mb-10">
          <div>
            <p className="label-uppercase mb-2 text-gold-600">@velmorafine</p>
            <h2 className="heading-display text-2xl md:text-4xl">
              Styled by You
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hidden text-xs uppercase tracking-widest underline underline-offset-4 md:block"
          >
            Follow Along
          </a>
        </div>
      </div>

      <div
        ref={containerRef}
        className="reel-scroll flex gap-4 overflow-x-auto px-5 pb-4 md:gap-5 md:px-10"
      >
        {[...reels, ...reels].map((reel, index) => (
          <div
            key={`${reel.id}-${index}`}
            className="group relative aspect-[9/16] w-[180px] flex-shrink-0 overflow-hidden rounded-sm bg-charcoal-900 md:w-[220px]"
          >
            <img
              data-strk-img-id={`reel-${reel.id}-${index}`}
              data-strk-img={`[${reel.id}-caption] Velmora gold jewelry worn model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="img-zoom h-full w-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent" />
            <p
              id={`${reel.id}-caption`}
              className="absolute bottom-4 left-4 right-4 font-serif text-base italic leading-snug text-cream-100"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
