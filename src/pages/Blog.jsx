import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import VisualPanel from '../components/VisualPanel.jsx'
import { blogPosts } from '../content.js'

const Blog = () => (
  <>
    <section className="bg-brand-cloud py-16 text-brand-ink lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Blog"
          title="Practical sourcing notes for overseas buyers"
          description="Guides and checklists about supplier verification, quality control, RFQs, production follow-up, and shipping coordination in China."
          align="center"
        />
      </div>
    </section>

    <section className="bg-white py-16 text-brand-ink lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-7 px-6 md:grid-cols-3 lg:px-8">
        {blogPosts.map((post, index) => (
          <article key={post.id} className="overflow-hidden rounded-3xl border border-brand-steel bg-white shadow-sm">
            <VisualPanel
              id={`blog-${post.id}-visual-${index}`}
              query={`[blog-${post.id}-excerpt] [blog-${post.id}-title]`}
              ratio="16x9"
              width="800"
              alt={post.title}
              className="aspect-video"
            />
            <div className="p-6">
              <p className="text-sm font-semibold text-brand-blue">{post.category}</p>
              <h2 id={`blog-${post.id}-title`} className="mt-3 text-xl font-bold text-brand-navy">{post.title}</h2>
              <p id={`blog-${post.id}-excerpt`} className="mt-3 text-sm leading-7 text-brand-slate">{post.excerpt}</p>
              <Link to="/contact" className="mt-5 inline-flex text-sm font-semibold text-brand-blue hover:text-brand-navy">
                Discuss this topic with us
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
)

export default Blog
