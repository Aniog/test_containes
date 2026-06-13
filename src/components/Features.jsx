import React from 'react';
import { Target, Zap, ShieldCheck, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Unmatched Precision",
      description: "Our double folders utilize advanced CNC technology to ensure exact bends every time, reducing material waste."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "High Efficiency",
      description: "Automated double folding processes significantly increase your workshop's throughput compared to traditional methods."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Built to Last",
      description: "Constructed with premium industrial-grade steel and components, designed for decades of reliable service."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "User-Friendly Interface",
      description: "Despite their capability, Artitect machines feature an elegant, intuitive touchscreen OS that minimizes training time."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="features-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Artitect Metal Folders?
            </h2>
            <p id="features-desc" className="text-lg text-gray-600 mb-8">
              We don't just build machinery; we engineer elegant solutions for complex metal fabrication challenges. Our double folding machines represent the pinnacle of modern manufacturing technology.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg inline-block self-start">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              data-strk-img-id="features-image-xyz"
              data-strk-img="[features-title] [features-desc]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800&h=1200"
              alt="Engineering Precision"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;