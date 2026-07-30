import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, MapPin, Package, TrendingDown } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

const caseStudies = [
  {
    id: 'uk-furniture',
    buyer: 'UK Furniture Retailer',
    country: 'United Kingdom',
    product: 'Solid Wood Dining Sets',
    category: 'Furniture & Home Decor',
    challenge: 'The buyer had previously worked with a supplier found on Alibaba who delivered goods that failed UK fire safety standards. They needed a verified manufacturer with documented compliance.',
    solution: 'We audited 4 factories in Guangdong, verified their FSC certification and fire-retardant treatment processes, and arranged samples for UK testing. We negotiated a 22% lower unit price than their previous supplier.',
    result: 'First shipment of 200 dining sets passed all UK safety certifications. The buyer has since placed 3 repeat orders.',
    metrics: [
      { label: 'Cost Reduction', value: '22%' },
      { label: 'Compliance', value: '100%' },
      { label: 'Repeat Orders', value: '3' },
    ],
    titleId: 'cs-uk-furniture-title',
    descId: 'cs-uk-furniture-desc',
    imgId: 'cs-uk-furniture-img-a1b2c3',
  },
  {
    id: 'us-electronics',
    buyer: 'US Consumer Electronics Brand',
    country: 'United States',
    product: 'Wireless Earbuds (TWS)',
    category: 'Electronics & Components',
    challenge: 'A startup brand needed to find a factory capable of producing FCC and CE-certified wireless earbuds with custom branding, at a competitive price point for the US market.',
    solution: 'We identified 3 qualified ODM factories in Shenzhen, coordinated FCC compliance testing, reviewed the PCB design for regulatory compliance, and managed the production of the first 10,000-unit batch.',
    result: 'Products launched on Amazon within the planned timeline. FCC and CE certifications obtained on first submission.',
    metrics: [
      { label: 'Units Shipped', value: '10,000' },
      { label: 'Certifications', value: 'FCC + CE' },
      { label: 'On-Time Delivery', value: '100%' },
    ],
    titleId: 'cs-us-electronics-title',
    descId: 'cs-us-electronics-desc',
    imgId: 'cs-us-electronics-img-d4e5f6',
  },
  {
    id: 'au-apparel',
    buyer: 'Australian Activewear Brand',
    country: 'Australia',
    product: 'Sustainable Activewear',
    category: 'Apparel & Textiles',
    challenge: 'The brand required GOTS-certified recycled fabric and ethical manufacturing practices. They had struggled to find suppliers who could meet both sustainability and quality requirements.',
    solution: 'We sourced GOTS-certified fabric mills in Zhejiang and matched them with a compliant cut-and-sew factory. We reduced the sampling cycle from 8 weeks to 3 weeks through direct factory communication.',
    result: 'Brand launched its sustainable line on schedule. Supplier passed third-party ethical audit.',
    metrics: [
      { label: 'Sampling Time', value: '−62%' },
      { label: 'Certification', value: 'GOTS' },
      { label: 'Audit Result', value: 'Pass' },
    ],
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
    imgId: 'cs-au-apparel-img-g7h8i9',
  },
  {
    id: 'de-machinery',
    buyer: 'German Industrial Distributor',
    country: 'Germany',
    product: 'Hydraulic Lifting Equipment',
    category: 'Machinery & Industrial',
    challenge: 'The distributor needed CE-marked hydraulic jacks and lifting tables at a price point competitive with existing European suppliers, with consistent quality across large volumes.',
    solution: 'We audited 5 factories in Shandong and Jiangsu, verified CE documentation, and arranged third-party load testing. We negotiated a supply agreement with a factory that had existing CE certification.',
    result: 'Annual supply contract signed. 40% cost reduction vs. European suppliers with equivalent quality.',
    metrics: [
      { label: 'Cost vs. EU', value: '−40%' },
      { label: 'Certification', value: 'CE' },
      { label: 'Contract', value: 'Annual' },
    ],
    titleId: 'cs-de-machinery-title',
    descId: 'cs-de-machinery-desc',
    imgId: 'cs-de-machinery-img-j1k2l3',
  },
  {
    id: 'ca-toys',
    buyer: 'Canadian Toy Retailer',
    country: 'Canada',
    product: 'Wooden Educational Toys',
    category: 'Toys & Baby Products',
    challenge: 'The retailer needed EN71 and ASTM F963-compliant wooden toys with non-toxic paint finishes. Previous suppliers had failed third-party testing, causing costly delays.',
    solution: 'We sourced factories in Zhejiang with existing EN71 certification, reviewed their paint supplier documentation, and arranged pre-production material testing before production began.',
    result: 'Zero compliance failures across 3 product lines. Products listed in major Canadian retail chains.',
    metrics: [
      { label: 'Compliance Failures', value: '0' },
      { label: 'Product Lines', value: '3' },
      { label: 'Retail Listings', value: 'Major chains' },
    ],
    titleId: 'cs-ca-toys-title',
    descId: 'cs-ca-toys-desc',
    imgId: 'cs-ca-toys-img-m4n5o6',
  },
  {
    id: 'sg-packaging',
    buyer: 'Singapore E-commerce Brand',
    country: 'Singapore',
    product: 'Custom Packaging & Inserts',
    category: 'Packaging & Printing',
    challenge: 'A fast-growing e-commerce brand needed custom-printed boxes, tissue paper, and thank-you cards at scale, with consistent color accuracy and fast turnaround times.',
    solution: 'We sourced a packaging factory in Guangdong with offset and digital printing capabilities, managed color proofing, and set up a standing order arrangement for monthly replenishment.',
    result: 'Packaging costs reduced by 35% vs. local Singapore suppliers. Lead time cut from 6 weeks to 3 weeks.',
    metrics: [
      { label: 'Cost Reduction', value: '35%' },
      { label: 'Lead Time', value: '3 weeks' },
      { label: 'Order Frequency', value: 'Monthly' },
    ],
    titleId: 'cs-sg-packaging-title',
    descId: 'cs-sg-packaging-desc',
    imgId: 'cs-sg-packaging-img-p7q8r9',
  },
];

export default function CaseStudiesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Client Results
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Case Studies
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Real sourcing projects, real outcomes. See how we've helped buyers across industries and countries source from China successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {caseStudies.map(({ id, buyer, country, product, category, challenge, solution, result, metrics, titleId, descId, imgId }, index) => (
            <div key={id} className="bg-lightbg rounded-2xl border border-border overflow-hidden">
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? '' : ''}`}>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-accent text-white text-xs font-semibold px-2.5 py-1 rounded-full">{category}</span>
                    <span className="flex items-center gap-1 text-muted text-xs">
                      <MapPin className="w-3 h-3" /> {country}
                    </span>
                  </div>
                  <h2 id={titleId} className="text-2xl font-bold text-darktext mb-1">{product}</h2>
                  <p className="text-bodytext text-sm mb-5">{buyer}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-darktext text-sm mb-1">Challenge</h4>
                      <p id={descId} className="text-bodytext text-sm leading-relaxed">{challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-darktext text-sm mb-1">Our Approach</h4>
                      <p className="text-bodytext text-sm leading-relaxed">{solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-darktext text-sm mb-1">Result</h4>
                      <p className="text-bodytext text-sm leading-relaxed">{result}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    {metrics.map(({ label, value }) => (
                      <div key={label} className="bg-white rounded-lg border border-border px-4 py-3 text-center">
                        <div className="text-xl font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="min-h-[280px] lg:min-h-0">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
