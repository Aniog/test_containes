import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="bg-ivory">
      <section className="mx-auto max-w-[800px] px-6 md:px-10 pt-32 md:pt-40 pb-24 text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-3 font-serif text-4xl md:text-6xl text-espresso tracking-tight">
          That page slipped between the velvet.
        </h1>
        <p className="mt-5 text-sm md:text-base text-muted">
          The piece you’re looking for has been moved, retired, or perhaps never existed.
        </p>
        <div className="mt-9 flex items-center justify-center gap-3">
          <Link to="/" className="btn btn-primary">
            Back Home
          </Link>
          <Link to="/shop" className="btn btn-outline">
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}