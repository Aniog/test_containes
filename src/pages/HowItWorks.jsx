import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, ClipboardCheck, Truck, ArrowRight, CheckCircle2, Clock, FileText, Phone, Mail, Globe } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    desc: 'Start by telling us what you need. Share product specifications, target pricing, order quantity, and any special requirements through our inquiry form or by contacting us directly.',
    details: [
      'Product description and specifications',
      'Target price range and order quantity',
      'Required certifications or compliance standards',
      'Preferred delivery timeline',
    ],
    timeframe: 'Response within 24 hours',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Verification',
    desc: 'Our team researches the market, identifies suitable suppliers from our vetted network, and conducts on-site factory audits to verify their credentials and capabilities.',
    details: [
      'Market research across manufacturing hubs',
      'Supplier shortlisting and RFQ comparison',
      'On-site factory audit and license verification',
      'Detailed supplier report delivered to you',
    ],
    timeframe: '5–7 business days',
  },
  {
    num: '03',
    icon: FileText,
    title: 'Samples & Negotiation',
    desc: 'We arrange product samples from your chosen supplier(s), help you evaluate quality, and negotiate pricing, payment terms, and production timelines on your behalf.',
    details: [
      'Sample collection from shortlisted suppliers',
      'Consolidated sample shipment to your location',
      'Price and terms negotiation',
      'Order confirmation and contract support',
    ],
    timeframe: '1–2 weeks',
  },
  {
    num: '04',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    desc: 'Once production begins, we monitor progress, conduct in-line quality checks, and keep you updated with regular reports including photos and videos.',
    details: [
      'Production timeline monitoring',
      'In-line quality inspections',
      'Weekly progress reports with photos',
      'Issue identification and resolution',
    ],
    timeframe: 'Varies by product (2–8 weeks)',
  },
  {
    num: '05',
    icon: Truck,
    title: 'Final Inspection & Shipping',
    desc: 'Before shipping, we conduct a thorough pre-shipment inspection using AQL sampling standards. Then we coordinate the entire logistics chain to deliver goods to your door.',
    details: [
      'Pre-shipment inspection (AQL standards)',
      'Packing and labeling verification',
      'Freight booking (sea, air, or express)',
      'Customs documentation and delivery coordination',
    ],
    timeframe: '1–6 weeks depending on method',
  },
];

const HowItWorks = () => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-white/10 text-white/90 text-sm font-semibold rounded-full mb-4">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">How It Works</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">A clear, structured process that takes you from product idea to delivered goods. Every step is transparent and trackable.</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-16">
              {steps.map((step, i) => (
                <div key={step.num} className="relative pl-16 md:pl-20">
                  {/* Step number circle */}
                  <div className="absolute left-0 w-12 h-12 md:w-16 md:h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-extrabold text-lg md:text-xl">{step.num}</span>
                  </div>

                  <div className="bg-surface-alt border border-border rounded-2xl p-7 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text mb-1">{step.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-text-muted">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{step.timeframe}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-5">{step.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((d) => (
                        <div key={d} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span className="text-xs text-text-secondary">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Stay Informed at Every Step</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: 'Regular Updates', desc: 'Weekly status reports via email with photos, timelines, and any issues flagged for your attention.' },
              { icon: Mail, title: 'Direct Communication', desc: 'Your dedicated account manager is available via email, WhatsApp, and video calls.' },
              { icon: Globe, title: 'Bilingual Support', desc: 'Our team speaks English and Chinese fluently, eliminating language barriers with suppliers.' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-text mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">The first step is simple — tell us what you need and we'll take it from there.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold rounded-xl transition-colors no-underline shadow-lg">
            Submit Your Requirements <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
