import VelmoraButton from '@/components/common/VelmoraButton.jsx'
import EditorialVisual from '@/components/common/EditorialVisual.jsx'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
      <EditorialVisual type="model" palette="dark" label="Warm editorial gold jewelry close-up" className="absolute inset-0 opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso/95 via-velmora-espresso/70 to-velmora-espresso/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/55 via-transparent to-velmora-espresso/35" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-[1500px] items-end px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24">
        <div className="max-w-3xl animate-soft-rise">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Demi-fine essentials</p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-none text-velmora-ivory sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/90 md:text-lg">
            Warm gold jewelry designed for modern rituals — luminous huggies, delicate necklaces, and keepsake pieces made to gift or keep.
          </p>
          <VelmoraButton to="/shop" className="mt-9">Shop the Collection</VelmoraButton>
        </div>
      </div>
    </section>
  )
}
