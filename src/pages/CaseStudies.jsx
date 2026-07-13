import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, MapPin, Package, CheckCircle, TrendingDown } from 'lucide-react';
import CTABanner from '../components/shared/CTABanner';

const caseStudies = [
  {
    id: 'homegoods-uk',
    category: 'Furniture',
    client: 'UK Home Goods Retailer',
    country: 'United Kingdom',
    title: 'Sourcing Custom Furniture from Guangdong for a UK Retailer',
    challenge:
      'A UK-based home goods retailer needed to source a range of custom wooden furniture pieces at competitive prices. They had previously worked with a trading company and experienced quality inconsistencies and communication delays.',
    solution:
      'We identified three verified furniture manufacturers in Foshan, Guangdong — China\'s furniture manufacturing hub. After on-site audits, we recommended one factory with strong quality management and relevant certifications. We managed sample production, conducted pre-shipment inspections, and coordinated FCL shipping.',
    results: [
      '18% cost reduction compared to previous supplier',
      'Zero quality defects on first shipment',
      'Delivery completed 5 days ahead of schedule',
      'Ongoing relationship established for repeat orders',
    ],
    imgId: 'cs-homegoods-img-1a2b3c',
    titleId: 'cs-homegoods-title',
    descId: 'cs-homegoods-desc',
  },
  {
    id: 'electronics-brazil',
    category: 'Electronics',
    client: 'Brazilian Tech Distributor',
    country: 'Brazil',
    title: 'Electronics Component Sourcing for a Brazilian Distributor',
    challenge:
      'A Brazilian electronics distributor needed to source LED lighting components and smart home devices. They had no existing supplier relationships in China and were concerned about product certifications and import compliance.',
    solution:
      'We sourced three qualified LED and smart home manufacturers in Shenzhen and Dongguan. We verified CE and RoHS certifications, conducted factory audits, and arranged sample testing. We also coordinated with a freight forwarder experienced in Brazil imports.',
    results: [
      'Certified products meeting EU and Brazilian standards',
      'Supplier shortlist delivered within 8 business days',
      'Successful first order of 5,000 units',
      'Repeat orders placed within 3 months',
    ],
    imgId: 'cs-electronics-img-2b3c4d',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
  },
  {
    id: 'apparel-sweden',
    category: 'Apparel',
    client: 'Swedish Sportswear Brand',
    country: 'Sweden',
    title: 'Private Label Sportswear Production for a Swedish Brand',
    challenge:
      'A Swedish sportswear startup needed to produce their first private label collection. They required a manufacturer capable of handling custom designs, specific fabric requirements, and small initial order quantities.',
    solution:
      'We identified specialist sportswear manufacturers in Guangzhou and Quanzhou. After reviewing their capabilities and sample quality, we selected a factory with experience in private label production. We managed the entire process from tech pack review to final shipment.',
    results: [
      'First collection of 2,000 units produced successfully',
      'All garments met fabric and construction specifications',
      'Production completed within agreed 45-day timeline',
      'Brand has since scaled to 10,000 units per season',
    ],
    imgId: 'cs-apparel-img-3c4d5e',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
  },
  {
    id: 'packaging-usa',
    category: 'Packaging',
    client: 'US E-commerce Brand',
    country: 'United States',
    title: 'Custom Packaging Sourcing for a US E-commerce Brand',
    challenge:
      'A US-based e-commerce brand needed custom printed packaging boxes and inserts for their product line. They required specific Pantone colors, food-safe materials, and fast turnaround times.',
    solution:
      'We sourced packaging manufacturers in Dongguan and Shenzhen specializing in custom printed packaging. We verified food-safe material certifications, managed color proofing, and conducted quality checks on print accuracy and structural integrity.',
    results: [
      'Pantone color accuracy within acceptable tolerance',
      'Food-safe material certification confirmed',
      'Cost 35% lower than US domestic suppliers',
      'Ongoing monthly supply arrangement established',
    ],
    imgId: 'cs-packaging-img-4d5e6f',
    titleId: 'cs-packaging-title',
    descId: 'cs-packaging-desc',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selected]);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">
              Real Sourcing Projects, Real Results
            </h1>
            <p className="text-slate-300 text-lg mt-4 leading-relaxed">
              We've helped buyers from over 30 countries source products from China successfully.
              Here are some examples of how we've solved real sourcing challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:,"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-50 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">
                      {cs.category}
                    </span>
                    <div className="flex items-center gap-1 text-slate-500 text-xs">
                      <MapPin className="w-3 h-3" />
                      {cs.country}
                    </div>
                  </div>
                  <h2 id={cs.titleId} className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {cs.title}
                  </h2>
                  <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {cs.challenge}
                  </p>

                  {selected === cs.id ? (
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">Our Approach</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">Results</h4>
                        <ul className="space-y-1.5">
                          {cs.results.map((r) => (
                            <li key={r} className="flex items-start gap-2 text-slate-700 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={() => setSelected(null)}
                        className="text-slate-500 text-sm hover:text-slate-700 font-medium"
                      >
                        Show less
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setSelected(cs.id)}
                      className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:underline"
                    >
                      Read Full Case Study <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want Results Like These?"
        subtitle="Tell us about your sourcing project and we'll put together a plan tailored to your needs."
        buttonText="Get a Free Sourcing Quote"
        buttonLink="/contact"
      />
    </div>
  );
}
