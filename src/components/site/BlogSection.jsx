import SectionHeading from '@/components/site/SectionHeading'

export default function BlogSection({ posts, limit }) {
  const displayPosts = typeof limit === 'number' ? posts.slice(0, limit) : posts

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Practical sourcing articles for buyers working with China"
          description="Short, useful guidance around supplier checks, inspection timing, production follow-up, and shipping readiness."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {displayPosts.map((post) => (
            <article key={post.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                  {post.category}
                </p>
                <p className="text-sm text-slate-500">{post.readTime}</p>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
