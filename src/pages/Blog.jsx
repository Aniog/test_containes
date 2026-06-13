import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: "incoterms",
      title: "Understanding Incoterms 2024: A Beginner's Guide",
      excerpt: "FOB, EXW, CIF... what do they mean for your sourcing costs? Learn how to choose the right shipping terms when buying from China.",
      date: "Oct 15, 2023",
      category: "Logistics"
    },
    {
      id: "aql-inspection",
      title: "How AQL Inspections Save You from Bad Inventory - Quality Control Standards Explained",
      excerpt: "Quality control is non-negotiable. Discover how Acceptable Quality Limit (AQL) is calculated and why pre-shipment inspections are vital.",
      date: "Nov 02, 2023",
      category: "Quality Control"
    },
    {
      id: "finding-real-factories",
      title: "Trading Company vs. Real Factory: How to Spot the Difference",
      excerpt: "Alibaba is full of middlemen posing as manufacturers. We share our insider tips on how to verify if you are actually talking to a real factory.",
      date: "Dec 10, 2023",
      category: "Sourcing Tips"
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sourcing Blog | SSourcing China</title>
        <meta name="description" content="Expert insights on China sourcing, quality control, manufacturing trends, and global logistics." />
      </Helmet>

      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="page-title" className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Sourcing Insights</h1>
          <p id="page-desc" className="text-xl text-slate-600 max-w-3xl mx-auto">Expert advice, industry news, and practical tips for successful manufacturing and importing from China.</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    data-strk-img-id={`blog-img-${post.id}`}
                    data-strk-img={`[blog-title-${post.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-sm text-slate-500 mb-3">{post.date}</div>
                  <h2 id={`blog-title-${post.id}`} className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-slate-600 mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                  <Link to="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center mt-auto">
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}