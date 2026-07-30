import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';
import { TrendingDown, Clock, CheckCircle, Star } from 'lucide-react';

const caseStudies = [
  {
    id: 'cs-uk-furniture',
    titleId: 'cs-uk-furniture-title',
    descId: 'cs-uk-furniture-desc',
    imgId: 'cs-img-uk-furniture-a1b2c3',
    tag: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Furniture Importer Cuts Sourcing Costs by 22%',
    summary: 'A UK-based furniture retailer was struggling with inconsistent quality and high rejection rates from their existing Chinese supplier. They needed a reliable alternative without disrupting their supply chain.',
    challenge: 'The buyer had experienced two consecutive shipments with significant quality defects — warped panels and incorrect dimensions — resulting in costly returns and customer complaints.',
    solution: 'We conducted factory audits on four shortlisted manufacturers, selected the best-fit supplier, and implemented a pre-shipment inspection protocol for every order. We also renegotiated pricing based on volume commitments.',
    results: [
      '22% reduction in unit cost through supplier switch and negotiation',
      'Zero quality rejections over 12 months of orders',
      'Delivery lead time reduced from 90 to 65 days',
      'Ongoing production monitoring for all orders',
    ],
  },
  {
    id: 'cs-usa-electronics',
    titleId: 'cs-usa-electronics-title',
    descId: 'cs-usa-electronics-desc',
    imgId: 'cs-img-usa-electronics-d4e5f6',
    tag: 'Electronics',
    country: 'United States',
    title: 'US Electronics Distributor Finds Certified PCB Manufacturer in 3 Weeks',
    summary: 'An American electronics distributor needed a certified manufacturer for custom PCB assemblies meeting UL and RoHS compliance standards. Previous attempts to source independently had failed due to certification gaps.',
    challenge: 'Finding a factory with genuine UL certification and the technical capability to produce custom PCB assemblies to tight tolerances, within a 3-week timeline for a product launch.',
    solution: 'We leveraged our electronics manufacturing network in Shenzhen and Dongguan, verified certifications directly with the issuing bodies, and arranged a technical review call between the buyer\'s engineers and the factory.',
    results: [
      'Qualified manufacturer identified and audited within 3 weeks',
      'UL and RoHS compliance verified independently',
      'First production run of 5,000 units delivered on schedule',
      'Ongoing supplier relationship established for repeat orders',
    ],
  },
  {
    id: 'cs-au-apparel',
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
    imgId: 'cs-img-au-apparel-g7h8i9',
    tag: 'Apparel',
    country: 'Australia',
    title: 'Australian Apparel Brand Delivers 15,000 Units On Time for Seasonal Launch',
    summary: 'An Australian activewear brand needed to produce 15,000 units of a new product line in time for a seasonal retail launch. They had no existing China supplier relationships and a tight 14-week window.',
    challenge: 'Sourcing a factory capable of handling the volume, managing production across multiple SKUs, and ensuring consistent quality — all within a fixed seasonal deadline.',
    solution: 'We sourced and audited three factories, selected the best fit, managed the sampling process, and conducted in-line and pre-shipment inspections. We provided weekly production updates throughout.',
    results: [
      'Full 15,000-unit order delivered 4 days ahead of deadline',
      'In-line QC identified and resolved a stitching issue before it affected the full run',
      'All units passed final inspection with a defect rate below 0.5%',
      'Brand has since placed two additional orders through SSourcing China',
    ],
  },
  {
    id: 'cs-de-industrial',
    titleId: 'cs-de-industrial-title',
    descId: 'cs-de-industrial-desc',
    imgId: 'cs-img-de-industrial-j1k2l3',
    tag: 'Industrial',
    country: 'Germany',
    title: 'German Industrial Distributor Qualifies New Supplier After Factory Fraud',
    summary: 'A German industrial equipment distributor had been defrauded by a Chinese supplier who misrepresented their production capabilities. They needed a trustworthy sourcing partner to rebuild their supply chain.',
    challenge: 'After losing a significant deposit to a fraudulent supplier, the buyer needed a verified, legitimate manufacturer for hydraulic components — with full documentation and on-site verification.',
    solution: 'We conducted thorough due diligence on five candidate factories, including business registration checks, on-site audits, and reference checks with existing customers. We provided a full risk assessment report.',
    results: [
      'Legitimate, verified supplier identified with full documentation',
      'Business registration and certifications independently confirmed',
      'First order of €85,000 completed without issues',
      'Ongoing factory monitoring for all subsequent orders',
    ],
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
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Client Results
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real results from real buyers. See how we've helped companies across industries source from China with confidence.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 h-64 lg:h-auto bg-gray-100">
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-3 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-navy text-white text-xs font-semibold px-2.5 py-1 rounded">{cs.tag}</span>
                      <span className="text-gray-500 text-sm">{cs.country}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{cs.title}</h2>
                    <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed mb-6">{cs.summary}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">The Challenge</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Our Approach</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-3">Results</h4>
                      <ul className="flex flex-col gap-2">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-navy mt-0.5 flex-shrink-0" />
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Similar Results?</h2>
          <p className="text-gray-600 mb-8">
            Tell us about your sourcing challenge and we'll put together a free plan tailored to your needs.
          </p>
          <CTAButton to="/contact" variant="primary">Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  );
}
