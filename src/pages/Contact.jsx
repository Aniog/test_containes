import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Building2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DataClient, User } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "../config";
import { toast } from "sonner";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product_interest: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Upsert User (CRM Record) - email is the primary key and required.
      const userRecord = await User.upsert({
        email: formData.email,
        name: formData.name,
        role: "guest"
      });

      if (!userRecord || !userRecord.id) {
        throw new Error("Failed to register contact profile.");
      }

      // 2. Insert Form Response into ContactFormResponse table
      const { data: response, error } = await client
        .from("ContactFormResponse")
        .insert({
          data: {
            user_id: userRecord.id,
            name: formData.name,
            email: formData.email,
            company: formData.company,
            product_interest: formData.product_interest,
            message: formData.message
          }
        });

      if (error || response?.success === false) {
        let msg = error?.message || "Something went wrong.";
        if (Array.isArray(response?.errors) && response.errors.length > 0) {
          msg = response.errors.join(", ");
        }
        throw new Error(msg);
      }

      toast.success("Inquiry submitted successfully! We'll contact you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        company: "",
        product_interest: "",
        message: ""
      });
      
    } catch (err) {
      console.error("Submission error:", err);
      toast.error(err.message || "Failed to submit your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Contact Us - Free Sourcing Quote | SSourcing China</title>
        <meta name="description" content="Get a free quote for product sourcing, factory audits, or quality inspection in China." />
      </Helmet>

      {/* Header */}
      <section className="bg-slate-900 py-20 border-b border-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Get a Free Sourcing Quote</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Tell us about your product requirements. Our specialists typically respond within 24 hours with a preliminary assessment.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-slate-50 flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Send Us Your Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</label>
                    <Input 
                      id="email" 
                      type="email"
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-slate-700">Company Name (Optional)</label>
                  <Input 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="Your Business LLC"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="product_interest" className="text-sm font-medium text-slate-700">Product Interest *</label>
                  <Input 
                    id="product_interest" 
                    name="product_interest" 
                    value={formData.product_interest} 
                    onChange={handleChange} 
                    required 
                    placeholder="e.g. 500 pcs Bluetooth Headphones"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message Details *</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows={5}
                    placeholder="Please include specifications, target prices, materials, certifications needed, etc."
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg">
                  {isSubmitting ? (
                    <span className="flex items-center">Processing...</span>
                  ) : (
                    <span className="flex items-center">Submit Inquiry <Send className="ml-2 w-5 h-5" /></span>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Operations Office</h3>
                <div className="flex gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Headquarters</h4>
                    <p className="text-slate-600 mt-1">Guangzhou, Guangdong<br/>China 510000</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Email Us</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-lg font-semibold text-blue-600 hover:underline">info@ssourcingchina.com</a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Call Us (Business Hours: 9AM - 6PM Beijing Time)</p>
                      <a href="tel:+8612345678900" className="text-lg font-semibold text-slate-900 hover:text-blue-600">+86 123 4567 8900</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Why Partner With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-slate-600">Local teams in major manufacturing hubs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-slate-600">Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-slate-600">Strict AQL quality control protocols</span>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}