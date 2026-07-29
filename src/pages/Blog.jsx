import React, { useEffect, useState } from 'react';
import { fetchBlogPosts } from '@/api/sourcing';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-[#002D62] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Insights & Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert advice on navigating the complexities of China sourcing, QC, and logistics.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">Loading blog posts...</div>
          ) : posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const data = post.data;
                return (
                  <Card key={post.id} className="flex flex-col border-none shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="p-0">
                      <div className="aspect-[16/9] bg-gray-200 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                           <span className="text-sm font-medium">Image Placeholder</span>
                        </div>
                        {/* data-strk-img would go here if we had dynamic context for blog titles */}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {data.published_at ? format(new Date(data.published_at), 'MMM dd, yyyy') : 'Recently Published'}
                        </div>
                        <div className="flex items-center gap-1">
                          <Tag size={14} />
                          {data.category || 'General'}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-[#002D62] mb-4 hover:text-[#FF6B00] transition-colors cursor-pointer line-clamp-2">
                        {data.title}
                      </CardTitle>
                      <p className="text-gray-600 line-clamp-3 mb-4">
                        {data.content}
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 mt-auto">
                      <Button variant="ghost" className="text-[#002D62] font-bold p-0 hover:bg-transparent hover:text-[#FF6B00] flex gap-2">
                        Read Full Article <ArrowRight size={16} />
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500 italic">
              No blog posts found. Check back soon for new insights!
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
