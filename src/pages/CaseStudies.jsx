import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, DollarSign, Clock, Package } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'case-1',
    industry: 'Electronics',
    title: 'Smart Home Device Manufacturer',
    challenge: 'A US-based smart home brand needed a reliable manufacturer for a new WiFi-enabled device. Previous suppliers had quality consistency issues and missed delivery deadlines.',
    solution: 'We identified three qualified factories, conducted on-site audits, arranged sample testing, and negotiated favorable terms. We managed pre-production inspection and monitored the production run.',
    results: [
      { metric: 'Quality Defect Rate', value: 'Reduced from 12% to 1.2%' },
      { metric: 'On-Time Delivery', value: 'Improved from 60% to 98%' },
      { metric: 'Unit Cost', value: 'Reduced by 18%' },
    ],
    imageAlt: 'Smart home device manufacturing and quality inspection',
  },
  {
    id: 'case-2',
    industry: 'Home & Garden',
    title: 'Outdoor Furniture Importer',
    challenge: 'A European furniture importer struggled with inconsistent product quality and unreliable shipping schedules from their existing Chinese supplier.',
    solution: 'We sourced two alternative factories, performed factory audits, and implemented a pre-shipment inspection protocol. We also coordinated freight forwarding and customs clearance.',
    results: [
      { metric: 'Customer Returns', value: 'Decreased by 45%' },
      { metric: 'Shipping Delays', value: 'Reduced from 3 per year to 0' },
      { metric: 'Lead Time', value: 'Shortened by 22%' },
    ],
    imageAlt: 'Outdoor furniture production and shipping',
  },
  {
    id: 'case-3',
    industry: 'Textiles & Apparel',
    title: 'Activewear Brand Expansion',
    challenge: 'A fast-growing activewear brand needed to scale production quickly while maintaining quality standards across multiple fabric types and garment styles.',
    solution: 'We mapped suitable garment manufacturers, verified their capacity and compliance, and set up a quality control workflow for each production batch.',
    results: [
      { metric: 'Production Capacity', value: 'Scaled from 5k to 50k units/month' },
      { metric: 'Quality Pass Rate', value: 'Maintained at 99.5%' },
      { metric: 'Cost per Unit', value: 'Reduced by 12%' },
    ],
    imageAlt: 'Activewear garment manufacturing and quality check',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col">
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="cases-title" className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Case Studies
            </h1>
            <p id="cases-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Real examples of how we have helped global buyers solve sourcing challenges and achieve better results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {cases.map(({ id, industry, title, challenge, solution, results, imageAlt }) => (
              <div key={id} className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                    {industry}
                  </span>
                  <h2 className="mt-4 text-2xl font-bold text-slate-900">{title}</h2>
                  <div className="mt-6 space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">Challenge</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">Our Solution</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{solution}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-slate-900">Results</h3>
                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      {results.map(({ metric, value }) => (
                        <div key={metric} className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                          <div className="text-lg font-bold text-slate-900">{value}</div>
                          <div className="text-xs text-slate-500">{metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    alt={imageAlt}
                    className="rounded-2xl shadow-lg"
                    data-strk-img-id={`case-${id}-img`}
                    data-strk-img={`[cases-subtitle] [cases-title] [section-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cases-cta-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Want Similar Results for Your Business?
          </h2>
          <p id="cases-cta-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Tell us about your sourcing challenges. We will propose a tailored solution.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
