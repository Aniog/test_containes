import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="bg-ivory px-5 pb-24 pt-40 sm:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-3xl rounded-3xl border border-mist bg-white px-8 py-14 text-center shadow-soft">
        <p className="text-xs uppercase tracking-brand text-bronze">Velmora</p>
        <h1 className="mt-4 font-serif text-5xl text-ink sm:text-6xl">Page not found</h1>
        <p className="mt-4 text-base text-ink/70">The piece you were looking for is no longer here. Explore our storefront instead.</p>
        <Link to="/shop" className="mt-8 inline-flex items-center justify-center rounded-full bg-champagne px-6 py-3 text-xs font-semibold uppercase tracking-brand text-obsidian transition hover:bg-bronze hover:text-ivory">
          Shop the collection
        </Link>
      </div>
    </section>
  )
}

export default NotFound
