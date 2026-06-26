import { Link } from 'react-router-dom';
import { 
  FileText, 
  Users, 
  FlaskConical, 
  Factory, 
  Truck, 
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  TrendingUp
} from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: 'Submit Your Request',
      description: 'Share your product requirements, specifications, target pricing, and quantity needs through our inquiry form.',
      details: [
        'Product specifications and technical drawings',
        'Target price range',
        'Required quantity and delivery timeline',
        'Quality standards and certifications needed',
        'Any specific supplier requirements'
      ],
      timeline: '1-2 business days'
    },
    {
      number: 2,
      icon: Users,
      title: 'Supplier Matching',
      description: 'We identify and vet suitable suppliers from our verified network based on your criteria.',
      details: [
        'Match with 3-5 qualified suppliers',
        'Verify business credentials and licenses',
        'Assess production capacity and capabilities',
        'Check quality management systems',
        'Provide supplier comparison reports'
      ],
      timeline: '3-5 business days'
    },
    {
      number: 3,
      icon: FlaskConical,
      title: 'Sample Evaluation',
      description: 'You receive and evaluate product samples before committing to full production.',
      details: [
        'Coordinate sample production and shipping',
        'Provide sample tracking updates',
        'Assist with sample evaluation criteria',
        'Facilitate sample feedback to suppliers',
        'Negotiate sample costs and terms'
      ],
      timeline: '2-4 weeks'
    },
    {
      number: 4,
      icon: Factory,
      title: 'Order & Production',
      description: 'We manage the production process with regular quality checks and progress updates.',
      details: [
        'Negotiate pricing and payment terms',
        'Draft and review contracts',
        'Conduct during-production inspections',
        'Provide weekly progress updates',
        'Address any production issues'
      ],
      timeline: '4-8 weeks (varies by product)'
    },
    {
      number: 5,
      icon: Truck,
      title: 'Shipping & Delivery',
      description: 'Coordinate logistics from factory to your designated delivery address.',
      details: [
        'Coordinate freight forwarding',
        'Handle customs documentation',
        'Arrange consolidation if needed',
        'Track shipment in real-time',
        'Ensure smooth customs clearance'
      ],
      timeline: '2-6 weeks (varies by destination)'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Comprehensive verification and QC at every stage reduces the risk of problems.'
    },
    {
      icon: TrendingUp,
      title: 'Cost Efficiency',
      description: 'Our established relationships and volume buying power help negotiate better prices.'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'We handle all the legwork, freeing you to focus on your core business.'
    }
  ];

  const faqs = [
    {
      question: 'How long does the entire process take?',
      answer: 'The timeline varies based on product complexity and supplier availability. Typically, supplier matching takes 1-2 weeks, sample evaluation 2-4 weeks, and production 4-8 weeks depending on order size. Shipping adds 2-6 weeks depending on destination.'
    },
    {
      question: 'What information do I need to provide?',
      answer: 'To get started, we need your product specifications (or samples), target pricing, estimated quantity, delivery timeline, and any quality requirements or certifications needed. The more details you provide, the better we can match you with suitable suppliers.'
    },
    {
      question: 'Can I visit the factories?',
      answer: 'Absolutely. We can arrange factory visits for you and accompany you during the visit to facilitate communication. We can also provide detailed video tours and virtual inspections if travel is not possible.'
    },
    {
      question: 'What if the quality does not meet expectations?',
      answer: 'Our QC team conducts inspections at multiple stages of production. If issues are identified, we work with the supplier to implement corrective actions. We won\'t allow shipment of products that don\'t meet your specifications.'
    },
    {
      question: 'How do you handle payments?',
      answer: 'Payment terms are negotiated with suppliers and typically involve a deposit (30-50%) with the balance paid upon shipment or after QC approval. We can facilitate payments through secure methods and provide payment protection guidance.'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[var(--primary)] py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">How It Works</h1>
            <p className="text-xl text-gray-200">
              Our streamlined 5-step process makes China sourcing simple, transparent, and risk-free.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-white">
        <div className="container">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="card">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-3">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-[var(--secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-[var(--text-primary)] font-bold text-xl">{step.number}</span>
                      </div>
                      <div>
                        <step.icon className="w-6 h-6 text-[var(--primary)] mb-2" />
                        <h3 className="mb-1">{step.title}</h3>
                        <p className="text-xs text-[var(--text-muted)]">
                          <Clock className="w-3 h-3 inline mr-1" />
                          {step.timeline}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-[var(--text-secondary)] mb-4">{step.description}</p>
                  </div>
                  <div className="lg:col-span-4">
                    <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-3">Key Activities</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Benefits of Our Process</h2>
            <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
              Our systematic approach delivers measurable advantages for your sourcing operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h4 className="mb-2">{benefit.title}</h4>
                <p className="text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Process FAQs</h2>
            <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
              Common questions about our sourcing process.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h4 className="font-semibold mb-2">{faq.question}</h4>
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary)]">
        <div className="container text-center">
          <h2 className="text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Submit your sourcing request today and let us help you find the perfect suppliers in China.
          </p>
          <Link to="/contact" className="btn btn-cta text-lg px-8 py-4">
            Start Your Sourcing Request
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HowItWorksPage;