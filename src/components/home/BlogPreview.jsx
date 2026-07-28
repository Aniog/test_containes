import { BookOpen } from 'lucide-react'
import CTAButton from '@/components/common/CTAButton.jsx?ssourcing=20260728'
import SectionHeading from '@/components/common/SectionHeading.jsx?ssourcing=20260728'
import { blogPosts } from '@/data/siteContent.js'

const BlogPreview = () => (
  <section className="bg-white py-16 text-slate-950 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Blog"
          title="Practical guides for sourcing from China"
          description="Straightforward articles for buyers who want better supplier comparisons, clearer QC expectations, and smoother shipping preparation."
        />
        <CTAButton href="/blog" variant="secondary">Visit blog</CTAButton>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-950">
            <BookOpen className="h-6 w-6 text-blue-700" />
            <p className="mt-5 text-sm font-semibold text-blue-700">{post.category}</p>
            <h3 className="mt-3 text-xl font-bold text-slate-950">{post.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default BlogPreview
