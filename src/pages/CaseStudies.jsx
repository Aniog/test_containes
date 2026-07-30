import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, TrendingUp, Clock, Star } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const cases = [
  {
    id: 'us-furniture',
    category: 'Furniture & Home Decor',
    country: 'United States',
    title: 'US Home Goods Retailer Reduces Sourcing Costs by 22%',
    challenge: 'A mid-size US home goods retailer was sourcing furniture through a trading company and paying inflated margins. They needed direct factory access but lacked the resources to manage China operations independently.',
    solution: 'We identified 4 verified furniture factories in Foshan, negotiated direct pricing, and managed quality inspections across 3 production runs over 8 months.',
    results: ['22% reduction in unit costs', 'Zero defect shipments across all orders', 'Reduced lead time from 90 to 65 days', 'Established direct factory relationships'],
    quote: 'SSourcing China gave us the confidence to go direct. The cost savings were significant and the quality has been consistently better than before.',
    author: 'Procurement Manager, US Home Goods Retailer',
    imgId: 'cs-us-furniture-img-a1b2c3',
    titleId: 'cs-us-furniture-title',
    descId: 'cs-us-furniture-desc',
  },
  {
    id: 'eu-electronics',
    category: 'Electronics',
    country: 'Germany',
    title: 'German Distributor Achieves CE Compliance on First Attempt',
    challenge: 'A German electronics distributor needed to source CE-certified LED lighting products. Previous attempts with other agents resulted in failed certifications and delayed shipments.',
    solution: 'We sourced 3 factories with existing CE certification infrastructure, coordinated lab testing, reviewed technical documentation, and managed the entire compliance process.',
    results: ['CE certification achieved on first submission', '18% below initial budget target', 'On-time delivery for retail launch', 'Ongoing supplier relationship established'],
    quote: 'The compliance process was handled professionally from start to finish. We launched on time and within budget — something we hadn\'t managed with previous agents.',
    author: 'Operations Director, German Electronics Distributor',
    imgId: 'cs-eu-electronics-img-d4e5f6',
    titleId: 'cs-eu-electronics-title',
    descId: 'cs-eu-electronics-desc',
  },
  {
    id: 'au-apparel',
    category: 'Apparel & Textiles',
    country: 'Australia',
    title: 'Australian Fashion Brand Launches Private Label Collection',
    challenge: 'An Australian fashion startup needed a reliable OEM manufacturing partner for their first private label collection. They had no prior experience sourcing from China and needed end-to-end support.',
    solution: 'We managed the entire process from factory selection and sampling through to production monitoring and pre-shipment inspection across 8 SKUs and 2 factories.',
    results: ['Launched collection on schedule', '98% quality pass rate on inspection', 'Sampling completed in 3 weeks', 'Repeat orders placed within 6 months'],
    quote: 'As a first-time importer, having SSourcing China manage the process gave us peace of mind. The team was responsive, transparent, and delivered exactly what they promised.',
    author: 'Founder, Australian Fashion Brand',
    imgId: 'cs-au-apparel-img-g7h8i9',
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
  },
  {
    id: 'uk-toys',
    category: 'Toys & Baby Products',
    country: 'United Kingdom',
    title: 'UK Toy Importer Passes EN71 Safety Testing',
    challenge: 'A UK toy importer needed to source educational toys that met EN71 safety standards. They had previously received a shipment that failed testing, resulting in significant losses.',
    solution: 'We audited 5 toy factories for EN71 compliance capability, coordinated pre-production material testing, and performed in-line and pre-shipment inspections.',
    results: ['100% EN71 compliance on all products', 'No failed shipments since engagement', 'Reduced inspection costs by 30%', 'Expanded to 3 new product lines'],
    quote: 'After a costly compliance failure with a previous supplier, we needed a partner who understood the regulatory requirements. SSourcing China delivered exactly that.',
    author: 'Import Manager, UK Toy Distributor',
    imgId: 'cs-uk-toys-img-j1k2l3',
    titleId: 'cs-uk-toys-title',
    descId: 'cs-uk-toys-desc',
  },
  {
    id: 'ca-machinery',
    category: 'Machinery & Industrial',
    country: 'Canada',
    title: 'Canadian Distributor Sources Industrial Equipment at Scale',
    challenge: 'A Canadian industrial equipment distributor needed to source power tools and machinery for a large retail chain. They required consistent quality across high volumes and tight delivery windows.',
    solution: 'We identified 2 certified factories, negotiated volume pricing, implemented a production monitoring schedule, and coordinated container shipments across 4 orders.',
    results: ['15% cost reduction vs. previous supplier', 'All 4 orders delivered on schedule', 'Zero quality rejections at destination', 'Established preferred supplier agreement'],
    quote: 'The production monitoring service was invaluable. We always knew exactly where our orders stood, and the team resolved a potential delay before it became a problem.',
    author: 'Supply Chain Manager, Canadian Industrial Distributor',
    imgId: 'cs-ca-machinery-img-m4n5o6',
    titleId: 'cs-ca-machinery-title',
    descId: 'cs-ca-machinery-desc',
  },
  {
    id: 'uae-health',
    category: 'Health & Beauty',
    country: 'UAE',
    title: 'UAE Retailer Launches Private Label Health Products',
    challenge: 'A UAE health and wellness retailer wanted to launch a private label product line but needed to find manufacturers capable of meeting GCC regulatory requirements.',
    solution: 'We sourced 3 factories with GCC export experience, managed regulatory documentation, coordinated lab testing, and oversaw packaging design and production.',
    results: ['GCC regulatory approval obtained', 'Private label launched in 4 months', 'Packaging quality exceeded expectations', 'Second product line in development'],
    quote: 'SSourcing China understood the regulatory requirements for our market and found factories that could meet them. The project was delivered faster than we expected.',
    author: 'Category Manager, UAE Health Retailer',
    imgId: 'cs-uae-health-img-p7q8r9',
    titleId: 'cs-uae-health-title',
    descId: 'cs-uae-health-desc',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-blue-200 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Real Results for Real Buyers</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            See how we've helped businesses across industries and countries source successfully from China.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 md:py-24 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {cases.map((cs, i) => (
              <div key={cs.id} className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
                <div className="grid lg:grid-cols-5">
                  <div className="lg:col-span-2 aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded-full">{cs.category}</span>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full">{cs.country}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-primary mb-4">{cs.title}</h2>

                    <div className="grid md:grid-cols-2 gap-4 mb-5">
                      <div>
                        <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Challenge</h4>
                        <p id={cs.descId} className="text-sm text-darktext leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Solution</h4>
                        <p className="text-sm text-darktext leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Results</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {cs.results.map((r) => (
                          <div key={r} className="flex items-start gap-2 text-sm text-darktext">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {r}
                          </div>
                        ))}
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-accent pl-4 italic text-muted text-sm">
                      <p className="mb-1">"{cs.quote}"</p>
                      <cite className="not-italic text-xs font-semibold text-darktext">— {cs.author}</cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-red-100 mb-8">Join hundreds of global buyers who source from China with confidence through SSourcing China.</p>
          <CTAButton variant="secondary" size="lg">Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  );
}
