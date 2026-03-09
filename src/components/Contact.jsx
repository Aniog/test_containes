import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: '地址',
      content: '北京市朝阳区咖啡街123号'
    },
    {
      icon: Phone,
      title: '电话',
      content: '+86 138-0000-0000'
    },
    {
      icon: Mail,
      title: '邮箱',
      content: 'info@coffeehouse.com'
    },
    {
      icon: Clock,
      title: '营业时间',
      content: '周一至周日 7:00 - 22:00'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            联系我们
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            欢迎来到香浓咖啡屋！我们期待为您提供最优质的咖啡体验。
            如有任何问题或建议，请随时与我们联系。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600">
                  {info.content}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 联系表单 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              给我们留言
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="请输入您的姓名"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="请输入您的邮箱"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  电话
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="请输入您的电话号码"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  留言
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="请输入您的留言内容"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors duration-300 font-medium"
              >
                发送留言
              </button>
            </form>
          </div>

          {/* 地图区域 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              找到我们
            </h3>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>地图位置</p>
                <p className="text-sm">北京市朝阳区咖啡街123号</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-amber-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">交通指南</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 地铁：1号线咖啡站A出口，步行5分钟</li>
                <li>• 公交：123路、456路咖啡街站下车</li>
                <li>• 自驾：店铺提供免费停车位</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;