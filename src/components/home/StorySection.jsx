import { placeholderImage } from '@/data/storeData'

function StorySection() {
  return (
    <section id="story" className="border-y border-mist/70 bg-ivory py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-mist/70 bg-sand shadow-soft">
          <img
            src={placeholderImage}
            alt="Velmora brand story"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id="story-image-velmora-31ab8c"
            data-strk-img="[story-body] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
          />
        </div>

        <div className="space-y-6">
          <p className="text-xs uppercase tracking-luxe text-champagne">Velmora story</p>
          <h2 id="story-title" className="max-w-xl text-4xl sm:text-5xl">
            Jewelry that feels personal from the first wear
          </h2>
          <p id="story-body" className="max-w-xl text-sm leading-8 text-ink/72 sm:text-base">
            Velmora was imagined for women who want elevated pieces without waiting for a special occasion. Our collections blend warm gold finishes, refined silhouettes, and gifting-worthy presentation so every order feels quietly indulgent.
          </p>
          <a
            href="/#story"
            className="inline-flex border-b border-champagne pb-1 text-sm uppercase tracking-[0.22em] text-ink transition hover:text-champagne"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  )
}

export default StorySection
