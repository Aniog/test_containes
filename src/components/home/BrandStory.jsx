import { Link } from 'react-router-dom'

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <div className="overflow-hidden rounded-[36px] border border-velmora-line bg-velmora-stone shadow-[0_20px_55px_rgba(61,47,39,0.1)]">
          <img
            data-strk-img-id="brand-story-image-7y5u2r"
            data-strk-img="[brand-story-desc] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora brand story"
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-velmora-taupe">
              Our story
            </p>
            <h2
              id="brand-story-title"
              className="mt-4 font-display text-4xl font-medium leading-none text-velmora-ink md:text-5xl"
            >
              Fine-jewelry sensibility, made for everyday wear
            </h2>
            <p
              id="brand-story-desc"
              className="mt-6 text-base leading-8 text-velmora-muted"
            >
              Velmora was created for women who want the richness of a premium finish
              without saving their best pieces for special occasions. Every silhouette is
              designed to feel thoughtful, giftable, and easy to live in.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center border-b border-velmora-ink pb-1 text-xs uppercase tracking-[0.32em] text-velmora-ink transition hover:border-velmora-champagne hover:text-velmora-champagne"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
