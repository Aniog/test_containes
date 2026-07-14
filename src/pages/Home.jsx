import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import ContactForm from '@/components/landing/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />

      {/* Contact section */}
      <section id="contact" className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Have a question or just want to say hello? Fill out the form and we'll save your details so we can follow up.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Email</p>
                    <p className="text-slate-600">hello@connecthub.io</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Phone</p>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Location</p>
                    <p className="text-slate-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-center text-sm">
        <p>© {new Date().getFullYear()} ConnectHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
