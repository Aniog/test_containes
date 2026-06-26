import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, ChevronRight, Tag } from "lucide-react";

const blogPosts = [
  { id: "questions", title: "10 Questions to Ask Before Sourcing from China", excerpt: "Before starting your China sourcing journey, make sure you have clear answers to these critical questions.", date: "Dec 15, 2024", category: "Sourcing Tips", readTime: "8 min" },
  { id: "incoterms", title: "Understanding Incoterms for International Shipping", excerpt: "Incoterms can make or break your shipping experience. Learn the most important terms.", date: "Dec 10, 2024", category: "Shipping Guide", readTime: "6 min" },
  { id: "factory-audits", title: "How to Read Chinese Factory Audits", excerpt: "Factory audit reports contain valuable information. Learn what to look for.", date: "Dec 5, 2024", category: "Quality Control", readTime: "7 min" },
  { id: "negotiation", title: "Negotiation Strategies for Chinese Suppliers", excerpt: "Effective negotiation is key to getting better prices and terms.", date: "Nov 28, 2024", category: "Negotiation", readTime: "9 min" },
  { id: "qc-checklist", title: "The Ultimate Quality Control Checklist", excerpt: "A comprehensive checklist to ensure your products meet standards.", date: "Nov 20, 2024", category: "Quality Control", readTime: "10 min" },
  { id: "shipping", title: "Sea Freight vs Air Freight: Choosing the Right Method", excerpt: "Your choice of shipping method affects cost, speed, and risk.", date: "Nov 15, 2024", category: "Shipping Guide", readTime: "6 min" },
];

const Blog = () => (
  <div>
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sourcing Knowledge Center</h1>
        <p className="text-xl text-slate-300 mb-8">Expert advice, practical guides, and industry insights for China sourcing.</p>
        <Link to="/contact" className="btn-primary text-lg px-8 py-4">Get Expert Help <ArrowRight className="w-5 h-5" /></Link>
      </div>
    </section>

    <section className="section-spacing bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="badge badge-primary mb-4">Featured Article</span>
          <div className="bg-white rounded-xl p-8 text-left max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="badge badge-primary">{blogPosts[0].category}</span>
              <span className="text-sm text-slate-500 flex items-center gap-1"><Calendar className="w-4 h-4" /> {blogPosts[0].date}</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{blogPosts[0].title}</h2>
            <p className="text-slate-600 mb-6">{blogPosts[0].excerpt}</p>
            <Link to={`/blog#${blogPosts[0].id}`} className="inline-flex items-center text-blue-600 font-medium">Read More <ChevronRight className="w-4 h-4 ml-1" /></Link>
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">All Articles</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 card-hover">
              <div className="h-48 bg-slate-100" />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="badge badge-primary">{post.category}</span>
                  <span className="text-sm text-slate-500">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{post.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500 flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
                  <Link to={`/blog#${post.id}`} className="inline-flex items-center text-blue-600 text-sm font-medium">Read More <ChevronRight className="w-4 h-4 ml-1" /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing bg-slate-50">
      <div className="container-custom text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Stay Updated</h2>
        <p className="text-slate-600 mb-8">Subscribe to receive new articles and sourcing tips.</p>
        <div className="flex gap-4 max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="btn-primary">Subscribe</button>
        </div>
      </div>
    </section>

    <section className="section-spacing bg-blue-600 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions?</h2>
        <p className="text-blue-100 text-lg mb-8">Our team of China sourcing experts is ready to help.</p>
        <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 inline-flex items-center gap-2">Contact an Expert <ArrowRight className="w-5 h-5" /></Link>
      </div>
    </section>
  </div>
);

export default Blog;
