import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    id: 'faq1',
    question: '每天应该刷几次牙？',
    answer: '建议每天至少刷牙两次——早晨起床后和晚上睡觉前。晚上睡前刷牙尤为重要，因为睡眠期间唾液分泌减少，口腔自洁能力下降，细菌更容易繁殖。每次刷牙时间不少于2分钟。',
  },
  {
    id: 'faq2',
    question: '电动牙刷比普通牙刷更好吗？',
    answer: '电动牙刷在清洁效果上通常优于手动牙刷，尤其对于手部灵活性较差的人群（如老人、儿童）更为适合。但关键在于正确的刷牙方法，无论使用哪种牙刷，都需要覆盖所有牙面，并保证足够的刷牙时间。',
  },
  {
    id: 'faq3',
    question: '牙齿变黄怎么办？',
    answer: '牙齿变黄可能由多种原因引起：食物色素（咖啡、茶、红酒）、吸烟、年龄增长或牙釉质磨损。日常可使用美白牙膏辅助，定期洁牙去除牙结石。如需更显著效果，可咨询牙医进行专业美白治疗。',
  },
  {
    id: 'faq4',
    question: '多久需要看一次牙医？',
    answer: '建议健康成人每6个月进行一次口腔检查和专业洁牙。儿童、老人或有口腔疾病史的人群可能需要每3-4个月检查一次。定期检查能早期发现龋齿、牙周病等问题，避免病情加重。',
  },
  {
    id: 'faq5',
    question: '儿童什么时候开始刷牙？',
    answer: '从第一颗乳牙萌出（约6个月）就应开始清洁。0-2岁可用湿纱布或婴儿牙刷轻轻擦拭；2-6岁使用儿童牙刷和少量含氟牙膏（豌豆大小）；6岁以上可逐渐学习独立刷牙，但家长仍需监督。',
  },
  {
    id: 'faq6',
    question: '牙龈出血是正常的吗？',
    answer: '牙龈出血通常不正常，可能是牙龈炎或牙周病的早期信号。刷牙或使用牙线时偶尔轻微出血，可能是因为刷牙力度过大或牙线使用不当。如果持续出血，应及时就医检查，排除牙周疾病。',
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            常见问题
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            您最关心的口腔问题
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            我们整理了用户最常问的口腔健康问题，为您提供专业解答
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-blue-200 bg-blue-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-blue-200 hover:shadow-sm'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-base md:text-lg ${isOpen ? 'text-blue-700' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="h-px bg-blue-200 mb-4" />
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-8 md:p-10">
          <h3 className="text-2xl font-extrabold text-white mb-3">还有其他问题？</h3>
          <p className="text-blue-100 mb-6">我们的专业口腔健康顾问随时为您解答</p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 rounded-full px-8 py-3 font-bold hover:bg-blue-50 transition-colors shadow-lg"
          >
            立即咨询
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
