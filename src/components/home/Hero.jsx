import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import StockImage from '@/components/ui/StockImage'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-espresso">
      <StockImage
        id="hero-main"
        query="[hero-subtitle] [hero-title]"
        ratio="16x9"
        width={1600}
        alt="Gold jewelry on model"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/20 to-espresso/60" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 md:px-8">
        <p
          id="hero-subtitle"
          className="text-xs md:text-sm uppercase tracking-[0.25em] text-ivory/80 mb-4 md:mb-6"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory leading-[0.95] max-w-4xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="mt-6 md:mt-8 text-ivory/80 text-base md:text-lg max-w-md leading-relaxed">
          Timeless pieces for everyday luxury — designed for gifting and
          self-celebration.
        </p>
        <div className="mt-8 md:mt-10">
          <Link to="/shop">
            <Button variant="primary">Shop the Collection</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
