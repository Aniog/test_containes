import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import CtaButton from "@/components/shared/CtaButton";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

const posts = {
  "how-to-verify-a-chinese-factory": {
    title: "How to Verify a Chinese Factory Before Placing an Order",
    date: "July 15, 2026",
    author: "SSourcing Team",
    category: "Factory Verification",
    readTime: "6 min read",
    content: [
      "Finding a supplier online is easy. Confirming that the supplier is a real, capable manufacturer takes more work. Factory verification is one of the most effective ways to reduce sourcing risk before you send a deposit.",
      "Start by requesting basic business documents. A legitimate factory should be able to provide a business license, export license, and VAT invoice samples. Cross-check the business name and registration number against public records where possible.",
      "Next, confirm production capacity. Ask about total employees, production lines, shift patterns, and average monthly output. Request photos or video of the workshop, machinery, and quality control area. If the factory refuses or provides only generic images, treat it as a warning sign.",
      "Certifications matter if your market requires them. Ask for ISO 9001, BSCI, or product-specific certificates, then verify the certificate numbers with the issuing body. Fake certificates are common.",
      "Whenever possible, conduct an on-site audit or hire a third party to do so. A physical visit reveals things that documents and video calls cannot: actual working conditions, equipment age, order volume, and the general organization of the facility.",
      "Finally, check references. Ask for two or three current overseas clients and contact them directly. If the factory cannot provide references, proceed with caution.",
      "At SSourcing China, factory verification is a core part of our service. We provide documented audits, risk assessments, and recommendations so you can place orders with confidence.",
    ],
  },
  "pre-shipment-inspection-basics": {
    title: "Pre-Shipment Inspection: What Buyers Should Know",
    date: "July 8, 2026",
    author: "SSourcing Team",
    category: "Quality Control",
    readTime: "5 min read",
    content: [
      "A pre-shipment inspection (PSI) is a quality check performed when production is at least 80% complete and goods are packed for shipment. It is the last major opportunity to identify problems before goods leave the factory.",
      "During a PSI, inspectors typically check product appearance, dimensions, functionality, packaging, labeling, and quantity. Samples are selected randomly according to an accepted sampling plan such as ANSI/ASQ Z1.4, usually at General Inspection Level II with AQL limits.",
      "The inspection result should be documented with photos, measurements, and a clear pass, fail, or pending conclusion. If defects are found, the buyer can request rework, a discount, or cancel the shipment depending on the contract terms.",
      "Common mistakes include booking the inspection too late, not defining acceptance criteria in advance, and relying on the factory's own QC team. An independent inspection gives you objective evidence and stronger negotiating power.",
      "Pre-shipment inspection is not a guarantee that every unit will be perfect, but it significantly reduces the risk of receiving a container full of defective products.",
    ],
  },
  "incoterms-for-china-sourcing": {
    title: "Incoterms Explained for Buyers Sourcing from China",
    date: "June 28, 2026",
    author: "SSourcing Team",
    category: "Shipping",
    readTime: "7 min read",
    content: [
      "Incoterms define who pays for transport, insurance, duties, and risk at each stage of an international shipment. Choosing the wrong term can create confusion and unexpected costs.",
      "EXW means the buyer collects goods from the factory and arranges everything else. It gives maximum control but also maximum responsibility. FOB means the supplier delivers goods to the port and clears export customs; the buyer pays ocean freight and import costs.",
      "CIF includes freight and insurance to the destination port, but risk transfers to the buyer once goods are loaded on the vessel. DDP means the supplier delivers to the buyer's door, including duties and taxes.",
      "For most buyers sourcing from China, FOB is a good balance of cost and control. DDP is convenient but usually more expensive. EXW should only be used if you have a strong freight forwarder in China.",
      "Always confirm the named place of delivery, such as FOB Shenzhen or DDP Los Angeles, and make sure the quote matches the Incoterm. Misaligned terms are a common cause of disputes.",
    ],
  },
  "negotiating-payment-terms": {
    title: "Negotiating Payment Terms with Chinese Suppliers",
    date: "June 20, 2026",
    author: "SSourcing Team",
    category: "Sourcing Strategy",
    readTime: "6 min read",
    content: [
      "Payment terms are a key part of supplier negotiations. The right structure protects your cash flow while giving the supplier enough confidence to start production.",
      "A common structure is 30% deposit before production and 70% against copy of bill of lading. For larger orders or new suppliers, consider paying the balance only after pre-shipment inspection passes.",
      "Avoid paying 100% in advance unless you have an established relationship. If a supplier demands full prepayment, it may indicate financial stress or inexperience with export buyers.",
      "Letters of credit provide strong protection but add cost and paperwork. They are most useful for large orders where neither party fully trusts the other yet. Telegraphic transfer remains the standard for small to medium orders.",
      "Always specify payment terms clearly in the purchase order and proforma invoice. Include conditions for delay, defects, and cancellation to protect both sides.",
    ],
  },
  "red-flags-supplier-scams": {
    title: "Red Flags That a Supplier May Not Be Reliable",
    date: "June 12, 2026",
    author: "SSourcing Team",
    category: "Risk Management",
    readTime: "5 min read",
    content: [
      "Most Chinese suppliers are legitimate businesses, but every buyer should know the warning signs of a risky or fraudulent contact.",
      "Be cautious if the contact uses a free email domain such as Gmail or Yahoo for business communication. Real factories typically use a company domain email address.",
      "A supplier that refuses to provide a business license, company address, or fixed-line phone number should be treated with suspicion. Scammers often avoid giving verifiable details.",
      "Unusually low prices are another red flag. If a quote is far below the market rate, the supplier may be planning to substitute materials, deliver poor quality, or disappear after receiving payment.",
      "Pressure to pay quickly, especially to a personal bank account or a company name that does not match the business name, is a serious warning. Always verify banking details before transferring funds.",
      "Taking time to verify a supplier upfront is far less expensive than dealing with defective goods, missed deadlines, or lost deposits later.",
    ],
  },
  "product-sampling-process": {
    title: "The Product Sampling Process from Start to Finish",
    date: "June 5, 2026",
    author: "SSourcing Team",
    category: "Sourcing Process",
    readTime: "6 min read",
    content: [
      "Sampling is a critical step before mass production. It confirms that the supplier understands your requirements and can produce the product to your standard.",
      "Start with a detailed specification sheet. Include dimensions, materials, colors, finishes, packaging, labeling, and acceptable tolerances. Photos and reference samples help reduce misunderstanding.",
      "Request a pre-production sample based on your spec. This sample represents the supplier's interpretation of your requirements. Evaluate it carefully against every criterion.",
      "If changes are needed, document them in writing and request a revised sample. Keep track of sample versions so there is no confusion about which version was approved.",
      "Once the sample is approved, use it as the production reference. Include photos and measurements in the purchase order, and make clear that mass production must match the approved sample.",
      "Be aware that some suppliers may charge for samples and international courier fees. This is normal. For expensive products, consider negotiating a sample cost credit against the first order.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const post = posts[slug];

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-medium mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="inline-block text-xs font-semibold tracking-wider text-teal-400 uppercase mb-3">{post.category}</span>
          <h1 id="post-title" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-slate-100 mb-10">
            <img
              data-strk-img-id={`post-img-${slug}`}
              data-strk-img="[post-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="prose prose-lg prose-slate max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-slate-700 leading-relaxed mb-6">{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Need help with your sourcing project?</h3>
            <p className="text-slate-600 mb-6">Our team can support supplier verification, quality control, and production management in China.</p>
            <CtaButton to="/contact">Get a Free Sourcing Quote</CtaButton>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
