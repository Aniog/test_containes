import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Clock, Shield, FileText, 
  Truck, MessageCircle, Phone, Mail
} from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Submit Your Inquiry',
    description: 'Tell us what you need',
    details: 'Fill out our inquiry form with details about your product requirements, including specifications, quantity, target price, and any other relevant information. The more details you provide, the better we can match you with suitable suppliers.',
    timeline: '5 minutes',
    icon: FileText
  },
  {
    number: 2,
    title: 'Supplier Matching',
    description: 'We find and vet options',
    details: 'Our team searches our extensive database of verified manufacturers and conducts outreach to potential suppliers. We perform initial screening to ensure they meet your requirements in terms of capability, quality standards, and pricing.',
    timeline: '3-7 days',
    icon: Shield
  },
  {
    number: 3,
    title: 'Supplier Evaluation',
    description: 'You choose the best fit',
    details: 'We present you with detailed profiles of 3-5 qualified suppliers, including their capabilities, certifications, past performance, and customer reviews. We can arrange video calls or factory visits to help you make an informed decision.',
    timeline: '2-3 days',
    icon: MessageCircle
  },
  {
    number: 4,
    title: 'Negotiation & Samples',
    description: 'Price, terms, and samples',
    details: 'We negotiate on your behalf to secure the best prices and terms. We coordinate sample requests, facilitate testing, and manage the approval process to ensure the samples meet your specifications before moving to production.',
    timeline: '1-3 weeks',
    icon: FileText
  },
  {
    number: 5,
    title: 'Production Monitoring',
    description: 'Regular quality checks',
    details: 'During production, we conduct regular factory visits and provide progress updates. We perform quality inspections at key stages to ensure everything is on track and address any issues promptly.',
    timeline: '2-8 weeks',
    icon: Clock
  },
  {
    number: 6,
    title: 'Pre-Shipment Inspection',
    description: 'Final quality verification',
    details: 'Before shipment, our QC team conducts a comprehensive pre-shipment inspection following AQL standards. We verify quantity, packaging, labeling, and randomly sample products for quality assessment.',
    timeline: '1-2 days',
    icon: Shield
  },
  {
    number: 7,
    title: 'Shipping & Delivery',
    description: 'From factory to your door',
    details: 'We coordinate the entire shipping process, including freight forwarding, customs clearance, and documentation. We provide tracking information and ensure your goods arrive safely and on time.',
    timeline: '2-6 weeks',
    icon: Truck
  }
];

const timeline = [
  { phase: 'Inquiry & Matching', duration: '1 week' },
  { phase: 'Evaluation & Negotiation', duration: '2-3 weeks' },
  { phase: 'Production', duration: '2-8 weeks' },
  { phase: 'Inspection & Shipping', duration: '1-6 weeks' },
  { phase: 'Total', duration: '4-18 weeks' }
];

const faqItems = [
  {
    question: "How long does the entire sourcing process take?",
    answer: "The timeline varies based on product complexity and customization needs. Typically, the full process ranges from 4-18 weeks. Simple products with established suppliers can be completed in 4-6 weeks, while custom products requiring tooling may take 12-18 weeks."
  },
  {
    question: "What information do I need to provide in my inquiry?",
    answer: "To help us find the right suppliers, please provide: product description/specifications, estimated order quantity, target price range, required certifications, packaging requirements, and any other specific requirements. Photos or technical drawings are extremely helpful."
  },
  {
    question: "How many suppliers will you present?",
    answer: "We typically present 3-5 qualified suppliers for each product category. This gives you enough options to compare while not overwhelming you with choices. You can request more options if needed."
  },
  {
    question: "Can I visit factories before placing an order?",
    answer: "Absolutely! We can arrange factory visits for you. If you're unable to travel, our team can visit on your behalf and provide detailed reports with photos and videos. We can also facilitate video calls with suppliers."
  },
  {
    question: "What happens if I'm not satisfied with the samples?",
    answer: "We work with the supplier to address any issues and request revisions. This process continues until the samples meet your specifications. We'll provide detailed feedback and coordinate all communication with the factory."
  },
  {
    question: "How do you ensure quality during production?",
    answer: "We offer multiple inspection points: pre-production inspection (to verify materials and tooling), during-production inspection (to check progress and quality), and pre-shipment inspection (final quality verification). Each includes detailed reports with photos."
  },
  {
    question: "What shipping options are available?",
    answer: "We offer various shipping methods including sea freight (cost-effective for large orders), air freight (faster for samples or urgent orders), and express courier (DHL, FedEx, etc.). We recommend the best option based on your budget and timeline."
  },
  {
    question: "What if there are quality issues after delivery?",
    answer: "We document everything thoroughly during production and inspection to minimize issues. If problems arise, we act as your advocate with the supplier. We document the issues, negotiate solutions, and ensure appropriate remedies whether replacement, repair, or compensation."
  }
];

export default function HowItWorks() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
            <p className="text-xl text-gray-200">
              Our proven 7-step process ensures a smooth, transparent sourcing 
              experience from start to finish
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-background">
        <div className="container">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className={`flex gap-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <step.icon className="w-5 h-5 text-primary" />
                        <span className="text-sm text-primary font-medium">{step.timeline}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                      <p className="text-gray-600">{step.details}</p>
                    </div>
                  </div>
                  <div className={`hidden lg:block ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
                      <div className="h-full flex flex-col items-center justify-center text-center">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <step.icon className="w-12 h-12 text-primary" />
                        </div>
                        <p className="text-gray-500">Step {step.number} of 7</p>
                      </div>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-200 lg:left-1/2 lg:-translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Typical Timeline</h2>
          <p className="section-subtitle">
            An overview of the sourcing process duration
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-5 gap-4">
              {timeline.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary text-white py-4 px-2 rounded-t-lg">
                    <p className="font-semibold text-sm">{item.phase}</p>
                  </div>
                  <div className="bg-gray-100 py-3 px-2 rounded-b-lg">
                    <p className="text-primary font-bold">{item.duration}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-6">
              * Timelines are estimates and may vary based on product complexity and supplier availability
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">Why Our Process Works</h2>
          <p className="section-subtitle">
            What sets our sourcing process apart
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Suppliers</h3>
              <p className="text-gray-600">
                Every supplier in our network undergoes rigorous verification including factory audits, 
                business license checks, and capability assessments.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                Our multi-stage inspection process ensures quality at every step, from material 
                verification to final pre-shipment checks.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
              <p className="text-gray-600">
                From the first inquiry to final delivery, we handle all the details so you can 
                focus on your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Common questions about our sourcing process
          </p>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-lg">{item.question}</span>
                  {openFaq === index ? (
                    <ArrowRight className="w-5 h-5 text-gray-500 rotate-90 flex-shrink-0" />
                  ) : (
                    <ArrowRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Sourcing Journey?
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Get a free consultation and quote within 24 hours. No obligation, 
                100% confidential.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Detailed supplier recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Transparent pricing</span>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <Link
                to="/contact"
                className="btn-primary text-center text-lg py-4"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+862112345678"
                className="btn-secondary border-white text-white text-center text-lg py-4 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us: +86 21 1234 5678
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}