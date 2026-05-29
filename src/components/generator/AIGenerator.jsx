import { useState } from 'react';
import { Sparkles, Wand2, Music, Brain, Loader2, RefreshCw, Download, Share2 } from 'lucide-react';

const DREAM_TEMPLATES = [
  'Flying over a neon city at midnight',
  'Meeting a past version of yourself in a mirror world',
  'Swimming through clouds made of memories',
  'A library where books read themselves to you',
  'Dancing with shadows that have their own emotions',
];

const SOUNDTRACKS = [
  { name: 'Cosmic Drift', artist: 'Aether Waves', mood: 'Transcendent', bpm: 72 },
  { name: 'Velvet Abyss', artist: 'Nocturn', mood: 'Mysterious', bpm: 85 },
  { name: 'Starfall Waltz', artist: 'Luna Collective', mood: 'Romantic', bpm: 96 },
  { name: 'Pulse of the Void', artist: 'Darkwave Echo', mood: 'Intense', bpm: 110 },
  { name: 'Morning Reverie', artist: 'Solstice', mood: 'Peaceful', bpm: 60 },
];

const EMOTIONS = [
  { name: 'Wonder', value: 0, color: '#2dd4bf' },
  { name: 'Fear', value: 0, color: '#6b7280' },
  { name: 'Love', value: 0, color: '#f472b6' },
  { name: 'Awe', value: 0, color: '#818cf8' },
  { name: 'Joy', value: 0, color: '#fbbf24' },
  { name: 'Melancholy', value: 0, color: '#c084fc' },
];

function generateDreamConcept(prompt) {
  const words = prompt.toLowerCase();
  const emotions = EMOTIONS.map(e => ({
    ...e,
    value: Math.floor(Math.random() * 60 + 20),
  }));
  const total = emotions.reduce((s, e) => s + e.value, 0);
  const normalized = emotions.map(e => ({ ...e, value: Math.round((e.value / total) * 100) }));

  const soundtrack = SOUNDTRACKS[Math.floor(Math.random() * SOUNDTRACKS.length)];
  const intensity = Math.floor(Math.random() * 30 + 65);
  const duration = `${Math.floor(Math.random() * 20 + 8)} min`;

  const concepts = [
    `You find yourself in a realm where ${prompt}. The air shimmers with possibility, and every breath carries the weight of forgotten memories.`,
    `The dream begins with ${prompt}. Reality bends like warm glass, and you realize you've been here before — in another life, another dream.`,
    `${prompt} — but nothing is as it seems. The boundaries between self and world dissolve, leaving only pure experience.`,
  ];

  return {
    concept: concepts[Math.floor(Math.random() * concepts.length)],
    emotions: normalized,
    soundtrack,
    intensity,
    duration,
    tags: ['AI-Generated', 'Unique', 'Personalized'],
    visualStyle: ['Impressionist', 'Surrealist', 'Cinematic', 'Abstract'][Math.floor(Math.random() * 4)],
  };
}

export default function AIGenerator() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [intensity, setIntensity] = useState(70);
  const [duration, setDuration] = useState(15);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult(null);
    await new Promise(r => setTimeout(r, 2200));
    setResult(generateDreamConcept(prompt));
    setLoading(false);
  };

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-300 text-sm font-body mb-6">
          <Brain className="w-4 h-4" />
          Powered by Dream AI v3.0
        </div>
        <h1 className="font-dream text-4xl sm:text-5xl font-black text-white mb-4">
          AI Dream <span className="text-shimmer">Generator</span>
        </h1>
        <p className="text-purple-300/60 font-body max-w-xl mx-auto">
          Describe your dream idea and our AI will craft a complete dream experience — with imagery, soundtrack, and emotional analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <div className="space-y-6">
          <div className="glass-strong rounded-2xl p-6 border border-white/10">
            <h3 className="font-dream text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Wand2 className="w-5 h-5 text-purple-400" />
              Describe Your Dream
            </h3>

            <textarea
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder="Describe your dream concept... e.g. 'Flying through a city made of crystal at sunset while music plays from the clouds'"
              rows={5}
              className="w-full resize-none text-sm"
            />

            {/* Templates */}
            <div className="mt-4">
              <p className="text-xs text-purple-300/40 font-body mb-2">Quick templates:</p>
              <div className="flex flex-wrap gap-2">
                {DREAM_TEMPLATES.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setPrompt(t)}
                    className="text-xs px-3 py-1.5 rounded-full glass border border-white/10 text-purple-300/60 hover:text-purple-300 hover:border-purple-500/30 transition-all font-body"
                  >
                    {t.slice(0, 30)}...
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="glass-strong rounded-2xl p-6 border border-white/10">
            <h3 className="font-dream text-lg font-semibold text-white mb-4">Dream Parameters</h3>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-purple-300/70 font-body">Emotional Intensity</label>
                  <span className="text-sm font-semibold text-purple-300 font-body">{intensity}%</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={100}
                  value={intensity}
                  onChange={e => setIntensity(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-purple-300/70 font-body">Dream Duration</label>
                  <span className="text-sm font-semibold text-purple-300 font-body">{duration} min</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={60}
                  value={duration}
                  onChange={e => setDuration(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold font-body text-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-2xl hover:shadow-purple-500/30"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Weaving your dream...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Dream
              </>
            )}
          </button>
        </div>

        {/* Result Panel */}
        <div>
          {loading && (
            <div className="glass-strong rounded-2xl p-8 border border-white/10 h-full flex flex-col items-center justify-center gap-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 animate-pulse flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 blur-xl opacity-40 animate-pulse" />
              </div>
              <div className="text-center">
                <p className="font-dream text-lg text-white mb-2">Crafting your dreamscape...</p>
                <p className="text-purple-300/50 text-sm font-body">Analyzing emotional patterns</p>
              </div>
              <div className="flex gap-2">
                {['Imagery', 'Soundtrack', 'Emotions', 'Narrative'].map((step, i) => (
                  <div key={step} className="flex flex-col items-center gap-1">
                    <div
                      className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                    <span className="text-xs text-purple-300/40 font-body">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {result && !loading && (
            <div className="space-y-4 animate-fade-in-up">
              {/* Dream concept */}
              <div className="glass-strong rounded-2xl p-6 border border-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-dream text-lg font-semibold text-white">Your Dream</h3>
                  <div className="flex gap-2">
                    <button onClick={handleGenerate} className="w-8 h-8 rounded-full glass flex items-center justify-center text-purple-300/60 hover:text-purple-300">
                      <RefreshCw className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full glass flex items-center justify-center text-purple-300/60 hover:text-purple-300">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Visual preview */}
                <div className="h-32 rounded-xl bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-indigo-900/50" />
                  <span className="text-5xl animate-float relative z-10">✨</span>
                </div>

                <p className="text-purple-200/80 font-body text-sm leading-relaxed mb-4">{result.concept}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {result.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded-full text-xs glass border border-purple-500/20 text-purple-300 font-body">{tag}</span>
                  ))}
                  <span className="px-2 py-1 rounded-full text-xs glass border border-teal-500/20 text-teal-300 font-body">{result.visualStyle}</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="glass rounded-xl p-3 text-center">
                    <p className="font-dream text-lg font-bold text-white">{result.intensity}%</p>
                    <p className="text-xs text-purple-300/40 font-body">Intensity</p>
                  </div>
                  <div className="glass rounded-xl p-3 text-center">
                    <p className="font-dream text-lg font-bold text-white">{result.duration}</p>
                    <p className="text-xs text-purple-300/40 font-body">Duration</p>
                  </div>
                </div>
              </div>

              {/* Soundtrack */}
              <div className="glass-strong rounded-2xl p-5 border border-white/10">
                <h4 className="font-dream text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Music className="w-4 h-4 text-purple-400" />
                  Recommended Soundtrack
                </h4>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-xl">
                    🎵
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white text-sm font-body">{result.soundtrack.name}</p>
                    <p className="text-xs text-purple-300/50 font-body">{result.soundtrack.artist}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-purple-300 font-body">{result.soundtrack.mood}</p>
                    <p className="text-xs text-purple-300/40 font-body">{result.soundtrack.bpm} BPM</p>
                  </div>
                </div>
              </div>

              {/* Emotional analysis */}
              <div className="glass-strong rounded-2xl p-5 border border-white/10">
                <h4 className="font-dream text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  Emotional Analysis
                </h4>
                <div className="space-y-2">
                  {result.emotions.sort((a, b) => b.value - a.value).map(emotion => (
                    <div key={emotion.name} className="flex items-center gap-3">
                      <span className="text-xs text-purple-300/60 font-body w-20">{emotion.name}</span>
                      <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ width: `${emotion.value}%`, background: emotion.color }}
                        />
                      </div>
                      <span className="text-xs font-semibold font-body w-8 text-right" style={{ color: emotion.color }}>
                        {emotion.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold font-body hover:from-teal-500 hover:to-cyan-500 transition-all flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Save to My Dreams
              </button>
            </div>
          )}

          {!result && !loading && (
            <div className="glass-strong rounded-2xl p-8 border border-white/10 h-full flex flex-col items-center justify-center gap-4 text-center">
              <span className="text-6xl animate-float">🌙</span>
              <p className="font-dream text-xl text-white">Your dream awaits</p>
              <p className="text-purple-300/50 font-body text-sm max-w-xs">
                Describe your dream concept on the left and let our AI weave it into reality.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
