import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { MapPin, TrendingDown, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import SectionHero from '@/components/shared/SectionHero';
import CtaBanner from '@/components/shared/CtaBanner';

const cases = [
  {
    id: 'led-uk',
    title: 'LED Lighting Importer — United Kingdom',
    category: 'Electronics',
    country: 'United Kingdom',
    challenge: 'A UK-based lighting distributor was receiving inconsistent quality from their existing Chinese supplier, with 15% defect rates causing costly returns and customer complaints.',
    solution: 'We audited 4 alternative factories, identified a certified manufacturer in Zhongshan, negotiated a 22% lower unit price, and implemented a pre-shipment inspection protocol.',
    result: 'Defect rate dropped to under 1%. Unit cost reduced by 22%. The client expanded their product range with the same supplier within 6 months.',
    metrics: [
      { icon: TrendingDown, label: 'Cost Reduction', value: '22%' },
      { icon: ShieldCheck, label: 'Defect Rate', value: '<1%' },
      { icon: Clock, label: 'Time to New Supplier', value: '3 weeks' },
    ],
    imgId: 'cs-led-uk-img-a1b2c3',
    titleId: 'cs-led-uk-title',
    descId: 'cs-led-uk-desc',
  },
  {
    id: 'furniture-usa',
    title: 'Office Furniture Brand — United States',
    category: 'Furniture',
    country: 'United States',
    challenge: 'A US furniture brand needed to diversify their supply chain ahead of a seasonal product launch. Their single supplier in Foshan was at capacity and couldn\'t meet the new volume.',
    solution: 'We sourced 3 additional qualified furniture manufacturers in Foshan and Guangzhou, conducted factory audits, and coordinated parallel production across multiple suppliers.',
    result: 'The client successfully launched on schedule with 30% shorter lead times. They now have a resilient multi-supplier strategy.',
    metrics: [
      { icon: Clock, label: 'Lead Time Reduction', value: '30%' },
      { icon: ShieldCheck, label: 'New Suppliers Added', value: '3' },
      { icon: TrendingDown, label: 'Sourcing Timeline', value: '6 weeks' },
    ],
    imgId: 'cs-furniture-usa-img-d4e5f6',
    titleId: 'cs-furniture-usa-title',
    descId: 'cs-furniture-usa-desc',
  },
  {
    id: 'apparel-au',
    title: 'Sportswear Startup — Australia',
    category: 'Apparel',
    country: 'Australia',
    challenge: 'An Australian sportswear startup needed a factory that could handle small MOQs (300 units per style), meet international labor standards, and produce consistent quality for their premium brand.',
    solution: 'We identified a compliant factory in Guangzhou with BSCI certification, negotiated small-batch pricing, and managed the sample approval process through 3 revision rounds.',
    result: 'The startup launched their first collection on time with zero quality issues. They have since scaled to 5,000 units per style with the same factory.',
    metrics: [
      { icon: ShieldCheck, label: 'MOQ Achieved', value: '300 units' },
      { icon: TrendingDown, label: 'Quality Issues', value: '0' },
      { icon: Clock, label: 'Sample Approval', value: '4 weeks' },
    ],
    imgId: 'cs-apparel-au-img-g7h8i9',
    titleId: 'cs-apparel-au-title',
    descId: 'cs-apparel-au-desc',
  },
  {
    id: 'toys-de',
    title: 'Toy Importer — Germany',
    category: 'Toys',
    country: 'Germany',
    challenge: 'A German toy importer needed to ensure their Chinese-made products met EN71 safety standards and could pass customs inspection in the EU without delays.',
    solution: 'We sourced from EN71-certified factories in Shantou, coordinated third-party lab testing, and prepared all required compliance documentation for EU import.',
    result: 'All shipments cleared EU customs without issues. The client avoided a potential €50,000 recall by catching a labeling non-compliance during our pre-shipment inspection.',
    metrics: [
      { icon: ShieldCheck, label: 'Customs Issues', value: '0' },
      { icon: TrendingDown, label: 'Potential Recall Avoided', value: '€50K' },
      { icon: Clock, label: 'Compliance Setup', value: '2 weeks' },
    ],
    imgId: 'cs-toys-de-img-j1k2l3',
    titleId: 'cs-toys-de-title',
    descId: 'cs-toys-de-desc',
  },
  {
    id: 'packaging-ca',
    title: 'E-Commerce Brand — Canada',
    category: 'Packaging',
    country: 'Canada',
    challenge: 'A Canadian e-commerce brand needed custom eco-friendly packaging at competitive prices. Previous attempts to source directly from China resulted in poor print quality and missed deadlines.',
    solution: 'We sourced from a specialized packaging factory in Dongguan, managed the artwork approval process, and implemented strict quality checks on print quality and material specifications.',
    result: 'The client received packaging that matched their brand standards exactly, at 35% lower cost than their previous domestic supplier, delivered on time.',
    metrics: [
      { icon: TrendingDown, label: 'Cost vs. Domestic', value: '35% less' },
      { icon: ShieldCheck, label: 'Print Quality Issues', value: '0' },
      { icon: Clock, label: 'First Order Delivery', value: 'On time' },
    ],
    imgId: 'cs-packaging-ca-img-m4n5o6',
    titleId: 'cs-packaging-ca-title',
    descId: 'cs-packaging-ca-desc',
  },
  {
    id: 'machinery-sg',
    title: 'Industrial Equipment Distributor — Singapore',
    category: 'Machinery',
    country: 'Singapore',
    challenge: 'A Singapore-based distributor needed to source industrial pumps and valves from China that met ISO 9001 standards and could be delivered within tight project timelines.',
    solution: 'We identified ISO-certified manufacturers in Wenzhou, verified their certifications on-site, and coordinated expedited production and air freight for urgent orders.',
    result: 'The distributor successfully fulfilled two major project contracts on time. They now use SSourcing China as their primary sourcing partner for all China procurement.',
    metrics: [
      { icon: ShieldCheck, label: 'ISO Certified Suppliers', value: '3 found' },
      { icon: Clock, label: 'Urgent Order Delivery', value: 'On time' },
      { icon: TrendingDown, label: 'Cost vs. Previous Source', value: '18% less' },
    ],
    imgId: 'cs-machinery-sg-img-p7q8r9',
    titleId: 'cs-machinery-sg-title',
    descId: 'cs-machinery-sg-desc',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = 'Case Studies | SSourcing China';
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <SectionHero
        badge="Case Studies"
        title="Real Results for Global Buyers"
        subtitle="See how we've helped businesses across the world source smarter, reduce costs, and eliminate quality problems when importing from China."
        cta="Start Your Sourcing Project"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((c, idx) => (
              <div key={c.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`h-64 lg:h-auto overflow-hidden bg-gray-100 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <img
                      data-strk-img-id={c.imgId}
                      data-strk-img={`[${c.descId}] [${c.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={c.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-light-blue text-primary text-xs font-semibold px-2 py-1 rounded">
                        {c.category}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500 text-xs">
                        <MapPin className="w-3 h-3" /> {c.country}
                      </span>
                    </div>
                    <h2 id={c.titleId} className="text-xl md:text-2xl font-bold text-primary-dark mb-4">{c.title}</h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">Challenge</h4>
                        <p id={c.descId} className="text-gray-600 text-sm leading-relaxed">{c.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">Our Solution</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{c.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">Result</h4>
                        <p className="text-gray-700 text-sm leading-relaxed font-medium">{c.result}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                      {c.metrics.map((m) => {
                        const Icon = m.icon;
                        return (
                          <div key={m.label} className="text-center">
                            <div className="text-lg font-bold text-primary">{m.value}</div>
                            <div className="text-xs text-gray-500">{m.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want Results Like These?"
        subtitle="Tell us about your sourcing challenge and we'll show you how we can help."
        cta="Get a Free Sourcing Quote"
      />
    </div>
  );
}
