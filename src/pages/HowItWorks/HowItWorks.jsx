import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Understand Your Requirements',
      description: 'We start with a detailed discussion to understand your product specifications, quality standards, target price, order quantity, and timeline. This helps us identify the right suppliers for your needs.',
      details: [
        'Product specifications and technical requirements',
        'Quality standards and certifications needed',
        'Target price and budget constraints',
        'Order quantity and production timeline',
        'Shipping destination and logistics preferences'
      ]
    },
    {
      step: '02',
      title: 'Supplier Sourcing & Screening',
      description: 'We leverage our database and network to identify potential suppliers. Each supplier undergoes initial screening based on your requirements.',
      details: [
        'Search our verified supplier database',
        'Identify suppliers with relevant experience',
        'Initial capability and capacity assessment',
        'Check business licenses and certifications',
        'Review past client feedback and track record'
      ]
    },
    {
      step: '03',
      title: 'Factory Audit & Verification',
      description: 'For shortlisted suppliers, we conduct on-site factory audits to verify their legitimacy, production capabilities, and quality management systems.',
      details: [
        'On-site factory visit and inspection',
        'Production equipment and capacity verification',
        'Quality management system assessment',
        'Worker skill level and working conditions',
        'Compliance with ethical and safety standards'
      ]
    },
    {
      step: '04',
      title: 'Sample Development & Quotation',
      description: 'We help you get product samples and detailed quotations from verified suppliers for your evaluation and comparison.',
      details: [
        'Coordinate sample production with suppliers',
        'Quality check on samples before sending to you',
        'Detailed quotation with cost breakdown',
        'Compare offers from multiple suppliers',
        'Negotiate pricing and payment terms'
      ]
    },
    {
      step: '05',
      title: 'Quality Control & Production Monitoring',
      description: 'Once you place an order, we monitor production and conduct quality inspections at different stages to ensure your products meet specifications.',
      details: [
        'Pre-production inspection (material check)',
        'During production inspection (process monitoring)',
        'Pre-shipment inspection (final product check)',
        'Regular progress updates with photos/videos',
        'Issue identification and resolution support'
      ]
    },
    {
      step: '06',
      title: 'Shipping & Delivery',
      description: 'We coordinate the entire logistics process, from factory pickup to delivery at your warehouse or Amazon FBA center.',
      details: [
        'Book freight forwarding (air, sea, or express)',
        'Prepare and verify customs documentation',
        'Arrange cargo insurance',
        'Container loading supervision',
        'Track shipment and provide regular updates'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Our Sourcing Process Works
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              A proven 6-step process designed to help you source from China
              with confidence, quality assurance, and cost efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Step Number & Content */}
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="text-6xl font-bold text-blue-100 mr-4">
                      {item.step}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      What we do in this step:
                    </h3>
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Placeholder */}
                <div className="lg:w-1/2">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">
                        {index === 0 && '📋'}
                        {index === 1 && '🔍'}
                        {index === 2 && '🏭'}
                        {index === 3 && '📦'}
                        {index === 4 && '✅'}
                        {index === 5 && '🚢'}
                      </div>
                      <p className="text-gray-500 font-medium">Step {item.step}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-lg text-gray-600">
              While every project is unique, here's a general timeline for reference
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                {[
                  { phase: 'Supplier Identification & Screening', duration: '1-2 weeks' },
                  { phase: 'Factory Audit & Verification', duration: '1 week' },
                  { phase: 'Sample Production & Evaluation', duration: '2-3 weeks' },
                  { phase: 'Price Negotiation & Order Confirmation', duration: '1 week' },
                  { phase: 'Production (varies by order size)', duration: '30-60 days' },
                  { phase: 'Quality Inspection & Shipping', duration: '1-3 weeks' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-4 border-b border-gray-200 last:border-0">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                        {index + 1}
                      </div>
                      <span className="font-medium text-gray-900">{item.phase}</span>
                    </div>
                    <span className="text-gray-600 font-medium">{item.duration}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Timeline can vary depending on product complexity, order volume,
                  customization requirements, and supplier response time. We'll provide a detailed
                  timeline specific to your project during consultation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Contact us today for a free consultation. We'll walk you through our process
            and provide a customized sourcing plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
