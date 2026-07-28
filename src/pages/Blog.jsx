import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

const Blog = () => {
  const posts = [
    {
      id: 'post1',
      title: 'Top 5 Mistakes to Avoid When Sourcing from China',
      excerpt: 'Learn the common pitfalls that international buyers face and how to protect your investment during the procurement process.',
      author: 'Chen Wei',
      date: '2024-03-15',
      category: 'Sourcing Tips',
      imgId: 'blog-mistakes-b1'
    },
    {
      id: 'post2',
      title: 'Understanding Incoterms 2024: A Simple Guide',
      excerpt: 'FOB, CIF, EXW? We break down the shipping terms you need to know to manage your logistics costs effectively.',
      author: 'Sarah Johnson',
      date: '2024-03-10',
      category: 'Logistics',
      imgId: 'blog-shipping-b2'
    },
    {
      id: 'post3',
      title: 'How to Perform an Effective Factory Audit',
      excerpt: 'A step-by-step guide to what you should look for when visiting or hiring an agent to audit a new supplier.',
      author: 'Li Min',
      date: '2024-02-28',
      category: 'Quality Control',
      imgId: 'blog-audit-b3'
    },
    {
      id: 'post4',
      title: 'The Future of Manufacturing in Shenzhen',
      excerpt: 'Exploring the shift towards high-tech manufacturing and smart factories in China\'s tech hub.',
      author: 'David Wright',
      date: '2024-02-15',
      category: 'Market Trends',
      imgId: 'blog-trends-b4'
    },
    {
      id: 'post5',
      title: 'Sustainable Sourcing: Finding Eco-Friendly Suppliers',
      excerpt: 'How to verify green certifications and ethical labor practices in the Chinese manufacturing sector.',
      author: 'Chen Wei',
      date: '2024-01-20',
      category: 'Ethics',
      imgId: 'blog-eco-b5'
    },
    {
      id: 'post6',
      title: 'Navigating New Year Production Delays',
      excerpt: 'Planning your inventory cycles around Chinese New Year to avoid seasonal stockouts.',
      author: 'Li Min',
      date: '2024-01-05',
      category: 'Planning',
      imgId: 'blog-cny-b6'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 id="blog-title" className="mb-6 text-4xl font-bold md:text-5xl">China Sourcing Blog</h1>
          <p id="blog-desc" className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Insider knowledge, market updates, and expert advice to help you navigate the complexities of importing from China.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 lg:py-24 border-b">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row gap-12 bg-card rounded-2xl border overflow-hidden shadow-sm">
              <div className="flex-1 aspect-video lg:aspect-auto bg-secondary relative">
                 <div 
                    className="absolute inset-0"
                    data-strk-bg-id="featured-blog-fb1"
                    data-strk-bg="[feat-blog-title] [blog-title]"
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="1200"
                 />
              </div>
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                 <span className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">Featured Post</span>
                 <h2 id="feat-blog-title" className="text-3xl font-bold mb-6">Navigating the 2024 Supply Chain: Strategies for Global Buyers</h2>
                 <p className="text-lg text-muted-foreground mb-8 line-clamp-3">
                   The global logistics landscape is changing rapidly. From shifting trade policies to new digital sourcing platforms, here is what you need to stay competitive in the coming year.
                 </p>
                 <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                       <User className="h-4 w-4" />
                       <span>Chen Wei</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <Calendar className="h-4 w-4" />
                       <span>March 20, 2024</span>
                    </div>
                 </div>
                 <Button className="w-fit">Read Full Article</Button>
              </div>
           </div>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col bg-card rounded-xl border border-border/60 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-video relative overflow-hidden bg-secondary">
                   <div 
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                      data-strk-bg-id={post.imgId}
                      data-strk-bg={`[blog-title-${post.id}] [blog-title]`}
                      data-strk-bg-ratio="16x9"
                      data-strk-bg-width="600"
                   />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                   <span className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">{post.category}</span>
                   <h3 id={`blog-title-${post.id}`} className="text-xl font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                   <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>
                   <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t">
                      <div className="flex items-center gap-2">
                         <Calendar className="h-3 w-3" />
                         <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
                      </div>
                      <Button variant="link" className="h-auto p-0 text-xs font-bold">Read More <ArrowRight className="ml-1 h-3 w-3" /></Button>
                   </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
             <Button variant="outline" size="lg">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
           <h2 className="text-3xl font-bold mb-6 text-white">Get Weekly Sourcing Insights</h2>
           <p className="text-blue-100 mb-10">
             Join 5,000+ professionals and stay updated with the latest China manufacturing news, market trends, and sourcing tips.
           </p>
           <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your business email" 
                className="flex-grow px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button variant="secondary" size="lg" className="whitespace-nowrap px-8">Subscribe</Button>
           </form>
           <p className="mt-4 text-xs text-blue-400 italic">No spam. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
