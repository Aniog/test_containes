import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx';
import {
  Send,
  CheckCircle,
  User,
  GraduationCap,
  Mail,
  MessageSquare,
  BookOpen,
  AlertCircle,
} from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const topicOptions = [
  { value: 'general', label: 'General Question' },
  { value: 'constellations', label: 'Constellations & Coordinates' },
  { value: 'stellar_evolution', label: 'Stellar Evolution' },
  { value: 'observational_physics', label: 'Observational Physics' },
  { value: 'gallery', label: 'Gallery & Sky Map' },
];

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Submission failed. Please try again.';
};

export default function ContactForm() {
  const [values, setValues] = useState({
    student_name: '',
    class_grade: '',
    email: '',
    topic: 'general',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    if (!values.student_name.trim()) return 'Please enter your name.';
    if (!values.class_grade.trim()) return 'Please enter your class or grade.';
    if (!values.email.trim()) return 'Please enter your email address.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    if (!values.message.trim()) return 'Please enter your message or question.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setStatus('submitting');
    console.log('Submitting student feedback:', values);

    const { data: response, error } = await client
      .from('StudentFeedback')
      .insert({
        data: {
          student_name: values.student_name,
          class_grade: values.class_grade,
          email: values.email,
          topic: values.topic,
          message: values.message,
          submitted_at: new Date().toISOString(),
        },
      })
      .select()
      .single();

    if (error || response?.success === false) {
      console.error('Feedback submission error:', error, response);
      setErrorMsg(getErrorMessage(response, error));
      setStatus('error');
      return;
    }

    console.log('Feedback submitted successfully:', response);
    setStatus('success');
    setValues({
      student_name: '',
      class_grade: '',
      email: '',
      topic: 'general',
      message: '',
    });
  };

  const inputClass =
    'w-full bg-[#0B0F19] border border-gray-700 rounded-xl px-4 py-3.5 text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/20 hover:border-gray-600 transition-all duration-200';

  const labelClass = 'block text-gray-400 text-xs tracking-widest uppercase mb-2';

  return (
    <div className="relative">
      {/* Radio telescope decorative SVG */}
      <div className="absolute -top-8 -right-8 opacity-5 pointer-events-none hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="#F59E0B" strokeWidth="1" />
          <circle cx="100" cy="100" r="55" stroke="#F59E0B" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" stroke="#F59E0B" strokeWidth="0.5" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="#F59E0B" strokeWidth="0.5" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="#F59E0B" strokeWidth="0.5" />
          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <line
              key={angle}
              x1="100"
              y1="100"
              x2={100 + 80 * Math.cos((angle * Math.PI) / 180)}
              y2={100 + 80 * Math.sin((angle * Math.PI) / 180)}
              stroke="#F59E0B"
              strokeWidth="0.3"
            />
          ))}
        </svg>
      </div>

      {/* Success State */}
      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center mb-6">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-2xl font-light text-gray-50 mb-3">Message Received!</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
            Thank you for your question. Your physics teacher will review it and
            get back to you at <span className="text-amber-400">{values.email || 'your email'}</span>.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="px-6 py-2.5 rounded-full border border-gray-700 text-gray-400 text-sm hover:border-amber-400/40 hover:text-amber-400 transition-all duration-200"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-6" noValidate>
          {/* Row 1: Name + Class */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass} htmlFor="student_name">
                <span className="flex items-center gap-1.5">
                  <User className="w-3 h-3" />
                  Student Name
                </span>
              </label>
              <input
                id="student_name"
                name="student_name"
                type="text"
                value={values.student_name}
                onChange={onChange}
                placeholder="Your full name"
                className={inputClass}
                required
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="class_grade">
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-3 h-3" />
                  Class / Grade
                </span>
              </label>
              <input
                id="class_grade"
                name="class_grade"
                type="text"
                value={values.class_grade}
                onChange={onChange}
                placeholder="e.g., Grade 11, Physics 101"
                className={inputClass}
                required
              />
            </div>
          </div>

          {/* Row 2: Email + Topic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass} htmlFor="email">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3" />
                  Email Address
                </span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={onChange}
                placeholder="you@school.edu"
                className={inputClass}
                required
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="topic">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3 h-3" />
                  Topic
                </span>
              </label>
              <select
                id="topic"
                name="topic"
                value={values.topic}
                onChange={onChange}
                className={`${inputClass} cursor-pointer`}
              >
                {topicOptions.map(({ value, label }) => (
                  <option key={value} value={value} className="bg-[#111827]">
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className={labelClass} htmlFor="message">
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-3 h-3" />
                Message / Question
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={values.message}
              onChange={onChange}
              placeholder="Ask your question or share your thoughts about the cosmos..."
              className={`${inputClass} resize-none`}
              required
            />
            <p className="text-gray-600 text-xs mt-1.5 text-right">
              {values.message.length}/2000
            </p>
          </div>

          {/* Error message */}
          {(status === 'error' || errorMsg) && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-red-400/5 border border-red-400/20">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-400 text-sm">{errorMsg}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-amber-400 text-[#0B0F19] rounded-xl font-medium text-sm tracking-wide hover:bg-amber-300 active:bg-amber-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.35)]"
          >
            {status === 'submitting' ? (
              <>
                <div className="w-4 h-4 border-2 border-[#0B0F19]/30 border-t-[#0B0F19] rounded-full animate-spin" />
                Transmitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
