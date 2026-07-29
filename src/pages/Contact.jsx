import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { ImageHelper, DataClient } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const containerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    quantity: '',
    destination: '',
    requirements: ''
  });

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
      // Insert Inquiry into Database
      const { error: insertError } = await client.from('SourcingInquiry').insert({
        data: {
          name: formData.name,
          email: formData.email,
          product: formData.product,
          quantity: formData.quantity,
          destination: formData.destination,
          requirements: formData.requirements
        }
      });

      if (insertError) throw insertError;

      toast.success("Inquiry received! Our sourcing experts will contact you within 24 hours.");
      setFormData({
        name: '',
        email: '',
        product: '',
        quantity: '',
        destination: '',
        requirements: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error("Failed to submit inquiry. Please try again or contact us directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-24 text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 id="contact-hero-title" className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight uppercase tracking-wider">Start Your Sourcing Project</h1>
          <p id="contact-hero-subtitle" className="text-xl text-primary-foreground/70 max-w-2xl mx-auto font-light">
            Tell us about your requirements and get a free sourcing quote and initial consultation within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-background rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
            {/* Contact Sidebar */}
            <div className="lg:w-1/3 bg-primary p-12 text-primary-foreground space-y-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full -translate-y-16 translate-x-16" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 font-heading tracking-tight">Direct Support</h2>
                <p className="text-primary-foreground/70 text-lg leading-relaxed">Have a complex project? Contact our Shenzhen headquarters directly.</p>
              </div>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start space-x-5">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/5">
                    <Phone className="text-secondary h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/50 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-xl font-medium">+86 755 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/5">
                    <Mail className="text-secondary h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/50 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-xl font-medium text-wrap break-all">inquiry@ssourcing.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/5">
                    <MapPin className="text-secondary h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/50 text-xs font-bold uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="text-lg">Futian District, Shenzhen, China</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8">
                 <div 
                  className="rounded-2xl overflow-hidden shadow-xl aspect-square bg-white/5 border border-white/10"
                  data-strk-bg-id="contact-side-img"
                  data-strk-bg="Modern business office in Shenzhen CBD"
                  data-strk-bg-ratio="1x1"
                  data-strk-bg-width="400"
                />
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:w-2/3 p-12 lg:p-16">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-1.5 h-8 bg-secondary rounded-full" />
                <h2 className="text-3xl font-bold text-primary font-heading tracking-tight">Sourcing Inquiry Form</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-primary/80 uppercase tracking-widest">Full Name</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Michael Smith" 
                      required 
                      className="bg-muted/50 border-slate-200 h-14 rounded-xl focus:border-secondary transition-colors" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-primary/80 uppercase tracking-widest">Company Email</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. michael@business.com" 
                      required 
                      className="bg-muted/50 border-slate-200 h-14 rounded-xl focus:border-secondary transition-colors" 
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-bold text-primary/80 uppercase tracking-widest">Product Information</label>
                  <Input 
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    placeholder="What product are you looking to source?" 
                    required 
                    className="bg-muted/50 border-slate-200 h-14 rounded-xl focus:border-secondary transition-colors" 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-primary/80 uppercase tracking-widest">Estimated Quantity</label>
                    <Input 
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 5,000 units" 
                      required 
                      className="bg-muted/50 border-slate-200 h-14 rounded-xl focus:border-secondary transition-colors" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-primary/80 uppercase tracking-widest">Product Destination</label>
                    <Input 
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="e.g. Port of Los Angeles, USA" 
                      required 
                      className="bg-muted/50 border-slate-200 h-14 rounded-xl focus:border-secondary transition-colors" 
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-bold text-primary/80 uppercase tracking-widest">Additional Requirements</label>
                  <Textarea 
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Describe target price, material specs, or special certifications needed..." 
                    className="bg-muted/50 border-slate-200 min-h-[160px] rounded-xl focus:border-secondary transition-colors" 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-black py-8 text-xl rounded-xl shadow-[0_10px_30px_rgba(217,119,6,0.3)] transition-all hover:-translate-y-1"
                >
                  {isSubmitting ? "Submitting..." : <><Send className="mr-3 h-6 w-6" /> SUBMIT SOURCING REQUEST</>}
                </Button>
                
                <p className="text-center text-muted-foreground text-sm font-medium">
                  <MessageCircle className="inline-block w-4 h-4 mr-1 text-secondary" /> 
                  100% Privacy & NGO Compliant. We never share your data.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
