import { Star } from 'lucide-react';

const RatingBadge = ({ rating }) => (
  <span className="flex items-center gap-1 text-yellow-400 text-sm font-semibold">
    <Star className="w-3.5 h-3.5 fill-yellow-400" />
    {rating.toFixed(1)}
  </span>
);

export default RatingBadge;
