import { useState } from 'react';
import { Star, Loader2, CheckCircle } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const FRUITS = [
  'Strawberries', 'Mango', 'Blueberries', 'Watermelon',
  'Pineapple', 'Cherries', 'Grapes', 'Peach', 'Other',
];

const StarPicker = ({ value, onChange }) => (
  <div className="flex gap-1" role="group" aria-label="Star rating">
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onClick={() => onChange(star)}
        aria-label={`${star} star${star > 1 ? 's' : ''}`}
        className="focus:outline-none transition-transform hover:scale-110"
      >
        <Star
          className={`w-8 h-8 transition-colors ${
            star <= value
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      </button>
    ))}
  </div>
);

const RATING_LABELS = { 1: 'Poor', 2: 'Fair', 3: 'Good', 4: 'Great', 5: 'Excellent!' };

const ReviewForm = ({ onReviewSubmitted }) => {
  const [form, setForm] = useState({ name: '', email: '', fruit: '', comment: '' });
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!form.email.trim()) return 'Please enter your email.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email.';
    if (rating === 0) return 'Please select a star rating.';
    if (!form.comment.trim()) return 'Please write a comment.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const err = validate();
    if (err) { setErrorMsg(err); return; }

    setStatus('submitting');

    const { data: response, error } = await client
      .from('Reviews')
      .insert({
        data: {
          name: form.name.trim(),
          email: form.email.trim(),
          rating,
          comment: form.comment.trim(),
          fruit: form.fruit || undefined,
        },
      })
      .select()
      .single();

    if (error || response?.success === false) {
      const msgs = Array.isArray(response?.errors)
        ? response.errors.join(', ')
        : (error?.message || 'Submission failed. Please try again.');
      setErrorMsg(msgs);
      setStatus('error');
      return;
    }

    const newReview = response?.data ?? null;
    setStatus('success');
    setForm({ name: '', email: '', fruit: '', comment: '' });
    setRating(0);
    if (onReviewSubmitted && newReview) onReviewSubmitted(newReview);

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-1">Leave a Review</h3>
      <p className="text-sm text-gray-500 mb-6">Share your experience with our fruits</p>

      {status === 'success' ? (
        <div className="flex flex-col items-center gap-3 py-8 text-center">
          <CheckCircle className="w-12 h-12 text-green-600" />
          <p className="font-semibold text-gray-900">Thank you for your review!</p>
          <p className="text-sm text-gray-500">Your feedback helps other customers.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide" htmlFor="rev-name">
                Your Name *
              </label>
              <input
                id="rev-name"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                placeholder="Jane Smith"
                className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide" htmlFor="rev-email">
                Email *
              </label>
              <input
                id="rev-email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="jane@example.com"
                className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Fruit selector */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide" htmlFor="rev-fruit">
              Which Fruit? (optional)
            </label>
            <select
              id="rev-fruit"
              name="fruit"
              value={form.fruit}
              onChange={onChange}
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
            >
              <option value="">Select a fruit…</option>
              {FRUITS.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          {/* Star rating */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Rating *
            </label>
            <div className="flex items-center gap-3">
              <StarPicker value={rating} onChange={setRating} />
              {rating > 0 && (
                <span className="text-sm font-semibold text-yellow-600">{RATING_LABELS[rating]}</span>
              )}
            </div>
          </div>

          {/* Comment */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide" htmlFor="rev-comment">
              Your Comment *
            </label>
            <textarea
              id="rev-comment"
              name="comment"
              rows={4}
              value={form.comment}
              onChange={onChange}
              placeholder="Tell us what you loved (or didn't love)…"
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
            <p className="text-xs text-gray-400 text-right">{form.comment.length}/1000</p>
          </div>

          {errorMsg && (
            <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-60 text-white font-bold rounded-full py-3 transition-colors flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting…
              </>
            ) : (
              'Submit Review'
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;
