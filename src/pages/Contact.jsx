import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const location = useLocation();
  const containerRef = useRef(null);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    product_interest: location.state?.product || '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Upsert User
      const userRecord = await User.upsert({
        email: formData.email,
        name: formData.name,
        phone: formData.phone,
        role: 'guest'
      });

      // 2. Insert Contact Request
      const { error } = await client.from('ContactRequest').insert({
        data: {
          user_id: userRecord.id,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          product_interest: formData.product_interest,
          message: formData.message
        }
      });

      if (error) throw error;

      toast.success('Inquiry sent successfully! Our team will contact you shortly.');
      setFormData({ name: '', email: '', phone: '', product_interest: '', message: '' });
    } catch (err) {
      console.error(err);
      toast.error('Failed to send inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-24" ref={containerRef}>
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 id="contact-title" className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6 uppercase">
              Technical <span className="text-blue-800">Support</span> & Inquiries
            </h1>
            <p id="contact-description" className="text-lg text-slate-600 mb-12 leading-relaxed">
              Whether you need specialized technical specifications or a custom production line solution, our engineering experts are ready to assist.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, label: "Direct Sales", value: "+1 (555) 123-4567" },
                { icon: Mail, label: "Engineering Desk", value: "info@artitect-machinery.com" },
                { icon: MapPin, label: "Global HQ", value: "Industrial Zone 4, Steel City, SC 45010" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                    <item.icon className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{item.label}</p>
                    <p className="text-slate-900 font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-3xl overflow-hidden border border-slate-200 aspect-video relative shadow-inner bg-slate-100">
               <div 
                  className="absolute inset-0 grayscale opacity-40"
                  data-strk-bg-id="contact-map-placeholder"
                  data-strk-bg="industrial factory facility overhead view"
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="800"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <Badge className="bg-white/80 backdrop-blur-md text-slate-900 border-none px-4 py-2">VISIT OUR FACILITY</Badge>
               </div>
            </div>
          </div>

          <Card className="border-none shadow-2xl bg-white p-2">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl font-bold uppercase tracking-tight">Request Quotation</CardTitle>
              <CardDescription>Fill out the form below for professional machinery pricing.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700 font-semibold text-xs uppercase">Full Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="bg-slate-50 border-slate-100 focus:bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-semibold text-xs uppercase">Email Address</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required className="bg-slate-50 border-slate-100 focus:bg-white" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-700 font-semibold text-xs uppercase">Phone Number</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="bg-slate-50 border-slate-100 focus:bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product_interest" className="text-slate-700 font-semibold text-xs uppercase">Model of Interest</Label>
                    <Input id="product_interest" name="product_interest" value={formData.product_interest} onChange={handleChange} placeholder="Double Folder X-Series" className="bg-slate-50 border-slate-100 focus:bg-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 font-semibold text-xs uppercase">Message / Requirements</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your production goals..." required rows={5} className="bg-slate-50 border-slate-100 focus:bg-white resize-none" />
                </div>
                <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900 h-14 text-lg font-extrabold uppercase tracking-widest shadow-lg shadow-blue-900/10" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing...' : (
                    <span className="flex items-center gap-2">Send Inquiry <Send className="h-4 w-4" /></span>
                  )}
                </Button>
                <p className="text-[10px] text-center text-slate-400 uppercase font-medium tracking-tighter">Your data is secured with industrial-grade encryption.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
