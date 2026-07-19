import { Link } from 'react-router-dom'
import StockImage from '@/components/ui/StockImage'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-cream">
      <div className="mx-auto px-5 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-ivory">
            <StockImage
              id="brand-story"
              query="[brand-story-title] [brand-story-body]"
              ratio="3x4"
              width={800}
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="lg:pl-8">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.1]"
            >
              Designed for the Modern Romantic
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 text-taupe leading-relaxed text-base md:text-lg"
            >
              Velmora was born from a love of quiet beauty. Each piece is
              thoughtfully designed in small batches using 18k gold plating,
              hand-set crystals, and recycled materials where possible. We
              believe jewelry should feel special every single day — never
              precious enough to sit in a box.
            </p>
            <p className="mt-4 text-taupe leading-relaxed text-base md:text-lg">
              From morning coffee to midnight toasts, our demi-fine collection
              moves with you.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block text-xs uppercase tracking-[0.2em] text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-colors"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
