import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 'sourcing-guide-2026',
    title: 'The Complete Guide to Sourcing from China in 2026',
    excerpt: 'Everything you need to know about finding suppliers, negotiating prices, managing quality, and navigating logistics in the current market.',
    date: '2026-07-15',
    author: 'Michael Chen',
    readTime: '8 min read',
    category: 'Sourcing Guide',
    imgId: 'blog-sourcing-guide-c5d6e7',
    titleId: 'blog-sourcing-guide-title',
    descId: 'blog-sourcing-guide-desc',
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: 20 Questions to Ask Before Placing an Order',
    excerpt: 'A practical checklist for evaluating potential suppliers, from production capacity and quality systems to financial stability and export experience.',
    date: '2026-07-08',
    author: 'Sarah Wang',
    readTime: '6 min read',
    category: 'Quality Control',
    imgId: 'blog-factory-audit-f8g9h0',
    titleId: 'blog-factory-audit-title',
    descId: 'blog-factory-audit-desc',
  },
  {
    id: 'qc-inspections-explained',
    title: 'AQL Inspections Explained: What Every Buyer Should Know',
    excerpt: 'Understanding Acceptable Quality Level (AQL) sampling, inspection levels, and how to set the right quality standards for your products.',
    date: '2026-06-28',
    author: 'David Liu',
    readTime: '7 min read',
    category: 'Quality Control',
    imgId: 'blog-aql-explained-i1j2k3',
    titleId: 'blog-aql-explained-title',
    descId: 'blog-aql-explained-desc',
  },
  {
    id: 'shipping-costs-2026',
    title: 'China Shipping Costs in 2026: FCL vs LCL vs Air Freight',
    excerpt: 'A comparison of shipping options from China, including current rate trends, transit times, and how to choose the right method for your business.',
    date: '2026-06-20',
    author: 'Michael Chen',
    readTime: '5 min read',
    category: 'Logistics',
    imgId: 'blog-shipping-costs-l4m5n6',
    titleId: 'blog-shipping-costs-title',
    descId: 'blog-shipping-costs-desc',
  },
  {
    id: 'protect-ip-china',
    title: 'How to Protect Your Intellectual Property When Manufacturing in China',
    excerpt: 'Essential IP protection strategies including NNN agreements, design patents, trademark registration, and contract clauses for safe manufacturing.',
    date: '2026-06-12',
    author: 'Sarah Wang',
    readTime: '9 min read',
    category: 'Legal & IP',
    imgId: 'blog-protect-ip-o7p8q9',
    titleId: 'blog-protect-ip-title',
    descId: 'blog-protect-ip-desc',
  },
  {
    id: 'canton-fair-guide',
    title: 'Canton Fair 2026: A Buyer\'s Guide to Making the Most of Your Visit',
    excerpt: 'Tips for navigating the Canton Fair, from pre-fair preparation and supplier meetings to post-fair follow-up and evaluation.',
    date: '2026-06-05',
    author: 'David Liu',
    readTime: '6 min read',
    category: 'Trade Shows',
    imgId: 'blog-canton-fair-r0s1t2',
    titleId: 'blog-canton-fair-title',
    descId: 'blog-canton-fair-desc',
  },
  {
    id: 'mold-manufacturing',
    title: 'Injection Mold Manufacturing in China: Cost, Timeline & Quality Tips',
    excerpt: 'What to expect when ordering injection molds from China, including typical costs, lead times, common pitfalls, and how to ensure mold quality.',
    date: '2026-05-28',
    author: 'Michael Chen',
    readTime: '7 min read',
    category: 'Manufacturing',
    imgId: 'blog-mold-manufacturing-u3v4w5',
    titleId: 'blog-mold-manufacturing-title',
    descId: 'blog-mold-manufacturing-desc',
  },
  {
    id: 'sustainable-sourcing',
    title: 'Sustainable Sourcing from China: Finding Eco-Friendly Manufacturers',
    excerpt: 'How to find and verify environmentally responsible suppliers in China, including certifications to look for and questions to ask about materials and processes.',
    date: '2026-05-20',
    author: 'Sarah Wang',
    readTime: '5 min read',
    category: 'Sustainability',
    imgId: 'blog-sustainable-sourcing-x6y7z8',
    titleId: 'blog-sustainable-sourcing-title',
    descId: 'blog-sustainable-sourcing-desc',
  },
  {
    id: 'negotiation-tips',
    title: '10 Negotiation Tips for Better Prices from Chinese Suppliers',
    excerpt: 'Practical negotiation strategies that work, from understanding cost structures and building relationships to timing your orders for the best rates.',
    date: '2026-05-12',
    author: 'David Liu',
    readTime: '6 min read',
    category: 'Sourcing Guide',
    imgId: 'blog-negotiation-tips-a9b0c1',
    titleId: 'blog-negotiation-tips-title',
    descId: 'blog-negotiation-tips-desc',
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-wider">Blog</p>
          <h1 id="blog-page-title" className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Insights & Resources
          </h1>
          <p id="blog-page-subtitle" className="mt-4 text-lg text-steel-400 max-w-2xl mx-auto leading-relaxed">
            Expert articles on China sourcing, quality control, logistics, and manufacturing—written by our team on the ground.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="group rounded-xl border border-steel-200 overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] [blog-page-subtitle] [blog-page-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6">
                  <span className="rounded-full bg-brand-50 text-brand-600 px-2.5 py-0.5 text-xs font-medium">{post.category}</span>
                  <h3 id={post.titleId} className="mt-3 text-lg font-semibold text-steel-900 leading-snug group-hover:text-brand-700 transition-colors">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="mt-2 text-sm text-steel-500 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-steel-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-brand-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Have a Sourcing Question?
          </h2>
          <p className="mt-4 text-lg text-brand-200 max-w-xl mx-auto leading-relaxed">
            Our team is happy to answer your questions. Reach out for a free consultation.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg hover:bg-brand-50 transition-colors"
          >
            Contact Our Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
