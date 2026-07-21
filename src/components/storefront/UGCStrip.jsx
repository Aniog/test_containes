import SectionHeader from '@/components/storefront/SectionHeader'
import { reelMoments } from '@/data/products'

export default function UGCStrip() {
  return (
    <section className="space-y-8 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Styled by You"
          title="Moments in Motion"
          description="A reel-inspired edit of soft gold layers, polished ear stacks, and gift-ready details in real life."
        />
      </div>
      <div className="overflow-x-auto px-4 md:px-8">
        <div className="mx-auto flex max-w-7xl gap-5 pb-2">
          {reelMoments.map((moment) => (
            <article
              key={moment.id}
              className="group relative min-w-[220px] max-w-[220px] overflow-hidden rounded-[2rem] bg-velmora-noir shadow-velvet md:min-w-[260px] md:max-w-[260px]"
            >
              <img
                alt={moment.caption}
                className="aspect-[9/16] h-full w-full object-cover transition duration-500 ease-velvet group-hover:scale-105"
                data-strk-img-id={moment.imageId}
                data-strk-img={`[${moment.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/50 to-transparent px-5 pb-6 pt-16 text-velmora-ivory">
                <p id={moment.titleId} className="font-serif text-2xl leading-tight">
                  {moment.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
