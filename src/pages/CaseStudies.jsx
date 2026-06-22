import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, TrendingUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    id: 'furniture-uk',
    client: 'HomeGoods Direct',
    country: 'United Kingdom',
    industry: 'Home Furniture',
    challenge: 'A UK-based furniture retailer needed to source a range of solid wood dining sets from China but had no existing supplier relationships and was concerned about quality consistency.',
    solution: 'We identified 4 qualified furniture manufacturers in Guangdong, conducted factory audits at each, and arranged sample production. After sample approval, we managed production and conducted pre-shipment inspections.',
    result: 'The client received their first container of 200 dining sets with zero defects. They have since placed 6 repeat orders and expanded their product range with the same supplier.',
    metrics: [
      { label: 'Suppliers Audited', value: '4' },
      { label: 'Defect Rate', value: '0%' },
      { label: 'Repeat Orders', value: '6' },
      { label: 'Cost Saving vs. Previous', value: '18%' },
    ],
    imgId: 'cs-img-furniture-a1b2c3',
    titleId: 'cs-title-furniture',
    descId: 'cs-desc-furniture',
  },
  {
    id: 'electronics-brazil',
    client: 'TechRetail Solutions',
    country: 'Brazil',
    industry: 'Consumer Electronics',
    challenge: 'A Brazilian electronics distributor had received a shipment of LED lighting products that failed local safety certifications. They needed a new supplier with proper CE and RoHS compliance.',
    solution: 'We sourced 3 LED manufacturers with verified CE and RoHS certifications, arranged lab testing of samples, and conducted factory audits to confirm quality management systems.',
    result: 'The client switched to a certified supplier and passed all local compliance tests. Their new product line launched on schedule with no certification issues.',
    metrics: [
      { label: 'Certified Suppliers Found', value: '3' },
      { label: 'Compliance Tests Passed', value: '100%' },
      { label: 'Time to New Supplier', value: '12 days' },
      { label: 'Price Reduction', value: '11%' },
    ],
    imgId: 'cs-img-electronics-d4e5f6',
    titleId: 'cs-title-electronics',
    descId: 'cs-desc-electronics',
  },
  {
    id: 'apparel-sweden',
    client: 'Nordic Sportswear',
    country: 'Sweden',
    industry: 'Sportswear & Apparel',
    challenge: 'A Swedish sportswear brand wanted to develop a private label activewear line but lacked experience working with Chinese garment factories and needed help with OEM development.',
    solution: 'We managed the full OEM process: fabric sourcing, pattern development, sample production, branding and labeling, and final quality inspection before shipment.',
    result: 'The brand launched their private label line with 8 SKUs, all meeting their quality and branding standards. Production was completed 5 days ahead of schedule.',
    metrics: [
      { label: 'SKUs Developed', value: '8' },
      { label: 'Sample Rounds', value: '2' },
      { label: 'On-Time Delivery', value: 'Yes' },
      { label: 'Reorder Rate', value: '100%' },
    ],
    imgId: 'cs-img-apparel-g7h8i9',
    titleId: 'cs-title-apparel',
    descId: 'cs-desc-apparel',
  },
  {
    id: 'hardware-australia',
    client: 'BuildRight Supplies',
    country: 'Australia',
    industry: 'Hardware & Tools',
    challenge: 'An Australian hardware distributor was sourcing tools directly from a Chinese supplier but experiencing inconsistent quality and delayed shipments with no visibility into production.',
    solution: 'We audited their existing supplier, identified quality control gaps, and implemented in-line and pre-shipment inspections. We also introduced a production monitoring schedule.',
    result: 'Defect rates dropped from 8% to under 1%. Shipments became consistently on time. The client saved significant costs on returns and rework.',
    metrics: [
      { label: 'Defect Rate Before', value: '8%' },
      { label: 'Defect Rate After', value: '<1%' },
      { label: 'On-Time Shipments', value: '95%' },
      { label: 'Annual Savings', value: '$42,000' },
    ],
    imgId: 'cs-img-hardware-j1k2l3',
    titleId: 'cs-title-hardware',
    descId: 'cs-desc-hardware',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Client Results</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Case Studies
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Real results from real clients. See how we've helped global buyers source from China successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <div className="space-y-12">
            {caseStudies.map(({ id, client, country, industry, challenge, solution, result, metrics, imgId, titleId, descId }) => (
              <div key={id} className="bg-white rounded-2xl border border-brand-border overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto bg-gray-100 overflow-hidden">
                    <img
                      data-strk-img-id={imgId}
                      data-strk-img={`[${descId}] [${titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={client}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-blue-50 text-brand-navy text-xs font-semibold px-3 py-1 rounded-full">{industry}</span>
                      <span className="text-brand-muted text-xs">{country}</span>
                    </div>
                    <h2 id={titleId} className="text-2xl font-bold text-brand-navy mb-1">{client}</h2>
                    <p id={descId} className="text-brand-muted text-sm mb-6">{country} · {industry}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-xs font-semibold text-brand-red uppercase tracking-widest mb-1">Challenge</p>
                        <p className="text-brand-dark text-sm leading-relaxed">{challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-brand-navy uppercase tracking-widest mb-1">Our Solution</p>
                        <p className="text-brand-dark text-sm leading-relaxed">{solution}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-brand-success uppercase tracking-widest mb-1">Result</p>
                        <p className="text-brand-dark text-sm leading-relaxed">{result}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {metrics.map(({ label, value }) => (
                        <div key={label} className="bg-brand-bg rounded-lg p-3">
                          <div className="text-xl font-bold text-brand-navy">{value}</div>
                          <div className="text-xs text-brand-muted">{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-navy">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your sourcing challenge and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
