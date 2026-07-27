import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/layout/PageHero"
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import StrkImage from "@/components/sections/StrkImage"
import InquiryCTA from "@/components/sections/InquiryCTA"
import { blogPosts } from "@/data/site"

const formatDate = (iso) => {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

const Blog = () => {
  const containerRef = useRef(null)
  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Blog"
        title="Practical notes on sourcing, QC, and shipping from China"
        description="What we are seeing on the ground, written for the buyers we work with. New posts every two weeks."
      />

      <section className="bg-warm-100">
        <div className="container-content py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, idx) => (
              <article
                key={post.id}
                className="bg-white border border-warm-300 rounded-[6px] overflow-hidden flex flex-col hover:shadow-cardHover transition-shadow"
              >
                <StrkImage
                  imgId={`blog-${idx}-f6c8a1`}
                  query={post.imgQuery}
                  ratio="3x2"
                  width={600}
                  alt={post.title}
                  ratioClass="aspect-[3/2]"
                  containerClassName="border-b border-warm-300"
                />
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center justify-between">
                    <Badge variant="teal">{post.category}</Badge>
                    <div className="flex items-center gap-3 text-[12px] text-ink-muted">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(post.date)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-ink leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink-secondary">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-teal">
                      Read article
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warm-200 border-y border-warm-300">
        <div className="container-content py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-[-0.015em] text-ink">
            More useful than another article? Talk to a sourcing manager.
          </h2>
          <p className="mt-4 text-base md:text-lg text-ink-secondary max-w-2xl mx-auto">
            Send us your product brief and we will come back with a sourcing
            plan, a shortlist, and an indicative cost — within one business day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button as={Link} to="/contact#inquiry" variant="primary" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight size={18} />
            </Button>
            <Button as={Link} to="/services" variant="secondary" size="lg">
              See our services
            </Button>
          </div>
        </div>
      </section>

      <InquiryCTA />
    </div>
  )
}

export default Blog
