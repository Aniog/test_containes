import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    id: 'german-electronics',
    title: 'German Electronics Brand Saves 32% on PCB Assembly',
    industry: 'Electronics',
    region: 'Germany',
    challenge: 'A mid-sized German electronics company needed high-quality PCB assembly but struggled with inconsistent quality from their existing supplier.',
    result: 'We identified 3 ISO-certified factories in Shenzhen, coordinated sample runs, and reduced defect rates from 8% to under 0.5%.',
    titleId: 'case-german-electronics-title',
    descId: 'case-german-electronics-desc',
    imgId: 'case-german-electronics-4a7b9c',
  },
  {
    id: 'us-furniture',
    title: 'US Furniture Brand Scales Production 3x in 6 Months',
    industry: 'Furniture',
    region: 'United States',
    challenge: 'A fast-growing US furniture brand needed to scale manufacturing quickly while maintaining solid wood quality standards.',
    result: 'We sourced 2 factories in Foshan, implemented weekly QC inspections, and helped them scale from 1 container/month to 3.',
    titleId: 'case-us-furniture-title',
    descId: 'case-us-furniture-desc',
    imgId: 'case-us-furniture-b2d8e1',
  },
  {
    id: 'uk-textile',
    title: 'UK Sportswear Startup Finds Premium Knitwear Supplier',
    industry: 'Textiles & Apparel',
    region: 'United Kingdom',
    challenge: 'A UK sportswear startup needed premium custom knitwear with low MOQs but kept hitting dead ends with large factories.',
    result: 'We connected them with a specialized workshop in Dongguan offering flexible MOQs, saving 40% vs UK manufacturing costs.',
    titleId: 'case-uk-textile-title',
    descId: 'case-uk-textile-desc',
    imgId: 'case-uk-textile-f3c0a2',
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-20 sm:py-28 bg-steel-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider">Case Studies</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-steel-900">
              Real Results for Real Buyers
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors shrink-0"
          >
            View All Case Studies <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c) => (
            <article key={c.id} className="bg-white rounded-xl border border-steel-200 overflow-hidden hover:shadow-lg transition-shadow">
              <img
                alt={c.title}
                data-strk-img-id={c.imgId}
                data-strk-img={`[${c.descId}] [${c.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-steel-400 mb-2">
                  <span className="rounded-full bg-brand-50 text-brand-600 px-2.5 py-0.5 font-medium">{c.industry}</span>
                  <span>{c.region}</span>
                </div>
                <h3 id={c.titleId} className="text-lg font-semibold text-steel-900 leading-snug">{c.title}</h3>
                <p id={c.descId} className="mt-2 text-sm text-steel-500 line-clamp-2">{c.challenge}</p>
                <p className="mt-2 text-sm text-steel-600 font-medium">{c.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
