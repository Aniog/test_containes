import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { blogPosts } from '@/data/site'
import { format, parseISO } from 'date-fns'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function Blog() {
  const containerRef = useStrkImages()

  return (
    <div ref={containerRef}>
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block uppercase tracking-wide text-primary font-semibold text-sm mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6">
              Sourcing Insights
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Practical guides and updates for buyers sourcing products from China.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm transition hover:shadow-md"
              >
                <div
                  className="h-48 bg-neutral-100 bg-cover bg-center"
                  data-strk-bg-id={`blog-bg-${post.id}-c1d2e3`}
                  data-strk-bg={`[blog-${post.id}-title] [blog-${post.id}-category]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="700"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                    <span className="font-medium text-primary">{post.category}</span>
                    <span>•</span>
                    <time dateTime={post.date}>{format(parseISO(post.date), 'MMMM d, yyyy')}</time>
                  </div>
                  <h2
                    id={`blog-${post.id}-title`}
                    className="text-xl font-bold text-neutral-900 mb-3"
                  >
                    {post.title}
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <button className="text-sm font-semibold text-primary hover:text-primary-dark">
                    Read more →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
