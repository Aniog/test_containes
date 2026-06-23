import React, { useState } from 'react';
import { DataClient, API } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { toast } from 'sonner';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  Info
} from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product_description: '',
    estimated_order_volume: '',
    services_needed: [],
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const services = [
    "Supplier Sourcing",
    "Factory Audit",
    "Sample Consolidation",
    "Quality Inspection",
    "Production Monitoring",
    "Shipping & Logistics"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service) => {
    setFormData(prev => {
      const services = prev.services_needed.includes(service)
        ? prev.services_needed.filter(s => s !== service)
        : [...prev.services_needed, service];
      return { ...prev, services_needed: services };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Insert Inquiry
      const { data: response, error } = await client
        .from('Inquiry')
        .insert({
          data: {
            ...formData,
            createdAt: new Date().toISOString(),
            status: 'new'
          }
        })
        .select()
        .single();

      if (error || response?.success === false) {
        throw new Error(error?.message || 'Failed to submit inquiry');
      }

      toast.success('Your inquiry has been submitted successfully! We will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product_description: '',
        estimated_order_volume: '',
        services_needed: [],
        message: ''
      });
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const faqItems = [
    {
      q: "What are your service fees?",
      a: "Our fees are transparent and depend on your requirements. We offer both commission-based (for end-to-end sourcing) and flat-fee structures (for individual inspections or audits)."
    },
    {
      q: "What is your Minimum Order Quantity (MOQ)?",
      a: "MOQs are set by factories, not us. However, our expertise lies in finding suppliers that match your specific scale, whether you are a startup or an established enterprise."
    },
    {
      q: "How do you verify supplier reliability?",
      a: "We conduct on-site factory audits, check legal business licenses, bank account verification, and past export records to ensure you only work with legitimate manufacturers."
    },
    {
      q: "Do you handle shipping and customs?",
      a: "Yes, we coordinate the entire logistics chain including sea, air, and rail freight, and provide all necessary documentation for customs clearance in your country."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-[#1a3d66] py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact SSourcing China</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto italic">
            "Your professional sourcing partner on the ground in China."
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-[#1a3d66] mb-8 flex items-center gap-3">
                <Send className="w-6 h-6 text-[#ff6b00]" />
                Get a Free Sourcing Quote
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1a3d66] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1a3d66] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1a3d66] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone / WhatsApp</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1a3d66] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">What products are you looking for? *</label>
                  <textarea
                    name="product_description"
                    required
                    rows="3"
                    value={formData.product_description}
                    onChange={handleChange}
                    placeholder="Describe your product requirements, specifications, and desired features."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1a3d66] transition-all"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Estimated Order Quantity / Budget</label>
                  <input
                    type="text"
                    name="estimated_order_volume"
                    value={formData.estimated_order_volume}
                    onChange={handleChange}
                    placeholder="e.g. 1000 units or $10,000"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1a3d66] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-4">Services Needed (Select all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map(service => (
                      <label key={service} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={formData.services_needed.includes(service)}
                            onChange={() => handleCheckboxChange(service)}
                            className="w-5 h-5 rounded border-slate-300 text-[#ff6b00] focus:ring-[#ff6b00] cursor-pointer"
                          />
                        </div>
                        <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Additional Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any other details we should know?"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1a3d66] transition-all"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#ff6b00] hover:bg-[#e65a00] disabled:bg-slate-400 text-white font-bold py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
                  >
                    {loading ? "Submitting Inquiry..." : "Submit Inquiry Now"}
                    {!loading && <Send className="w-5 h-5" />}
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-4 italic">
                    We take your privacy seriously. Your data is never shared with third parties without your consent.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-[#1a3d66] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-lg"><Phone className="w-5 h-5" /></div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-1">Call Us / WhatsApp</p>
                    <p className="font-semibold">+86 123 4567 8910</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-lg"><Mail className="w-5 h-5" /></div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-1">Email Us</p>
                    <p className="font-semibold">contact@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-lg"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-1">Our Office</p>
                    <p className="font-semibold">Room 1205, Business Tower, Shenzhen, China</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-lg"><Clock className="w-5 h-5" /></div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-1">Business Hours</p>
                    <p className="font-semibold">Mon - Fri: 9:00 AM - 6:00 PM (CST)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Message */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 text-[#1a3d66] font-bold mb-4">
                <Info className="w-5 h-5 text-[#ff6b00]" />
                Why Inquiry with Us?
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-slate-600 italic">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0" />
                  Free initial supplier shortlist
                </li>
                <li className="flex gap-3 text-sm text-slate-600 italic">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0" />
                  Expert guidance on China imports
                </li>
                <li className="flex gap-3 text-sm text-slate-600 italic">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0" />
                  Comprehensive quality assurance
                </li>
                <li className="flex gap-3 text-sm text-slate-600 italic">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0" />
                  Direct factory-to-warehouse logistics
                </li>
              </ul>
            </div>

            {/* FAQ Preview */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#1a3d66]">Common Questions</h3>
              {faqItems.map((item, id) => (
                <div key={id} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <p className="font-bold text-[#1a3d66] text-sm mb-2">{item.q}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
