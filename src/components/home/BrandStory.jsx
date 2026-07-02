import { Link } from 'react-router-dom'

import ImageLoaderSection from '@/components/shared/ImageLoaderSection'

const BrandStory = () => {
  return (
    <section id="about" className="section-shell">
      <ImageLoaderSection className="grid gap-8 overflow-hidden rounded-[2.5rem] border border-velmora-line bg-velmora-sand p-5 shadow-velmora-soft lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
        <div className="overflow-hidden rounded-[2rem] bg-velmora-mist">
          <img
            data-strk-img-id="brand-story-image-x4y189"
            data-strk-img="[brand-story-copy] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1100"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora jewelry in studio"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-2 py-3 lg:px-8">
          <p className="text-xs uppercase tracking-luxury text-velmora-gold">Our story</p>
          <h2 id="brand-story-title" className="mt-4 font-display text-4xl text-velmora-ink sm:text-5xl">
            Modern keepsakes shaped by warm light and lasting ritual.
          </h2>
          <p id="brand-story-copy" className="mt-5 max-w-xl text-sm leading-8 text-velmora-muted sm:text-base">
            Velmora was imagined for women who want the elegance of fine jewelry in pieces they can actually live in. Every silhouette is designed to feel quietly polished, easy to gift, and worthy of being worn on repeat.
          </p>
          <Link
            to="/collections"
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-velmora-ink transition hover:text-velmora-gold"
          >
            Our Story
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </ImageLoaderSection>
    </section>
  )
}

export default BrandStory
