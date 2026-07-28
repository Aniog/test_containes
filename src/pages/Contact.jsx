import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Search, Clock, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Your sourcing inquiry has been sent! Our team will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      product: '',
      quantity: '',
      message: ''
    });
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 id="contact-title" className="mb-6 text-4xl font-bold md:text-5xl text-white">Get a Free Sourcing Quote</h1>
          <p id="contact-desc" className="mx-auto max-w-2xl text-xl text-blue-100">
            Send us your product requirements and our team will get back to you with a preliminary sourcing report and quote.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
               <div>
                  <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                          <MapPin className="h-5 w-5" />
                       </div>
                       <div>
                          <p className="font-bold">Shenzhen Office (Headquarters)</p>
                          <p className="text-muted-foreground text-sm">Futian District, Shenzhen, Guangdong, China</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                          <Mail className="h-5 w-5" />
                       </div>
                       <div>
                          <p className="font-bold">Business Inquiries</p>
                          <p className="text-muted-foreground text-sm">quotes@ssourcingchina.com</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                          <Phone className="h-5 w-5" />
                       </div>
                       <div>
                          <p className="font-bold">WhatsApp / WeChat</p>
                          <p className="text-muted-foreground text-sm">+86 755 1234 5678</p>
                       </div>
                    </div>
                  </div>
               </div>

               <div className="p-6 bg-secondary/30 rounded-2xl border border-dashed border-primary/30">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                     <Clock className="h-5 w-5 text-primary" />
                     Operating Hours
                  </h3>
                  <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
                  <p className="text-xs text-muted-foreground mt-2 italic">* We respond to urgent inquiries within 24 hours regardless of weekends.</p>
               </div>

               <div className="space-y-4">
                  <h3 className="font-bold uppercase text-xs tracking-widest text-muted-foreground">Why reach out?</h3>
                  <ul className="space-y-3">
                     {[
                       'Zero upfront sourcing commitment',
                       'Pre-selection of 3-5 verified suppliers',
                       'Technical manufacturing consultation',
                       'Logistics and duty estimations'
                     ].map((point, i) => (
                       <li key={i} className="flex items-center gap-2 text-sm">
                          <ShieldCheck className="h-4 w-4 text-primary" />
                          <span>{point}</span>
                       </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
               <div className="bg-card p-8 md:p-12 rounded-2xl border shadow-sm">
                  <h2 className="text-3xl font-bold mb-8">Sourcing Inquiry Form</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                           <label className="text-sm font-semibold text-foreground/80">Your Name *</label>
                           <input 
                              type="text" 
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-background transition-all"
                              placeholder="e.g. John Doe"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-semibold text-foreground/80">Work Email *</label>
                           <input 
                              type="email" 
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-background transition-all"
                              placeholder="e.g. john@company.com"
                           />
                        </div>
                     </div>

                     <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                           <label className="text-sm font-semibold text-foreground/80">Company Name</label>
                           <input 
                              type="text" 
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-background transition-all"
                              placeholder="e.g. Global Retail Ltd"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-semibold text-foreground/80">Product Category / Name *</label>
                           <input 
                              type="text" 
                              name="product"
                              required
                              value={formData.product}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-background transition-all"
                              placeholder="e.g. Smart Watch, Organic Cotton T-shirts"
                           />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground/80">Target Order Quantity (MOQ)</label>
                        <input 
                           type="text" 
                           name="quantity"
                           value={formData.quantity}
                           onChange={handleChange}
                           className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-background transition-all"
                           placeholder="e.g. 500 units, 1x20ft Container"
                        />
                     </div>

                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground/80">Message / Sourcing Requirements *</label>
                        <textarea 
                           name="message"
                           required
                           value={formData.message}
                           onChange={handleChange}
                           rows="5"
                           className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-background transition-all resize-none"
                           placeholder="Please describe your requirements, quality standards, and any specific questions..."
                        ></textarea>
                     </div>

                     <Button type="submit" size="lg" className="w-full md:w-auto px-12 h-14 text-lg">Send Sourcing Inquiry</Button>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="bg-secondary/20 py-16 border-t border-b overflow-hidden relative">
         <div 
           className="absolute inset-0 opacity-10 grayscale"
           data-strk-bg-id="contact-foot-c1"
           data-strk-bg="[contact-title] [hiw-title]"
           data-strk-bg-ratio="16x9"
           data-strk-bg-width="1600"
         />
         <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl font-bold max-w-2xl mx-auto italic">
               "Finding a supplier in China is easy. Finding one you can trust with your business future is why we exist."
            </h2>
         </div>
      </section>
    </div>
  );
};

export default Contact;
