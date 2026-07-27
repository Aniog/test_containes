import InquirySection from '@/components/home/InquirySection'
import PageHero from '@/components/shared/PageHero'
import { blogPosts } from '@/data/siteContent'

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="China sourcing guides for overseas buyers"
        description="Practical articles about supplier verification, quotation preparation, quality control checkpoints, and shipment coordination from China."
        imageId="blog-page-sourcing-documents-visual-6c98de"
        titleId="blog-page-title"
        descId="blog-page-desc"
      />
      <section className="bg-brand-mist py-16 text-brand-ink md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-2xl border border-brand-line bg-white p-6 text-brand-ink shadow-sm">
              <p className="text-sm font-semibold text-brand-amber">{post.date}</p>
              <h2 className="mt-3 text-xl font-semibold text-brand-navy">{post.title}</h2>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{post.excerpt}</p>
              <p className="mt-6 text-sm font-semibold text-brand-blue">Preview article</p>
            </article>
          ))}
        </div>
      </section>
      <InquirySection />
    </>
  )
}
