import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, Search, Factory, ClipboardCheck, Package, Truck,
  ArrowRight, CheckCircle, Clock, Users, FileText, Shield
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const processSteps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Request',
    description: 'Tell us what products you need. Include specifications, quantities, target prices, and any other requirements.',
    details: [
      'Product description and specifications',
      'Estimated order quantities',
      'Target pricing if known',
      'Quality standards and requirements',
      'Timeline expectations',
    ],
    timeline: 'Day 1',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Matching',
    description: 'We identify suitable factories from our network, verify their credentials, and shortlist the best options for your needs.',
    details: [
      'Business license verification',
      'Factory capability assessment',
      'Production capacity check',
      'Reference verification',
      'Shortlist presentation',
    ],
    timeline: '3-7 days',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Sample & Negotiation',
    description: 'We arrange samples, facilitate negotiations, and help you secure the best terms and pricing with your chosen supplier.',
    details: [
      'Sample arrangement and shipping',
      'Sample evaluation support',
      'Price negotiation',
      'MOQ discussions',
      'Terms and conditions',
    ],
    timeline: '1-3 weeks',
  },
  {
    number: '04',
    icon: FileText,
    title: 'Contract & Deposit',
    description: 'We help draft and review contracts, ensure proper protections are in place, and manage the deposit process.',
    details: [
      'Contract drafting and review',
      'Payment terms negotiation',
      'Quality standards documentation',
      'Delivery schedule agreement',
      'Deposit management',
    ],
    timeline: '3-5 days',
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    description: 'Your order enters production with regular monitoring and quality inspections at key stages.',
    details: [
      'Production start confirmation',
      'Weekly progress updates',
      'During-production inspection (optional)',
      'Pre-shipment inspection',
      'Final quality approval',
    ],
    timeline: '2-8 weeks',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics from factory pickup to final delivery at your location.',
    details: [
      'Factory pickup coordination',
      'Export customs clearance',
      'International shipping',
      'Import customs clearance',
      'Final delivery',
    ],
    timeline: '2-6 weeks',
  },
];

const timelineEstimate = [
  { phase: 'Research & Matching', weeks: '1-2 weeks' },
  { phase: 'Samples & Negotiation', weeks: '2-4 weeks' },
  { phase: 'Contract & Deposit', weeks: '1 week' },
  { phase: 'Production', weeks: '2-8 weeks' },
  { phase: 'Shipping', weeks: '2-6 weeks' },
  { phase: 'Total Estimate', weeks: '8-21 weeks' },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              How Our Sourcing Process Works
            </h1>
            <p className="text-xl text-slate-300">
              A transparent, structured approach to help you source products from China with minimal risk and maximum confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-12 top-24 bottom-0 w-0.5 bg-slate-200" />
                )}
                <div className="grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex lg:flex-col items-center gap-4">
                      <div className="relative">
                        <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center">
                          <step.icon className="w-10 h-10 text-blue-700" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-11">
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div>
                          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                            Step {step.number}
                          </span>
                          <h2 className="text-2xl font-bold text-slate-900 mt-1">{step.title}</h2>
                        </div>
                        <div className="px-4 py-2 bg-blue-100 rounded-lg">
                          <span className="text-sm font-medium text-blue-700">{step.timeline}</span>
                        </div>
                      </div>
                      <p className="text-slate-600 mb-6">{step.description}</p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Typical Timeline Estimates
            </h2>
            <p className="text-lg text-slate-600">
              While every project is different, here's a general overview of what to expect.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="space-y-4">
              {timelineEstimate.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    index === timelineEstimate.length - 1
                      ? 'bg-blue-50 border-2 border-blue-200'
                      : 'bg-slate-50'
                  }`}
                >
                  <span className={`font-medium ${index === timelineEstimate.length - 1 ? 'text-blue-900' : 'text-slate-700'}`}>
                    {item.phase}
                  </span>
                  <span className={`font-semibold ${index === timelineEstimate.length - 1 ? 'text-blue-700' : 'text-slate-900'}`}>
                    {item.weeks}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 mt-6 text-center">
              * Timeline varies based on product complexity, customization requirements, and order size.
            </p>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What Makes Our Process Different
            </h2>
            <p className="text-lg text-slate-600">
              We've refined our sourcing process over years of experience to maximize efficiency while minimizing risk for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Verification First',
                description: 'We never recommend a supplier without completing thorough verification. Your trust and safety come first.',
              },
              {
                icon: MessageSquare,
                title: 'Transparent Communication',
                description: "You'll always know the status of your project. We provide regular updates with no surprises.",
              },
              {
                icon: Clock,
                title: 'Time-Efficient',
                description: 'Our established supplier network and local expertise help reduce lead times significantly.',
              },
            ].map((point, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                  <point.icon className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{point.title}</h3>
                <p className="text-slate-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Submit your first request today and see how we can simplify your China sourcing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
