import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect fill='%232A211B' width='16' height='9'/%3E%3Ccircle cx='5' cy='4' r='1.2' fill='%23B8935F' opacity='0.6'/%3E%3Ccircle cx='7' cy='5' r='0.8' fill='%23C9A876' opacity='0.4'/%3E%3Ccircle cx='11' cy='3' r='1' fill='%23B8935F' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-velmora-charcoal/50" />

      <div className="relative flex h-full flex-col items-center justify-center px-5 text-center text-white">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-velmora-gold-light">
          New Collection
        </p>
        <h1 className="font-serif text-5xl font-light leading-[1.1] tracking-wide md:text-7xl lg:text-8xl">
          Crafted to be
          <br />
          <span className="font-medium italic">Treasured</span>
        </h1>
        <p className="mt-6 max-w-md text-sm font-light leading-relaxed tracking-wide text-white/80 md:text-base">
          Demi-fine jewelry that elevates the everyday. Designed for women who appreciate
          quiet luxury and timeless detail.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-flex items-center rounded-full bg-velmora-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-velmora-gold-light hover:shadow-lg"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
