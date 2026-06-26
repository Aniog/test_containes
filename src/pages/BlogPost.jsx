import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { format, parseISO } from "date-fns"
import { ArrowLeft, ArrowRight } from "lucide-react"
import PageShell from "@/components/shared/PageShell"
import { Container, Section, Badge } from "@/components/ui/primitives"
import { Button } from "@/components/ui/button"
import { BLOG_POSTS, getPostBySlug } from "@/data/blog"

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  useEffect(() => {
    document.title = post
      ? `${post.title} | Blog | SSourcing China`
      : "Article | SSourcing China"
    window.scrollTo({ top: 0 })
  }, [slug, post])

  if (!post) {
    return (
      <PageShell>
        <Section className="bg-white">
          <Container className="max-w-2xl text-center py-20">
            <h1 className="text-2xl font-bold text-slate-900">
              Article not found
            </h1>
            <p className="mt-3 text-slate-700">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Button as={Link} to="/blog" variant="secondary" className="mt-6">
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Button>
          </Container>
        </Section>
      </PageShell>
    )
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug)

  return (
    <PageShell>
      <Section className="bg-slate-50 border-b border-slate-200">
        <Container className="pt-10 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-navy-700"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All articles
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <Badge tone="amber">{post.category}</Badge>
            <time dateTime={post.date}>
              {format(parseISO(post.date), "MMMM d, yyyy")}
            </time>
            <span>· {post.readTime}</span>
          </div>
          <h1
            id={`blog-post-${post.slug}-title`}
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900"
          >
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-slate-700 leading-relaxed">
            {post.excerpt}
          </p>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="max-w-3xl">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 mb-10">
            <img
              alt={post.imgAlt}
              data-strk-img-id={post.imgId}
              data-strk-img="[blog-post-detail-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <article className="prose prose-slate max-w-none">
            {post.body.map((p, i) => (
              <p
                key={i}
                className="mt-5 first:mt-0 text-slate-700 leading-relaxed"
              >
                {p}
              </p>
            ))}
          </article>

          <div className="mt-12 rounded-2xl bg-navy-950 p-8 text-white text-center">
            <h2 className="text-2xl font-bold">
              Need help with a sourcing project?
            </h2>
            <p className="mt-3 text-slate-300 max-w-xl mx-auto">
              Our team reads every inquiry and replies within one business day.
            </p>
            <Button
              as={Link}
              to="/contact"
              variant="accent"
              size="lg"
              className="mt-6"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>

      {otherPosts.length > 0 && (
        <Section className="bg-slate-100">
          <Container>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              More articles
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {otherPosts.map((p) => (
                <article
                  key={p.slug}
                  className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white"
                >
                  <div className="relative aspect-[16/9] bg-slate-100">
                    <img
                      alt={p.imgAlt}
                      data-strk-img-id={`${p.imgId}-related`}
                      data-strk-img="[blog-related-title]"
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <Badge tone="amber">{p.category}</Badge>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900">
                      <Link to={`/blog/${p.slug}`} className="hover:text-navy-900">
                        {p.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                      {p.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </PageShell>
  )
}