import React from 'react';
import { Coffee, Heart, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: '精选咖啡豆',
      description: '我们从世界各地精选最优质的咖啡豆，确保每一杯咖啡都有独特的风味和香气。'
    },
    {
      icon: Heart,
      title: '用心制作',
      description: '每一杯咖啡都由经验丰富的咖啡师精心制作，注入我们对咖啡的热爱和专业技艺。'
    },
    {
      icon: Award,
      title: '品质保证',
      description: '严格的品质控制流程，从咖啡豆的选择到最终的制作，我们始终坚持最高标准。'
    },
    {
      icon: Users,
      title: '温馨服务',
      description: '友善的服务团队，舒适的环境，让每一位顾客都能享受到宾至如归的体验。'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            关于香浓咖啡屋
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            自2010年成立以来，我们一直致力于为咖啡爱好者提供最优质的咖啡体验。
            我们相信，一杯好咖啡不仅仅是饮品，更是生活中的美好时光。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              我们的故事
            </h3>
            <p className="text-gray-600 mb-4">
              香浓咖啡屋始于一个简单的梦想：为每一位顾客提供完美的咖啡体验。
              我们的创始人在环游世界品尝各地咖啡后，决定将这些美妙的味道带回家乡。
            </p>
            <p className="text-gray-600 mb-4">
              经过多年的发展，我们已经成为本地最受欢迎的咖啡店之一。
              我们不仅提供优质的咖啡，更创造了一个让人们聚会、工作和放松的温馨空间。
            </p>
            <p className="text-gray-600">
              今天，我们继续秉承初心，用最好的咖啡豆、最精湛的技艺和最真诚的服务，
              为每一位顾客带来难忘的咖啡体验。
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop"
              alt="咖啡店内景"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;