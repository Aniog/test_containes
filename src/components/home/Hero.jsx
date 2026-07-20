import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import JewelryVisual from '@/components/product/JewelryVisual'
import { getProductById } from '@/data/products'

export default function Hero() {
  const heroProduct = getProductById('golden-sphere-huggies')

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
      <div className="absolute inset-0 opacity-80">
        <JewelryVisual product={heroProduct} variant="worn" className="h-full scale-110" />
      </div>
      <div className="absolute right-[8%] top-[18%] hidden h-72 w-72 rounded-full border border-velmora-champagne/40 md:block" />
      <div className="absolute right-[18%] top-[28%] hidden h-36 w-px rotate-12 bg-velmora-champagne/50 lg:block" />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso via-velmora-espresso/70 to-velmora-espresso/10" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-velmora-espresso/75 to-transparent" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-20 pt-32 md:px-8">
        <div className="max-w-2xl animate-fadeUp">
          <p className="mb-5 text-xs font-semibold uppercase tracking-luxury text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl leading-[0.92] text-velmora-ivory md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-sand md:text-lg">
            Warm gold essentials, heirloom-inspired details, and gift-ready pieces designed for everyday glow.
          </p>
          <Link
            to="/shop"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-velmora-gold px-8 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-espresso shadow-gold transition hover:bg-velmora-champagne hover:translate-x-1"
          >
            Shop the Collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
