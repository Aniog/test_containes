import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, TrendingUp, Clock, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Electronics Importer Reduces Costs by 22%',
      client: 'US-based Electronics Retailer',
      category: 'Electronics',
      challenge: 'The client was struggling with inconsistent quality and high costs from their existing suppliers. They needed a reliable partner to help them find better manufacturers.',
      solution: 'We identified 5 qualified suppliers, conducted factory audits, and negotiated better pricing. We implemented a quality inspection process that caught issues before shipment.',
      results: [
        { metric: 'Cost Reduction', value: '22%', icon: DollarSign },
        { metric: 'Quality Defects', value: '-85%', icon: CheckCircle2 },
        { metric: 'Lead Time', value: '-30%', icon: Clock },
      ],
      testimonial: 'SSourcing China transformed our supply chain. We now have reliable suppliers, consistent quality, and significantly lower costs.',
      author: 'John Smith, Procurement Manager',
    },
    {
      id: 2,
      title: 'Home Goods Retailer Finds 3 Reliable Suppliers in 2 Weeks',
      client: 'European Home Goods Chain',
      category: 'Home Goods',
      challenge: 'The client needed to expand their product line but struggled to find suppliers that could meet their quality and volume requirements.',
      solution: 'We conducted a targeted supplier search, verified 8 factories, and presented 3 qualified options. We coordinated samples and inspections to ensure quality.',
      results: [
        { metric: 'Suppliers Found', value: '3', icon: CheckCircle2 },
        { metric: 'Time to Source', value: '2 weeks', icon: Clock },
        { metric: 'First Order Value', value: '$150K', icon: TrendingUp },
      ],
      testimonial: 'The speed and quality of their service exceeded our expectations. We now have a solid supply chain for our new product line.',
      author: 'Maria Garcia, Category Manager',
    },
    {
      id: 3,
      title: 'Textile Brand Eliminates 95% of Quality Issues',
      client: 'Australian Fashion Brand',
      category: 'Textiles',
      challenge: 'The client was experiencing frequent quality issues with their textile products, leading to returns and customer complaints.',
      solution: 'We implemented a comprehensive quality control system including pre-production inspections, during-production monitoring, and pre-shipment checks.',
      results: [
        { metric: 'Quality Issues', value: '-95%', icon: CheckCircle2 },
        { metric: 'Customer Returns', value: '-80%', icon: TrendingUp },
        { metric: 'Customer Satisfaction', value: '98%', icon: CheckCircle2 },
      ],
      testimonial: 'Since working with SSourcing China, our quality issues have virtually disappeared. Our customers are happier and our costs are down.',
      author: 'Sarah Johnson, CEO',
    },
    {
      id: 4,
      title: 'Toy Manufacturer Scales Production by 300%',
      client: 'Canadian Toy Company',
      category: 'Toys',
      challenge: 'The client needed to scale production quickly to meet increased demand but struggled to find suppliers with sufficient capacity.',
      solution: 'We identified factories with excess capacity, negotiated favorable terms, and implemented a production monitoring system to ensure timely delivery.',
      results: [
        { metric: 'Production Increase', value: '300%', icon: TrendingUp },
        { metric: 'On-Time Delivery', value: '100%', icon: Clock },
        { metric: 'Cost per Unit', value: '-15%', icon: DollarSign },
      ],
      testimonial: 'They helped us scale faster than we thought possible. The production monitoring gave us confidence that everything was on track.',
      author: 'Michael Chen, Operations Director',
    },
    {
      id: 5,
      title: 'Automotive Parts Supplier Passes Strict Compliance Audit',
      client: 'German Automotive Supplier',
      category: 'Automotive',
      challenge: 'The client needed suppliers that could meet strict automotive industry quality standards and compliance requirements.',
      solution: 'We conducted detailed factory audits focusing on quality management systems, traceability, and compliance with automotive standards.',
      results: [
        { metric: 'Audit Pass Rate', value: '100%', icon: CheckCircle2 },
        { metric: 'Compliance Score', value: 'A+', icon: TrendingUp },
        { metric: 'Defect Rate', value: '<0.1%', icon: CheckCircle2 },
      ],
      testimonial: 'Their attention to detail and understanding of automotive requirements was impressive. They found us suppliers that truly meet our standards.',
      author: 'Hans Mueller, Quality Director',
    },
    {
      id: 6,
      title: 'Beauty Brand Launches New Product Line in 3 Months',
      client: 'UK Beauty Retailer',
      category: 'Health & Beauty',
      challenge: 'The client needed to launch a new product line quickly but had no experience sourcing from China.',
      solution: 'We managed the entire process from supplier search to final delivery, including formulation, packaging design, and regulatory compliance.',
      results: [
        { metric: 'Time to Market', value: '3 months', icon: Clock },
        { metric: 'Launch Success', value: 'On schedule', icon: CheckCircle2 },
        { metric: 'First Month Sales', value: '$200K', icon: TrendingUp },
      ],
      testimonial: 'They made the complex process of launching a new product line in China seem effortless. We couldn\'t have done it without them.',
      author: 'Emma Wilson, Product Development Manager',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Case Studies
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Real success stories from businesses that have transformed their China sourcing with SSourcing China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-4">
                    {study.category}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{study.title}</h2>
                  <p className="text-sm text-slate-500 mb-4">Client: {study.client}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Challenge</h3>
                      <p className="text-slate-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Solution</h3>
                      <p className="text-slate-600">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">Results</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="bg-slate-50 rounded-lg p-4 text-center">
                            <result.icon className="h-6 w-6 text-slate-700 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-slate-900">{result.value}</div>
                            <div className="text-xs text-slate-600">{result.metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-slate-900">
                      <p className="text-slate-700 italic mb-3">"{study.testimonial}"</p>
                      <p className="text-sm text-slate-500">— {study.author}</p>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="rounded-2xl bg-slate-100 aspect-[4/3] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-slate-300 mb-2">{String(study.id).padStart(2, '0')}</div>
                      <div className="text-slate-500">Case Study</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Let us help you achieve similar results. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
