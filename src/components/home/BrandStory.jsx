import EditorialImage from '@/components/common/EditorialImage.jsx'
import LuxuryButton from '@/components/common/LuxuryButton.jsx'

export default function BrandStory() {
  return (
    <section id="about" className="bg-velmora-cream px-4 py-20 text-velmora-ink sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="aspect-[4/5] overflow-hidden bg-velmora-parchment shadow-soft">
          <EditorialImage
            id="brand-story-img-e8a1"
            query="[story-copy] [story-title]"
            ratio="3x4"
            width="900"
            alt="Velmora gold jewelry editorial still life"
            className="hover:scale-105"
          />
        </div>
        <div className="lg:pl-12">
          <p className="text-xs font-bold uppercase tracking-luxury text-velmora-antique">Our Story</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight sm:text-6xl">
            Jewelry made for the beautiful in-between.
          </h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-stone sm:text-lg">
            Velmora began with a simple belief: the pieces you reach for every morning should feel as considered as the ones you save for milestones. We create demi-fine gold jewelry with warm finishes, refined forms, and accessible pricing—so radiance can become a daily ritual.
          </p>
          <div className="mt-8 border-l border-velmora-champagne/50 pl-6">
            <p className="font-serif text-2xl leading-9 text-velmora-espresso">
              “Premium without pretense. Delicate without disappearing.”
            </p>
          </div>
          <LuxuryButton to="/shop" variant="dark" className="mt-9">
            Our Story
          </LuxuryButton>
        </div>
      </div>
    </section>
  )
}
