import { Link } from 'react-router-dom'

export const HomeHero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full bg-secondary flex items-center justify-center overflow-hidden">
      {/* Background Image (Stock image) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
        data-strk-bg-id="hero-bg-2"
        data-strk-bg="[hero-title] [hero-desc]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground max-w-3xl px-4 mx-auto flex flex-col items-center mt-16">
        <h1 id="hero-title" className="font-serif text-5xl md:text-7xl mb-6 font-medium leading-tight drop-shadow-sm">
          Crafted to be <br/><i className="font-light">Treasured</i>
        </h1>
        <p id="hero-desc" className="font-sans text-lg md:text-xl md:max-w-xl mx-auto mb-10 text-primary-foreground/90 font-light drop-shadow-sm">
          Quiet luxury for the modern romantic. Discover our collection of demi-fine gold jewelry designed for everyday elegance.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-background text-foreground px-8 py-4 font-serif uppercase tracking-[0.2em] text-sm hover:bg-background/90 transition-colors border border-transparent shadow-sm"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}