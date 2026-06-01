import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { CheckCircle, Loader2 } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ERAS = ['Ancient', 'Medieval', 'Industrial', 'Modern', 'Digital', 'Near Future'];
const EMOTIONS = ['Joy', 'Grief', 'Wonder', 'Love', 'Fear', 'Nostalgia', 'Hope', 'Longing', 'Pride', 'Serenity'];
const LIFE_EVENTS = ['Birth', 'Childhood', 'First Love', 'Marriage', 'Loss', 'Achievement', 'Migration', 'Discovery', 'Farewell', 'Reunion'];

const INITIAL = {
  title: '',
  description: '',
  contributor_name: '',
  era: '',
  year: '',
  location_country: '',
  location_city: '',
  emotion: '',
  life_event: '',
  tags: '',
};

export default function SubmitMemory() {
  const [values, setValues] = useState(INITIAL);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    if (!values.title.trim()) return 'Title is required';
    if (!values.description.trim()) return 'Memory description is required';
    if (!values.era) return 'Please select an era';
    if (!values.emotion) return 'Please select an emotion';
    if (!values.life_event) return 'Please select a life event';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) { setError(err); return; }

    setStatus('submitting');
    try {
      const tags = values.tags
        ? values.tags.split(',').map((t) => t.trim()).filter(Boolean)
        : [];

      const { data: response, error: createError } = await client
        .from('Memories')
        .insert({
          data: {
            title: values.title.trim(),
            description: values.description.trim(),
            contributor_name: values.contributor_name.trim() || 'Anonymous',
            era: values.era,
            year: values.year ? parseInt(values.year, 10) : undefined,
            location_country: values.location_country.trim() || undefined,
            location_city: values.location_city.trim() || undefined,
            emotion: values.emotion,
            life_event: values.life_event,
            tags,
            is_featured: false,
            view_count: 0,
          },
        })
        .select()
        .single();

      if (createError || response?.success === false) {
        const msgs = Array.isArray(response?.errors) ? response.errors.join(', ') : createError?.message;
        throw new Error(msgs || 'Submission failed');
      }

      console.log('Memory submitted:', response?.data);
      setStatus('success');
      setValues(INITIAL);
    } catch (err) {
      console.error('Submit error:', err);
      setError(err.message || 'Submission failed');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#050810] pt-24 pb-20 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-[#e8c97a] mx-auto mb-6" />
          <h2 className="font-serif text-3xl text-white font-bold mb-4">Memory Preserved</h2>
          <p className="text-slate-400 mb-8">
            Your memory has been added to the archive. It will travel with humanity to the stars.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-3 bg-[#e8c97a] text-[#050810] font-semibold rounded-lg hover:bg-[#f0d98a] transition-colors"
            >
              Add Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050810] pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8">
        <div className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-3">
            Preserve Your Memory
          </h1>
          <p className="text-slate-400 text-lg">
            Every human experience deserves to be carried forward. Share yours.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <Field label="Memory Title *" hint="A short, evocative title">
            <input
              name="title"
              value={values.title}
              onChange={onChange}
              placeholder="e.g. The Last Summer Before the War"
              className="form-input"
            />
          </Field>

          <Field label="Your Memory *" hint="Write in first person. Be specific. The details are what matter.">
            <textarea
              name="description"
              value={values.description}
              onChange={onChange}
              rows={7}
              placeholder="Describe your memory in detail..."
              className="form-input resize-none"
            />
          </Field>

          <Field label="Your Name" hint="Or leave blank to contribute anonymously">
            <input
              name="contributor_name"
              value={values.contributor_name}
              onChange={onChange}
              placeholder="Your name or alias"
              className="form-input"
            />
          </Field>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Era *">
              <select name="era" value={values.era} onChange={onChange} className="form-input">
                <option value="">Select era</option>
                {ERAS.map((e) => <option key={e} value={e}>{e}</option>)}
              </select>
            </Field>
            <Field label="Year" hint="Approximate year (can be negative for BCE)">
              <input
                name="year"
                type="number"
                value={values.year}
                onChange={onChange}
                placeholder="e.g. 1943"
                className="form-input"
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Country / Region">
              <input
                name="location_country"
                value={values.location_country}
                onChange={onChange}
                placeholder="e.g. Japan"
                className="form-input"
              />
            </Field>
            <Field label="City / Locality">
              <input
                name="location_city"
                value={values.location_city}
                onChange={onChange}
                placeholder="e.g. Kyoto"
                className="form-input"
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Primary Emotion *">
              <select name="emotion" value={values.emotion} onChange={onChange} className="form-input">
                <option value="">Select emotion</option>
                {EMOTIONS.map((e) => <option key={e} value={e}>{e}</option>)}
              </select>
            </Field>
            <Field label="Life Event *">
              <select name="life_event" value={values.life_event} onChange={onChange} className="form-input">
                <option value="">Select life event</option>
                {LIFE_EVENTS.map((e) => <option key={e} value={e}>{e}</option>)}
              </select>
            </Field>
          </div>

          <Field label="Tags" hint="Comma-separated keywords (e.g. family, ocean, war)">
            <input
              name="tags"
              value={values.tags}
              onChange={onChange}
              placeholder="family, ocean, war, childhood"
              className="form-input"
            />
          </Field>

          {error && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-4 bg-[#e8c97a] text-[#050810] font-semibold rounded-lg hover:bg-[#f0d98a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Preserving...
              </>
            ) : (
              'Preserve This Memory'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, hint, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-1.5">{label}</label>
      {hint && <p className="text-xs text-slate-600 mb-2">{hint}</p>}
      {children}
    </div>
  );
}
