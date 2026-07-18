import { Link } from 'react-router-dom'

export default function StorySection() {
  return (
    <section id="story" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-[var(--color-line-dark)] bg-[rgba(245,237,230,0.04)] p-6 md:grid-cols-2 md:p-8">
        <div className="overflow-hidden rounded-[1.75rem] border border-[var(--color-line-dark)] bg-[var(--color-surface)]">
          <img
            alt="Velmora brand story"
            className="aspect-[4/5] h-full w-full object-cover"
            data-strk-img-id="story-section-image-9f1cb4"
            data-strk-img="[story-section-desc] [story-section-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1100"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="flex flex-col justify-center space-y-6 py-4 text-[var(--color-text-dark)] md:px-8">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-muted-dark)]">
            Velmora World
          </p>
          <h2 id="story-section-title" className="font-serif text-4xl leading-none md:text-5xl">
            Jewelry for the moments that become ritual
          </h2>
          <p id="story-section-desc" className="text-base leading-8 text-[var(--color-muted-dark)]">
            Velmora was created for women who want everyday jewelry to feel considered, luminous, and easy to wear. Our pieces are softly statement-making, giftable, and made to sit beautifully alongside the clothes you already love.
          </p>
          <Link
            to="/shop"
            className="inline-flex w-fit rounded-full border border-[var(--color-line-dark)] px-6 py-3 text-xs uppercase tracking-[0.28em] text-[var(--color-text-dark)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
