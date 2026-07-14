import { Link } from 'react-router-dom'

const copyByPath = {
  about: {
    eyebrow: 'About Velmora',
    title: 'Thoughtful jewelry for the everyday wardrobe.',
    body: 'Velmora Fine Jewelry was imagined as a modern ritual: beautiful demi-fine pieces, considered packaging, and a luxury mood that still feels wearable and approachable. Our collections are designed to move easily from quiet mornings to dressed evenings without ever feeling loud.',
  },
  journal: {
    eyebrow: 'Journal',
    title: 'Styling notes, gifting ideas, and studio inspiration.',
    body: 'Our journal is where we share the softer side of dressing: how to build an ear stack, what to gift when you want it to feel personal, and how to care for the pieces you reach for most. A full editorial experience can be layered in here later without changing the storefront foundation.',
  },
}

const EditorialPage = ({ slug }) => {
  const content = copyByPath[slug] ?? copyByPath.about

  return (
    <div className="bg-velmora-surface px-5 pb-20 pt-32 text-velmora-ink sm:px-6 lg:px-10 lg:pb-24 lg:pt-40">
      <div className="mx-auto max-w-4xl rounded-[36px] border border-velmora-line bg-velmora-ivory p-8 shadow-card md:p-12">
        <p className="text-xs uppercase tracking-[0.34em] text-velmora-taupe">
          {content.eyebrow}
        </p>
        <h1 className="mt-4 font-display text-5xl leading-tight text-velmora-ink md:text-6xl">
          {content.title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-velmora-muted md:text-lg">
          {content.body}
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex rounded-full bg-velmora-ink px-6 py-3 text-sm uppercase tracking-[0.25em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-ink"
        >
          Shop Velmora
        </Link>
      </div>
    </div>
  )
}

export default EditorialPage
