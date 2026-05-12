import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { Send, CheckCircle, User, BookOpen, Mail, MessageSquare, Telescope } from 'lucide-react';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import StarField from '../components/home/StarField';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Submission failed. Please try again.';
};

const initialValues = {
  student_name: '',
  class_grade: '',
  email: '',
  message: '',
};

const validate = (values) => {
  const errors = {};
  if (!values.student_name.trim()) errors.student_name = 'Your name is required.';
  if (!values.class_grade.trim()) errors.class_grade = 'Class or grade is required.';
  if (!values.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.message.trim()) {
    errors.message = 'Please write your question or message.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  return errors;
};

function InputField({ id, label, icon: Icon, type = 'text', placeholder, value, onChange, error, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-star mb-2">
        {label} {required && <span className="text-amber">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <Icon className="w-4 h-4 text-dim" />
        </div>
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full bg-surface border rounded-xl pl-11 pr-4 py-3.5 text-star text-sm placeholder:text-dim focus:outline-none focus:ring-2 transition-all duration-200 ${
            error
              ? 'border-red-500/50 focus:ring-red-500/30 focus:border-red-500/60'
              : 'border-subtle focus:ring-amber/30 focus:border-amber/50 hover:border-amber/20'
          }`}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-red-400">{error}</p>
      )}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [serverError, setServerError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(null);

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    const { data: response, error } = await client
      .from('StudentFeedback')
      .insert({
        data: {
          student_name: values.student_name.trim(),
          class_grade: values.class_grade.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          submitted_at: new Date().toISOString(),
        },
      })
      .select()
      .single();

    if (error || response?.success === false) {
      setServerError(getErrorMessage(response, error));
      setStatus('error');
      return;
    }

    setStatus('success');
    setValues(initialValues);
    setErrors({});
  };

  const handleReset = () => {
    setStatus('idle');
    setServerError(null);
  };

  return (
    <div className="bg-void min-h-screen">
      {/* Page hero */}
      <div className="relative pt-32 pb-20 px-6 md:px-12 text-center overflow-hidden border-b border-subtle">
        <StarField count={60} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-amber">
            Student Feedback
          </span>
          <h1 className="font-serif font-light text-4xl md:text-5xl text-star mt-4 mb-5 tracking-tight">
            Contact & Feedback
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            Your curiosity drives great science. Send your questions, thoughts, or feedback directly to your physics teacher.
          </p>
        </div>
      </div>

      {/* Form section */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          {/* Success state */}
          {status === 'success' ? (
            <div className="relative bg-nebula rounded-2xl border border-amber/30 p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-amber/10 border border-amber/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-amber" />
                </div>
                <h2 className="font-serif text-2xl font-light text-star mb-3">
                  Message Received!
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                  Thank you for reaching out. Your teacher will review your question and get back to you soon. Keep exploring the cosmos!
                </p>
                <button
                  onClick={handleReset}
                  className="px-8 py-3 border border-amber/40 text-amber text-sm font-medium rounded-full hover:bg-amber/10 transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <div className="relative bg-nebula rounded-2xl border border-subtle overflow-hidden">
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-5">
                <Telescope className="w-full h-full text-amber" />
              </div>
              <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

              <div className="relative z-10 p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-light text-star mb-2">
                    Ask Your Teacher
                  </h2>
                  <p className="text-muted text-sm">
                    All fields marked with <span className="text-amber">*</span> are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Name + Class row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField
                      id="student_name"
                      label="Student Name"
                      icon={User}
                      placeholder="Your full name"
                      value={values.student_name}
                      onChange={handleChange}
                      error={errors.student_name}
                      required
                    />
                    <InputField
                      id="class_grade"
                      label="Class / Grade"
                      icon={BookOpen}
                      placeholder="e.g. Grade 11, Physics 101"
                      value={values.class_grade}
                      onChange={handleChange}
                      error={errors.class_grade}
                      required
                    />
                  </div>

                  {/* Email */}
                  <InputField
                    id="email"
                    label="Email Address"
                    icon={Mail}
                    type="email"
                    placeholder="your.email@school.edu"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-star mb-2">
                      Message / Question <span className="text-amber">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-4 pointer-events-none">
                        <MessageSquare className="w-4 h-4 text-dim" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="What would you like to ask or share with your teacher? Any questions about the cosmos, the lessons, or astronomy in general are welcome..."
                        value={values.message}
                        onChange={handleChange}
                        required
                        className={`w-full bg-surface border rounded-xl pl-11 pr-4 py-3.5 text-star text-sm placeholder:text-dim focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                          errors.message
                            ? 'border-red-500/50 focus:ring-red-500/30 focus:border-red-500/60'
                            : 'border-subtle focus:ring-amber/30 focus:border-amber/50 hover:border-amber/20'
                        }`}
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                    )}
                    <p className="mt-1.5 text-xs text-dim">
                      {values.message.length}/2000 characters
                    </p>
                  </div>

                  {/* Server error */}
                  {status === 'error' && serverError && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
                      <p className="text-sm text-red-400">{serverError}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-amber text-cosmos font-semibold text-sm rounded-xl hover:bg-amber/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-xl hover:shadow-amber/20 active:scale-[0.99]"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-cosmos/30 border-t-cosmos rounded-full animate-spin" />
                        Sending your message…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message to Teacher
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              { icon: '🔭', title: 'Physics Questions', desc: 'Ask about any concept from class or the website' },
              { icon: '💡', title: 'Feedback Welcome', desc: 'Share what you enjoyed or want to learn more about' },
              { icon: '⚡', title: 'Quick Response', desc: 'Your teacher aims to reply within 48 hours' },
            ].map((card) => (
              <div key={card.title} className="bg-surface rounded-xl border border-subtle p-5 text-center">
                <div className="text-2xl mb-2">{card.icon}</div>
                <h4 className="text-sm font-semibold text-star mb-1">{card.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
