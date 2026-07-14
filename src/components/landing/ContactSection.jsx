import ContactForm from './ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Have a question or want to work together? Fill out the form and we'll be in touch soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-indigo-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Contact Information</h3>
              <p className="text-indigo-200 text-sm mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-indigo-300 mb-0.5">Phone</p>
                    <p className="text-white font-medium text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-indigo-300 mb-0.5">Email</p>
                    <p className="text-white font-medium text-sm">hello@connectus.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-indigo-300 mb-0.5">Office</p>
                    <p className="text-white font-medium text-sm">123 Main Street, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
