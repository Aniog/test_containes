import { Link } from "react-router-dom"

export default function Journal() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-content px-6 py-20 text-center md:px-10 md:py-28">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">The Journal</p>
        <h1 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
          Stories & Styling Notes
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-stone">
          Our journal is being polished. Sign up for our newsletter to be the
          first to read it.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block border border-ink px-10 py-4 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:bg-ink hover:text-ivory"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
