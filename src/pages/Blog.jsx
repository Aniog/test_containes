import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import InquiryForm from '../components/InquiryForm.jsx';

const posts = [
  {
    title: 'How to Verify a Chinese Factory Before Placing an Order',
    excerpt: 'A practical checklist for checking licenses, facilities, export experience, and quality systems before you commit.',
    date: 'July 15, 2026',
    category: 'Factory Verification',
    imgId: 'blog-verify-factory',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    title: 'Understanding AQL Inspection Levels for Imports from China',
    excerpt: 'What AQL means, how to choose an inspection level, and how to read an inspection report.',
    date: 'July 8, 2026',
    category: 'Quality Control',
    imgId: 'blog-aql-inspection',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    title: 'Incoterms Explained for First-Time China Buyers',
    excerpt: 'FOB, CIF, DDP, EXW — what they mean, who pays for what, and which term to choose for your shipment.',
    date: 'June 28, 2026',
    category: 'Shipping',
    imgId: 'blog-incoterms',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    title: 'Red Flags When Reviewing a Supplier Quotation',
    excerpt: 'Common warning signs in Chinese supplier quotes and how to ask the right follow-up questions.',
    date: 'June 20, 2026',
    category: 'Negotiation',
    imgId: 'blog-quotation-redflags',
    titleId: 'blog-redflags-title',
    descId: 'blog-redflags-desc',
  },
  {
    title: 'How to Plan Quality Inspections Across Production Stages',
    excerpt: 'Why pre-production, in-line, pre-shipment, and container-loading inspections each play a role.',
    date: 'June 12, 2026',
    category: 'Quality Control',
    imgId: 'blog-inspection-stages',
    titleId: 'blog-stages-title',
    descId: 'blog-stages-desc',
  },
  {
    title: 'Building Long-Term Supplier Relationships in China',
    excerpt: 'Communication, payment terms, and visit cadence tips for turning a one-time supplier into a reliable partner.',
    date: 'June 5, 2026',
    category: 'Sourcing Strategy',
    imgId: 'blog-supplier-relationships',
    titleId: 'blog-relationships-title',
    descId: 'blog-relationships-desc',
  },
];

const Blog = () => {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold tracking-wide uppercase text-amber mb-3">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Practical sourcing insights
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              Guides, checklists, and lessons from the factory floor to help you source smarter from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="blog-posts-title"
            eyebrow="Latest Articles"
            title="Sourcing knowledge center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article
                key={post.titleId}
                className="group bg-white rounded-xl border border-border overflow-hidden shadow-card hover:shadow-lg transition-all flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden bg-cloud">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] [blog-posts-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-muted mb-3">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-cloud font-semibold text-navy">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-lg font-semibold text-navy mb-3 group-hover:text-amber transition-colors">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-sm text-slate-muted leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber hover:text-amber-hover transition-colors"
                  >
                    Read article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </>
  );
};

export default Blog;
