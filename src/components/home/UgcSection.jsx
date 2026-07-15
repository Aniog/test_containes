import SectionHeading from '@/components/ui/SectionHeading'
import { ugcMoments } from '@/data/storeData'
import ProductImage from '@/components/ui/ProductImage'

export default function UgcSection() {
  return (
    <section className="border-y border-velmora-sand bg-velmora-ivory py-16 md:py-24">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Worn and loved"
          title="A reel of everyday styling moments."
          description="A soft, social-inspired stream of how Velmora is worn from morning errands to late dinner reservations."
        />
      </div>
      <div className="mt-10 overflow-x-auto">
        <div className="page-shell flex min-w-max gap-5 pb-2">
          {ugcMoments.map((moment) => {
            const image = {
              alt: moment.title,
              imgId: moment.imgId,
              titleId: moment.titleId,
              descId: moment.descId,
              title: moment.title,
              description: moment.description,
            }

            return (
              <article key={moment.id} className="group relative w-[220px] overflow-hidden rounded-[2rem] border border-velmora-sand bg-velmora-mist shadow-velmora-soft">
                <ProductImage image={image} ratio="9x16" width="600" className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/65 to-transparent p-5 pt-16 text-velmora-cream">
                  <p className="font-display text-2xl leading-none">{moment.title}</p>
                  <p className="mt-3 text-sm leading-6 text-velmora-cream/80">{moment.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
