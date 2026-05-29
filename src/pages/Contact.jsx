import { useEffect } from 'react';
import { MapPin, Mail, Clock, Globe, MessageSquare } from 'lucide-react';
import InquiryFormSection from '../components/home/InquiryFormSection';
import CTABanner from '../components/shared/CTABanner';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@ssourcing.cn',
    sub: 'We respond within 24 business hours',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: MapPin,
    title: 'Our Locations',
    value: 'Shenzhen & Yiwu, China',
    sub: 'On-site team across major manufacturing hubs',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon–Fri, 9:00–18:00 CST',
    sub: 'UTC+8 · China Standard Time',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Globe,
    title: 'Languages',
    value: 'English · 中文 · Español',
    sub: 'Bilingual team for all supplier communication',
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | SSourcing China';
  }, []);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1A3C6E] py-16 md:py-20">
        <div className="container-xl text-center">
          <p className="section-label text-amber-400 mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to start sourcing? Have a question? Our team is here to help. Fill in the form below or reach us directly.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-gray">
        <div className="container-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-5">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-slate-800 font-medium text-sm mb-1">{item.value}</p>
                  <p className="text-slate-500 text-xs">{item.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <InquiryFormSection />

      {/* FAQ teaser */}
      <section className="section-gray">
        <div className="container-xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">Have a Quick Question?</h2>
          </div>
          <p className="text-slate-600 mb-6 max-w-lg mx-auto">
            Check our FAQ page for answers to the most common questions about sourcing from China.
          </p>
          <a
            href="/#inquiry"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View Frequently Asked Questions
          </a>
        </div>
      </section>
    </div>
  );
}
