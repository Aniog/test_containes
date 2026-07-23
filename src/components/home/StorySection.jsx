import { Link } from 'react-router-dom'

export default function StorySection() {
  return (
    <section id="story" className="bg-velmora-pearl px-5 py-20 text-velmora-ink lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[520px] overflow-hidden bg-velmora-sand shadow-editorial">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-strk-bg-id="brand-story-bg-41c8"
            data-strk-bg="[story-copy] [story-title]"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="1000"
          />
          <div className="absolute inset-6 border border-velmora-pearl/50" />
        </div>
        <div className="lg:pl-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold-deep">Velmora Notes</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight text-velmora-ink md:text-7xl">Jewelry for the private language of becoming.</h2>
          <p id="story-copy" className="mt-7 max-w-xl text-base leading-8 text-velmora-charcoal/78">Velmora began with the belief that fine-feeling jewelry should be lived in, gifted often, and priced with intention. Each piece is designed in warm gold tones, finished for sensitive skin, and composed to feel quietly significant.</p>
          <Link to="/shop" className="mt-9 inline-flex border-b border-velmora-gold pb-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold-deep transition hover:text-velmora-ink">Our Story</Link>
        </div>
      </div>
    </section>
  )
}
