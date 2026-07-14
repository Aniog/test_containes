import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-indigo-50 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's start a conversation
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Have a question or ready to get started? Fill out the form and we'll be in touch shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in touch</h3>
              <p className="text-gray-600 leading-relaxed">
                We'd love to hear from you. Our team is always ready to help and answer any questions you might have.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">hello@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <p className="text-sm text-gray-600">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Office</p>
                  <p className="text-sm text-gray-600">123 Main Street, San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-gray-50 rounded-2xl border border-gray-200 p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
