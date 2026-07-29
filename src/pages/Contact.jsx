import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      projectType: formData.get('projectType'),
      message: formData.get('message'),
    };

    try {
      // Step 1: Upsert the User record
      const userRecord = await User.upsert({
        email: data.email,
        name: data.fullName,
        phone: data.phone,
        role: 'guest',
      });

      // Step 2: Insert the inquiry linked to the user
      const { error } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...data,
            user_id: userRecord.id,
          },
        })
        .select()
        .single();

      if (error) throw error;

      toast.success("Inquiry received! Our team will contact you within 24 hours.");
      e.target.reset();
    } catch (err) {
      console.error('Submission error:', err);
      toast.error("Failed to send inquiry. Please try again or contact us via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to start your sourcing project? Reach out to our team in Shenzhen and let's discuss your requirements.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  Whether you're a startup or an established enterprise, we offer tailored sourcing solutions to meet your scale. Our multi-lingual team is ready to assist.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-600">General Inquiry: info@ssourcingchina.com</p>
                    <p className="text-slate-600">Project Support: projects@ssourcingchina.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Call Us</h4>
                    <p className="text-slate-600">Main Office: +86 755 1234 5678</p>
                    <p className="text-slate-600">WhatsApp: +86 123 4567 8901</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Our Office</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Floor 12, Sourcing Plaza, Futian District<br />
                      Shenzhen, Guangdong, China 518000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <Input name="fullName" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Work Email</label>
                    <Input name="email" type="email" placeholder="john@company.com" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone (optional)</label>
                    <Input name="phone" placeholder="+1 123 456 7890" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Project Type</label>
                    <select name="projectType" className="w-full h-10 px-3 rounded-md border border-slate-200 text-sm bg-white">
                      <option>Product Sourcing</option>
                      <option>Quality Inspection</option>
                      <option>Factory Audit</option>
                      <option>Shipping & Logistics</option>
                      <option>Full Sourcing Package</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Your Message</label>
                  <Textarea name="message" placeholder="Tell us more about your sourcing needs..." rows={6} required />
                </div>
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
                <p className="text-center text-slate-400 text-sm italic">
                  We usually respond within 12-24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 relative overflow-hidden">
         <div 
          className="absolute inset-0 grayscale contrast-125"
          data-strk-bg-id="shenzhen-map-bg"
          data-strk-bg="Shenzhen Futian district map satellite view city buildings"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-blue-900/10" />
      </section>
    </div>
  );
};

export default Contact;
