import { Link } from 'react-router-dom'
import { imagePlaceholder } from '@/data/store'

const HomeStorySection = () => {
  return (
    <section id="story" className="bg-velmora-mist py-16 md:py-24">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <div className="overflow-hidden rounded-[2.5rem] bg-velmora-ink shadow-soft">
          <img
            src={imagePlaceholder}
            alt="Velmora atelier story"
            className="h-full min-h-[25rem] w-full object-cover"
            data-strk-img-id="story-image-velmora-52hf2k"
            data-strk-img="[story-desc] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
          />
        </div>

        <div className="max-w-xl">
          <p className="section-kicker">Our Story</p>
          <h2 id="story-title" className="section-title">
            Jewelry for the moments you keep close
          </h2>
          <p id="story-desc" className="mt-6 text-base leading-8 text-velmora-ink/72">
            Velmora was imagined for women who want fine-feeling jewelry without waiting for a once-a-year occasion. Every piece is designed to look softly luminous in natural light, feel effortless from morning through evening, and arrive beautifully enough to gift with confidence.
          </p>
          <p className="mt-4 text-base leading-8 text-velmora-ink/72">
            We focus on sculptural shapes, warm finishes, and elevated details that make demi-fine jewelry feel personal, thoughtful, and always wearable.
          </p>
          <Link to="/shop" className="button-secondary mt-8">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeStorySection
