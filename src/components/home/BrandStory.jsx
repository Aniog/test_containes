import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-linen px-5 py-16 text-velmora-espresso md:px-8 md:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
        <div className="relative overflow-hidden bg-velmora-parchment shadow-soft">
          <img
            alt="Velmora jewelry studio moment"
            className="aspect-[4/5] h-full w-full object-cover"
            data-strk-img-id="brand-story-editorial"
            data-strk-img="[brand-story-copy] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="md:pl-8 lg:pl-16">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-velmora-goldDeep">Our Story</p>
          <h2 id="brand-story-title" className="font-serif text-5xl font-semibold leading-none text-balance text-velmora-espresso md:text-7xl">Gold for the rituals you keep.</h2>
          <p id="brand-story-copy" className="mt-6 text-base leading-8 text-velmora-charcoal">Velmora was created for women who want jewelry that feels personal, polished, and attainable. Each piece is chosen for warm luminosity, comfortable wear, and the kind of understated detail that becomes part of your daily uniform.</p>
          <a href="#" className="velmora-focus mt-8 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-goldDeep">
            Our Story
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
