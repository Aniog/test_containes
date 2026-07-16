const stories = [
  {
    id: 'layering-guide',
    title: 'How to layer gold jewelry without overdoing it',
    category: 'Styling Notes',
  },
  {
    id: 'gift-edit',
    title: 'The gift edit: pieces that feel special from the first unboxing',
    category: 'Gift Guide',
  },
]

export default function JournalSection() {
  return (
    <section id="journal" className="bg-velmora-mist/55 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-editorial text-velmora-muted">Journal</p>
            <h2 className="mt-3 font-serif text-4xl text-velmora-ink sm:text-5xl">
              Editorial notes from the Velmora world
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-velmora-muted">
            Styling rituals, care tips, and gifting inspiration created to make each piece feel more personal.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {stories.map((story) => {
            const categoryId = `journal-${story.id}-category`
            const titleId = `journal-${story.id}-title`

            return (
              <article
                key={story.id}
                className="overflow-hidden rounded-[2rem] border border-velmora-line/70 bg-velmora-paper text-velmora-ink shadow-velmora-card"
              >
                <img
                  alt={story.title}
                  className="aspect-[16/10] w-full object-cover"
                  data-strk-img-id={`journal-${story.id}-image`}
                  data-strk-img={`[${titleId}] [${categoryId}] [journal]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                />
                <div className="px-6 py-6">
                  <p id={categoryId} className="text-xs uppercase tracking-editorial text-velmora-muted">
                    {story.category}
                  </p>
                  <h3 id={titleId} className="mt-3 font-serif text-3xl text-velmora-ink">
                    {story.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-velmora-muted">
                    Read more coming soon — the journal has been styled as a future-ready editorial destination.
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
