import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, TrendingUp, Clock, DollarSign, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    id: 'electronics-oem',
    title: 'Electronics OEM Sourcing for US Retailer',
    industry: 'Consumer Electronics',
    client: 'US-based electronics retailer',
    challenge: 'A US retailer needed a reliable OEM manufacturer for custom Bluetooth speakers with strict quality requirements. They had previously experienced quality issues and delivery delays with other suppliers.',
    approach: 'We identified 8 potential manufacturers in Shenzhen and Dongguan, conducted on-site audits of the top 5, and presented detailed comparison reports. After sample evaluation, we selected a factory with strong R&D capability and ISO 9001 certification.',
    result: 'Found 3 qualified factories, completed production in 45 days, and achieved 99.2% pass rate on final inspection. The client has since placed 6 repeat orders.',
    imgId: 'case-study-electronics-x1y2z3',
    metrics: [
      { icon: Clock, value: '45 days', label: 'Production Time' },
      { icon: TrendingUp, value: '99.2%', label: 'Quality Pass Rate' },
      { icon: DollarSign, value: '28%', label: 'Cost Savings' },
    ],
  },
  {
    id: 'textile-eu',
    title: 'Textile Supply Chain Setup for EU Brand',
    industry: 'Fashion & Apparel',
    client: 'European sustainable fashion brand',
    challenge: 'A European fashion brand needed sustainable textile suppliers with verified social compliance and organic certifications. They required a partner who understood EU regulations and sustainability standards.',
    approach: 'We audited 12 textile factories across Zhejiang and Jiangsu provinces, focusing on environmental certifications, labor practices, and production quality. We shortlisted 2 factories with GOTS and OEKO-TEX certifications.',
    result: 'Established ongoing production partnership with 2 certified suppliers. The brand successfully launched their sustainable collection with zero compliance issues.',
    imgId: 'case-study-textile-a4b5c6',
    metrics: [
      { icon: Clock, value: '30 days', label: 'Supplier Selection' },
      { icon: TrendingUp, value: '12', label: 'Factories Audited' },
      { icon: DollarSign, value: '15%', label: 'Margin Improvement' },
    ],
  },
  {
    id: 'machinery-au',
    title: 'Industrial Machinery Sourcing for Australian Firm',
    industry: 'Industrial Equipment',
    client: 'Australian construction equipment company',
    challenge: 'An Australian construction firm needed custom CNC machinery with specific technical specifications. The project required complex engineering coordination and heavy equipment shipping.',
    approach: 'We identified specialized CNC manufacturers in Shandong province, managed technical specification alignment between the client and factory, and coordinated production milestones with regular progress reports.',
    result: 'Successfully delivered 3 custom CNC machines with 100% specification compliance. Coordinated heavy equipment shipping including customs clearance and on-site installation support.',
    imgId: 'case-study-machinery-d7e8f9',
    metrics: [
      { icon: Clock, value: '90 days', label: 'End-to-End' },
      { icon: TrendingUp, value: '100%', label: 'Spec Compliance' },
      { icon: DollarSign, value: '35%', label: 'Cost Savings' },
    ],
  },
  {
    id: 'packaging-uk',
    title: 'Custom Packaging Sourcing for UK E-commerce Brand',
    industry: 'Packaging & Printing',
    client: 'UK-based e-commerce brand',
    challenge: 'A growing UK e-commerce brand needed custom packaging solutions at competitive prices. They required eco-friendly materials and fast turnaround times for seasonal campaigns.',
    approach: 'We sourced packaging manufacturers in Guangdong, arranged sample production with custom designs, and negotiated volume-based pricing. We also set up a quality inspection protocol for each production run.',
    result: 'Established a reliable packaging supply chain with 20% cost reduction and consistent quality. The client now places monthly orders with predictable delivery schedules.',
    imgId: 'case-study-packaging-g1h2i3',
    metrics: [
      { icon: Clock, value: '14 days', label: 'Sample to Production' },
      { icon: TrendingUp, value: '20%', label: 'Cost Reduction' },
      { icon: DollarSign, value: 'Monthly', label: 'Recurring Orders' },
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
      <section className="bg-slate-900 text-white py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-lg text-slate-300">
              Real examples of how we have helped international buyers source successfully from China. Each case study shows our process and results.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-8">
                    <img
                      data-strk-img-id={study.imgId}
                      data-strk-img={`[case-study-title-${study.id}] [case-study-industry-${study.id}] [case-studies-page-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-4 bg-slate-50 rounded-xl">
                        <metric.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <div className="text-xl font-bold text-slate-900">{metric.value}</div>
                        <div className="text-xs text-slate-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="text-sm text-blue-600 font-medium mb-2">{study.industry}</div>
                  <h2 id={`case-study-title-${study.id}`} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{study.title}</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Client</h3>
                      <p className="text-slate-600">{study.client}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Challenge</h3>
                      <p className="text-slate-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Our Approach</h3>
                      <p className="text-slate-600">{study.approach}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Results
                      </h3>
                      <p className="text-green-800">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="section-title">Want Similar Results for Your Business?</h2>
          <p className="section-subtitle mx-auto mb-8">
            Tell us about your sourcing needs, and we will show you how we can help.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
