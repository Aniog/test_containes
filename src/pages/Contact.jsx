import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Inquiry sent successfully! We will contact you within 24 hours.");
    e.target.reset();
  };

  return (
    <div className="bg-gray-50">
      <section className="bg-[#002D62] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Take the first step towards a reliable China sourcing partnership.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#002D62] mb-6">Get in Touch</h3>
                <p className="text-gray-600 mb-8 font-medium">
                  We are ready to answer your questions and help you start your sourcing journey.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm border flex items-center justify-center text-[#FF6B00]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Email Us</h5>
                    <p className="text-gray-600">info@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm border flex items-center justify-center text-[#FF6B00]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Call / WhatsApp</h5>
                    <p className="text-gray-600">+86 123 4567 8910</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#002D62] mb-8">Send a Sourcing Inquiry</h3>
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#FF6B00] outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#FF6B00] outline-none transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Product(s) you want to source *</label>
                  <input required type="text" placeholder="e.g. Ergonomic Office Chairs" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#FF6B00] outline-none transition-all" />
                </div>
                <div className="md:col-span-2 pt-4">
                  <Button size="lg" className="w-full py-4 h-auto text-lg font-bold flex gap-2">
                    <Send size={20} /> Submit Sourcing Inquiry
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
