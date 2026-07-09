import { Link } from 'react-router-dom'

const StorySection = () => {
  return (
    <section id="story" className="bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-200 shadow-xl shadow-stone-900/5">
          <img
            alt="Velmora craftsmanship"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id="velmora-story-image-2ab1c4"
            data-strk-img="[story-copy] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1100"
            loading="lazy"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-600">
            Our Story
          </p>
          <h2 id="story-title" className="mt-4 font-display text-5xl leading-none text-stone-950">
            Jewelry made to feel intimate, effortless, and enduring.
          </h2>
          <p id="story-copy" className="mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
            Velmora was created for women who want the feeling of fine jewelry without waiting for a special occasion. Our collections center polished silhouettes, warm metallic finishes, and thoughtful packaging that make everyday dressing feel elevated.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex rounded-full border border-stone-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-950 transition duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-stone-950"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StorySection
