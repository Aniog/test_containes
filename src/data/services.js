import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  PackageCheck,
} from "lucide-react"

export const services = [
  {
    id: "supplier-sourcing",
    icon: Search,
    title: "Supplier Sourcing",
    summary:
      "We identify and shortlist manufacturers that match your product, budget, and volume requirements.",
    points: [
      "Database of vetted factories across major industries",
      "Side-by-side comparison of price, MOQ, and capacity",
      "Direct negotiation on your behalf",
    ],
  },
  {
    id: "factory-verification",
    icon: ShieldCheck,
    title: "Factory Verification",
    summary:
      "On-site and documentary audits to confirm a supplier is real, capable, and legally registered.",
    points: [
      "Business license and export qualification checks",
      "On-site factory visits with photo and video reports",
      "Production capacity and equipment assessment",
    ],
  },
  {
    id: "quality-inspection",
    icon: ClipboardCheck,
    title: "Quality Inspection",
    summary:
      "Independent QC checks at every key stage so defects are caught before shipment.",
    points: [
      "Pre-production, in-line, and pre-shipment inspection",
      "AQL-based sampling to international standards",
      "Detailed inspection reports with measurements and photos",
    ],
  },
  {
    id: "production-follow-up",
    icon: Factory,
    title: "Production Follow-Up",
    summary:
      "We track your order from deposit to delivery and keep you informed of real progress.",
    points: [
      "Scheduled progress updates and milestone tracking",
      "Early warning on delays or specification deviations",
      "Direct communication with the factory floor",
    ],
  },
  {
    id: "shipping-coordination",
    icon: Ship,
    title: "Shipping Coordination",
    summary:
      "Consolidation, freight booking, and customs documentation handled end to end.",
    points: [
      "Sea, air, and express freight comparison and booking",
      "Cargo consolidation from multiple suppliers",
      "Customs paperwork and tracking to your destination",
    ],
  },
  {
    id: "order-management",
    icon: PackageCheck,
    title: "Order Management",
    summary:
      "A single point of contact that manages the full order lifecycle for you.",
    points: [
      "One coordinator across suppliers, QC, and logistics",
      "Transparent documentation and record keeping",
      "Issue resolution and claim support",
    ],
  },
]
