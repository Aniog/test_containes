import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'uk-electronics',
    category: 'Electronics',
    country: 'United Kingdom',
    title: 'UK Electronics Retailer Cuts Sourcing Time by 60%',
    challenge: 'A UK-based electronics retailer needed to find reliable PCB manufacturers in China but had no local contacts and had previously been burned by a fraudulent supplier.',
    solution: 'We identified and audited 5 PCB manufacturers, shortlisted 3 that met their specifications, and coordinated sample production. The client approved a supplier within 3 weeks.',
    result: 'First bulk order shipped within 10 weeks of initial inquiry. Defect rate on first shipment: 0.3%. Ongoing relationship with 2 verified suppliers established.',
    metrics: ['60% reduction in sourcing time', '0.3% defect rate on first order', '2 verified long-term suppliers', '10-week total project timeline'],
    titleId: 'cs-uk-electronics-title',
    descId: 'cs-uk-electronics-desc',
    imgId: 'cs-uk-electronics-img-a1b2c3',
  },
  {
    id: 'us-furniture',
    category: 'Furniture',
    country: 'United States',
    title: 'US Furniture Importer Reduces Defect Rate to Under 1%',
    challenge: 'A US furniture importer was receiving shipments with a 6–8% defect rate, causing significant returns and customer complaints. They had no quality control process in place.',
    solution: 'We implemented an in-line quality inspection process across their 2 Chinese factories, established clear quality standards, and introduced pre-shipment inspections for every order.',
    result: 'Defect rate dropped from 6.8% to 0.7% within 3 months. The client saved an estimated $40,000 in returns and customer service costs in the first year.',
    metrics: ['Defect rate reduced from 6.8% to 0.7%', '$40K saved in returns annually', '3-month implementation timeline', '2 factories brought into compliance'],
    titleId: 'cs-us-furniture-title',
    descId: 'cs-us-furniture-desc',
    imgId: 'cs-us-furniture-img-d4e5f6',
  },
  {
    id: 'au-apparel',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Apparel Brand Launches Private Label Line',
    challenge: 'An Australian fashion brand wanted to launch a private label activewear line but had no experience sourcing from China and needed help from product development through to delivery.',
    solution: 'We sourced an OEM factory specializing in activewear, managed 3 rounds of sample development, coordinated packaging design, and oversaw production of the first 2,000-unit order.',
    result: 'First collection launched on schedule. The brand has since placed 4 repeat orders and expanded to 6 SKUs. All orders have passed pre-shipment inspection on the first attempt.',
    metrics: ['10-week first order timeline', '4 repeat orders placed', '6 SKUs developed', '100% first-attempt inspection pass rate'],
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
    imgId: 'cs-au-apparel-img-g7h8i9',
  },
  {
    id: 'de-hardware',
    category: 'Hardware',
    country: 'Germany',
    title: 'German Hardware Distributor Diversifies Supplier Base',
    challenge: 'A German hardware distributor was over-reliant on a single Chinese supplier and needed to qualify 2–3 alternative manufacturers to reduce supply chain risk.',
    solution: 'We audited 8 potential suppliers, shortlisted 3 that met their technical and compliance requirements, and managed the qualification process including sample testing and factory audits.',
    result: 'Two new suppliers fully qualified within 8 weeks. The distributor now splits orders across 3 suppliers, reducing single-source dependency and improving pricing leverage.',
    metrics: ['8 suppliers audited', '2 new suppliers qualified', '8-week qualification timeline', '15% improvement in unit pricing'],
    titleId: 'cs-de-hardware-title',
    descId: 'cs-de-hardware-desc',
    imgId: 'cs-de-hardware-img-j1k2l3',
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
      <section className="bg-navy-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
              Real Results for Real Buyers
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              These case studies show how we've helped buyers across different industries and countries solve their China sourcing challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {cases.map(({ id, category, country, title, challenge, solution, result, metrics, titleId, descId, imgId }, index) => (
              <div key={id} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gold-100 text-gold-700 text-xs font-semibold px-3 py-1 rounded-full">{category}</span>
                    <span className="text-gray-400 text-xs">{country}</span>
                  </div>
                  <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug">{title}</h2>

                  <div className="flex flex-col gap-5">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-2">Challenge</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-2">Our Solution</h3>
                      <p id={descId} className="text-gray-500 text-sm leading-relaxed">{solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-2">Result</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {metrics.map((m) => (
                      <div key={m} className="flex items-start gap-2 bg-green-50 rounded-lg p-3">
                        <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-green-800 text-xs font-medium leading-snug">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`lg:col-span-2 rounded-xl overflow-hidden bg-gray-100 h-72 lg:h-80 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
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
      <section className="py-20 bg-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Tell us about your sourcing challenge and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-10 py-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
