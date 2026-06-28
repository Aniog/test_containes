import EditorialVisual from '@/components/ui/EditorialVisual'
import SectionHeading from '@/components/ui/SectionHeading'

export default function ReelRow({ items }) {
  return (
    <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading
          eyebrow="Seen on"
          title="Styled in Real Life"
          description="A reel-inspired edit of close-up ear and neckline moments that capture Velmora in motion."
        />
        <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-2">
          {items.map((item, index) => (
            <article
              key={item.id}
              className="relative min-w-[16rem] overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-noir shadow-velmora-soft sm:min-w-[18rem]"
            >
              <EditorialVisual
                mood={index % 2 === 0 ? 'portrait' : 'hero'}
                accent={index % 2 === 0 ? 'left' : 'right'}
                className="aspect-[9/16] rounded-none"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-noir via-velmora-noir/60 to-transparent px-5 pb-5 pt-16 text-velmora-ivory">
                <p className="font-display text-3xl leading-none">{item.caption}</p>
                <p className="mt-2 text-sm text-velmora-ivory/78">{item.subcopy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
