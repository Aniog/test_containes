import { Link } from 'react-router-dom'

export default function Journal() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-32 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-stone mb-4">The Journal</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight">Stories, soon</h1>
        <p className="text-stone text-lg leading-relaxed mt-6 max-w-xl mx-auto">
          We're gathering styling notes, care guides and the stories behind each
          collection. Sign up for the newsletter to be the first to read them.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 text-xs tracking-[0.25em] uppercase border border-ink px-10 py-4 hover:bg-ink hover:text-cream transition-colors"
        >
          Explore the Collection
        </Link>
      </div>
    </div>
  )
}
