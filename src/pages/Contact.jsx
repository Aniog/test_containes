import React, { useState, useEffect, useRef } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { toast } from 'sonner';
import { Send, CheckCircle, Info } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const containerRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product_type: '',
    quantity: '',
    requirements: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Create record in SourcingInquiry table
      const { data: response, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...form,
            created_at: new Date().toISOString(),
            status: 'new'
          }
        })
        .select()
        .single();

      if (error || response?.success === false) {
        throw new Error(error?.message || 'Failed to submit inquiry');
      }

      setSuccess(true);
      toast.success('Inquiry submitted successfully!');
      setForm({
        name: '',
        email: '',
        company: '',
        product_type: '',
        quantity: '',
        requirements: ''
      });
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={containerRef} className="bg-gray-50 min-h-screen pt-12">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 pb-24">
        {/* Contact Info */}
        <div>
          <h1 id="contact-title" className="text-4xl font-extrabold text-primary mb-6">Contact SSourcing China</h1>
          <p id="contact-subtitle" className="text-lg text-gray-600 mb-12">
            Tell us about your sourcing needs. Our team will get back to you with a free preliminary sourcing assessment within 24 hours.
          </p>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="bg-secondary/10 p-4 rounded-xl text-secondary">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Based in the Manufacturing Heartland</h4>
                <p className="text-gray-500">Headquartered in Shenzhen, with local inspectors across Ningbo, Guangzhou, Yiwu, and Shanghai clusters.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-secondary/10 p-4 rounded-xl text-secondary">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">What you'll receive</h4>
                <ul className="text-gray-500 space-y-2 list-disc ml-4">
                  <li>Estimated price range and MOQs</li>
                  <li>Potential production timelines</li>
                  <li>Shipping & logistics cost estimate</li>
                  <li>Draft project plan</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border rounded-2xl p-8 shadow-sm">
                <h4 className="font-bold mb-4 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-secondary" />
                    Office Hours
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-400">Monday - Friday</div>
                    <div className="text-primary font-medium">9:00 AM - 6:00 PM (CST)</div>
                    <div className="text-gray-400">Saturday</div>
                    <div className="text-primary font-medium">10:00 AM - 2:00 PM (CST)</div>
                </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-white border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
             {success ? (
               <div className="text-center py-12">
                 <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                 </div>
                 <h2 className="text-2xl font-bold mb-4">Inquiry Received</h2>
                 <p className="text-gray-600 mb-8 max-w-sm mx-auto">Thank you for contacting SSourcing China. A sourcing specialist will reach out to you within 24 business hours.</p>
                 <button 
                  onClick={() => setSuccess(false)}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition"
                 >
                   Send Another Inquiry
                 </button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                 <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Your Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={form.name} 
                        onChange={handleChange}
                        className="w-full bg-gray-50 border rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={form.email} 
                        onChange={handleChange}
                        className="w-full bg-gray-50 border rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition"
                        placeholder="email@company.com"
                      />
                    </div>
                 </div>

                 <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      name="company" 
                      value={form.company} 
                      onChange={handleChange}
                      className="w-full bg-gray-50 border rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition"
                      placeholder="Your Company Inc."
                    />
                 </div>

                 <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Product Type *</label>
                      <input 
                        type="text" 
                        name="product_type" 
                        required 
                        value={form.product_type} 
                        onChange={handleChange}
                        className="w-full bg-gray-50 border rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition"
                        placeholder="e.g., TWS Earbuds"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Estimated Quantity</label>
                      <input 
                        type="text" 
                        name="quantity" 
                        value={form.quantity} 
                        onChange={handleChange}
                        className="w-full bg-gray-50 border rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition"
                        placeholder="e.g., 5,000 units"
                      />
                    </div>
                 </div>

                 <div>
                   <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Sourcing Requirements</label>
                   <textarea 
                     name="requirements" 
                     rows="5"
                     value={form.requirements} 
                     onChange={handleChange}
                     className="w-full bg-gray-50 border rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition"
                     placeholder="Please provide details about specs, target price, or any specific concerns..."
                   ></textarea>
                 </div>

                 <button 
                   type="submit" 
                   disabled={loading}
                   className="w-full bg-secondary text-white py-4 rounded-xl font-extrabold text-lg hover:bg-secondary/90 transition shadow-xl disabled:opacity-50 flex items-center justify-center"
                 >
                   {loading ? 'Submitting...' : 'Send Inquiry Now'}
                   <Send className="ml-2 w-5 h-5" />
                 </button>
                 <p className="text-[10px] text-gray-400 text-center italic uppercase tracking-tighter">Your data is secured with SSL encryption. Total privacy guaranteed.</p>
               </form>
             )}
             
             <div 
                className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10"
             />
        </div>
      </div>
    </div>
  );
};

export default Contact;
