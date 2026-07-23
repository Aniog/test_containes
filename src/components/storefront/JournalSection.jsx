import { ArrowUpRight } from 'lucide-react'
import { imagePlaceholder, journalPosts } from '@/data/storefront'

export default function JournalSection() {
  return (
    <section id="journal" className="section-shell py-20 sm:py-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Journal</p>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">Editorial notes and styling rituals</h2>
        </div>
        <p className="max-w-lg text-sm leading-7 text-muted">
          A quietly considered destination for layering guides, gifting edits, and care notes that extend the life of your favorites.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {journalPosts.map((post) => (
          <article key={post.id} className="editorial-card overflow-hidden">
            <img
              src={imagePlaceholder}
              alt={post.title}
              className="aspect-[4/3] w-full object-cover"
              data-strk-img-id={post.imageId}
              data-strk-img={`[${post.excerptId}] [${post.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
            />
            <div className="p-6">
              <h3 id={post.titleId} className="font-serif text-3xl text-ink">
                {post.title}
              </h3>
              <p id={post.excerptId} className="mt-4 text-sm leading-7 text-muted">
                {post.excerpt}
              </p>
              <a href="/#journal" className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-button text-ink transition hover:text-gold">
                Read more
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
