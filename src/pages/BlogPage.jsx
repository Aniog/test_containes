import PageMeta from '@/components/shared/PageMeta'
import SectionHeading from '@/components/shared/SectionHeading'
import PageIntro from '@/components/site/PageIntro'
import QuoteBanner from '@/components/site/QuoteBanner'
import { blogPosts } from '@/content/siteContent'

const BlogPage = () => {
  return (
    <>
      <PageMeta
        title="Blog | SSourcing China"
        description="Practical sourcing articles for overseas buyers, covering supplier verification, QC planning, sourcing briefs, and shipping coordination."
      />
      <main>
        <PageIntro
          eyebrow="Blog"
          title="Practical sourcing content for overseas buyers"
          description="Clearer sourcing decisions often start with better preparation. These articles focus on practical questions buyers ask before and during projects in China."
        />

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Latest articles"
              title="Short, practical guidance for sourcing projects"
              description="The blog is structured for decision-makers who need useful checkpoints rather than overcomplicated theory."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {blogPosts.map((post) => (
                <article key={post.slug} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 text-slate-900 shadow-sm">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">{post.category}</span>
                    <span className="text-slate-500">{post.readTime}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{post.title}</h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">{post.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <QuoteBanner />
      </main>
    </>
  )
}

export default BlogPage
