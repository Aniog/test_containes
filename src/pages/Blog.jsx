import { CalendarDays } from 'lucide-react'
import Container from '../components/site/Container.jsx'
import SectionHeader from '../components/site/SectionHeader.jsx'

const posts = [
  {
    title: 'How to check whether a China supplier is suitable for your order',
    category: 'Supplier verification',
    excerpt: 'A practical checklist covering supplier identity, production fit, export experience, communication, samples, and basic documents.',
    date: 'July 2026',
    imgId: 'blog-supplier-check-factory-04eb9a',
    titleId: 'blog-supplier-check-title',
    descId: 'blog-supplier-check-desc',
  },
  {
    title: 'When should buyers arrange quality inspection in China?',
    category: 'Quality control',
    excerpt: 'Understand the difference between pre-production checks, during-production inspections, and final random inspections before shipment.',
    date: 'July 2026',
    imgId: 'blog-quality-inspection-products-5c8f31',
    titleId: 'blog-quality-title',
    descId: 'blog-quality-desc',
  },
  {
    title: 'Common shipping coordination issues after production is finished',
    category: 'Shipping coordination',
    excerpt: 'Carton data, shipping marks, export documents, packing photos, and forwarder timing can all delay shipment if they are not checked early.',
    date: 'July 2026',
    imgId: 'blog-shipping-container-warehouse-2a19dc',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
]

const Blog = () => (
  <>
    <section className="bg-slate-50 py-20 text-slate-900 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Blog"
          title="Practical China sourcing insights"
          description="Clear guides for overseas buyers planning supplier search, factory verification, quality inspection, production follow-up, and shipping coordination."
          align="center"
        />
      </Container>
    </section>

    <section className="bg-white py-16 text-slate-900 md:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-sm">
              <img
                alt={post.title}
                className="h-56 w-full object-cover"
                data-strk-img-id={post.imgId}
                data-strk-img={`[${post.descId}] [${post.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  <span>{post.category}</span>
                  <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" /> {post.date}</span>
                </div>
                <h2 id={post.titleId} className="mt-4 text-xl font-semibold text-brand-navy">{post.title}</h2>
                <p id={post.descId} className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                <a href="/contact" className="mt-5 inline-flex text-sm font-semibold text-brand-blue hover:text-brand-navy">
                  Ask about your project
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  </>
)

export default Blog
