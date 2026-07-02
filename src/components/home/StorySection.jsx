import StockImage from '../common/StockImage.jsx'

const StorySection = () => (
  <section id="story" className="bg-velmora-cream px-5 py-16 text-velmora-ink lg:px-10 lg:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="relative overflow-hidden border border-velmora-line bg-velmora-champagne/20 shadow-soft">
        <StockImage
          id="story-artisan-gold-jewelry-3k8vpr"
          query="[story-kicker] [story-title] [story-copy]"
          ratio="4x3"
          width="1100"
          alt="Velmora gold jewelry craftsmanship"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      <div className="lg:pl-10">
        <p id="story-kicker" className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-clay">Our story</p>
        <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-none text-velmora-ink md:text-7xl">
          Jewelry for the rituals worth keeping.
        </h2>
        <p id="story-copy" className="mt-7 text-base leading-8 text-velmora-forest/78">
          Velmora creates demi-fine gold pieces with an editorial eye and an accessible spirit. Each design is selected for warmth, comfort, and the kind of refined detail that feels personal the moment you put it on.
        </p>
        <p className="mt-5 text-base leading-8 text-velmora-forest/78">
          From sculptural huggies to luminous gifting sets, our pieces are made to layer, travel, and become part of your everyday signature.
        </p>
        <a href="#shop" className="mt-8 inline-flex rounded-full border border-velmora-gold px-8 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-gold">
          Our Story
        </a>
      </div>
    </div>
  </section>
)

export default StorySection
