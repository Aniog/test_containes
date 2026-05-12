import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, BookOpen, Mail, MessageSquare } from 'lucide-react';
import { submitFeedback } from '../../api/feedback';

const INITIAL = { student_name: '', class_grade: '', email: '', message: '' };

function validate(v) {
  if (!v.student_name.trim()) return 'Please enter your name.';
  if (!v.class_grade.trim()) return 'Please enter your class or grade.';
  if (!v.email.trim()) return 'Please enter your email address.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.';
  if (!v.message.trim()) return 'Please write your question or message.';
  if (v.message.trim().length < 10) return 'Your message must be at least 10 characters.';
  return null;
}

function InputField({ id, label, icon: Icon, type = 'text', placeholder, value, onChange, required }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-comet">
        <Icon className="w-3.5 h-3.5 text-aurora" />
        {label}
        {required && <span className="text-aurora">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-nebula border border-stardust text-moonlight placeholder:text-horizon rounded-lg px-4 py-3 font-inter text-sm focus:ring-2 focus:ring-aurora/50 focus:border-aurora outline-none transition-all duration-200 hover:border-stardust/80"
      />
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const err = validate(values);
    if (err) { setErrorMsg(err); return; }

    setStatus('submitting');
    try {
      await submitFeedback(values);
      setStatus('success');
      setValues(INITIAL);
    } catch (err) {
      console.error('Feedback submission error:', err);
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-deep-space border border-stardust/60 rounded-2xl p-10 md:p-14 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-aurora/10 border border-aurora/30 flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8 text-aurora" />
        </div>
        <div className="space-y-2">
          <h2 className="font-cormorant text-3xl font-light text-moonlight">Message Received</h2>
          <p className="font-inter text-sm text-comet max-w-sm mx-auto leading-relaxed">
            Thank you for your curiosity. Your teacher will review your question and respond soon.
            Keep looking up — the universe has answers for every question.
          </p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="inline-flex items-center gap-2 border border-aurora/40 text-aurora font-inter text-sm px-6 py-3 rounded-lg hover:bg-aurora/10 transition-all duration-200"
        >
          Submit Another Question
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="bg-deep-space border border-stardust/60 rounded-2xl p-8 md:p-12 space-y-7"
    >
      <div className="space-y-1">
        <h2 className="font-cormorant text-3xl font-light text-moonlight">Send a Message</h2>
        <p className="font-inter text-sm text-comet">
          Every great discovery began with a question. What's yours?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          id="student_name"
          label="Student Name"
          icon={User}
          placeholder="Your full name"
          value={values.student_name}
          onChange={onChange}
          required
        />
        <InputField
          id="class_grade"
          label="Class / Grade"
          icon={BookOpen}
          placeholder="e.g. Grade 11, Physics 101"
          value={values.class_grade}
          onChange={onChange}
          required
        />
      </div>

      <InputField
        id="email"
        label="Email Address"
        icon={Mail}
        type="email"
        placeholder="you@school.edu"
        value={values.email}
        onChange={onChange}
        required
      />

      <div className="space-y-2">
        <label htmlFor="message" className="flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-comet">
          <MessageSquare className="w-3.5 h-3.5 text-aurora" />
          Your Question or Message
          <span className="text-aurora">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={onChange}
          placeholder="What would you like to ask or share with your teacher? Be as specific as you like — the more detail, the better the answer."
          required
          className="w-full bg-nebula border border-stardust text-moonlight placeholder:text-horizon rounded-lg px-4 py-3 font-inter text-sm focus:ring-2 focus:ring-aurora/50 focus:border-aurora outline-none transition-all duration-200 hover:border-stardust/80 resize-none"
        />
        <p className="font-inter text-xs text-horizon text-right">{values.message.length} / 2000</p>
      </div>

      {/* Error message */}
      {errorMsg && (
        <div className="flex items-start gap-3 bg-red-900/20 border border-red-500/30 rounded-lg px-4 py-3">
          <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
          <p className="font-inter text-sm text-red-300">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full flex items-center justify-center gap-2 bg-aurora text-white font-inter text-sm px-6 py-3.5 rounded-lg hover:bg-aurora/90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-aurora"
      >
        {status === 'submitting' ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>

      <p className="font-inter text-xs text-horizon text-center">
        Your message is sent directly to your physics teacher. Fields marked * are required.
      </p>
    </form>
  );
}
