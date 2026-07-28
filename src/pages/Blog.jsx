import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getStrkImageUrl } from '@/lib/strk-image-utils.js'
import PageHeader from '@/components/common/PageHeader.jsx?ssourcing=20260728'
import FinalCTA from '@/components/common/FinalCTA.jsx?ssourcing=20260728'
import SectionHeading from '@/components/common/SectionHeading.jsx?ssourcing=20260728'
import { blogPosts } from '@/data/siteContent.js'

const Blog = () => {
  const postsRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, postsRef.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="China sourcing insights for practical importers"
        description="Read straightforward guides on supplier comparison, verification, quality inspection, production follow-up, and export preparation."
        imageId="blog-sourcing-documents-31fe90"
        caption="Practical sourcing guidance for overseas buyers reviewing suppliers, samples, and shipment details."
      />
      <section ref={postsRef} className="bg-slate-50 py-16 text-slate-950 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Latest articles"
            title="Guides for better sourcing decisions"
            description="The blog preview uses practical, non-exaggerated advice written for B2B purchasing teams."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post, index) => {
              const titleId = `blog-post-${index + 1}-title`
              const descId = `blog-post-${index + 1}-desc`
              return (
                <article key={post.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm">
                  <img
                    alt={post.title}
                    className="h-48 w-full object-cover"
                    data-strk-img-id={`blog-post-${index + 1}-img-91bc${index}`}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src={getStrkImageUrl(`blog-post-${index + 1}-img-91bc${index}`)}
                  />
                  <div className="p-6">
                    <p className="text-sm font-semibold text-blue-700">{post.category}</p>
                    <h2 id={titleId} className="mt-3 text-xl font-bold text-slate-950">{post.title}</h2>
                    <p id={descId} className="mt-3 text-sm leading-7 text-slate-700">{post.excerpt}</p>
                    <span className="mt-5 inline-block text-sm font-semibold text-blue-700">Read article</span>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  )
}

export default Blog
