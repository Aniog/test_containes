import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        machine: 'general',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(v => ({ ...v, [name]: value }));
    };

    const validate = (v) => {
        if (!v.name.trim()) return 'Name is required';
        if (!v.email.trim()) return 'Email is required';
        if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please provide a valid email';
        if (!v.message.trim()) return 'Message is required';
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(null);
        
        const err = validate(values);
        if (err) {
            setErrorMessage(err);
            return;
        }

        setStatus('submitting');

        try {
            const { data: response, error: responseError } = await client
                .from('ContactFormResponse')
                .insert({
                    data: {
                        email: values.email,
                        name: values.name,
                        phone: values.phone,
                        company: values.company,
                        machine_interest: values.machine,
                        message: values.message,
                        status: 'new'
                    }
                })
                .select()
                .single();

            if (responseError || response?.success === false) {
                 // Fallback error message extraction
                 let msg = responseError?.message || 'Submission failed';
                 if (Array.isArray(response?.errors) && response.errors.length > 0) {
                     msg = response.errors.join(', ');
                 }
                 throw new Error(msg);
            }

            setStatus('success');
            setValues({ name: '', email: '', phone: '', company: '', machine: 'general', message: '' });

        } catch (error) {
            console.error(error);
            setErrorMessage(error.message || 'An error occurred. Please try again.');
            setStatus('error');
        }
    };

    return (
        <div className="animate-in fade-in duration-500 pb-20">
             {/* Header */}
             <div className="bg-blue-900 py-16 text-white border-b-8 border-orange-500 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9jaXJjbGU+Cjwvc3ZnPg==')]"></div>
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Get in Touch</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Ready to discuss your sheet metal folding needs? Our engineering team is standing by to provide expert consultation.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">We manufacture our double folding machines in-house. Visits to our facility are available by appointment.</p>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-full text-orange-500 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Headquarters & Factory</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        123 Industrial Ave, Tech Park<br/>
                                        Engineering City, EC 90210
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-full text-orange-500 shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                                    <p className="text-gray-600 text-sm">
                                        Sales: +1 (555) 123-4567<br/>
                                        Service: +1 (555) 123-4568
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-full text-orange-500 shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                                    <p className="text-gray-600 text-sm">
                                        info@artitectmachinery.com<br/>
                                        sales@artitectmachinery.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-full text-orange-500 shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                                    <p className="text-gray-600 text-sm">
                                        Mon-Fri: 8:00 AM - 5:00 PM<br/>
                                        Sat-Sun: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
                            
                            {status === 'success' ? (
                                <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-lg text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                       <Send size={24} className="text-green-600" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                                    <p>Thank you for reaching out. An ARTITECT representative will contact you shortly.</p>
                                    <button 
                                        onClick={() => setStatus('idle')}
                                        className="mt-6 text-blue-700 font-semibold hover:text-blue-900 underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name */}
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name *</label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                name="name" 
                                                value={values.name} 
                                                onChange={handleChange} 
                                                required
                                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-gray-50 focus:bg-white"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address *</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                value={values.email} 
                                                onChange={handleChange} 
                                                required
                                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-gray-50 focus:bg-white"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</label>
                                            <input 
                                                type="tel" 
                                                id="phone" 
                                                name="phone" 
                                                value={values.phone} 
                                                onChange={handleChange} 
                                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-gray-50 focus:bg-white"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>

                                        {/* Company */}
                                        <div className="space-y-2">
                                            <label htmlFor="company" className="block text-sm font-semibold text-gray-700">Company Name</label>
                                            <input 
                                                type="text" 
                                                id="company" 
                                                name="company" 
                                                value={values.company} 
                                                onChange={handleChange} 
                                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-gray-50 focus:bg-white"
                                                placeholder="Acme Fabrication"
                                            />
                                        </div>
                                    </div>

                                    {/* Machine Interest */}
                                    <div className="space-y-2">
                                        <label htmlFor="machine" className="block text-sm font-semibold text-gray-700">Subject / Machine of Interest</label>
                                        <select 
                                            id="machine" 
                                            name="machine" 
                                            value={values.machine} 
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-gray-50 focus:bg-white cursor-pointer"
                                        >
                                            <option value="general">General Inquiry</option>
                                            <option value="foldmaster-pro">FoldMaster Pro</option>
                                            <option value="foldmaster-eco">FoldMaster Eco</option>
                                            <option value="foldmaster-multi">FoldMaster Multi</option>
                                            <option value="custom">Custom Application</option>
                                            <option value="service">Service & Support</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Your Message *</label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            rows="5"
                                            value={values.message} 
                                            onChange={handleChange} 
                                            required
                                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-gray-50 focus:bg-white resize-y"
                                            placeholder="Please provide details about your application, material thickness, bend lengths..."
                                        ></textarea>
                                    </div>

                                    {/* Error Display */}
                                    {status === 'error' && errorMessage && (
                                        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
                                            {errorMessage}
                                        </div>
                                    )}

                                    {/* Submit */}
                                    <button 
                                        type="submit" 
                                        disabled={status === 'submitting'}
                                        className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-sm disabled:opacity-70 flex items-center justify-center gap-2"
                                    >
                                        {status === 'submitting' ? 'Submitting...' : (
                                            <>Submit Inquiry <Send size={20} /></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;