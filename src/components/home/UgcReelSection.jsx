import SectionHeader from '@/components/shared/SectionHeader'
import StoreImage from '@/components/shared/StoreImage'

const UgcReelSection = ({ items }) => {
  return (
    <section className="border-y border-stone-800 bg-stone-900 py-16 text-stone-50 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Seen on you"
          title="A soft-focus reel of daily wear"
          description="Inspired by the intimacy of social storytelling, with the restraint of an editorial strip."
        />

        <div className="mt-10 -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-3 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
          {items.map((item) => (
            <article
              key={item.id}
              className="group relative min-w-[17rem] snap-start overflow-hidden rounded-[2rem] border border-stone-800 bg-stone-950 shadow-[0_20px_50px_rgba(0,0,0,0.25)] md:min-w-[18rem]"
            >
              <div className="aspect-[9/16] overflow-hidden">
                <StoreImage
                  alt={item.title}
                  imgId={item.imgId}
                  query={`[${item.descId}] [${item.titleId}]`}
                  ratio="9x16"
                  width="700"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p id={item.titleId} className="font-serif text-2xl leading-tight text-stone-50">
                  {item.title}
                </p>
                <p id={item.descId} className="mt-2 text-sm leading-6 text-stone-200">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UgcReelSection
