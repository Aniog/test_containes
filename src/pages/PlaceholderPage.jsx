import { Link } from 'react-router-dom'

export default function PlaceholderPage({ title, eyebrow, body }) {
  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.34em] text-velmora-gold">{eyebrow}</p>
        <h1 className="mt-4 font-serif text-6xl font-medium sm:text-7xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-velmora-taupe">{body}</p>
        <Link to="/shop" className="mt-9 inline-flex bg-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory">
          Shop the collection
        </Link>
      </section>
    </main>
  )
}
