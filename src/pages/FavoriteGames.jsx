import { useState, useRef } from 'react';
import { Plus, Trash2, Star, ChevronDown, Check, Gamepad2, Send, X, ImagePlus, Image as ImageIcon } from 'lucide-react';
import { DataClient, API } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY, SITE_ID, REQUEST_DOMAIN, S3_DOMAIN } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

function buildPublicUrl(storageKey) {
  if (!storageKey) return '';
  const base = (S3_DOMAIN || '').replace(/\/+$/, '');
  const path = storageKey.replace(/^\/+/, '');
  return `${base}/${path}`;
}

const PLATFORMS = [
  'PC', 'PlayStation 5', 'PlayStation 4',
  'Xbox Series X/S', 'Xbox One', 'Nintendo Switch', 'Mobile', 'Other',
];

const GENRES = [
  'Action', 'RPG', 'Action RPG', 'FPS', 'Strategy', 'Sports',
  'Racing', 'Horror', 'Adventure', 'Puzzle', 'Simulation', 'Fighting', 'Other',
];

const EMPTY_GAME = {
  game_name: '',
  platform: '',
  play_time_hours: '',
  last_play_date: '',
  reason: '',
  rating: 0,
  genre: '',
  would_recommend: true,
  // screenshots: array of { file (File obj), preview (data URL), uploaded (result obj | null), uploading (bool), error (str) }
  screenshots: [],
};

function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="transition-transform hover:scale-110"
        >
          <Star
            className={`w-7 h-7 transition-colors ${
              star <= (hovered || value)
                ? 'text-amber-400 fill-amber-400'
                : 'text-gray-600'
            }`}
          />
        </button>
      ))}
      {value > 0 && (
        <span className="ml-2 text-amber-400 text-sm font-medium self-center">
          {['', 'Poor', 'Fair', 'Good', 'Great', 'Amazing'][value]}
        </span>
      )}
    </div>
  );
}

function SelectField({ label, value, onChange, options, placeholder, required }) {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-300 mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="w-full bg-[#1e1e2a] border border-[#2a2a3a] text-white rounded-lg px-4 py-2.5 pr-10 appearance-none outline-none focus:border-violet-500 transition-colors text-sm"
        >
          <option value="" disabled className="text-gray-500">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-[#1e1e2a] text-white">{opt}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
}

// ── Image uploader for a single game entry ──────────────────────────────────
function ImageUploader({ screenshots, onAdd, onRemove }) {
  const inputRef = useRef(null);

  const handleFiles = async (files) => {
    const accepted = Array.from(files).filter((f) => f.type.startsWith('image/'));
    if (!accepted.length) return;

    // Add placeholders immediately so the user sees progress
    const placeholders = accepted.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      uploaded: null,
      uploading: true,
      error: '',
    }));
    onAdd(placeholders);

    // Upload each file
    const results = await Promise.all(
      accepted.map(async (file, i) => {
        try {
          const result = await API.uploadImage(SITE_ID, REQUEST_DOMAIN, file);
          console.log('Image upload result:', result);
          return { index: i, uploaded: result, error: '' };
        } catch (err) {
          console.error('Image upload error:', err);
          return { index: i, uploaded: null, error: err.message || 'Upload failed' };
        }
      })
    );

    // Patch placeholders with upload results
    onAdd(
      placeholders.map((p, i) => ({
        ...p,
        uploading: false,
        uploaded: results[i].uploaded,
        error: results[i].error,
      })),
      true // replace the placeholders
    );
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div className="md:col-span-2">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Screenshots / Photos
        <span className="ml-2 text-xs text-gray-500 font-normal">optional · JPG, PNG, GIF, WebP · max 5 MB each</span>
      </label>

      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-[#2a2a3a] hover:border-violet-500/50 rounded-xl py-6 cursor-pointer transition-colors group"
      >
        <ImagePlus className="w-7 h-7 text-gray-600 group-hover:text-violet-400 transition-colors" />
        <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
          Click or drag images here
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {/* Thumbnails */}
      {screenshots.length > 0 && (
        <div className="mt-3 grid grid-cols-3 sm:grid-cols-4 gap-2">
          {screenshots.map((s, idx) => {
            const publicUrl = s.uploaded?.storageKey
              ? buildPublicUrl(s.uploaded.storageKey)
              : s.preview;
            return (
              <div key={idx} className="relative group rounded-lg overflow-hidden aspect-square bg-[#1e1e2a] border border-[#2a2a3a]">
                <img
                  src={publicUrl}
                  alt={`screenshot-${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Uploading spinner */}
                {s.uploading && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </div>
                )}
                {/* Error overlay */}
                {s.error && (
                  <div className="absolute inset-0 bg-red-900/70 flex items-center justify-center p-1">
                    <p className="text-red-300 text-xs text-center leading-tight">{s.error}</p>
                  </div>
                )}
                {/* Remove button */}
                {!s.uploading && (
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); onRemove(idx); }}
                    className="absolute top-1 right-1 w-5 h-5 bg-black/70 hover:bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3 text-white" />
                  </button>
                )}
                {/* Success tick */}
                {!s.uploading && !s.error && s.uploaded && (
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function GameEntryCard({ game, index, onChange, onRemove, canRemove, errors }) {
  const fieldError = (field) => errors?.[field];

  // screenshots helpers
  const handleAddScreenshots = (newItems, replace = false) => {
    if (replace) {
      // replace the last N placeholders (the ones currently uploading)
      onChange('screenshots', [
        ...game.screenshots.filter((s) => !s.uploading),
        ...newItems,
      ]);
    } else {
      onChange('screenshots', [...game.screenshots, ...newItems]);
    }
  };

  const handleRemoveScreenshot = (idx) => {
    const updated = game.screenshots.filter((_, i) => i !== idx);
    onChange('screenshots', updated);
  };

  return (
    <div className="bg-[#16161d] border border-[#2a2a3a] rounded-xl p-5 md:p-6 relative">
      {/* Card header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-violet-600/20 border border-violet-500/30 rounded-lg flex items-center justify-center">
            <Gamepad2 className="w-4 h-4 text-violet-400" />
          </div>
          <h3 className="text-white font-semibold">Game #{index + 1}</h3>
        </div>
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-400/10 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Game Name */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Game Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={game.game_name}
            onChange={(e) => onChange('game_name', e.target.value)}
            placeholder="e.g. Elden Ring"
            className={`w-full bg-[#1e1e2a] border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition-colors text-sm ${fieldError('game_name') ? 'border-red-500' : 'border-[#2a2a3a]'}`}
          />
          {fieldError('game_name') && <p className="text-red-400 text-xs mt-1">{fieldError('game_name')}</p>}
        </div>

        {/* Platform */}
        <div>
          <SelectField
            label="Platform"
            value={game.platform}
            onChange={(v) => onChange('platform', v)}
            options={PLATFORMS}
            placeholder="Select platform"
            required
          />
          {fieldError('platform') && <p className="text-red-400 text-xs mt-1">{fieldError('platform')}</p>}
        </div>

        {/* Genre */}
        <SelectField
          label="Genre"
          value={game.genre}
          onChange={(v) => onChange('genre', v)}
          options={GENRES}
          placeholder="Select genre"
        />

        {/* Play Time */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Play Time (hours)</label>
          <input
            type="number"
            min="0"
            step="0.5"
            value={game.play_time_hours}
            onChange={(e) => onChange('play_time_hours', e.target.value)}
            placeholder="e.g. 120"
            className="w-full bg-[#1e1e2a] border border-[#2a2a3a] rounded-lg px-4 py-2.5 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition-colors text-sm"
          />
        </div>

        {/* Last Play Date */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Last Play Date <span className="text-red-400">*</span>
          </label>
          <input
            type="date"
            value={game.last_play_date}
            onChange={(e) => onChange('last_play_date', e.target.value)}
            max={new Date().toISOString().split('T')[0]}
            className={`w-full bg-[#1e1e2a] border rounded-lg px-4 py-2.5 text-white outline-none focus:border-violet-500 transition-colors text-sm [color-scheme:dark] ${fieldError('last_play_date') ? 'border-red-500' : 'border-[#2a2a3a]'}`}
          />
          {fieldError('last_play_date') && <p className="text-red-400 text-xs mt-1">{fieldError('last_play_date')}</p>}
        </div>

        {/* Rating */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-300 mb-2">Your Rating</label>
          <StarRating value={game.rating} onChange={(v) => onChange('rating', v)} />
        </div>

        {/* Reason */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Why do you love this game? <span className="text-red-400">*</span>
          </label>
          <textarea
            value={game.reason}
            onChange={(e) => onChange('reason', e.target.value)}
            placeholder="Tell us what makes this game special to you..."
            rows={3}
            className={`w-full bg-[#1e1e2a] border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition-colors text-sm resize-none ${fieldError('reason') ? 'border-red-500' : 'border-[#2a2a3a]'}`}
          />
          {fieldError('reason') && <p className="text-red-400 text-xs mt-1">{fieldError('reason')}</p>}
        </div>

        {/* Would Recommend */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-300 mb-2">Would you recommend this game?</label>
          <div className="flex gap-3">
            {[true, false].map((val) => (
              <button
                key={String(val)}
                type="button"
                onClick={() => onChange('would_recommend', val)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  game.would_recommend === val
                    ? val
                      ? 'bg-green-500/20 border-green-500/50 text-green-400'
                      : 'bg-red-500/20 border-red-500/50 text-red-400'
                    : 'bg-[#1e1e2a] border-[#2a2a3a] text-gray-400 hover:text-white'
                }`}
              >
                {game.would_recommend === val && <Check className="w-3.5 h-3.5" />}
                {val ? '👍 Yes, definitely!' : '👎 Not really'}
              </button>
            ))}
          </div>
        </div>

        {/* Image Upload */}
        <ImageUploader
          screenshots={game.screenshots}
          onAdd={handleAddScreenshots}
          onRemove={handleRemoveScreenshot}
        />
      </div>
    </div>
  );
}

function validateGame(game) {
  const errs = {};
  if (!game.game_name.trim()) errs.game_name = 'Game name is required';
  if (!game.platform) errs.platform = 'Platform is required';
  if (!game.last_play_date) errs.last_play_date = 'Last play date is required';
  if (!game.reason.trim()) errs.reason = 'Please tell us why you love this game';
  return errs;
}

export default function FavoriteGames() {
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [games, setGames] = useState([{ ...EMPTY_GAME }]);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [globalError, setGlobalError] = useState('');
  const [fieldErrors, setFieldErrors] = useState([{}]);

  const updateGame = (index, field, value) => {
    setGames((prev) => prev.map((g, i) => i === index ? { ...g, [field]: value } : g));
    setFieldErrors((prev) => prev.map((e, i) => i === index ? { ...e, [field]: undefined } : e));
  };

  const addGame = () => {
    setGames((prev) => [...prev, { ...EMPTY_GAME, screenshots: [] }]);
    setFieldErrors((prev) => [...prev, {}]);
  };

  const removeGame = (index) => {
    setGames((prev) => prev.filter((_, i) => i !== index));
    setFieldErrors((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGlobalError('');
    setEmailError('');

    let hasTopError = false;
    if (!visitorName.trim()) { setGlobalError('Please enter your name.'); hasTopError = true; }
    if (!visitorEmail.trim()) { setEmailError('Email is required.'); hasTopError = true; }
    else if (!/^\S+@\S+\.\S+$/.test(visitorEmail)) { setEmailError('Please enter a valid email address.'); hasTopError = true; }
    if (hasTopError) return;

    const allErrors = games.map(validateGame);
    const hasGameErrors = allErrors.some((e) => Object.keys(e).length > 0);
    if (hasGameErrors) {
      setFieldErrors(allErrors);
      setGlobalError('Please fix the errors in the game entries above.');
      return;
    }

    // Block submit if any image is still uploading
    const anyUploading = games.some((g) => g.screenshots.some((s) => s.uploading));
    if (anyUploading) {
      setGlobalError('Please wait for all images to finish uploading.');
      return;
    }

    setStatus('submitting');

    try {
      const results = await Promise.all(
        games.map((game) => {
          // Build screenshots payload from successfully uploaded images
          const screenshots = game.screenshots
            .filter((s) => s.uploaded && !s.error)
            .map((s) => ({
              filename: s.uploaded.filename || s.file?.name || '',
              size: s.uploaded.size || 0,
              storageKey: s.uploaded.storageKey || '',
              storage: s.uploaded.storage || 's3',
              mimeType: s.uploaded.mimeType || s.file?.type || '',
              width: s.uploaded.width || 0,
              height: s.uploaded.height || 0,
            }));

          return client.from('FavoriteGame').insert({
            data: {
              visitor_name: visitorName.trim(),
              visitor_email: visitorEmail.trim(),
              game_name: game.game_name.trim(),
              platform: game.platform,
              ...(game.play_time_hours !== '' && { play_time_hours: Number(game.play_time_hours) }),
              last_play_date: game.last_play_date,
              reason: game.reason.trim(),
              ...(game.rating > 0 && { rating: game.rating }),
              ...(game.genre && { genre: game.genre }),
              would_recommend: game.would_recommend,
              ...(screenshots.length > 0 && { screenshots }),
            },
          }).select().single();
        })
      );

      const failed = results.find((r) => r.data?.success === false || r.error);
      if (failed) {
        const msg = failed.data?.errors?.join(', ') || failed.error?.message || 'Submission failed';
        throw new Error(msg);
      }

      setStatus('success');
    } catch (err) {
      console.error('FavoriteGame submit error:', err);
      setGlobalError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setVisitorName('');
    setVisitorEmail('');
    setEmailError('');
    setGames([{ ...EMPTY_GAME, screenshots: [] }]);
    setFieldErrors([{}]);
    setGlobalError('');
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-[#16161d] border border-green-500/30 rounded-2xl p-10">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Thanks, {visitorName}! 🎮</h2>
          <p className="text-gray-400 mb-1">
            We've saved your {games.length} favorite {games.length === 1 ? 'game' : 'games'}.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            A confirmation has been linked to <span className="text-gray-300">{visitorEmail}</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg transition-colors"
            >
              Submit More Games
            </button>
            <a
              href="/"
              className="px-6 py-2.5 bg-[#1e1e2a] border border-[#2a2a3a] text-gray-300 hover:text-white font-semibold rounded-lg transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-violet-600/20 border border-violet-500/30 rounded-xl flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-violet-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Favorite Games</h1>
        </div>
        <p className="text-gray-400">
          Share the games you love with the GameVault community. Add multiple games in one go!
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* ── Section 1: About You ── */}
        <div className="bg-[#16161d] border border-[#2a2a3a] rounded-xl p-5 md:p-6 mb-6">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span className="w-6 h-6 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-400 text-xs flex items-center justify-center font-bold">1</span>
            About You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                placeholder="e.g. Alex Chen"
                className="w-full bg-[#1e1e2a] border border-[#2a2a3a] rounded-lg px-4 py-2.5 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Email <span className="text-red-400">*</span>
                <span className="ml-1.5 text-xs text-gray-500 font-normal">used to group your game entries</span>
              </label>
              <input
                type="email"
                value={visitorEmail}
                onChange={(e) => { setVisitorEmail(e.target.value); setEmailError(''); }}
                placeholder="you@example.com"
                className={`w-full bg-[#1e1e2a] border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition-colors text-sm ${emailError ? 'border-red-500' : 'border-[#2a2a3a]'}`}
              />
              {emailError && <p className="text-red-400 text-xs mt-1">{emailError}</p>}
            </div>
          </div>
        </div>

        {/* ── Section 2: Games ── */}
        <div className="mb-4">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span className="w-6 h-6 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-400 text-xs flex items-center justify-center font-bold">2</span>
            Your Favorite Games
            <span className="ml-auto text-xs text-gray-500 font-normal">{games.length} game{games.length !== 1 ? 's' : ''} added</span>
          </h2>

          <div className="flex flex-col gap-4">
            {games.map((game, index) => (
              <GameEntryCard
                key={index}
                game={game}
                index={index}
                onChange={(field, value) => updateGame(index, field, value)}
                onRemove={() => removeGame(index)}
                canRemove={games.length > 1}
                errors={fieldErrors[index]}
              />
            ))}
          </div>
        </div>

        {/* Add Game Button */}
        <button
          type="button"
          onClick={addGame}
          className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-[#2a2a3a] hover:border-violet-500/50 text-gray-500 hover:text-violet-400 rounded-xl transition-colors text-sm font-medium mb-6"
        >
          <Plus className="w-4 h-4" />
          Add Another Game
        </button>

        {/* Error Banner */}
        {globalError && (
          <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 mb-5">
            <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <p className="text-red-400 text-sm">{globalError}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-colors text-base"
        >
          {status === 'submitting' ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit {games.length} Favorite {games.length === 1 ? 'Game' : 'Games'}
            </>
          )}
        </button>
      </form>
    </div>
  );
}
