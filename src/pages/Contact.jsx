import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import {
  Send,
  CheckCircle,
  User,
  GraduationCap,
  Mail,
  MessageSquare,
  BookOpen,
  AlertCircle,
  Telescope,
  Radio,
} from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const topicOptions = [
  { value: 'general', label: 'General Question' },
  { value: 'constellations', label: 'Constellations & Coordinates' },
  { value: 'stellar_evolution', label: 'Stellar Evolution' },
  { value: 'observational_physics', label: 'Observational Physics' },
  { value: 'gallery', label: 'Gallery / Phenomena' },
];

const initialValues = {
  student_name: '',
  class_grade: '',
  email: '',
  topic: 'general',
  message: '',
};

function validate(values) {
  const errors = {};
  if (!values.student_name.trim()) errors.student_name = 'Name is required';
  if (!values.class_grade.trim()) errors.class_grade = 'Class or grade is required';
  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!values.message.trim()) errors.message = 'Message is required';
  else if (values.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    setServerError('');

    const { data: response, error } = await client
      .from('StudentFeedback')
      .insert({
        data: {
          student_name: values.student_name.trim(),
          class_grade: values.class_grade.trim(),
          email: values.email.trim(),
          topic: values.topic,
          message: values.message.trim(),
        },
      })
      .select()
      .single();

    if (error || response?.success === false) {
      const msg = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : error?.message || 'Something went wrong. Please try again.';
      setServerError(msg);
      setStatus('error');
      return;
    }

    setStatus('success');
    setValues(initialValues);
    setErrors({});
  };

  const inputClass = (field) =>
    `w-full bg-slate-800/60 border rounded-xl px-4 py-3.5 text-slate-100 placeholder:text-slate-500 text-sm transition-all duration-200 focus:ring-1 ${
      errors[field]
        ? 'border-red-400/60 focus:border-red-400 focus:ring-red-400/20'
        : 'border-white/10 focus:border-amber-400/60 focus:ring-amber-400/20'
    }`;

  return (
    <div className="bg-space-950 pt-24 min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 text-center">
        <p className="section-label mb-4">Student Feedback</p>
        <h1 className="font-serif text-5xl md:text-6xl font-light text-star-silver mb-6">
          Ask Your Teacher
        </h1>
        <div className="amber-divider mx-auto" />
        <p className="text-slate-300 text-lg leading-relaxed max-w-xl mx-auto mt-6">
          Have a question about the cosmos? Curious about a concept from class?
          Send your message and your teacher will respond thoughtfully.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Sidebar Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-amber-400/10 rounded-xl">
                  <Telescope className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-serif text-xl font-light text-star-silver">How It Works</h3>
              </div>
              <ol className="space-y-5">
                {[
                  { step: '01', text: 'Fill in your name, class, and email address.' },
                  { step: '02', text: 'Select the topic your question relates to.' },
                  { step: '03', text: 'Write your question or feedback in detail.' },
                  { step: '04', text: 'Submit — your teacher will review and respond.' },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <span className="font-mono text-xs text-amber-400 bg-amber-400/10 px-2 py-1 rounded-md flex-shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Decorative element — telescope signal graphic */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              {/* Subtle signal wave decoration */}
              <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
                <Radio className="w-40 h-40 text-amber-400" />
              </div>
              <div className="relative z-10">
                <BookOpen className="w-5 h-5 text-indigo-400 mb-4" />
                <h4 className="font-serif text-lg font-light text-star-silver mb-3">
                  Topics You Can Ask About
                </h4>
                <ul className="space-y-2">
                  {topicOptions.map((t) => (
                    <li key={t.value} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
                      {t.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="glass-card rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center min-h-96">
                <div className="w-16 h-16 bg-teal-400/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="font-serif text-2xl font-light text-star-silver mb-3">
                  Message Sent!
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
                  Thank you for your question. Your teacher has received it and will
                  respond to your email address soon. Keep exploring the cosmos!
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm text-amber-400 hover:text-amber-300 transition-colors font-mono tracking-widest uppercase"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="glass-card rounded-2xl p-8 md:p-10">
                <h2 className="font-serif text-2xl font-light text-star-silver mb-8">
                  Submit Your Question
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  {/* Student Name */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400 mb-2">
                      <User className="w-3 h-3" />
                      Student Name
                    </label>
                    <input
                      type="text"
                      name="student_name"
                      value={values.student_name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass('student_name')}
                      autoComplete="name"
                    />
                    {errors.student_name && (
                      <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3 h-3" />
                        {errors.student_name}
                      </p>
                    )}
                  </div>

                  {/* Class/Grade */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400 mb-2">
                      <GraduationCap className="w-3 h-3" />
                      Class / Grade
                    </label>
                    <input
                      type="text"
                      name="class_grade"
                      value={values.class_grade}
                      onChange={handleChange}
                      placeholder="e.g., Grade 11, Physics 101"
                      className={inputClass('class_grade')}
                    />
                    {errors.class_grade && (
                      <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3 h-3" />
                        {errors.class_grade}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400 mb-2">
                    <Mail className="w-3 h-3" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="your.email@school.edu"
                    className={inputClass('email')}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Topic */}
                <div className="mb-5">
                  <label className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400 mb-2">
                    <BookOpen className="w-3 h-3" />
                    Topic
                  </label>
                  <select
                    name="topic"
                    value={values.topic}
                    onChange={handleChange}
                    className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3.5 text-slate-100 text-sm transition-all duration-200 focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/20 cursor-pointer appearance-none"
                  >
                    {topicOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-slate-800 text-slate-100">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400 mb-2">
                    <MessageSquare className="w-3 h-3" />
                    Your Question or Feedback
                  </label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="What would you like to ask or share? Be as specific as possible — the more detail you provide, the better your teacher can help you."
                    className={`${inputClass('message')} resize-none leading-relaxed`}
                  />
                  <div className="flex items-center justify-between mt-1.5">
                    {errors.message ? (
                      <p className="flex items-center gap-1.5 text-xs text-red-400">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className={`text-xs font-mono ${values.message.length > 1800 ? 'text-red-400' : 'text-slate-500'}`}>
                      {values.message.length}/2000
                    </span>
                  </div>
                </div>

                {/* Server Error */}
                {status === 'error' && serverError && (
                  <div className="flex items-start gap-3 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3.5 mb-6">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-300">{serverError}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 disabled:bg-amber-400/50 disabled:cursor-not-allowed text-space-950 font-medium text-sm tracking-wide py-4 rounded-xl transition-all duration-200 shadow-lg shadow-amber-400/15"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-space-950/30 border-t-space-950 rounded-full animate-spin" />
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
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
