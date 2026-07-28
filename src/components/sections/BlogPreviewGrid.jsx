import { blogPosts } from '@/data/siteContent'

const BlogPreviewGrid = () => {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {blogPosts.map((post) => (
        <article key={post.title} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-blue">{post.category}</p>
          <h3 className="mt-4 text-xl font-semibold text-brand-navy">{post.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
          <p className="mt-5 text-sm font-semibold text-brand-navy">Practical guidance for overseas buyers</p>
        </article>
      ))}
    </div>
  )
}

export default BlogPreviewGrid
