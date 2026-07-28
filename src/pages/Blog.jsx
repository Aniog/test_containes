import React, { useState, useEffect } from 'react';
import PageHeader from '@/components/common/PageHeader.jsx';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { format, parseISO } from 'date-fns';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Blog = () => {
  const [posts, setPosts] = useState([
    { id: '1', data: { title: 'Top 5 Manufacturing Hubs', image_id: 'blog-post-01', excerpt: 'Loading...', published_at: new Date().toISOString() } },
    { id: '2', data: { title: 'Avoiding Sourcing Scams', image_id: 'blog-post-02', excerpt: 'Loading...', published_at: new Date().toISOString() } },
    { id: '3', data: { title: 'Quality Control Standards', image_id: 'blog-post-03', excerpt: 'Loading...', published_at: new Date().toISOString() } }
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data: response } = await client.from('BlogPost').select('*').order('published_at', { ascending: false });
        const postList = response?.data?.list || [];
        if (postList.length > 0) {
          setPosts(postList);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <PageHeader 
        title="Sourcing Insights" 
        subtitle="Expert advice and market updates to help you navigate the China supply chain."
        imageId="blog-header"
        searchTerms="China business blog news office"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-20">Loading articles...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const data = post.data;
                const formattedDate = data.published_at ? format(parseISO(data.published_at), 'PPP') : 'Recently Published';
                
                return (
                  <article key={post.id} className="flex flex-col bg-white rounded-xl border border-gray-100 shadow-lg overflow-hidden h-full group">
                    <div className="h-56 bg-gray-200 overflow-hidden">
                      <img 
                        data-strk-img-id={data.image_id || `blog-${post.id}`}
                        data-strk-img={`${data.title} China sourcing manufacturing`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="600"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        alt={data.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center text-xs text-gray-500 mb-4 gap-4">
                        <div className="flex items-center"><Calendar size={14} className="mr-1" /> {formattedDate}</div>
                        <div className="flex items-center"><User size={14} className="mr-1" /> {data.author || 'SSourcing Team'}</div>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2">{data.title}</h3>
                      <p className="text-gray-600 text-sm mb-6 flex-grow">{data.excerpt}</p>
                      <button className="text-primary font-bold flex items-center group-hover:translate-x-1 transition-transform">
                        Read More <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
          
          <div className="mt-16 text-center">
             <button className="px-8 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors">
               Load More Articles
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
