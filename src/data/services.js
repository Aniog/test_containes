import {
  Search,
  Factory,
  ClipboardCheck,
  PackageCheck,
  ShipWheel,
  Truck,
} from "lucide-react"

export const services = [
  {
    id: "supplier-sourcing",
    icon: Search,
    title: "Supplier Sourcing & Shortlisting",
    description:
      "We identify and shortlist qualified suppliers across China based on your product specs, target price, and order volume - not just whoever appears first on B2B platforms.",
    points: [
      "Multi-supplier comparison with transparent quotes",
      "Real factory pricing, not trading-company markups",
      "NDA-protected sourcing for custom products",
    ],
  },
  {
    id: "factory-verification",
    icon: Factory,
    title: "Factory Verification & Audit",
    description:
      "Before you commit, we verify the factory is real, capable, and legally registered. On-site audits confirm capacity, equipment, and working conditions.",
    points: [
      "Business license & registration checks",
      "On-site capacity and capability audit",
      "Production line and QC system review",
    ],
  },
  {
    id: "quality-inspection",
    icon: ClipboardCheck,
    title: "Quality Inspection (QC)",
    description:
      "Independent third-party inspection at every critical stage - incoming materials, during production, and pre-shipment - with detailed photo and video reports.",
    points: [
      "AQL-based pre-shipment inspection (PSI)",
      "During-production inspection (DUPRO)",
      "Detailed report with photos and video within 24h",
    ],
  },
  {
    id: "production-follow-up",
    icon: PackageCheck,
    title: "Production Follow-Up",
    description:
      "We follow your order through every milestone so delays and defects are caught early, not after the ship date. You get regular status updates in plain language.",
    points: [
      "Milestone tracking from PO to ex-warehouse",
      "Early warning on delays and quality risks",
      "Weekly progress reports with evidence",
    ],
  },
  {
    id: "shipping-coordination",
    icon: ShipWheel,
    title: "Shipping & Logistics Coordination",
    description:
      "We coordinate freight forwarding, consolidation, customs documents, and delivery to your destination port or warehouse - by sea, air, rail, or express.",
    points: [
      "Sea, air, rail and express freight options",
      "Multi-supplier consolidation to cut cost",
      "Full export & customs documentation",
    ],
  },
  {
    id: "warehouse-consolidation",
    icon: Truck,
    title: "Warehousing & Consolidation",
    description:
      "Hold goods from different suppliers in our warehouse, re-pack, relabel, and consolidate into one shipment to reduce your landed cost and simplify receiving.",
    points: [
      "Short-term storage and quality holding",
      "Repackaging, relabeling and kitting",
      "Consolidated shipment with one tracking number",
    ],
  },
]

export default services
