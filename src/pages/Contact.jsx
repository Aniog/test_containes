import React from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Mountain, CheckCircle, Calendar, Users, MapPin } from 'lucide-react';
import PageHero from '../components/mountain/PageHero';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const EVENTS = [
  { value: 'Everest Base Camp Trek', label: 'Everest Base Camp Trek', date: 'Sep 2026', spots: 12, location: 'Nepal' },
  { value: 'K2 Expedition', label: 'K2 Expedition', date: 'Jun 2026', spots: 6, location: 'Pakistan' },
  { value: 'Aconcagua Summit', label: 'Aconcagua Summit', date: 'Jan 2027', spots: 10, location: 'Argentina' },
  { value: 'Denali Expedition', label: 'Denali Expedition', date: 'May 2027', spots: 8, location: 'USA' },
  { value: 'Alpine Skills Workshop', label: 'Alpine Skills Workshop', date: 'Mar 2027', spots: 20, location: 'Switzerland' },
  { value: 'Ice Climbing Clinic', label: 'Ice Climbing Clinic', date: 'Feb 2027', spots: 16, location: 'Canada' },
];

const EXPERIENCE_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Submission failed. Please try again.';
};

const Contact = () => {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    experience_level: '',
    message: '',
    newsletter: false,
  });
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState(null);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = () => {
    if (!values.name.trim()) return 'Full name is required.';
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) return 'A valid email is required.';
    if (!values.event) return 'Please select an event.';
    if (!values.experience_level) return 'Please select your experience level.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const validationError = validate();
    if (validationError) { setError(validationError); return; }

    setStatus('submitting');
    console.log('Submitting climbing event registration:', values);

    try {
      const { data: response, error: insertError } = await client
        .from('ClimbingEventRegistration')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            phone: values.phone || undefined,
            event: values.event,
            experience_level: values.experience_level,
            message: values.message || undefined,
            newsletter: values.newsletter,
          },
        })
        .select()
        .single();

      if (insertError || response?.success === false) {
        throw new Error(getErrorMessage(response, insertError));
      }

      console.log('Registration saved:', response);
      setStatus('success');
      setValues({ name: '', email: '', phone: '', event: '', experience_level: '', message: '', newsletter: false });
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  const selectedEvent = EVENTS.find((e) => e.value === values.event);

  return (
    <>
      <PageHero
        badge="Contact"
        title="Join an Expedition"
        subtitle="Register your interest in one of our upcoming climbing events. Our team will reach out with full details and next steps."
        bgImgId="page-hero-contact-bg-p7q8r9"
        bgQuery="[page-hero-contact-subtitle] [page-hero-contact-title]"
        titleId="page-hero-contact-title"
        subtitleId="page-hero-contact-subtitle"
      />

      <section className="bg-slate-950 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left: Event cards */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-white font-bold text-xl mb-6">Upcoming Events</h2>
              {EVENTS.map((ev) => (
                <button
                  key={ev.value}
                  type="button"
                  onClick={() => setValues((v) => ({ ...v, event: ev.value }))}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                    values.event === ev.value
                      ? 'border-amber-500 bg-amber-500/10'
                      : 'border-slate-700 bg-slate-900 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Mountain className={`w-4 h-4 flex-shrink-0 ${values.event === ev.value ? 'text-amber-400' : 'text-slate-400'}`} />
                      <span className={`font-semibold text-sm ${values.event === ev.value ? 'text-amber-400' : 'text-white'}`}>
                        {ev.label}
                      </span>
                    </div>
                    <span className="bg-slate-800 text-slate-300 text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                      {ev.spots} spots
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 ml-6">
                    <span className="flex items-center gap-1 text-slate-400 text-xs">
                      <Calendar className="w-3 h-3" />{ev.date}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 text-xs">
                      <MapPin className="w-3 h-3" />{ev.location}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {status === 'success' ? (
                <div className="bg-slate-900 border border-green-500/40 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-3">Registration Received!</h3>
                  <p className="text-slate-400 text-base leading-relaxed mb-6">
                    Thanks for your interest. Our expedition team will contact you within 48 hours
                    with full details about your selected event.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-colors"
                  >
                    Register for Another Event
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8 space-y-5"
                >
                  <h2 className="text-white font-bold text-xl mb-2">Registration Form</h2>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-1.5" htmlFor="name">
                        Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        placeholder="Jane Doe"
                        className="w-full bg-slate-800 border border-slate-600 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-1.5" htmlFor="email">
                        Email <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="you@example.com"
                        className="w-full bg-slate-800 border border-slate-600 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1.5" htmlFor="phone">
                      Phone <span className="text-slate-500 font-normal">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={onChange}
                      placeholder="+1 555 000 0000"
                      className="w-full bg-slate-800 border border-slate-600 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  {/* Event select */}
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1.5" htmlFor="event">
                      Event <span className="text-amber-400">*</span>
                    </label>
                    <select
                      id="event"
                      name="event"
                      value={values.event}
                      onChange={onChange}
                      className="w-full bg-slate-800 border border-slate-600 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                    >
                      <option value="" className="text-slate-500">Select an event…</option>
                      {EVENTS.map((ev) => (
                        <option key={ev.value} value={ev.value}>{ev.label} — {ev.date}</option>
                      ))}
                    </select>
                    {selectedEvent && (
                      <div className="mt-2 flex items-center gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-amber-500" />{selectedEvent.location}</span>
                        <span className="flex items-center gap-1"><Users className="w-3 h-3 text-sky-400" />{selectedEvent.spots} spots available</span>
                      </div>
                    )}
                  </div>

                  {/* Experience level */}
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Experience Level <span className="text-amber-400">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {EXPERIENCE_LEVELS.map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => setValues((v) => ({ ...v, experience_level: level }))}
                          className={`py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                            values.experience_level === level
                              ? 'bg-amber-500 border-amber-500 text-slate-950'
                              : 'bg-slate-800 border-slate-600 text-slate-300 hover:border-slate-400'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1.5" htmlFor="message">
                      Message <span className="text-slate-500 font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={onChange}
                      placeholder="Tell us about your climbing background or any questions you have…"
                      className="w-full bg-slate-800 border border-slate-600 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Newsletter */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={values.newsletter}
                      onChange={onChange}
                      className="w-4 h-4 accent-amber-500"
                    />
                    <span className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                      Keep me updated with expedition news and new events
                    </span>
                  </label>

                  {/* Error */}
                  {error && (
                    <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold py-3.5 rounded-xl text-base transition-colors"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Register Interest'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
