import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Inquiry Sent Successfully", {
            description: "Our sourcing expert will contact you within 24 hours.",
        });
        e.target.reset();
    };

    return (
        <div className="w-full bg-white pb-20">
            {/* Header */}
            <div className="bg-gray-50 py-16 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Get a Free Sourcing Quote</h1>
                    <p className="text-xl text-gray-600">Tell us about your product requirements, and we'll provide a clear project assessment.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="md:col-span-1 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Office</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Headquarters</h4>
                                        <p className="text-gray-600 mt-1">123 Commerce Avenue, Tianhe District<br/>Guangzhou, Guangdong<br/>China 510000</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Email</h4>
                                        <a href="mailto:info@ssourcingchina.com" className="text-gray-600 hover:text-blue-600 mt-1 block">info@ssourcingchina.com</a>
                                        <p className="text-sm text-gray-500">We aim to reply within 24 hours.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Phone & WhatsApp</h4>
                                        <a href="tel:+8612345678900" className="text-gray-600 hover:text-blue-600 mt-1 block">+86 123 4567 8900</a>
                                        <p className="text-sm text-gray-500">Mon-Fri, 9am - 6pm (GMT+8)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="md:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send an Inquiry</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name *</label>
                                        <Input id="firstName" required placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name *</label>
                                        <Input id="lastName" required placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Work Email *</label>
                                        <Input id="email" type="email" required placeholder="john@company.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name</label>
                                        <Input id="company" placeholder="Company Ltd." />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="product" className="text-sm font-medium text-gray-700">Target Product *</label>
                                    <Input id="product" required placeholder="e.g., Wireless Earbuds, Wooden Furniture" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="requirements" className="text-sm font-medium text-gray-700">Detailed Requirements *</label>
                                    <Textarea 
                                        id="requirements" 
                                        required 
                                        className="h-32" 
                                        placeholder="Please describe your product specifications, target quantity, required certifications, and any other specific needs..."
                                    />
                                </div>

                                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg">
                                    <Send className="mr-2 h-5 w-5" /> Submit Inquiry
                                </Button>
                                <p className="text-center text-sm text-gray-500">Your information is secure and will never be shared.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};