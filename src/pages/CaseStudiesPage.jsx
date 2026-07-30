import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { TrendingUp, MapPin, Package } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const cases = [
  {
    id: 'furniture-uk',
    titleId: 'cs-detail-furniture-uk-title',
    descId: 'cs-detail-furniture-uk-desc',
    imgId: 'cs-detail-img-furniture-uk-a1b2c3',
    category: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Retailer Cuts Sourcing Costs by 22%',
    challenge: 'A UK-based home goods retailer was sourcing furniture through a trading company and paying inflated prices. They needed direct factory access in Foshan but had no contacts and no way to verify suppliers.',
    solution: 'We audited 8 factories in Foshan, shortlisted 2 that met their quality and compliance requirements, negotiated pricing directly, and managed 3 production runs over 12 months.',
    result: '22% reduction in unit costs, zero quality rejections across all shipments, and a reliable long-term supplier relationship established.',
    metrics: ['22% cost reduction', '3 production runs managed', 'Zero quality rejections'],
  },
  {
    id: 'electronics-us',
    titleId: 'cs-detail-electronics-us-title',
    descId: 'cs-detail-electronics-us-desc',
    imgId: 'cs-detail-img-electronics-us-d4e5f6',
    category: 'Electronics',
    country: 'United States',
    title: 'US Brand Launches Private Label Electronics Line',
    challenge: 'An American startup wanted to launch a private label line of smart home devices. They had no China experience, needed CE and FCC certification, and had a tight 6-month launch timeline.',
    solution: 'We sourced and audited certified electronics manufacturers in Shenzhen, coordinated sample development, managed certification testing, and oversaw production and pre-shipment inspection.',
    result: 'Product launched on schedule with full CE and FCC certification. First batch of 5,000 units delivered with a defect rate under 0.5%.',
    metrics: ['On-time launch', 'CE & FCC certified', '<0.5% defect rate'],
  },
  {
    id: 'apparel-au',
    titleId: 'cs-detail-apparel-au-title',
    descId: 'cs-detail-apparel-au-desc',
    imgId: 'cs-detail-img-apparel-au-g7h8i9',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Fashion Brand Scales Production 3x',
    challenge: 'A growing Australian fashion brand was struggling to scale production with their existing supplier. Quality was inconsistent and lead times were unreliable.',
    solution: 'We sourced a compliant factory in Guangzhou, implemented a structured QC process with DUPRO and PSI inspections, and established clear production timelines with the supplier.',
    result: 'Production volume tripled within 6 months. Defect rate dropped from 4.2% to under 1%. Lead times became consistent and predictable.',
    metrics: ['3x production volume', 'Defect rate <1%', 'Consistent lead times'],
  },
  {
    id: 'packaging-ca',
    titleId: 'cs-detail-packaging-ca-title',
    descId: 'cs-detail-packaging-ca-desc',
    imgId: 'cs-detail-img-packaging-ca-j1k2l3',
    category: 'Packaging',
    country: 'Canada',
    title: 'Canadian Brand Sources Custom Eco Packaging',
    challenge: 'A Canadian consumer goods brand needed custom eco-friendly packaging at scale. They had strict sustainability requirements and needed FSC-certified materials.',
    solution: 'We identified FSC-certified packaging manufacturers in Guangdong, coordinated custom design and sampling, and managed production of 200,000 units across two SKUs.',
    result: 'Full FSC certification achieved, packaging delivered on time, and unit cost 18% lower than their previous North American supplier.',
    metrics: ['FSC certified', '18% cost saving', '200,000 units delivered'],
  },
  {
    id: 'tools-de',
    titleId: 'cs-detail-tools-de-title',
    descId: 'cs-detail-tools-de-desc',
    imgId: 'cs-detail-img-tools-de-m4n5o6',
    category: 'Tools & Hardware',
    country: 'Germany',
    title: 'German Distributor Finds Reliable Tool Supplier',
    challenge: 'A German hardware distributor had been burned by a fraudulent supplier and needed a verified, reliable manufacturer for power tools with CE certification.',
    solution: 'We conducted thorough factory audits on 5 candidates, verified CE certifications, and arranged a factory visit for the client. We then managed the first two production orders.',
    result: 'Reliable supplier relationship established. Two orders completed with full CE compliance and no quality issues.',
    metrics: ['Verified CE compliance', '2 orders completed', 'Zero disputes'],
  },
  {
    id: 'sports-nl',
    titleId: 'cs-detail-sports-nl-title',
    descId: 'cs-detail-sports-nl-desc',
    imgId: 'cs-detail-img-sports-nl-p7q8r9',
    category: 'Sports & Outdoor',
    country: 'Netherlands',
    title: 'Dutch Retailer Launches Outdoor Gear Range',
    challenge: 'A Dutch outdoor retailer wanted to develop a private label range of camping and hiking gear. They needed manufacturers with experience in technical outdoor products.',
    solution: 'We sourced specialist outdoor gear manufacturers in Xiamen and Ningbo, coordinated extensive sampling, and managed a 4-month production run.',
    result: 'Full product range launched successfully. 12 SKUs delivered on time with consistent quality across all items.',
    metrics: ['12 SKUs launched', 'On-time delivery', 'Consistent quality'],
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
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-red-300 text-sm font-semibold uppercase tracking-widest mb-4">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real Projects, Real Results
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              See how we've helped buyers across industries and countries source successfully from China — reducing costs, improving quality, and building reliable supplier relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((cs) => (
              <div key={cs.id} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-56 bg-gray-100 overflow-hidden relative">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">{cs.category}</span>
                    <span className="bg-white/90 text-text-dark text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{cs.country}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h2 id={cs.titleId} className="text-xl font-bold text-primary mb-4">{cs.title}</h2>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Challenge</h4>
                    <p id={cs.descId} className="text-text-muted text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Our Approach</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Result</h4>
                    <p className="text-text-dark text-sm leading-relaxed font-medium">{cs.result}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cs.metrics.map((m) => (
                      <span key={m} className="flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-lg">
                        <TrendingUp className="w-3 h-3" />{m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Add Your Success Story?</h2>
          <p className="text-red-100 text-lg mb-8">Tell us about your sourcing project and we'll show you how we can help.</p>
          <CTAButton to="/contact" variant="secondary" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
