import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Insert Form Response
      const { error, data: response } = await client
        .from('SourcingInquiries')
        .insert({
          data: {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            product: data.product,
            quantity: data.quantity,
            target_price: data.targetPrice,
            details: data.details,
          }
        });

      if (error || response?.success === false) {
        throw new Error(error?.message || response?.errors?.join(', ') || 'Failed to submit inquiry');
      }

      toast.success("Inquiry Submitted", {
        description: "Thank you for reaching out. We will get back to you within 24 hours.",
      });
      e.target.reset();
    } catch (err) {
      console.error(err);
      toast.error("Submission Failed", {
        description: err.message || "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get a Free Sourcing Quote</h1>
          <p className="text-lg md:text-xl text-slate-300">
            Tell us about your sourcing needs. Our experts will evaluate your requirements and provide a tailored plan within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Contact Form */}
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Send us an Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name *</label>
                            <Input id="firstName" name="firstName" disabled={isSubmitting} required placeholder="John" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name *</label>
                            <Input id="lastName" name="lastName" disabled={isSubmitting} required placeholder="Doe" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700">Company Email *</label>
                        <Input id="email" name="email" disabled={isSubmitting} type="email" required placeholder="john@company.com" />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="product" className="text-sm font-medium text-slate-700">Product Name / Category *</label>
                        <Input id="product" name="product" disabled={isSubmitting} required placeholder="e.g. Wireless Earbuds" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="quantity" className="text-sm font-medium text-slate-700">Estimated Quantity</label>
                            <Input id="quantity" name="quantity" disabled={isSubmitting} placeholder="e.g. 5,000 units" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="targetPrice" className="text-sm font-medium text-slate-700">Target Price (Optional)</label>
                            <Input id="targetPrice" name="targetPrice" disabled={isSubmitting} placeholder="e.g. $5.00 / unit" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="details" className="text-sm font-medium text-slate-700">Project Details *</label>
                        <Textarea 
                            id="details"
                            name="details"
                            disabled={isSubmitting} 
                            required 
                            placeholder="Please provide product specifications, materials, packaging requirements, and any other relevant details."
                            className="min-h-[150px]"
                        />
                    </div>

                    <Button type="submit" size="lg" className="w-full text-lg h-12" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</Button>
                </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
                    <p className="text-slate-600 text-lg mb-8">
                        Prefer to reach out directly? You can contact our Shenzhen office using the information below.
                    </p>
                </div>

                <div className="grid gap-6">
                    <Card className="border-none shadow-sm bg-slate-50">
                        <CardContent className="p-6 flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full shrink-0">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-slate-900 mb-1">Email Us</h3>
                                <p className="text-slate-600 mb-1">For general inquiries and quotes:</p>
                                <a href="mailto:info@ssourcingchina.com" className="text-primary font-medium hover:underline">info@ssourcingchina.com</a>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm bg-slate-50">
                        <CardContent className="p-6 flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full shrink-0">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-slate-900 mb-1">Call Us</h3>
                                <p className="text-slate-600 mb-1">Available Mon-Fri, 9am - 6pm (CST):</p>
                                <a href="tel:+8612345678900" className="text-primary font-medium hover:underline">+86 123 4567 8900</a>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm bg-slate-50">
                        <CardContent className="p-6 flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full shrink-0">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-slate-900 mb-1">Office Location</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Futian District<br />
                                    Shenzhen, Guangdong Province<br />
                                    China 518000
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                     <Card className="border-none shadow-sm bg-slate-50">
                        <CardContent className="p-6 flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full shrink-0">
                                <Clock className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-slate-900 mb-1">Working Hours</h3>
                                <p className="text-slate-600 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p className="text-sm text-slate-500">China Standard Time (CST), UTC +8</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};