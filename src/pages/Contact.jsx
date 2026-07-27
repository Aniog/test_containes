import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import InquiryForm from '@/components/home/InquiryForm';

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
    label: 'Location',
    value: 'Guangzhou, Guangdong, China',
    href: null,
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 1 business day',
    href: null,
  },
];

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Tell us what you need to source and we'll get back to you within 1 business day with a clear plan and fee proposal.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-brand-text mb-6">Contact Information</h2>
              <div className="flex flex-col gap-5 mb-8">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand-blue" />
                      </div>
                      <div>
                        <p className="text-brand-muted text-xs font-medium uppercase tracking-wide mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-brand-text font-medium text-sm hover:text-brand-blue transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-brand-text font-medium text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* What to Expect */}
              <div className="bg-brand-gray rounded-xl p-6 border border-brand-border">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-brand-blue" />
                  <h3 className="font-semibold text-brand-text">What Happens Next</h3>
                </div>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry and may ask a few clarifying questions.',
                    'We send you a scope of work and fee proposal within 1 business day.',
                    'Once agreed, we begin supplier research immediately.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-brand-blue text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-brand-muted text-sm leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Languages */}
              <div className="mt-6 bg-brand-blue-light rounded-xl p-5 border border-brand-border">
                <p className="text-brand-blue text-sm font-semibold mb-1">We communicate in:</p>
                <p className="text-brand-text text-sm">English · 中文 (Mandarin) · Cantonese</p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder / Office info */}
      <section className="py-12 bg-brand-gray border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { label: 'Primary Office', value: 'Guangzhou, Guangdong', sub: 'Manufacturing hub coverage: GD, ZJ, FJ, JS' },
              { label: 'Coverage Area', value: 'All Major Manufacturing Regions', sub: 'Guangdong, Zhejiang, Fujian, Jiangsu, Shandong' },
              { label: 'Time Zone', value: 'CST (UTC+8)', sub: 'Available Mon–Fri, 9am–6pm CST' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-6 border border-brand-border">
                <p className="text-brand-muted text-xs font-semibold uppercase tracking-wide mb-1">{item.label}</p>
                <p className="font-bold text-brand-text mb-1">{item.value}</p>
                <p className="text-brand-muted text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
