const BlogCard = ({ post }) => {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
        {post.tag}
      </span>
      <h3 className="mt-5 text-xl font-semibold text-slate-900">{post.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt}</p>
      <p className="mt-6 text-sm font-semibold text-slate-900">Article preview</p>
    </article>
  )
}

export default BlogCard
