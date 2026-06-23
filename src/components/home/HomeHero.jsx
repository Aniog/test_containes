import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getStockImageUrl } from '@/lib/stockImageConfig'

const HomeHero = () => {
  return (
    <section className="relative -mt-[8.2rem] min-h-[88vh] overflow-hidden border-b border-line/30 bg-bark pt-[8.2rem] text-pearl lg:-mt-[5.75rem] lg:pt-[5.75rem]">
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        src={getStockImageUrl('hero-velmora-bg')}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,12,0.72)_0%,rgba(18,14,12,0.28)_55%,rgba(18,14,12,0.14)_100%)]" />
      <div className="section-shell relative flex min-h-[88vh] items-end pb-16 pt-28 sm:pt-36 lg:items-center lg:pb-24">
        <div className="max-w-2xl">
          <p className="section-kicker text-sand">Velmora Fine Jewelry</p>
          <h1 id="hero-heading" className="mt-6 font-serif text-5xl leading-none text-pearl sm:text-6xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="mt-6 max-w-xl text-base leading-7 text-pearl/82 sm:text-lg">
            Thoughtfully designed demi-fine jewelry with warm gold finishes, refined sparkle, and an editorial softness meant for every day.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/shop" className="button-primary">
              Shop the Collection
            </Link>
            <Link to="/#collections" className="inline-flex items-center gap-2 text-sm uppercase tracking-caps text-pearl/78 transition-colors duration-300 hover:text-pearl">
              Explore categories <MoveRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
