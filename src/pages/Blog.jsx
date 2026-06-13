import PageHero from '../components/shared/PageHero.jsx'
import ContentCard from '../components/shared/ContentCard.jsx'
import SectionHeading from '../components/shared/SectionHeading.jsx'
import SectionShell from '../components/shared/SectionShell.jsx'
import { blogPosts } from '../siteContent.js'

const Blog = () => {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Useful sourcing articles for overseas buyers"
        description="A practical content section covering supplier comparison, factory checks, quality control, production follow-up, and shipping preparation when buying from China."
        secondaryHref="/contact"
        secondaryLabel="Ask a Sourcing Question"
      />

      <SectionShell>
        <SectionHeading
          eyebrow="Insights"
          title="Current sourcing topics"
          description="The blog is written in clear English for buyers who want practical sourcing information without inflated claims or unnecessary complexity."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <ContentCard key={post.title} className="flex h-full flex-col justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">{post.category}</p>
                <h2 className="mt-4 text-xl font-semibold text-brand-navy">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt}</p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-surface-border pt-5">
                <span className="text-sm text-slate-500">{post.readTime}</span>
                <span className="text-sm font-semibold text-brand-blue">Article preview</span>
              </div>
            </ContentCard>
          ))}
        </div>
      </SectionShell>
    </main>
  )
}

export default Blog
