import { categoryHighlights } from '@/data/store'

const CollectionsPage = () => {
  return (
    <main className="bg-brand-canvas px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold">Collections</p>
          <h1 className="mt-5 font-serif text-5xl leading-none text-brand-text sm:text-6xl">
            Curated edits for every gifting mood and everyday ritual.
          </h1>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categoryHighlights.map((collection) => (
            <article
              key={collection.slug}
              className="rounded-[2rem] border border-stone-200/80 bg-white/70 p-6 shadow-card backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-brand-gold">Edit</p>
              <h2 className="mt-5 font-serif text-4xl leading-none text-brand-text">
                {collection.name}
              </h2>
              <p className="mt-4 text-sm leading-7 text-stone-600">{collection.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export default CollectionsPage
