import { journalPosts } from "@/data/store"

const JournalPage = () => {
  return (
    <section className="bg-ivory pb-20 pt-8 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-porcelain px-6 py-14 text-velvet shadow-soft sm:px-10">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Journal</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-velvet sm:text-5xl lg:text-6xl">
            Styling notes, gifting ideas, and simple care rituals
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-velvet/74">
            A calm editorial space created to help you style, gift, and care for your favorite Velmora pieces with confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {journalPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-[2rem] border border-velvet/10 bg-champagne/35 p-8 text-velvet shadow-soft"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gold">{post.category}</p>
              <h2 className="mt-6 font-serif text-3xl leading-tight text-velvet">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-velvet/72">{post.excerpt}</p>
              <button
                type="button"
                className="mt-8 rounded-full border border-velvet/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-velvet transition hover:bg-velvet hover:text-ivory"
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

export default JournalPage
