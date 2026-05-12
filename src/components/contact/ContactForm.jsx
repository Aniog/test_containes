import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, User, BookOpen, Mail, MessageSquare, Telescope } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) return response.errors.join(', ');
  return error?.message || 'Submission failed. Please try again.';
};

const initialValues = { student_name: '', class_grade: '', email: '', message: '' };

const validate = (values) => {
  const errors = {};
  if (!values.student_name.trim()) errors.student_name = 'Name is required';
  if (!values.class_grade.trim()) errors.class_grade = 'Class or grade is required';
  if (!values.email.trim()) errors.email = 'Email is required';
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Please enter a valid email';
  if (!values.message.trim()) errors.message = 'Message is required';
  else if (values.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  return errors;
};

export default function ContactForm() {
  const containerRef = useRef(null);
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const errors = validate(values);
  const isValid = Object.keys(errors).length === 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ student_name: true, class_grade: true, email: true, message: true });
    if (!isValid) return;

    setStatus('submitting');
    setErrorMsg('');

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
      setErrorMsg(getErrorMessage(response, error));
      setStatus('error');
      return;
    }

    setStatus('success');
    setValues(initialValues);
    setTouched({});
  };

  const fieldClass = (name) =>
    `w-full bg-[#0a0e1a] border rounded-xl px-4 py-3.5 text-[#f0f4ff] text-sm placeholder-[#4a5568] outline-none transition-all duration-200 ${
      touched[name] && errors[name]
        ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
        : 'border-[#1e2a4a] focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1]/30 hover:border-[#2a3a5a]'
    }`;

  return (
    <div ref={containerRef} className="relative min-h-screen pt-32 pb-24 bg-[#0a0e1a] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          data-strk-bg-id="contact-bg-a1b2"
          data-strk-bg="[contact-title] radio telescope signal dish astronomy"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1200"
          className="w-full h-full"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      </div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0f1629] border border-[#1e2a4a] mb-6">
            <Telescope className="w-6 h-6 text-[#f5c842]" />
          </div>
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#f5c842] mb-3">Student Feedback</p>
          <h1 id="contact-title" className="font-serif text-4xl md:text-5xl font-light text-[#f0f4ff] mb-4">
            Ask Your Teacher
          </h1>
          <p className="text-[#8892b0] leading-relaxed max-w-md mx-auto">
            Curious about a concept? Have a question about the cosmos? Your
            physics teacher is here to guide your journey through the universe.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-[#0f1629] border border-[#2dd4bf]/30 rounded-2xl p-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2dd4bf]/10 mb-6">
              <CheckCircle className="w-8 h-8 text-[#2dd4bf]" />
            </div>
            <h2 className="font-serif text-2xl font-light text-[#f0f4ff] mb-3">Message Received!</h2>
            <p className="text-[#8892b0] leading-relaxed mb-8 max-w-sm mx-auto">
              Your question has been sent to your physics teacher. Expect a
              thoughtful response soon — the cosmos awaits your curiosity.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-8 py-3 bg-[#f5c842] text-[#0a0e1a] font-semibold rounded-full hover:bg-amber-300 transition-all duration-200 text-sm"
            >
              Send Another Question
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="bg-[#0f1629] border border-[#1e2a4a] rounded-2xl p-8 md:p-10 space-y-6">
            {status === 'error' && errorMsg && (
              <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-400">{errorMsg}</p>
              </div>
            )}

            <div>
              <label className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#8892b0] mb-2">
                <User className="w-3 h-3" /> Student Name
              </label>
              <input type="text" name="student_name" value={values.student_name} onChange={handleChange} onBlur={handleBlur} placeholder="Your full name" className={fieldClass('student_name')} autoComplete="name" />
              {touched.student_name && errors.student_name && <p className="mt-1.5 text-xs text-red-400">{errors.student_name}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#8892b0] mb-2">
                <BookOpen className="w-3 h-3" /> Class / Grade
              </label>
              <input type="text" name="class_grade" value={values.class_grade} onChange={handleChange} onBlur={handleBlur} placeholder="e.g. Grade 11, Physics 101, AP Physics" className={fieldClass('class_grade')} />
              {touched.class_grade && errors.class_grade && <p className="mt-1.5 text-xs text-red-400">{errors.class_grade}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#8892b0] mb-2">
                <Mail className="w-3 h-3" /> Email Address
              </label>
              <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="your.email@school.edu" className={fieldClass('email')} autoComplete="email" />
              {touched.email && errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#8892b0] mb-2">
                <MessageSquare className="w-3 h-3" /> Your Question or Feedback
              </label>
              <textarea name="message" value={values.message} onChange={handleChange} onBlur={handleBlur} rows={6} placeholder="What would you like to ask or share? E.g. 'How does a black hole's event horizon work?'" className={`${fieldClass('message')} resize-none`} />
              <div className="flex items-center justify-between mt-1.5">
                {touched.message && errors.message ? <p className="text-xs text-red-400">{errors.message}</p> : <span />}
                <p className="text-xs text-[#4a5568] font-mono ml-auto">{values.message.length}/2000</p>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full flex items-center justify-center gap-3 py-4 bg-[#f5c842] text-[#0a0e1a] font-semibold rounded-xl hover:bg-amber-300 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed text-sm shadow-[0_0_30px_rgba(245,200,66,0.2)] hover:shadow-[0_0_50px_rgba(245,200,66,0.35)]"
            >
              {status === 'submitting' ? (
                <>
                  <span className="w-4 h-4 border-2 border-[#0a0e1a]/30 border-t-[#0a0e1a] rounded-full animate-spin" />
                  Sending to the cosmos…
                </>
              ) : (
                <><Send className="w-4 h-4" /> Send Message</>
              )}
            </button>

            <p className="text-center text-xs text-[#4a5568]">
              Your message is sent directly to your physics teacher.
            </p>
          </form>
        )}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { q: 'What topics can I ask about?', a: 'Anything from the website — constellations, stellar evolution, telescopes, or general physics.' },
            { q: 'How quickly will I get a reply?', a: 'Your teacher typically responds within 1–2 school days.' },
            { q: 'Can I share feedback?', a: 'Absolutely! Suggestions to improve the website are always welcome.' },
          ].map(({ q, a }) => (
            <div key={q} className="p-4 bg-[#0f1629] border border-[#1e2a4a] rounded-xl">
              <p className="text-xs font-medium text-[#f0f4ff] mb-2">{q}</p>
              <p className="text-xs text-[#8892b0] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
