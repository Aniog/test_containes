import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [values, setValues] = React.useState({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent successfully! We will get back to you soon.');
      setValues({ name: '', email: '', message: '' });
      setStatus('success');
    }, 1000);
  };

  const onChange = (e) => {
    setValues(v => ({ ...v, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Contact Us</h1>
          <p className="text-slate-400 max-w-2xl font-medium">Get in touch with our engineering experts for customized machinery solutions.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase">Our Offices</h2>
              <div className="grid gap-12">
                <div className="flex gap-6">
                  <div className="bg-blue-100 p-4 rounded-2xl h-fit">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Global Headquarters</h3>
                    <p className="text-slate-600 leading-relaxed">
                      123 Industrial Ave, Engineering District<br />
                      Tech City 54321, United States
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-blue-100 p-4 rounded-2xl h-fit">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Direct Support</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      +1 (555) 123-4567<br />
                      Available Mon-Fri, 8AM - 6PM EST
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-blue-100 p-4 rounded-2xl h-fit">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Email Inquiries</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      sales@artitectmachinery.com<br />
                      support@artitectmachinery.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase">Send a Message</h2>
              <form onSubmit={onSubmit} className="grid gap-6">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={values.name}
                    onChange={onChange}
                    className="bg-white border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={onChange}
                    className="bg-white border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Your Requirement</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={values.message}
                    onChange={onChange}
                    className="bg-white border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                    placeholder="Describe your project or equipment needs..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-slate-900 text-white py-5 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 mt-4"
                >
                  {status === 'submitting' ? 'Sending...' : (
                    <>Send Message <Send className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
