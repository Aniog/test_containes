import { aboutHighlights } from '@/data/storeData'
import { useImageLoader } from '@/hooks/useImageLoader'

const aboutImage = {
  imgId: 'about-hero-image-1d29ef',
  titleId: 'about-hero-title',
  descId: 'about-hero-desc',
  alt: 'Velmora founder desk and jewelry sketches',
  title: 'Velmora studio story',
  description: 'Jewelry sketches, velvet boxes, and gold pieces in a warm editorial studio setting.',
}

export default function About() {
  const containerRef = useImageLoader([])

  return (
    <div ref={containerRef} className="page-shell py-28 pb-16 md:pb-24">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-velmora-sand bg-velmora-mist shadow-velmora">
          <img
            alt={aboutImage.alt}
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id={aboutImage.imgId}
            data-strk-img={`[${aboutImage.descId}] [${aboutImage.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <span id={aboutImage.titleId} className="sr-only">{aboutImage.title}</span>
          <span id={aboutImage.descId} className="sr-only">{aboutImage.description}</span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-velmora-taupe">About Velmora</p>
          <h1 className="mt-5 font-display text-5xl leading-none text-velmora-ink md:text-6xl">
            Modern heirlooms for the way women really dress now.
          </h1>
          <p className="mt-6 text-base leading-8 text-velmora-taupe">
            Velmora Fine Jewelry exists between occasionwear and everyday essentials. We design polished demi-fine pieces with warmth, softness, and styling ease at the center — so a gift feels meaningful and a self-purchase feels deserved.
          </p>
          <p className="mt-6 text-base leading-8 text-velmora-taupe">
            Every collection is built around quiet luxury cues: thoughtful proportion, luminous finishes, and packaging that feels as elevated as what is inside.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {aboutHighlights.map((highlight) => (
              <span key={highlight} className="rounded-full border border-velmora-sand bg-velmora-ivory px-4 py-2 text-xs uppercase tracking-[0.22em] text-velmora-taupe">
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
