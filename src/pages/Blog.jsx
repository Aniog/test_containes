import { Link } from 'react-router-dom'
import SectionHeading from '@/components/home/SectionHeading'
import { blogPosts } from '@/lib/pageData'

export default function Blog() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Blog"
            title="Practical notes for overseas buyers sourcing from China"
            text="Clear guidance on supplier screening, quality inspection, production follow-up, and export coordination."
          />
        </div>
      </section>
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-slate-200 bg-white p-7 text-slate-950 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Sourcing guide</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950">{post.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-700">{post.excerpt}</p>
              <Link to="/contact#inquiry" className="mt-6 inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-950 hover:bg-slate-100">
                Ask about your project
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
