import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Calendar, ArrowRight } from "lucide-react"
import { format, parseISO } from "date-fns"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/ui/PageHero"
import { Section } from "@/components/ui/Section"
import CtaBanner from "@/components/sections/CtaBanner"
import { blogPosts } from "@/data/content"

function FeaturedPost() {
  const post = blogPosts[0]
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <img
          alt={post.title}
          data-strk-img-id={post.imgId}
          data-strk-img={`[blog-${post.id}-excerpt] [blog-${post.id}-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="aspect-[4/3] w-full rounded-2xl border border-line object-cover shadow-sm"
        />
        <div>
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {post.category}
          </span>
          <h2 className="heading-2 mt-4" id={`blog-${post.id}-title`}>
            {post.title}
          </h2>
          <p className="lead mt-3" id={`blog-${post.id}-excerpt`}>
            {post.excerpt}
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted">
            <Calendar className="h-4 w-4" />
            {format(parseISO(post.date), "MMMM d, yyyy")}
          </p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            Read article
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  )
}

function PostGrid() {
  const posts = blogPosts.slice(1)
  return (
    <Section className="bg-white">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-sm transition-shadow hover:shadow-md"
          >
            <img
              alt={post.title}
              data-strk-img-id={post.imgId}
              data-strk-img={`[blog-${post.id}-excerpt] [blog-${post.id}-title]`}
              data-strk-img-ratio="3x2"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="aspect-[3/2] w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {post.category}
              </span>
              <h3 className="heading-3 mt-2" id={`blog-${post.id}-title`}>
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-body" id={`blog-${post.id}-excerpt`}>
                {post.excerpt}
              </p>
              <p className="mt-4 flex items-center gap-2 text-xs text-muted">
                <Calendar className="h-3.5 w-3.5" />
                {format(parseISO(post.date), "MMM d, yyyy")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default function Blog() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Blog"
        title="Practical sourcing insights from the ground"
        description="Field-tested guidance on supplier verification, quality control, and shipping, written by the team doing the work."
      />
      <FeaturedPost />
      <PostGrid />
      <CtaBanner />
    </div>
  )
}
