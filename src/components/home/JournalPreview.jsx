import { journalPosts } from "@/data/store"
import SectionHeading from "@/components/shared/SectionHeading"

const JournalPreview = () => {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Journal"
          title="Stories on layering, gifting, and care"
          description="A calm editorial space with ideas for styling gold jewelry and making your favorite pieces last beautifully."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {journalPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-[2rem] border border-velvet/10 bg-porcelain p-8 text-velvet shadow-soft"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-gold">{post.category}</p>
              <h3 className="mt-6 font-serif text-3xl leading-tight text-velvet">{post.title}</h3>
              <p className="mt-4 text-sm leading-7 text-velvet/72">{post.excerpt}</p>
              <button
                type="button"
                className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-velvet transition hover:text-rosewood"
              >
                Read article
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalPreview
