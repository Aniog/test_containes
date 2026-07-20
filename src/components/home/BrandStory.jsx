import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="about" className="bg-velmora-pearl py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[520px] overflow-hidden bg-velmora-sand">
          <div
            className="absolute inset-0"
            data-strk-bg-id="brand-story-workbench-73ddab"
            data-strk-bg="[story-copy] [story-title]"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="1000"
            aria-hidden="true"
          />
          <div className="absolute inset-0 border border-white/20" aria-hidden="true" />
        </div>
        <div className="mx-auto max-w-xl lg:max-w-none lg:pl-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">The Velmora point of view</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-espresso md:text-6xl">
            Jewelry for the quiet rituals of becoming.
          </h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-espresso/72">
            Velmora designs demi-fine gold jewelry with the warmth of heirloom pieces and the ease of modern life. Every cuff, huggie, pendant, and gift set is selected for luminous finish, skin-kind wear, and a premium feel that remains beautifully accessible.
          </p>
          <Link to="/" className="mt-8 inline-flex border-b border-velmora-gold pb-2 text-xs font-bold uppercase tracking-[0.26em] text-velmora-gold transition-colors hover:border-velmora-espresso hover:text-velmora-espresso">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
