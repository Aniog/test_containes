import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { articles, tips } from '@/data/articles';
import ArticleCard from './ArticleCard';
import { Lightbulb } from 'lucide-react';

const ArticleGrid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="articles" ref={containerRef} className="py-16 md:py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-leaf rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-ink">Latest Articles</h2>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-semibold text-leaf hover:text-forest transition-colors">
            View all →
          </a>
        </div>

        {/* Article grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Tips section */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-sky rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-ink">Science Tips</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-sage"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{tip.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-sage" />
                    <h4 className="font-bold text-ink text-sm">{tip.title}</h4>
                  </div>
                  <p className="text-sm text-stone leading-relaxed">{tip.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleGrid;
