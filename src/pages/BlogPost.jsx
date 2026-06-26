import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/data/siteData";
import { format } from "date-fns";

const postContent = {
  "verify-factory": {
    title: "How to Verify a Chinese Factory Before Placing an Order",
    content: `
      <p>Verifying a Chinese factory before committing to an order is one of the most important steps in reducing sourcing risk. A professional verification process checks whether the supplier is legally registered, capable of producing your product, and operating with acceptable quality standards.</p>
      <h2>Start with the basics</h2>
      <p>Request a business license, bank account details, and VAT invoice samples. Cross-check the company name and registration number against official government databases. Make sure the legal entity matches the name on contracts and invoices.</p>
      <h2>Assess production capability</h2>
      <p>Ask about production lines, machinery, capacity, and current customers. A legitimate factory should be able to provide photos, videos, or allow a virtual or on-site audit. Be cautious of suppliers that refuse to share facility information.</p>
      <h2>Request samples and certifications</h2>
      <p>Always evaluate product samples before mass production. Check whether the factory holds relevant certifications such as ISO 9001, BSCI, or product-specific compliance documents for your target market.</p>
      <h2>Watch for red flags</h2>
      <p>Be wary of prices that are significantly below market rates, suppliers pushing for large deposits, or companies that only communicate through informal channels. A verified factory will be transparent about terms and willing to sign a clear contract.</p>
    `
  },
  "quality-inspection": {
    title: "Pre-Shipment Inspection: What Buyers Should Know",
    content: `
      <p>A pre-shipment inspection (PSI) is a quality control check performed when production is at least 80% complete. It helps buyers confirm that goods meet specifications before the final payment and shipment.</p>
      <h2>What does a PSI cover?</h2>
      <p>Inspectors typically check product appearance, dimensions, functionality, packaging, labeling, and quantity. They also verify carton markings and perform basic tests relevant to the product category.</p>
      <h2>Why timing matters</h2>
      <p>Conducting the inspection too early may miss late-stage defects. Conducting it too late may leave no time for rework. The ideal window is after most units are packed and ready for shipment.</p>
      <h2>How to interpret results</h2>
      <p>Inspection reports usually classify defects as critical, major, or minor and compare findings against an agreed acceptance quality limit (AQL). Work with your agent to decide whether to ship, rework, or reject the batch.</p>
    `
  },
  "incoterms": {
    title: "Incoterms Explained for First-Time China Buyers",
    content: `
      <p>Incoterms define who is responsible for costs, insurance, and risk at each stage of an international shipment. Choosing the wrong term can lead to unexpected costs or disputes.</p>
      <h2>EXW (Ex Works)</h2>
      <p>The buyer handles everything from the factory door onward. This gives maximum control but also maximum responsibility, including export clearance in China.</p>
      <h2>FOB (Free On Board)</h2>
      <p>The supplier delivers goods to the port and handles export clearance. The buyer takes responsibility once goods are loaded on the vessel. FOB is commonly used for sea freight from China.</p>
      <h2>CIF (Cost, Insurance, and Freight)</h2>
      <p>The supplier pays for freight and insurance to the destination port. However, risk transfers to the buyer once the goods are on the ship, so insurance details should be reviewed carefully.</p>
      <h2>DDP (Delivered Duty Paid)</h2>
      <p>The supplier delivers goods to the buyer's door, including customs clearance and duties. This is convenient but usually comes at a higher cost and requires a reliable logistics partner.</p>
    `
  },
  "negotiate-prices": {
    title: "How to Negotiate Pricing with Chinese Suppliers",
    content: `
      <p>Negotiation in China is about building a relationship while protecting your margins. Approaching it respectfully and with preparation leads to better long-term outcomes.</p>
      <h2>Do your market research</h2>
      <p>Know the typical price range for your product before entering negotiations. Request quotes from multiple suppliers to understand the market floor and what drives cost differences.</p>
      <h2>Focus on total cost</h2>
      <p>Unit price is only one part of the equation. Consider tooling fees, sample costs, packaging, shipping, payment terms, and defect rates when comparing offers.</p>
      <h2>Be clear about specifications</h2>
      <p>Vague requirements lead to vague quotes. Provide detailed product specs, materials, dimensions, colors, and quality standards so suppliers can price accurately.</p>
      <h2>Build for the long term</h2>
      <p>Suppliers are more flexible with buyers they trust. Be transparent about expected volumes, payment reliability, and repeat business potential.</p>
    `
  },
  "moq": {
    title: "Understanding MOQ and How to Lower It",
    content: `
      <p>Minimum order quantity (MOQ) is a common concern for smaller buyers. Suppliers set MOQs to cover setup costs, material purchases, and production efficiency.</p>
      <h2>Why MOQs exist</h2>
      <p>Factories need to justify machine setup, labor allocation, and raw material orders. Lower quantities often mean higher per-unit costs because these fixed costs are spread over fewer items.</p>
      <h2>Ways to reduce MOQ</h2>
      <p>Consider paying a slightly higher unit price, combining orders with standard colors or materials, using existing molds, or negotiating a trial order with a commitment to larger follow-up volumes.</p>
      <h2>When to accept a higher MOQ</h2>
      <p>If a product is highly customized or requires special tooling, a higher MOQ may be reasonable. Evaluate the total investment and your sales forecast before committing.</p>
    `
  },
  "payment-terms": {
    title: "Safe Payment Terms When Sourcing from China",
    content: `
      <p>Payment terms are one of the biggest risk factors in international sourcing. Balancing supplier trust with buyer protection is essential.</p>
      <h2>T/T (Telegraphic Transfer)</h2>
      <p>The most common method. A typical structure is 30% deposit before production and 70% before shipment. Never pay 100% upfront with a new supplier.</p>
      <h2>Letter of Credit (L/C)</h2>
      <p>A bank guarantees payment once documents are presented. This offers more security for large orders but involves fees and strict documentation requirements.</p>
      <h2>PayPal and escrow</h2>
      <p>Useful for small sample payments or first orders. These methods offer buyer protection but usually come with higher fees that suppliers may pass on.</p>
      <h2>Best practices</h2>
      <p>Use clear contracts, tie final payments to inspection results, and start with smaller trial orders before scaling up. A sourcing agent can help manage payment milestones.</p>
    `
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);
  const content = postContent[id];

  if (!post || !content) {
    return (
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Article not found</h1>
            <p className="text-slate-600 mb-8">The article you are looking for does not exist.</p>
            <Link to="/blog">
              <Button variant="outline">Back to Blog</Button>
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <div>
      <section className="bg-slate-900 py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 text-sm text-slate-300 mb-4">
              <span className="font-semibold text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {format(new Date(post.date), "MMMM d, yyyy")}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-blue-800"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-slate-600 mb-4">
                Need help applying this advice to your sourcing project?
              </p>
              <Link to="/contact">
                <Button>Get a Free Sourcing Quote</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
