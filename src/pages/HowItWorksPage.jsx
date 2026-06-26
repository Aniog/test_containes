import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  Search, 
  Handshake, 
  Factory, 
  ClipboardCheck, 
  Truck,
  Clock,
  MessageCircle,
  Shield,
  Globe
} from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      step: 1,
      icon: FileText,
      title: 'Submit Your Request',
      description: 'Tell us what you need. Provide product specifications, quantity requirements, target price range, quality standards, and your timeline.',
      details: [
        'Product specifications and technical drawings',
        'Quantity and packaging requirements',
        'Target price per unit (FOB or EXW)',
        'Quality standards and certifications needed',
        'Delivery timeline and destination',
      ],
      timeline: '1-2 business days',
    },
    {
      step: 2,
      icon: Search,
      title: 'Supplier Matching',
      description: 'We identify and evaluate suitable factories from our verified network. Each supplier is thoroughly vetted before presentation.',
      details: [
        'Access to 10,000+ verified suppliers',
        'Factory verification and background checks',
        'Production capacity assessment',
        'Price and MOQ comparison',
        'Shortlist of 3-5 best-matched suppliers',
      ],
      timeline: '5-7 business days',
    },
    {
      step: 3,
      icon: Handshake,
      title: 'Supplier Selection',
      description: 'Review our curated supplier options. We facilitate communication, negotiate terms, and help you make an informed decision.',
      details: [
        'Detailed supplier profiles and capabilities',
        'Sample requests and evaluations',
        'Price and payment term negotiation',
        'Contract review and assistance',
        'Factory visit coordination if needed',
      ],
      timeline: '2-4 weeks',
    },
    {
      step: 4,
      icon: Factory,
      title: 'Production Phase',
      description: 'Once you confirm a supplier, we monitor production closely. Regular updates keep you informed of progress and any issues.',
      details: [
        'Weekly production progress reports',
        'Quality monitoring at key stages',
        'Timeline tracking and management',
        'Issue identification and resolution',
        'Sample approval for mass production',
      ],
      timeline: '4-12 weeks (depending on order size)',
    },
    {
      step: 5,
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Our professional QC team performs thorough inspections to ensure products meet your specifications before shipment.',
      details: [
        'Pre-production material verification',
        'In-process quality checks',
        'Pre-shipment final inspection',
        'AQL-based sampling methodology',
        'Detailed inspection reports with photos',
      ],
      timeline: '2-5 business days',
    },
    {
      step: 6,
      icon: Truck,
      title: 'Shipping & Delivery',
      description: 'We coordinate all logistics from factory to your door, handling documentation and customs clearance.',
      details: [
        'Freight booking and coordination',
        'Customs documentation preparation',
        'Container loading supervision',
        'Real-time shipment tracking',
        'Door-to-door delivery option',
      ],
      timeline: '2-6 weeks (depending on destination)',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Our verification and inspection services significantly reduce risks associated with sourcing from China.',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Skip months of supplier search and verification. We streamline the entire process for you.',
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'We bridge cultural and language gaps, ensuring smooth communication and compliance.',
    },
    {
      icon: MessageCircle,
      title: 'Ongoing Support',
      description: 'We remain available for any questions or issues even after delivery is complete.',
    },
  ];

  const timeline = [
    { phase: 'Request & Matching', duration: '1-2 weeks' },
    { phase: 'Sample & Negotiation', duration: '2-4 weeks' },
    { phase: 'Production', duration: '4-12 weeks' },
    { phase: 'Inspection & Shipping', duration: '2-6 weeks' },
    { phase: 'Total Timeline', duration: '9-24 weeks' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-gray-200">
              Our proven 6-step process ensures smooth, reliable sourcing from China. From request to delivery, we're with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-[var(--color-background)]">
        <div className="container">
          <div className="space-y-8">
            {steps.map((item, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Step Number & Icon */}
                  <div className="lg:col-span-2 bg-[var(--color-primary)] p-8 flex flex-col items-center justify-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold mb-1">Step {item.step}</div>
                    <div className="text-sm text-gray-300 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.timeline}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-10 p-8">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-[var(--color-text-secondary)] mb-6">
                      {item.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                          <span className="text-[var(--color-text-secondary)] text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Typical Project Timeline</h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              While timelines vary based on product complexity and order size, here's a general overview
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={`p-6 text-center ${index < timeline.length - 1 ? 'border-b md:border-b-0 md:border-r border-[var(--color-border)]' : ''}`}
                  >
                    <div className="text-sm text-[var(--color-text-muted)] mb-2">{item.phase}</div>
                    <div className="text-lg font-semibold text-[var(--color-primary)]">{item.duration}</div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-[var(--color-text-muted)] mt-4 text-sm">
              * Timeline varies based on product complexity, order quantity, and supplier availability
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-[var(--color-background)]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Process Works</h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Our systematic approach delivers consistent results for businesses sourcing from China
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Answers to frequently asked questions about our process
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="font-semibold mb-2">Can I visit factories myself?</h4>
              <p className="text-[var(--color-text-secondary)]">
                Absolutely. We can coordinate and accompany you on factory visits. Our team will help translate, take notes, and ensure you get the most out of your visit.
              </p>
            </div>
            <div className="card p-6">
              <h4 className="font-semibold mb-2">What if I'm not satisfied with the suppliers you recommend?</h4>
              <p className="text-[var(--color-text-secondary)]">
                We present multiple options and encourage you to evaluate all of them. If none meet your requirements, we'll continue searching until we find the right match.
              </p>
            </div>
            <div className="card p-6">
              <h4 className="font-semibold mb-2">How do you ensure quality?</h4>
              <p className="text-[var(--color-text-secondary)]">
                We offer quality inspections at multiple stages: pre-production, during production, and pre-shipment. Our inspectors use AQL standards and provide detailed reports with photos.
              </p>
            </div>
            <div className="card p-6">
              <h4 className="font-semibold mb-2">What happens if there are quality issues?</h4>
              <p className="text-[var(--color-text-secondary)]">
                If quality issues are found during inspection, we work with the factory to address them before shipment. We document all issues and negotiate solutions on your behalf.
              </p>
            </div>
            <div className="card p-6">
              <h4 className="font-semibold mb-2">Do you handle small orders?</h4>
              <p className="text-[var(--color-text-secondary)]">
                Yes, we work with businesses of all sizes. While some suppliers have minimum order requirements, we help find options that work for your volume needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Sourcing Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Submit your requirements today and let us help you find the right suppliers in China.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-secondary)] text-white px-10 py-4 rounded font-semibold text-lg hover:bg-[#9b2c2c] transition-colors"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;