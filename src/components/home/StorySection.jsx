import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { placeholderSrc, story } from '@/data/storefront'

const StorySection = () => (
  <section id="story" className="section-space bg-white">
    <div className="page-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="overflow-hidden rounded-[2.4rem] border border-stone-200 bg-stone-100">
        <img
          src={placeholderSrc}
          alt="Velmora brand story"
          data-strk-img-id="velmora-story-image-4fa2c0"
          data-strk-img="[story-body] [story-title]"
          data-strk-img-ratio="4x3"
          data-strk-img-width="1200"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      <div>
        <p className="luxury-kicker">Our Story</p>
        <h2 id="story-title" className="mt-4 font-serif text-4xl leading-none text-stone-900 sm:text-5xl">
          {story.title}
        </h2>
        <p id="story-body" className="mt-6 text-base leading-8 text-stone-600">
          {story.body}
        </p>
        <Link to="/shop" className="mt-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-amber-700">
          <span>Our Story</span>
          <ArrowRight size={16} />
        </Link>
        <div className="mt-8">
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  </section>
)

export default StorySection
