import SectionHeading from '@/components/ui/SectionHeading'
import EditorialVisual from '@/components/ui/EditorialVisual'
import { aboutPillars } from '@/data/products'

export default function AboutPage() {
  return (
    <div className="px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="About Velmora"
          title="Jewelry with a softer kind of luxury"
          description="We design demi-fine pieces with enough polish for a gift and enough ease for every day."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-noir shadow-velmora-soft">
            <EditorialVisual mood="gift" className="aspect-[4/5] rounded-none" />
          </div>
          <div className="rounded-[2rem] border border-velmora-line bg-velmora-ivory p-7 shadow-velmora-soft sm:p-9">
            <h2 className="font-display text-5xl leading-none text-velmora-ink sm:text-6xl">
              Designed for modern keepsakes.
            </h2>
            <p className="mt-5 text-base leading-8 text-velmora-taupe">
              Velmora Fine Jewelry was imagined for women who want pieces that feel rich in mood,
              flattering in finish, and effortless in styling. Our collections sit between occasion-ready
              and everyday essential, with warm gold tones, wearable silhouettes, and elevated packaging
              that makes every arrival feel like a small ritual.
            </p>
            <div className="mt-8 grid gap-5">
              {aboutPillars.map((pillar) => (
                <article key={pillar.id} className="rounded-[1.5rem] border border-velmora-line bg-velmora-pearl p-5">
                  <h3 className="text-sm uppercase tracking-product text-velmora-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-velmora-taupe">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
