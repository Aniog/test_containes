import React from 'react';
import { Search, ShieldCheck, Mail, Phone, Factory, Truck, ClipboardList, PackageSearch } from 'lucide-react';
import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service_needed: 'Sourcing',
    product_category: '',
    order_value: '',
    message: ''
  });
  const [status, setStatus] = React.useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // 1. Upsert User
      const userRecord = await User.upsert({
        email: values.email,
        name: values.name,
        role: 'guest',
      });

      // 2. Insert Inquiry
      const { error } = await client.from('ContactInquiry').insert({
        data: {
          user_id: userRecord.id,
          ...values,
          created_at: new Date().toISOString(),
          status: 'New'
        }
      });

      if (error) throw error;

      toast.success('Inquiry sent successfully! We will contact you within 24 hours.');
      setValues({
        name: '',
        email: '',
        company: '',
        phone: '',
        service_needed: 'Sourcing',
        product_category: '',
        order_value: '',
        message: ''
      });
      setStatus('success');
    } catch (err) {
      console.error(err);
      toast.error('Failed to send inquiry. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact SSourcing China</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Ready to simplify your China sourcing? Fill out the form below and one of our dedicated account managers will be in touch.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Info Side */}
            <div className="lg:col-span-5 bg-amber-500 p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="bg-white/20 p-3 rounded-xl mr-5">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-amber-100 text-xs font-bold uppercase tracking-wider">Email Us</p>
                      <p className="text-lg font-semibold">contact@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white/20 p-3 rounded-xl mr-5">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-amber-100 text-xs font-bold uppercase tracking-wider">Call Directly</p>
                      <p className="text-lg font-semibold">+86 755 8888 9999</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white/20 p-3 rounded-xl mr-5">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <p className="text-amber-100 text-xs font-bold uppercase tracking-wider">Office Hours</p>
                      <p className="text-lg font-semibold">09:00 - 18:00 (GMT+8)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-white/20">
                <blockquote className="italic text-amber-50">
                  "Our goal is to build long-term value, not just short-term transactions. We treat your products like they were our own."
                </blockquote>
                <p className="mt-4 font-bold">- Founder, SSourcing China</p>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7 p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                    <input 
                      type="text" name="name" required value={values.name} onChange={handleChange} 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                    <input 
                      type="email" name="email" required value={values.email} onChange={handleChange} 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                    <input 
                      type="text" name="company" value={values.company} onChange={handleChange} 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed *</label>
                    <select 
                      name="service_needed" required value={values.service_needed} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all"
                    >
                      <option>Sourcing</option>
                      <option>Verification</option>
                      <option>QC Inspection</option>
                      <option>Shipping</option>
                      <option>Full Managed Solution</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Detailed Requirements *</label>
                  <textarea 
                    name="message" required minLength={10} value={values.message} onChange={handleChange} rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all"
                    placeholder="Tell us about your product, desired quantities, and any specific requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-bold py-5 rounded-xl text-lg shadow-xl shadow-slate-900/10 transition-all flex items-center justify-center space-x-2"
                >
                  {status === 'submitting' ? 'Sending Inquiry...' : 'Get Free Consultation'}
                </button>
                <p className="text-center text-xs text-slate-400">Response time: Usually within 1 business day.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
