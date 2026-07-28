import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        interest: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const getErrorMessage = (response, errorObj) => {
        if (Array.isArray(response?.errors) && response.errors.length > 0) {
            return response.errors.join(', ');
        }
        return errorObj?.message || 'Request failed';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const { data: response, error: submitError } = await client
                .from('SourcingInquiries')
                .insert({
                    data: {
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        email: formData.email,
                        company: formData.company || undefined,
                        interest: formData.interest,
                        message: formData.message,
                        status: 'new'
                    }
                })
                .select()
                .single();

            if (submitError || response?.success === false) {
                setError(getErrorMessage(response, submitError));
                setIsSubmitting(false);
                return;
            }

            setIsSubmitted(true);
        } catch (err) {
            setError(err.message || 'An unexpected error occurred');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Get a Free Sourcing Quote</h1>
                    <p className="text-xl text-slate-600">
                        Tell us about the products you want to source from China. Our team will review your requirements and get back to you within 24 hours.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
                    
                    {/* Left side: Contact Info */}
                    <div className="lg:w-1/3 bg-blue-900 text-white p-10 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <p className="text-blue-200 mb-10">
                                We're based in Guangzhou, the heart of China's manufacturing hub, giving us direct access to the best factories.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Our Office</h3>
                                        <p className="text-blue-200">Tianhe District, Guangzhou<br />Guangdong, China 510000</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Call Us</h3>
                                        <p className="text-blue-200">+86 123 4567 8900<br />(Mon-Fri, 9am - 6pm CST)</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Email</h3>
                                        <p className="text-blue-200">info@ssourcingchina.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Contact Form */}
                    <div className="lg:w-2/3 p-10">
                        {isSubmitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                                <p className="text-slate-600">
                                    Thank you for your inquiry. Our sourcing specialists are reviewing your requirements and will contact you via email within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
                                
                                {error && (
                                    <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 mb-6">
                                        <p>{error}</p>
                                    </div>
                                )}
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                        <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow" placeholder="John" />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                        <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                                        <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow" placeholder="john@company.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                                        <input type="text" id="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow" placeholder="Optional" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">I am interested in...</label>
                                    <select id="interest" value={formData.interest} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow bg-white">
                                        <option value="">Select a service</option>
                                        <option value="sourcing">Product Sourcing & Quotation</option>
                                        <option value="audit">Factory Audit</option>
                                        <option value="inspection">Quality Inspection (AQL)</option>
                                        <option value="logistics">Shipping & Logistics</option>
                                        <option value="other">Other / General Inquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Product Details & Requirements</label>
                                    <textarea id="message" value={formData.message} onChange={handleChange} rows="5" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow resize-none" placeholder="Please describe the product you want to source, including material, size, target quantity, and any specific certifications needed..."></textarea>
                                </div>

                                <div>
                                    <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors shadow-md disabled:bg-blue-400 disabled:cursor-not-allowed">
                                        {isSubmitting ? 'Submitting...' : 'Submit Request'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;