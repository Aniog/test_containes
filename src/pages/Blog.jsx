import { Link } from "react-router-dom"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Section, SectionHeader } from "@/components/ui/Section"
import { StrkImage } from "@/components/ui/StrkImage"
import { InquiryForm } from "@/components/shared/InquiryForm"
import { blogPosts } from "@/data/content"

const featured = blogPosts[0]
const rest = blogPosts.slice(1)

function formatDate(iso) {
  if (!iso) return ""
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ]
  return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`
}

const categoryToImgHint = {
  Sourcing: "sourcing supplier meeting handshake",
  Quality: "quality inspection product testing",
  Shipping: "shipping container port logistics",
  Logistics: "warehouse container logistics",
  Compliance: "compliance audit document certification",
}

export function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical notes on sourcing from China"
        subtitle="What we see, what works, and what to avoid. Written by our sourcing and QC team — no clickbait, no recycled content."
      />

      {/* Featured post */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-slate-200 overflow-hidden bg-white">
          <div className="lg:col-span-7">
            <StrkImage
              imgId={`blog-img-${featured.id}`}
              query={`[blog-${featured.id}-title] [blog-${featured.id}-category] ${categoryToImgHint[featured.category] || ""}`.trim()}
              ratio="16x9"
              width={1100}
              alt={featured.title}
              className="aspect-[16/9] lg:rounded-none lg:h-full"
            />
          </div>
          <div className="lg:col-span-5 p-6 md:p-8">
            <span
              id={`blog-${featured.id}-category`}
              className="inline-block text-xs font-semibold uppercase tracking-wider text-accent-600 bg-accent-50 rounded-md px-2.5 py-1"
            >
              Featured · {featured.category}
            </span>
            <h2
              id={`blog-${featured.id}-title`}
              className="mt-3 text-2xl md:text-3xl font-bold text-slate-900 leading-tight"
            >
              {featured.title}
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {featured.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(featured.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {featured.readTime}
              </span>
            </div>
            <a
              href="#posts"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-accent-600"
            >
              Read the article <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Section>

      {/* Posts grid */}
      <Section bg="slate" id="posts">
        <SectionHeader
          eyebrow="More articles"
          title="Recent posts from our team"
          align="center"
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <article
              key={post.id}
              id={`blog-${post.id}`}
              className="card overflow-hidden flex flex-col bg-white"
            >
              <StrkImage
                imgId={`blog-img-${post.id}`}
                query={`[blog-${post.id}-title] [blog-${post.id}-category] ${categoryToImgHint[post.category] || ""}`.trim()}
                ratio="4x3"
                width={600}
                alt={post.title}
                className="aspect-[4/3]"
              />
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between text-xs">
                  <span
                    id={`blog-${post.id}-category`}
                    className="font-semibold text-accent-600 bg-accent-50 rounded-md px-2 py-0.5"
                  >
                    {post.category}
                  </span>
                  <span className="text-slate-500 inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h3
                  id={`blog-${post.id}-title`}
                  className="mt-3 text-base font-semibold text-slate-900 leading-snug"
                >
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500 inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(post.date)}
                  </span>
                  <a
                    href="#posts"
                    className="text-sm font-semibold text-navy-900 hover:text-accent-600 inline-flex items-center gap-1"
                  >
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section bg="navySubtle" id="inquiry">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent-600">Subscribe by project</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Rather just send us your project?
            </h2>
            <p className="mt-4 text-base text-slate-600">
              If reading about sourcing makes you want to start, send us your
              brief. We will reply within 1 business day.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-accent-600"
            >
              Go to contact page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </Section>
    </>
  )
}

export default Blog
