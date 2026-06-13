import { blogPosts } from '../data/siteContent'
import ContactCTASection from '../components/sections/ContactCTASection'

export default function Blog() {
  return (
    <main>
      <section className="bg-white px-4 py-20 text-brand-ink sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">Blog</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-navy md:text-5xl">Practical China sourcing notes for overseas buyers</h1>
          <p className="mt-6 text-lg leading-8 text-brand-subtle">Guides on supplier screening, inspection planning, production follow-up, and shipment preparation.</p>
        </div>
      </section>
      <section className="bg-brand-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {blogPosts.map((post) => {
            const Icon = post.icon
            return (
              <article className="rounded-3xl border border-slate-200 bg-white p-7 text-brand-ink shadow-sm" key={post.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-muted text-brand-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-brand-navy">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-brand-subtle">{post.excerpt}</p>
                <p className="mt-5 text-sm font-semibold text-brand-blue">Coming soon</p>
              </article>
            )
          })}
        </div>
      </section>
      <ContactCTASection />
    </main>
  )
}
