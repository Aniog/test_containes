import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileCheck, Package, Truck, CheckCircle, MessageSquare, Building2, FileText, BarChart3, ArrowRight, Clock, Shield, Users, DollarSign } from 'lucide-react';
import Hero from '../components/sections/Hero';
import FAQ from '../components/sections/FAQ';
import InquiryForm from '../components/sections/InquiryForm';
import SectionHeader from '../components/sections/SectionHeader';

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Initial Consultation",
    description: "Share your product requirements, specifications, target pricing, and quality standards. We listen carefully to understand your needs.",
    duration: "Day 1",
    deliverables: ["Detailed requirements document", "Initial supplier shortlist", "Timeline estimate"]
  },
  {
    icon: Search,
    step: "02",
    title: "Supplier Research",
    description: "We identify potential manufacturers through our network, trade databases, and industry contacts. Each candidate undergoes initial screening.",
    duration: "Days 2-7",
    deliverables: ["Supplier comparison matrix", "Background check reports", "Capacity estimates"]
  },
  {
    icon: Building2,
    step: "03",
    title: "Factory Verification",
    description: "Our team visits each shortlisted factory to verify legitimacy, assess capabilities, and document conditions through photos and video.",
    duration: "Days 8-14",
    deliverables: ["Verification reports", "Factory photos/videos", "Capability assessment", "Risk evaluation"]
  },
  {
    icon: Package,
    step: "04",
    title: "Sample & Negotiation",
    description: "We coordinate samples, facilitate discussions, and help negotiate terms. You'll receive detailed samples for your approval before production begins.",
    duration: "Days 15-30",
    deliverables: ["Product samples", "Price quotations", "Sample evaluation report", "MOQ details"]
  },
  {
    icon: BarChart3,
    step: "05",
    title: "Production Planning",
    description: "Once samples are approved, we finalize production schedules, quality specifications, and inspection checkpoints.",
    duration: "Days 31-35",
    deliverables: ["Production schedule", "Quality control plan", "Inspection protocol", "Shipping timeline"]
  },
  {
    icon: FileText,
    step: "06",
    title: "Production & QC",
    description: "Regular production monitoring with scheduled inspections at key stages. We keep you updated with progress reports and address any issues immediately.",
    duration: "Days 36-75",
    deliverables: ["Weekly progress reports", "Inspection reports", "Issue logs", "Photo documentation"]
  },
  {
    icon: Truck,
    step: "07",
    title: "Shipping & Delivery",
    description: "We coordinate all logistics, documentation, and customs procedures to ensure smooth delivery to your destination.",
    duration: "Days 76-90",
    deliverables: ["Shipping documents", "Tracking information", "Customs clearance", "Delivery confirmation"]
  }
];

const HowItWorks = () => {
  return (
    <div>
      <Hero
        title="How It Works"
        subtitle="Our transparent, step-by-step process takes you from initial inquiry to final delivery with clear milestones at every stage."
        ctaText="Start Your Project"
        secondaryCta="View Services"
        secondaryLink="/services"
        showTrust={false}
      />
      
      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <Clock size={16} />
                      <span className="text-sm">{step.duration}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{step.title}</h2>
                  <p className="text-text-secondary mb-6">{step.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-3">What you receive:</h4>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-success flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`bg-bg-alt rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                    <step.icon size={80} className="text-primary/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section-padding bg-bg-alt">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Why Work With Us"
            title="What Sets Us Apart"
            subtitle="Our process is designed to minimize risks and maximize transparency at every step."
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Risk Mitigation",
                description: "Comprehensive verification reduces the risk of working with unreliable suppliers."
              },
              {
                icon: Users,
                title: "Direct Communication",
                description: "You have direct access to our team. No language barriers or middlemen."
              },
              {
                icon: DollarSign,
                title: "Cost Transparency",
                description: "Clear pricing with no hidden fees. You know exactly what you're paying for."
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                description: "Our production monitoring ensures your orders ship on schedule."
              }
            ].map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <FAQ 
        eyebrow="Process Questions"
        title="Frequently Asked Questions"
        subtitle="Common questions about our sourcing process."
        faqs={[
          {
            question: "How long does the complete sourcing process take?",
            answer: "Timeline varies based on product complexity. Simple products typically take 6-10 weeks from inquiry to delivery. Custom or complex products may take 10-16 weeks. We provide estimated timelines during the consultation phase."
          },
          {
            question: "Can I visit factories with your team?",
            answer: "Yes, we can arrange factory visits and accompany you during the visit. This is often valuable for establishing relationships and building confidence in your selected supplier."
          },
          {
            question: "What if I'm not satisfied with a factory?",
            answer: "We present multiple verified options so you can choose. If issues arise during production, we work to resolve them or help you transition to an alternative supplier if necessary."
          },
          {
            question: "How do you handle quality issues during production?",
            answer: "Our inspectors identify issues immediately and work with the factory on corrective actions. We provide detailed reports and photographic evidence. Major issues are escalated to you for decisions."
          },
          {
            question: "What's the minimum order quantity you work with?",
            answer: "We work with various MOQs depending on the product and factory. Generally, MOQs range from 500-2000 units per order. We can discuss options based on your specific requirements."
          }
        ]}
      />
      
      <InquiryForm />
    </div>
  );
};

export default HowItWorks;
