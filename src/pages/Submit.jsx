import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ERAS, EMOTIONS, LIFE_EVENTS, LOCATIONS } from '../data/memories';

export default function Submit() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: '',
    author: '',
    year: '',
    location: '',
    era: '',
    emotion: '',
    lifeEvent: '',
    memory: '',
    tags: '',
  });

  const onChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Memory submitted:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-cosmos-black flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-nebula-violet/20 border border-nebula-violet/40 flex items-center justify-center mx-auto mb-6"
            style={{ boxShadow: '0 0 40px rgba(5,150,105,0.3)' }}>
            <span className="text-2xl text-nebula-violet">✦</span>
          </div>
          <h2 className="font-cinzel text-3xl text-memory-white mb-4">Memory Received</h2>
          <p className="text-memory-muted font-inter mb-8 leading-relaxed">
            Your memory has been submitted to the Archive. Our curators will review it and,
            once approved, it will join the constellation of humanity's story.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate('/explore')}
              className="px-6 py-3 bg-nebula-violet hover:bg-nebula-violet/80 text-white rounded-full font-inter text-sm transition-all"
            >
              Explore the Archive
            </button>
            <button
              onClick={() => { setSubmitted(false); setForm({ title: '', author: '', year: '', location: '', era: '', emotion: '', lifeEvent: '', memory: '', tags: '' }); }}
              className="px-6 py-3 border border-cosmos-blue/40 hover:border-nebula-violet text-memory-muted hover:text-memory-white rounded-full font-inter text-sm transition-all"
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cosmos-black pt-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.4em] uppercase text-stardust-cyan mb-4 font-inter">
            Contribute
          </p>
          <h1 className="font-cinzel text-3xl md:text-4xl text-memory-white mb-4">
            Submit Your Memory
          </h1>
          <p className="text-memory-muted font-inter leading-relaxed">
            Every memory matters. Share a moment from your life — big or small —
            and it will travel with humanity to the stars.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="Your Name" name="author" value={form.author} onChange={onChange} placeholder="Full name" required />
            <FormField label="Year of Memory" name="year" value={form.year} onChange={onChange} placeholder="e.g. 1987" type="number" required />
          </div>

          <FormField label="Memory Title" name="title" value={form.title} onChange={onChange} placeholder="Give your memory a title..." required />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField label="Region" name="location" value={form.location} onChange={onChange} options={LOCATIONS.map(l => ({ value: l, label: l }))} required />
            <SelectField label="Historical Era" name="era" value={form.era} onChange={onChange} options={ERAS.map(e => ({ value: e.id, label: e.label }))} required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField label="Primary Emotion" name="emotion" value={form.emotion} onChange={onChange} options={EMOTIONS.map(e => ({ value: e.id, label: `${e.icon} ${e.label}` }))} required />
            <SelectField label="Life Event" name="lifeEvent" value={form.lifeEvent} onChange={onChange} options={LIFE_EVENTS.map(e => ({ value: e.id, label: `${e.icon} ${e.label}` }))} required />
          </div>

          <div>
            <label className="text-xs tracking-widest uppercase text-memory-muted font-inter mb-2 block">
              Your Memory <span className="text-nebula-pink">*</span>
            </label>
            <textarea
              name="memory"
              value={form.memory}
              onChange={onChange}
              required
              rows={8}
              placeholder="Write your memory here. Be as detailed or as brief as you like. This is your story..."
              className="w-full bg-cosmos-dark border border-cosmos-blue/40 rounded-xl px-4 py-3 text-sm text-memory-white placeholder-memory-muted/40 focus:outline-none focus:border-nebula-violet/60 font-inter transition-colors resize-none leading-relaxed"
            />
          </div>

          <FormField
            label="Tags (comma-separated)"
            name="tags"
            value={form.tags}
            onChange={onChange}
            placeholder="e.g. grandmother, harvest, village"
          />

          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 bg-nebula-violet hover:bg-nebula-violet/80 text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(5,150,105,0.3)] hover:shadow-[0_0_50px_rgba(5,150,105,0.5)] font-inter tracking-wide"
            >
              Preserve This Memory
            </button>
            <p className="text-center text-xs text-memory-muted/60 mt-4 font-inter">
              By submitting, you agree to have your memory preserved in the Archive and carried aboard the Exodus Fleet.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormField({ label, name, value, onChange, placeholder, type = 'text', required }) {
  return (
    <div>
      <label className="text-xs tracking-widest uppercase text-memory-muted font-inter mb-2 block">
        {label} {required && <span className="text-nebula-pink">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-cosmos-dark border border-cosmos-blue/40 rounded-lg px-4 py-3 text-sm text-memory-white placeholder-memory-muted/40 focus:outline-none focus:border-nebula-violet/60 font-inter transition-colors"
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, required }) {
  return (
    <div>
      <label className="text-xs tracking-widest uppercase text-memory-muted font-inter mb-2 block">
        {label} {required && <span className="text-nebula-pink">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-cosmos-dark border border-cosmos-blue/40 rounded-lg px-4 py-3 text-sm text-memory-white focus:outline-none focus:border-nebula-violet/60 font-inter transition-colors"
      >
        <option value="">Select...</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}
