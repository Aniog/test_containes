import { ArrowUpRight } from 'lucide-react'

function StorySection() {
  return (
    <section id="story" className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
      <div className="grid gap-8 rounded-[2.25rem] bg-white p-6 shadow-[0_24px_70px_rgba(28,25,23,0.08)] md:grid-cols-[1.1fr_0.9fr] md:p-8 lg:p-10">
        <div className="overflow-hidden rounded-[1.75rem] bg-stone-100">
          <div className="aspect-[4/5]">
            <img
              alt="Velmora brand story"
              className="h-full w-full object-cover"
              data-strk-img-id="story-image-velmora-46ac9d"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6 px-2 py-4 md:px-6">
          <p className="text-xs uppercase tracking-[0.32em] text-stone-500">Our Story</p>
          <h2
            id="story-title"
            className="font-display text-4xl leading-none text-stone-900 md:text-5xl"
          >
            Jewelry made to feel intimate, polished, and lasting.
          </h2>
          <p id="story-copy" className="text-sm leading-8 text-stone-600 md:text-base">
            Velmora was created for women who want the warmth of fine-looking jewelry without the formality of occasion-only pieces. Each design balances softness and structure so it can move easily between daily ritual, meaningful gifting, and evenings that call for something a little more luminous.
          </p>
          <a
            href="#journal"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-stone-900 transition hover:text-stone-600"
          >
            Our Story
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default StorySection
