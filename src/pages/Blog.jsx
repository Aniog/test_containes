import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "../components/shared/PageHeader";
import CTASection from "../components/shared/CTASection";

const posts = [
  {
    id: "verify-china-supplier-2026",
    title: "How to verify a Chinese supplier before placing your first order",
    excerpt: "A practical checklist for buyers, covering business license checks, factory visits, certification review and reference calls.",
    date: "Mar 18, 2026",
    readTime: "8 min",
    category: "Supplier Vetting",
    imgId: "blog-card-verify-supplier-2c3a91",
  },
  {
    id: "aql-inspection-guide",
    title: "AQL inspections explained: what overseas buyers actually need to know",
    excerpt: "Understand sampling plans, AQL levels and how to read an inspection report so you can make better release decisions.",
    date: "Mar 04, 2026",
    readTime: "10 min",
    category: "Quality Control",
    imgId: "blog-card-aql-inspection-7c5b22",
  },
  {
    id: "fob-cif-ddp-explained",
    title: "FOB, CIF, DDP and EXW: shipping terms in plain English",
    excerpt: "What each Incoterm means in practice, who pays for what, and which one usually makes sense for first-time importers.",
    date: "Feb 20, 2026",
    readTime: "7 min",
    category: "Logistics",
    imgId: "blog-card-incoterms-1ab0fd",
  },
  {
    id: "fba-prep-from-china",
    title: "Sending goods from China directly to Amazon FBA: a 2026 checklist",
    excerpt: "From FNSKU labeling to carton requirements, palletizing and shipment booking, the steps that prevent FBA receiving issues.",
    date: "Feb 06, 2026",
    readTime: "9 min",
    category: "Amazon FBA",
    imgId: "blog-card-fba-checklist-9eb420",
  },
  {
    id: "yiwu-vs-guangzhou",
    title: "Yiwu vs. Guangzhou: choosing the right sourcing hub for your product",
    excerpt: "A neutral comparison of two major sourcing hubs, with notes on product categories, factory sizes and typical buyer profiles.",
    date: "Jan 22, 2026",
    readTime: "6 min",
    category: "China Sourcing",
    imgId: "blog-card-yiwu-guangzhou-3fc12a",
  },
  {
    id: "private-label-mistakes",
    title: "Five private label mistakes we see new brands make",
    excerpt: "From skipping tooling agreements to confusing CE and ETL, the most common pitfalls and how to avoid them.",
    date: "Jan 08, 2026",
    readTime: "8 min",
    category: "Private Label",
    imgId: "blog-card-private-label-7da123",
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Sourcing Insights"
        title="Practical notes from the China sourcing floor"
        description="Articles written by our team for overseas buyers. No filler, no clickbait &mdash; just what we wish more new clients knew before placing their first order."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group rounded-xl overflow-hidden border border-[#D9E2EC] bg-white hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[16/9] bg-[#EEF2F7] overflow-hidden">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-post-${post.id}-excerpt] [blog-post-${post.id}-title] [blog-post-${post.id}-category]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span
                    id={`blog-post-${post.id}-category`}
                    className="inline-flex items-center self-start px-2.5 py-1 rounded-full bg-[#1F4E79]/10 text-[#1F4E79] text-xs font-semibold"
                  >
                    {post.category}
                  </span>
                  <h2
                    id={`blog-post-${post.id}-title`}
                    className="mt-3 text-lg font-semibold text-[#0B2545] leading-snug"
                  >
                    {post.title}
                  </h2>
                  <p
                    id={`blog-post-${post.id}-excerpt`}
                    className="mt-2 text-sm text-[#475569] leading-relaxed flex-1"
                  >
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-[#64748B]">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-1 text-[#1F4E79] hover:text-[#C8102E] font-semibold"
                    >
                      Read
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a sourcing question we should cover?"
        description="Suggest a topic or ask us directly. We answer most buyer questions within one business day."
      />
    </div>
  );
};

export default Blog;
