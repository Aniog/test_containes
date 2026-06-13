import { Settings, ShieldCheck, Zap, Gauge } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "High-Speed Operation",
      description: "Our double folders are engineered for maximum throughput without compromising on precision, significantly reducing production time."
    },
    {
      icon: <Gauge className="w-8 h-8 text-blue-600" />,
      title: "Pinpoint Accuracy",
      description: "CNC-controlled bending sequences ensure every angle is exact, minimizing material waste and eliminating manual rework."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Robust Durability",
      description: "Constructed from heavy-duty steel and premium components to withstand continuous industrial use year after year."
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: "Intuitive Interface",
      description: "User-friendly touchscreens make programming complex profiles simple, requiring minimal training for new operators."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose ARTITECT?</h2>
          <p className="text-lg text-slate-600">
            Industry-leading technology combined with reliable craftsmanship to elevate your metal fabrication capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl border border-slate-100 transition-all hover:shadow-md hover:border-slate-200">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
