import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { ERAS, EMOTIONS, LIFE_EVENTS } from '../data/memories';

const INITIAL = {
  title: '',
  author: '',
  year: '',
  location: '',
  era: '',
  emotion: '',
  lifeEvent: '',
  memory: '',
  consent: false,
};

export default function SubmitPage() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const set = (key, val) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Title is required';
    if (!form.author.trim()) e.author = 'Author name is required';
    if (!form.memory.trim()) e.memory = 'Memory text is required';
    if (form.memory.trim().length < 50) e.memory = 'Please share at least 50 characters';
    if (!form.consent) e.consent = 'You must agree to preserve this memory';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-space-black pt-16 flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="w-16 h-16 rounded-full bg-aurora-teal/20 border border-aurora-teal/40 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-aurora-teal" />
          </div>
          <h2 className="font-cinzel text-3xl font-bold text-white mb-4">
            Memory Preserved
          </h2>
          <p className="text-slate-300 text-base leading-relaxed mb-4">
            <span className="text-white font-medium">"{form.title}"</span> has been
            received by the Memory Archive. It will be reviewed, tagged, and added
            to the permanent collection.
          </p>
          <p className="text-slate-500 text-sm mb-8">
            Your story will travel with humanity to the stars.
          </p>
          <div className="bg-space-navy border border-slate-700/50 rounded-xl p-4 mb-8 text-left">
            <div className="text-xs text-slate-500 mb-1">Archive Reference</div>
            <div className="font-mono text-nebula-blue text-sm">
              IMI-MEM-{Date.now().toString(36).toUpperCase()}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/explore"
              className="px-6 py-3 rounded-xl bg-nebula-blue text-white font-semibold hover:bg-blue-500 transition-all"
            >
              Explore the Archive
            </Link>
            <button
              onClick={() => { setForm(INITIAL); setSubmitted(false); }}
              className="px-6 py-3 rounded-xl border border-slate-600 text-slate-300 font-semibold hover:border-slate-500 transition-all"
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-space-black pt-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-space-mid to-space-black py-16 px-4 border-b border-slate-800/50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-memory-rose text-xs font-medium tracking-widest uppercase mb-3">
            ✦ Preserve a Memory
          </div>
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4">
            Your Story Matters
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Share a memory — yours, a family member's, or one passed down through generations.
            Every story becomes part of humanity's permanent record.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <Field label="Memory Title" error={errors.title} required>
            <input
              type="text"
              value={form.title}
              onChange={(e) => set('title', e.target.value)}
              placeholder="Give this memory a title..."
              className={inputClass(errors.title)}
            />
          </Field>

          {/* Author */}
          <Field label="Your Name (or 'Anonymous')" error={errors.author} required>
            <input
              type="text"
              value={form.author}
              onChange={(e) => set('author', e.target.value)}
              placeholder="Full name or pseudonym"
              className={inputClass(errors.author)}
            />
          </Field>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Year */}
            <Field label="Approximate Year">
              <input
                type="text"
                value={form.year}
                onChange={(e) => set('year', e.target.value)}
                placeholder="e.g. 1987 or 'circa 1200'"
                className={inputClass()}
              />
            </Field>

            {/* Location */}
            <Field label="Location">
              <input
                type="text"
                value={form.location}
                onChange={(e) => set('location', e.target.value)}
                placeholder="City, country, or region"
                className={inputClass()}
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Era */}
            <Field label="Era">
              <select value={form.era} onChange={(e) => set('era', e.target.value)} className={inputClass()}>
                <option value="">Select era</option>
                {ERAS.map((e) => <option key={e.id} value={e.id}>{e.label}</option>)}
              </select>
            </Field>

            {/* Emotion */}
            <Field label="Primary Emotion">
              <select value={form.emotion} onChange={(e) => set('emotion', e.target.value)} className={inputClass()}>
                <option value="">Select emotion</option>
                {EMOTIONS.map((e) => <option key={e.id} value={e.id}>{e.icon} {e.label}</option>)}
              </select>
            </Field>

            {/* Life Event */}
            <Field label="Life Event">
              <select value={form.lifeEvent} onChange={(e) => set('lifeEvent', e.target.value)} className={inputClass()}>
                <option value="">Select event</option>
                {LIFE_EVENTS.map((e) => <option key={e.id} value={e.id}>{e.icon} {e.label}</option>)}
              </select>
            </Field>
          </div>

          {/* Memory text */}
          <Field label="The Memory" error={errors.memory} required>
            <textarea
              value={form.memory}
              onChange={(e) => set('memory', e.target.value)}
              placeholder="Write the memory in as much detail as you wish. Use first person, third person, or however it feels most natural. There is no wrong way to remember..."
              rows={8}
              className={inputClass(errors.memory) + ' resize-none'}
            />
            <div className="text-xs text-slate-600 mt-1 text-right">
              {form.memory.length} characters
            </div>
          </Field>

          {/* Consent */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative mt-0.5">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => set('consent', e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                    form.consent
                      ? 'bg-nebula-blue border-nebula-blue'
                      : 'border-slate-600 group-hover:border-slate-500'
                  }`}
                >
                  {form.consent && <span className="text-white text-xs">✓</span>}
                </div>
              </div>
              <span className="text-slate-400 text-sm leading-relaxed">
                I consent to this memory being preserved in the Memory Archive and
                transmitted with humanity's migration fleet. I understand it will be
                stored in perpetuity and may be read by future generations.
              </span>
            </label>
            {errors.consent && (
              <p className="text-memory-rose text-xs mt-2">{errors.consent}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-nebula-blue to-aurora-teal text-white font-semibold text-base hover:opacity-90 transition-all hover:shadow-[0_0_30px_rgba(79,142,247,0.3)] active:scale-[0.99]"
          >
            Preserve This Memory
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children, error, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">
        {label}
        {required && <span className="text-memory-rose ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-memory-rose text-xs mt-1.5">{error}</p>}
    </div>
  );
}

function inputClass(error) {
  return `w-full px-4 py-3 rounded-xl bg-space-navy border text-white placeholder-slate-600 text-sm focus:outline-none transition-all ${
    error
      ? 'border-memory-rose/60 focus:border-memory-rose focus:shadow-[0_0_0_3px_rgba(232,121,160,0.1)]'
      : 'border-slate-700 focus:border-nebula-blue/60 focus:shadow-[0_0_0_3px_rgba(79,142,247,0.1)]'
  }`;
}
