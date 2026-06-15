import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { submitInquiry } from "@/api/products";
import { User, Auth } from "@strikingly/sdk";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const machineInterest = searchParams.get("machine") || "";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    machine_interest: machineInterest,
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef(null);

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
      // 1. Upsert User (CRM)
      const userRecord = await User.upsert({
        email: formData.email,
        name: formData.name,
        role: "guest"
      });
      
      // 2. Submit Inquiry linked to user
      await submitInquiry({
        ...formData,
        user_id: userRecord.id
      });
      
      toast.success("Inquiry sent successfully! Our team will contact you shortly.");
      setFormData({
        name: "",
        email: "",
        machine_interest: "",
        message: ""
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send inquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={containerRef} className="pb-24">
      {/* Header */}
      <section className="bg-foreground py-20 text-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h1 id="contact-title" className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Connect With <span className="text-primary">Engineering</span>
          </h1>
          <p id="contact-subtitle" className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a tailored solution for your metal folding needs. Our specialists are ready to discuss your project.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold uppercase tracking-tight">Contact Information</h2>
                <div className="h-1 w-20 bg-primary" />
                <p className="text-muted-foreground text-lg italic">
                  "Excellence is not an act, but a habit. We build precision into every folding machine we ship globally."
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="h-12 w-12 bg-primary flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm tracking-widest text-primary mb-2">Global Headquarters</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      123 Industrial Parkway, Engineering District<br />
                      Dallas, TX 75001, United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="h-12 w-12 bg-primary flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm tracking-widest text-primary mb-2">Direct Line</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Main: +1 (555) 123-4567<br />
                      Support: +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="h-12 w-12 bg-primary flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm tracking-widest text-primary mb-2">Email Correspondence</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Sales: sales@artitect.machinery<br />
                      Tech: support@artitect.machinery
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div 
                  className="aspect-video w-full bg-slate-100 border relative grayscale"
                  data-strk-bg-id="map-placeholder"
                  data-strk-bg="[contact-title] office building architecture"
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="800"
                >
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <div className="bg-white p-4 shadow-xl border border-primary/20">
                      <p className="text-xs font-bold uppercase tracking-widest">Global Logistics Hub</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 p-8 md:p-12 border shadow-2xl relative">
              <div className="absolute top-0 right-0 w-24 h-2 bg-primary" />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-foreground">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="E.g. Alexander Hamilton"
                    className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-primary transition-colors italic"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-foreground">Professional Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="E.g. a.ham@industry.com"
                    className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-primary transition-colors italic"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="machine_interest" className="text-xs font-black uppercase tracking-widest text-foreground">Interest Selection</label>
                  <select
                    id="machine_interest"
                    name="machine_interest"
                    value={formData.machine_interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-primary transition-colors italic appearance-none"
                  >
                    <option value="">Select a Machine</option>
                    <option value="Double Folding Machine">Double Folding Machine</option>
                    <option value="Sheet Metal Folder">Sheet Metal Folder</option>
                    <option value="CNC Folding Machine">CNC Folding Machine</option>
                    <option value="Manual Folder">Manual Folder</option>
                    <option value="Other">Other Precision Tooling</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-foreground">Project Requirements</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your production needs..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-primary transition-colors italic resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-2 group border-2 border-primary"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Transmit Inquiry <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
