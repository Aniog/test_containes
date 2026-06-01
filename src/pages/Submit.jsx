import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '../data/memories';

const STEPS = ['Your Story', 'Classify', 'Review'];

export default function Submit() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: '',
    story: '',
    author: '',
    year: '',
    era: '',
    emotion: '',
    lifeEvent: '',
    region: '',
  });

  const update = (key, value) => setForm(f => ({ ...f, [key]: value }));

  const handleSubmit = () => {
    console.log('Memory submitted:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-space-black flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-aurora-teal/20 border border-aurora-teal/40 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-aurora-teal" size={28} />
          </div>
          <h2 className="font-cinzel text-3xl text-white mb-4">Memory Preserved</h2>
          <p className="text-slate-400 font-inter mb-2">
            <span className="text-white font-medium">"{form.title}"</span> has been added to the archive.
          </p>
          <p className="text-slate-500 text-sm font-inter mb-8">
            Your memory will travel with humanity to the stars.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/explore')}
              className="px-6 py-3 bg-nebula-blue hover:bg-blue-500 text-white rounded-lg font-inter text-sm transition-colors"
            >
              Explore the Archive
            </button>
            <button
              onClick={() => { setSubmitted(false); setStep(0); setForm({ title: '', story: '', author: '', year: '', era: '', emotion: '', lifeEvent: '', region: '' }); }}
              className="px-6 py-3 border border-slate-700 text-slate-300 hover:text-white rounded-lg font-inter text-sm transition-colors"
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-space-black pt-20 px-4 pb-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center py-12">
          <p className="text-nebula-blue text-sm tracking-[0.3em] uppercase font-inter mb-3">Contribute</p>
          <h1 className="font-cinzel text-3xl md:text-4xl text-white mb-3">Submit Your Memory</h1>
          <p className="text-slate-400 font-inter text-sm">
            Your story will be preserved for eternity and carried to the stars.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium font-inter transition-all duration-300"
                  style={i <= step ? { backgroundColor: '#4f8ef7', color: 'white' } : { backgroundColor: 'rgb(30 41 59)', color: 'rgb(100 116 139)' }}
                >
                  {i + 1}
                </div>
                <span className={`text-sm font-inter ${i === step ? 'text-white' : 'text-slate-600'}`}>{s}</span>
              </div>
              {i < STEPS.length - 1 && <div className="w-8 h-px bg-slate-800" />}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-space-navy border border-slate-800 rounded-2xl p-8">
          {step === 0 && (
            <div className="space-y-6">
              <div>
                <label className="block text-slate-300 text-sm font-inter mb-2">Memory Title *</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={e => update('title', e.target.value)}
                  placeholder="Give your memory a title..."
                  className="w-full bg-space-midnight border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 text-sm font-inter focus:outline-none focus:border-nebula-blue/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-inter mb-2">Your Story *</label>
                <textarea
                  value={form.story}
                  onChange={e => update('story', e.target.value)}
                  placeholder="Tell your memory in your own words. There is no minimum or maximum length — write as much or as little as feels right..."
                  rows={6}
                  className="w-full bg-space-midnight border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 text-sm font-inter focus:outline-none focus:border-nebula-blue/50 transition-colors resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 text-sm font-inter mb-2">Your Name</label>
                  <input
                    type="text"
                    value={form.author}
                    onChange={e => update('author', e.target.value)}
                    placeholder="Anonymous"
                    className="w-full bg-space-midnight border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 text-sm font-inter focus:outline-none focus:border-nebula-blue/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-inter mb-2">Year of Memory</label>
                  <input
                    type="text"
                    value={form.year}
                    onChange={e => update('year', e.target.value)}
                    placeholder="e.g. 1987 CE"
                    className="w-full bg-space-midnight border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 text-sm font-inter focus:outline-none focus:border-nebula-blue/50 transition-colors"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-8">
              {/* Era */}
              <div>
                <label className="block text-slate-300 text-sm font-inter mb-3">Historical Era</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {ERAS.map(era => (
                    <button
                      key={era.id}
                      onClick={() => update('era', era.id)}
                      className="text-left px-3 py-2 rounded-lg border text-xs font-inter transition-all duration-200"
                      style={form.era === era.id ? {
                        backgroundColor: era.color + '20',
                        borderColor: era.color + '60',
                        color: era.color,
                      } : {
                        backgroundColor: 'transparent',
                        borderColor: 'rgb(51 65 85)',
                        color: 'rgb(148 163 184)',
                      }}
                    >
                      <div className="font-medium">{era.label}</div>
                      <div className="opacity-60 mt-0.5">{era.range}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Emotion */}
              <div>
                <label className="block text-slate-300 text-sm font-inter mb-3">Primary Emotion</label>
                <div className="flex flex-wrap gap-2">
                  {EMOTIONS.map(emotion => (
                    <button
                      key={emotion.id}
                      onClick={() => update('emotion', emotion.id)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-inter transition-all duration-200"
                      style={form.emotion === emotion.id ? {
                        backgroundColor: emotion.color + '25',
                        borderColor: emotion.color + '60',
                        color: emotion.color,
                      } : {
                        backgroundColor: 'transparent',
                        borderColor: 'rgb(51 65 85)',
                        color: 'rgb(148 163 184)',
                      }}
                    >
                      <span>{emotion.icon}</span>
                      {emotion.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Life Event */}
              <div>
                <label className="block text-slate-300 text-sm font-inter mb-3">Life Event</label>
                <div className="grid grid-cols-2 gap-2">
                  {LIFE_EVENTS.map(event => (
                    <button
                      key={event.id}
                      onClick={() => update('lifeEvent', event.id)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-inter transition-all duration-200"
                      style={form.lifeEvent === event.id ? {
                        backgroundColor: '#4f8ef720',
                        borderColor: '#4f8ef760',
                        color: '#4f8ef7',
                      } : {
                        backgroundColor: 'transparent',
                        borderColor: 'rgb(51 65 85)',
                        color: 'rgb(148 163 184)',
                      }}
                    >
                      <span>{event.icon}</span>
                      {event.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Region */}
              <div>
                <label className="block text-slate-300 text-sm font-inter mb-3">Region</label>
                <div className="flex flex-wrap gap-2">
                  {REGIONS.map(region => (
                    <button
                      key={region.id}
                      onClick={() => update('region', region.id)}
                      className="px-3 py-2 rounded-lg border text-xs font-inter transition-all duration-200"
                      style={form.region === region.id ? {
                        backgroundColor: '#2dd4bf20',
                        borderColor: '#2dd4bf60',
                        color: '#2dd4bf',
                      } : {
                        backgroundColor: 'transparent',
                        borderColor: 'rgb(51 65 85)',
                        color: 'rgb(148 163 184)',
                      }}
                    >
                      {region.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="font-cinzel text-white text-lg">Review Your Memory</h3>

              <div className="bg-space-midnight rounded-xl p-6 border border-slate-800">
                <h4 className="font-cinzel text-white text-base mb-2">{form.title || 'Untitled Memory'}</h4>
                <p className="text-slate-400 text-sm font-inter leading-relaxed mb-4 italic">
                  "{form.story || 'No story provided.'}"
                </p>
                <div className="flex flex-wrap gap-2">
                  {form.era && <span className="text-xs px-2 py-0.5 rounded-full bg-stardust-gold/20 text-stardust-gold font-inter">{ERAS.find(e => e.id === form.era)?.label}</span>}
                  {form.emotion && <span className="text-xs px-2 py-0.5 rounded-full bg-cosmic-violet/20 text-cosmic-violet font-inter capitalize">{form.emotion}</span>}
                  {form.region && <span className="text-xs px-2 py-0.5 rounded-full bg-aurora-teal/20 text-aurora-teal font-inter">{REGIONS.find(r => r.id === form.region)?.label}</span>}
                  {form.year && <span className="text-xs px-2 py-0.5 rounded-full bg-nebula-blue/20 text-nebula-blue font-inter">{form.year}</span>}
                </div>
              </div>

              <p className="text-slate-500 text-xs font-inter leading-relaxed">
                By submitting, you agree that this memory will be preserved in the Memory Archive and carried aboard the migration vessels in 2051. Your memory will be accessible to all of humanity, forever.
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-slate-800">
            <button
              onClick={() => step > 0 ? setStep(s => s - 1) : navigate(-1)}
              className="px-5 py-2.5 border border-slate-700 text-slate-400 hover:text-white rounded-lg text-sm font-inter transition-colors"
            >
              {step === 0 ? 'Cancel' : '← Back'}
            </button>
            <button
              onClick={() => step < 2 ? setStep(s => s + 1) : handleSubmit()}
              disabled={step === 0 && (!form.title.trim() || !form.story.trim())}
              className="px-6 py-2.5 bg-nebula-blue hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg text-sm font-inter font-medium transition-all duration-200"
            >
              {step === 2 ? 'Preserve Memory' : 'Continue →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
