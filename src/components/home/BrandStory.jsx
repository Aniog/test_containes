import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="bg-[#E9D8BE]/60 px-5 py-20 text-[#17110D] md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-[#17110D] shadow-[0_24px_70px_rgba(23,17,13,0.18)]">
          <img
            alt="Velmora fine jewelry editorial portrait"
            className="h-full w-full object-cover opacity-90"
            data-strk-img-id="brand-story-img-e16c9a"
            data-strk-img="[story-copy] [story-title]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="md:pl-12">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B9853B]">Our Story</p>
          <h2 id="story-title" className="mt-4 font-serif text-4xl leading-tight text-[#17110D] md:text-6xl">
            Jewelry for the everyday heirloom.
          </h2>
          <p id="story-copy" className="mt-6 max-w-xl text-base leading-8 text-[#8D7463] md:text-lg">
            Velmora designs demi-fine pieces with the language of fine jewelry and the ease of daily wear. Each piece is chosen for warm tone, balanced weight, and the kind of detail that feels personal without asking for attention.
          </p>
          <Link to="/shop" className="mt-8 inline-flex border border-[#17110D] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#17110D] transition hover:border-[#B9853B] hover:bg-[#B9853B]">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
