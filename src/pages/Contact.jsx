import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "", country: "", productType: "", orderVolume: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.productType.trim()) newErrors.productType = "Product description required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setStatus("submitting");
    setTimeout(() => { setStatus("success"); setFormData({ name: "", email: "", company: "", phone: "", country: "", productType: "", orderVolume: "", message: "" }); }, 1500);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get a Free Sourcing Quote</h1>
          <p className="text-xl text-slate-300 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                
                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-10 h-10 text-green-600" /></div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Thank You!</h3>
                    <p className="text-slate-600 mb-8">We have received your inquiry and will respond within 24 hours.</p>
                    <Link to="/services" className="btn-primary">Explore Services <ArrowRight className="w-4 h-4" /></Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : "border-slate-300"}`} placeholder="John Smith" />
                        {errors.name && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email <span className="text-red-500">*</span></label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-slate-300"}`} placeholder="john@company.com" />
                        {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div><label className="block text-sm font-medium text-slate-700 mb-2">Company</label><input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg" placeholder="Your Company" /></div>
                      <div><label className="block text-sm font-medium text-slate-700 mb-2">Phone</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg" placeholder="+1 555 123 4567" /></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Country</label>
                        <select name="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white">
                          <option value="">Select country</option>
                          <option value="US">United States</option><option value="UK">United Kingdom</option><option value="DE">Germany</option>
                          <option value="FR">France</option><option value="CA">Canada</option><option value="AU">Australia</option><option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Order Volume</label>
                        <select name="orderVolume" value={formData.orderVolume} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white">
                          <option value="">Select volume</option>
                          <option value="small">Under $10,000</option><option value="medium">$10,000 - $50,000</option>
                          <option value="large">$50,000 - $200,000</option><option value="enterprise">Over $200,000</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Product to Source <span className="text-red-500">*</span></label>
                      <input type="text" name="productType" value={formData.productType} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.productType ? "border-red-500" : "border-slate-300"}`} placeholder="e.g., Electronics, Furniture..." />
                      {errors.productType && <p className="text-red-500 text-sm mt-1">{errors.productType}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Project Details <span className="text-red-500">*</span></label>
                      <textarea name="message" rows={5} value={formData.message} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${errors.message ? "border-red-500" : "border-slate-300"}`} placeholder="Tell us about your project, requirements, and timeline..." />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" disabled={status === "submitting"} className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-50">
                      {status === "submitting" ? "Sending..." : <><Send className="w-5 h-5" />Submit Inquiry</>}
                    </button>
                  </form>
                )}
              </div>
            </div>
            <div>
              <div className="bg-slate-900 text-white rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4"><div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center"><Mail className="w-5 h-5 text-blue-400" /></div><div><div className="font-semibold">Email</div><a href="mailto:info@ssourcingchina.com" className="text-slate-300 hover:text-white">info@ssourcingchina.com</a></div></div>
                  <div className="flex items-start gap-4"><div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center"><Phone className="w-5 h-5 text-blue-400" /></div><div><div className="font-semibold">Phone</div><a href="tel:+862012345678" className="text-slate-300">+86 20 1234 5678</a></div></div>
                  <div className="flex items-start gap-4"><div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center"><MapPin className="w-5 h-5 text-blue-400" /></div><div><div className="font-semibold">Office</div><div className="text-slate-300">Guangzhou, China</div></div></div>
                  <div className="flex items-start gap-4"><div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center"><Clock className="w-5 h-5 text-blue-400" /></div><div><div className="font-semibold">Hours</div><div className="text-slate-300">Mon-Fri: 9AM-6PM (GMT+8)</div></div></div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Why Work With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="w-5 h-5 text-green-600" />Free consultation</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="w-5 h-5 text-green-600" />24-hour response</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="w-5 h-5 text-green-600" />Dedicated manager</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="w-5 h-5 text-green-600" />Transparent pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
