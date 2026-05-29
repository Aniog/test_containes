import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';

const storyTags = ['All', 'Expedition', 'Culture', 'Science', 'Adventure', 'Conservation'];

const stories = [
  {
    id: 'story-1',
    title: 'Alone on the Roof of the World',
    excerpt: 'A solo climber\'s account of spending 72 hours above 8,000 meters on Everest\'s Northeast Ridge — battling frostbite, hallucinations, and the most profound silence imaginable.',
    author: 'Elena Vasquez',
    date: 'May 12, 2026',
    readTime: '12 min read',
    tag: 'Expedition',
    featured: true,
    imgId: 'story-1-img-f2g3',
  },
  {
    id: 'story-2',
    title: 'The Sherpa Who Changed Mountaineering',
    excerpt: 'How Tenzing Norgay\'s legacy continues to shape the culture of high-altitude guiding and the rights of mountain communities in Nepal.',
    author: 'Priya Sharma',
    date: 'Apr 28, 2026',
    readTime: '8 min read',
    tag: 'Culture',
    featured: false,
    imgId: 'story-2-img-g3h4',
  },
  {
    id: 'story-3',
    title: 'Reading the Ice: What Glaciers Tell Us',
    excerpt: 'Scientists drilling ice cores in the Andes are uncovering 800,000 years of climate history — and the data is alarming.',
    author: 'Dr. James Okafor',
    date: 'Apr 15, 2026',
    readTime: '10 min read',
    tag: 'Science',
    featured: false,
    imgId: 'story-3-img-h4i5',
  },
  {
    id: 'story-4',
    title: 'First Descent: The Unclimbed Couloir',
    excerpt: 'A team of four skiers spent three years planning a first descent of a 55-degree couloir in the Karakoram. Here\'s what happened.',
    author: 'Marco Bianchi',
    date: 'Mar 30, 2026',
    readTime: '15 min read',
    tag: 'Adventure',
    featured: false,
    imgId: 'story-4-img-i5j6',
  },
  {
    id: 'story-5',
    title: 'The Last Glacier of Kilimanjaro',
    excerpt: 'Researchers predict Kilimanjaro\'s iconic ice cap will be gone by 2040. We spent a week on the summit documenting what remains.',
    author: 'Amara Diallo',
    date: 'Mar 18, 2026',
    readTime: '9 min read',
    tag: 'Conservation',
    featured: false,
    imgId: 'story-5-img-j6k7',
  },
  {
    id: 'story-6',
    title: 'Mountain Festivals of the Himalayas',
    excerpt: 'From the Mani Rimdu festival at Tengboche Monastery to the Losar New Year celebrations, mountain cultures are rich with ancient traditions.',
    author: 'Yuki Tanaka',
    date: 'Mar 5, 2026',
    readTime: '7 min read',
    tag: 'Culture',
    featured: false,
    imgId: 'story-6-img-k7l8',
  },
  {
    id: 'story-7',
    title: 'Via Ferrata: Italy\'s Iron Roads',
    excerpt: 'The Dolomites\' network of iron-rung climbing routes was built during WWI. Today they offer some of the most spectacular mountain experiences in Europe.',
    author: 'Sofia Rossi',
    date: 'Feb 20, 2026',
    readTime: '6 min read',
    tag: 'Adventure',
    featured: false,
    imgId: 'story-7-img-l8m9',
  },
  {
    id: 'story-8',
    title: 'Mapping the Unmapped: Satellite Science',
    excerpt: 'New satellite technology is revealing mountain terrain never before mapped, changing our understanding of remote ranges in Central Asia.',
    author: 'Dr. Chen Wei',
    date: 'Feb 8, 2026',
    readTime: '11 min read',
    tag: 'Science',
    featured: false,
    imgId: 'story-8-img-m9n0',
  },
];

const tagColor = {
  Expedition: 'bg-peak/10 text-peak',
  Culture: 'bg-amber-100 text-amber-800',
  Science: 'bg-blue-100 text-blue-800',
  Adventure: 'bg-orange-100 text-orange-800',
  Conservation: 'bg-green-100 text-green-800',
};

const Stories = () => {
  const containerRef = useRef(null);
  const [activeTag, setActiveTag] = useState('All');

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeTag]);

  const featured = stories.find((s) => s.featured);
  const rest = stories.filter((s) => !s.featured);
  const filteredRest = activeTag === 'All'
    ? rest
    : rest.filter((s) => s.tag === activeTag);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="stories-hero-bg-n0o1"
          data-strk-bg="[stories-hero-subtitle] [stories-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
        />
        <div className="absolute inset-0 bg-peak/65" />
        <div className="relative z-10 text-center px-4">
          <p id="stories-hero-subtitle" className="text-amber-peak font-semibold text-sm uppercase tracking-widest mb-3">
            From the Field
          </p>
          <h1 id="stories-hero-title" className="font-playfair font-bold text-4xl md:text-6xl text-white">
            Mountain Stories
          </h1>
        </div>
      </section>

      <section className="bg-snow py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Featured Story */}
          {featured && (
            <div className="mb-14 bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row group hover:shadow-xl transition-shadow duration-300">
              <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
                <img
                  alt={featured.title}
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.id}-excerpt] [${featured.id}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-amber-peak text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                    Featured
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColor[featured.tag]}`}>
                    {featured.tag}
                  </span>
                </div>
                <h2 id={`${featured.id}-title`} className="font-playfair font-bold text-2xl md:text-3xl text-peak mb-3">
                  {featured.title}
                </h2>
                <p id={`${featured.id}-excerpt`} className="text-stone leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-stone mb-6">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{featured.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                </div>
                <button className="inline-flex items-center gap-2 text-alpine font-semibold hover:text-peak transition-colors self-start">
                  Read Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Tag Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {storyTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTag === tag
                    ? 'bg-peak text-white shadow-md'
                    : 'bg-white text-stone border border-glacier hover:border-alpine hover:text-peak'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Story Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRest.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    alt={story.title}
                    data-strk-img-id={story.imgId}
                    data-strk-img={`[${story.id}-excerpt] [${story.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-3.5 h-3.5 text-stone" />
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColor[story.tag]}`}>
                      {story.tag}
                    </span>
                  </div>
                  <h3 id={`${story.id}-title`} className="font-playfair font-bold text-lg text-peak mb-2 leading-snug">
                    {story.title}
                  </h3>
                  <p id={`${story.id}-excerpt`} className="text-stone text-sm leading-relaxed mb-4 line-clamp-3">
                    {story.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-stone border-t border-glacier pt-3">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />{story.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{story.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;
