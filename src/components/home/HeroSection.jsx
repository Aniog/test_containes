import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { collectionStats, heroContent } from '@/data/products'
import { getStrkImageSrc } from '@/lib/strkImage'

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-stone-950 text-stone-50">
      <div
        className="absolute inset-0 opacity-70"
        data-strk-bg-id={heroContent.imageId}
        data-strk-bg="[hero-description] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950/40" />
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-end gap-12 px-4 pb-16 pt-32 sm:px-6 md:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-36">
        <div className="max-w-2xl">
          <p className="font-sans-custom text-xs uppercase tracking-[0.4em] text-amber-400">
            Velmora Fine Jewelry
          </p>
          <h1 id="hero-title" className="mt-6 font-serif-display text-5xl leading-none text-stone-50 sm:text-6xl md:text-7xl">
            {heroContent.title}
          </h1>
          <p id="hero-description" className="mt-6 max-w-xl text-base leading-7 text-stone-200 sm:text-lg">
            {heroContent.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/shop">
              <Button size="lg" className="w-full sm:w-auto">
                Shop the Collection
              </Button>
            </Link>
            <Link
              to="/shop?category=Necklaces"
              className="inline-flex items-center justify-center rounded-full border border-stone-200/40 px-6 py-3 text-xs uppercase tracking-[0.3em] text-stone-100 transition duration-300 hover:bg-stone-50/10"
            >
              Explore Gifting
            </Link>
          </div>
        </div>

        <div className="hidden rounded-[2rem] border border-stone-200/10 bg-stone-900/30 p-5 backdrop-blur md:block lg:ml-auto lg:max-w-sm">
          <img
            src={getStrkImageSrc('hero-editorial-card-5x4n')}
            alt="Editorial close-up of warm gold jewelry on a model"
            className="h-[420px] w-full rounded-[1.5rem] object-cover"
            data-strk-img-id="hero-editorial-card-5x4n"
            data-strk-img="[hero-description] [hero-title]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
          />
          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-stone-200/10 pt-5">
            {collectionStats.map((item) => (
              <div key={item.label}>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">{item.label}</p>
                <p className="mt-2 text-lg text-stone-50">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
