import ImageLoader from '@/components/site/ImageLoader.jsx'
import PageHero from '@/components/site/PageHero.jsx'
import SectionHeader from '@/components/site/SectionHeader.jsx'
import InquirySection from '@/components/home/InquirySection.jsx'
import { blogPosts } from '@/content.js'

const Blog = () => (
  <ImageLoader>
    <main>
      <PageHero eyebrow="Blog" title="Practical sourcing notes for overseas buyers" description="Guides on supplier comparison, factory verification, quality inspection, production follow-up, and shipping coordination when sourcing from China." imageId="blog-sourcing-documents-desk-y65n3" imageAlt="Sourcing documents and product samples on a desk" />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Latest sourcing guides" description="Useful articles for buyers who want clearer expectations before contacting suppliers or placing orders." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-2xl border border-brand-border bg-white p-7 shadow-sm">
                <p className="mb-4 inline-flex rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold text-brand-blue">{post.category}</p>
                <h2 className="text-xl font-semibold text-brand-navy">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{post.excerpt}</p>
                <button className="mt-6 text-sm font-semibold text-brand-blue">Read preview article</button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <InquirySection />
    </main>
  </ImageLoader>
)

export default Blog
