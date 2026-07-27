import { Link } from 'react-router-dom';
import { AlertTriangle, ThumbsDown, AlertCircle, Clock, DollarSign, MessageSquare, CheckCircle } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    problem: "Unverified Suppliers",
    description: "Risk of working with fraudulent or unreliable manufacturers",
    solution: "We conduct thorough factory audits and verify business credentials",
  },
  {
    icon: ThumbsDown,
    problem: "Quality Issues",
    description: "Products arrive damaged, defective, or not matching specifications",
    solution: "Multi-stage QC inspections following international AQL standards",
  },
  {
    icon: AlertCircle,
    problem: "Hidden Costs",
    description: "Unexpected fees, MOQs, and price increases during production",
    solution: "Transparent pricing with detailed cost breakdowns upfront",
  },
  {
    icon: Clock,
    problem: "Communication Barriers",
    description: "Language differences and time zone challenges with suppliers",
    solution: "Dedicated account managers fluent in English and Mandarin",
  },
  {
    icon: DollarSign,
    problem: "Shipping Complexities",
    description: "Complicated logistics, customs issues, and delivery delays",
    solution: "End-to-end logistics support with freight forwarding expertise",
  },
  {
    icon: MessageSquare,
    problem: "No Production Visibility",
    description: "Little insight into production progress and potential issues",
    solution: "Regular updates and detailed production reports throughout",
  },
];

const ProblemsSection = () => {
  return (
    <section className="section-spacing bg-neutral-900 text-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            Common Sourcing Challenges
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Solve Your China Sourcing Problems
          </h2>
          <p className="text-lg text-neutral-400">
            Don't let these common challenges stop you from sourcing from China. We have the expertise to overcome them.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.problem}
                className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 hover:border-primary-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.problem}
                  </h3>
                </div>
                
                <p className="text-neutral-400 text-sm mb-4">
                  {item.description}
                </p>
                
                <div className="pt-4 border-t border-neutral-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    <p className="text-accent-400 text-sm">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/contact" className="btn-accent text-lg px-8 py-4">
            Get Help With Your Sourcing Challenges
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
