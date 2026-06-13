import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import CTASection from '@/components/shared/CTASection';

const caseStudies = [
  {
    id: 'cs-electronics',
    title: 'Electronics Importer Reduces Defect Rate by 85%',
    industry: 'Consumer Electronics',
    country: 'United States',
    challenge: 'A US-based electronics company was experiencing a 12% defect rate from their Chinese supplier. Products failed quality checks regularly, leading to returns, refunds, and damaged brand reputation.',
    solution: 'We identified a new supplier through our verified network, conducted a thorough factory audit, and implemented a multi-stage quality inspection process including PPI, DPI, and PSI based on AQL 2.5 standards.',
    results: [
      'Defect rate reduced from 12% to under 2%',
      'Return rate dropped by 90%',
      'Customer satisfaction scores improved significantly',
      'Ongoing partnership with the new supplier for 3+ years',
    ],
    imgId: 'cs-elec-i7j8k9',
  },
  {
    id: 'cs-furniture',
    title: 'Furniture Retailer Cuts Lead Time by 30%',
    industry: 'Home & Furniture',
    country: 'Germany',
    challenge: 'A European furniture retailer faced long lead times averaging 90 days. Production delays were common, and there was no visibility into what was happening at the factory.',
    solution: 'We restructured their supply chain by consolidating orders with fewer, more capable factories. We introduced weekly production milestone tracking and set up a dedicated logistics coordination process.',
    results: [
      'Lead time reduced from 90 to 63 days',
      'Production delays reduced by 70%',
      'Shipping costs reduced by 15% through consolidation',
      'Full visibility into production status at all times',
    ],
    imgId: 'cs-furn-l1m2n3',
  },
  {
    id: 'cs-apparel',
    title: 'Apparel Brand Scales from 5K to 50K Units',
    industry: 'Apparel & Textiles',
    country: 'Australia',
    challenge: 'An Australian apparel brand needed to scale production from 5,000 to 50,000 units per order. Their existing supplier could not handle the volume, and quality was inconsistent at larger runs.',
    solution: 'We identified a factory with the right production capacity and experience in large-volume orders. We set up inline quality control checkpoints and managed the transition from sampling to mass production.',
    results: [
      'Successfully scaled from 5K to 50K units',
      'Quality consistency maintained across all production runs',
      'On-time delivery for all major orders',
      'Brand expanded into 3 new markets within 12 months',
    ],
    imgId: 'cs-appa-o4p5q6',
  },
  {
    id: 'cs-autoparts',
    title: 'Auto Parts Distributor Ensures Compliance',
    industry: 'Auto Parts & Accessories',
    country: 'Brazil',
    challenge: 'A Brazilian auto parts distributor needed to ensure their Chinese suppliers met strict regulatory standards. Previous shipments had been held up at customs due to documentation issues.',
    solution: 'We conducted factory audits focused on certification compliance, implemented pre-shipment documentation reviews, and coordinated with freight forwarders to ensure all paperwork was in order before shipping.',
    results: [
      'Zero customs holds due to documentation issues',
      'All products met required certification standards',
      'Shipping time reduced by 20% through better documentation',
      'Distributor expanded their product range with confidence',
    ],
    imgId: 'cs-auto-r7s8t9',
  },
];

export default function CaseStudiesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const { ImageHelper } = await import('@strikingly/sdk');
        const strkImgConfig = (await import('@/strk-img-config.json')).default;
        if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
      } catch (e) {
        console.log('Image loading skipped:', e.message);
      }
    };
    loadImages();
  }, []);

  return (
    <>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Real results for real clients. See how we have helped businesses overcome sourcing challenges and achieve better outcomes.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs, i) => (
            <div key={cs.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[cs-challenge-${cs.id}] [cs-title-${cs.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-64 lg:h-full object-cover bg-gray-200"
                  />
                </div>
                <div className={`p-6 md:p-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-navy/10 text-navy text-xs font-semibold px-3 py-1 rounded-full">
                      {cs.industry}
                    </span>
                    <span className="bg-gold/10 text-gold-dark text-xs font-semibold px-3 py-1 rounded-full">
                      {cs.country}
                    </span>
                  </div>
                  <h2 id={`cs-title-${cs.id}`} className="text-xl font-bold text-navy mb-4">{cs.title}</h2>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">Challenge</h4>
                    <p id={`cs-challenge-${cs.id}`} className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">Our Solution</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Results</h4>
                    <ul className="space-y-2">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
