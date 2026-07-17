import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="section-shell py-32 md:py-36">
      <div className="section-frame rounded-[34px] bg-white/70 px-8 py-14 text-center shadow-card md:px-12">
        <p className="text-xs uppercase tracking-luxe text-velmora-truffle">404</p>
        <h1 className="mt-4 font-display text-5xl text-velmora-ink">Page not found</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-velmora-cocoa">
          The page you were looking for is not available. Explore the collection instead.
        </p>
        <Link to="/shop" className="button-primary mt-8">
          Browse the Collection
        </Link>
      </div>
    </section>
  )
}
