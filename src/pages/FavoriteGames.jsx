import { useState, useCallback } from 'react';
import { Plus, Trash2, Send, Check, Star, Gamepad2, ChevronDown, ChevronUp } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const PLATFORMS = ['Steam', 'Epic Games', 'Nintendo', 'PlayStation', 'Xbox', 'Mobile', 'Other'];

const GENRES = [
  'Action', 'Adventure', 'RPG', 'Strategy', 'FPS', 'Sports',
  'Racing', 'Horror', 'Puzzle', 'Simulation', 'Fighting', 'Other',
];

const emptyGame = () => ({
  game_name: '',
  platform: '',
  play_time_hours: '',
  last_play_date: '',
  reason: '',
  rating: 0,
  genre: '',
  would_recommend: true,
});

const RatingPicker = ({ value, onChange }) => (
  <div className="flex gap-1">
    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
      <button
        key={n}
        type="button"
        onClick={() => onChange(n)}
        className={`w-7 h-7 rounded text-xs font-bold transition-all ${
          n <= value
            ? 'bg-brand text-white shadow-glow-sm'
            : 'bg-surface-elevated border border-surface-border text-text-muted hover:border-brand/50 hover:text-text-primary'
        }`}
      >
        {n}
      </button>
    ))}
  </div>
);

const GameEntry = ({ index, game, onChange, onRemove, canRemove, isExpanded, onToggle }) => {
  const set = (field, val) => onChange(index, { ...game, [field]: val });

  return (
    <div className="bg-surface-card border border-surface-border rounded-xl overflow-hidden transition-all">
      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-surface-elevated/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand/20 border border-brand/30 flex items-center justify-center text-brand-light font-bold text-sm">
            {index + 1}
          </div>
          <div className="text-left">
            <div className="text-text-primary font-semibold text-sm">
              {game.game_name || 'New Game'}
            </div>
            {game.platform && (
              <div className="text-text-muted text-xs">{game.platform}</div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {canRemove && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onRemove(index); }}
              className="p-1.5 rounded-lg text-text-muted hover:text-red-400 hover:bg-red-900/20 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-text-muted" />
          ) : (
            <ChevronDown className="w-4 h-4 text-text-muted" />
          )}
        </div>
      </button>

      {/* Fields */}
      {isExpanded && (
        <div className="px-5 pb-5 space-y-4 border-t border-surface-border pt-4">
          {/* Game name + Platform */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-text-secondary text-xs font-semibold mb-1.5 uppercase tracking-wide">
                Game Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={game.game_name}
                onChange={(e) => set('game_name', e.target.value)}
                placeholder="e.g. Elden Ring"
                className="w-full px-3 py-2.5 bg-surface-elevated border border-surface-border rounded-xl text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-brand/50 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-text-secondary text-xs font-semibold mb-1.5 uppercase tracking-wide">
                Platform <span className="text-red-400">*</span>
              </label>
              <select
                value={game.platform}
                onChange={(e) => set('platform', e.target.value)}
                className="w-full px-3 py-2.5 bg-surface-elevated border border-surface-border rounded-xl text-text-primary text-sm focus:outline-none focus:border-brand/50 transition-colors cursor-pointer"
                required
              >
                <option value="" className="bg-surface-card">Select platform…</option>
                {PLATFORMS.map((p) => (
                  <option key={p} value={p} className="bg-surface-card">{p}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Genre + Play time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-text-secondary text-xs font-semibold mb-1.5 uppercase tracking-wide">
                Genre
              </label>
              <select
                value={game.genre}
                onChange={(e) => set('genre', e.target.value)}
                className="w-full px-3 py-2.5 bg-surface-elevated border border-surface-border rounded-xl text-text-primary text-sm focus:outline-none focus:border-brand/50 transition-colors cursor-pointer"
              >
                <option value="" className="bg-surface-card">Select genre…</option>
                {GENRES.map((g) => (
                  <option key={g} value={g} className="bg-surface-card">{g}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-text-secondary text-xs font-semibold mb-1.5 uppercase tracking-wide">
                Hours Played
              </label>
              <input
                type="number"
                min="0"
                step="0.5"
                value={game.play_time_hours}
                onChange={(e) => set('play_time_hours', e.target.value)}
                placeholder="e.g. 120"
                className="w-full px-3 py-2.5 bg-surface-elevated border border-surface-border rounded-xl text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-brand/50 transition-colors"
              />
            </div>
          </div>

          {/* Last play date */}
          <div>
            <label className="block text-text-secondary text-xs font-semibold mb-1.5 uppercase tracking-wide">
              Last Played Date
            </label>
            <input
              type="date"
              value={game.last_play_date}
              onChange={(e) => set('last_play_date', e.target.value)}
              className="w-full px-3 py-2.5 bg-surface-elevated border border-surface-border rounded-xl text-text-primary text-sm focus:outline-none focus:border-brand/50 transition-colors [color-scheme:dark]"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-text-secondary text-xs font-semibold mb-2 uppercase tracking-wide">
              Personal Rating
              {game.rating > 0 && (
                <span className="ml-2 text-brand-light normal-case font-normal">{game.rating}/10</span>
              )}
            </label>
            <RatingPicker value={game.rating} onChange={(v) => set('rating', v)} />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-text-secondary text-xs font-semibold mb-1.5 uppercase tracking-wide">
              Why Do You Love It? <span className="text-red-400">*</span>
            </label>
            <textarea
              rows={3}
              value={game.reason}
              onChange={(e) => set('reason', e.target.value)}
              placeholder="Tell us what makes this game special to you…"
              className="w-full px-3 py-2.5 bg-surface-elevated border border-surface-border rounded-xl text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-brand/50 transition-colors resize-none"
              required
            />
          </div>

          {/* Would recommend */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => set('would_recommend', !game.would_recommend)}
              className={`w-10 h-6 rounded-full transition-colors relative flex-shrink-0 ${
                game.would_recommend ? 'bg-brand' : 'bg-surface-elevated border border-surface-border'
              }`}
            >
              <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                game.would_recommend ? 'translate-x-4' : 'translate-x-0.5'
              }`} />
            </button>
            <span className="text-text-secondary text-sm">
              I would recommend this game to others
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Submission failed. Please try again.';
};

const FavoriteGames = () => {
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [games, setGames] = useState([emptyGame()]);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedCount, setSubmittedCount] = useState(0);

  const addGame = () => {
    const next = games.length;
    setGames((prev) => [...prev, emptyGame()]);
    setExpandedIndex(next);
  };

  const removeGame = (index) => {
    setGames((prev) => prev.filter((_, i) => i !== index));
    setExpandedIndex((prev) => Math.max(0, prev > index ? prev - 1 : prev));
  };

  const updateGame = useCallback((index, updated) => {
    setGames((prev) => prev.map((g, i) => (i === index ? updated : g)));
  }, []);

  const validate = () => {
    if (!visitorName.trim()) return 'Please enter your name.';
    for (let i = 0; i < games.length; i++) {
      const g = games[i];
      if (!g.game_name.trim()) return `Game #${i + 1}: game name is required.`;
      if (!g.platform) return `Game #${i + 1}: platform is required.`;
      if (!g.reason.trim()) return `Game #${i + 1}: please tell us why you love it.`;
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const err = validate();
    if (err) { setErrorMsg(err); return; }

    setStatus('submitting');

    try {
      for (const game of games) {
        const payload = {
          data: {
            visitor_name: visitorName.trim(),
            ...(visitorEmail.trim() && { visitor_email: visitorEmail.trim() }),
            game_name: game.game_name.trim(),
            platform: game.platform,
            ...(game.play_time_hours !== '' && { play_time_hours: parseFloat(game.play_time_hours) }),
            ...(game.last_play_date && { last_play_date: game.last_play_date }),
            reason: game.reason.trim(),
            ...(game.rating > 0 && { rating: game.rating }),
            ...(game.genre && { genre: game.genre }),
            would_recommend: game.would_recommend,
          },
        };

        const { data: response, error } = await client
          .from('FavoriteGame')
          .insert(payload)
          .select()
          .single();

        if (error || response?.success === false) {
          throw new Error(getErrorMessage(response, error));
        }
      }

      setSubmittedCount(games.length);
      setStatus('success');
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMsg(err.message || 'Something went wrong.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setVisitorName('');
    setVisitorEmail('');
    setGames([emptyGame()]);
    setExpandedIndex(0);
    setStatus('idle');
    setErrorMsg('');
  };

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-brand/20 border border-brand/40 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-brand-light" />
        </div>
        <h2 className="text-3xl font-black text-text-primary mb-3">Thanks, {visitorName}!</h2>
        <p className="text-text-secondary text-lg mb-2">
          You submitted <span className="text-brand-light font-bold">{submittedCount}</span> favorite game{submittedCount > 1 ? 's' : ''}.
        </p>
        <p className="text-text-muted text-sm mb-8">Your picks have been saved. The community appreciates your taste!</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-brand-gradient text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-glow-sm"
          >
            Submit More Games
          </button>
          <a
            href="/"
            className="px-6 py-3 bg-surface-card border border-surface-border text-text-secondary font-semibold rounded-xl hover:text-text-primary hover:border-brand/40 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 md:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-brand-light" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-text-primary">Favorite Games</h1>
        </div>
        <p className="text-text-muted">
          Share the games you love most. Add as many as you like — each one gets its own entry.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Visitor info */}
        <div className="bg-surface-card border border-surface-border rounded-xl p-5 mb-6">
          <h2 className="text-text-primary font-bold mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-brand/20 text-brand-light text-xs font-black flex items-center justify-center">1</span>
            About You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-text-secondary text-xs font-semibold mb-1.5 uppercase tracking-wide">
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                placeholder="e.g. Alex Chen"
                className="w-full px-3 py-2.5 bg-surface-elevated border border-surface-border rounded-xl text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-brand/50 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-text-secondary text-xs font-semibold mb-1.5 uppercase tracking-wide">
                Email <span className="text-text-muted font-normal normal-case">(optional)</span>
              </label>
              <input
                type="email"
                value={visitorEmail}
                onChange={(e) => setVisitorEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3 py-2.5 bg-surface-elevated border border-surface-border rounded-xl text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-brand/50 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Games */}
        <div className="mb-4">
          <h2 className="text-text-primary font-bold mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-brand/20 text-brand-light text-xs font-black flex items-center justify-center">2</span>
            Your Favorite Games
            <span className="ml-auto text-text-muted text-sm font-normal">{games.length} game{games.length > 1 ? 's' : ''}</span>
          </h2>

          <div className="space-y-3">
            {games.map((game, i) => (
              <GameEntry
                key={i}
                index={i}
                game={game}
                onChange={updateGame}
                onRemove={removeGame}
                canRemove={games.length > 1}
                isExpanded={expandedIndex === i}
                onToggle={() => setExpandedIndex(expandedIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>

        {/* Add game button */}
        <button
          type="button"
          onClick={addGame}
          className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-surface-border rounded-xl text-text-muted hover:text-brand-light hover:border-brand/40 transition-colors text-sm font-semibold mb-6"
        >
          <Plus className="w-4 h-4" />
          Add Another Game
        </button>

        {/* Error */}
        {(status === 'error' || errorMsg) && (
          <div className="bg-red-900/20 border border-red-500/30 text-red-300 text-sm px-4 py-3 rounded-xl mb-4">
            {errorMsg}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full flex items-center justify-center gap-2 bg-brand-gradient text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-glow disabled:opacity-60 disabled:cursor-not-allowed text-base"
        >
          {status === 'submitting' ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit {games.length} Favorite Game{games.length > 1 ? 's' : ''}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default FavoriteGames;
