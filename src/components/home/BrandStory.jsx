import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-porcelain py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="overflow-hidden bg-velmora-stone shadow-editorial">
          <img alt="Velmora atelier details" className="aspect-[4/5] w-full object-cover" data-strk-img-id="story-atelier-vlm" data-strk-img="[story-copy] [story-title]" data-strk-img-ratio="3x4" data-strk-img-width="900" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
        </div>
        <div className="lg:pl-12">
          <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-antique">Our Story</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight md:text-6xl">Jewelry for the rituals you keep.</h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-taupe">Velmora was created for women who want pieces that feel considered, intimate, and easy to wear. Our demi-fine designs balance warm gold finishes with sculptural silhouettes, crafted to move between self-purchase and meaningful gifting.</p>
          <Link to="/shop" className="mt-8 inline-flex border-b border-velmora-gold pb-2 text-sm font-semibold uppercase tracking-luxury text-velmora-espresso transition hover:text-velmora-antique">Our Story</Link>
        </div>
      </div>
    </section>
  )
}
