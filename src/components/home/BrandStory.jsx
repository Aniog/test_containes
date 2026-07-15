import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-porcelain py-20 text-velmora-ink sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
        <div className="relative overflow-hidden bg-velmora-linen">
          <img
            alt="Velmora atelier warm gold jewelry styling"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id="brand-story-img-c1e945"
            data-strk-img="[brand-story-copy] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="lg:pl-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-sage">Our story</p>
          <h2 id="brand-story-title" className="mt-4 font-serifDisplay text-5xl font-light leading-tight text-velmora-ink sm:text-6xl">Fine feeling. Everyday reach.</h2>
          <p id="brand-story-copy" className="mt-6 max-w-xl text-base leading-8 text-velmora-espresso/75">Velmora was created for women who want jewelry that feels considered, personal, and quietly special without traditional luxury markups. Each piece is designed to layer beautifully, gift effortlessly, and glow against skin.</p>
          <Link to="/shop" className="mt-8 inline-flex border border-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-champagne">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
