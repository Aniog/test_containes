import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, Clock, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTABanner from '../components/home/CTABanner';

const cases = [
  {
    id: 'led-lighting-au',
    client: 'Australian Electrical Retailer',
    country: 'Australia',
    flag: '🇦🇺',
    product: 'LED Lighting Products',
    challenge: 'The client was importing LED products from a supplier found on Alibaba but had received two shipments with inconsistent quality and missing CE certifications. They needed a verified alternative supplier.',
    solution: 'We audited four factories in Guangdong, shortlisted two that met CE and RoHS requirements, and arranged samples for client review. After approval, we managed the first order with pre-shipment inspection.',
    result: '28% reduction in unit cost, consistent product quality across three subsequent orders, and full CE/RoHS certification compliance.',
    metrics: [
      { label: 'Cost Reduction', value: '28%' },
      { label: 'Orders Completed', value: '4' },
      { label: 'Defect Rate', value: '<1%' },
    ],
    titleId: 'case-led-au-title',
    descId: 'case-led-au-desc',
  },
  {
    id: 'office-furniture-uk',
    client: 'UK Office Supplies Distributor',
    country: 'United Kingdom',
    flag: '🇬🇧',
    product: 'Office Furniture Range',
    challenge: 'The client needed to source a range of 12 office furniture SKUs from multiple factories and consolidate shipments into regular 40-foot container loads to the UK.',
    solution: 'We identified three verified factories covering all SKUs, negotiated pricing and payment terms, and set up a quarterly shipment schedule with consolidated container loading.',
    result: 'Consistent supply over 18 months, on-time delivery rate of 96%, and a 15% reduction in per-unit logistics cost through consolidation.',
    metrics: [
      { label: 'On-Time Delivery', value: '96%' },
      { label: 'Months of Supply', value: '18+' },
      { label: 'Logistics Saving', value: '15%' },
    ],
    titleId: 'case-furniture-uk-title',
    descId: 'case-furniture-uk-desc',
  },
  {
    id: 'sports-apparel-us',
    client: 'US Sports Brand (Launch Order)',
    country: 'United States',
    flag: '🇺🇸',
    product: 'Custom Sports Apparel',
    challenge: 'A US startup was launching a private label sports apparel brand and needed a factory capable of handling custom designs, small MOQs, and fast turnaround for their first 10,000-unit order.',
    solution: 'We sourced a Fujian factory with experience in OEM sportswear, managed the sampling process through four rounds of revisions, and supervised production and pre-shipment inspection.',
    result: 'First order delivered on schedule with a 99.2% pass rate on inspection. The client has since placed two additional orders.',
    metrics: [
      { label: 'Inspection Pass Rate', value: '99.2%' },
      { label: 'Units Delivered', value: '10,000' },
      { label: 'Repeat Orders', value: '2' },
    ],
    titleId: 'case-apparel-us-title',
    descId: 'case-apparel-us-desc',
  },
  {
    id: 'packaging-de',
    client: 'German E-Commerce Brand',
    country: 'Germany',
    flag: '🇩🇪',
    product: 'Custom Packaging & Printed Materials',
    challenge: 'The client needed custom-printed packaging for a product launch across three European markets, with tight colour accuracy requirements and a 6-week delivery deadline.',
    solution: 'We sourced a Guangdong printing factory with European export experience, managed colour proofing, and coordinated air freight to meet the deadline.',
    result: 'Packaging delivered in 5.5 weeks, colour accuracy approved on first proof, and 20% lower cost than the client\'s previous European supplier.',
    metrics: [
      { label: 'Delivery Time', value: '5.5 wks' },
      { label: 'Cost vs EU Supplier', value: '-20%' },
      { label: 'Proof Rounds', value: '1' },
    ],
    titleId: 'case-packaging-de-title',
    descId: 'case-packaging-de-desc',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <div className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Real Results for Real Buyers</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            A selection of sourcing projects we have completed for clients across different industries and countries.
          </p>
        </div>
      </div>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {cases.map((c) => (
              <div key={c.id} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2 relative min-h-56 bg-neutral-100">
                    <img
                      data-strk-img-id={`case-detail-${c.id}-img-2b9e`}
                      data-strk-img={`[${c.descId}] [${c.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={c.product}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-xs font-semibold text-neutral-700 shadow-sm">
                      {c.flag} {c.country}
                    </div>
                  </div>
                  <div className="md:col-span-3 p-6 md:p-8">
                    <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-1">{c.client}</p>
                    <h2 id={c.titleId} className="text-neutral-900 font-bold text-xl mb-4">{c.product}</h2>

                    <div className="flex flex-col gap-4 mb-6">
                      <div>
                        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">Challenge</p>
                        <p className="text-neutral-700 text-sm leading-relaxed">{c.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">Our Approach</p>
                        <p id={c.descId} className="text-neutral-700 text-sm leading-relaxed">{c.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">Result</p>
                        <p className="text-neutral-700 text-sm leading-relaxed">{c.result}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-neutral-100">
                      {c.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <p className="text-brand-blue font-bold text-lg">{m.value}</p>
                          <p className="text-neutral-500 text-xs">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-brand-sky transition-colors"
            >
              Discuss Your Sourcing Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
