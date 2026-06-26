import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx';
import { CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    product_interest: 'double folding machine',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    try {
      // 1. Get or create user
      const { data: existingUser } = await client
        .from('users')
        .select('id')
        .eq('email', formState.email)
        .maybeSingle();

      let userId;
      if (existingUser) {
        userId = existingUser.id;
        await client.from('users').update({ name: formState.name }).eq('id', userId);
      } else {
        const { data: newUser, error: userError } = await client
          .from('users')
          .insert({
            email: formState.email,
            name: formState.name,
            role: 'guest'
          })
          .select()
          .single();
        if (userError) throw userError;
        userId = newUser.id;
      }

      // 2. Insert inquiry
      const { error: insertError } = await client
        .from('ContactInquiry')
        .insert({
          data: {
            ...formState,
            user_id: userId
          }
        });

      if (insertError) throw insertError;

      setStatus('success');
      setFormState({
        name: '',
        email: '',
        company: '',
        product_interest: 'double folding machine',
        message: ''
      });
    } catch (err) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-950 mb-6">
              Let's Build the <span className="text-amber-600">Future</span> of Folding.
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Our experts are ready to assist you in selecting the right machinery for your precision needs. Contact us today for a consultation or quote.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950">Expert Consultation</h4>
                  <p className="text-slate-500 text-sm">Professional advice on folding technology and workflows.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950">Precision Guaranteed</h4>
                  <p className="text-slate-500 text-sm">Every fold is built with architectural precision. No compromise.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
            {status === 'success' ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="h-16 w-16 text-amber-600 mx-auto mb-6" />
                <h4 className="text-2xl font-bold text-slate-950 mb-4">Inquiry Received</h4>
                <p className="text-slate-500">Thank you for your interest. An expert will reach out to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 bg-amber-600 text-white px-8 py-3 rounded-md font-bold hover:bg-amber-700 transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-950" htmlFor="name">Full Name</label>
                    <input 
                      required
                      type="text" 
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. John Smith"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-950" htmlFor="email">Email Address</label>
                    <input 
                      required
                      type="email" 
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-950" htmlFor="company">Company</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="e.g. Precision Fab Inc."
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-950" htmlFor="product_interest">Product Interest</label>
                    <select 
                      id="product_interest"
                      name="product_interest"
                      value={formState.product_interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all bg-white"
                    >
                      <option value="double folding machine">Double Folding Machine</option>
                      <option value="sheet metal folding machine">Sheet Metal Folding Machine</option>
                      <option value="metal folder machine">Metal Folder Machine</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-950" htmlFor="message">How can we help?</label>
                  <textarea 
                    required
                    id="message"
                    name="message"
                    rows="4"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Describe your project needs..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
                  ></textarea>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-3">
                    <AlertCircle className="h-5 w-5" />
                    <span className="text-xs font-medium">{error}</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-slate-950 text-white py-4 rounded-lg font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                  <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
