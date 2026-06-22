import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import React, { useState } from "react";
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { toast } from "sonner";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    
    if (!formData.name || !formData.email || !formData.message) {
       toast.error("Please fill in all required fields (Name, Email, Message).");
       return;
    }

    setIsSubmitting(true);

    try {
      // 2. Insert Contact Form Response
      const { data: response, error } = await client
        .from('ContactFormResponses')
        .insert({
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || undefined,
            company: formData.company || undefined,
            product_interest: formData.product_interest || undefined,
            message: formData.message,
            status: "new"
          }
        });

      if (error || response?.success === false) {
         let errorMessage = "Failed to submit inquiry.";
         if (response?.errors && Array.isArray(response.errors)) {
            errorMessage = response.errors.join(", ");
         } else if (error?.message) {
            errorMessage = error.message;
         }
         throw new Error(errorMessage);
      }

      toast.success("Inquiry submitted successfully! We will get back to you within 24 hours.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        product_interest: "",
        message: ""
      });

    } catch (err) {
      console.error(err);
      toast.error(err.message || "An error occurred while submitting your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's Discuss Your Sourcing Needs</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Fill out the form below with your product requirements, and one of our sourcing experts will contact you directly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Contact Form */}
            <div className="w-full lg:w-3/5">
              <Card className="border-none shadow-md">
                 <CardContent className="p-8 md:p-10">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us an Inquiry</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <Label htmlFor="name">Full Name *</Label>
                             <Input 
                               id="name" 
                               name="name" 
                               placeholder="John Doe" 
                               value={formData.name}
                               onChange={handleChange}
                               required
                               className="bg-slate-50 focus-visible:ring-blue-500"
                             />
                          </div>
                          <div className="space-y-2">
                             <Label htmlFor="email">Email Address *</Label>
                             <Input 
                               id="email" 
                               name="email" 
                               type="email" 
                               placeholder="john@example.com" 
                               value={formData.email}
                               onChange={handleChange}
                               required
                               className="bg-slate-50 focus-visible:ring-blue-500"
                             />
                          </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <Label htmlFor="phone">Phone Number (WhatsApp/WeChat)</Label>
                             <Input 
                               id="phone" 
                               name="phone" 
                               placeholder="+1 (555) 000-0000" 
                               value={formData.phone}
                               onChange={handleChange}
                               className="bg-slate-50 focus-visible:ring-blue-500"
                             />
                          </div>
                          <div className="space-y-2">
                             <Label htmlFor="company">Company Name</Label>
                             <Input 
                               id="company" 
                               name="company" 
                               placeholder="Acme Corp" 
                               value={formData.company}
                               onChange={handleChange}
                               className="bg-slate-50 focus-visible:ring-blue-500"
                             />
                          </div>
                       </div>

                       <div className="space-y-2">
                          <Label htmlFor="product_interest">Product Category of Interest</Label>
                          <Input 
                            id="product_interest" 
                            name="product_interest" 
                            placeholder="e.g. Consumer Electronics, Furniture, custom OEM" 
                            value={formData.product_interest}
                            onChange={handleChange}
                            className="bg-slate-50 focus-visible:ring-blue-500"
                          />
                       </div>

                       <div className="space-y-2">
                          <Label htmlFor="message">Project Details *</Label>
                          <p className="text-xs text-slate-500 mb-2">Please include product specifications, estimated order quantities, target pricing, and any special requirements.</p>
                          <Textarea 
                            id="message" 
                            name="message" 
                            placeholder="I am looking to source..." 
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="bg-slate-50 focus-visible:ring-blue-500 resize-none"
                          />
                       </div>

                       <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-blue-600 hover:bg-blue-700 text-lg h-14"
                          disabled={isSubmitting}
                       >
                          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                       </Button>

                    </form>
                 </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-2/5 flex flex-col gap-8">
               <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Contact Details</h3>
                  <p className="text-slate-600 mb-8">
                     Prefer to reach out directly? Our team is available via email or phone. We aim to respond to all inquiries within 24 hours.
                  </p>
                  
                  <div className="space-y-6">
                     <div className="flex bg-white p-6 rounded-xl border border-slate-200 shadow-sm gap-4 items-start">
                        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex-shrink-0">
                           <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 mb-1">China Headquarters</h4>
                           <p className="text-slate-600 leading-relaxed text-sm">
                              Room 802, Building A, Poly Tech Park<br/>
                              Tianhe District, Guangzhou<br/>
                              Guangdong Province, China 510000
                           </p>
                        </div>
                     </div>

                     <div className="flex bg-white p-6 rounded-xl border border-slate-200 shadow-sm gap-4 items-start">
                        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex-shrink-0">
                           <Mail className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                           <a href="mailto:inquiry@ssourcingchina.com" className="text-blue-600 hover:underline text-sm block mb-1">inquiry@ssourcingchina.com</a>
                           <a href="mailto:support@ssourcingchina.com" className="text-blue-600 hover:underline text-sm">support@ssourcingchina.com</a>
                        </div>
                     </div>

                     <div className="flex bg-white p-6 rounded-xl border border-slate-200 shadow-sm gap-4 items-start">
                        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex-shrink-0">
                           <Clock className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                           <p className="text-slate-600 text-sm">
                              Monday – Friday<br/>
                              9:00 AM – 6:00 PM (Beijing Time)
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}