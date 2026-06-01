import { useState } from 'react';
import { Star, Heart, ArrowRight } from 'lucide-react';
import { successStories } from '@/data/content';
import { Link } from 'react-router-dom';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
        />
      ))}
    </div>
  );
}

export default function StoriesPage() {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <div className="min-h-screen bg-[#fef9f0] pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-rose-500 to-pink-600 py-16 px-6 relative overflow-hidden">
        <div className="blob-bg w-64 h-64 bg-orange-300 top-0 right-0 opacity-20" />
        <div className="blob-bg w-48 h-48 bg-yellow-300 bottom-0 left-10 opacity-20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4 animate-float inline-block">💝</div>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-4">Success Stories</h1>
          <p className="text-pink-100 text-lg max-w-2xl mx-auto">
            Real families, real magic. Read how our adopted creatures have transformed lives and brought joy to homes around the world.
          </p>
        </div>
      </div>

      {/* Stats banner */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-3 gap-4 text-center">
          {[
            { value: '4,200+', label: 'Adoptions', emoji: '🏠' },
            { value: '98%', label: 'Happy Families', emoji: '💝' },
            { value: '50+', label: 'Countries', emoji: '🌍' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl mb-1">{stat.emoji}</div>
              <div className="font-display text-2xl text-purple-700">{stat.value}</div>
              <div className="text-xs text-gray-500 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {successStories.map(story => (
            <div
              key={story.id}
              className="bg-white rounded-2xl shadow-md hover-lift cursor-pointer overflow-hidden"
              onClick={() => setActiveStory(activeStory?.id === story.id ? null : story)}
            >
              {/* Card header */}
              <div className="bg-gradient-to-br from-pink-400 to-rose-500 p-6 text-center">
                <div className="text-5xl mb-2 animate-float inline-block">{story.monsterEmoji}</div>
                <h3 className="font-display text-xl text-white">{story.monster}</h3>
                <p className="text-pink-100 text-sm">Adopted by {story.family}</p>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <StarRating rating={story.rating} />
                  <span className="text-xs text-gray-400">{story.location}</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  "{story.story}"
                </p>

                {activeStory?.id === story.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100 animate-slide-up">
                    <p className="text-gray-600 text-sm leading-relaxed">"{story.story}"</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {story.tags.map(tag => (
                        <span key={tag} className="text-xs px-2.5 py-1 bg-pink-50 text-pink-600 rounded-full font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-gray-400">{new Date(story.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                  <button className="text-pink-500 text-xs font-semibold hover:text-pink-700 transition-colors">
                    {activeStory?.id === story.id ? 'Show less' : 'Read more →'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share your story CTA */}
        <div className="mt-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-10 text-center text-white">
          <div className="text-5xl mb-4 animate-float inline-block">📸</div>
          <h2 className="font-display text-3xl mb-3">Share Your Story!</h2>
          <p className="text-purple-100 mb-6 max-w-xl mx-auto">
            Have you adopted a magical creature from Monster Match? We'd love to hear about your experience and feature your family's story!
          </p>
          <Link
            to="/account"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-700 rounded-xl font-display text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <Heart className="w-5 h-5" />
            Submit Your Story
          </Link>
        </div>
      </div>
    </div>
  );
}
