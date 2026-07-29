import { Link } from 'react-router-dom';
import { ArrowUpRight, Factory, ShoppingBag, Wrench } from 'lucide-react';

const caseStudies = [
  {
    icon: ShoppingBag,
    industry: 'Retail / E-commerce',
    title: 'Sourcing Private-Label Kitchenware for a US Amazon Seller',
    result: 'Identified 3 qualified suppliers, reduced unit cost by 22%, zero defects on first shipment.',
    tag: 'Cost Reduction',
  },
  {
    icon: Factory,
    industry: 'Industrial / B2B',
    title: 'Custom CNC Machined Parts for a German Manufacturer',
    result: 'Verified 5 factories, conducted 3 on-site audits, achieved ±0.01mm tolerance consistently.',
    tag: 'Quality Assurance',
  },
  {
    icon: Wrench,
    industry: 'Automotive',
    title: 'EV Charging Cable Assembly for a UK Startup',
    result: 'Managed full production cycle from sample to mass production, delivered 2 weeks ahead of schedule.',
    tag: 'On-Time Delivery',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Case Studies</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Results We Deliver
            </h2>
            <p className="text-text-secondary text-lg">
              Real projects with real outcomes for buyers around the world.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors shrink-0"
          >
            View All Case Studies
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <study.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {study.tag}
                </span>
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-2">{study.industry}</p>
              <h3 className="text-base font-semibold text-text-primary mb-3 leading-snug">
                {study.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed flex-1">
                {study.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
