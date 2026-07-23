import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: '听力损失可以治愈吗？',
    a: '这取决于听力损失的类型和原因。传导性听力损失（如耳垢堵塞、中耳炎）通常可以通过医疗手段治愈。感音神经性听力损失（如噪音损伤、老年性耳聋）目前尚无法完全治愈，但可以通过助听器、人工耳蜗等设备有效改善。',
  },
  {
    q: '如何判断自己是否有听力问题？',
    a: '常见症状包括：需要别人重复说话、在嘈杂环境中难以理解对话、将电视音量调得很高、经常听不到门铃或电话、耳鸣（耳朵里有嗡嗡声）等。如果您有这些症状，建议尽快进行专业听力检查。',
  },
  {
    q: '助听器适合所有类型的听力损失吗？',
    a: '助听器主要适用于感音神经性听力损失和部分混合性听力损失。对于传导性听力损失，通常优先考虑医疗或手术治疗。助听器的选择需要根据听力图结果、生活方式和个人需求由专业听力师来决定。',
  },
  {
    q: '儿童听力损失有哪些早期迹象？',
    a: '婴幼儿：对声音没有反应、不会转向声源、语言发育迟缓。学龄儿童：上课注意力不集中、频繁要求重复、学习成绩下降、说话声音过大。如发现这些迹象，应立即带孩子进行听力检查。',
  },
  {
    q: '耳鸣是听力损失的信号吗？',
    a: '耳鸣（耳朵里持续的嗡嗡声、嘶嘶声或铃声）可能是听力损失的早期信号，也可能由其他原因引起（如高血压、某些药物、压力等）。持续性耳鸣应及时就医检查，以排除潜在的听力问题。',
  },
  {
    q: '多大年龄应该开始关注听力健康？',
    a: '听力保护应该从出生就开始。新生儿应接受听力筛查；儿童和青少年应避免长时间高音量使用耳机；成年人应定期检查，尤其是在噪音环境工作者；50岁以上人群应每年进行听力检查，因为老年性听力下降通常从这个年龄段开始。',
  },
  {
    q: '戴耳机会损害听力吗？',
    a: '不当使用耳机确实会损害听力。关键风险因素是音量过高和使用时间过长。遵循"60/60原则"（音量不超过60%，每次不超过60分钟）可以大大降低风险。入耳式耳机比头戴式耳机风险更高，因为声音直接传入耳道。',
  },
  {
    q: '听力检查需要多长时间，痛苦吗？',
    a: '标准听力检查（纯音测听）通常需要30-60分钟，完全无痛。检查包括：外耳检查、鼓膜检查、纯音测听（戴耳机听不同频率和音量的声音）等。检查结果会以听力图的形式呈现，帮助医生评估您的听力状况。',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            常见问题
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            您最关心的问题
          </h2>
          <p className="text-lg text-slate-600">
            关于听力健康，这些是大家最常问到的问题。
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                openIdx === idx ? 'border-cyan-200 shadow-md' : 'border-slate-100 shadow-sm'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-semibold text-slate-800 pr-4 text-sm md:text-base">
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                  openIdx === idx ? 'bg-cyan-100 text-cyan-600' : 'bg-slate-100 text-slate-500'
                }`}>
                  {openIdx === idx ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">{faq.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
