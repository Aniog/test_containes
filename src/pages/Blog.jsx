import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/data/siteData";
import { format } from "date-fns";

export default function Blog() {
  return (
    <div>
      <section className="bg-slate-900 py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-blue-400 mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sourcing insights from China
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Practical guides, industry updates, and lessons learned from years of sourcing in China.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-all"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                    <span className="font-semibold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {format(new Date(post.date), "MMM d, yyyy")}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-sm font-semibold text-blue-800 hover:text-blue-900"
                  >
                    Read article <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-slate-50">
        <Container>
          <div className="bg-blue-800 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get sourcing tips in your inbox
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe for practical China sourcing advice, market updates, and quality control tips.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
