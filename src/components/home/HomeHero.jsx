import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import EditorialVisual from '@/components/ui/EditorialVisual'

export default function HomeHero({ hero }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-velmora-noir text-velmora-ivory">
      <EditorialVisual mood="hero" className="absolute inset-0 rounded-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-noir/90 via-velmora-noir/55 to-velmora-noir/20" />
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-end gap-12 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:pb-24">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-brand text-velmora-gold-soft">
            {hero.eyebrow}
          </p>
          <div className="space-y-5">
            <h1
              id="home-hero-title"
              className="font-display text-6xl leading-[0.92] text-velmora-ivory sm:text-7xl lg:text-8xl"
            >
              {hero.title}
            </h1>
            <p
              id="home-hero-subtitle"
              className="max-w-xl text-base leading-7 text-velmora-ivory/82 sm:text-lg"
            >
              {hero.subtitle}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/shop">
              <Button size="lg">Shop the Collection</Button>
            </Link>
            <Link to="/collections">
              <Button size="lg" variant="ghost">
                Explore Editorial Sets
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden items-end justify-end lg:flex">
          <div className="w-full max-w-[34rem] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <EditorialVisual mood="portrait" accent="right" className="aspect-[4/5] rounded-[2rem]">
              <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-product text-velmora-ivory/92">
                Warm gold, editorial finish
              </div>
            </EditorialVisual>
          </div>
        </div>
      </div>
    </section>
  )
}
