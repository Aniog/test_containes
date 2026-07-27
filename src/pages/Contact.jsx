import React, { useState, useEffect, useRef } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, CheckCircle2, Factory, ShieldCheck, Truck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product_name: '',
    order_quantity: '',
    target_price: '',
    message: ''
  });

  useEffect(() => {
    document.title = "Contact Us | SSourcing China - Get a Free Sourcing Quote";
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Direct insert inquiry
      const { data: response, error } = await client
        .from('ContactInquiry')
        .insert({
          data: {
            ...formData
          }
        })
        .select()
        .single();

      if (error || response?.success === false) {
        throw new Error(error?.message || "Failed to submit inquiry");
      }

      toast.success("Inquiry sent successfully! Our team will contact you within 24 hours.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product_name: '',
        order_quantity: '',
        target_price: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Get a Free Sourcing Quote</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to find the best manufacturers in China? Fill out the form below and our experts will analyze your requirements.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold mb-8 text-slate-900">Sourcing Request Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 ..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company Ltd." />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product_name">Product Name / Category *</Label>
                  <Input id="product_name" name="product_name" value={formData.product_name} onChange={handleChange} required placeholder="e.g. Ergonomic Office Chairs" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="order_quantity">Estimated Quantity</Label>
                    <Input id="order_quantity" name="order_quantity" value={formData.order_quantity} onChange={handleChange} placeholder="e.g. 500 units" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="target_price">Target Price per Unit</Label>
                    <Input id="target_price" name="target_price" value={formData.target_price} onChange={handleChange} placeholder="e.g. $15.00" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Detailed Requirements *</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    placeholder="Please describe your requirements, quality standards, packaging, and any other details." 
                    className="min-h-[150px]"
                  />
                </div>

                <Button type="submit" disabled={loading} className="w-full h-12 text-base">
                  {loading ? "Submitting Inquiry..." : "Submit Sourcing Request"}
                </Button>
                
                <p className="text-xs text-slate-500 text-center italic">
                  * By submitting this form, you agree to our privacy policy. We typically reply within 24 hours.
                </p>
              </form>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 space-y-10">
              {/* Contact Cards */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Email Us</h3>
                      <p className="text-slate-600 text-sm">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Call Us</h3>
                      <p className="text-slate-600 text-sm">+86 755 8888 8888</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Shenzhen Office</h3>
                      <p className="text-slate-600 text-sm">Futian District, Shenzhen, Guangdong</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Section */}
              <div className="bg-slate-900 text-white p-8 rounded-2xl space-y-8">
                <h3 className="text-xl font-bold border-b border-slate-800 pb-4">Why Contact Us?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">Bilingual team for seamless communication.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">Direct access to raw manufacturer pricing.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">On-site inspections before global shipping.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">End-to-end logistics & customs handling.</span>
                  </li>
                </ul>

                <div className="pt-4">
                  <img 
                    data-strk-img-id="contact-map-photo"
                    data-strk-img="Shenzhen city skyline tech center"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Shenzhen Office Location"
                    className="rounded-lg opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
