import { Link } from 'react-router-dom'
import { brandStoryImage } from '@/data/products'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={brandStoryImage}
            alt="Velmora craftsmanship"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="py-4">
          <p className="text-xs font-medium uppercase tracking-wide-xl text-gold mb-4">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso font-medium leading-tight">
            Jewelry That Tells Your Story
          </h2>
          <p className="mt-6 text-stone leading-relaxed">
            Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is. We craft each piece with intention — blending timeless design with modern sensibility, using ethically sourced materials and 18K gold plating that lasts.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            From our studio to your jewelry box, every detail is considered. No middlemen, no markups — just beautiful pieces at honest prices.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 text-sm font-medium text-gold uppercase tracking-product border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
