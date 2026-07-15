import SectionHeading from '@/components/ui/SectionHeading.jsx'

export default function UgcStrip({ items }) {
  return (
    <section className="bg-velmora-porcelain px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Styled in real life"
          title="An editorial reels-inspired row"
          description="A warm stream of ear stacks, neckline crops, and gifting moments — intimate, wearable, and softly polished."
        />

        <div className="flex snap-x gap-5 overflow-x-auto pb-3">
          {items.map((item) => {
            const titleId = `${item.id}-title`
            const captionId = `${item.id}-caption`

            return (
              <article
                className="relative min-w-[14rem] snap-start overflow-hidden rounded-[2rem] bg-velmora-obsidian text-velmora-ivory shadow-velmora sm:min-w-[16rem]"
                key={item.id}
              >
                <img
                  alt={item.title}
                  className="h-[28rem] w-full object-cover"
                  data-strk-img-id={`${item.id}-img`}
                  data-strk-img={`[${captionId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian via-velmora-obsidian/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p id={titleId} className="font-serif text-3xl leading-none text-velmora-ivory">
                    {item.title}
                  </p>
                  <p id={captionId} className="mt-3 text-sm leading-6 text-velmora-ivory/80">
                    {item.caption}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
