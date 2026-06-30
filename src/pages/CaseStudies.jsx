import { useEffect, useRef } from "react";
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from "react-router-dom";
import { Building2, ArrowRight, TrendingUp, DollarSign, Shield, CheckCircle, BarChart3 } from "lucide-react";

const caseStudies = [
  {
    company: "EuroTech GmbH",
    logo: "ET",
    industry: "Industrial Equipment",
    location: "Germany",
    timeline: "4 months",
    challenge: "EuroTech needed precision-machined components for their European machinery line. Their previous Chinese suppliers delivered inconsistent quality with defect rates exceeding 12%. They needed reliable manufacturers capable of meeting strict ISO 2768 standards.",
    solution: "We identified and vetted 8 precision machining factories in Guangdong and Zhejiang provinces. After on-site audits, we shortlisted 3 factories that demonstrated the required CNC capabilities, quality systems, and export experience. We facilitated sample production and negotiated pricing.",
    results: [
      { metric: "Defect Rate Reduction", value: "12% to 1.5%", icon: Shield },
      { metric: "Cost Savings", value: "35% vs European", icon: DollarSign },
      { metric: "Supplier Base", value: "3 Qualified Factories", icon: Building2 },
      { metric: "Delivery", value: "On-time, every order", icon: CheckCircle },
    ],
    quote: "SSourcing China transformed our supply chain. The quality and reliability we now have allows us to compete effectively in the European market.",
    author: "Operations Director, EuroTech GmbH",
  },
  {
    company: "NorthStar Medical",
    logo: "NM",
    industry: "Medical Supplies",
    location: "United States",
    timeline: "6 weeks (urgent)",
    challenge: "NorthStar faced an urgent shortage of certified medical disposables. They needed FDA-compliant manufacturers capable of producing large volumes within a tight 6-week window. Previous suppliers could not meet the compliance requirements.",
    solution: "We leveraged our medical supply network to identify 5 FDA-compliant factories within 48 hours. Our team conducted expedited audits, verified certifications, and coordinated sample approval within 10 days. We monitored production daily and arranged air freight to meet the deadline.",
    results: [
      { metric: "Factories Verified", value: "5 FDA-Compliant", icon: Shield },
      { metric: "Lead Time", value: "45 Days Total", icon: TrendingUp },
      { metric: "Compliance", value: "100% FDA Met", icon: CheckCircle },
      { metric: "Volume Delivered", value: "Full Order", icon: BarChart3 },
    ],
    quote: "Their ability to mobilize quickly and find compliant manufacturers under extreme time pressure was remarkable. We met our supply deadline with zero compliance issues.",
    author: "Supply Chain Manager, NorthStar Medical",
  },
  {
    company: "GreenPack Solutions",
    logo: "GP",
    industry: "Sustainable Packaging",
    location: "Australia",
    timeline: "3 months",
    challenge: "GreenPack needed eco-friendly packaging materials with BPI certification for compostability. They struggled to find Chinese suppliers that could provide certified materials at competitive prices with consistent quality.",
    solution: "We identified 6 manufacturers specializing in biodegradable materials, verified their BPI and TUV certifications, and conducted factory audits to assess production capacity. After sample testing, we negotiated a 22% cost reduction and established a quality assurance protocol.",
    results: [
      { metric: "Cost Reduction", value: "22% Savings", icon: DollarSign },
      { metric: "Certification", value: "BPI Certified", icon: Shield },
      { metric: "Supply Agreement", value: "12-Month Contract", icon: Building2 },
      { metric: "MOQ Reduction", value: "40% Lower", icon: TrendingUp },
    ],
    quote: "SSourcing China found us suppliers we could not have discovered on our own. The certification verification alone saved us months of due diligence.",
    author: "CEO, GreenPack Solutions",
  },
  {
    company: "Atlas Hardware",
    logo: "AH",
    industry: "Building Materials",
    location: "United Kingdom",
    timeline: "5 months",
    challenge: "Atlas Hardware needed to diversify their supply chain for architectural hardware products. They required manufacturers capable of producing to European standards with consistent finishing quality.",
    solution: "We sourced 12 potential suppliers across Guangdong and Zhejiang, conducted comprehensive factory audits focusing on surface finishing capabilities, and coordinated extensive sample testing. We established QC protocols including pre-shipment inspections.",
    results: [
      { metric: "Supplier Options", value: "12 Vetted", icon: Building2 },
      { metric: "Quality Pass Rate", value: "97.5%", icon: Shield },
      { metric: "Cost Improvement", value: "28% Savings", icon: DollarSign },
      { metric: "Lead Time", value: "Reduced by 15%", icon: TrendingUp },
    ],
    quote: "The level of detailed factory reporting and quality control gives us complete confidence in our supply chain. We have since expanded our product range through their network.",
    author: "Procurement Manager, Atlas Hardware",
  },
  {
    company: "Vela Electronics",
    logo: "VE",
    industry: "Consumer Electronics",
    location: "Brazil",
    timeline: "6 months",
    challenge: "Vela Electronics wanted to launch a new line of smart home devices but lacked reliable connections to Chinese electronics manufacturers with competitive pricing and IP protection measures.",
    solution: "We identified 7 electronics manufacturers with NDA and IP protection agreements in place. Our team conducted technical capability assessments, verified RoHS and CE certifications, and facilitated sample development with design-for-manufacturing feedback.",
    results: [
      { metric: "Time to Market", value: "4 Months Faster", icon: TrendingUp },
      { metric: "IP Protection", value: "NDA Enforced", icon: Shield },
      { metric: "BOM Cost", value: "30% Reduction", icon: DollarSign },
      { metric: "Production Scale", value: "10K Units/Month", icon: BarChart3 },
    ],
    quote: "Their knowledge of the electronics manufacturing landscape in China saved us months of trial and error. We launched on schedule with a product that met all our specifications.",
    author: "Founder, Vela Electronics",
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Case Studies
            </h1>
            <p className="text-lg md:text-xl text-navy-200">
              Real projects, real results. See how we have helped businesses across industries source successfully from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {caseStudies.map((cs) => (
            <article key={cs.company} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {cs.logo}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-navy-900">{cs.company}</h2>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span>{cs.industry}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span>{cs.location}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span className="text-amber-600 font-medium">{cs.timeline}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">Challenge</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">Solution</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {cs.results.map((result) => (
                    <div key={result.metric} className="bg-gray-50 rounded-lg p-4 text-center">
                      <result.icon className="w-5 h-5 text-navy-600 mx-auto mb-1" />
                      <div className="text-lg font-bold text-navy-900">{result.value}</div>
                      <div className="text-xs text-gray-500">{result.metric}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-navy-50 rounded-lg p-5 border border-navy-100">
                  <p className="text-navy-700 text-sm italic leading-relaxed mb-2">"{cs.quote}"</p>
                  <p className="text-navy-500 text-xs font-medium">{cs.author}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Start Your Success Story
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Share your sourcing requirements with us and get a customized plan for your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg px-8 py-4 text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}