import { Link } from 'react-router-dom'

const StorySection = () => (
  <section className="bg-stone-100 px-6 py-20 text-stone-950 lg:px-10 lg:py-28">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="overflow-hidden rounded-[2rem] shadow-[0_25px_80px_rgba(28,25,23,0.14)]">
        <span id="story-title" className="sr-only">
          Velmora Fine Jewelry story
        </span>
        <span id="story-desc" className="sr-only">
          intimate studio still life of gold jewelry, velvet boxes, and artisanal styling
        </span>
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Velmora jewelry styling story"
          className="aspect-[5/4] h-full w-full object-cover"
          data-strk-img-id="story-image-velmora-71ad"
          data-strk-img="[story-desc] [story-title]"
          data-strk-img-ratio="4x3"
          data-strk-img-width="1200"
        />
      </div>
      <div className="space-y-6">
        <p className="tracking-kicker text-xs uppercase text-stone-500">Brand story</p>
        <h2 className="font-display text-5xl font-semibold leading-none text-stone-950 md:text-6xl">
          Jewelry for the beautifully in-between moments.
        </h2>
        <p className="max-w-xl text-base leading-8 text-stone-600">
          Velmora was created for women who want the warmth and polish of fine-looking gold without saving pieces only for special occasions. Our demi-fine collection blends giftable design, elevated finishes, and wearable comfort so each piece feels quietly indulgent.
        </p>
        <Link
          to="/about"
          className="inline-flex rounded-full border border-stone-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-950 transition duration-300 hover:bg-stone-950 hover:text-stone-50"
        >
          Our Story
        </Link>
      </div>
    </div>
  </section>
)

export default StorySection
