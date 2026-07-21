import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1617038220319-276d3b7fd31b?auto=format&fit=crop&w=1600&q=80)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-charcoal/30" aria-hidden="true" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-cream">
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.25em] text-cream/90">
          Velmora Fine Jewelry
        </p>
        <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[1.1] md:text-6xl lg:text-7xl">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 max-w-md font-sans text-base font-light leading-relaxed text-cream/90 md:text-lg">
          Demi-fine gold jewelry for the moments you want to remember — and the everyday in between.
        </p>
        <Link
          to="/shop"
          className="mt-8 bg-accent px-10 py-4 font-sans text-sm font-medium uppercase tracking-wide text-white transition-colors duration-300 hover:bg-accent-hover"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
