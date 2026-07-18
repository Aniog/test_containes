import { Link } from 'react-router-dom'

const copy = {
  about: {
    eyebrow: 'About Velmora',
    title: 'Jewelry for the rituals you return to.',
    body: 'Velmora Fine Jewelry creates warm, demi-fine pieces that make everyday dressing feel considered. This preview page keeps the storefront structure ready for a richer brand story later.',
  },
  journal: {
    eyebrow: 'Journal',
    title: 'Notes on gifting, styling, and care.',
    body: 'Explore the editorial side of Velmora: how to layer gold huggies, choose a meaningful gift, and keep each piece luminous between wears.',
  },
}

export default function StaticPage({ type }) {
  const page = copy[type]
  return (
    <main className="min-h-screen bg-velmora-ivory px-5 pb-20 pt-32 text-velmora-ink sm:px-8 lg:px-10">
      <section className="mx-auto max-w-3xl border border-velmora-line bg-velmora-porcelain p-8 text-center shadow-soft md:p-14">
        <p className="text-xs font-bold uppercase tracking-widerluxe text-velmora-bronze">{page.eyebrow}</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-velmora-ink md:text-6xl">{page.title}</h1>
        <p className="mt-6 text-base leading-8 text-velmora-taupe">{page.body}</p>
        <Link to="/shop" className="mt-9 inline-flex bg-velmora-gold px-7 py-4 text-sm font-bold uppercase tracking-luxe text-velmora-ink transition hover:bg-velmora-bronze hover:text-velmora-ivory">Shop Velmora</Link>
      </section>
    </main>
  )
}
