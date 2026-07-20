import { Link } from 'react-router-dom'
import JewelryVisual from '@/components/product/JewelryVisual'
import { getProductById } from '@/data/products'

export default function BrandStory() {
  const storyProduct = getProductById('royal-heirloom-set')

  return (
    <section id="story" className="bg-velmora-sand/45 px-5 py-16 text-velmora-ink md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="relative min-h-[34rem] overflow-hidden bg-velmora-espresso">
          <JewelryVisual product={storyProduct} variant="packaging" className="absolute inset-0" />
          <div className="absolute left-8 top-8 h-32 w-24 border border-velmora-champagne/40" />
          <div className="absolute bottom-10 right-10 h-20 w-20 rounded-full border border-velmora-champagne/40" />
          <div className="absolute inset-5 border border-velmora-ivory/30" />
        </div>
        <div className="bg-velmora-ivory px-6 py-10 shadow-soft md:px-12 md:py-16 lg:-ml-20">
          <p className="mb-5 text-xs font-semibold uppercase tracking-luxury text-velmora-gold">Our philosophy</p>
          <h2 id="story-title" className="font-serif text-4xl leading-tight text-velmora-ink md:text-6xl">
            Jewelry with the ease of everyday luxury.
          </h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-taupe md:text-lg">
            Velmora designs demi-fine gold pieces that feel collected rather than consumed. Each silhouette is chosen for warmth, longevity, and the quiet pleasure of putting on something beautiful.
          </p>
          <Link to="/#story" className="mt-8 inline-flex text-xs font-bold uppercase tracking-luxury text-velmora-ink underline decoration-velmora-gold underline-offset-8 transition hover:text-velmora-gold">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
