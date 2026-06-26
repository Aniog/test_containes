// Sample blog posts for the SSourcing China site.
// Copy is intentionally practical and short — the way our buyers prefer to read.

export const BLOG_POSTS = [
  {
    slug: "how-to-verify-a-china-factory-before-your-first-order",
    title: "How to verify a China factory before your first order",
    excerpt:
      "A practical 7-step checklist for overseas buyers who want to confirm a factory is real, capable and export-ready before sending a deposit.",
    category: "Supplier Sourcing",
    date: "2026-04-22",
    readTime: "6 min read",
    imgId: "sourcingBlogSupplier5c1d",
    imgAlt: "Factory meeting room with supplier representative",
    body: [
      "Finding a supplier online is easy. Knowing whether they actually run a factory — and whether that factory can deliver your product on time, at the right quality — is the hard part.",
      "Over the years we've built a 7-step verification checklist that we use before we recommend any supplier to a buyer. Most of these steps you can do yourself; some are easier with someone on the ground in China.",
      "Step 1 — Confirm the business license. Ask for the supplier's business license (营业执照) and verify the company name, registration number and legal representative on the National Enterprise Credit Information Publicity System. The address on the license should match what the supplier has told you.",
      "Step 2 — Check export history. Ask for export records: HS codes shipped, destination countries and recent buyer references. A factory with no export experience often struggles with documentation, packaging and Incoterms.",
      "Step 3 — Verify production capacity. Equipment count, shift patterns and workforce size should match your order quantity. A factory with 30 workers is unlikely to deliver 100,000 units in 30 days, no matter what they tell you.",
      "Step 4 — Visit in person (or send someone you trust). A photo audit is useful, but only an on-site visit really shows whether the factory is active, organised and capable.",
      "Step 5 — Test communication responsiveness. Send a technical question by email and time the reply. If they take 4 days to answer a sample request, your production updates will be just as slow.",
      "Step 6 — Request and test samples. Even if you're happy with the price, pay for samples and inspect them. If the sample quality is poor, the bulk quality will not be better.",
      "Step 7 — Use an NDA before sharing specifications. Your product spec is intellectual property. A reputable factory will sign your NDA without complaint.",
      "If any step fails — particularly steps 1, 4 or 6 — walk away. There are plenty of capable factories in China. You don't need to settle for a risky one.",
    ],
  },
  {
    slug: "aql-quality-inspection-explained-for-overseas-buyers",
    title: "AQL quality inspection explained for overseas buyers",
    excerpt:
      "What AQL actually means, which levels to choose, and how to read a pre-shipment inspection report so you can make decisions with confidence.",
    category: "Quality Control",
    date: "2026-03-10",
    readTime: "8 min read",
    imgId: "sourcingBlogQcReport8f3a",
    imgAlt: "Quality inspector with clipboard reviewing a finished product",
    body: [
      "AQL — Acceptable Quality Level — is the most common standard used for pre-shipment inspections in China. It tells you how many defects are acceptable in a randomly sampled batch. Used well, it protects you from bad shipments without rejecting perfectly good ones.",
      "How AQL works. The inspector randomly selects a sample size based on your order quantity. Each sampled unit is inspected for defects. The defects are classified as critical, major or minor. The batch passes if the number of defects falls within the AQL limits you've chosen.",
      "Choosing your AQL level. Most consumer products use AQL 2.5 for major defects and 4.0 for minor. For higher-risk products (electronics, baby items, anything safety-related), buyers often tighten to AQL 1.5 / 2.5. AQL 0 is sometimes used for critical defects — meaning even one critical defect rejects the batch.",
      "Sample size and inspection level. The sample size is determined by the order quantity and the inspection level (typically General Level II). For a 5,000-unit order, the sample is 200 units. For 20,000 units, it's 315. Your inspector should follow ISO 2859-1.",
      "How to read a pre-shipment inspection report. Look for: total units produced, units offered for inspection, sample size, number of defects by category, photos of every defect found, and a clear pass / fail / pending verdict. If the report says 'pending', ask the inspector what needs to happen before it can be passed.",
      "What AQL does not cover. AQL sampling cannot detect every defect in every unit. It's a statistical tool. For very high-risk products, you may also want a 100% inspection or a separate function test on every unit.",
      "When to inspect. Three standard checkpoints: pre-production (PPI) to catch material issues early, during production (DUPRO) at 20–40% completion, and pre-shipment (PSI) when 100% of goods are finished and at least 80% packed.",
      "Working with your inspector. The best results come when you share your own quality standards up front — defect definitions, packaging requirements, labelling rules — so the inspector can apply them consistently.",
      "A good inspection report is the difference between 'I hope this is OK' and 'I know this is OK'. Worth the investment every time.",
    ],
  },
]

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}