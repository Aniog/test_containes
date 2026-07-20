import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="bg-velmora-cream">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2">
          <div className="aspect-[4/5] bg-velmora-stone md:aspect-auto md:min-h-[600px]">
            <img
              id="brand-story-img"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-body]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-16 md:px-16 lg:px-20">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-rust">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="mt-4 font-serif text-3xl font-medium leading-tight text-velmora-ink md:text-4xl lg:text-5xl"
            >
              Jewelry for the In-Between Moments
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-velmora-warmgray">
              <p id="brand-story-body">
                Velmora was born from a simple belief: the pieces you wear every day should feel
                special. We design demi-fine jewelry that bridges the gap between costume and fine —
                using responsibly sourced brass, thick 18k gold plating, and thoughtful details that
                catch the light just right.
              </p>
              <p>
                Every piece is created to be worn often, gifted meaningfully, and treasured for
                years. No trends, no noise — just quiet luxury you can live in.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex w-fit items-center text-xs font-medium uppercase tracking-widest text-velmora-ink underline-offset-4 transition hover:underline"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
