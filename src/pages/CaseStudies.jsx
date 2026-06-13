import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, Clock, Award, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 1,
    client: 'Nordic Home Co.',
    industry: 'Furniture & Home Decor',
    location: 'Sweden',
    challenge: 'Nordic Home Co. was sourcing furniture from multiple suppliers with inconsistent quality and 90+ day lead times. They needed a single sourcing partner who could consolidate orders and reduce costs.',
    solution: 'We identified 4 verified furniture manufacturers in Foshan, consolidated their orders, and implemented weekly QC inspections. We also negotiated better payment terms and coordinated consolidated shipping.',
    result: 'Reduced sourcing costs by 32%, cut average lead time from 90 to 55 days, and reduced defect rate from 8% to under 2%. Nordic Home now sources 80% of their catalog through us.',
    stats: [
      { label: 'Cost Reduction', value: '32%', icon: TrendingDown },
      { label: 'Lead Time Cut', value: '35 days', icon: Clock },
      { label: 'Defect Rate', value: '< 2%', icon: Award },
    ],
    tags: ['Furniture', 'Consolidation', 'Cost Reduction', 'Europe'],
    quote: 'SSourcing China gave us visibility we never had before. We now know exactly where every order stands and what to expect.',
    quoteAuthor: 'Anders Lindqvist',
    quoteRole: 'Procurement Director, Nordic Home Co.',
  },
  {
    id: 2,
    client: 'TechGear Inc.',
    industry: 'Consumer Electronics',
    location: 'USA',
    challenge: 'TechGear needed to launch a line of custom Bluetooth speakers but had no China supplier relationships. They needed a partner to handle design, prototyping, production, and quality from start to finish.',
    solution: 'We sourced 5 qualified electronics factories in Shenzhen, managed the prototyping process, coordinated CE and FCC testing, and supervised full production with daily reports and pre-shipment inspections.',
    result: 'Delivered 50,000 units on time with zero defect rate. TechGear placed three additional product lines with us within 6 months.',
    stats: [
      { label: 'Units Produced', value: '50,000', icon: Award },
      { label: 'Defect Rate', value: '0%', icon: Award },
      { label: 'On-Time', value: '100%', icon: Clock },
    ],
    tags: ['Electronics', 'OEM', 'Quality Control', 'USA'],
    quote: 'They managed everything from prototype to delivery. I did not have to fly to China once.',
    quoteAuthor: 'Michael Chen',
    quoteRole: 'CEO, TechGear Inc.',
  },
  {
    id: 3,
    client: 'GlobalPack Ltd.',
    industry: 'Packaging Materials',
    location: 'United Kingdom',
    challenge: 'GlobalPack needed to switch from an expensive European supplier to a cost-effective Chinese alternative without compromising on quality or color consistency for their branded packaging.',
    solution: 'We found 3 packaging factories in Shenzhen and Wenzhou, ran color-matching trials, performed sample approvals, and supervised the first production batch with full QC.',
    result: 'Found a qualified supplier within 2 weeks and saved 28% on packaging costs while maintaining color accuracy within 95% of the original.',
    stats: [
      { label: 'Cost Savings', value: '28%', icon: TrendingDown },
      { label: 'Supplier Found', value: '2 weeks', icon: Clock },
      { label: 'Color Match', value: '95%', icon: Award },
    ],
    tags: ['Packaging', 'Supplier Match', 'Cost Savings', 'UK'],
    quote: 'The speed at which they found us a replacement supplier was impressive. Two weeks and we were already evaluating samples.',
    quoteAuthor: 'Sarah Williams',
    quoteRole: 'Operations Manager, GlobalPack Ltd.',
  },
  {
    id: 4,
    client: 'ActiveWear Co.',
    industry: 'Sportswear & Apparel',
    location: 'Australia',
    challenge: 'ActiveWear needed a new supplier for moisture-wicking athletic wear after their previous supplier raised prices and lowered quality. They needed MOQ flexibility for test orders.',
    solution: 'We identified 4 sportswear manufacturers in Guangzhou and Hangzhou with flexible MOQs, arranged sample runs, and negotiated MOQ reductions for initial test orders.',
    result: 'Secured a supplier willing to do 200-unit test orders, maintained the same fabric quality, and saved 22% per unit compared to their previous supplier.',
    stats: [
      { label: 'Cost Savings', value: '22%', icon: TrendingDown },
      { label: 'Test MOQ', value: '200 units', icon: Award },
      { label: 'Quality Maintained', value: 'Same', icon: Award },
    ],
    tags: ['Apparel', 'Low MOQ', 'Supplier Switch', 'Australia'],
    quote: 'Finding a factory that accepts small test orders in China is not easy. SSourcing China made it happen in under 3 weeks.',
    quoteAuthor: 'James Morrison',
    quoteRole: 'Founder, ActiveWear Co.',
  },
  {
    id: 5,
    client: 'PrecisionParts GmbH',
    industry: 'Machinery & Industrial Parts',
    location: 'Germany',
    challenge: 'PrecisionParts needed CNC-machined aluminum components with tight tolerances (0.05mm) but struggled to find Chinese factories with consistent precision and proper inspection equipment.',
    solution: 'We audited 8 factories in Ningbo and Wuxi, tested sample batches, and selected one with CMM inspection equipment and ISO 9001 certification. We also set up weekly in-process QC.',
    result: 'Achieved 99.6% dimensional accuracy on all batches, reduced per-part cost by 40% compared to their German supplier, and established a stable supply chain.',
    stats: [
      { label: 'Accuracy', value: '99.6%', icon: Award },
      { label: 'Cost Reduction', value: '40%', icon: TrendingDown },
      { label: 'Tolerance', value: '0.05mm', icon: Award },
    ],
    tags: ['Machinery', 'Precision Manufacturing', 'CNC', 'Germany'],
    quote: 'The factory audit report was incredibly detailed. We could see every machine, every certificate, and every measurement.',
    quoteAuthor: 'Dr. Klaus Weber',
    quoteRole: 'Technical Director, PrecisionParts GmbH',
  },
];

function CaseCard({ caseStudy, expanded, onToggle }) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
      <div className="p-6 lg:p-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {caseStudy.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">{tag}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 font-bold text-sm">
            {caseStudy.client.split(' ').map(w => w[0]).join('').slice(0, 2)}
          </div>
          <div>
            <h3 className="font-bold text-slate-900">{caseStudy.client}</h3>
            <p className="text-xs text-slate-500">{caseStudy.industry} &middot; {caseStudy.location}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {caseStudy.stats.map((s) => (
            <div key={s.label} className="bg-slate-50 rounded-lg p-3 text-center">
              <s.icon className="w-4 h-4 text-blue-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-slate-900">{s.value}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <p className="text-sm text-slate-600 leading-relaxed">{caseStudy.result}</p>
        </div>

        <button
          onClick={onToggle}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors"
        >
          {expanded ? 'Show Less' : 'Read Full Story'}
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {expanded && (
        <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-slate-100 pt-6">
          <div className="space-y-5">
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-1.5">The Challenge</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{caseStudy.challenge}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-1.5">Our Solution</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{caseStudy.solution}</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-5 border-l-4 border-blue-500">
              <p className="text-sm text-slate-700 italic mb-3">&ldquo;{caseStudy.quote}&rdquo;</p>
              <div>
                <p className="text-sm font-medium text-slate-900">{caseStudy.quoteAuthor}</p>
                <p className="text-xs text-slate-500">{caseStudy.quoteRole}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CaseStudiesPage() {
  const [expandedId, setExpandedId] = useState(1);
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Real results from real clients across different industries and geographies. See how we solve complex sourcing challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '120+', label: 'Clients Worldwide' },
              { value: '$50M+', label: 'Goods Sourced' },
              { value: '40+', label: 'Countries Served' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-700 mb-1">{s.value}</div>
                <div className="text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {cases.map((c) => (
              <CaseCard
                key={c.id}
                caseStudy={c}
                expanded={expandedId === c.id}
                onToggle={() => setExpandedId(expandedId === c.id ? -1 : c.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-slate-300 mb-8">Every client started with a single conversation. Tell us about your sourcing challenge and we will show you how we can help.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-600 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
