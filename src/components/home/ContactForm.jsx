import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Insert into ContactMessage
      const { error: responseError } = await client
        .from('ContactMessage')
        .insert({
          data: {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            status: 'new'
          }
        });

      if (responseError) throw responseError;

      setStatus('success');
      
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 animate-in zoom-in duration-300">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
        <p className="text-slate-600 max-w-sm">
          Thank you for reaching out. We've received your message and will get back to you shortly.
        </p>
        <button 
          onClick={() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setStatus('idle');
          }}
          className="mt-8 text-blue-600 hover:text-blue-800 font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="John Doe"
            disabled={status === 'submitting'}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="john@example.com"
            disabled={status === 'submitting'}
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="How can we help you?"
            disabled={status === 'submitting'}
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            placeholder="Please provide details about your inquiry..."
            disabled={status === 'submitting'}
          ></textarea>
        </div>
      </div>
      
      {status === 'error' && (
        <div className="p-4 rounded-lg bg-red-50 text-red-600 text-sm border border-red-100">
          There was an error sending your message. Please try again.
        </div>
      )}
      
      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full py-4 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-all
          ${status === 'submitting' 
            ? 'bg-blue-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]'
          }`}
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5 ml-1" />
          </>
        )}
      </button>
      
      <p className="text-xs text-center text-slate-500 mt-4">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  );
};

export default ContactForm;