import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'case-us-electronics',
    category: 'Electronics',
    country: 'United States',
    title: 'US Retailer Reduces Defect Rate by 60%',
    challenge: 'A US-based electronics retailer was importing Bluetooth accessories from a supplier found on Alibaba. Defect rates on arrival were consistently above 15%, leading to customer returns and brand damage.',
    solution: 'We conducted a factory audit on their existing supplier, identified process gaps, and implemented pre-shipment inspections on every order. We also shortlisted two alternative suppliers as backup.',
    results: ['Defect rate reduced from 15% to under 6%', 'Customer return rate dropped by 40%', 'Supplier accountability improved through regular audits', 'Backup supplier identified for supply chain resilience'],
    imgQuery: 'electronics quality control inspection China factory Bluetooth accessories',
  },
  {
    id: 'case-uk-furniture',
    category: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Importer Cuts Lead Time by 3 Weeks',
    challenge: 'A UK furniture importer was experiencing average lead times of 90 days due to poor production scheduling and communication gaps with their Foshan supplier.',
    solution: 'We took over production follow-up, established a weekly reporting schedule with the factory, and identified bottlenecks in the production workflow. We also renegotiated delivery terms.',
    results: ['Lead time reduced from 90 to 65 days', 'On-time delivery rate improved to 94%', 'Weekly production reports with photos', 'Improved supplier relationship and communication'],
    imgQuery: 'furniture factory production China Foshan manufacturing',
  },
  {
    id: 'case-au-apparel',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Brand Launches Private Label Line',
    challenge: 'An Australian fashion startup wanted to launch a private label activewear line but had no experience sourcing from China and no existing supplier relationships.',
    solution: 'We sourced three compliant garment factories, arranged samples, managed the approval process, and coordinated the first production run including labeling, packaging, and shipping.',
    results: ['3 verified factories shortlisted within 7 days', 'Samples approved within 3 weeks', 'First production run completed on schedule', 'Full compliance with Australian import requirements'],
    imgQuery: 'activewear clothing factory China apparel manufacturing private label',
  },
  {
    id: 'case-de-hardware',
    category: 'Hardware',
    country: 'Germany',
    title: 'German Distributor Verifies New Supplier Network',
    challenge: 'A German hardware distributor wanted to diversify their supplier base in China but lacked the resources to conduct factory visits and verify new manufacturers.',
    solution: 'We audited 8 factories across Zhejiang and Guangdong, providing detailed reports on each. The client selected 3 suppliers and we now manage ongoing QC inspections.',
    results: ['8 factories audited in 3 weeks', '3 verified suppliers selected', 'Ongoing QC inspection program established', 'Supplier documentation and certifications verified'],
    imgQuery: 'hardware tools factory audit China manufacturing Zhejiang',
  },
  {
    id: 'case-ca-homegoods',
    category: 'Home Goods',
    country: 'Canada',
    title: 'Canadian E-Commerce Brand Scales to 6 Figures',
    challenge: 'A Canadian Amazon seller was struggling to scale due to inconsistent product quality and unreliable shipping timelines from their existing supplier.',
    solution: 'We sourced a higher-capacity manufacturer, implemented in-line and pre-shipment inspections, and set up a dedicated shipping schedule aligned with Amazon FBA requirements.',
    results: ['Product quality consistency improved significantly', 'Amazon FBA compliance achieved', 'Monthly order volume scaled 3x in 6 months', 'Shipping delays reduced to near zero'],
    imgQuery: 'home goods products China factory e-commerce Amazon FBA',
  },
  {
    id: 'case-sg-packaging',
    category: 'Packaging',
    country: 'Singapore',
    title: 'Singapore Startup Sources Custom Packaging at Scale',
    challenge: 'A Singapore-based consumer goods startup needed custom printed packaging for their product launch but found minimum order quantities and lead times from local suppliers prohibitive.',
    solution: 'We identified a Guangdong packaging manufacturer capable of meeting their design requirements at a fraction of the local cost, managed the artwork approval process, and coordinated air freight for the launch.',
    results: ['Cost reduced by 55% vs. local sourcing', 'Custom design approved in 2 rounds', 'Air freight delivery met launch deadline', 'Ongoing relationship established for repeat orders'],
    imgQuery: 'custom packaging printing boxes China factory Guangdong',
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
      <section className="bg-[#0d2340] py-20 md:py-28">
        <div className="section-container text-center">
          <p className="text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Client Results</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Case Studies</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Real sourcing projects from real clients. See how we've helped businesses across industries and countries source from China with confidence.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 md:py-28 bg-white">
        <div className="section-container">
          <div className="flex flex-col gap-16">
            {cases.map(({ id, category, country, title, challenge, solution, results, imgQuery }, index) => (
              <div key={id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-[#e8621a] bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">{category}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                      <Globe className="w-3 h-3" /> {country}
                    </span>
                  </div>
                  <h2 id={`cs-title-${id}`} className="text-2xl md:text-3xl font-bold text-[#0d2340] mb-6">{title}</h2>

                  <div className="mb-5">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">The Challenge</h3>
                    <p className="text-gray-700 leading-relaxed">{challenge}</p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Our Solution</h3>
                    <p className="text-gray-700 leading-relaxed">{solution}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Results</h3>
                    <ul className="flex flex-col gap-2">
                      {results.map((r) => (
                        <li key={r} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#1a4f8a] flex-shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`rounded-2xl overflow-hidden aspect-[4/3] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={`cs-img-${id}-ss`}
                    data-strk-img={`[cs-title-${id}] ${imgQuery}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a4f8a]">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-blue-200 text-lg max-w-xl mx-auto mb-8">
            Tell us about your sourcing challenge. We'll put together a plan tailored to your product and market.
          </p>
          <Link
            to="/contact"
            className="bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
