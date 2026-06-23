import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        company: '',
        product_details: '',
        estimated_quantity: '',
        target_market: ''
    });
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues((v) => ({ ...v, [name]: value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setStatus('submitting');

        try {
            const { data: response, error: submitError } = await client
                .from('SourcingInquiry')
                .insert({
                    data: {
                        name: values.name,
                        email: values.email,
                        company: values.company,
                        product_details: values.product_details,
                        estimated_quantity: values.estimated_quantity,
                        target_market: values.target_market,
                        status: 'new'
                    }
                })
                .select()
                .single();

            if (submitError || response?.success === false) {
                 let errMessage = submitError?.message || 'Failed to submit inquiry';
                 if (response?.errors && response.errors.length > 0) {
                     errMessage = response.errors.join(', ');
                 }
                 throw new Error(errMessage);
            }

            setStatus('success');
            setValues({
                name: '', email: '', company: '', product_details: '', estimated_quantity: '', target_market: ''
            });

        } catch (err) {
            console.error(err);
            setError(err.message || 'An error occurred. Please try again.');
            setStatus('error');
        }
    };

    return (
        <div className="bg-slate-50 py-16 md:py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 relative">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get a Free Sourcing Quote</h1>
                        <p className="text-lg text-slate-600">Tell us about the product you want to source, and our team will get back to you within 24 hours.</p>
                    </div>

                    {status === 'success' ? (
                        <div className="text-center py-12">
                            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h2>
                            <p className="text-slate-600">Thank you for your inquiry. A sourcing specialist will contact you shortly at the email provided.</p>
                            <button 
                                onClick={() => setStatus('idle')}
                                className="mt-8 text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Submit another inquiry
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit} className="space-y-6">
                            {status === 'error' && (
                                <div className="bg-red-50 text-red-700 p-4 rounded-md flex items-start">
                                    <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>{error}</span>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                                    <input 
                                        type="text" id="name" name="name" required
                                        value={values.name} onChange={onChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                                    <input 
                                        type="email" id="email" name="email" required
                                        value={values.email} onChange={onChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company / Website</label>
                                <input 
                                    type="text" id="company" name="company"
                                    value={values.company} onChange={onChange}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900"
                                />
                            </div>

                            <div>
                                <label htmlFor="product_details" className="block text-sm font-medium text-slate-700 mb-1">Product Details & Specifications *</label>
                                <textarea 
                                    id="product_details" name="product_details" rows={4} required
                                    value={values.product_details} onChange={onChange}
                                    placeholder="Describe the product, materials, sizes, and any specific requirements..."
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="estimated_quantity" className="block text-sm font-medium text-slate-700 mb-1">Estimated Order Quantity *</label>
                                    <input 
                                        type="text" id="estimated_quantity" name="estimated_quantity" required
                                        value={values.estimated_quantity} onChange={onChange}
                                        placeholder="e.g. 500 pcs, 1000 units"
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="target_market" className="block text-sm font-medium text-slate-700 mb-1">Target Market / Shipping Destination</label>
                                    <input 
                                        type="text" id="target_market" name="target_market"
                                        value={values.target_market} onChange={onChange}
                                        placeholder="e.g. USA, UK, Germany"
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900"
                                    />
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={status === 'submitting'}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? 'Submitting...' : 'Send Inquiry'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;