import React from 'react';
import { DataClient } from '@strikingly/sdk'; 
// Note: User and Auth are missing from current SDK version, using DataClient instead.
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Ensure User Record (CRM)
      const { data: userRecord, error: userError } = await client
        .from('Users')
        .upsert({
          email: formData.email,
          name: formData.name,
          role: 'guest',
        })
        .select()
        .single();

      if (userError || !userRecord) {
        throw new Error(userError?.message || 'Failed to process user profile');
      }

      // 2. Insert Inquiry linked to user
      const { error } = await client
        .from('Inquiries')
        .insert({
          data: {
            user_id: userRecord.id,
            name: formData.name,
            email: formData.email,
            company: formData.company,
            product: formData.product,
            message: formData.message
          }
        });

      if (error) throw error;

      toast.success('Inquiry submitted successfully!', {
        description: 'Our team will contact you within 24 hours.',
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        product: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      toast.error('Failed to submit inquiry', {
        description: err.message || 'Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 bg-white">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Our Experts</h1>
          <p className="text-gray-600 text-lg">
            Have questions about our folding machines? Need a custom solution or a quote? Fill out the form below and we'll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Global Headquarters</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 rounded-full p-3 shadow-lg shadow-blue-200">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      123 Industrial Ave, Machinery Park,<br />
                      Precision City, 45678, United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 rounded-full p-3 shadow-lg shadow-blue-200">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600">Main Office: +1 (555) 123-4567</p>
                    <p className="text-gray-600">Support: +1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 rounded-full p-3 shadow-lg shadow-blue-200">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">Sales: sales@artitect-machinery.com</p>
                    <p className="text-gray-600">Support: support@artitect-machinery.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
              <h3 className="text-xl font-bold text-orange-900 mb-4">Precision Guarantee</h3>
              <p className="text-orange-800 leading-relaxed">
                All ARTITECT MACHINERY products come with a comprehensive 2-year warranty and lifetime technical support. We are committed to your success.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="focus:ring-blue-900"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="focus:ring-blue-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700 font-medium">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="BuildCorp Inc."
                    className="focus:ring-blue-900"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product" className="text-gray-700 font-medium">Interested Product</Label>
                  <Input
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    placeholder="DF-2000 Pro"
                    className="focus:ring-blue-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 font-medium">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={6}
                  required
                  className="focus:ring-blue-900"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-900 hover:bg-blue-700 h-12 text-lg transition-all group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending Inquiry...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
