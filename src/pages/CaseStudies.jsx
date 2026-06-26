import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, Clock, ShieldCheck } from 'lucide-react';
import CTABanner from '@/components/home/CTABanner';

const caseStudies = [
  {
    id: 'cs-1',
    industry: 'Consumer Electronics',
    country: 'United Kingdom',
    flag: '🇬🇧',
    title: 'Sourcing Bluetooth Speakers for a UK Electronics Retailer',
    challenge: 'A UK-based electronics retailer was sourcing Bluetooth speakers from a single supplier with inconsistent quality and rising prices. They needed to find alternative, verified suppliers for a 5,000-unit order.',
    solution: 'We identified and audited 4 factories in Guangdong, coordinated samples from the top 2, and managed a pre-shipment inspection for the final order. We also negotiated a 22% price reduction compared to their previous supplier.',
    results: [
      { icon: TrendingDown, label: '22% cost reduction vs. previous supplier' },
      { icon: ShieldCheck, label: 'Zero defects in pre-shipment inspection' },
      { icon: Clock, label: 'Delivered 5 days ahead of schedule' },
    ],
    quote: 'SSourcing China found us a better supplier at a lower price, and the quality was noticeably improved. The inspection report gave us confidence before we approved shipment.',
    author: 'Procurement Manager, UK Electronics Retailer',
  },
  {
    id: 'cs-2',
    industry: 'Home Furniture',
    country: 'Australia',
    flag: '🇦🇺',
    title: 'Furniture Sourcing for an Australian E-Commerce Brand',
    challenge: 'An Australian online furniture brand needed a reliable supplier for solid wood dining sets. Previous attempts to source independently had resulted in quality issues and a failed shipment.',
    solution: 'We audited 5 furniture factories in Guangdong and Fujian, identified one that met all quality and compliance requirements, and managed sample development and production monitoring for their first order.',
    results: [
      { icon: ShieldCheck, label: 'Zero defect rate across 3 consecutive shipments' },
      { icon: TrendingDown, label: '18% lower landed cost than previous supplier' },
      { icon: Clock, label: 'Long-term supplier relationship established' },
    ],
    quote: 'After a bad experience sourcing on our own, SSourcing China gave us the confidence to scale our furniture range. Their factory audit process is thorough and the reports are very detailed.',
    author: 'Founder, Australian Furniture E-Commerce Brand',
  },
  {
    id: 'cs-3',
    industry: 'Apparel',
    country: 'United States',
    flag: '🇺🇸',
    title: 'Private Label Activewear for a US Fashion Startup',
    challenge: 'A US fashion startup needed a factory for private label activewear with custom branding. They had no prior experience sourcing from China and needed end-to-end support.',
    solution: 'We managed the entire process from supplier identification to shipment — including factory selection, sample development, branding coordination, quality inspection, and freight arrangement.',
    results: [
      { icon: ShieldCheck, label: '98% quality pass rate on first production run' },
      { icon: Clock, label: 'On-time delivery for launch deadline' },
      { icon: TrendingDown, label: 'Competitive pricing with private label branding' },
    ],
    quote: 'As a first-time importer, I had no idea where to start. SSourcing China walked us through every step and made the whole process manageable. We\'ll definitely use them again.',
    author: 'CEO, US Activewear Brand',
  },
  {
    id: 'cs-4',
    industry: 'Industrial Equipment',
    country: 'Germany',
    flag: '🇩🇪',
    title: 'Industrial Pump Sourcing for a German Distributor',
    challenge: 'A German industrial distributor needed to source hydraulic pumps meeting specific technical standards and CE certification requirements. Finding compliant suppliers was the primary challenge.',
    solution: 'We identified 3 factories with CE-certified products, conducted technical audits, and coordinated third-party lab testing to verify compliance. We also managed the documentation process for import into the EU.',
    results: [
      { icon: ShieldCheck, label: 'Full CE certification compliance verified' },
      { icon: TrendingDown, label: '30% cost saving vs. European alternatives' },
      { icon: Clock, label: 'Documentation ready for EU customs clearance' },
    ],
    quote: 'The technical knowledge of the SSourcing China team was impressive. They understood our compliance requirements and found suppliers that met them without compromising on price.',
    author: 'Purchasing Director, German Industrial Distributor',
  },
];

export default function CaseStudies() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0d2340] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8621a] mb-3">Client Results</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Case Studies
            </h1>
            <p className="text-[#a8b8cc] text-lg leading-relaxed">
              Real sourcing projects, real outcomes. Here's how we've helped buyers across different industries and countries.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white rounded-2xl border border-[#dde3ec] shadow-sm overflow-hidden">
              <div className="bg-[#f4f6f9] px-8 py-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cs.flag}</span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#e8621a]">{cs.industry}</span>
                    <p className="text-sm text-[#5a6a7e]">Client from {cs.country}</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-xl md:text-2xl font-bold text-[#0d2340] mb-6">{cs.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-[#5a6a7e] mb-2">The Challenge</h3>
                    <p className="text-sm text-[#1a2332] leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-[#5a6a7e] mb-2">Our Solution</h3>
                    <p className="text-sm text-[#1a2332] leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {cs.results.map((result) => {
                    const Icon = result.icon;
                    return (
                      <div key={result.label} className="bg-green-50 rounded-xl p-4 flex items-start gap-3">
                        <Icon className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-green-800 text-xs font-semibold leading-snug">{result.label}</span>
                      </div>
                    );
                  })}
                </div>

                <blockquote className="border-l-4 border-[#1a4f8a] pl-5 py-1">
                  <p className="text-[#1a2332] text-sm italic leading-relaxed mb-2">"{cs.quote}"</p>
                  <cite className="text-xs text-[#5a6a7e] not-italic font-medium">— {cs.author}</cite>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
