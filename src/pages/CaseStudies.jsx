import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  ArrowRight,
  TrendingDown,
  TrendingUp,
  ShieldCheck,
  Clock,
  CheckCircle,
} from 'lucide-react';

const cases = [
  {
    client: 'US Retail Chain',
    industry: 'LED Lighting',
    title: 'Scaling a LED Lighting Program with Zero Defects',
    challenge: 'A mid-size US retail chain needed to source 50,000 LED fixtures across 12 SKUs for a seasonal rollout. Their previous supplier delivered inconsistent quality and missed the prior year\'s deadline.',
    approach: [
      'Shortlisted 4 factories with UL and CE certifications from our verified network',
      'Conducted on-site audits at all 4 facilities, eliminating 1 with insufficient capacity',
      'Negotiated consolidated pricing by combining SKUs under a single PO structure',
      'Implemented inline inspections at 20%, 50%, and 80% milestones',
      'Supervised container loading to verify carton counts and packaging integrity',
    ],
    results: [
      { label: 'Unit Cost Reduction', value: '18%', icon: TrendingDown },
      { label: 'On-Time Delivery', value: '100%', icon: Clock },
      { label: 'Defect Rate', value: '0.2%', icon: ShieldCheck },
    ],
    quote: 'SSourcing China gave us visibility we never had before. The weekly photo reports and inspection documentation made our internal quality team confident in the shipment before it even left the port.',
    imgId: 'case-detail-led',
  },
  {
    client: 'EU E-commerce Brand',
    industry: 'Kitchenware',
    title: 'Recovering from a Supplier Failure and Relaunching',
    challenge: 'An EU-based Amazon seller discovered their kitchenware supplier was using unapproved materials after a batch failed a customs inspection. The product line was suspended, and the brand risked permanent delisting.',
    approach: [
      'Conducted emergency audit of the existing supplier, documenting violations',
      'Sourced 3 replacement factories with existing LFGB and FDA certifications',
      'Coordinated new sample production and third-party lab testing within 3 weeks',
      'Redesigned packaging to meet Amazon FBA requirements and reduce damage rates',
      'Implemented a pre-shipment inspection protocol with AQL 1.0 standard',
    ],
    results: [
      { label: 'Time to Relaunch', value: '6 weeks', icon: Clock },
      { label: 'Packaging Damage', value: '-35%', icon: TrendingDown },
      { label: 'Customer Returns', value: '-42%', icon: TrendingDown },
    ],
    quote: 'They did not just find us a new factory. They rebuilt our entire quality workflow so this could never happen again.',
    imgId: 'case-detail-kitchenware',
  },
  {
    client: 'Australian Importer',
    industry: 'Industrial Tools',
    title: 'Consolidating Suppliers to Cut Costs and Improve Consistency',
    challenge: 'An Australian importer was managing 4 separate tool suppliers, each with different lead times, quality standards, and shipping schedules. Logistics costs were high, and inventory planning was a constant headache.',
    approach: [
      'Mapped all SKUs and identified overlap in manufacturing capabilities',
      'Found 2 larger factories capable of producing the full product range',
      'Negotiated volume-based pricing and unified payment terms',
      'Standardized quality checklists across all product lines',
      'Coordinated consolidated shipments to reduce freight costs',
    ],
    results: [
      { label: 'Logistics Cost Cut', value: '22%', icon: TrendingDown },
      { label: 'Lead Time Variance', value: '-60%', icon: TrendingDown },
      { label: 'Supplier Count', value: '4 to 2', icon: TrendingUp },
    ],
    quote: 'Consolidating our supply chain with SSourcing China\'s help was the single biggest operational improvement we made last year.',
    imgId: 'case-detail-tools',
  },
  {
    client: 'UK Distributor',
    industry: 'Medical PPE',
    title: 'Rapid Sourcing of Certified PPE During Supply Disruption',
    challenge: 'A UK medical distributor faced a critical shortage of certified surgical masks and face shields when their primary Asian supplier shut down unexpectedly.',
    approach: [
      'Activated emergency sourcing protocol across our medical supplier network',
      'Verified CE and EN 14683 certifications directly with testing bodies',
      'Conducted factory audits within 48 hours at 3 candidate facilities',
      'Coordinated express sample shipments for hospital lab validation',
      'Managed air freight booking to meet emergency delivery deadlines',
    ],
    results: [
      { label: 'Sourcing Timeline', value: '5 days', icon: Clock },
      { label: 'Units Delivered', value: '2M+', icon: TrendingUp },
      { label: 'Certification Pass', value: '100%', icon: ShieldCheck },
    ],
    quote: 'In a crisis, speed means nothing without trust. SSourcing China delivered both.',
    imgId: 'case-detail-ppe',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary-dark text-white py-16 md:py-24">
        <div className="container">
          <span className="text-primary-light text-xs font-semibold uppercase tracking-wider">Results</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Case Studies
          </h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            Real projects, real outcomes. See how we have helped businesses like yours reduce costs, improve quality, and build reliable supply chains from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container space-y-20">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <img
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[case-${i}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-sm"
                  id={`case-${i}-title`}
                />
              </div>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold bg-primary-light text-primary px-3 py-1 rounded-full">
                    {c.client}
                  </span>
                  <span className="text-xs font-semibold bg-neutral-offwhite text-neutral-mediumgray px-3 py-1 rounded-full">
                    {c.industry}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-neutral-nearblack mb-4">
                  {c.title}
                </h2>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-neutral-darkgray uppercase tracking-wider mb-2">
                    Challenge
                  </h3>
                  <p className="text-neutral-mediumgray text-sm leading-relaxed">{c.challenge}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-neutral-darkgray uppercase tracking-wider mb-2">
                    Our Approach
                  </h3>
                  <ul className="space-y-2">
                    {c.approach.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-neutral-darkgray">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {c.results.map((r, j) => (
                    <div key={j} className="bg-neutral-offwhite rounded-lg p-4 text-center">
                      <r.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-xl font-bold text-neutral-nearblack">{r.value}</div>
                      <div className="text-xs text-neutral-mediumgray">{r.label}</div>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-4 border-primary pl-4 italic text-neutral-mediumgray text-sm">
                  "{c.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-nearblack mb-4">
            Ready for Results Like These?
          </h2>
          <p className="text-neutral-mediumgray mb-8">
            Every project starts with a free consultation. Tell us about your product, volume, and goals, and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md text-base font-semibold transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
