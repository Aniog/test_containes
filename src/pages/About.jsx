import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="min-h-screen bg-cream pt-24">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-medium text-charcoal md:text-5xl">About Velmora</h1>
        <p className="mt-6 font-sans text-lg leading-relaxed text-warmgray">
          Velmora Fine Jewelry is a direct-to-consumer demi-fine jewelry brand creating 18k
          gold-plated pieces for women who value quiet luxury and everyday elegance.
        </p>
        <p className="mt-4 font-sans leading-relaxed text-warmgray">
          From sculptural ear cuffs to layered necklaces and chunky huggies, every design is
          made to be mixed, stacked, gifted, and treasured. This storefront is a starting point —
          ready for real product photography, inventory, and checkout integration.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-accent px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-accent-hover"
        >
          Shop the Collection
        </Link>
      </div>
    </main>
  )
}
