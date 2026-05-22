import { useState, useEffect, useCallback } from 'react';
import { Star } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const avgRating = (reviews) => {
  if (!reviews.length) return 0;
  const sum = reviews.reduce((acc, r) => acc + ((r?.data ?? r)?.rating ?? 0), 0);
  return (sum / reviews.length).toFixed(1);
};

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = useCallback(async () => {
    setLoading(true);
    const { data: response, error } = await client
      .from('Reviews')
      .select('*')
      .order('created_at', { ascending: false })
      .range(0, 19);

    if (!error && response?.data?.list) {
      setReviews(response.data.list);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const handleNewReview = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  const avg = avgRating(reviews);
  const total = reviews.length;

  return (
    <section id="reviews" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest text-green-700 uppercase mb-2">Customer Reviews</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real feedback from real fruit lovers. Share your own experience below.
          </p>

          {/* Summary bar */}
          {total > 0 && (
            <div className="inline-flex items-center gap-3 mt-6 bg-white rounded-2xl px-6 py-3 shadow-sm border border-gray-100">
              <span className="text-3xl font-extrabold text-gray-900">{avg}</span>
              <div className="flex flex-col items-start gap-1">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${s <= Math.round(avg) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">{total} review{total !== 1 ? 's' : ''}</span>
              </div>
            </div>
          )}
        </div>

        {/* Two-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <div className="lg:sticky lg:top-24">
            <ReviewForm onReviewSubmitted={handleNewReview} />
          </div>

          {/* Reviews list */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-gray-900 text-lg">
                {total > 0 ? `${total} Review${total !== 1 ? 's' : ''}` : 'Reviews'}
              </h3>
            </div>
            <ReviewList reviews={reviews} loading={loading} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
