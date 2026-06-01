import { useState } from 'react';
import { MessageCircle, ThumbsUp, Search, Plus, Tag } from 'lucide-react';
import { forumPosts } from '@/data/content';

const categories = ['All', 'Care Tips', 'Training', 'Multi-Pet Households', 'Products', 'Health', 'Humor'];

export default function CommunityPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedPosts, setLikedPosts] = useState(new Set());

  const filtered = forumPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleLike = (id) => {
    setLikedPosts(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#fef9f0] pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-500 to-cyan-600 py-16 px-6 relative overflow-hidden">
        <div className="blob-bg w-64 h-64 bg-blue-300 top-0 right-0 opacity-20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4 animate-float inline-block">🌟</div>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-4">Community Forum</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Connect with thousands of magical creature families. Share tips, ask questions, and celebrate your adventures!
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Search & New Post */}
        <div className="flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="magic-input pl-11"
            />
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl font-display shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <Plus className="w-4 h-4" />
            New Post
          </button>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-600 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {filtered.map(post => (
            <div key={post.id} className="bg-white rounded-2xl p-6 shadow-sm hover-lift cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-2xl flex-shrink-0">
                  {post.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-display text-lg text-gray-900 leading-tight">{post.title}</h3>
                    <span className="flex items-center gap-1 text-xs px-2.5 py-1 bg-teal-50 text-teal-600 rounded-full font-semibold flex-shrink-0">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-teal-600 mb-2">{post.author}</p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{post.content}</p>

                  <div className="flex items-center gap-4 mt-4">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                        likedPosts.has(post.id) ? 'text-pink-500' : 'text-gray-400 hover:text-pink-400'
                      }`}
                    >
                      <ThumbsUp className={`w-4 h-4 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                      {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                    </button>
                    <button className="flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-teal-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      {post.replies} replies
                    </button>
                    <span className="text-xs text-gray-400 ml-auto">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-display text-2xl text-gray-500">No posts found</h3>
            <p className="text-gray-400 mt-2">Try a different search or category</p>
          </div>
        )}

        {/* Community stats */}
        <div className="mt-12 grid grid-cols-3 gap-4">
          {[
            { value: '12,400+', label: 'Members', emoji: '👥' },
            { value: '3,200+', label: 'Discussions', emoji: '💬' },
            { value: '45,000+', label: 'Helpful Tips', emoji: '💡' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="font-display text-2xl text-teal-600">{stat.value}</div>
              <div className="text-xs text-gray-500 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
