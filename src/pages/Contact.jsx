import React, { useState } from 'react';
import { useImageLoader } from '@/hooks/useImageLoader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const containerRef = useImageLoader();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Inquiry sent successfully! Our sourcing expert will contact you within 12 hours.");
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: '',
        quantity: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      <section className="bg-primary text-white py-20">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to optimize your China supply chain? Get in touch for a free sourcing consultation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Our Team</h4>
                      <p className="text-slate-600">General: info@ssourcingchina.com</p>
                      <p className="text-slate-600">Sales: sourcing@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call Us</h4>
                      <p className="text-slate-600">+86 123 456 789 (Intl.)</p>
                      <p className="text-slate-600">+86 755 8888 6666 (Local)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Office Location</h4>
                      <p className="text-slate-600">123 Sourcing Plaza, Futian District, Shenzhen, Guangdong, China 518000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border">
                <h4 className="font-bold text-xl mb-6">Why contact us?</h4>
                <ul className="space-y-4">
                  {[
                    "Free initial sourcing feasibility study",
                    "Expert advice on Chinese import/export regs",
                    "Direct access to our factory network",
                    "Customized QC plans for your products"
                  ].map((text, i) => (
                    <li key={i} className="flex gap-3 text-slate-700">
                      <Globe size={18} className="text-secondary mt-1" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-6 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <Clock className="text-primary" size={32} />
                <div>
                   <p className="font-bold">Typical Response Time</p>
                   <p className="text-slate-600 text-sm">Our experts respond within 12 business hours.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <Card className="shadow-2xl shadow-slate-200/50 border-none">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-8">Request a Sourcing Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input id="name" name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email *</Label>
                        <Input id="email" name="email" type="email" required placeholder="john@company.com" value={formData.email} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" name="company" placeholder="ACME Inc." value={formData.company} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="product">Product to Source *</Label>
                        <Input id="product" name="product" required placeholder="e.g. Ergonomic Office Chair" value={formData.product} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Est. Order Quantity</Label>
                        <Input id="quantity" name="quantity" placeholder="e.g. 500 units" value={formData.quantity} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details / Requirements</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Please describe your requirements, certification needs, or any specific concerns..." 
                        className="min-h-[150px]"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-bold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </Button>
                    <p className="text-center text-xs text-slate-400">
                      By submitting, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
