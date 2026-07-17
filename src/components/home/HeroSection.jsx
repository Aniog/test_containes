import { Link } from 'react-router-dom'
import { buildImageQuery, getEditorialPlaceholder } from '@/lib/images'

const HeroSection = () => {
  const titleId = 'hero-title'
  const descId = 'hero-desc'
  const noteId = 'hero-note'

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-velvet-950 text-cream-50">
      <img
        alt="Velmora hero jewelry editorial"
        className="absolute inset-0 h-full w-full object-cover"
        data-strk-img-id="velmora-hero-image-8f2a9c"
        data-strk-img={buildImageQuery(noteId, descId, titleId)}
        data-strk-img-ratio="16x9"
        data-strk-img-width="1600"
        src={getEditorialPlaceholder('Velmora hero jewelry editorial')}
      />
      <span id={noteId} className="sr-only">
        warm-lit close-up of gold jewelry on model in editorial setting
      </span>
      <div className="absolute inset-0 bg-hero-fade" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-xl space-y-8">
          <p className="text-xs uppercase tracking-[0.45em] text-gold-300">
            Premium demi-fine jewelry
          </p>
          <div className="space-y-4">
            <h1 id={titleId} className="font-serif text-6xl leading-[0.92] sm:text-7xl lg:text-[5.5rem]">
              Crafted to be Treasured
            </h1>
            <p id={descId} className="max-w-lg text-base leading-7 text-cream-200 sm:text-lg">
              Quietly luminous earrings, necklaces, and huggies designed for self-gifting, milestone moments, and everyday polish.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-full bg-gold-400 px-7 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-velvet-950 transition duration-300 hover:bg-gold-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
