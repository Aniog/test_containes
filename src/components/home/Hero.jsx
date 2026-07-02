import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[620px] w-full overflow-hidden bg-ink">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model editorial closeup"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-ink/30" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p
          id="hero-subtitle"
          className="font-sans text-[11px] md:text-xs uppercase tracking-[0.22em] text-cream/90 mb-5"
        >
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream font-medium max-w-4xl leading-[1.1]"
        >
          Crafted to be Treasured
        </h1>
        <p className="mt-5 md:mt-6 font-sans text-sm md:text-base text-cream/80 max-w-md">
          Demi-fine gold jewelry designed for everyday luxury and moments worth remembering.
        </p>
        <Link to="/shop" className="btn-primary mt-8 md:mt-10">
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
