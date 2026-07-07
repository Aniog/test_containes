import { Link } from 'react-router-dom'
import { StockImage } from '@/components/ui/StockImage'

export function BrandStory() {
  return (
    <section className="bg-[#F9F7F2] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#F2EFE9]">
            <StockImage
              id="brand-story-img"
              query="[brand-story-title] [brand-story-body]"
              ratio="3x4"
              width="900"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="lg:py-8">
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#B9975B]">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl font-light uppercase tracking-[0.08em] text-[#1A1614] md:text-4xl lg:text-5xl"
            >
              Jewelry with Intention
            </h2>
            <div
              id="brand-story-body"
              className="mt-6 space-y-4 font-sans text-base font-light leading-relaxed text-[#6B625B]"
            >
              <p>
                Velmora was born from a simple belief: the pieces you wear every
                day should feel as meaningful as the moments they witness. We
                design demi-fine jewelry that balances timeless silhouettes with
                a modern, wearable spirit.
              </p>
              <p>
                Each piece is crafted from responsibly sourced materials and
                finished with thick 18k gold plating — made to keep its warmth
                through years of wear. No trends, no noise. Just jewelry made to
                be treasured.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-block border-b border-[#B9975B] pb-1 font-sans text-xs font-medium uppercase tracking-[0.14em] text-[#B9975B] transition-colors hover:text-[#A8864D]"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
