import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import SectionHeading from "@/components/shared/SectionHeading";
import HelmetSEO from "@/components/shared/HelmetSEO";

const posts = [
  {
    category: "Sourcing Basics",
    title: "How to Choose a Reliable Manufacturer in China",
    excerpt:
      "Look beyond Alibaba rankings. Here are the key credentials, audit points, and red flags to check before signing a contract.",
    date: "July 20, 2026",
    slug: "choose-reliable-manufacturer-china",
  },
  {
    category: "Quality Control",
    title: "A Practical Guide to Pre-Shipment Inspections",
    excerpt:
      "What happens during a PSI, what AQL levels mean, and how to read an inspection report so you can accept or reject a shipment.",
    date: "July 12, 2026",
    slug: "pre-shipment-inspection-guide",
  },
  {
    category: "Logistics",
    title: "Understanding Incoterms When Buying from China",
    excerpt:
      "FOB, CIF, DDP — which term makes sense for your order? We break down cost, risk, and control for common shipping terms.",
    date: "June 28, 2026",
    slug: "incoterms-buying-china",
  },
  {
    category: "Negotiation",
    title: "How to Negotiate Payment Terms with Chinese Suppliers",
    excerpt:
      "Protect your deposit, reduce risk at mass production, and structure payments that keep both sides accountable.",
    date: "June 15, 2026",
    slug: "negotiate-payment-terms-china",
  },
  {
    category: "Compliance",
    title: "Product Certifications You May Need for Your Market",
    excerpt:
      "CE, FCC, RoHS, REACH, FDA — an overview of common certifications and how to coordinate testing with your supplier.",
    date: "May 30, 2026",
    slug: "product-certifications-guide",
  },
  {
    category: "Strategy",
    title: "When to Use a Sourcing Agent vs. Buying Direct",
    excerpt:
      "A clear comparison of costs, control, and risk to help you decide whether to manage suppliers yourself or work with a partner.",
    date: "May 18, 2026",
    slug: "sourcing-agent-vs-direct",
  },
];

export default function Blog() {
  return (
    <>
      <HelmetSEO
        title="Blog | China Sourcing Insights | SSourcing China"
        description="Practical guides and insights on sourcing from China: supplier selection, quality control, Incoterms, payments, certifications, and more."
      />

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
            <p className="mt-4 text-lg text-slate-300">
              Practical guides for buyers sourcing from China. No fluff, just actionable advice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Latest Articles"
            title="Sourcing knowledge, simplified"
            description="Browse articles on supplier selection, inspections, shipping, and negotiation."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.slug} className="flex flex-col transition-shadow hover:shadow-md">
                <CardHeader>
                  <Badge variant="primary" className="w-fit">
                    {post.category}
                  </Badge>
                  <CardTitle className="mt-3">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="flex-1 text-slate-600">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-slate-50 p-8 text-center lg:p-12">
            <h3 className="text-2xl font-bold text-slate-900">Have a sourcing question?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Our team is happy to point you in the right direction. Send us your question and we will get back to you.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Ask Us Anything <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
