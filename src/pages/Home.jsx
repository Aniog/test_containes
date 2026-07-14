import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import ContactForm from '@/components/landing/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '123 Main Street, San Francisco, CA 94105' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: Mail, label: 'Email', value: 'hello@contactus.com' },
];

const Home = () => (
  <div className="min-h-screen bg-white">
    <Hero />
    <Features />

    <section id="contact-form-section" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Fill out the form and we'll get back to you within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Contact Information</h3>
              <p className="text-indigo-200 text-sm mb-8">
                Prefer to reach us directly? Here's how to find us.
              </p>
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="bg-indigo-500 p-2.5 rounded-lg mt-0.5 shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-indigo-200 text-xs font-medium uppercase tracking-wide mb-0.5">{label}</p>
                      <p className="text-white text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4 text-center">
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} ContactUs. All rights reserved.</p>
    </footer>
  </div>
);

export default Home;
