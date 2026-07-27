import { Link } from "react-router-dom";
import SectionHeader from "@/components/shared/SectionHeader";
import { Calendar, ArrowRight, User } from "lucide-react";

const posts = [
  {
    slug: "how-to-verify-a-chinese-factory",
    title: "How to Verify a Chinese Factory Before Placing an Order",
    excerpt: "A practical checklist for confirming that a supplier is legitimate, capable, and aligned with your quality expectations.",
    date: "July 15, 2026",
    author: "SSourcing Team",
    category: "Factory Verification",
  },
  {
    slug: "pre-shipment-inspection-basics",
    title: "Pre-Shipment Inspection: What Buyers Should Know",
    excerpt: "Why pre-shipment inspections matter, what they cover, and how to use inspection reports to protect your order.",
    date: "July 8, 2026",
    author: "SSourcing Team",
    category: "Quality Control",
  },
  {
    slug: "incoterms-for-china-sourcing",
    title: "Incoterms Explained for Buyers Sourcing from China",
    excerpt: "Understand FOB, CIF, EXW, and DDP so you can compare quotes accurately and avoid unexpected shipping costs.",
    date: "June 28, 2026",
    author: "SSourcing Team",
    category: "Shipping",
  },
  {
    slug: "negotiating-payment-terms",
    title: "Negotiating Payment Terms with Chinese Suppliers",
    excerpt: "Common payment structures, risks to watch for, and how to balance supplier requirements with buyer protection.",
    date: "June 20, 2026",
    author: "SSourcing Team",
    category: "Sourcing Strategy",
  },
  {
    slug: "red-flags-supplier-scams",
    title: "Red Flags That a Supplier May Not Be Reliable",
    excerpt: "Warning signs to spot early in supplier communication, and steps you can take to reduce risk before sending money.",
    date: "June 12, 2026",
    author: "SSourcing Team",
    category: "Risk Management",
  },
  {
    slug: "product-sampling-process",
    title: "The Product Sampling Process from Start to Finish",
    excerpt: "How to request, evaluate, and approve samples before committing to mass production with a new supplier.",
    date: "June 5, 2026",
    author: "SSourcing Team",
    category: "Sourcing Process",
  },
];

const Blog = () => {
  return (
    <div>
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold tracking-wider text-teal-400 uppercase mb-3">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sourcing Insights & Guides</h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Practical advice for buying from China, from supplier verification to shipping and quality control.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Latest Articles"
            description="Browse our latest articles on China sourcing, supplier management, and procurement best practices."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-all flex flex-col"
              >
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3 leading-snug">
                    <Link to={`/blog/${post.slug}`} className="hover:text-teal-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white hover:bg-teal-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get Sourcing Help <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
