import { Link } from 'react-router-dom'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-parchment px-5 py-16 text-velmora-obsidian md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-[2rem] bg-velmora-espresso shadow-editorial">
          <ImagePlaceholder
            alt="Velmora gold jewelry styling story"
            className="aspect-[4/5] w-full object-cover"
            imgId="brand-story-jewelry-atelier-8c7e2d"
            query="[brand-story-copy] [brand-story-title]"
            ratio="3x4"
            width="900"
          />
        </div>
        <div className="lg:pl-12">
          <p className="font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-bronze">Our point of view</p>
          <h2 id="brand-story-title" className="mt-4 font-serifDisplay text-5xl leading-none md:text-7xl">Gold for the private rituals.</h2>
          <p id="brand-story-copy" className="mt-7 max-w-xl font-sansBody text-base leading-8 text-velmora-muted">
            Velmora creates demi-fine jewelry with the intimacy of heirlooms and the ease of pieces you can actually live in. Every cuff, huggie, and necklace is chosen for warm luminosity, skin-kind materials, and the feeling of being quietly put together.
          </p>
          <Link to="/shop" className="mt-9 inline-flex border-b border-velmora-bronze pb-1 font-sansBody text-xs font-extrabold uppercase tracking-nav text-velmora-bronze transition hover:text-velmora-gold">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
