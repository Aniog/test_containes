import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Package, Factory, Truck, Users } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    category: 'Electronics',
    title: 'Consumer Electronics Sourcing for US Retailer',
    client: 'TechMart Inc. (USA)',
    challenge: 'TechMart needed to source 50,000 wireless earbuds for their retail stores but had no presence in China and feared quality issues.',
    solution: 'We identified three verified manufacturers, conducted factory audits, managed sample production, and implemented a comprehensive QC program.',
    results: [
      '50,000 units delivered on schedule',
      '99.2% pass rate on final inspection',
      '18% cost savings compared to previous supplier',
      'Zero customer complaints in first year',
    ],
    services: ['Supplier Search', 'Factory Audit', 'QC Inspection', 'Shipping'],
    timeline: '14 weeks',
    value: '$250,000',
  },
  {
    id: 2,
    category: 'Furniture',
    title: 'Outdoor Furniture Supply Chain Setup',
    client: 'GardenLiving GmbH (Germany)',
    challenge: 'GardenLiving wanted to expand their outdoor furniture line but struggled to find reliable manufacturers meeting EU quality standards.',
    solution: 'We verified 12 factories, selected three capable manufacturers, and established a quality management system with regular inspections.',
    results: [
      '3 reliable long-term suppliers established',
      '100% compliance with EU safety standards',
      '40% reduction in quality issues',
      'Quarterly shipments of 200 containers',
    ],
    services: ['Factory Verification', 'Quality Control', 'Documentation', 'Logistics'],
    timeline: '8 weeks',
    value: '$500,000/year',
  },
  {
    id: 3,
    category: 'Apparel',
    title: 'Sportswear Production Management',
    client: 'ActiveLife Brands (UK)',
    challenge: 'ActiveLife needed to produce 100,000 units of activewear with specific technical requirements and tight deadlines.',
    solution: 'We coordinated with a specialized sportswear factory, implemented during-production inspections, and managed the entire production timeline.',
    results: [
      '100,000 garments produced in 10 weeks',
      '100% pass rate on QC inspections',
      'On-time delivery to UK distribution center',
      'Seamless coordination with brand requirements',
    ],
    services: ['Production Follow-up', 'During-Production QC', 'Pre-shipment Inspection'],
    timeline: '10 weeks',
    value: '$400,000',
  },
  {
    id: 4,
    category: 'Industrial',
    title: 'Machinery Parts Sourcing for Manufacturer',
    client: 'PrecisionWorks Ltd. (Canada)',
    challenge: 'PrecisionWorks needed custom-machined parts with tight tolerances but lacked the network to find capable Chinese manufacturers.',
    solution: 'We identified specialized machining factories, verified their capabilities with sample production, and established quality protocols.',
    results: [
      'Found 5 qualified suppliers for different parts',
      'Achieved required +/- 0.01mm tolerances',
      '50% cost reduction from previous sourcing',
      'Stable supply for 3 years running',
    ],
    services: ['Supplier Search', 'Sample Development', 'Quality Assurance'],
    timeline: '6 weeks',
    value: '$180,000/year',
  },
];

const testimonials = [
  {
    quote: "SSourcing China transformed our China sourcing from a stressful gamble into a reliable business process. Their QC inspections have virtually eliminated the quality issues we used to face.",
    author: 'Michael Thompson',
    role: 'Supply Chain Director',
    company: 'TechMart Inc.',
  },
  {
    quote: "The factory verification service saved us from a costly mistake. The audit revealed issues that would have caused major problems down the line. Professional and thorough.",
    author: 'Hans Mueller',
    role: 'Procurement Manager',
    company: 'GardenLiving GmbH',
  },
];

const CaseStudies = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Real success stories from businesses we've helped with China sourcing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-[var(--color-primary)] rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                    <span className="text-sm text-[var(--color-text-secondary)]">
                      {study.client}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]">
                    {study.title}
                  </h2>
                  
                  <div className="grid lg:grid-cols-3 gap-8 mt-8">
                    <div>
                      <h3 className="font-semibold text-[var(--color-text)] mb-2 flex items-center gap-2">
                        <Factory className="w-5 h-5 text-[var(--color-primary)]" />
                        Challenge
                      </h3>
                      <p className="text-[var(--color-text-secondary)] text-sm">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text)] mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[var(--color-primary)]" />
                        Solution
                      </h3>
                      <p className="text-[var(--color-text-secondary)] text-sm">
                        {study.solution}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text)] mb-2 flex items-center gap-2">
                        <Package className="w-5 h-5 text-[var(--color-primary)]" />
                        Results
                      </h3>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-[var(--color-text-secondary)] text-sm flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-[var(--color-text-secondary)] mb-1">Services</p>
                      <div className="flex flex-wrap gap-2">
                        {study.services.map((service, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-[var(--color-text)] rounded text-xs">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-text-secondary)] mb-1">Timeline</p>
                      <p className="font-semibold text-[var(--color-text)]">{study.timeline}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-text-secondary)] mb-1">Project Value</p>
                      <p className="font-semibold text-[var(--color-text)]">{study.value}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Feedback from businesses we've helped
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100"
              >
                <p className="text-[var(--color-text)] italic mb-6 text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-text)]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-primary)] text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Let's discuss how we can help with your China sourcing needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
