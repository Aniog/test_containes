import { useStockImages } from '@/hooks/useStockImages'

export default function JournalSection({ posts }) {
  const containerRef = useStockImages([posts])

  return (
    <section id="journal" className="section-shell border-t border-mist/70 bg-sand/35">
      <div className="container-shell space-y-10" ref={containerRef}>
        <div className="space-y-4">
          <p className="eyebrow">Journal</p>
          <h2 className="section-title">A Softer Way to Style and Gift</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => {
            const titleId = `journal-${post.slug}-title`
            const cueId = `journal-${post.slug}-cue`

            return (
              <article key={post.slug} className="overflow-hidden rounded-[2rem] border border-mist/70 bg-porcelain shadow-lg shadow-obsidian/5">
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center"
                  role="img"
                  aria-label={post.title}
                  data-strk-bg-id={`journal-${post.slug}-image`}
                  data-strk-bg={`[${cueId}] [${titleId}]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="900"
                />
                <div className="space-y-4 p-6">
                  <p className="eyebrow">Editorial Note</p>
                  <h3 id={titleId} className="font-serif text-3xl leading-tight text-obsidian">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-7 text-espresso/78">{post.excerpt}</p>
                </div>
                <p id={cueId} className="sr-only">
                  {post.cue}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
