import React from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    product_details: '',
    estimated_order_value: ''
  });
  const [status, setStatus] = React.useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { data, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...formData,
            status: 'new',
            created_at: new Date().toISOString()
          }
        })
        .select()
        .single();

      if (error) throw error;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        product_details: '',
        estimated_order_value: ''
      });
      toast.success('Inquiry submitted successfully!');
    } catch (err) {
      console.error(err);
      setStatus('error');
      toast.error('Failed to submit inquiry. Please try again.');
    }
  };

  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 underline decoration-yellow-500 decoration-4 underline-offset-8">
            Contact Our <span className="text-yellow-600">Experts</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto italic">
            Ready to discuss your project? Submit the form below for a free, no-obligation sourcing consultation and price quote.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info & Values */}
          <div>
            <div className="bg-slate-900 rounded-3xl p-10 text-white mb-12 shadow-2xl">
              <h2 className="text-3xl font-bold mb-8 text-yellow-500">Global Trade Hub</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-yellow-500 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Shenzhen Office (HQ)</h4>
                    <p className="text-slate-400 text-sm">Suite 1205, Diamond Tower, Nanshan Science Park, Shenzhen, China</p>
                  </div>
                </div>
                <div className="border-t border-slate-800 pt-8 flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-yellow-500 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Inquiries</h4>
                    <p className="text-slate-400 text-sm italic">sourcing@ssourcingchina.com</p>
                    <p className="text-slate-400 text-sm italic">support@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="border-t border-slate-800 pt-8 flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-yellow-500 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone & WhatsApp</h4>
                    <p className="text-slate-400 text-sm">+86 138 2345 6789 (24/7 Global Support)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-600 text-sm">
                 <CheckCircle2 className="w-5 h-5 text-yellow-600 mb-2" />
                 "Detailed sourcing reports provided within 72 hours of inquiry verification."
               </div>
               <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-600 text-sm">
                 <CheckCircle2 className="w-5 h-5 text-yellow-600 mb-2" />
                 "Transparent pricing with no hidden kickbacks from manufacturers."
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            {status === 'success' ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Inquiry Received!</h2>
                <p className="text-slate-600 mb-8 italic">Thank you for your trust. One of our senior sourcing managers will review your requirements and contact you within 24 hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-slate-900" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-slate-900" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Company Name</label>
                    <input 
                      type="text" 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Global Ltd."
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-slate-900" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Est. Order Value (USD)</label>
                    <select 
                       name="estimated_order_value"
                       value={formData.estimated_order_value}
                       onChange={handleChange}
                       className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-slate-900 appearance-none"
                    >
                       <option value="">Select Range</option>
                       <option value="<$10k">Under $10k</option>
                       <option value="$10k-$50k">$10k to $50k</option>
                       <option value="$50k-$200k">$50k to $200k</option>
                       <option value=">$200k">Over $200k</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-bold text-slate-700 ml-1">Product Details & Requirements *</label>
                   <textarea 
                     name="product_details" 
                     required 
                     rows="5"
                     value={formData.product_details}
                     onChange={handleChange}
                     placeholder="Please describe the products you need, materials, quantity, and any special quality requirements..."
                     className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-slate-900"
                   ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-5 bg-slate-900 text-white font-bold text-lg rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-3 active:scale-95"
                >
                  {status === 'loading' ? 'Processing...' : 'Submit Professional Inquiry'}
                  <Send className="w-5 h-5" />
                </button>
                <p className="text-center text-xs text-slate-400 mt-4 leading-relaxed italic">
                  By submitting this form, you agree to our privacy policy and data handling for sourcing purposes. 100% Secure communication.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;