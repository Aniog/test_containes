import React, { useState } from "react";
import { Mail, Phone, MapPin, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { Input } from "@/components/ui/Input.jsx";
import { Textarea } from "@/components/ui/Textarea.jsx";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card.jsx";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
      // 1. Insert Contact Response directly
      const { data: response, error } = await client
        .from('ContactFormResponse')
        .insert({
          data: {
            email: formData.email,
            name: formData.name,
            subject: formData.subject,
            message: formData.message,
            status: 'new'
          }
        });

      if (error || response?.success === false) {
        throw new Error(error?.message || response?.errors?.[0] || 'Submission failed');
      }

      toast.success("Message Sent", {
        description: "Our engineering team will contact you shortly."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Error", {
        description: err.message || "Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-muted/30 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-6">
                Connect With <span className="text-primary italic">Artitect</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you need a custom quote for a double folder or technical support for your existing machinery, our specialists are ready to help.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-widest">Call Us</h4>
                  <p className="text-muted-foreground mt-1 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-widest">Email Us</h4>
                  <p className="text-muted-foreground mt-1 text-sm">sales@artitect.machinery</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 col-span-full">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-widest">Visit HQ</h4>
                  <p className="text-muted-foreground mt-1 text-sm italic">
                    123 Industrial Parkway, Engineering District, TX 75001, USA
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 border-2 border-primary/20 rounded-xl bg-background/50">
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4 italic">Global Support Net</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We maintain active service centers in Europe, North America, and Southeast Asia. On-site calibration and operator training are available upon request.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <Card className="shadow-2xl border-2">
            <CardHeader className="bg-foreground text-background">
              <CardTitle className="uppercase tracking-tighter text-2xl">Send a Message</CardTitle>
              <CardDescription className="text-background/60">
                Inquiry Response Time: &lt; 24 Hours
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest" htmlFor="name">Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Full Name" 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest" htmlFor="email">Email</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="you@company.com" 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest" htmlFor="subject">Subject</label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    required 
                    placeholder="Machine Model or Service Request" 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest" htmlFor="message">Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    className="min-h-[150px]" 
                    placeholder="Describe your requirements..." 
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full h-14 uppercase tracking-widest font-black" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Specifications
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
