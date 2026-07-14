import { useState } from 'react';
import { saveContact } from '@/lib/contacts';
import { CheckCircle, Send } from 'lucide-react';

const initialForm = { name: '', email: '', subject: '', message: '' };

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) errs.subject = 'Subject is required.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      saveContact(form);
      console.log('Contact saved:', form);
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8">
        <div className="bg-green-50 text-green-600 p-4 rounded-full mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
        <p className="text-gray-600 mb-8 max-w-sm">
          Thanks for reaching out, <strong>{form.name}</strong>. We've received your message and will be in touch soon.
        </p>
        <button
          onClick={handleReset}
          className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          label="Full Name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          placeholder="jane@example.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>
      <Field
        label="Subject"
        name="subject"
        type="text"
        placeholder="What's this about?"
        value={form.subject}
        onChange={handleChange}
        error={errors.subject}
      />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us more..."
          value={form.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none ${
            errors.message ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
          }`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors"
      >
        {loading ? (
          <span className="animate-pulse">Sending…</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

const Field = ({ label, name, type, placeholder, value, onChange, error }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 rounded-lg border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
        error ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
      }`}
    />
    {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
  </div>
);

export default ContactForm;
