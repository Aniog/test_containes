import ContactForm from './ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '123 Main Street, San Francisco, CA 94105' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: Mail, label: 'Email', value: 'hello@example.com' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="contact-heading" className="text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Fill out the form below and we'll save your message so we can follow up with you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-indigo-200 text-sm mb-8">
                Reach us through any of these channels or use the form.
              </p>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-indigo-200 text-xs font-medium uppercase tracking-wide">
                        {label}
                      </p>
                      <p className="text-white text-sm mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
