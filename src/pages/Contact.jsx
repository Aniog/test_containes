import { Mail, MapPin, Globe, Clock, Phone } from 'lucide-react';
import InquiryForm from '@/components/home/InquiryForm';
import SectionHeader from '@/components/shared/SectionHeader';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ssourcingchina.com',
    href: 'mailto:info@ssourcingchina.com',
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
    value: 'Monday–Friday, 9:00–18:00 CST',
    href: null,
  },
  {
    icon: Globe,
    label: 'Response Time',
    value: 'Within 24 business hours',
    href: null,
  },
];

const whyContact = [
  'Free initial consultation — no obligation',
  'Response within 24 business hours',
  'Bilingual team (English & Chinese)',
  'Confidential handling of your product information',
  'No minimum order value to inquire',
];

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-red/20 text-red-300 mb-6">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get a Free Sourcing Quote</h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto">
            Tell us about your sourcing project and we will get back to you within 24 hours with a free assessment and next steps.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-xl font-bold text-navy-900 mb-6">Contact Information</h2>
                <div className="flex flex-col gap-5 mb-8">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon size={16} className="text-brand-blue" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-navy-900 font-medium hover:text-brand-blue transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-navy-900 font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-navy-900 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-4">Why Contact Us?</h3>
                  <ul className="flex flex-col gap-3">
                    {whyContact.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-navy-200">
                        <span className="text-brand-red mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-2">Sourcing Inquiry Form</h2>
              <p className="text-gray-500 text-sm mb-8">
                Fill in as much detail as possible to help us provide an accurate assessment.
              </p>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Note */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            SSourcing China operates from Shenzhen and Yiwu, with sourcing coverage across all major manufacturing regions in China including Guangdong, Zhejiang, Jiangsu, Shandong, and Fujian provinces.
          </p>
        </div>
      </section>
    </div>
  );
}
