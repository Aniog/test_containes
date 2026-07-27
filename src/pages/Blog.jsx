import { useStrkImages } from "@/hooks/useStrkImages";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import StockImage from "@/components/shared/StockImage";

const posts = [
  {
    id: "verify-factory",
    title: "How to Verify a Chinese Factory Before Placing an Order",
    excerpt:
      "A practical checklist for confirming that a supplier is legitimate, capable, and financially stable before you commit.",
    category: "Supplier Verification",
    date: "July 15, 2026",
    readTime: "6 min read",
    imgId: "blog-verify-factory-1a3b5c",
  },
  {
    id: "qc-basics",
    title: "Quality Control Basics for Buyers Importing from China",
    excerpt:
      "Understanding pre-production, in-process, and pre-shipment inspections can help you avoid costly defects.",
    category: "Quality Control",
    date: "July 8, 2026",
    readTime: "5 min read",
    imgId: "blog-qc-basics-4d7e9f",
  },
  {
    id: "shipping-terms",
    title: "Incoterms Explained for First-Time Importers",
    excerpt:
      "FOB, CIF, DDP, and EXW: what they mean, who pays for what, and which term is right for your order.",
    category: "Shipping",
    date: "June 28, 2026",
    readTime: "7 min read",
    imgId: "blog-shipping-terms-2c5a8d",
  },
  {
    id: "negotiate-price",
    title: "How to Negotiate Price with Chinese Suppliers",
    excerpt:
      "Practical tactics for getting fair pricing without damaging the relationship or cutting corners on quality.",
    category: "Negotiation",
    date: "June 20, 2026",
    readTime: "5 min read",
    imgId: "blog-negotiate-price-8e1b4a",
  },
  {
    id: "trade-fair",
    title: "What to Prepare Before Visiting a Trade Fair in China",
    excerpt:
      "Canton Fair and beyond: how to plan your visit, evaluate suppliers, and follow up effectively.",
    category: "Sourcing Strategy",
    date: "June 12, 2026",
    readTime: "6 min read",
    imgId: "blog-trade-fair-5f2c7e",
  },
  {
    id: "avoid-scams",
    title: "Common Sourcing Scams and How to Avoid Them",
    excerpt:
      "Learn the warning signs of fraudulent suppliers and the steps you can take to protect your business.",
    category: "Risk Management",
    date: "June 5, 2026",
    readTime: "6 min read",
    imgId: "blog-avoid-scams-3a9d6b",
  },
];

export default function Blog() {
  const containerRef = useStrkImages([]);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Blog"
        title="Sourcing insights from China"
        description="Practical guides, tips, and market updates for buyers sourcing from China."
        queryId="blog"
        query="[blog-header-desc] [blog-header-title]"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Latest articles"
            description="Written for importers, purchasing managers, and business owners who want to source smarter."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <StockImage
                    id={post.imgId}
                    query={`[post-excerpt-${post.id}] [post-title-${post.id}] [post-category-${post.id}] [blog-section-title]`}
                    ratio="16x9"
                    width="600"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
                    <span id={`post-category-${post.id}`} className="text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 id={`post-title-${post.id}`} className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </h3>
                  <p id={`post-excerpt-${post.id}`} className="text-slate-600 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <button className="mt-4 text-sm font-semibold text-blue-700 hover:text-blue-800 text-left">
                    Read article →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
