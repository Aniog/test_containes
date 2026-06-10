import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight, Calendar } from "lucide-react"

const POSTS = [
  {
    id: "verify-supplier-china",
    title: "How to verify a Chinese supplier before placing an order",
    excerpt: "Six checks every overseas buyer should run before transferring a deposit, including business license verification, capacity assessment, and reference checks.",
    date: "May 28, 2026",
    category: "Supplier Verification",
    readTime: "8 min read",
  },
  {
    id: "aql-inspection-guide",
    title: "A practical guide to AQL inspections for B2B buyers",
    excerpt: "Understand how AQL sampling actually works, what defects to define as critical, major, or minor, and how to avoid costly disputes after shipment.",
    date: "May 14, 2026",
    category: "Quality Control",
    readTime: "7 min read",
  },
  {
    id: "fob-cif-ddp",
    title: "FOB, CIF, or DDP: which Incoterm is right for your sourcing project?",
    excerpt: "A simple comparison of the three most common Incoterms used by overseas buyers sourcing from China, and when each is the right choice.",
    date: "April 30, 2026",
    category: "Shipping",
    readTime: "6 min read",
  },
  {
    id: "low-moq-startups",
    title: "Sourcing from China as a startup: how to negotiate low MOQs",
    excerpt: "Practical tactics for early-stage brands to find suppliers willing to start small without sacrificing quality or paying premium pricing.",
    date: "April 18, 2026",
    category: "For Startups",
    readTime: "9 min read",
  },
  {
    id: "factory-vs-trader",
    title: "Trading company vs. real factory: how to tell the difference",
    excerpt: "How to read between the lines of factory profiles on B2B platforms and identify whether you are talking to a manufacturer or a middleman.",
    date: "April 5, 2026",
    category: "Supplier Verification",
    readTime: "7 min read",
  },
  {
    id: "production-followup",
    title: "What good production follow-up looks like",
    excerpt: "Why weekly production reports matter, what should be included, and how to spot early warning signs of delays before they impact your shipment.",
    date: "March 22, 2026",
    category: "Production",
    readTime: "5 min read",
  },
]

export default function Blog() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest font-semibold text-gold mb-3">Blog</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Practical guides for overseas buyers
          </h1>
          <p className="mt-5 text-lg text-slate-200 max-w-3xl">
            Honest, no-fluff articles on supplier verification, quality control,
            production, and shipping from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p) => (
              <article key={p.id} className="bg-white rounded-xl border border-border-soft overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-[3/2] bg-slate-100 overflow-hidden">
                  <img
                    alt={p.title}
                    data-strk-img-id={`blog-${p.id}-img-1c8a`}
                    data-strk-img={`[blog-${p.id}-excerpt] [blog-${p.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="text-blue-action font-semibold uppercase tracking-widest">{p.category}</span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {p.date}
                    </span>
                  </div>
                  <h2 id={`blog-${p.id}-title`} className="mt-3 text-lg font-semibold text-navy">
                    {p.title}
                  </h2>
                  <p id={`blog-${p.id}-excerpt`} className="mt-2 text-slate-600 text-sm leading-relaxed flex-1">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-slate-500">{p.readTime}</span>
                    <span className="inline-flex items-center gap-1 text-blue-action font-medium">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg-soft border-t border-border-soft">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy">
            Have a sourcing question we should write about?
          </h2>
          <p className="mt-4 text-slate-600">Send it through. We answer real buyer questions in our articles.</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-gold hover:bg-gold-deep text-navy px-7 py-3.5 rounded-md font-semibold"
          >
            Contact our team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
