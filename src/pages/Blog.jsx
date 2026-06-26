import PageLayout from "../components/layout/PageLayout.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import CtaSection from "../components/layout/CtaSection.jsx";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    id: "post-1",
    title: "How to Verify a Chinese Factory in 5 Steps",
    excerpt:
      "Before placing an order, you need to know if the factory is real, capable, and reliable. Here is a practical checklist any buyer can follow.",
    date: "June 18, 2026",
    readTime: "6 min read",
    category: "Factory Verification",
    imgId: "blog-verify-1a2b3c",
    titleId: "blog-verify-title",
    descId: "blog-verify-desc",
  },
  {
    id: "post-2",
    title: "Understanding AQL Inspection Standards",
    excerpt:
      "AQL sampling is the industry standard for pre-shipment inspections. Learn what the levels mean and how to choose the right one for your product.",
    date: "June 10, 2026",
    readTime: "5 min read",
    category: "Quality Control",
    imgId: "blog-aql-4d5e6f",
    titleId: "blog-aql-title",
    descId: "blog-aql-desc",
  },
  {
    id: "post-3",
    title: "FOB vs CIF vs DDP: Which Shipping Term is Right for You?",
    excerpt:
      "Incoterms define who pays for what in international shipping. This guide breaks down the most common terms used when importing from China.",
    date: "May 28, 2026",
    readTime: "7 min read",
    category: "Logistics",
    imgId: "blog-shipping-7g8h9i",
    titleId: "blog-shipping-title",
    descId: "blog-shipping-desc",
  },
  {
    id: "post-4",
    title: "Red Flags When Sourcing on Alibaba",
    excerpt:
      "Alibaba is a useful tool, but not every supplier listing is trustworthy. Here are warning signs that should make you pause before sending a deposit.",
    date: "May 15, 2026",
    readTime: "6 min read",
    category: "Supplier Sourcing",
    imgId: "blog-alibaba-0j1k2l",
    titleId: "blog-alibaba-title",
    descId: "blog-alibaba-desc",
  },
  {
    id: "post-5",
    title: "How to Handle Product Defects Found During Inspection",
    excerpt:
      "Defects happen. The key is knowing how to respond. Here is a step-by-step process for managing rework, replacements, and supplier accountability.",
    date: "April 30, 2026",
    readTime: "5 min read",
    category: "Quality Control",
    imgId: "blog-defects-3m4n5o",
    titleId: "blog-defects-title",
    descId: "blog-defects-desc",
  },
  {
    id: "post-6",
    title: "What to Include in a China Manufacturing Contract",
    excerpt:
      "A strong contract protects both parties. Learn the essential clauses every buyer should include when signing with a Chinese manufacturer.",
    date: "April 12, 2026",
    readTime: "8 min read",
    category: "Legal & Compliance",
    imgId: "blog-contract-6p7q8r",
    titleId: "blog-contract-title",
    descId: "blog-contract-desc",
  },
];

export default function Blog() {
  return (
    <PageLayout title="Blog">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                Sourcing Insights
              </h1>
              <p className="text-text-secondary text-base sm:text-lg">
                Practical guides, industry updates, and lessons learned from
                managing thousands of sourcing projects in China.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group rounded-xl bg-white border border-border-light overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-surface-alt">
                    <img
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      data-strk-img-id={post.imgId}
                      data-strk-img={`[${post.descId}] [${post.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="p-5 lg:p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h2
                      id={post.titleId}
                      className="text-base font-semibold text-text-primary mb-2 leading-snug group-hover:text-primary transition-colors"
                    >
                      {post.title}
                    </h2>
                    <p
                      id={post.descId}
                      className="text-sm text-text-secondary leading-relaxed mb-4 flex-1"
                    >
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border-light">
                      <div className="flex items-center gap-3 text-xs text-text-muted">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:underline">
                        Read
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </PageLayout>
  );
}
