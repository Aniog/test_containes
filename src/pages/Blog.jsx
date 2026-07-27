import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import PageHero from '@/components/site/PageHero'
import BlogCard from '@/components/site/BlogCard'
import strkImgConfig from '@/strk-img-config.json'
import { blogPosts, primaryCtaLabel } from '@/data/siteContent'

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      ImageHelper.disconnect(containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Blog"
        title="Useful sourcing content for international buyers working with China"
        description="Short practical articles that help procurement teams and importers think more clearly about supplier checks, inspection timing, and shipping preparation."
        actions={[
          <Link
            key="contact"
            to="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-6 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            {primaryCtaLabel}
          </Link>,
        ]}
        visual={
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <img
              alt="Procurement planning and quality documents"
              className="h-full min-h-[340px] w-full object-cover"
              data-strk-img-id="blog-hero-image-318ef4"
              data-strk-img="[blog-hero-visual-context] [blog-hero-description] [blog-hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="p-6">
              <p id="blog-hero-visual-context" className="sr-only">
                Procurement planning supplier documents quality checklist and sourcing workflow meeting
              </p>
              <h2 id="blog-hero-title" className="text-lg font-semibold text-slate-900">
                Practical content, not exaggerated sourcing advice
              </h2>
              <p id="blog-hero-description" className="mt-3 text-sm leading-7 text-slate-600">
                Built for buyers who need useful guidance before reaching out or making supplier decisions.
              </p>
            </div>
          </div>
        }
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blog
