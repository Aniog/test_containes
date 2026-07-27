import { Link } from 'react-router-dom';
import PageHero from '@/components/shared/PageHero';
import SectionCTA from '@/components/shared/SectionCTA';

const cases = [
  {
    id: 'cs1',
    industry: 'Electronics',
    country: 'Germany',
    flag: '🇩🇪',
    service: 'Factory Audit + QC Inspection',
    title: 'CE-Certified LED Lighting for German Retailer',
    challenge:
      'A German home improvement retailer needed to replace their existing LED supplier after quality complaints. They required CE-certified products at a competitive price point with consistent quality.',
    approach:
      'We audited 6 LED manufacturers in Guangdong, shortlisted 2 that met CE certification requirements, and negotiated pricing. We conducted pre-shipment inspections on the first 3 orders to establish quality benchmarks.',
    results: [
      '40% cost reduction vs. previous supplier',
      'CE certification confirmed for all product lines',
      'Zero quality complaints in first 12 months',
      'Ongoing supplier relationship established',
    ],
    duration: '8 weeks from inquiry to first shipment',
  },
  {
    id: 'cs2',
    industry: 'Furniture',
    country: 'USA',
    flag: '🇺🇸',
    service: 'Full Sourcing Service',
    title: 'Custom Office Chairs for US E-Commerce Brand',
    challenge:
      'An American e-commerce brand wanted to launch a private label office chair line. They had no existing China contacts and needed a reliable OEM partner capable of producing 500+ units per month.',
    approach:
      'We identified 4 furniture manufacturers in Foshan, conducted factory audits, and managed a 3-month sample development process. We oversaw 3 production inspections and coordinated sea freight to the US.',
    results: [
      'Product launched on schedule',
      '0 defects reported on first 2,000 units',
      '12-week lead time consistently met',
      'Repeat orders placed within 6 months',
    ],
    duration: '14 weeks from inquiry to first delivery',
  },
  {
    id: 'cs3',
    industry: 'Apparel',
    country: 'France',
    flag: '🇫🇷',
    service: 'OEM Sourcing & Production Management',
    title: 'Private Label Sportswear for French Activewear Brand',
    challenge:
      'A French activewear startup needed an OEM manufacturer for their first collection. They required specific fabric compositions, custom branding, and compliance with EU textile regulations.',
    approach:
      'We sourced 3 sportswear factories in Fujian, managed sample development across 4 revision rounds, and verified EU textile labeling compliance. We monitored bulk production and conducted pre-shipment inspection.',
    results: [
      'Brand launched on schedule for summer season',
      'EU textile compliance confirmed',
      'Repeat orders placed for autumn collection',
      'Supplier relationship ongoing',
    ],
    duration: '16 weeks from inquiry to delivery',
  },
  {
    id: 'cs4',
    industry: 'Industrial',
    country: 'Australia',
    flag: '🇦🇺',
    service: 'Supplier Verification + Shipping',
    title: 'Industrial Pump Components for Australian Distributor',
    challenge:
      'An Australian industrial distributor needed to verify a Chinese supplier they had found online before placing a large order. They had concerns about the supplier\'s production capacity and quality systems.',
    approach:
      'We conducted a comprehensive factory audit, reviewed their ISO 9001 certification, tested sample components, and provided a detailed report. We also coordinated sea freight for the subsequent order.',
    results: [
      'Supplier verified as legitimate and capable',
      'ISO 9001 certification confirmed valid',
      'Order placed with confidence',
      'Goods delivered on time with full documentation',
    ],
    duration: '3 weeks for audit + 10 weeks production',
  },
  {
    id: 'cs5',
    industry: 'Health & Beauty',
    country: 'UK',
    flag: '🇬🇧',
    service: 'Compliance + QC Inspection',
    title: 'Private Label Skincare for UK Beauty Brand',
    challenge:
      'A UK beauty brand wanted to source private label skincare products from China. They needed to ensure products met UK cosmetic regulations post-Brexit and required custom packaging.',
    approach:
      'We sourced a GMP-certified cosmetics manufacturer, coordinated product testing with an accredited lab, reviewed UK cosmetic regulation compliance, and managed custom packaging development.',
    results: [
      'UK cosmetic compliance confirmed',
      'GMP-certified manufacturer secured',
      'Custom packaging developed in 6 weeks',
      'Products launched in UK market successfully',
    ],
    duration: '18 weeks from inquiry to market launch',
  },
  {
    id: 'cs6',
    industry: 'Packaging',
    country: 'Canada',
    flag: '🇨🇦',
    service: 'Supplier Sourcing + QC',
    title: 'Custom Printed Packaging for Canadian Food Brand',
    challenge:
      'A Canadian organic food brand needed custom printed boxes and bags for their product line. They required food-safe materials and specific Pantone color matching.',
    approach:
      'We sourced 3 packaging manufacturers in Guangdong, verified food-safe material certifications, managed color proofing, and conducted quality inspection on the first production run.',
    results: [
      'Pantone color matching achieved within tolerance',
      'Food-safe material certification confirmed',
      'First order delivered 2 weeks ahead of schedule',
      'Cost 35% lower than domestic Canadian suppliers',
    ],
    duration: '10 weeks from inquiry to delivery',
  },
];

export default function CaseStudies() {
  return (
    <>
      <PageHero
        badge="Case Studies"
        title="Real Results for Real Buyers"
        subtitle="A selection of sourcing projects we've completed for international buyers across different industries and countries."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((c) => (
              <div key={c.id} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-card-hover transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{c.flag}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {c.industry}
                      </span>
                      <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full">
                        {c.country}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{c.service}</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">{c.title}</h3>

                <div className="space-y-4 mb-5">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Challenge</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Our Approach</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{c.approach}</p>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4">
                  <h4 className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-2">Results</h4>
                  <ul className="space-y-1">
                    {c.results.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-emerald-800 text-sm">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-slate-400">
                  <span className="font-medium text-slate-500">Timeline:</span> {c.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Want Results Like These?"
        subtitle="Tell us about your sourcing project and we'll put together a plan."
      />
    </>
  );
}
