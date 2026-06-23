import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Search, FileCheck, Package, 
  Truck, MessageSquare, CreditCard, Shield, Factory, Clock
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Submit Your Request',
    description: 'Tell us what you need. Provide product specifications, quantity, target price, and any special requirements. The more details you share, the better we can match you with suitable suppliers.',
    details: [
      'Product specifications and technical drawings',
      'Target price range',
      'Order quantity',
      'Required certifications',
      'Packaging requirements',
      'Timeline expectations',
    ],
  },
  {
    number: '02',
    icon: Factory,
    title: 'We Find Suppliers',
    description: 'Our team researches and pre-screens factories to find matches that meet your criteria. We tap into our extensive network of verified manufacturers across various industries.',
    details: [
      'Database of 2,000+ verified factories',
      'Industry-specific expertise',
      'Capability matching',
      'Price comparison',
      'Location considerations',
      'Capacity verification',
    ],
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Verify & Compare',
    description: 'We conduct factory audits and provide detailed comparisons of capabilities, pricing, and certifications. You receive comprehensive reports to make an informed decision.',
    details: [
      'On-site factory audits',
      'Business license verification',
      'Production capacity assessment',
      'Quality certification check',
      'Financial stability review',
      'Detailed comparison report',
    ],
  },
  {
    number: '04',
    icon: MessageSquare,
    title: 'Sample & Approve',
    description: 'We request samples, facilitate your feedback, and help negotiate terms until you approve. We ensure samples match your specifications before moving to production.',
    details: [
      'Sample request coordination',
      'Quality assessment',
      'Feedback translation',
      'Modification negotiation',
      'Final sample approval',
      'Price and terms negotiation',
    ],
  },
  {
    number: '05',
    icon: Package,
    title: 'Production & QC',
    description: 'We monitor production, conduct quality inspections, and ensure compliance with your specifications. Regular updates keep you informed throughout the process.',
    details: [
      'Production progress monitoring',
      'Pre-shipment inspections',
      'During-production checks',
      'Quality documentation',
      'Issue resolution',
      'Shipping preparation',
    ],
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle documentation, and ensure smooth delivery to your door. Our logistics team manages the entire shipping process.',
    details: [
      'Freight forwarding',
      'Customs clearance',
      'Documentation handling',
      'Door-to-door delivery',
      'Shipment tracking',
      'Insurance coordination',
    ],
  },
];

const timeline = [
  { stage: 'Initial Request', time: '1-2 days', description: 'We review your requirements and confirm receipt' },
  { stage: 'Supplier Matching', time: '3-5 days', description: 'We identify and vet suitable suppliers' },
  { stage: 'Factory Audit', time: '1-2 weeks', description: 'Comprehensive verification of shortlisted factories' },
  { stage: 'Sample Phase', time: '2-4 weeks', description: 'Sample production, testing, and approval' },
  { stage: 'Production', time: '2-8 weeks', description: 'Depending on order size and complexity' },
  { stage: 'Shipping', time: '2-6 weeks', description: 'Based on destination and shipping method' },
];

const faqs = [
  {
    question: 'How long does the entire process take?',
    answer: 'Timelines vary based on complexity. Simple sourcing requests can be fulfilled in 2-3 weeks. Full supplier verification and sample approval typically takes 4-8 weeks. Production and shipping add additional time based on your order specifications.',
  },
  {
    question: 'What information do you need to start?',
    answer: 'To provide the best service, we need: product specifications or technical drawings, estimated order quantity, target price range, required certifications or standards, packaging requirements, and your timeline. The more details you provide, the faster we can find suitable suppliers.',
  },
  {
    question: 'Can I visit factories myself?',
    answer: 'Absolutely. We can arrange factory visits and accompany you during your trip to China. We provide translation services and help facilitate meetings with potential suppliers.',
  },
  {
    question: 'What if I\'m not satisfied with the suppliers?',
    answer: 'We continue searching until we find suppliers that meet your requirements. Our extensive network and rigorous verification process ensure high-quality matches. If a supplier doesn\'t meet expectations, we quickly identify alternatives.',
  },
  {
    question: 'How do you ensure quality?',
    answer: 'We implement multiple quality checkpoints: factory verification before engagement, sample approval before production, during-production inspections, and pre-shipment inspections. Our detailed QC reports include photos, measurements, and test results.',
  },
];

const HowItWorks = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#2D5A8A] to-[#1E3A5F] py-20 lg:py-28">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              How It Works
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              Our proven 6-step process ensures you find reliable suppliers 
              and get quality products delivered on time.
            </p>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center">
                    <span className="text-5xl font-bold text-[#1E3A5F]/20">{step.number}</span>
                    <div className="ml-4">
                      <div className="w-12 h-12 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-gray-900">
                    {step.title}
                  </h2>
                  <p className="mt-4 text-gray-600">
                    {step.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="ml-3 text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-white rounded-2xl p-8 shadow-lg ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square bg-gradient-to-br from-[#1E3A5F]/5 to-[#1E3A5F]/10 rounded-xl flex flex-col items-center justify-center">
                    <step.icon className="w-20 h-20 text-[#1E3A5F]/30" />
                    <span className="mt-4 text-4xl font-bold text-[#1E3A5F]/20">{step.number}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Typical Timeline
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              While timelines vary based on your specific requirements, 
              here's a general overview of what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <div key={item.stage} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-semibold text-gray-900">{item.stage}</span>
                  <span className="text-sm font-medium text-[#F97316]">{item.time}</span>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-3 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#1E3A5F]">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Contact us today for a free consultation. We'll help you 
            find the right suppliers and guide you through every step.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;