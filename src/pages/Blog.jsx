import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'post-1',
    title: 'How to Verify a Chinese Supplier Before You Place an Order',
    excerpt: 'A practical checklist for verifying supplier legitimacy, checking business licenses, and assessing production capabilities before committing to a partnership.',
    date: '2026-05-28',
    readTime: '8 min read',
    category: 'Supplier Verification',
    imageAlt: 'Factory verification and supplier audit',
  },
  {
    id: 'post-2',
    title: 'Pre-Shipment Inspection: What Buyers Need to Check',
    excerpt: 'Key areas to focus on during pre-shipment inspection, including product specifications, packaging, labeling, and documentation.',
    date: '2026-05-15',
    readTime: '6 min read',
    category: 'Quality Control',
    imageAlt: 'Quality inspection and product checking',
  },
  {
    id: 'post-3',
    title: 'Understanding Incoterms for Shipping from China',
    excerpt: 'A clear explanation of common Incoterms used in China trade, including EXW, FOB, CIF, and DDP, and what they mean for your costs and responsibilities.',
    date: '2026-04-30',
    readTime: '7 min read',
    category: 'Shipping & Logistics',
    imageAlt: 'Shipping logistics and freight forwarding',
  },
  {
    id: 'post-4',
    title: 'Common Quality Issues in Electronics Manufacturing and How to Avoid Them',
    excerpt: 'Typical quality problems in electronics production, from component defects to assembly errors, and how to address them through inspection and supplier management.',
    date: '2026-04-12',
    readTime: '9 min read',
    category: 'Quality Control',
    imageAlt: 'Electronics manufacturing quality control',
  },
  {
    id: 'post-5',
    title: 'Negotiating with Chinese Suppliers: Tips for International Buyers',
    excerpt: 'Practical advice for negotiating pricing, payment terms, and delivery schedules with Chinese manufacturers while maintaining a positive working relationship.',
    date: '2026-03-22',
    readTime: '5 min read',
    category: 'Supplier Management',
    imageAlt: 'Business negotiation and supplier meeting',
  },
  {
    id: 'post-6',
    title: 'How to Prepare a Product Specification Sheet for Sourcing',
    excerpt: 'A guide to creating clear, detailed product specification sheets that help suppliers understand your requirements and reduce miscommunication.',
    date: '2026-03-05',
    readTime: '6 min read',
    category: 'Sourcing Strategy',
    imageAlt: 'Product specification and technical drawing',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col">
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="blog-title" className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Blog & Insights
            </h1>
            <p id="blog-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Practical guidance on sourcing from China, supplier verification, quality control, and shipping logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(({ id, title, excerpt, date, readTime, category, imageAlt }) => (
              <article key={id} className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
                <img
                  alt={imageAlt}
                  className="h-48 w-full rounded-t-2xl object-cover"
                  data-strk-img-id={`blog-${id}-img`}
                  data-strk-img={`[blog-subtitle] [blog-title] [section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600">{category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {format(new Date(date), 'MMM d, yyyy')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{excerpt}</p>
                  <Link
                    to={`/blog/${id}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="blog-cta-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Need Help with Your Sourcing Project?
          </h2>
          <p id="blog-cta-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Our team can help you find reliable suppliers, verify factories, and manage quality and shipping.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
