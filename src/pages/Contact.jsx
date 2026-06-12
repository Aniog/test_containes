import { MapPin, Mail, Phone, Clock, MessageSquare } from 'lucide-react';
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
    value: '+86 20 1234 5678',
    href: 'tel:+862012345678',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Guangzhou & Yiwu, China',
    href: null,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Fri, 9:00–18:00 CST (UTC+8)',
    href: null,
  },
];

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-slate-400 text-lg">
              Tell us what you need and we'll send you a sourcing plan, supplier shortlist, and cost estimate within 24 hours — at no charge.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: contact info */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h2>

            <div className="space-y-5 mb-10">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-slate-800 font-medium hover:text-blue-700 transition-colors text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-slate-800 font-medium text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* What to expect */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-blue-700" />
                <h3 className="font-semibold text-slate-900 text-sm">What to Expect</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  Response within 24 business hours
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  A sourcing manager will review your request personally
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  We'll send a free sourcing plan with supplier options and estimated costs
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  No commitment required — you decide if you want to proceed
                </li>
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Sourcing Inquiry Form</h2>
              <InquiryForm />
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-slate-50 border-t border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '24h', label: 'Response Time' },
              { value: '200+', label: 'Buyers Served' },
              { value: '8 Years', label: 'China Experience' },
              { value: '100%', label: 'Confidential' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-blue-700">{stat.value}</div>
                <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
