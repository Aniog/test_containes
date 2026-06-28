function BlogGrid({ posts }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {posts.map((post) => (
        <article
          key={post.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {post.category}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-slate-900">{post.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
          <p className="mt-6 text-sm font-semibold text-slate-900">Practical article outline</p>
        </article>
      ))}
    </div>
  )
}

export default BlogGrid
