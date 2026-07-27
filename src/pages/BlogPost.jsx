import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { format, parseISO } from "date-fns";

import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import InquiryForm from "@/components/sections/InquiryForm";
import { BLOG_POSTS } from "@/data/site";

const SAMPLE_BODY = [
  "When you are sourcing from China for the first time, the hardest part is usually not the language — it is knowing which questions to ask. Below is a practical walkthrough we share with new buyers, broken into the same steps our team uses internally when evaluating a new supplier.",
  "If you only have ten minutes, read the checklist in section 2 and the negotiation tips in section 4. If you have more time, the rest of the article covers common pitfalls and how to structure your first order so the factory is set up for long-term cooperation.",
  "Every buyer's situation is different. The points below are written for an English-speaking importer working with one or two new Chinese factories, and they assume you are not yet on the ground in China.",
  "The single biggest mistake we see is the 'lowest price wins' approach. A 5% cheaper quote from an unverified factory can easily cost 25% of the order value once defects, delays, and re-shipment are factored in. Aim for the best total cost, not the lowest unit price.",
  "A reliable supplier is one that can be honest with you about lead times, quality risks, and what they can — and cannot — do. The goal of your first order is to find out who they really are, not to extract the lowest possible price.",
];

export default function BlogPost() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [slug]);

  if (!post) {
    return (
      <Section bg="white">
        <p className="text-ink-700">Article not found. <Link to="/blog" className="text-brand-700 font-semibold">Back to blog</Link></p>
      </Section>
    );
  }

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumb={[{ label: "Blog", to: "/blog" }, { label: post.title }]}
      >
        <div className="flex flex-wrap items-center gap-4 text-sm text-brand-100">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {format(parseISO(post.date), "MMMM d, yyyy")}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Tag className="h-4 w-4" />
            {post.category}
          </span>
        </div>
      </PageHero>

      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <article className="lg:col-span-8">
            <div className="rounded-lg overflow-hidden border border-ink-200">
              <img
                alt={post.title}
                data-strk-img-id={`blogpost-${post.slug}-img-2b6f8d`}
                data-strk-img={`[blogpost-${post.slug}-title] [blogpost-${post.slug}-excerpt]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
            <p
              id={`blogpost-${post.slug}-excerpt`}
              className="mt-6 text-lg text-ink-700 leading-relaxed"
            >
              {post.excerpt}
            </p>
            <div className="prose-style mt-6 space-y-5 text-ink-800 leading-relaxed">
              {SAMPLE_BODY.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <h2 className="text-2xl font-bold text-ink-900 mt-10">
                A short checklist you can use today
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirm the supplier is a real manufacturer, not a trading company.</li>
                <li>Ask for a written quotation that breaks down unit price, tooling, and shipping.</li>
                <li>Request a pre-shipment inspection aligned to AQL 2.5 by default.</li>
                <li>Get every agreement in writing — specs, packaging, lead time, payment terms.</li>
                <li>Plan a small trial order before scaling up to a full container.</li>
              </ul>
              <p>
                If you would like a second pair of eyes on a supplier or a
                quotation, send it to us and a sourcing manager will respond.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button as="link" to="/contact" icon={ArrowLeft}>
                Get a free quote
              </Button>
              <Link
                to="/blog"
                className="inline-flex h-11 items-center text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to all articles
              </Link>
            </div>
          </article>

          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-lg border border-ink-200 bg-ink-50 p-5">
              <h3 className="text-sm font-semibold text-ink-900">Related topics</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 4).map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/blog/${p.slug}`}
                      className="text-ink-700 hover:text-brand-700"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-ink-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-ink-900">Need a quote?</h3>
              <p className="mt-2 text-sm text-ink-600">
                Skip the reading and send us your product brief. We will reply
                with next steps.
              </p>
              <Link
                to="/contact"
                className="mt-3 inline-flex h-9 items-center rounded-md bg-brand-600 px-3.5 text-sm font-semibold text-white hover:bg-brand-700"
              >
                Contact sourcing
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section bg="brandSoft">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2
              id="blogpost-cta-title"
              className="text-3xl md:text-4xl font-bold text-ink-900 leading-tight balance"
            >
              Ready to start your sourcing project?
            </h2>
            <p id="blogpost-cta-sub" className="mt-3 text-ink-700">
              Tell us what you need and a sourcing manager will reply within one
              business day.
            </p>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm compact />
          </div>
        </div>
      </Section>
    </div>
  );
}
