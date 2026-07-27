import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';

const caseStudies = [
  {
    id: 'electronics-us-retailer',
    industry: 'Electronics',
    client: 'US Retail Chain',
    title: 'Electronics Manufacturer for US Retailer',
    challenge: 'A US retail chain needed a reliable manufacturer for consumer electronics with strict quality standards and tight delivery schedules. Previous suppliers had quality issues and missed deadlines.',
    solution: 'We identified 3 qualified factories through our verified network, conducted comprehensive on-site audits including production line evaluation and quality management review, and managed the entire production process with weekly progress updates.',
    result: 'Delivered 50,000 units on time with a defect rate below 0.5%. The client established a long-term partnership with the selected factory.',
    metrics: [
      { label: 'Units Delivered', value: '50,000' },
      { label: 'Defect Rate', value: '< 0.5%' },
      { label: 'On-Time Delivery', value: '100%' },
    ],
  },
  {
    id: 'textile-european-brand',
    industry: 'Apparel',
    client: 'European Fashion Brand',
    title: 'Sustainable Textile Sourcing for European Fashion Brand',
    challenge: 'A European fashion brand sought sustainable fabric suppliers with verified fair labor practices and environmental certifications. They needed a partner who understood EU compliance requirements.',
    solution: 'We audited 8 factories across Zhejiang and Guangdong provinces, verified GOTS and OEKO-TEX certifications, conducted social compliance audits, and negotiated favorable payment terms and MOQs.',
    result: 'Established a long-term partnership with a certified supplier, reducing material costs by 18% while maintaining quality and compliance standards.',
    metrics: [
      { label: 'Factories Audited', value: '8' },
      { label: 'Cost Reduction', value: '18%' },
      { label: 'Compliance Rate', value: '100%' },
    ],
  },
  {
    id: 'industrial-australian',
    industry: 'Industrial',
    client: 'Australian Distributor',
    title: 'Custom Industrial Parts for Australian Distributor',
    challenge: 'An Australian industrial distributor needed custom-machined parts with tight tolerances for mining equipment. Previous suppliers struggled with consistency and documentation.',
    solution: 'We sourced specialized CNC manufacturers with ISO 9001 certification, managed the prototyping phase with iterative feedback, and implemented a rigorous quality control process with first-article and batch inspections.',
    result: 'Achieved 99.2% pass rate on first-article inspections and consistent batch quality across multiple production runs.',
    metrics: [
      { label: 'Pass Rate', value: '99.2%' },
      { label: 'Tolerance', value: '+/- 0.01mm' },
      { label: 'Batches Delivered', value: '24' },
    ],
  },
  {
    id: 'packaging-canadian',
    industry: 'Packaging',
    client: 'Canadian E-commerce Company',
    title: 'Custom Packaging Solutions for E-commerce Brand',
    challenge: 'A Canadian e-commerce company needed custom packaging for their product line — branded boxes, inserts, and labels — with consistent quality across large order volumes.',
    solution: 'We identified packaging manufacturers with experience in e-commerce fulfillment, coordinated design proofing and sample approval, and implemented pre-shipment inspections for every batch.',
    result: 'Reduced packaging costs by 25% compared to their previous supplier while improving print quality and structural integrity.',
    metrics: [
      { label: 'Cost Savings', value: '25%' },
      { label: 'Order Volume', value: '200K+/month' },
      { label: 'Quality Score', value: '4.8/5' },
    ],
  },
  {
    id: 'automotive-german',
    industry: 'Automotive',
    client: 'German Auto Parts Supplier',
    title: 'Automotive Components for German Supplier',
    challenge: 'A German automotive parts supplier needed a Chinese manufacturer capable of meeting IATF 16949 standards for precision-machined components.',
    solution: 'We conducted a thorough supplier search focusing on IATF-certified facilities, performed detailed capability audits, and established a quality agreement with clear acceptance criteria and inspection protocols.',
    result: 'Successfully qualified 2 suppliers and established ongoing production with zero major quality incidents over 18 months.',
    metrics: [
      { label: 'Suppliers Qualified', value: '2' },
      { label: 'Quality Incidents', value: '0' },
      { label: 'Partnership Duration', value: '18+ months' },
    ],
  },
  {
    id: 'home-garden-uk',
    industry: 'Home & Garden',
    client: 'UK Garden Retailer',
    title: 'Garden Furniture Sourcing for UK Retailer',
    challenge: 'A UK garden retailer needed a reliable supplier for outdoor furniture with weather-resistant finishes and competitive pricing for the seasonal market.',
    solution: 'We sourced manufacturers in Foshan with export experience to Europe, verified finish quality through lab testing, and coordinated container loading to meet the seasonal delivery window.',
    result: 'Delivered 3 full containers on schedule with a customer return rate below 1%. The retailer re-ordered for the following season.',
    metrics: [
      { label: 'Containers', value: '3' },
      { label: 'Return Rate', value: '< 1%' },
      { label: 'On-Time', value: 'Yes' },
    ],
  },
];

export default function CaseStudiesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="container-main section-padding">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-blue-600/50 px-4 py-1.5 text-sm font-medium">
              Case Studies
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Real Results for Global Buyers
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              See how we have helped businesses around the world source quality products from China
              — on time, on budget, and to specification.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-start ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="badge">{study.industry}</span>
                  <h2 className="mt-4 text-2xl font-bold text-slate-900">{study.title}</h2>
                  <p className="mt-2 text-sm text-slate-500">Client: {study.client}</p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                        <span className="font-semibold text-slate-900">Challenge</span>
                      </div>
                      <p className="mt-2 text-slate-600">{study.challenge}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-700" />
                        <span className="font-semibold text-slate-900">Solution</span>
                      </div>
                      <p className="mt-2 text-slate-600">{study.solution}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-slate-900">Result</span>
                      </div>
                      <p className="mt-2 font-medium text-blue-700">{study.result}</p>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    className="rounded-xl bg-slate-100 aspect-[4/3]"
                  />
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-lg bg-slate-50 p-4 text-center">
                        <div className="text-xl font-bold text-blue-700">{metric.value}</div>
                        <div className="mt-1 text-xs text-slate-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Want Similar Results for Your Business?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we will show you how we can help.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
