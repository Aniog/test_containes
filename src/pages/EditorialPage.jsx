import { Link } from 'react-router-dom'

export default function EditorialPage({ title, eyebrow, children }) {
  return (
    <main className="min-h-screen bg-stone-50 pt-28 text-stone-950">
      <section className="mx-auto max-w-4xl px-5 py-16 text-center md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-6xl leading-none text-stone-950 md:text-8xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-700">
          {children}
        </p>
        <Link
          to="/shop"
          className="mt-9 inline-flex bg-stone-950 px-7 py-4 text-xs font-bold uppercase tracking-[0.26em] text-stone-50 transition hover:bg-amber-700"
        >
          Shop the Collection
        </Link>
      </section>
    </main>
  )
}
