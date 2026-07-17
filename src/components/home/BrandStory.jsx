import { ArrowUpRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section id="about" className="bg-velmora-ivory py-16 text-velmora-espresso sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <div className="relative min-h-[460px] overflow-hidden bg-velmora-cacao lg:min-h-[640px]">
          <img
            alt="Velmora jewelry craft and warm editorial gold details"
            className="h-full w-full object-cover opacity-90"
            data-strk-img-id="brand-story-craft-e2f118"
            data-strk-img="[story-copy] [story-title]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="950"
            loading="lazy"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="absolute inset-0 border border-velmora-sand/20" />
        </div>

        <div className="flex flex-col justify-center border-y border-velmora-sand/70 py-10 lg:py-16 lg:pl-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Our point of view</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-espresso sm:text-6xl">
            Fine feeling, everyday ease.
          </h2>
          <p id="story-copy" className="mt-7 text-base leading-8 text-velmora-cacao/80 sm:text-lg">
            Velmora was created for women who want jewelry that feels intentional without waiting for an occasion. We design demi-fine gold pieces with elegant proportions, comfortable finishes, and the kind of quiet detail that becomes part of your daily uniform.
          </p>
          <p className="mt-5 text-base leading-8 text-velmora-cacao/80">
            Direct-to-consumer pricing keeps each piece premium but accessible, with every order arriving gift-ready.
          </p>
          <a
            href="#journal"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-velmora-gold px-7 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-bronze transition hover:bg-velmora-gold hover:text-velmora-espresso"
          >
            Our Story
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
