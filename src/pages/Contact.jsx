import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';
import InquiryForm from '@/components/home/InquiryForm';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ssourcingchina.com',
    href: 'mailto:info@ssourcingchina.com',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+86 755 0000 0000',
    href: 'tel:+8675500000000',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Shenzhen & Yiwu, China',
    href: null,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Fri, 9:00–18:00 CST (UTC+8)',
    href: null,
  },
  {
    icon: Globe,
    label: 'Response Time',
    value: 'We respond to all inquiries within 1 business day',
    href: null,
  },
];

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-800 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Tell us what you need and we'll get back to you within one business day with a
            tailored sourcing plan — at no obligation.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Contact Information</h2>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                Reach out via the form or contact us directly. Our team is based in China and
                responds during business hours (CST).
              </p>

              <div className="space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-brand-blue" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-slate-900 hover:text-brand-blue transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-slate-700">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* What to expect */}
              <div className="mt-10 bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="text-sm font-bold text-slate-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-2">
                  {[
                    'We review your inquiry within 1 business day',
                    'We ask any clarifying questions if needed',
                    'We provide a sourcing plan and cost estimate',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-5 h-5 bg-brand-blue text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2 bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-1">Sourcing Inquiry Form</h2>
              <p className="text-sm text-slate-500 mb-6">
                Fill in your requirements below. All fields marked * are required.
              </p>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6 text-center">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              {
                city: 'Shenzhen',
                desc: 'Main office — electronics, tech, and manufacturing hub',
                address: 'Futian District, Shenzhen, Guangdong, China',
              },
              {
                city: 'Yiwu',
                desc: 'Sourcing office — consumer goods, small commodities',
                address: 'Yiwu International Trade City, Zhejiang, China',
              },
            ].map((office) => (
              <div key={office.city} className="bg-white rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-brand-blue" />
                  <h3 className="font-semibold text-slate-900">{office.city} Office</h3>
                </div>
                <p className="text-xs text-slate-500 mb-1">{office.desc}</p>
                <p className="text-sm text-slate-700">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
