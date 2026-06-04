import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Plus, Trash2, Star, Gamepad2, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const PLATFORMS = [
  { value: 'steam',       label: 'Steam',        color: 'bg-blue-100 text-blue-700' },
  { value: 'playstation', label: 'PlayStation',   color: 'bg-indigo-100 text-indigo-700' },
  { value: 'xbox',        label: 'Xbox',          color: 'bg-green-100 text-green-700' },
  { value: 'epic',        label: 'Epic Games',    color: 'bg-slate-100 text-slate-700' },
  { value: 'nintendo',    label: 'Nintendo',      color: 'bg-red-100 text-red-700' },
  { value: 'pc',          label: 'PC (Other)',    color: 'bg-sky-100 text-sky-700' },
  { value: 'mobile',      label: 'Mobile',        color: 'bg-purple-100 text-purple-700' },
  { value: 'other',       label: 'Other',         color: 'bg-stone-100 text-stone-700' },
];

const GENRES = [
  'Action', 'RPG', 'Strategy', 'FPS', 'Adventure', 'Simulation',
  'Sports', 'Horror', 'Puzzle', 'MOBA', 'Roguelike', 'Open World',
  'Indie', 'Multiplayer', 'Other',
];

const emptyGame = () => ({
  game_name: '',
  platform: '',
  play_time_hours: '',
  last_played_date: '',
  rating: 5,
  genre: '',
  reason: '',
});

function StarPicker({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(n)}
          className="focus:outline-none"
          aria-label={`Rate ${n} star${n > 1 ? 's' : ''}`}
        >
          <Star
            className={`w-6 h-6 transition-colors ${
              n <= (hovered || value)
                ? 'text-sky-500 fill-sky-500'
                : 'text-slate-200'
            }`}
          />
        </button>
      ))}
      <span className="ml-2 text-sm text-slate-400">{value} / 5</span>
    </div>
  );
}

function GameCard({ game, index, total, onChange, onRemove }) {
  const [expanded, setExpanded] = useState(true);
  const platform = PLATFORMS.find((p) => p.value === game.platform);

  return (
    <div className="bg-white border border-[#bfdbfe] rounded-xl overflow-hidden shadow-sm">
      {/* Card header */}
      <div
        className="flex items-center justify-between px-5 py-4 cursor-pointer select-none bg-[#f0f7ff] border-b border-[#bfdbfe]"
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-[#2563eb] text-white text-xs font-black flex items-center justify-center flex-shrink-0">
            {index + 1}
          </span>
          <div>
            <p className="text-[#1a1a1a] font-semibold text-sm">
              {game.game_name || <span className="text-[#6b8fc0] font-normal italic">Untitled game</span>}
            </p>
            {platform && (
              <span className={`text-xs font-medium px-2 py-0.5 rounded mt-0.5 inline-block ${platform.color}`}>
                {platform.label}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {total > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onRemove(); }}
              className="p-1.5 rounded-lg text-[#6b8fc0] hover:text-red-600 hover:bg-red-50 transition"
              aria-label="Remove game"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
          {expanded
            ? <ChevronUp className="w-4 h-4 text-[#6b8fc0]" />
            : <ChevronDown className="w-4 h-4 text-[#6b8fc0]" />}
        </div>
      </div>

      {/* Card body */}
      {expanded && (
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Game name */}
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-[#1e3a5f] uppercase tracking-wide mb-1.5">
              Game Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={game.game_name}
              onChange={(e) => onChange('game_name', e.target.value)}
              placeholder="e.g. Elden Ring"
              className="w-full px-3 py-2.5 rounded-lg border border-[#bfdbfe] bg-[#f0f7ff] text-[#1a1a1a] text-sm placeholder-[#93c5fd] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition"
            />
          </div>

          {/* Platform */}
          <div>
            <label className="block text-xs font-semibold text-[#1e3a5f] uppercase tracking-wide mb-1.5">
              Platform <span className="text-red-500">*</span>
            </label>
            <select
              value={game.platform}
              onChange={(e) => onChange('platform', e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[#bfdbfe] bg-[#f0f7ff] text-[#1a1a1a] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition appearance-none"
            >
              <option value="">Select platform…</option>
              {PLATFORMS.map((p) => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>

          {/* Genre */}
          <div>
            <label className="block text-xs font-semibold text-[#1e3a5f] uppercase tracking-wide mb-1.5">
              Genre
            </label>
            <select
              value={game.genre}
              onChange={(e) => onChange('genre', e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[#bfdbfe] bg-[#f0f7ff] text-[#1a1a1a] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition appearance-none"
            >
              <option value="">Select genre…</option>
              {GENRES.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          {/* Play time */}
          <div>
            <label className="block text-xs font-semibold text-[#1e3a5f] uppercase tracking-wide mb-1.5">
              Total Play Time (hours)
            </label>
            <input
              type="number"
              min="0"
              step="0.5"
              value={game.play_time_hours}
              onChange={(e) => onChange('play_time_hours', e.target.value)}
              placeholder="e.g. 120"
              className="w-full px-3 py-2.5 rounded-lg border border-[#bfdbfe] bg-[#f0f7ff] text-[#1a1a1a] text-sm placeholder-[#93c5fd] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition"
            />
          </div>

          {/* Last played date */}
          <div>
            <label className="block text-xs font-semibold text-[#1e3a5f] uppercase tracking-wide mb-1.5">
              Last Played Date
            </label>
            <input
              type="date"
              value={game.last_played_date}
              onChange={(e) => onChange('last_played_date', e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[#bfdbfe] bg-[#f0f7ff] text-[#1a1a1a] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition"
            />
          </div>

          {/* Rating */}
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-[#1e3a5f] uppercase tracking-wide mb-2">
              Your Rating
            </label>
            <StarPicker value={game.rating} onChange={(v) => onChange('rating', v)} />
          </div>

          {/* Reason */}
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-[#1e3a5f] uppercase tracking-wide mb-1.5">
              Why Do You Love This Game?
            </label>
            <textarea
              rows={3}
              value={game.reason}
              onChange={(e) => onChange('reason', e.target.value)}
              placeholder="Tell us what makes this game special to you…"
              className="w-full px-3 py-2.5 rounded-lg border border-[#bfdbfe] bg-[#f0f7ff] text-[#1a1a1a] text-sm placeholder-[#93c5fd] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition resize-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function FavoriteGames() {
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [games, setGames] = useState([emptyGame()]);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const updateGame = (index, field, value) => {
    setGames((prev) => prev.map((g, i) => i === index ? { ...g, [field]: value } : g));
  };

  const addGame = () => {
    setGames((prev) => [...prev, emptyGame()]);
    // Scroll to bottom after adding
    setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 50);
  };

  const removeGame = (index) => {
    setGames((prev) => prev.filter((_, i) => i !== index));
  };

  const validate = () => {
    if (!visitorName.trim()) return 'Please enter your name.';
    for (let i = 0; i < games.length; i++) {
      if (!games[i].game_name.trim()) return `Game #${i + 1}: game name is required.`;
      if (!games[i].platform) return `Game #${i + 1}: please select a platform.`;
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const err = validate();
    if (err) { setErrorMsg(err); return; }

    setStatus('submitting');

    const payload = {
      visitor_name: visitorName.trim(),
      visitor_email: visitorEmail.trim() || undefined,
      submitted_at: new Date().toISOString(),
      games: games.map((g) => ({
        game_name: g.game_name.trim(),
        platform: g.platform,
        ...(g.play_time_hours !== '' && { play_time_hours: parseFloat(g.play_time_hours) }),
        ...(g.last_played_date && { last_played_date: g.last_played_date }),
        rating: g.rating,
        ...(g.genre && { genre: g.genre }),
        ...(g.reason.trim() && { reason: g.reason.trim() }),
      })),
    };

    const { data: response, error } = await client
      .from('FavoriteGame')
      .insert({ data: payload })
      .select()
      .single();

    if (error || response?.success === false) {
      const msg = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : error?.message || 'Submission failed. Please try again.';
      setErrorMsg(msg);
      setStatus('error');
      return;
    }

    setStatus('success');
  };

  const handleReset = () => {
    setVisitorName('');
    setVisitorEmail('');
    setGames([emptyGame()]);
    setStatus('idle');
    setErrorMsg('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#f0f7ff] flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-3">Thanks, {visitorName}!</h2>
          <p className="text-[#4a6a8a] mb-2">
            Your {games.length} favorite game{games.length > 1 ? 's have' : ' has'} been saved.
          </p>
          <p className="text-[#6b8fc0] text-sm mb-8">
            We love hearing what games people are passionate about!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleReset}
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Submit Another List
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f7ff]">
      {/* Page hero */}
      <div className="bg-[#1e3a5f] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 bg-[#2563eb]/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Gamepad2 className="w-7 h-7 text-[#60a5fa]" />
          </div>
          <span className="text-[#60a5fa] text-xs font-semibold uppercase tracking-widest">Community</span>
          <h1 className="text-3xl md:text-4xl font-black text-white mt-2 mb-3">Share Your Favorite Games</h1>
          <p className="text-[#93c5fd] max-w-xl mx-auto text-sm leading-relaxed">
            Tell us which games you love most. Add as many as you like — each one gets its own card with platform, play time, rating, and your personal take.
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4 py-12">

        {/* Visitor info */}
        <div className="bg-white border border-[#bfdbfe] rounded-xl p-6 mb-8 shadow-sm">
          <h2 className="text-base font-bold text-[#1a1a1a] mb-5 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#2563eb] text-white text-xs font-black flex items-center justify-center">1</span>
            About You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1e3a5f] uppercase tracking-wide mb-1.5">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                placeholder="e.g. Alex Chen"
                className="w-full px-3 py-2.5 rounded-lg border border-[#bfdbfe] bg-[#f0f7ff] text-[#1a1a1a] text-sm placeholder-[#93c5fd] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1e3a5f] uppercase tracking-wide mb-1.5">
                Email <span className="text-[#93c5fd] font-normal normal-case">(optional)</span>
              </label>
              <input
                type="email"
                value={visitorEmail}
                onChange={(e) => setVisitorEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3 py-2.5 rounded-lg border border-[#bfdbfe] bg-[#f0f7ff] text-[#1a1a1a] text-sm placeholder-[#93c5fd] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition"
              />
            </div>
          </div>
        </div>

        {/* Games section header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-[#1a1a1a] flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#2563eb] text-white text-xs font-black flex items-center justify-center">2</span>
            Your Favorite Games
            <span className="ml-1 text-xs font-normal text-[#6b8fc0] bg-[#e8f2ff] px-2 py-0.5 rounded-full">
              {games.length} game{games.length !== 1 ? 's' : ''}
            </span>
          </h2>
        </div>

        {/* Game cards */}
        <div className="flex flex-col gap-4 mb-6">
          {games.map((game, index) => (
            <GameCard
              key={index}
              game={game}
              index={index}
              total={games.length}
              onChange={(field, value) => updateGame(index, field, value)}
              onRemove={() => removeGame(index)}
            />
          ))}
        </div>

        {/* Add game button */}
        <button
          type="button"
          onClick={addGame}
          className="w-full py-3 rounded-xl border-2 border-dashed border-[#bfdbfe] text-[#6b8fc0] hover:border-[#2563eb] hover:text-[#2563eb] hover:bg-[#eff6ff] transition flex items-center justify-center gap-2 text-sm font-medium mb-8"
        >
          <Plus className="w-4 h-4" />
          Add Another Game
        </button>

        {/* Error */}
        {errorMsg && (
          <div className="mb-6 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {errorMsg}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition text-base flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? (
            <>
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              Saving your games…
            </>
          ) : (
            <>
              <Gamepad2 className="w-5 h-5" />
              Submit My Favorite Games
            </>
          )}
        </button>

        <p className="text-center text-[#6b8fc0] text-xs mt-4">
          Fields marked <span className="text-red-500">*</span> are required. All other fields are optional.
        </p>
      </form>
    </div>
  );
}
