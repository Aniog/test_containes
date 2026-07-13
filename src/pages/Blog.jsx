import Seo from "@/components/shared/Seo.jsx"
import PageHero from "@/components/shared/PageHero.jsx"
import Section from "@/components/shared/Section.jsx"
import InquiryForm from "@/components/shared/InquiryForm.jsx"
import CtaBanner from "@/components/shared/CtaBanner.jsx"
import { blogPosts } from "@/data/blog.js"
import { BookOpen } from "lucide-react"

const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  } catch {
    return iso
  }
}

export default function Blog() {
  const [featured, ...rest] = blogPosts
  return (
    <>
      <Seo
        title="Blog | China Sourcing Tips for Buyers | SSourcing China"
        description="Practical articles on supplier verification, quality inspections, shipping, and Incoterms — written for overseas buyers importing from China."
      />
      <PageHero
        eyebrow="Blog"
        title="Practical articles for buyers importing from China"
        description="No fluff, no exaggerated claims — short, specific articles on the parts of the job that are easy to get wrong."
      />

      <Section>
        <article className="card p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="pill">{featured.category}</span>
              <span>{featured.readTime}</span>
              <span>·</span>
              <span>{formatDate(featured.date)}</span>
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              {featured.title}
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              {featured.excerpt}
            </p>
            <p className="mt-6 text-sm text-slate-500">By {featured.author}</p>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-slate-400" />
            </div>
          </div>
        </article>
      </Section>

      <Section className="bg-slate-50">
        <h2 className="h-section mb-8">Latest articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {rest.map((post) => (
            <article key={post.id} className="card p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="pill">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="h-card mt-4">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between text-xs text-slate-500 border-t border-slate-200 pt-4">
                <span>By {post.author}</span>
                <span>{formatDate(post.date)}</span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3">Have a project in mind?</p>
            <h2 className="h-section">Skip the reading and start a project</h2>
            <p className="body-base mt-4">
              If you have a product you want to source, the fastest way to
              answer most of these questions is to send us a short brief. We
              will come back with a sourcing plan and a transparent quote.
            </p>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm sourcePageHint="/blog" />
          </div>
        </div>
      </Section>

      <CtaBanner
        eyebrow="Practical, not promotional"
        title="Subscribe to our monthly buyer digest"
        description="A short, ad-free email once a month with one practical article, one red flag to watch for, and one supplier or shipping update worth knowing."
        primaryTo="/contact"
        primaryLabel="Get a Free Sourcing Quote"
        secondaryTo="/services"
        secondaryLabel="See Services"
      />
    </>
  )
}
