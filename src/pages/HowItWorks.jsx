import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Send, Search, FileText, Factory, ClipboardCheck, Truck, Package, MessageCircle, Clock, Shield } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Send,
    title: 'Submit Your Request',
    description: 'Start by telling us what you need. Provide product details, specifications, target price, quantity, and any special requirements.',
    details: [
      'Product description and specifications',
      'Target price range',
      'Estimated order quantity',
      'Required certifications',
      'Packaging requirements',
      'Timeline expectations',
    ],
    timeline: '1-2 days',
  },
  {
    number: 2,
    icon: Search,
    title: 'We Find & Verify Suppliers',
    description: 'Our team researches and identifies potential manufacturers, then conducts thorough verification to ensure legitimacy and capability.',
    details: [
      'Market research and supplier identification',
      'Business license verification',
      'Factory visit and capacity assessment',
      'Quality management system review',
      'Financial stability check',
      'Reference verification',
    ],
    timeline: '1-2 weeks',
  },
  {
    number: 3,
    icon: FileText,
    title: 'Review Supplier Options',
    description: 'Receive a detailed report with verified supplier options. We present the best matches based on your requirements.',
    details: [
      'Detailed supplier profiles',
      'Production capacity information',
      'Quality certifications',
      'Pricing and payment terms',
      'Factory photos and videos',
      'Comparison analysis',
    ],
    timeline: '2-3 days',
  },
  {
    number: 4,
    icon: Package,
    title: 'Sample Evaluation',
    description: 'We request samples from selected factories, conduct quality assessments, and provide detailed reports before you decide.',
    details: [
      'Sample request and follow-up',
      'Quality inspection and testing',
      'Detailed photo/video documentation',
      'Comparative analysis',
      'Shipping samples to you',
      'Technical feedback to factory',
    ],
    timeline: '2-4 weeks',
  },
  {
    number: 5,
    icon: Factory,
    title: 'Production Phase',
    description: 'Once you approve, we coordinate production with the selected factory and provide regular progress updates.',
    details: [
      'Order confirmation and contract',
      'Production schedule management',
      'Weekly progress updates',
      'Raw material quality checks',
      'Milestone verification',
      'Issue identification and resolution',
    ],
    timeline: '4-12 weeks',
  },
  {
    number: 6,
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Before shipment, our inspectors conduct thorough quality checks to ensure products meet your specifications.',
    details: [
      'Pre-shipment inspection (PSI)',
      'AQL-based sampling',
      'Functionality testing',
      'Packaging verification',
      'Photo/video documentation',
      'Detailed inspection report',
    ],
    timeline: '1-3 days',
  },
  {
    number: 7,
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle customs documentation, and ensure safe delivery to your specified location.',
    details: [
      'Freight booking and coordination',
      'Customs documentation',
      'Cargo tracking',
      'Insurance coordination',
      'Customs clearance handling',
      'Door-to-door delivery',
    ],
    timeline: '2-6 weeks',
  },
  {
    number: 8,
    icon: MessageCircle,
    title: 'Ongoing Support',
    description: 'Our relationship doesn\'t end at delivery. We provide ongoing support for reorders, issue resolution, and continuous improvement.',
    details: [
      'Post-delivery support',
      'Reorder facilitation',
      'Issue resolution',
      'Supplier relationship management',
      'Market intelligence',
      'Continuous improvement recommendations',
    ],
    timeline: 'Ongoing',
  },
];

const timeline = [
  { phase: 'Request & Research', weeks: '1-2' },
  { phase: 'Supplier Verification', weeks: '1-2' },
  { phase: 'Sample Evaluation', weeks: '2-4' },
  { phase: 'Production', weeks: '4-12' },
  { phase: 'Inspection & Shipping', weeks: '1-6' },
  { phase: 'Total Timeline', weeks: '9-36' },
];

const tips = [
  {
    title: 'Be Specific About Requirements',
    description: 'The more details you provide about your product, specifications, and expectations, the better we can match you with suitable suppliers.',
  },
  {
    title: 'Allow Adequate Timeline',
    description: 'Quality sourcing takes time. Rushing the process can lead to quality issues or supplier mismatches.',
  },
  {
    title: 'Request Samples First',
    description: 'Always evaluate samples before committing to full production. This is the best way to verify quality.',
  },
  {
    title: 'Communicate Openly',
    description: 'Maintain clear communication with our team. Share concerns early so we can address them proactively.',
  },
  {
    title: 'Trust the Process',
    description: 'Our verification process exists to protect you. While it may seem thorough, it prevents costly mistakes.',
  },
];

const HowItWorksPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F172A] via-[#1E3A5F] to-[#2D5A8A] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              How Our Sourcing Process Works
            </h1>
            <p className="text-lg text-[#CBD5E1] mb-8">
              A transparent, step-by-step approach designed to minimize risk and ensure successful outcomes. From request to delivery, we're with you at every stage.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
            >
              Start Your Sourcing Request
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4">
              Step-by-Step Sourcing Process
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Our proven 8-step process ensures thoroughness at every stage
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#1E3A5F] text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    <div className="w-16 h-16 bg-[#F97316]/10 rounded-xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-[#F97316]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-[#64748B] mb-6">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#1E3A5F]">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">Timeline: {step.timeline}</span>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-[#F8FAFC] rounded-xl p-6 border border-slate-200">
                    <h4 className="font-semibold text-[#1E293B] mb-4">What Happens:</h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                          <span className="text-[#64748B] text-sm">{detail}</span>
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

      {/* Timeline Overview */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4">
              Typical Timeline Overview
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              While timelines vary by product complexity, here's what to expect
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-[#1E293B]">Phase</th>
                  <th className="text-left py-4 px-4 font-semibold text-[#1E293B]">Estimated Duration</th>
                  <th className="text-left py-4 px-4 font-semibold text-[#1E293B]">Notes</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((item, index) => (
                  <tr key={index} className="border-b border-slate-100">
                    <td className={`py-4 px-4 font-medium ${index === timeline.length - 1 ? 'text-[#F97316]' : 'text-[#1E293B]'}`}>
                      {item.phase}
                    </td>
                    <td className="py-4 px-4 text-[#64748B]">{item.weeks} weeks</td>
                    <td className="py-4 px-4 text-[#64748B] text-sm">
                      {index === 0 && 'Initial request and supplier search'}
                      {index === 1 && 'Factory verification and assessment'}
                      {index === 2 && 'Sample production and evaluation'}
                      {index === 3 && 'Depends on order quantity'}
                      {index === 4 && 'Varies by shipping method'}
                      {index === 5 && 'From request to delivery'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4">
              Tips for Successful Sourcing
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Get the most out of our sourcing process with these best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] rounded-xl p-6 border border-slate-200"
              >
                <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-[#1E3A5F]" />
                </div>
                <h3 className="font-semibold text-[#1E293B] mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-[#64748B]">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[#94A3B8] mb-8">
            Submit your sourcing request today and let our team find the perfect suppliers for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
          >
            Submit Your Request
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;