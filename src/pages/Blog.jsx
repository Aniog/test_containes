import React from 'react'
import SectionHeading from '@/components/sections/SectionHeading'
import CTASection from '@/components/sections/CTASection'
import { blogPosts } from '@/data'

export default function Blog() {
  return (
    <main>
      <section className="bg-white px-4 py-20 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Blog" title="Practical sourcing guidance for overseas buyers" description="Clear, useful articles about supplier verification, sourcing briefs, quality control, and China production follow-up." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article key={post.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-sm">
                <img alt={post.title} className="h-48 w-full object-cover" data-strk-img-id={`blog-post-image-${index}-a9b${index}`} data-strk-img={`[blog-post-${index}-excerpt] [blog-post-${index}-title]`} data-strk-img-ratio="16x9" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
                <div className="p-6">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{post.category}</span>
                  <h2 id={`blog-post-${index}-title`} className="mt-5 text-xl font-bold text-slate-950">{post.title}</h2>
                  <p id={`blog-post-${index}-excerpt`} className="mt-3 text-sm leading-6 text-slate-700">{post.excerpt}</p>
                  <p className="mt-5 text-sm font-semibold text-blue-700">Preview article</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
