import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="bg-paper pt-32 md:pt-40">
      <div className="mx-auto max-w-2xl px-5 pb-32 text-center md:px-8">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-5xl font-light leading-[1.05] md:text-6xl">
          Lost in the velvet.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm text-text-muted md:text-base">
          We can't find the page you're looking for — but there's plenty more to
          discover.
        </p>
        <Link
          to="/"
          className="mt-10 inline-block bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-paper transition-colors duration-300 hover:bg-gold hover:text-ink"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
