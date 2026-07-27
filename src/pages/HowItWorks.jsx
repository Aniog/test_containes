import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Search, 
  FileText, 
  Factory, 
  ClipboardCheck, 
  Package, 
  Truck,
  Clock,
  Shield,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what you need: product specifications, quantity, target price, and any special requirements. The more details you provide, the better we can match you with suitable suppliers.',
      details: [
        'Product specifications and technical drawings',
        'Target price range and budget',
        'Order quantity and timeline',
        'Quality standards and certifications',
        'Packaging and labeling requirements',
        'Shipping destination and method'
      ],
      icon: FileText
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'We research and vet manufacturers in our extensive network. You receive a shortlist of 3-5 qualified suppliers with detailed profiles including capabilities, certifications, and past performance.',
      details: [
        'Supplier capability assessment',
        'Certification and license verification',
        'Production capacity analysis',
        'Quality track record review',
        'Financial stability check',
        'Customer references'
      ],
      icon: Search
    },
    {
      number: '03',
      title: 'We Verify & Audit',
      description: 'We conduct factory visits, verify credentials, and assess production capabilities. You get a detailed audit report with photos and video, so you can make an informed decision.',
      details: [
        'On-site factory inspection',
        'Production line assessment',
        'Quality management system review',
        'Worker conditions evaluation',
        'Capacity verification',
        'Detailed audit report'
      ],
      icon: Factory
    },
    {
      number: '04',
      title: 'Sample & Negotiation',
      description: 'We request samples from selected factories, evaluate them against your specifications, and negotiate terms. We ensure you get the best price and conditions.',
      details: [
        'Sample request and tracking',
        'Sample evaluation report',
        'Price negotiation',
        'Payment terms negotiation',
        'Lead time confirmation',
        'Contract review assistance'
      ],
      icon: ClipboardCheck
    },
    {
      number: '05',
      title: 'Production Monitoring',
      description: 'During production, we provide regular updates with photos and videos. We monitor progress, address issues early, and ensure quality standards are maintained.',
      details: [
        'Weekly progress reports',
        'Inline quality inspections',
        'Issue identification and resolution',
        'Production milestone tracking',
        'Timeline management',
        'Supplier coordination'
      ],
      icon: Package
    },
    {
      number: '06',
      title: 'Final Inspection & Shipping',
      description: 'Before shipment, we conduct final inspection according to AQL standards. We then coordinate shipping, customs clearance, and documentation for smooth delivery.',
      details: [
        'Pre-shipment inspection',
        'Packaging verification',
        'Freight forwarding',
        'Customs clearance',
        'Documentation handling',
        'Door-to-door delivery'
      ],
      icon: Truck
    }
  ];

  const timeline = [
    { phase: 'Week 1-2', activity: 'Supplier research and shortlisting' },
    { phase: 'Week 2-3', activity: 'Factory verification and audit' },
    { phase: 'Week 3-4', activity: 'Sample request and evaluation' },
    { phase: 'Week 4-5', activity: 'Negotiation and contract' },
    { phase: 'Week 5+', activity: 'Production and monitoring' },
    { phase: 'Final', activity: 'Inspection and shipping' }
  ];

  const faqs = [
    {
      question: 'How long does the entire process take?',
      answer: 'The timeline varies based on product complexity and order size. Typically: 1-2 weeks for supplier shortlist, 1-2 weeks for factory verification, 2-4 weeks for samples, and 4-12 weeks for production. We\'ll provide a detailed timeline during our initial consultation.'
    },
    {
      question: 'Can I choose which factories to work with?',
      answer: 'Absolutely. We present you with options and you make the final decision. We provide detailed information about each supplier so you can compare and choose based on your priorities (price, quality, capacity, location).'
    },
    {
      question: 'What happens if quality issues arise?',
      answer: 'Our inspection reports document pre-shipment condition. If issues arise after delivery, we assist with supplier negotiation, claims processing, and corrective action plans. We also help implement quality improvements for future orders.'
    },
    {
      question: 'Do I need to visit China?',
      answer: 'Not at all. While factory visits can be valuable, our team handles all on-site activities on your behalf. We provide detailed reports, photos, and videos. If you do want to visit, we can arrange and accompany you.'
    },
    {
      question: 'How do you charge for your services?',
      answer: 'We offer flexible pricing: commission-based (percentage of order value), fixed project fee, or monthly retainer for ongoing sourcing. We provide transparent quotes upfront with no hidden fees.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              How It Works
            </h1>
            <p className="text-xl text-gray-200">
              Our proven 6-step process ensures you find verified suppliers, maintain quality control, and get products delivered on time.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section">
        <div className="container">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[var(--secondary)] rounded-full flex items-center justify-center">
                      <step.icon className="text-white" size={24} />
                    </div>
                    <span className="text-4xl font-bold text-[var(--secondary)] opacity-30">{step.number}</span>
                  </div>
                  <h2 className="mb-4">{step.title}</h2>
                  <p className="text-lg text-[var(--text-secondary)] mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-[var(--accent)] flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-[var(--bg-secondary)] rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-white rounded-lg flex items-center justify-center border border-[var(--border)]">
                    <div className="text-center p-8">
                      <step.icon className="text-[var(--primary)] mx-auto mb-4" size={64} />
                      <p className="text-[var(--text-secondary)]">Process visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Typical Timeline</h2>
            <p className="max-w-2xl mx-auto text-lg">
              While timelines vary by project, here's a general overview of what to expect.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--border)]"></div>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className="w-16 h-16 bg-white border-2 border-[var(--primary)] rounded-full flex items-center justify-center z-10 flex-shrink-0">
                      <span className="text-sm font-semibold text-[var(--primary)]">{item.phase}</span>
                    </div>
                    <div className="pt-2">
                      <p className="font-medium">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">What You Get</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Throughout the process, you receive detailed reports and documentation for complete transparency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: 'Supplier Reports', desc: 'Detailed profiles of verified suppliers with capabilities and certifications' },
              { icon: Factory, title: 'Factory Audits', desc: 'Comprehensive audit reports with photos, videos, and assessment scores' },
              { icon: ClipboardCheck, title: 'Inspection Reports', desc: 'AQL-based inspection reports with detailed findings and photos' },
              { icon: Package, title: 'Production Updates', desc: 'Regular progress reports with photos and videos from the factory floor' },
              { icon: Truck, title: 'Shipping Documents', desc: 'Complete documentation for customs clearance and logistics' },
              { icon: Shield, title: 'Quality Guarantee', desc: 'Our commitment to quality with inspection and remediation support' }
            ].map((item, index) => (
              <div key={index} className="card flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-[var(--primary)]" size={24} />
                </div>
                <div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Common questions about our sourcing process.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="mb-3">{faq.question}</h3>
                <p className="text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="bg-[var(--bg-secondary)] rounded-2xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-4">Ready to Start Sourcing?</h2>
                <p className="text-lg text-[var(--text-secondary)] mb-6">
                  Get in touch with us today. We'll discuss your requirements and create a tailored sourcing plan.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-[var(--primary)]" size={20} />
                    <span>+86 755 8888 8888</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[var(--primary)]" size={20} />
                    <span>info@ssourcing-china.com</span>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <Link to="/contact" className="btn btn-primary inline-flex items-center gap-2">
                  Get a Free Quote <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;