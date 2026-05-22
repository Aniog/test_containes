import { Star } from 'lucide-react';
import { formatDistanceToNow, parseISO } from 'date-fns';

const StarDisplay = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        className={`w-4 h-4 ${s <= rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
      />
    ))}
  </div>
);

const getInitials = (name) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');

const AVATAR_COLORS = [
  'bg-green-100 text-green-700',
  'bg-orange-100 text-orange-700',
  'bg-blue-100 text-blue-700',
  'bg-purple-100 text-purple-700',
  'bg-pink-100 text-pink-700',
];

const avatarColor = (name) => AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];

const ReviewCard = ({ review }) => {
  const fields = review?.data ?? review ?? {};
  const timeAgo = review?.created_at
    ? formatDistanceToNow(parseISO(review.created_at), { addSuffix: true })
    : null;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${avatarColor(fields.name || 'A')}`}>
            {getInitials(fields.name || 'A')}
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm leading-tight">{fields.name}</p>
            {fields.fruit && (
              <p className="text-xs text-green-700 font-medium">{fields.fruit}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <StarDisplay rating={fields.rating} />
          {timeAgo && <p className="text-xs text-gray-400">{timeAgo}</p>}
        </div>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{fields.comment}</p>
    </div>
  );
};

const ReviewList = ({ reviews, loading }) => {
  if (loading) {
    return (
      <div className="flex flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 animate-pulse">
            <div className="flex gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-3 bg-gray-200 rounded w-1/3" />
                <div className="h-3 bg-gray-200 rounded w-1/4" />
              </div>
            </div>
            <div className="h-3 bg-gray-200 rounded w-full mb-2" />
            <div className="h-3 bg-gray-200 rounded w-4/5" />
          </div>
        ))}
      </div>
    );
  }

  if (!reviews.length) {
    return (
      <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-10 text-center">
        <p className="text-3xl mb-3">🍓</p>
        <p className="font-semibold text-gray-700">No reviews yet</p>
        <p className="text-sm text-gray-400 mt-1">Be the first to share your experience!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
