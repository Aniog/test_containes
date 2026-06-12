import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import PageHeader from '../components/shared/PageHeader';
import { Calendar, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 'how-to-verify-china-supplier',
    title: 'How to verify a Chinese supplier before you place your first order',
    excerpt:
      'A practical, no-nonsense checklist covering business license checks, factory tours, sample testing, and red flags to watch for.',
    date: 'May 22, 2026',
    category: 'Supplier verification',
    imgId: 'blog-verify-supplier-2c8f31',
    tag: 'Guide',
  },
  {
    id: 'aql-inspection-explained',
    title: 'AQL inspections explained: what buyers should actually ask for',
    excerpt:
      'AQL 2.5 is not a magic spell. We break down sample sizes, defect classifications and what a useful inspection report looks like.',
    date: 'April 29, 2026',
    category: 'Quality control',
    imgId: 'blog-aql-7b1492',
    tag: 'Quality',
  },
  {
    id: 'sea-vs-air-freight',
    title: 'Sea, air or rail: choosing the right freight mode from China',
    excerpt:
      'Cost, time and risk trade-offs across LCL, FCL, air, and China-Europe rail, with examples for typical e-commerce and B2B orders.',
    date: 'April 11, 2026',
    category: 'Logistics',
    imgId: 'blog-freight-3a52c7',
    tag: 'Logistics',
  },
  {
    id: 'mistakes-first-time-buyers',
    title: '7 mistakes first-time buyers make when sourcing from China',
    excerpt:
      'From signing only via WeChat to skipping production samples — the recurring patterns we see and how to avoid them.',
    date: 'March 20, 2026',
    category: 'Sourcing strategy',
    imgId: 'blog-mistakes-9d6f44',
    tag: 'Strategy',
  },
  {
    id: 'understanding-moq',
    title: 'Understanding MOQ: how to negotiate small first orders',
    excerpt:
      'Why factories quote what they quote, and which levers actually work to lower MOQ for trial orders without losing quality.',
    date: 'March 06, 2026',
    category: 'Sourcing strategy',
    imgId: 'blog-moq-1f8a2b',
    tag: 'Strategy',
  },
  {
    id: 'china-factory-audit',
    title: 'Inside a real China factory audit: what we look at',
    excerpt:
      'A walkthrough of an actual on-site audit, from front gate to packaging line, with the kinds of things our auditors flag.',
    date: 'February 18, 2026',
    category: 'Supplier verification',
    imgId: 'blog-audit-walkthrough-5e2d11',
    tag: 'Guide',
  },
];

const featured = posts[0];
const others = posts.slice(1);

export default function Blog() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Blog"
        title="Practical guides for buyers sourcing from China"
        description="Field notes, checklists and explainers from our sourcing, QC and logistics teams. No fluff, no exaggerated claims."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <article className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
                <img
                  alt={featured.title}
                  className="block w-full h-auto"
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[blog-${featured.id}-excerpt] [blog-${featured.id}-title] ${featured.category} china sourcing`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-xs">
                <span className="inline-flex items-center rounded-full bg-brand/10 px-2.5 py-1 font-medium text-brand">
                  {featured.category}
                </span>
                <span className="inline-flex items-center text-slate-500">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  {featured.date}
                </span>
              </div>
              <h2
                id={`blog-${featured.id}-title`}
                className="mt-3 text-2xl md:text-3xl font-bold text-slate-900 tracking-tight"
              >
                {featured.title}
              </h2>
              <p
                id={`blog-${featured.id}-excerpt`}
                className="mt-3 text-slate-600 leading-relaxed"
              >
                {featured.excerpt}
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center text-sm font-semibold text-brand hover:text-brand-700"
              >
                Read the full guide
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </article>

          {/* Grid of remaining posts */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <article
                key={p.id}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card hover:shadow-md transition"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    alt={p.title}
                    className="h-full w-full object-cover"
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[blog-${p.id}-excerpt] [blog-${p.id}-title] ${p.category} china`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="inline-flex items-center rounded-full bg-brand/10 px-2.5 py-1 font-medium text-brand">
                      {p.category}
                    </span>
                    <span className="inline-flex items-center text-slate-500">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {p.date}
                    </span>
                  </div>
                  <h3
                    id={`blog-${p.id}-title`}
                    className="mt-3 text-lg font-semibold text-slate-900"
                  >
                    {p.title}
                  </h3>
                  <p
                    id={`blog-${p.id}-excerpt`}
                    className="mt-2 text-sm text-slate-600 leading-relaxed flex-1"
                  >
                    {p.excerpt}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-brand hover:text-brand-700"
                  >
                    Read more
                    <ArrowRight className="ml-1.5 h-4 w-4" />
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
