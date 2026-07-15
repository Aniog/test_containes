import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { aboutHighlights } from '@/data/storeData'

const storyImage = {
  imgId: 'story-image-velmora-72ad1f',
  titleId: 'story-image-title',
  descId: 'story-image-desc',
  alt: 'Velmora jewelry packaging and gold pieces styled editorially',
  title: 'Velmora brand story',
  description: 'Editorial still life of gold jewelry and gift-ready packaging in warm light.',
}

export default function StorySection() {
  return (
    <section className="bg-velmora-ivory py-16 md:py-24">
      <div className="page-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[2rem] border border-velmora-sand bg-velmora-mist shadow-velmora">
          <img
            alt={storyImage.alt}
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id={storyImage.imgId}
            data-strk-img={`[${storyImage.descId}] [${storyImage.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <span id={storyImage.titleId} className="sr-only">{storyImage.title}</span>
          <span id={storyImage.descId} className="sr-only">{storyImage.description}</span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-velmora-taupe">Brand story</p>
          <h2 className="mt-5 font-display text-5xl leading-none text-velmora-ink md:text-6xl">
            Jewelry that feels elevated, never intimidating.
          </h2>
          <p className="mt-6 text-base leading-8 text-velmora-taupe">
            Velmora was created for women who want polished pieces they can wear often, gift proudly, and keep coming back to. Every collection is made to feel warm, refined, and effortlessly versatile.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {aboutHighlights.map((highlight) => (
              <span key={highlight} className="rounded-full border border-velmora-sand bg-velmora-cream px-4 py-2 text-xs uppercase tracking-[0.22em] text-velmora-taupe">
                {highlight}
              </span>
            ))}
          </div>
          <Link to="/about" className="mt-10 inline-block">
            <Button variant="secondary">Our Story</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
