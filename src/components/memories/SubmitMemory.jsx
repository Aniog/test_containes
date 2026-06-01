import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { submitMemory } from '../../api/memories';

const ERAS = ['1900s', '1920s', '1940s', '1960s', '1980s', '2000s', '2010s', '2020s', '2030s', '2040s', '2050s'];
const EMOTIONS = ['joy', 'grief', 'wonder', 'love', 'fear', 'nostalgia', 'hope', 'longing', 'pride', 'peace'];
const LIFE_EVENTS = ['birth', 'childhood', 'first love', 'marriage', 'loss', 'migration', 'discovery', 'reunion', 'farewell', 'achievement', 'ordinary moment'];
const REGIONS = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania', 'Middle East', 'Antarctica'];

const INITIAL = {
  title: '', description: '', contributor_name: '', contributor_location: '',
  era: '', year: '', emotion: '', life_event: '', region: '', tags: '',
};

function Field({ label, required, children }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5" style={{ color: '#c8d4e8' }}>
        {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const inputStyle = {
  background: '#0d1526',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#e8edf5',
  borderRadius: '10px',
  padding: '10px 14px',
  width: '100%',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.2s',
};

export default function SubmitMemory() {
  const navigate = useNavigate();
  const [values, setValues] = useState(INITIAL);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onFocus = (e) => { e.target.style.borderColor = 'rgba(74,158,255,0.5)'; };
  const onBlur = (e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; };

  const validate = () => {
    if (!values.title.trim()) return 'Title is required';
    if (!values.description.trim()) return 'Memory description is required';
    if (!values.contributor_name.trim()) return 'Your name is required';
    if (!values.era) return 'Please select an era';
    if (!values.emotion) return 'Please select an emotion';
    if (!values.life_event) return 'Please select a life event';
    if (!values.region) return 'Please select a region';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) { setError(err); return; }

    setStatus('submitting');
    try {
      const payload = {
        ...values,
        year: values.year ? parseInt(values.year) : undefined,
        tags: values.tags ? values.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
        is_featured: false,
        view_count: 0,
      };
      if (!payload.year) delete payload.year;
      await submitMemory(payload);
      setStatus('success');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#050810' }}>
        <div className="text-center max-w-md">
          <CheckCircle className="w-16 h-16 mx-auto mb-6" style={{ color: '#4ade80' }} />
          <h2 className="font-cinzel text-3xl font-bold mb-4" style={{ color: '#e8edf5' }}>
            Memory Preserved
          </h2>
          <p className="mb-8 leading-relaxed" style={{ color: '#8899b4' }}>
            Your memory has been added to the Archive. It will travel with humanity to the stars.
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => navigate('/explore')}
              className="px-6 py-3 rounded-full text-sm font-medium"
              style={{ background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.3)', color: '#4a9eff' }}
            >
              Explore Archive
            </button>
            <button
              onClick={() => { setValues(INITIAL); setStatus('idle'); }}
              className="px-6 py-3 rounded-full text-sm font-medium"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#8899b4' }}
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: '#050810' }}>
      <div className="max-w-2xl mx-auto px-4 pt-8 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm mb-8 transition-colors hover:text-[#4a9eff]"
          style={{ color: '#8899b4' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#4a9eff' }}>
            Contribute
          </p>
          <h1 className="font-cinzel text-3xl md:text-4xl font-bold mb-3" style={{ color: '#e8edf5' }}>
            Submit Your Memory
          </h1>
          <p style={{ color: '#8899b4' }}>
            Every memory matters. Share a moment that shaped you — it will be preserved for all of humanity.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl p-6 md:p-8 space-y-5"
          style={{ background: '#0d1526', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <Field label="Memory Title" required>
            <input
              name="title"
              value={values.title}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder="Give your memory a title…"
              style={inputStyle}
            />
          </Field>

          <Field label="Your Memory" required>
            <textarea
              name="description"
              value={values.description}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              rows={6}
              placeholder="Describe your memory in detail. What happened? What did you feel? What do you want future generations to know?"
              style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.7' }}
            />
          </Field>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Your Name" required>
              <input
                name="contributor_name"
                value={values.contributor_name}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder="Full name"
                style={inputStyle}
              />
            </Field>
            <Field label="Your Location">
              <input
                name="contributor_location"
                value={values.contributor_location}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder="City, Country"
                style={inputStyle}
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Era" required>
              <select
                name="era"
                value={values.era}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                style={{ ...inputStyle, cursor: 'pointer' }}
              >
                <option value="">Select era…</option>
                {ERAS.map((e) => <option key={e} value={e}>{e}</option>)}
              </select>
            </Field>
            <Field label="Year">
              <input
                name="year"
                type="number"
                value={values.year}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder="e.g. 1987"
                min="1900"
                max="2100"
                style={inputStyle}
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Primary Emotion" required>
              <select
                name="emotion"
                value={values.emotion}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                style={{ ...inputStyle, cursor: 'pointer', textTransform: 'capitalize' }}
              >
                <option value="">Select emotion…</option>
                {EMOTIONS.map((e) => <option key={e} value={e}>{e}</option>)}
              </select>
            </Field>
            <Field label="Life Event" required>
              <select
                name="life_event"
                value={values.life_event}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                style={{ ...inputStyle, cursor: 'pointer', textTransform: 'capitalize' }}
              >
                <option value="">Select life event…</option>
                {LIFE_EVENTS.map((e) => <option key={e} value={e}>{e}</option>)}
              </select>
            </Field>
          </div>

          <Field label="Region" required>
            <select
              name="region"
              value={values.region}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              style={{ ...inputStyle, cursor: 'pointer' }}
            >
              <option value="">Select region…</option>
              {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </Field>

          <Field label="Tags">
            <input
              name="tags"
              value={values.tags}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder="Comma-separated: family, summer, ocean…"
              style={inputStyle}
            />
          </Field>

          {error && (
            <p className="text-sm px-4 py-3 rounded-lg" style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.2)' }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200"
            style={{
              background: status === 'submitting' ? 'rgba(74,158,255,0.3)' : 'linear-gradient(135deg, #4a9eff, #2563eb)',
              color: '#fff',
              boxShadow: status === 'submitting' ? 'none' : '0 0 24px rgba(74,158,255,0.3)',
            }}
          >
            {status === 'submitting' ? 'Preserving Memory…' : 'Preserve This Memory'}
          </button>
        </form>
      </div>
    </div>
  );
}
