import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

const STORAGE_KEY = 'saved_contacts';

const saveContact = (contact) => {
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  const newContact = {
    ...contact,
    id: Date.now().toString(),
    submittedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([newContact, ...existing]));
  return newContact;
};

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      saveContact(form);
      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', email: '', company: '', message: '' });
    }, 800);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Message received!</h3>
        <p className="text-gray-600 mb-6">Thanks for reaching out. We'll get back to you soon.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-5 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={`w-full px-4 py-2.5 rounded-lg border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
              errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className={`w-full px-4 py-2.5 rounded-lg border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
              errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          placeholder="Acme Inc."
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us how we can help..."
          className={`w-full px-4 py-2.5 rounded-lg border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none ${
            errors.message ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
          }`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold rounded-lg transition-colors text-sm"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send message'
        )}
      </button>
    </form>
  );
};

const ContactSection = () => (
  <section id="contact" className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in touch</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Have a question or want to learn more? Fill out the form and we'll get back to you within one business day.
          </p>
          <div className="space-y-4">
            {[
              { label: 'Response time', value: 'Within 24 hours' },
              { label: 'Support hours', value: 'Mon–Fri, 9am–6pm EST' },
              { label: 'Email', value: 'hello@example.com' },
            ].map((item) => (
              <div key={item.label} className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                <div>
                  <span className="text-sm font-medium text-gray-900">{item.label}: </span>
                  <span className="text-sm text-gray-600">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
