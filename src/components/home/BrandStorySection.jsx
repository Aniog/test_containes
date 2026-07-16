import { Link } from 'react-router-dom'

export default function BrandStorySection() {
  return (
    <section id="story" className="bg-velmora-paper px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        <div className="overflow-hidden rounded-[2rem] border border-velmora-line/70 bg-velmora-sand shadow-velmora-card">
          <img
            alt="Velmora brand story"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id="brand-story-image-f6a12d"
            data-strk-img="[story-copy] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-editorial text-velmora-muted">About Velmora</p>
          <h2 id="story-title" className="mt-3 font-serif text-4xl text-velmora-ink sm:text-5xl">
            Gold jewelry that feels intimate, modern, and gift-worthy.
          </h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-muted">
            Velmora began with the idea that fine-looking jewelry should still feel wearable, collectable, and easy to gift. Our pieces are designed to sit close to the skin with soft polish, rich tone, and a sense of quiet occasion.
          </p>
          <p className="mt-4 text-base leading-8 text-velmora-muted">
            From sculpted huggies to softly luminous necklaces, every silhouette is created to move seamlessly from everyday styling to milestone moments.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex rounded-full border border-velmora-line/70 px-5 py-3 text-sm font-semibold text-velmora-ink transition hover:border-velmora-accent hover:text-velmora-accent"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
