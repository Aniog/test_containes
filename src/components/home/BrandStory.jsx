import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="about" className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[420px] overflow-hidden rounded-t-full bg-velmora-blush shadow-editorial lg:min-h-[640px]">
          <div
            className="velmora-story-fallback absolute inset-0 bg-cover bg-center"
            role="img"
            aria-label="Model wearing refined demi-fine gold jewelry"
          />
        </div>
        <div className="mx-auto max-w-xl lg:pl-10">
          <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-champagne">Our Story</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-espresso md:text-7xl">Jewelry for the rituals between ordinary and unforgettable.</h2>
          <p id="story-copy" className="mt-7 text-base leading-8 text-velmora-taupe">
            Velmora creates demi-fine gold jewelry with the warmth of heirlooms and the ease of everyday wear. Each piece is designed in small, considered edits so gifting feels personal and self-purchase feels deserved.
          </p>
          <Link to="/#about" className="mt-8 inline-flex border-b border-velmora-champagne pb-1 text-xs font-semibold uppercase tracking-luxury text-velmora-espresso transition hover:text-velmora-champagne">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
