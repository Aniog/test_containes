import { Link } from 'react-router-dom'
import ProductImage from '@/components/product/ProductImage'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-linen px-5 py-20 text-velmora-ink md:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="aspect-[4/5] overflow-hidden bg-velmora-espresso shadow-editorial lg:aspect-[5/6]">
          <ProductImage imgId="brand-story-gold-jewelry-artisan-editorial-q35m8p" query="[story-copy] [story-title]" ratio="3x4" width="1000" alt="Velmora gold jewelry editorial" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto max-w-xl space-y-7 lg:pr-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">Our philosophy</p>
          <h2 id="story-title" className="font-serif text-5xl font-medium leading-tight md:text-7xl">Jewelry for the moments you keep.</h2>
          <p id="story-copy" className="text-base leading-8 text-velmora-sage md:text-lg">Velmora is designed around luminous gold finishes, refined silhouettes, and pieces that feel intimate rather than ornamental. Each style is made to be worn often, gifted beautifully, and treasured without waiting for an occasion.</p>
          <Link to="/#journal" className="inline-flex border-b border-velmora-champagne pb-1 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:text-velmora-bronze">Our Story</Link>
        </div>
      </div>
    </section>
  )
}
