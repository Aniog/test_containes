import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        productRequirements: ''
    });
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const validate = (v) => {
        if (!v.name.trim()) return 'Name is required';
        if (!v.email.trim()) return 'Email is required';
        if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email';
        if (!v.productRequirements.trim()) return 'Product Requirements is required';
        return null;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        
        const err = validate(formData);
        if (err) {
            setError(err);
            return;
        }

        setStatus('submitting');

        try {
            const { data: response, error: submitError } = await client
              .from('ContactFormResponse')
              .insert({
                data: {
                  name: formData.name,
                  email: formData.email,
                  company: formData.company,
                  productRequirements: formData.productRequirements,
                  status: 'New'
                }
              })
              .select()
              .single();

            if (submitError || response?.success === false) {
                let errorMsg = 'Failed to submit form';
                if (response?.errors && response.errors.length > 0) {
                    errorMsg = response.errors.join(', ');
                } else if (submitError) {
                    errorMsg = submitError.message || errorMsg;
                }
                throw new Error(errorMsg);
            }

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                company: '',
                productRequirements: ''
            });

        } catch (err) {
            console.error(err);
            setError(err.message || 'Submission failed');
            setStatus('error');
        }
    }

  return (
    <div className="py-20 bg-gray-50 flex-grow">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-md border border-gray-100">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Get a Free Sourcing Quote</h1>
            <p className="text-gray-600 mb-8 text-center">Fill out the form below with your requirements, and our team will get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" disabled={status === 'submitting'} />
                </div>
                <div>
                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" disabled={status === 'submitting'} />
                </div>
                <div>
                     <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" disabled={status === 'submitting'} />
                </div>
                <div>
                     <label htmlFor="productRequirements" className="block text-sm font-medium text-gray-700">Product Requirements *</label>
                     <p className="text-xs text-gray-500 mb-2 mt-1">Please describe what you are looking to source, quantities, specifications, etc.</p>
                    <textarea id="productRequirements" name="productRequirements" rows="5" required value={formData.productRequirements} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" disabled={status === 'submitting'}></textarea>
                </div>
                
                {status === 'error' && !!error && <div className="text-red-600 text-sm font-medium bg-red-50 p-3 rounded">{error}</div>}
                {status === 'success' && <div className="text-green-600 text-sm font-medium bg-green-50 p-3 rounded">Thank you! Your sourcing request has been received. We will be in touch shortly.</div>}

                <button type="submit" disabled={status === 'submitting'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:bg-blue-400">
                    {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;