import { useState } from 'react';
import { Send, CheckCircle, User, BookOpen, Mail, MessageSquare, Radio } from 'lucide-react';

const grades = [
  'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12',
  'First Year University', 'Second Year University', 'Other',
];

const topics = [
  'Constellations & Coordinates',
  'Stellar Evolution',
  'Electromagnetic Spectrum',
  'Telescopes & Observation',
  'Auroras & Space Weather',
  'Eclipses & Geometry',
  'General Question',
];

// Decorative radio telescope SVG
function RadioTelescopeDecor() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full opacity-100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Signal waves */}
      {[40, 60, 80, 100].map((r, i) => (
        <circle
          key={r}
          cx="100"
          cy="60"
          r={r}
          stroke="rgba(99,102,241,0.15)"
          strokeWidth="1"
          strokeDasharray="4 4"
          style={{ animationDelay: `${i * 0.5}s` }}
        />
      ))}
      {/* Dish */}
      <path d="M 60 120 Q 100 80 140 120" stroke="rgba(99,102,241,0.5)" strokeWidth="2" fill="none" />
      <path d="M 60 120 L 100 130 L 140 120" stroke="rgba(99,102,241,0.3)" strokeWidth="1" fill="rgba(99,102,241,0.05)" />
      {/* Support */}
      <line x1="100" y1="130" x2="100" y2="170" stroke="rgba(99,102,241,0.4)" strokeWidth="2" />
      <line x1="80" y1="170" x2="120" y2="170" stroke="rgba(99,102,241,0.4)" strokeWidth="2" />
      {/* Signal dot */}
      <circle cx="100" cy="60" r="4" fill="rgba(245,158,11,0.8)" />
      <circle cx="100" cy="60" r="8" fill="rgba(245,158,11,0.2)" />
    </svg>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    email: '',
    topic: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.grade) newErrors.grade = 'Please select your class/grade.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStatus('submitting');
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
  };

  const handleReset = () => {
    setFormData({ name: '', grade: '', email: '', topic: '', message: '' });
    setErrors({});
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-3xl font-light text-white mb-4">Message Received</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Thank you, <span className="text-white">{formData.name}</span>! Your question has been transmitted 
            across the cosmos. We'll respond to <span className="text-indigo-400">{formData.email}</span> shortly.
          </p>
          <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-4 mb-8 text-left">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">Your Submission</div>
            <div className="space-y-2 text-sm">
              <div className="flex gap-3"><span className="text-gray-500 w-16">Grade</span><span className="text-gray-300">{formData.grade}</span></div>
              {formData.topic && <div className="flex gap-3"><span className="text-gray-500 w-16">Topic</span><span className="text-gray-300">{formData.topic}</span></div>}
              <div className="flex gap-3"><span className="text-gray-500 w-16">Message</span><span className="text-gray-300 line-clamp-2">{formData.message}</span></div>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-full border border-[#1F2937] text-gray-400 text-sm hover:text-white hover:border-[#374151] transition-all duration-300"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B0F19]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400">Get in Touch</span>
              <h2 className="text-4xl font-light text-white mt-3 mb-4 leading-tight">
                Ask the
                <br />
                <span className="text-indigo-400">Universe</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Have a question about the cosmos? Curious about a physics concept? 
                Your teacher is here to guide your journey through the stars.
              </p>
            </div>

            {/* Radio telescope decoration */}
            <div className="relative w-40 h-40 mx-auto lg:mx-0">
              <RadioTelescopeDecor />
            </div>

            <div className="space-y-4">
              {[
                { icon: BookOpen, title: 'Physics Questions', desc: 'Ask about any concept from the curriculum' },
                { icon: Radio, title: 'Observation Help', desc: 'Get guidance on stargazing and telescope use' },
                { icon: MessageSquare, title: 'Feedback', desc: 'Share your thoughts on the learning materials' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{item.title}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Student Name <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`form-input w-full bg-[#0B0F19] border rounded-xl pl-11 pr-4 py-3.5 text-white text-sm placeholder-gray-600 transition-all duration-300 ${
                        errors.name ? 'border-rose-500/50' : 'border-[#1F2937] hover:border-[#374151]'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-rose-400 text-xs mt-1.5">{errors.name}</p>}
                </div>

                {/* Grade + Topic */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Class / Grade <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        className={`form-input w-full bg-[#0B0F19] border rounded-xl pl-11 pr-4 py-3.5 text-sm transition-all duration-300 appearance-none cursor-pointer ${
                          formData.grade ? 'text-white' : 'text-gray-600'
                        } ${errors.grade ? 'border-rose-500/50' : 'border-[#1F2937] hover:border-[#374151]'}`}
                      >
                        <option value="" disabled>Select grade</option>
                        {grades.map((g) => (
                          <option key={g} value={g} className="bg-[#111827] text-white">{g}</option>
                        ))}
                      </select>
                    </div>
                    {errors.grade && <p className="text-rose-400 text-xs mt-1.5">{errors.grade}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Topic (Optional)
                    </label>
                    <select
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      className={`form-input w-full bg-[#0B0F19] border border-[#1F2937] hover:border-[#374151] rounded-xl px-4 py-3.5 text-sm transition-all duration-300 appearance-none cursor-pointer ${
                        formData.topic ? 'text-white' : 'text-gray-600'
                      }`}
                    >
                      <option value="" className="bg-[#111827] text-gray-400">Select topic</option>
                      {topics.map((t) => (
                        <option key={t} value={t} className="bg-[#111827] text-white">{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@school.edu"
                      className={`form-input w-full bg-[#0B0F19] border rounded-xl pl-11 pr-4 py-3.5 text-white text-sm placeholder-gray-600 transition-all duration-300 ${
                        errors.email ? 'border-rose-500/50' : 'border-[#1F2937] hover:border-[#374151]'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-rose-400 text-xs mt-1.5">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Message / Question <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-600" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Ask your question or share your thoughts about the cosmos..."
                      className={`form-input w-full bg-[#0B0F19] border rounded-xl pl-11 pr-4 py-3.5 text-white text-sm placeholder-gray-600 transition-all duration-300 resize-none ${
                        errors.message ? 'border-rose-500/50' : 'border-[#1F2937] hover:border-[#374151]'
                      }`}
                    />
                  </div>
                  {errors.message && <p className="text-rose-400 text-xs mt-1.5">{errors.message}</p>}
                  <div className="text-right text-xs text-gray-600 mt-1">
                    {formData.message.length} characters
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-amber-400 text-[#0B0F19] rounded-xl font-medium text-sm hover:bg-amber-300 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#0B0F19]/30 border-t-[#0B0F19] rounded-full animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-gray-600 text-xs">
                  Your message travels at the speed of light — we'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
