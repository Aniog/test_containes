import { Link } from 'react-router-dom';
import { ArrowRight, Search, FileText, Package, Truck, CheckCircle, MessageCircle, Calendar, CreditCard } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Submit Your Sourcing Request',
      description: 'Tell us what you need. Provide product specifications, quantity, target price, quality requirements, and delivery timeline.',
      details: [
        'Product description and specifications',
        'Target price range',
        'Order quantity (MOQ acceptable)',
        'Quality standards required',
        'Packaging requirements',
        'Target delivery date'
      ]
    },
    {
      number: '02',
      icon: FileText,
      title: 'We Research & Vet Suppliers',
      description: 'Our team researches potential suppliers, conducts factory visits, and presents you with 3-5 qualified candidates.',
      details: [
        'Market research and supplier identification',
        'Factory verification visits',
        'Capability and capacity assessment',
        'Price comparison analysis',
        'Background and reference checks',
        'Detailed supplier profiles'
      ]
    },
    {
      number: '03',
      icon: Package,
      title: 'Sample Evaluation & Negotiation',
      description: 'We coordinate samples, negotiate terms, and help you select the best supplier for your needs.',
      details: [
        'Sample coordination and shipping',
        'Technical specification review',
        'Price and payment term negotiation',
        'Contract review and drafting',
        'MOQ clarification',
        'Production timeline agreement'
      ]
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Production & Quality Control',
      description: 'We monitor production, conduct inspections, and ensure quality standards are met throughout the process.',
      details: [
        'Regular production progress updates',
        'Quality control inspections',
        'Issue identification and resolution',
        'Production timeline management',
        'Pre-shipment verification',
        'Final inspection before shipping'
      ]
    },
    {
      number: '05',
      icon: Truck,
      title: 'Shipping & Delivery',
      description: 'We coordinate shipping, handle customs, and ensure your products arrive safely at your doorstep.',
      details: [
        'Freight forwarding coordination',
        'Customs documentation preparation',
        'Loading supervision',
        'Shipment tracking',
        'Customs clearance assistance',
        'Door-to-door delivery option'
      ]
    }
  ];

  const timeline = [
    { phase: 'Week 1-2', activity: 'Supplier research and verification' },
    { phase: 'Week 2-3', activity: 'Sample evaluation and supplier selection' },
    { phase: 'Week 3-4', activity: 'Contract signing and production start' },
    { phase: 'Week 4-6', activity: 'Production monitoring and QC inspections' },
    { phase: 'Week 6-8', activity: 'Shipping and delivery' }
  ];

  const pricing = [
    {
      title: 'Basic Sourcing',
      price: 'From $500',
      description: 'For simple sourcing needs',
      features: [
        'Supplier matching (up to 3 suppliers)',
        'Basic factory verification',
        'Sample coordination',
        'Email support'
      ]
    },
    {
      title: 'Standard Sourcing',
      price: 'From $1,500',
      description: 'For comprehensive sourcing projects',
      features: [
        'Supplier matching (up to 5 suppliers)',
        'Full factory verification',
        'Sample coordination & evaluation',
        'Production follow-up',
        '1 QC inspection included',
        'Priority support'
      ],
      popular: true
    },
    {
      title: 'Premium Sourcing',
      price: 'From $3,000',
      description: 'For large orders and complex projects',
      features: [
        'Unlimited supplier matching',
        'Comprehensive factory audit',
        'Full production monitoring',
        'Multiple QC inspections',
        'Shipping coordination',
        'Dedicated account manager',
        '24/7 priority support'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Our 5-step sourcing process makes it easy to find and work with 
            reliable Chinese suppliers
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    <span className="text-5xl font-bold text-blue-100 mr-4">{step.number}</span>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-blue-900" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gray-50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
                    <step.icon className="w-20 h-20 text-blue-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Typical Timeline</h2>
            <p className="text-gray-600">From request to delivery - approximately 6-8 weeks</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center py-4">
                <div className="w-32 flex-shrink-0">
                  <span className="text-blue-900 font-semibold">{item.phase}</span>
                </div>
                <div className="flex-1 border-t-2 border-gray-200 relative">
                  <div className="absolute -top-2 left-0 w-4 h-4 bg-blue-900 rounded-full"></div>
                </div>
                <div className="flex-1 pl-4">
                  <span className="text-gray-600">{item.activity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600">Choose the package that fits your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 border-2 ${plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold text-blue-900 mb-2">{plan.price}</div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your sourcing needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;