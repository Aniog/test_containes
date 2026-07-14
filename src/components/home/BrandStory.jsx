import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button.jsx'

const BrandStory = () => (
  <section id="about" className="bg-velmora-porcelain py-16 text-velmora-ink md:py-24">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div className="relative overflow-hidden rounded-t-full rounded-b-[3rem] bg-velmora-linen">
        <img
          alt="Velmora jewelry atelier details"
          className="aspect-[4/5] h-full w-full object-cover"
          data-strk-img-id="brand-story-atelier-e64f1b"
          data-strk-img="[story-copy] [story-title]"
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>
      <div className="lg:pl-12">
        <p className="text-xs font-bold uppercase tracking-velmora text-velmora-gold">Our Story</p>
        <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-ink md:text-7xl">
          Designed for the pieces you never take off.
        </h2>
        <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-clay">
          Velmora creates premium demi-fine jewelry with the intimacy of an heirloom and the ease of everyday wear. Each piece is made to feel refined, giftable, and quietly unforgettable — without traditional retail markups.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button as={Link} to="/shop">Our Story</Button>
          <Button as={Link} to="/shop" variant="outline">Explore Materials</Button>
        </div>
      </div>
    </div>
  </section>
)

export default BrandStory
