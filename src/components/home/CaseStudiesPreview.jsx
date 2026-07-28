import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    id: 'electronics-oem',
    title: 'Electronics OEM Sourcing for US Retailer',
    industry: 'Consumer Electronics',
    challenge: 'A US retailer needed a reliable OEM manufacturer for custom Bluetooth speakers with strict quality requirements.',
    result: 'Found 3 qualified factories, completed production in 45 days, and achieved 99.2% pass rate on final inspection.',
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
    challenge: 'A European fashion brand needed sustainable textile suppliers with verified social compliance.',
    result: 'Audited 12 factories, selected 2 certified suppliers, and established ongoing production partnership.',
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
    challenge: 'An Australian construction firm needed custom CNC machinery with specific technical specifications.',
    result: 'Identified specialized manufacturer, managed complex production, and coordinated heavy equipment shipping.',
    imgId: 'case-study-machinery-d7e8f9',
    metrics: [
      { icon: Clock, value: '90 days', label: 'End-to-End' },
      { icon: TrendingUp, value: '100%', label: 'Spec Compliance' },
      { icon: DollarSign, value: '35%', label: 'Cost Savings' },
    ],
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle mx-auto">
            Real examples of how we have helped international buyers source successfully from China.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="card overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[case-study-title-${study.id}] [case-study-industry-${study.id}] [case-studies-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">{study.industry}</div>
                <h3 id={`case-study-title-${study.id}`} className="text-lg font-semibold text-slate-900 mb-3">{study.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{study.challenge}</p>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <metric.icon className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                      <div className="text-lg font-bold text-slate-900">{metric.value}</div>
                      <div className="text-xs text-slate-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <Link to="/case-studies" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm">
                  Read full case study <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/case-studies" className="btn-secondary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
