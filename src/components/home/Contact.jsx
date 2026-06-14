import React from 'react';

const Contact = () => {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product_interest: '',
    message: '',
  });
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required';
    if (!v.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please provide a valid email address';
    if (!v.message.trim()) return 'Message is required';
    if (v.message.trim().length < 10) return 'Message must be at least 10 characters';
    return null;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) {
      setError(err);
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setValues({
        name: '',
        email: '',
        phone: '',
        company: '',
        product_interest: '',
        message: '',
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 id="contact-title" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h2>
            <p id="contact-subtitle" className="text-lg text-slate-600 mb-8 leading-relaxed">
              Interested in our double folding machines, sheet metal folders, or metal folding
              solutions? Tell us about your project and we will provide a tailored recommendation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Location</h3>
                  <p className="text-slate-600">Industrial Machinery Park, Manufacturing District</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <a href="tel:+1234567890" className="text-slate-600 hover:text-slate-900 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <a href="mailto:info@artitect-machinery.com" className="text-slate-600 hover:text-slate-900 transition-colors">
                    info@artitect-machinery.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <form onSubmit={onSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    required
                    placeholder="John Smith"
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={onChange}
                    placeholder="+1 (234) 567-890"
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={onChange}
                    placeholder="Your Company"
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="product_interest" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Product Interest
                </label>
                <select
                  id="product_interest"
                  name="product_interest"
                  value={values.product_interest}
                  onChange={onChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 bg-white"
                >
                  <option value="">Select a product category</option>
                  <option value="Double Folding Machine">Double Folding Machine</option>
                  <option value="Double Folder">Double Folder</option>
                  <option value="Sheet Metal Folder">Sheet Metal Folder</option>
                  <option value="Sheet Metal Folding Machine">Sheet Metal Folding Machine</option>
                  <option value="Metal Folder">Metal Folder</option>
                  <option value="Metal Folder Machine">Metal Folder Machine</option>
                  <option value="Metal Folding Machine">Metal Folding Machine</option>
                  <option value="Other">Other / General Inquiry</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={onChange}
                  required
                  placeholder="Tell us about your project requirements..."
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="mb-5 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
                  Thank you for your inquiry. Our team will get back to you within 24 hours.
                </div>
              )}

              {status === 'error' && error && (
                <div className="mb-5 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm" role="alert">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-sm font-semibold rounded-lg text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
