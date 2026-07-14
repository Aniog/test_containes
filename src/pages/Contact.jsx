import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import InquiryForm from '../components/home/InquiryForm';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ssourcing.cn',
    href: 'mailto:info@ssourcing.cn',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+86 20 XXXX XXXX',
    href: 'tel:+8620XXXXXXXX',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Guangzhou, Guangdong, China',
    href: null,
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 business hours',
    href: null,
  },
];

export default function Contact() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-2">Get in Touch</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Ready to start sourcing? Submit your inquiry below and our team will respond within 24 hours with a tailored plan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-neutral-900 text-2xl font-bold mb-2">Get a Free Sourcing Quote</h2>
                <p className="text-neutral-500 text-base leading-relaxed">
                  Tell us what you need to source. We'll review your requirements and send you a free plan with qualified supplier options — no commitment required.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand-blue" />
                      </div>
                      <div>
                        <div className="text-neutral-500 text-xs font-medium uppercase tracking-wider">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-neutral-900 text-sm font-medium hover:text-brand-blue transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-neutral-900 text-sm font-medium">{item.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-brand-navy rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-brand-sky" />
                  <span className="text-white font-semibold text-sm">WeChat & WhatsApp</span>
                </div>
                <p className="text-blue-200 text-sm">
                  Prefer messaging? Reach us on WeChat or WhatsApp for faster communication during business hours (GMT+8).
                </p>
              </div>

              <div className="bg-neutral-100 rounded-xl p-5">
                <h3 className="text-neutral-900 font-semibold text-sm mb-2">What happens after you submit?</h3>
                <ol className="space-y-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send a free sourcing plan with supplier options',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-600 text-sm">
                      <span className="w-5 h-5 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2 bg-white border border-neutral-200 rounded-2xl p-6 lg:p-8 shadow-sm">
              <h3 className="text-neutral-900 font-bold text-xl mb-6">Sourcing Inquiry Form</h3>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
