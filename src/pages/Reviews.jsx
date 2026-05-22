import ReviewSection from '@/components/reviews/ReviewSection';

const Reviews = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Page header */}
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        <p className="text-xs font-bold tracking-widest text-green-700 uppercase mb-2">Share Your Experience</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Customer Reviews</h1>
        <p className="text-gray-500 max-w-xl mx-auto text-sm">
          We love hearing from our customers. Rate your favourite fruits and leave a comment to help others discover the best picks.
        </p>
      </div>
    </div>
    <ReviewSection />
  </div>
);

export default Reviews;
