import { ArrowUpRight } from 'lucide-react'


const StorySection = () => {
  return (
    <section id="story" className="bg-velmora-parchment px-4 py-16 text-velmora-ink sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden bg-velmora-espresso shadow-velvet">
          <img
            alt="Velmora jewelry craftsmanship"
            data-strk-img-id="story-craft-image-c0fd92"
            data-strk-img="[story-body] [story-title]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            className="aspect-[4/5] h-full w-full object-cover"
          />
          <div className="absolute inset-4 border border-velmora-cream/30" />
        </div>
        <div className="lg:pl-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-bronze">Our atelier note</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl font-medium leading-[0.95] text-velmora-ink md:text-7xl">
            Fine feeling, without the traditional markup.
          </h2>
          <p id="story-body" className="mt-7 text-base leading-8 text-velmora-espresso/78 md:text-lg">
            Velmora is made for women who collect pieces slowly and wear them often. We pair warm 18K gold plating, skin-kind finishes, and small-batch details with direct-to-consumer pricing, so the jewelry feels elevated and still easy to make yours.
          </p>
          <a href="#" className="mt-9 inline-flex items-center gap-3 border-b border-velmora-bronze pb-2 text-xs font-bold uppercase tracking-[0.25em] text-velmora-ink transition hover:text-velmora-bronze">
            Our Story <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default StorySection
