import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Home Decor Importer from USA',
      category: 'Home & Garden',
      client: 'Midwest Home Goods LLC',
      location: 'United States',
      challenge: 'The client was struggling with inconsistent quality from their existing suppliers and facing 30-40% price fluctuations. They needed a reliable sourcing partner who could maintain quality standards while reducing costs.',
      solution: 'We conducted a comprehensive supplier search, audited 8 factories, and selected 2 reliable manufacturers. We implemented a strict QC process with pre-production, during-production, and pre-shipment inspections.',
      results: [
        { metric: 'Cost Reduction', value: '22%', icon: DollarSign },
        { metric: 'Quality Defect Rate', value: 'From 8% to 1.5%', icon: CheckCircle2 },
        { metric: 'Lead Time', value: 'Reduced by 15 days', icon: Clock },
        { metric: 'On-time Delivery', value: '98%', icon: TrendingUp },
      ],
      testimonial: 'SSourcing China transformed our supply chain. We now have consistent quality, predictable costs, and reliable delivery. Our customers have noticed the improvement.',
      testimonialAuthor: 'John Smith, Procurement Director',
    },
    {
      id: 2,
      title: 'Electronics Retailer from UK',
      category: 'Electronics',
      client: 'TechMart UK',
      location: 'United Kingdom',
      challenge: 'The client needed to expand their product line with 50+ new SKUs but lacked the resources to verify suppliers and manage quality control. Previous attempts resulted in high return rates and customer complaints.',
      solution: 'We created a dedicated sourcing team to handle the entire product development process. We sourced suppliers, arranged samples, conducted factory audits, and set up a comprehensive QC protocol.',
      results: [
        { metric: 'New SKUs Launched', value: '50+', icon: TrendingUp },
        { metric: 'Return Rate', value: 'Reduced from 12% to 2%', icon: CheckCircle2 },
        { metric: 'Lead Time', value: 'From 45 to 28 days', icon: Clock },
        { metric: 'Customer Satisfaction', value: '4.8/5 rating', icon: Users },
      ],
      testimonial: 'The team at SSourcing China became an extension of our business. They understood our quality requirements and delivered consistently excellent results.',
      testimonialAuthor: 'Sarah Johnson, CEO',
    },
    {
      id: 3,
      title: 'Fashion Brand from Australia',
      category: 'Apparel & Textiles',
      client: 'Bella Fashion Co.',
      location: 'Australia',
      challenge: 'The client needed to scale their production for seasonal collections but struggled with fabric quality consistency and meeting tight deadlines. They required a partner who could manage multiple suppliers and ensure timely delivery.',
      solution: 'We established relationships with 3 specialized garment factories, implemented fabric quality testing, and created a production schedule that aligned with their seasonal calendar.',
      results: [
        { metric: 'SKUs Sourced', value: '200+', icon: TrendingUp },
        { metric: 'Quality Pass Rate', value: '96%', icon: CheckCircle2 },
        { metric: 'On-time Delivery', value: '95%', icon: Clock },
        { metric: 'Cost Savings', value: '18%', icon: DollarSign },
      ],
      testimonial: 'SSourcing China helped us scale from a small boutique to a multi-season brand. Their attention to detail and proactive communication made all the difference.',
      testimonialAuthor: 'Emma Wilson, Founder',
    },
    {
      id: 4,
      title: 'Industrial Equipment Distributor from Germany',
      category: 'Industrial Equipment',
      client: 'GermanTech Supplies GmbH',
      location: 'Germany',
      challenge: 'The client needed to source specialized industrial components with tight tolerances. Finding suppliers with the right capabilities and certifications was challenging, and quality issues were causing production delays.',
      solution: 'We identified 4 specialized manufacturers with ISO certifications and precision machining capabilities. We implemented dimensional inspection protocols and established clear quality standards.',
      results: [
        { metric: 'Defect Rate', value: 'Reduced to 0.5%', icon: CheckCircle2 },
        { metric: 'Supplier Lead Time', value: 'Reduced by 25%', icon: Clock },
        { metric: 'Certified Suppliers', value: '100%', icon: Users },
        { metric: 'Cost Efficiency', value: '15% savings', icon: DollarSign },
      ],
      testimonial: 'The precision and reliability we get from SSourcing China is outstanding. They understand technical requirements and ensure every shipment meets our strict standards.',
      testimonialAuthor: 'Michael Bauer, Operations Manager',
    },
    {
      id: 5,
      title: 'E-commerce Seller from Canada',
      category: 'Multiple Categories',
      client: 'MapleLeaf Imports',
      location: 'Canada',
      challenge: 'The client was selling on Amazon and needed to source private label products across multiple categories. They needed help with product development, supplier verification, and maintaining Amazon compliance standards.',
      solution: 'We provided end-to-end support from product concept to delivery. We sourced manufacturers, arranged product testing, ensured compliance with Amazon requirements, and managed the entire supply chain.',
      results: [
        { metric: 'Products Launched', value: '30+', icon: TrendingUp },
        { metric: 'Amazon Rating', value: '4.7/5 average', icon: Users },
        { metric: 'Return Rate', value: 'Under 3%', icon: CheckCircle2 },
        { metric: 'Profit Margin', value: 'Increased by 20%', icon: DollarSign },
      ],
      testimonial: 'SSourcing China has been instrumental in growing our Amazon business. Their expertise in product sourcing and quality control has helped us build a sustainable brand.',
      testimonialAuthor: 'David Chen, Founder',
    },
    {
      id: 6,
      title: 'Restaurant Chain from Singapore',
      category: 'Food & Beverage Equipment',
      client: 'Oriental Bites Pte Ltd',
      location: 'Singapore',
      challenge: 'The client was expanding their restaurant chain and needed to source commercial kitchen equipment and packaging materials. They required suppliers who could meet food safety standards and deliver on tight timelines.',
      solution: 'We identified certified food-grade equipment suppliers and packaging manufacturers. We arranged factory audits, ensured compliance with Singapore food safety regulations, and coordinated just-in-time deliveries.',
      results: [
        { metric: 'Restaurants Supplied', value: '12 locations', icon: Users },
        { metric: 'Compliance Rate', value: '100%', icon: CheckCircle2 },
        { metric: 'Delivery Accuracy', value: '99%', icon: Clock },
        { metric: 'Cost Savings', value: '25%', icon: DollarSign },
      ],
      testimonial: 'SSourcing China understands the unique needs of the F&B industry. Their attention to food safety and ability to meet our expansion timeline was exceptional.',
      testimonialAuthor: 'Lisa Tan, Operations Director',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Real success stories from businesses we've helped source from China. See how our services have transformed their supply chains and driven growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Start Your Success Story</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle mx-auto">
              Each case study demonstrates our commitment to quality, transparency, and results.
            </p>
          </div>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                      {study.category}
                    </span>
                    <span className="text-sm text-slate-500">{study.location}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{study.title}</h3>
                  <p className="text-slate-600 mb-6">{study.client}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">The Challenge</h4>
                      <p className="text-slate-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Our Solution</h4>
                      <p className="text-slate-600 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-slate-900 mb-4">Key Results</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-lg p-4 text-center">
                          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 mb-2">
                            <result.icon className="h-5 w-5" />
                          </div>
                          <p className="text-2xl font-bold text-slate-900">{result.value}</p>
                          <p className="text-xs text-slate-600">{result.metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-blue-500">
                    <p className="text-slate-700 italic mb-3">"{study.testimonial}"</p>
                    <p className="text-sm font-medium text-slate-900">— {study.testimonialAuthor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Track Record</h2>
            <p className="section-subtitle mx-auto">
              Numbers that reflect our commitment to client success.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-slate-600">Clients Served</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">10,000+</p>
              <p className="text-slate-600">Shipments Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">30+</p>
              <p className="text-slate-600">Countries Served</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
              <p className="text-slate-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Join 500+ businesses that trust SSourcing China for their sourcing needs. Let us help you achieve similar results.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
