import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-pearl px-4 py-20 text-velmora-ink sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-t-full bg-velmora-mist lg:min-h-[650px]">
          <img
            alt="Velmora gold jewelry craftsmanship"
            data-strk-img-id="brand-story-jewelry-craft-91bc7e"
            data-strk-img="[brand-story-text] [brand-story-title]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            className="aspect-[3/4] w-full object-cover lg:absolute lg:inset-0 lg:h-full"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="lg:px-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Our philosophy</p>
          <h2 id="brand-story-title" className="font-serif text-5xl leading-tight tracking-[-0.02em] text-velmora-ink sm:text-6xl">Gold pieces for the rituals you keep.</h2>
          <div id="brand-story-text" className="mt-7 space-y-5 text-base leading-8 text-velmora-sable">
            <p>Velmora Fine Jewelry is made for women who want beauty without ceremony — sculptural gold, delicate crystal light, and elevated pieces that feel personal from the first wear.</p>
            <p>Every detail is designed with a premium-but-accessible spirit: polished silhouettes, hypoallergenic finishes, and gift-ready packaging that turns everyday jewelry into a keepsake.</p>
          </div>
          <Link to="/shop" className="mt-9 inline-flex rounded-full border border-velmora-champagne px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-champagne hover:text-velmora-ink">Our Story</Link>
        </div>
      </div>
    </section>
  )
}
