import { useState, useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    content: "Guangzhou, Guangdong, China",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@ssourcingchina.com",
    href: "mailto:info@ssourcingchina.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+86 123 4567 890",
    href: "tel:+861234567890",
  },
  {
    icon: Clock,
    title: "Response Time",
    content: "Within 24 hours",
  },
];

export default function Contact() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    quantity: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.product.trim()) newErrors.product = "Product description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    console.log("Form submitted:", formData);
  };

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Tell us about your product requirements and we'll get back to you within 24 hours with a personalized sourcing assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <Card className="p-8 md:p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">Thank You!</h2>
                  <p className="text-slate-600 mb-6">
                    Your inquiry has been received. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        product: "",
                        quantity: "",
                        budget: "",
                        timeline: "",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </Card>
              ) : (
                <Card className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-primary-800 mb-6">Tell Us About Your Project</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.name ? "border-red-400" : "border-slate-200"
                          }`}
                          placeholder="John Smith"
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.email ? "border-red-400" : "border-slate-200"
                          }`}
                          placeholder="john@company.com"
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="+1 234 567 890"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Product Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        rows={3}
                        className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.product ? "border-red-400" : "border-slate-200"
                        }`}
                        placeholder="Describe the product you want to source..."
                      />
                      {errors.product && <p className="text-xs text-red-500 mt-1">{errors.product}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Target Quantity</label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="e.g. 1,000 pcs"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Target Budget</label>
                        <input
                          type="text"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="e.g. $10,000 - $50,000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Timeline</label>
                        <input
                          type="text"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="e.g. 3 months"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Additional Details</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Any specific requirements, certifications, or quality standards..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Inquiry
                    </button>
                  </form>
                </Card>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-slate-800 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">{item.title}</div>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-slate-700 hover:text-primary-600 transition-colors">
                            {item.content}
                          </a>
                        ) : (
                          <div className="text-sm text-slate-700">{item.content}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-primary-50 border-primary-100">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5 text-primary-600" />
                  <h3 className="font-semibold text-primary-800">What Happens Next?</h3>
                </div>
                <ol className="space-y-3">
                  {[
                    "We review your requirements within 24 hours",
                    "Our team prepares a personalized sourcing assessment",
                    "We schedule a call to discuss your project in detail",
                    "You receive a customized sourcing proposal with timeline",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-5 h-5 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}