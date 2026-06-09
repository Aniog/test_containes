import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    product_type: '',
    estimated_quantity: '',
    message: ''
  });
  const [status, setStatus] = React.useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const { data, error } = await client
        .from('SourcingInquiries')
        .insert({
          data: {
            ...formData,
            created_at: new Date().toISOString(),
            status: 'new'
          }
        });

      if (error) throw error;
      
      toast.success('Inquiry submitted successfully! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        company: '',
        product_type: '',
        estimated_quantity: '',
        message: ''
      });
      setStatus('success');
    } catch (err) {
      console.error(err);
      toast.error('Failed to submit inquiry. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact SSourcing China</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Get expert sourcing assistance. Send us your requirements and receive a quote within 24-48 hours.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Email Us</p>
                      <p className="text-slate-600">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Call Us</p>
                      <p className="text-slate-600">+86 123 4567 8901</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">WeChat / WhatsApp</p>
                      <p className="text-slate-600">SSourcing_China_Support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Our Office</p>
                      <p className="text-slate-600">Global Sourcing Hub, Shenzhen, Guangdong, China</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-blue-600 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Why Contact Us?</h3>
                <ul className="space-y-3 text-sm opacity-90">
                  <li className="flex items-center gap-2">✓ Professional Market Assessment</li>
                  <li className="flex items-center gap-2">✓ Transparent Pricing & Proposals</li>
                  <li className="flex items-center gap-2">✓ No MOQ Requirements to Start</li>
                  <li className="flex items-center gap-2">✓ Scalable Logistics Solutions</li>
                </ul>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-100 shadow-xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Send a Sourcing Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Full Name *</label>
                      <input 
                        type="text" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Email Address *</label>
                      <input 
                        type="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Company Name</label>
                      <input 
                        type="text" name="company" value={formData.company} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="ABC Corp"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Product(s) to Source *</label>
                      <input 
                        type="text" name="product_type" required value={formData.product_type} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="e.g. EV Chargers, Furniture"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Estimated Order Quantity</label>
                    <input 
                      type="text" name="estimated_quantity" value={formData.estimated_quantity} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="e.g. 500 units per month"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Message / Sourcing Requirements *</label>
                    <textarea 
                      name="message" required rows="6" value={formData.message} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Please describe your requirements in detail..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" disabled={status === 'submitting'}
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
