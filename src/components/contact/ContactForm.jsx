import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, User, BookOpen, Mail, MessageSquare, Loader2, Star, Telescope } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const gradeOptions = [
  'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12',
  'AP Physics', 'IB Physics', 'University Year 1', 'University Year 2+', 'Other',
];

const topicOptions = [
  'Constellations & Coordinates',
  'Stellar Evolution',
  'Observational Physics',
  'Electromagnetic Spectrum',
  'Gravitational Physics',
  'Quantum Mechanics',
  'Cosmology & Big Bang',
  'Other',
];

const initialForm = {
  name:     '',
  grade:    '',
  email:    '',
  topic:    '',
  question: '',
};

export default function ContactForm() {
  const [form, setForm]       = useState(initialForm);
  const [status, setStatus]   = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors]   = useState({});
  const containerRef          = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim())     e.name     = 'Please enter your name.';
    if (!form.grade)           e.grade    = 'Please select your class/grade.';
    if (!form.email.trim())    e.email    = 'Please enter your email.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.question.trim()) e.question = 'Please write your question.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('submitting');
    // Simulate network delay
    await new Promise((res) => setTimeout(res, 1800));
    setStatus('success');
    console.log('Form submitted:', form);
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setStatus('idle');
  };

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">

      {/* Background — star trail long-exposure photograph or telescope lens bokeh */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="contact-bg-startrail-5a2c8f"
        data-strk-bg="[contact-bg-desc] [contact-bg-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Hidden text for image query context */}
      <span id="contact-bg-title" className="hidden">star trails long exposure night sky telescope observatory</span>
      <span id="contact-bg-desc" className="hidden">circular star trails around north star Polaris long exposure astrophotography</span>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-cosmos-void/85 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-glow/10 border border-amber-glow/30 mb-5 animate-glow">
            <Telescope className="w-6 h-6 text-amber-glow" />
          </div>
          <h1 className="font-display font-black text-3xl md:text-4xl text-star-white mb-3">
            Ask Your Physics Teacher
          </h1>
          <p className="text-cosmos-subtle text-base leading-relaxed max-w-md mx-auto">
            Curious about the cosmos? Submit your question and your teacher will respond with a detailed, physics-based explanation.
          </p>
        </div>

        {/* Success state */}
        {status === 'success' ? (
          <div className="glass-card rounded-2xl p-10 text-center animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 mb-5">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="font-display font-bold text-2xl text-star-white mb-3">
              Question Received!
            </h2>
            <p className="text-cosmos-subtle text-sm leading-relaxed mb-2">
              Thank you, <span className="text-amber-glow font-semibold">{form.name}</span>. Your question has been sent to your Physics teacher.
            </p>
            <p className="text-cosmos-subtle text-sm leading-relaxed mb-8">
              You'll receive a response at <span className="text-star-blue">{form.email}</span> within 1–2 school days.
            </p>
            {/* Stars decoration */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-glow"
                  style={{ animationDelay: `${i * 0.1}s` }}
                  fill="currentColor"
                />
              ))}
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-cosmos-surface border border-cosmos-border hover:border-amber-glow/40 text-cosmos-text hover:text-amber-glow text-sm font-medium rounded-xl transition-all duration-300"
            >
              Submit Another Question
            </button>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 md:p-10 space-y-6"
            noValidate
          >
            {/* Name + Grade row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cosmos-subtle mb-2">
                  <User className="w-3.5 h-3.5 text-amber-glow" />
                  Student Name <span className="text-amber-glow">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 rounded-xl bg-cosmos-surface border text-cosmos-text placeholder-cosmos-muted text-sm focus:outline-none focus:ring-2 focus:ring-amber-glow/40 transition-all duration-300 ${
                    errors.name ? 'border-red-500/60' : 'border-cosmos-border focus:border-amber-glow/50'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
              </div>

              {/* Grade */}
              <div>
                <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cosmos-subtle mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-amber-glow" />
                  Class / Grade <span className="text-amber-glow">*</span>
                </label>
                <select
                  name="grade"
                  value={form.grade}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-cosmos-surface border text-sm focus:outline-none focus:ring-2 focus:ring-amber-glow/40 transition-all duration-300 appearance-none ${
                    errors.grade ? 'border-red-500/60 text-cosmos-text' : 'border-cosmos-border focus:border-amber-glow/50 text-cosmos-text'
                  } ${!form.grade ? 'text-cosmos-muted' : ''}`}
                >
                  <option value="" disabled className="bg-cosmos-surface text-cosmos-muted">Select your grade</option>
                  {gradeOptions.map((g) => (
                    <option key={g} value={g} className="bg-cosmos-surface text-cosmos-text">{g}</option>
                  ))}
                </select>
                {errors.grade && <p className="text-xs text-red-400 mt-1.5">{errors.grade}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cosmos-subtle mb-2">
                <Mail className="w-3.5 h-3.5 text-amber-glow" />
                Email Address <span className="text-amber-glow">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your.email@school.edu"
                className={`w-full px-4 py-3 rounded-xl bg-cosmos-surface border text-cosmos-text placeholder-cosmos-muted text-sm focus:outline-none focus:ring-2 focus:ring-amber-glow/40 transition-all duration-300 ${
                  errors.email ? 'border-red-500/60' : 'border-cosmos-border focus:border-amber-glow/50'
                }`}
              />
              {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
            </div>

            {/* Topic */}
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cosmos-subtle mb-2">
                <Star className="w-3.5 h-3.5 text-amber-glow" />
                Topic Area
              </label>
              <select
                name="topic"
                value={form.topic}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-cosmos-surface border border-cosmos-border focus:border-amber-glow/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-glow/40 transition-all duration-300 appearance-none text-cosmos-text"
              >
                <option value="" className="bg-cosmos-surface text-cosmos-muted">Select a topic (optional)</option>
                {topicOptions.map((t) => (
                  <option key={t} value={t} className="bg-cosmos-surface text-cosmos-text">{t}</option>
                ))}
              </select>
            </div>

            {/* Question */}
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cosmos-subtle mb-2">
                <MessageSquare className="w-3.5 h-3.5 text-amber-glow" />
                Your Physics Question <span className="text-amber-glow">*</span>
              </label>
              <textarea
                name="question"
                value={form.question}
                onChange={handleChange}
                rows={5}
                placeholder="Describe your question in as much detail as possible. Include any relevant equations, concepts, or context from class..."
                className={`w-full px-4 py-3 rounded-xl bg-cosmos-surface border text-cosmos-text placeholder-cosmos-muted text-sm focus:outline-none focus:ring-2 focus:ring-amber-glow/40 transition-all duration-300 resize-none leading-relaxed ${
                  errors.question ? 'border-red-500/60' : 'border-cosmos-border focus:border-amber-glow/50'
                }`}
              />
              <div className="flex items-center justify-between mt-1.5">
                {errors.question
                  ? <p className="text-xs text-red-400">{errors.question}</p>
                  : <span className="text-xs text-cosmos-muted">Be as specific as possible for the best answer.</span>
                }
                <span className="text-xs text-cosmos-muted">{form.question.length} chars</span>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-amber-glow hover:bg-amber-bright disabled:opacity-60 disabled:cursor-not-allowed text-cosmos-void font-semibold text-sm rounded-xl transition-all duration-300 shadow-amber-soft hover:shadow-amber-glow hover:scale-[1.01] active:scale-[0.99]"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending your question…
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Question to Teacher
                </>
              )}
            </button>

            <p className="text-center text-xs text-cosmos-muted">
              Your information is used only to respond to your question and will not be shared.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
