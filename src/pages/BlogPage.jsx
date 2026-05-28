import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock, Tag, ArrowRight, BookOpen } from 'lucide-react';

const articles = [
  {
    id: 'a1', imgId: 'blog-img-a1b2', titleId: 'blog-t1', descId: 'blog-d1',
    category: 'Technique', readTime: '5 min', featured: true,
    title: 'How to Perfect Your Freestyle Stroke',
    desc: 'Master the fundamentals of freestyle swimming with these expert tips on body position, arm pull, and breathing rhythm that will shave seconds off your lap times.',
    author: 'Marcus Chen', date: 'May 12, 2026',
  },
  {
    id: 'a2', imgId: 'blog-img-c3d4', titleId: 'blog-t2', descId: 'blog-d2',
    category: 'Gear', readTime: '4 min', featured: false,
    title: 'Choosing the Right Goggles for Your Face Shape',
    desc: 'Not all goggles fit the same. Learn how to match goggle seal size and frame style to your face shape for a leak-free, comfortable swim every time.',
    author: 'Lena Hoffmann', date: 'May 8, 2026',
  },
  {
    id: 'a3', imgId: 'blog-img-e5f6', titleId: 'blog-t3', descId: 'blog-d3',
    category: 'Training', readTime: '7 min', featured: false,
    title: '8-Week Beginner Swimming Program',
    desc: 'New to swimming? This structured 8-week plan takes you from 25m to 1km continuously, with three sessions per week and clear progression milestones.',
    author: 'Diego Reyes', date: 'Apr 30, 2026',
  },
  {
    id: 'a4', imgId: 'blog-img-g7h8', titleId: 'blog-t4', descId: 'blog-d4',
    category: 'Open Water', readTime: '6 min', featured: false,
    title: 'Open Water Swimming: What You Need to Know',
    desc: 'Transitioning from pool to open water? Discover the key differences in navigation, sighting, wetsuit use, and safety that every open water swimmer must understand.',
    author: 'Marcus Chen', date: 'Apr 22, 2026',
  },
  {
    id: 'a5', imgId: 'blog-img-i9j0', titleId: 'blog-t5', descId: 'blog-d5',
    category: 'Nutrition', readTime: '5 min', featured: false,
    title: 'Fueling Your Swim: Pre and Post Workout Nutrition',
    desc: 'What you eat before and after training directly impacts your performance and recovery. Here\'s a practical guide to swimmer nutrition from our certified sports dietitian.',
    author: 'Lena Hoffmann', date: 'Apr 15, 2026',
  },
  {
    id: 'a6', imgId: 'blog-img-k1l2', titleId: 'blog-t6', descId: 'blog-d6',
    category: 'Technique', readTime: '4 min', featured: false,
    title: 'Mastering the Flip Turn',
    desc: 'A fast, efficient flip turn can save you 0.5–1 second per length. Break down the approach, rotation, push-off, and streamline with our step-by-step guide.',
    author: 'Diego Reyes', date: 'Apr 5, 2026',
  },
  {
    id: 'a7', imgId: 'blog-img-m3n4', titleId: 'blog-t7', descId: 'blog-d7',
    category: 'Gear', readTime: '3 min', featured: false,
    title: 'How to Care for Your Swim Cap and Goggles',
    desc: 'Chlorine and UV exposure degrade swim gear fast. Follow these simple maintenance tips to extend the life of your cap, goggles, and swimsuit significantly.',
    author: 'Lena Hoffmann', date: 'Mar 28, 2026',
  },
  {
    id: 'a8', imgId: 'blog-img-o5p6', titleId: 'blog-t8', descId: 'blog-d8',
    category: 'Training', readTime: '8 min', featured: false,
    title: 'Dryland Training Exercises for Swimmers',
    desc: 'Improve your strength, flexibility, and endurance out of the water. These 10 dryland exercises are specifically designed to complement your swim training.',
    author: 'Marcus Chen', date: 'Mar 20, 2026',
  },
];

const categories = ['All', 'Technique', 'Training', 'Gear', 'Nutrition', 'Open Water'];

const categoryColors = {
  Technique: 'bg-sky-100 text-sky-700',
  Training: 'bg-cyan-100 text-cyan-700',
  Gear: 'bg-indigo-100 text-indigo-700',
  Nutrition: 'bg-green-100 text-green-700',
  'Open Water': 'bg-teal-100 text-teal-700',
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const featured = articles.find((a) => a.featured);
  const filtered = (activeCategory === 'All' ? articles : articles.filter((a) => a.category === activeCategory))
    .filter((a) => !a.featured);

  return (
    <div ref={containerRef}>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-sky-900 via-sky-800 to-cyan-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="inline-block bg-cyan-400/20 text-cyan-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-400/30">
            Tips, Guides & Stories
          </span>
          <h1 id="blog-page-title" className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            SwimGear Blog
          </h1>
          <p id="blog-page-sub" className="text-sky-100 text-lg max-w-xl mx-auto">
            Expert advice on technique, training, gear reviews, and everything swimming — written by swimmers, for swimmers.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-4 h-4 text-cyan-600" />
              <span className="text-cyan-600 font-semibold text-sm">Featured Article</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-sky-50 rounded-3xl overflow-hidden border border-sky-100 shadow-sm">
              <div className="h-64 lg:h-auto bg-sky-200 overflow-hidden">
                <img
                  alt={featured.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}] [blog-page-sub] [blog-page-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-sky-900 mb-3 leading-tight">
                  {featured.title}
                </h2>
                <p id={featured.descId} className="text-slate-600 leading-relaxed mb-6">{featured.desc}</p>
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                  <span className="font-medium text-slate-600">{featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime} read</span>
                </div>
                <Link to="/blog" className="inline-flex items-center gap-2 bg-sky-700 hover:bg-sky-800 text-white rounded-full px-6 py-2.5 font-semibold text-sm transition w-fit">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter + Grid */}
      <section className="bg-sky-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-500 text-sm font-medium mr-1">
              <Tag className="w-4 h-4" /> Topics:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition ${
                  activeCategory === cat
                    ? 'bg-sky-700 text-white border-sky-700'
                    : 'bg-white text-slate-600 border-sky-200 hover:border-sky-400 hover:text-sky-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((article) => (
              <div key={article.id} className="bg-white rounded-2xl overflow-hidden border border-sky-100 shadow-sm hover:shadow-md transition flex flex-col">
                <div className="h-48 bg-sky-100 overflow-hidden">
                  <img
                    alt={article.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={article.imgId}
                    data-strk-img={`[${article.descId}] [${article.titleId}] [blog-page-sub] [blog-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 w-fit ${categoryColors[article.category] || 'bg-sky-100 text-sky-700'}`}>
                    {article.category}
                  </span>
                  <h3 id={article.titleId} className="text-base font-bold text-sky-900 mb-2 leading-snug">{article.title}</h3>
                  <p id={article.descId} className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{article.desc}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400 mt-auto pt-3 border-t border-sky-50">
                    <span className="font-medium text-slate-500">{article.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-sky-700 py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
          <span className="inline-block bg-cyan-400/20 text-cyan-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-400/30">
            Stay in the Loop
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Get Swim Tips in Your Inbox
          </h2>
          <p className="text-sky-100 mb-8">
            Join 12,000+ swimmers who get our weekly training tips, gear guides, and exclusive deals delivered every Tuesday.
          </p>
          {subscribed ? (
            <div className="bg-white/10 rounded-2xl px-8 py-6 text-white">
              <div className="text-2xl mb-2">🎉</div>
              <p className="font-semibold text-lg">You're subscribed!</p>
              <p className="text-sky-200 text-sm mt-1">Check your inbox for a welcome email from us.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-full px-5 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 bg-white"
              />
              <button
                type="submit"
                className="bg-cyan-400 hover:bg-cyan-300 text-sky-900 font-bold rounded-full px-6 py-3 text-sm transition shrink-0"
              >
                Subscribe Free
              </button>
            </form>
          )}
          <p className="text-sky-300 text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Topics Overview */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-8 text-center">Browse by Topic</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.filter((c) => c !== 'All').map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                className={`rounded-2xl p-5 text-center border transition hover:shadow-md cursor-pointer ${categoryColors[cat] || 'bg-sky-100 text-sky-700'} border-transparent`}
              >
                <div className="font-bold text-sm mb-1">{cat}</div>
                <div className="text-xs opacity-70">{articles.filter((a) => a.category === cat).length} articles</div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
