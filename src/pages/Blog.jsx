import React, { useEffect, useState, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { client, getRows, getSchemaData } from '@/api/db';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Loader2, Calendar, User, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

export default function Blog() {
  const containerRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: response } = await client
          .from('BlogPost')
          .select('*')
          .order('published_at', { ascending: false });
        
        setPosts(getRows(response));
      } catch (err) {
        console.error('Failed to fetch blog posts:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [posts, loading]);

  return (
    <div ref={containerRef} className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          className="rounded-2xl bg-slate-900 px-6 py-16 text-center sm:px-16 sm:py-24 mb-16 relative overflow-hidden"
          data-strk-bg-id="blog-hero-bg-1"
          data-strk-bg="[blog-subtitle] [blog-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1200"
        >
          <div className="relative z-10 mx-auto max-w-2xl">
            <h1 id="blog-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Sourcing Insights</h1>
            <p id="blog-subtitle" className="mt-4 text-lg text-slate-300">
              Expert advice, market trends, and practical guides on sourcing from China.
            </p>
          </div>
          <div className="absolute inset-0 bg-slate-900/60 z-0" />
        </div>

        {loading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
          </div>
        ) : (
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.length > 0 ? (
              posts.map((post) => {
                const data = getSchemaData(post);
                return (
                  <article key={post.id} className="flex flex-col items-start">
                    <div 
                      className="relative w-full overflow-hidden rounded-2xl bg-slate-100 aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]"
                      data-strk-bg-id={`blog-bg-${post.id}`}
                      data-strk-bg={`[blog-post-title-${post.id}] factory logistics marketplace`}
                      data-strk-bg-ratio="16x9"
                      data-strk-bg-width="600"
                    />
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <time dateTime={data.published_at} className="text-slate-500 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {data.published_at ? format(new Date(data.published_at), 'MMM d, yyyy') : 'Recently'}
                        </time>
                        <span className="relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100 uppercase tracking-wider">
                          {data.category || 'Industry News'}
                        </span>
                      </div>
                      <div className="group relative">
                        <h3 id={`blog-post-title-${post.id}`} className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-blue-600">
                          <span className="absolute inset-0" />
                          {data.title}
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">{data.excerpt}</p>
                      </div>
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-slate-900 flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {data.author}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-slate-500">New insights arriving soon!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
